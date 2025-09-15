'use client';

// NOTE: To resolve potential compilation errors, `next/image` has been replaced with the standard `img` tag.
// import Image from 'next/image';

export default function Curriculum() {
  return (
    <div>
      {/* --- 1. 대학원생 모집 안내 섹션 --- */}
      <div className="bg-white pt-12 sm:pt-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span>AI·블록체인·양자내성 보안의</span>
            <br />
            차세대 연구를 주도할 대학원생을 모집합니다.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            정보보호 및 지능형 사물인터넷 연구실에선 아래 연구 분야에 대한
            <strong className="font-semibold text-gray-800"> 대학원생(석사 과정, 박사과정)</strong>과
            <strong className="font-semibold text-gray-800"> Post Doc, 학부연구생</strong>을 모집합니다.
          </p>
        </div>
        <div className="my-8 flex justify-center">
          <a
            href="https://go.pusan.ac.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block rounded-md border border-[#5E9BDC] px-8 py-3
              text-lg font-semibold text-[#5E9BDC]
              transition-colors duration-300 hover:bg-[#5E9BDC] hover:text-white
              focus:outline-none focus:ring-2 focus:ring-[#5E9BDC] focus:ring-opacity-50
            "
          >
            대학원 모집 요강
          </a>
        </div>
      </div>

      {/* --- 2. 연구분야 섹션 --- */}
      <div className="bg-white pb-12 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="mb-8 flex items-center gap-x-3">
            <img
              src="/logo.png"
              alt="연구분야 로고"
              width="32"
              height="32"
              className="object-contain"
            />
            <h2 className="text-3xl font-bold text-gray-800">연구분야</h2>
          </div>
          <div className="border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
              {/* 1열 div에 border-r, justify-center, text-center 추가 */}
              <div className="flex items-center justify-center text-center border-b border-r border-gray-800 bg-gray-200 p-4 font-semibold text-gray-700">
                정보보호
              </div>
              <div className="flex items-center border-b border-gray-800 p-4 text-gray-700">
                소프트웨어 보안, 시스템 보안, 네트워크 보안, 암호 모듈 설계, ASIC/FPGA 설계, 역공학, 경량화/최적화
              </div>

              <div className="flex items-center justify-center text-center border-b border-r border-gray-800 bg-gray-200 p-4 font-semibold text-gray-700">
                인공지능
              </div>
              <div className="flex items-center border-b border-gray-800 p-4 text-gray-700">
                자연어처리, Deep Learning(RNN, LSTM, CNN 등), Machine Learning, TensorFlow, Chatbot 분야
              </div>

              <div className="flex items-center justify-center text-center border-b border-r border-gray-800 bg-gray-200 p-4 font-semibold text-gray-700">
                지능형 사물인터넷<br/>(IoT : Internet of Things)
              </div>
              <div className="flex items-center border-b border-gray-800 p-4 text-gray-700">
                데이터마이닝, 빅데이터, 확률/통계, 웹 서비스, 서비스 플랫폼, 센서네트워크
              </div>

              <div className="flex items-center justify-center text-center border-b border-r border-gray-800 bg-gray-200 p-4 font-semibold text-gray-700">
                블록체인
              </div>
              <div className="flex items-center border-b border-gray-800 p-4 text-gray-700">
                블록체인 기반 기술, 익명성 제공 블록체인, 프라이버시 보호형 블록체인, 금융 및 항만/물류용 블록체인,암호 화폐 기반 기술
              </div>

              <div className="flex items-center justify-center text-center border-b border-r border-gray-800 bg-gray-200 p-4 font-semibold text-gray-700">
                산업시설 사이버보안
              </div>
              <div className="flex items-center border-b border-gray-800 p-4 text-gray-700">
                원자력발전소, 원자로, 에너지 시설 등 산업시설에 대한 사이버보안 기술
              </div>

              <div className="flex items-center justify-center text-center border-b border-r border-gray-800 bg-gray-200 p-4 font-semibold text-gray-700">
                모바일 사이버보안
              </div>
              <div className="flex items-center border-b border-gray-800 p-4 text-gray-700">
                자동차 사이버보안, 안티드론/사이버전자전 및 드론 사이버보안 기술
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 3. Why ISLAB 섹션 --- */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Why ISLAB?
            </h2>
            <ol className="list-inside list-decimal space-y-1 text-gray-700">
              <li>국책·산학 프로젝트 50억 + (안정적 연구비 → 심화 연구비 걱정 ↓)</li>
              <li>논문·특허 200+ & Top-tier AI 학회 게재 (석·박사도 챌린저 ↑)</li>
              <li>네이버랩스·삼성전자(ETRI) 등 커리어 하이 커리어인 (졸업 후 진로 확실)</li>
            </ol>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
              <p>본 연구실은 2008년 개설 이래 총 12명의 박사와 51명의 석사를 배출했습니다.</p>
              <p>본 연구실 출신 학생들은 졸업 후, 대학교수(현직) 1명, 정부출연연구원(ETRI 부설연구소) 4명, 벤처 CEO, 네이버랩스, 한국전자통신연구원, 삼성전자, 한국주택금융공사, 닐무늬핀, 블록체인 전문 벤처 기업 등 각 분야에서 실력을 인정받으면서 활약중에 있습니다.</p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-5">
            <div className="flex flex-col items-center">
              <img src="/money.png" alt="등록금 지원" width="80" height="80" />
              <h3 className="mt-4 text-lg font-bold text-gray-800">등록금 100% 지원</h3>
              <p className="mt-2 text-sm text-gray-600">컴퓨터공학 전공<br/>석사 과정 지원자 전원 대상</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/earth.png" alt="국제학회 및 해외연구" width="80" height="80" />
              <h3 className="mt-4 text-lg font-bold text-gray-800">국제학회 및 해외연구</h3>
              <p className="mt-2 text-sm text-gray-600">논문 발표 시 무조건 지원,<br/>우수자 해외 연구기관 파견 기회</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/doc.png" alt="실전 연구" width="80" height="80" />
              <h3 className="mt-4 text-lg font-bold text-gray-800">실전 연구</h3>
              <p className="mt-2 text-sm text-gray-600">국책과제 기반,<br/>ETRI·삼성·금융기관 등과 협업 다수</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/hand_and_coin.png" alt="월 생활장학금 지급" width="80" height="80" />
              <h3 className="mt-4 text-lg font-bold text-gray-800">월 생활장학금 지급</h3>
              <p className="mt-2 text-sm text-gray-600">학부생 100만원 / 석사 180만원 / 박사 250만원<br/>+ 성과 따라 추가 최대 100만원</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/cap.png" alt="탄탄한 졸업 후 진로" width="80" height="80" />
              <h3 className="mt-4 text-lg font-bold text-gray-800">탄탄한 졸업 후 진로</h3>
              <p className="mt-2 text-sm text-gray-600">교수/출연연/대기업/스타트업/금융기업 등<br/>다양한 분야 진출</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. 대학원 교육과정 섹션 --- */}
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto flex flex-col px-6">
          <div className="flex items-center gap-x-3">
            <img 
              src="/logo.png" 
              alt="로고"
              width="32"
              height="32"
            />
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              대학원 교육과정
            </h2>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            ※ 아래 부산대 교과과정은 2025년 기준입니다.
          </p>
          <div className="relative mt-8">
            <a
              href="/curriculum.pdf"
              download="부산대학교_대학원_교과과정.pdf"
              className="
                inline-flex items-center justify-center gap-x-2
                rounded-lg bg-blue-800 px-6 py-2.5
                font-semibold text-white
                shadow-lg transition-transform duration-200 ease-in-out
                hover:scale-105 hover:bg-blue-700
                focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50
              "
            >
              <span>대학원 교과과정 다운로드</span>
              <img
                src="/download.svg"
                alt="다운로드 아이콘"
                width="20"
                height="20"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
