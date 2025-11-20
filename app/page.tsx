'use client';

import Image from 'next/image';
import Link from 'next/link';
import NoticeList from '../components/NoticeList';

export default function Home() {

  return (
    <div className="w-full">
      {/* ===== HERO ===== */}
      <section className="relative w-full">
        {/* 모바일 16:9 → md 21:9 → lg 8:3 비율 */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[8/3] overflow-hidden">
          <Image
            src="/main/3.png"
            alt="PNU InfoSec 히어로 이미지"
            className="object-cover object-center"
            fill
            priority
          />

          {/* 히어로 텍스트 + 갤러리 슬라이드 */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">

              {/* 왼쪽 히어로 텍스트 */}
              <div className="max-w-xl sm:max-w-2xl md:max-w-3xl">
                <h1
                  className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4 leading-none"
                  style={{ color: '#282828', fontFamily: 'Pretendard' }}
                >
                  Information Security & AloT
                </h1>
                <p
                  className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-snug"
                  style={{ color: '#282828', fontFamily: 'Pretendard' }}
                >
                  AI, 블록체인, IoT기술로
                  <br className="hidden sm:block" />
                  미래를 설계하다.
                </p>
              </div>

              {/* 오른쪽 자동 슬라이드 갤러리 */}
              <Link
                href="/courses?tab=gallery"
                className="hidden md:block bg-white/60 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
                style={{ width: '360px', height: '240px' }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <div className="absolute inset-0 flex animate-slide-horizontal">
                    {/* 갤러리 이미지 목록 — GalleryContent.tsx와 동일한 수대로 넣으면 됨 */}
                    {[
                      "/gallery/1.jpg",
                      "/gallery/2.jpg",
                      "/gallery/3.jpg",
                      "/gallery/4.jpg",
                      "/gallery/5.jpg",
                    ].map((img, idx) => (
                      <div key={idx} className="min-w-full h-full relative flex-shrink-0">
                        <Image
                          src={img}
                          alt={`gallery-${idx}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>

        {/* 슬라이드 애니메이션 */}
        <style jsx>{`
          @keyframes slideHorizontal {
            0% { transform: translateX(0); }
            20% { transform: translateX(0); }
            25% { transform: translateX(-100%); }
            45% { transform: translateX(-100%); }
            50% { transform: translateX(-200%); }
            70% { transform: translateX(-200%); }
            75% { transform: translateX(-300%); }
            95% { transform: translateX(-300%); }
            100% { transform: translateX(-400%); }
          }

          .animate-slide-horizontal {
            animation: slideHorizontal 30s infinite linear;
          }
        `}</style>
      </section>


      {/* ===== 연구실 주요성과 ===== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-center"
          style={{ color: '#282828', fontFamily: 'Pretendard' }}
        >
          연구실 주요성과
        </h2>

        <div className="mt-7 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* 카드 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 sm:mb-6">
              <Image src="/main/ICCV.png" alt="ICCV 논문" width={216} height={133} className="h-auto w-auto" />
            </div>
            <p
              className="text-base sm:text-lg font-medium leading-tight"
              style={{ color: '#02162E', fontFamily: 'Pretendard' }}
            >
              ICCV-23
              <br />
              논문 등재
            </p>
          </div>

          {/* 카드 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 sm:mb-6">
              <Image src="/main/CVPR.png" alt="CVPR 논문" width={216} height={133} className="h-auto w-auto" />
            </div>
            <p
              className="text-base sm:text-lg font-medium leading-tight"
              style={{ color: '#02162E', fontFamily: 'Pretendard' }}
            >
              CVR-2022
              <br />
              논문 등재
            </p>
          </div>

          {/* 카드 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 sm:mb-6">
              <Image
                src="/main/성과로고_국가우수성과.png"
                alt="국가연구개발 우수성과"
                width={216}
                height={133}
                className="h-auto w-auto"
              />
            </div>
            <p
              className="text-base sm:text-lg font-medium leading-tight"
              style={{ color: '#02162E', fontFamily: 'Pretendard' }}
            >
              국가연구개발
              <br />
              우수성과 100선
            </p>
          </div>
        </div>
      </section>

      {/* ===== 공지/새소식 ===== */}
      <section className="mt-8 sm:mt-12 lg:mt-20">
        <div className="w-full" style={{ backgroundColor: '#D9D9D933' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
              {/* 공지사항 */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-xl sm:text-2xl font-extrabold"
                    style={{ color: '#043A6F', fontFamily: 'Pretendard' }}
                  >
                    공지사항
                  </h3>
                  <svg className="w-7 h-7 sm:w-8 sm:h-9 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
                <div className="relative mb-5">
                  <div className="h-[3px] w-24 bg-[#043A6F]" />
                  <div className="absolute top-0 left-0 w-full h-px bg-black/70" />
                </div>
                <NoticeList
                  limit={3}
                  fontSize="lg"
                  onNoticeClick={(notice) => {
                    window.location.href = `/about?tab=notice&id=${notice.id}`;
                  }}
                />
              </div>

              {/* 새소식 */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-xl sm:text-2xl font-extrabold"
                    style={{ color: '#043A6F', fontFamily: 'Pretendard' }}
                  >
                    새소식
                  </h3>
                  <svg className="w-7 h-7 sm:w-8 sm:h-9 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
                <div className="relative">
                  <div className="h-[3px] w-20 bg-[#043A6F]" />
                  <div className="absolute top-0 left-0 w-full h-px bg-black/70" />
                </div>
                {/* 새소식 리스트 추가 예정 */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 연구실 소개(텍스트+이미지) ===== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-28">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* 텍스트 */}
          <div className="flex-1 w-full">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight"
              style={{ color: '#282828', fontFamily: 'Pretendard' }}
            >
              Securing the Future, Connecting the World
            </h2>

            <div
              className="mt-6 sm:mt-8 rounded-xl"
              style={{ backgroundColor: '#D9D9D933', backdropFilter: 'blur(30px)' } as React.CSSProperties}
            >
              <div className="p-5 sm:p-8 lg:p-10 space-y-5">
                <h3
                  className="text-xl sm:text-2xl font-medium"
                  style={{ color: '#282828', fontFamily: 'Pretendard' }}
                >
                  Welcome
                </h3>

                <p
                  className="text-sm sm:text-base leading-7"
                  style={{ color: '#282828', fontFamily: 'Pretendard' }}
                >
                  인터넷이 세상을 연결했다면, ISLAB은 그 연결을 지능과 안전으로 완성합니다. AI보안·양자내성 암호·블록체인·지능형IoT를
                  한축으로 묶어, 사람·데이터·사물이 믿음을 주고받는 미래를 부산에서 설계하고 전세계로 확장합니다.
                  연구로 끝나지 않고, 산업·정책·창업 생태계를 함께 움직여
                </p>

                <p
                  className="text-base sm:text-lg md:text-xl leading-7"
                  style={{ color: '#282828', fontFamily: 'Pretendard' }}
                >
                  안전한 디지털 가치라는 새로운 표준을 만들어 가겠습니다.
                </p>

                <button
                  className="inline-block px-5 py-2 rounded-md border transition-all hover:-translate-y-0.5"
                  style={{ borderColor: '#5E9BDC', color: '#5E9BDC', fontFamily: 'Pretendard' }}
                >
                  more
                </button>
              </div>
            </div>
          </div>

          {/* 이미지 */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[332px]">
            <Image
              src="/main/image.png"
              alt="Digital Security Graphic"
              width={332}
              height={470}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== 연구주제 ===== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-center mb-8"
          style={{ color: '#282828', fontFamily: 'Pretendard' }}
        >
          연구주제
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* 연구주제 1 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 flex justify-center">
              <Image src="/main/AI.png" alt="AX융합 사이버보안 기술" width={120} height={120} className="object-contain" />
            </div>
            <h3
              className="text-lg sm:text-xl font-bold mb-3 text-center"
              style={{ color: '#043A6F', fontFamily: 'Pretendard' }}
            >
              AX융합 사이버보안 기술
            </h3>
            <p
              className="text-sm sm:text-base text-gray-600 leading-relaxed text-center"
              style={{ fontFamily: 'Pretendard' }}
            >
              AI 자가진화, 생성형 AI, AI 해킹, 적대적공격 등
            </p>
          </div>

          {/* 연구주제 2 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 flex justify-center">
              <Image src="/main/Factory.png" alt="산업시설 사이버보안" width={120} height={120} className="object-contain" />
            </div>
            <h3
              className="text-lg sm:text-xl font-bold mb-3 text-center"
              style={{ color: '#043A6F', fontFamily: 'Pretendard' }}
            >
              산업시설 사이버보안
            </h3>
            <p
              className="text-sm sm:text-base text-gray-600 leading-relaxed text-center"
              style={{ fontFamily: 'Pretendard' }}
            >
              스마트공장, 에너지시설, 원자력 사이버보안
            </p>
          </div>

          {/* 연구주제 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 flex justify-center">
              <Image src="/main/drone.png" alt="모빌리티 보안" width={120} height={120} className="object-contain" />
            </div>
            <h3
              className="text-lg sm:text-xl font-bold mb-3 text-center"
              style={{ color: '#043A6F', fontFamily: 'Pretendard' }}
            >
              모빌리티 보안
            </h3>
            <p
              className="text-sm sm:text-base text-gray-600 leading-relaxed text-center"
              style={{ fontFamily: 'Pretendard' }}
            >
              드론, 자동차, 로봇 사이버보안
            </p>
          </div>

          {/* 연구주제 4 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 flex justify-center">
              <Image src="/main/Blockchain.png" alt="블록체인 응용기술" width={120} height={120} className="object-contain" />
            </div>
            <h3
              className="text-lg sm:text-xl font-bold mb-3 text-center"
              style={{ color: '#043A6F', fontFamily: 'Pretendard' }}
            >
              블록체인 응용기술
            </h3>
            <p
              className="text-sm sm:text-base text-gray-600 leading-relaxed text-center"
              style={{ fontFamily: 'Pretendard' }}
            >
              블록체인기술 적용연구
            </p>
          </div>

          {/* 연구주제 5 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 flex justify-center">
              <Image src="/main/Hacking.png" alt="해킹/방어 및 리버싱 기술" width={120} height={120} className="object-contain" />
            </div>
            <h3
              className="text-lg sm:text-xl font-bold mb-3 text-center"
              style={{ color: '#043A6F', fontFamily: 'Pretendard' }}
            >
              해킹/방어 및 리버싱 기술
            </h3>
            <p
              className="text-sm sm:text-base text-gray-600 leading-relaxed text-center"
              style={{ fontFamily: 'Pretendard' }}
            >
              역공학, 포렌식기술
            </p>
          </div>
        </div>

        {/* 연구주제 자세히 보기 */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="/research?tab=topics"
            className="inline-flex items-center gap-3 text-lg sm:text-xl font-medium text-[#02162E] hover:text-[#043A6F] transition-colors"
            style={{ fontFamily: 'Pretendard' }}
          >
            연구주제 자세히 보기
            <Image src="/main/Vector.svg" alt="Arrow" width={10} height={18} className="h-4 w-auto" />
          </a>
        </div>
      </section>

      {/* ===== 산학협력기관 ===== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-center"
          style={{ color: '#282828', fontFamily: 'Pretendard' }}
        >
          산학협력기관
        </h2>

        <div className="mt-8 sm:mt-12 mb-16 sm:mb-28 flex justify-center">
          <Image
            src="/main/Main_흐르는텍스트_산학협력기관.svg"
            alt="산학협력기관 흐르는 텍스트"
            width={1127}
            height={100}
            className="w-full max-w-5xl h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}
