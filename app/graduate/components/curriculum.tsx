'use client';

// NOTE: To resolve potential compilation errors, `next/image` has been replaced with the standard `img` tag.
// import Image from 'next/image';

export default function Curriculum() {
  return (
    <div>
      {/* --- 1. 대학원생 모집 안내 섹션 --- */}
      <div className="bg-white pt-10 sm:pt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            <span>AX융합 사이버 보안의</span>
            <br />
            차세대 연구를 주도할 대학원생을 모집합니다.
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            AX융합사이버보안연구실에서는 아래 연구 분야에 대한
            <strong className="font-semibold text-gray-800"> 대학원생(석사 과정, 박사과정)</strong>과
            <strong className="font-semibold text-gray-800"> Post Doc, 학부연구생</strong>을 모집합니다.
          </p>
        </div>
        <div className="my-6 sm:my-8 flex justify-center px-4">
          <a
            href="https://go.pusan.ac.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md border border-[#5E9BDC] px-6 sm:px-8 py-2.5 sm:py-3
                       text-base sm:text-lg font-semibold text-[#5E9BDC]
                       transition-colors duration-300 hover:bg-[#5E9BDC] hover:text-white
                       focus:outline-none focus:ring-2 focus:ring-[#5E9BDC] focus:ring-opacity-50"
          >
            대학원 모집 요강
          </a>
        </div>
      </div>

      {/* --- 2. 연구분야 섹션 --- */}
      <div className="bg-white pb-12 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <img
              src="/logo.png"
              alt="연구분야 로고"
              width="28"
              height="28"
              className="object-contain sm:w-8 sm:h-8"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">연구분야</h2>
          </div>

          <div className="border-t border-gray-800">
            {/* 모바일: 1열, md 이상: 고정폭+유동폭 2열 */}
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
              {/* AX융합 사이버보안 기술 */}
              <div className="flex items-center justify-center text-center border-b border-r md:border-r border-gray-800 bg-gray-200 p-3 sm:p-4 font-semibold text-gray-700">
                AX융합 사이버보안 기술
              </div>
              <div className="flex items-center border-b border-gray-800 p-3 sm:p-4 text-gray-700 min-w-0">
                <p className="text-sm sm:text-base leading-relaxed break-words">
                  AI 자가진화, 생성형 AI, AI 해킹, 적대적 공격 등
                </p>
              </div>

              {/* 산업시설 사이버보안 */}
              <div className="flex items-center justify-center text-center border-b border-r md:border-r border-gray-800 bg-gray-200 p-3 sm:p-4 font-semibold text-gray-700">
                산업시설 사이버보안
              </div>
              <div className="flex items-center border-b border-gray-800 p-3 sm:p-4 text-gray-700 min-w-0">
                <p className="text-sm sm:text-base leading-relaxed break-words">
                  스마트공장 사이버보안, 에너지시설 사이버보안, 원자력 사이버보안
                </p>
              </div>

              {/* 모빌리티 보안 */}
              <div className="flex items-center justify-center text-center border-b border-r md:border-r border-gray-800 bg-gray-200 p-3 sm:p-4 font-semibold text-gray-700">
                모빌리티 보안
              </div>
              <div className="flex items-center border-b border-gray-800 p-3 sm:p-4 text-gray-700 min-w-0">
                <p className="text-sm sm:text-base leading-relaxed break-words">
                  드론 사이버보안, 자동차 사이버보안, 로봇 사이버보안
                </p>
              </div>

              {/* 블록체인 응용기술 */}
              <div className="flex items-center justify-center text-center border-b border-r md:border-r border-gray-800 bg-gray-200 p-3 sm:p-4 font-semibold text-gray-700">
                블록체인 응용기술
              </div>
              <div className="flex items-center border-b border-gray-800 p-3 sm:p-4 text-gray-700 min-w-0">
                <p className="text-sm sm:text-base leading-relaxed break-words">
                  블록체인기술 적용 연구
                </p>
              </div>

              {/* 해킹/방어 및 리버싱 기술 */}
              <div className="flex items-center justify-center text-center border-b border-r md:border-r border-gray-800 bg-gray-200 p-3 sm:p-4 font-semibold text-gray-700">
                해킹/방어 및 리버싱 기술
              </div>
              <div className="flex items-center border-b border-gray-800 p-3 sm:p-4 text-gray-700 min-w-0">
                <p className="text-sm sm:text-base leading-relaxed break-words">
                  역공학, 포렌식기술
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 3. Why ACCSLAB 섹션 --- */}
      <section className="bg-gray-100 py-14 sm:py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold text-gray-800">Why ACCSLAB?</h2>
          </div>

          <div className="mt-10 md:mt-16 grid grid-cols-1 gap-8 sm:gap-10 text-center sm:grid-cols-2 lg:grid-cols-5">
            <div className="flex flex-col items-center">
              <img src="/graduate_curriculums/money.jpg" alt="등록금 지원" width="72" height="72" className="sm:w-20 sm:h-20" />
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-gray-800">등록금 100% 지원</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">
                컴퓨터공학 전공<br />석사 과정 지원자 전원 대상
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/graduate_curriculums/earth.jpg" alt="국제학회 및 해외연구" width="72" height="72" className="sm:w-20 sm:h-20" />
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-gray-800">국제학회 및 해외연구</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">
                논문 발표 시 무조건 지원,<br />우수자 해외 연구기관 파견 기회
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/graduate_curriculums/doc.jpg" alt="실전 연구" width="72" height="72" className="sm:w-20 sm:h-20" />
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-gray-800">실전 연구</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">
                국책과제 기반,<br />ETRI·삼성·금융기관 등과 협업 다수
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/graduate_curriculums/hand_and_coin.jpg" alt="월 생활장학금 지급" width="72" height="72" className="sm:w-20 sm:h-20" />
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-gray-800">월 생활장학금 지급</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">
                학부생 130만원 / 석사 220만원 / 박사 300만원<br />+ 석박통합 시 추가 지원 + a
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/graduate_curriculums/cap.jpg" alt="탄탄한 졸업 후 진로" width="72" height="72" className="sm:w-20 sm:h-20" />
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-gray-800">탄탄한 졸업 후 진로</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">
                교수/출연연/대기업/스타트업/금융기업 등 다양한 분야 진출
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
