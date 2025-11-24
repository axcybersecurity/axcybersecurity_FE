import Image from "next/image";

export default function CybersecDetail() {
  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-0 pb-12">
      {/* 메인 타이틀 */}
      <h3
        className="mx-auto text-center font-semibold break-keep text-2xl sm:text-3xl md:text-4xl leading-snug text-[#02162E]"
        style={{ fontFamily: "Pretendard" }}
      >
        사이버 보안
      </h3>

      {/* ============= 1. 안티드론 / 드론 사이버 보안 ============= */}
      <section className="mt-8 max-w-5xl mx-auto">
        <h4
          className="text-xl sm:text-2xl font-bold text-[#043A6F]"
          style={{ fontFamily: "Pretendard" }}
        >
          안티드론/사이버전자전 및 드론 사이버 보안 기술
        </h4>
        <p
          className="mt-1 text-base sm:text-lg text-black"
          style={{ fontFamily: "Pretendard" }}
        >
          (Anti-drone/cyber war autobiography and drone cybersecurity technology)
        </p>

        <div
          className="mt-4 mb-8 text-sm sm:text-base leading-relaxed text-[#282828]"
          style={{ fontFamily: "Pretendard" }}
        >
          <div className="space-y-6">
            <div>
              <div>■ AI 기반 드론 탐지 연구 (Research on AI-based Drone Detection)</div>
              <div>
                – 장거리 드론에 대한 시계열 데이터 구축과 LSTM 및 GRU 조기 탐지 알고리즘 개발 연구
              </div>
              <div>
                – Unity3D 기반 가상 환경에서의 드론 시뮬레이션을 통한 합성 데이터 생성 및 도메인 적응
                기법 연구
              </div>
              <div>
                – 카메라, 레이더, 음향 센서 데이터의 멀티모달 트랜스포머 네트워크 기반 통합 분석
              </div>
            </div>

            <div>
              <div>
                ■ 안티드론 및 드론 제어권 탈취 연구 (Research on Anti-drone Techniques and Drone
                Control Hijacking)
              </div>
              <div>– 802.11 프로토콜 취약점을 이용한 GCS Deauthentication 공격 연구</div>
              <div>– SDR 활용 MAVLink 프로토콜 기반 드론 조종 패킷의 도청 및 재전송 공격 연구</div>
              <div>– 드론 펌웨어에 대한 Reverse Engineering 및 ROP 기반 코드 실행 취약점 연구</div>
              <div>– 드론 무선통신 간의 암호 취약점에 대한 분석 및 통신 안전성에 대한 연구</div>
            </div>
          </div>
        </div>

        <p
          className="mt-4 text-center text-sm sm:text-base text-black"
          style={{ fontFamily: "Pretendard" }}
        >
          [안티드론 기술의 활용]
        </p>
        <div className="mt-4 max-w-5xl mx-auto">
          <Image
            src="/antidrone.svg"
            alt="Anti-Drone"
            width={982}
            height={490}
            className="w-full h-auto rounded-md"
          />
        </div>
      </section>

      {/* ============= 2. 산업시설 사이버보안 ============= */}
      <section className="mt-16 max-w-5xl mx-auto">
        <h4
          className="text-xl sm:text-2xl font-bold text-[#043A6F]"
          style={{ fontFamily: "Pretendard" }}
        >
          산업시설 사이버보안
        </h4>
        <p
          className="mt-1 text-base sm:text-lg text-black"
          style={{ fontFamily: "Pretendard" }}
        >
          (industrial facility cybersecurity)
        </p>

        <div
          className="mt-4 text-sm sm:text-base leading-relaxed text-[#282828]"
          style={{ fontFamily: "Pretendard" }}
        >
          <div className="space-y-1">
            <div>■ 원자력발전소, 원자로, 기타 산업 시설 등 산업시설에 대한 사이버 보안 기술 연구</div>
            <div>– 산업 시설을 목적으로 하는 공격 식별 및 평가 검증</div>
            <div>– 산업 시설에 대한 취약점 분석 및 취약점을 통한 모의 해킹 연구</div>
            <div>– 산업 시설 보안 기능 개발</div>
            <div>– 산업 시설 리스트 분석</div>
            <div>– 산업 시설 공격 기법의 고도화를 위한 보안 기술 연구 및 제품 개발</div>
            <div>– 고도화된 산업 시설 공격 예방을 위한 보안 가이드라인 연구</div>
          </div>
        </div>

        <p
          className="mt-8 text-center text-sm sm:text-base text-black"
          style={{ fontFamily: "Pretendard" }}
        >
          [산업 시설 및 에너지 시설 공격 흐름도]
        </p>
        <div className="mt-2 mb-10 max-w-3xl mx-auto">
          <Image
            src="/industry.svg"
            alt="Industry"
            width={788}
            height={648}
            className="w-full h-auto rounded-md"
          />
        </div>
      </section>
    </div>
  );
}
