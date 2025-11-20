'use client';

export default function Admission() {
  return (
    <div>
      {/* 상단 소개 섹션 */}
      <div className="bg-white pt-10 sm:pt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            <span>AX융합 사이버 보안의</span>
            <br />
            차세대 연구를 주도할 대학원생을 모집합니다.
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            AX 연구실에선 아래 연구 분야에 대한
            <strong className="font-semibold text-gray-800"> 대학원생(석사 과정, 박사과정)</strong>과
            <strong className="font-semibold text-gray-800"> Post Doc, 학부연구생</strong>을 모집합니다.
          </p>
        </div>

        <div className="my-6 sm:my-8 flex justify-center px-4">
          <img
            src="/graduate_admissions/community.jpg"
            alt="월 생활장학금 지급"
            width={512}
            height={380}
            className="h-auto w-full max-w-md sm:max-w-lg rounded"
          />
        </div>
      </div>

      {/* 지원 전공 및 모집 과정 섹션 */}
      <section className="bg-white px-4 sm:px-6 py-8 font-sans">
        <div className="container mx-auto">
          <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-stretch md:justify-center md:gap-10">
            
            {/* 지원전공 */}
            <div className="flex flex-col items-start gap-3 w-full md:w-auto">
              <div className="relative w-full sm:w-[340px] overflow-hidden rounded-2xl bg-sky-50/70 p-6 sm:p-8 shadow-sm h-full">
                <div className="absolute left-6 top-10 h-16 w-px origin-top-left -rotate-45 transform bg-sky-300" />
                <div className="relative">
                  <h3 className="text-xs sm:text-sm font-semibold text-sky-800">지원전공</h3>
                  <p className="mt-6 sm:mt-8 text-xl sm:text-2xl font-bold text-slate-800">
                    전공 무관
                  </p>
                </div>
              </div>
            </div>

            {/* 모집과정 */}
            <div className="w-full md:w-auto">
              <div className="relative w-full sm:w-[340px] overflow-hidden rounded-2xl bg-sky-50/70 p-6 sm:p-8 shadow-sm h-full">
                <div className="absolute left-6 top-10 h-16 w-px origin-top-left -rotate-45 transform bg-sky-300" />
                <div className="relative">
                  <h3 className="text-sm font-semibold text-sky-800">모집과정</h3>
                  <p className="mt-6 sm:mt-8 text-xl sm:text-2xl font-bold text-slate-800">
                    석사, 박사, 석박사통합, 학부연구생, Pos Doc
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 상세 내용 섹션 */}
      <div className="bg-white pb-12 sm:pb-16">
        <div className="container mx-auto max-w-5xl space-y-16 sm:space-y-20 px-4 sm:px-6">
          {/* 지원 안내 */}
          <section className="grid grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-[auto_1fr] lg:gap-x-10">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="지원 안내 로고" width="32" height="32" className="object-contain" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">지원 안내</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold text-gray-800">
                지원 전공: 전공 무관
              </p>
              <p className="text-sm sm:text-base leading-7">
                <span className="font-bold">T/O:</span> 2학기 석사 입학자 제한 없음
                <br />
                2학기 석사 입학생에게는 T/O 제한이 없습니다. 많은 지원 바랍니다. 또한, 연구실은 대학 본원(장전동)에 있습니다. 양산과는 관련없습니다.
              </p>
            </div>
          </section>

          {/* 지원 자격 */}
          <section className="grid grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-[auto_1fr] lg:gap-x-10">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="지원 자격 로고" width="32" height="32" className="object-contain" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">지원 자격</h2>
            </div>
            <div className="space-y-6">
              {/* 조건1 */}
              <div>
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-md bg-[#A0C1E1] px-3 py-1 text-xs sm:text-sm font-semibold text-white">
                  <img src="/graduate_admissions/check.svg" alt="체크 아이콘" width="16" height="16" />
                  조건1
                </span>
                <p className="mt-2 text-sm sm:text-base text-gray-700 leading-7">현 시점 학부 평균 학점이 3.3 이상이 되어야 함</p>
              </div>
              {/* 조건2 */}
              <div>
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-md bg-[#A0C1E1] px-3 py-1 text-xs sm:text-sm font-semibold text-white">
                  <img src="/graduate_admissions/check.svg" alt="체크 아이콘" width="16" height="16" />
                  조건2
                </span>
                <p className="mt-2 text-sm sm:text-base text-gray-700 leading-7">
                  연구실 멤버들과 협력 및 융화가 잘 되어야하며 연구에 대한 열의가 있어야 함
                </p>
              </div>
            </div>
          </section>

          {/* 지원 혜택 */}
          <section>
            <div className="mb-8 sm:mb-12 flex items-center gap-3">
              <img src="/logo.png" alt="지원혜택 로고" width="32" height="32" className="object-contain" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">지원혜택</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: '1. 입학금 및 등록금 지원',
                  desc:
                    '컴퓨터공학전공 → 융합보안인력양성 사업(본 연구실)에서 지원, 석사 4학기 등록금 100% 지원 (즉, 300만원 * 4학기)',
                },
                {
                  title:
                    '2.추가로, 매월 연구 장학금 및 생활 보조금 지원(학부생,석사,박사 과정 모두)',
                  desc:
                    '(학부연구생: 약 월 130만원, 석사: 월 220만원, 박사 월 300만원, Post Doc (협의가능) @ 2025년 2학기 기준)\n(월 지급 연구장학금 및 생활보조금 지원 금액은 저희 연구실 학생들에게만 해당됩니다. 타 연구실은 각 연구실 상황에 따라 적을 수 있습니다)',
                },
                {
                  title:
                    '3.또한, 2021년 1학기부터, 연구실의 석사과정/박사과정 학생 중, 선발을 통한 추가 연구비 지급',
                  desc:
                    '2021년 1학기부터 BK 장학금이 학교에서 정한 석사과정 월 180만원 지급 한도와 박사과정 월 250만원 지급 한도에 포함되지 않게 되어, 연구실 학생들에게 추가 장학금을 지급할 수 있게 되었습니다. 이에, 양질의 성과를 낸 학생들을 6개월 단위로 선발하여, 추가로 월 70만원에서 100만원 추가 연구비 지급을 시행합니다.',
                },
                { title: '4.연구 기자재(PC,노트북) 제공', desc: '' },
                {
                  title:
                    '5.국제학회에 논문을 발표할 경우, 혹은 경우에 따라서 단순 참관 목적의 국제 학술 대회(International Conference) 참석 해외 출장',
                  desc: '',
                },
                {
                  title:
                    '6. 박사과정 학생인 경우 국제연구기관, 해외 우수 대학교 방문 공동 연구 혹은 해외어학연수 기회 제공 등(6개월 이내)',
                  desc: '',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-start gap-3 sm:gap-4 md:flex-row">
                  <span className="inline-flex flex-shrink-0 items-center gap-2 rounded-md bg-[#043A6F] px-3 sm:px-4 py-1.5 sm:py-2 font-semibold text-white text-sm">
                    <img src="/graduate_admissions/hand_heart.svg" alt="혜택 아이콘" width="16" height="16" />
                    혜택
                  </span>
                  <div className="w-full text-gray-700">
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    {item.desc && (
                      <p className="mt-1 text-xs sm:text-sm text-gray-600 whitespace-pre-line">{item.desc}</p>
                    )}
                    <div className="border-t border-dotted border-gray-300 my-3 sm:my-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2학기 입학 안내 */}
          <section>
            <div className="mb-8 sm:mb-12 flex items-center gap-3">
              <img src="/logo.png" alt="2학기 로고" width="32" height="32" className="object-contain" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">2학기 입학 대학원생 모집</h2>
            </div>
            <p className="text-sm sm:text-base text-red-600">
              2학기 석사 과정 신입생을 위한 T/O(정원) 제한을 두지 않고 있으니, 많은 지원 바랍니다.
            </p>
            <div className="mt-3 sm:mt-4">
              <p className="text-sm sm:text-base text-gray-700">
                특히 T/O 제한으로 1학기 석사 입학에 어려움을 겪었던 학생들을 위해 다음과 같은 특별한 혜택을 제공합니다.
              </p>
              <ul className="list-disc space-y-2 pl-5 mt-2 text-sm sm:text-base text-gray-700">
                <li>
                  연구 경력 쌓기: 2학기 입학 전 한 학기 동안 부산대학교 블록체인 연구센터의 정식 연구원으로 채용되어 연구 경력을 쌓을 수 있습니다.
                  이 기간 동안 4대 보험도 지원됩니다.
                </li>
                <li>다양한 지원: 이외에도 2학기 지원 학생들을 위한 다양한 지원책이 마련되어 있습니다.</li>
              </ul>
            </div>
          </section>

          {/* 연락처 */}
          <section>
            <div className="mb-8 sm:mb-12 flex items-center gap-3">
              <img src="/logo.png" alt="연락처 로고" width="32" height="32" className="object-contain" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">연락처</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
              {/* 교수 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 min-w-[160px]">
                  <p className="text-sm text-gray-600">교수</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">손준영</p>
                  <a
                    href="mailto:jyson@pusan.ac.kr"
                    className="mt-2 flex items-center gap-2 text-gray-700 transition hover:text-blue-600"
                  >
                    <img src="/graduate_admissions/email.svg" alt="이메일 아이콘" width="20" height="20" />
                    <span className="text-sm">jyson@pusan.ac.kr</span>
                  </a>
                </div>
                <div className="w-px self-stretch bg-gray-200" />
                <div className="pt-1 text-sm text-gray-600">
                  <p>부산대학교 정보컴퓨터공학부 교수</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
