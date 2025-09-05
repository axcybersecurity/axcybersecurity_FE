# main.py
import os, requests, urllib3
from urllib.parse import quote
import unicodedata, re
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import StreamingResponse

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# NAS 접속 정보는 환경변수에서만 읽기(코드/프론트에 노출 X).
NAS  = os.getenv("NAS_BASE_URL", "").rstrip("/")
USER = os.getenv("NAS_USER")
PASS = os.getenv("NAS_PASS")

# Fastapi 통신용
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 필요시 도메인 제한
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

sess = requests.Session()
SYNO_TOKEN = None          # NAS와 연결시 생성되는 토큰
AUTH_VER   = 6             # 버전(신경X)
TIMEOUT    = 30            # 30분

# 한글/특수문자 제거해서 ASCII 대체 파일명 만들기
def _ascii_fallback(name: str) -> str:
    nfkd = unicodedata.normalize("NFKD", name)
    ascii_name = nfkd.encode("ascii", "ignore").decode("ascii")
    ascii_name = re.sub(r"[^A-Za-z0-9._-]", "_", ascii_name) or "download"
    return ascii_name


def _require_env():
    if not NAS or not USER or not PASS:
        raise RuntimeError("환경변수 NAS_BASE_URL / NAS_USER / NAS_PASS 가 필요합니다.")

# NAS와 호환하는 API
def _discover_versions():
    r = sess.get(f"{NAS}/webapi/query.cgi", params={
        "api":"SYNO.API.Info",
        "version":"1",
        "method":"query",
        "query":"SYNO.API.Auth,SYNO.FileStation"
    }, headers={"Accept":"application/json"}, verify=False, timeout=10)
    try:
        info = r.json()["data"]["SYNO.API.Auth"]
        return min(info.get("maxVersion", AUTH_VER), AUTH_VER)
    except Exception:
        head = (r.text or "")[:200]
        raise RuntimeError(f"query.cgi 비정상: status={r.status_code}, ctype={r.headers.get('Content-Type')}, body='{head}'")

def syno_login():
    global SYNO_TOKEN, AUTH_VER
    _require_env()
    AUTH_VER = _discover_versions()

    # 로그인 폼 데이터: 계정/비번 + FileStation 세션 + 토큰 발급 요청
    data = {"account": USER, "passwd": PASS, "session": "FileStation", "format": "cookie", "enable_syno_token": "yes"}

    # entry.cgi에 POST로 로그인 (반드시 JSON 받도록 Accept 지정, 리다이렉트 금지)
    r = sess.post(
        f"{NAS}/webapi/entry.cgi",
        params={"api":"SYNO.API.Auth","version":AUTH_VER,"method":"login"},
        data=data,
        headers={"Accept":"application/json"},
        verify=False, timeout=15, allow_redirects=False
    )

    ctype = r.headers.get("Content-Type","")
    if "application/json" not in ctype:
        raise RuntimeError(
            f"login 응답이 JSON이 아님. status={r.status_code}, ctype={ctype}, "
            f"location={r.headers.get('Location')}, body='{(r.text or '')[:200]}'"
        )
    js = r.json()
    if not js.get("success"):
        code = (js.get("error") or {}).get("code")
        raise RuntimeError(f"Synology login failed. code={code}, resp={js}")

    SYNO_TOKEN = (js.get("data") or {}).get("synotoken")
    print("✓ Login OK. token:", bool(SYNO_TOKEN))

def _headers(stream=False):
    h = {} if stream else {"Accept":"application/json"}
    if SYNO_TOKEN:
        h["X-SYNO-TOKEN"] = SYNO_TOKEN
    return h

def syno_entry(params: dict, stream=False):
    """File Station 공용 호출. 세션만료(code=119) 시 1회 재로그인 후 재시도."""
    for attempt in range(2):
        r = sess.get(f"{NAS}/webapi/entry.cgi", params=params, headers=_headers(stream), verify=False,
                     timeout=TIMEOUT, stream=stream)
        if stream:
            return r  # 스트리밍은 호출부에서 상태 확인
        try:
            j = r.json()
        except Exception:
            head = (r.text or "")[:200]
            raise HTTPException(502, f"NAS 비JSON 응답: status={r.status_code}, ctype={r.headers.get('Content-Type')}, body='{head}'")

        if j.get("success"):
            return j
        # 세션 만료 → 재로그인
        if attempt == 0 and (j.get("error") or {}).get("code") == 119:
            syno_login()
            continue
        raise HTTPException(502, f"NAS 에러: {j}")
    raise HTTPException(502, "NAS 재시도 실패")

@app.on_event("startup")
def startup():
    print("NAS URL:", NAS)
    syno_login()

@app.get("/health")
def health():
    return {"ok": True, "nas": NAS, "token": bool(SYNO_TOKEN)}

@app.get("/shares")
def list_shares():
    j = syno_entry({"api":"SYNO.FileStation.List","version":"1","method":"list_share"})
    return j["data"]["shares"]

@app.get("/ls")
def list_dir(path: str):
    j = syno_entry({
        "api":"SYNO.FileStation.List","version":"2","method":"list",
        "folder_path": path, "additional":"size,time,owner,perm"
    })
    return j["data"]["files"]

@app.get("/download")
def download(path: str):
    r = syno_entry({
        "api":"SYNO.FileStation.Download","version":"2","method":"download",
        "path": path, "mode":"open"
    }, stream=True)
    if not r.ok:
        raise HTTPException(502, "download failed")

    # ① 원본 파일명
    filename = path.rsplit("/", 1)[-1]

    # ② ASCII 대체 + UTF-8 퍼센트 인코딩
    fallback = _ascii_fallback(filename)
    cd = f"attachment; filename={fallback}; filename*=UTF-8''{quote(filename)}"

    return StreamingResponse(
        r.iter_content(1024*512),
        media_type=r.headers.get("Content-Type", "application/octet-stream"),
        headers={"Content-Disposition": cd}  # ← 더 이상 latin-1 에러 안 남
    )
