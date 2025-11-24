'use client';

import Image from 'next/image';
import Link from 'next/link';
import NoticeList from '../components/NoticeList';

export default function Home() {

  return (
    <div className="w-full">
      {/* ===== HERO ===== */}
      <section className="relative w-full">
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
              <h1 className="font-light leading-none" style={{
                color: '#282828',
                fontFamily: 'Pretendard',
                fontSize: 'clamp(2.5vh, 2.5vh, 3.5vh)',
                marginBottom: '1.4vh',}}>
                AI Transformation Cyber Security
              </h1>
            <p className="font-semibold leading-snug" style={{
              color: '#282828',
              fontFamily: 'Pretendard',
              fontSize: 'clamp(2.5vh, 5vh, 5vh)',
              lineHeight: 1.25,}}>
              AI, 블록체인, IoT기술로
              <br className="hidden sm:block" />
              미래를 설계하다
            </p>
          </div>

          {/* 오른쪽 자동 슬라이드 갤러리 - 반응형 */}
          <Link
            href="/courses?tab=gallery"
            className="
              hidden md:block
              bg-white/60 backdrop-blur-md rounded-xl shadow-lg overflow-hidden
              hover:scale-105 transition-transform
              w-[28vw] min-w-[260px] max-w-[400px] aspect-[3/2]">
                <div className="relative w-full h-full overflow-hidden">
                  <div className="absolute inset-0 flex animate-slide-horizontal">
                    {[
                      '/gallery/1.jpg',
                      '/gallery/2.jpg',
                      '/gallery/3.jpg',
                      '/gallery/4.jpg',
                      '/gallery/5.jpg',
                    ].map((img, idx) => (
                      <div
                        key={idx}
                        className="min-w-full h-full relative flex-shrink-0">
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

            {/* ===== 연구실 소개(텍스트+이미지) ===== */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-28">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* 텍스트 */}
          <div className="flex-1 w-full">
            <h2
              className="font-semibold leading-tight"
              style={{
                color: '#282828',
                fontFamily: 'Pretendard',
                fontSize: 'clamp(2vh, 3.2vh, 3.2vh)',
                lineHeight: 1.25,
              }}
            >
              Securing the Future, Connecting the World
            </h2>

            <div
              className="mt-6 sm:mt-8 rounded-xl"
              style={{ backgroundColor: '#D9D9D933', backdropFilter: 'blur(30px)' } as React.CSSProperties}
            >
              <div className="p-5 sm:p-8 lg:p-10 space-y-5">
                <h3
                  className="font-medium"
                  style={{
                    color: '#282828',
                    fontFamily: 'Pretendard',
                    fontSize: 'clamp(2vh, 2.5vh, 2.5vh)',
                  }}
                >
                  Welcome
                </h3>

                <p
                  className="leading-7"
                  style={{
                    color: '#282828',
                    fontFamily: 'Pretendard',
                    // 본문 1
                    fontSize: 'clamp(1vh, 2vh, 1.7vh)',
                    lineHeight: 1.8,
                  }}
                >
                  우리 AX융합 사이버보안 연구실은 AI보안, 산업시설 보안, 모빌리티 보안, 블록체인, 해킹·방어 기술을 
                  <br />하나로 엮어 지능형·안전한 디지털 세계를 설계합니다.
                  <br />AI 자가진화와 적대적 공격부터 스마트공장·드론·자동차 보안까지 연결된 모든 기술이 신뢰로 작동하는 미래 표준을 만들어 가겠습니다.
                </p>

                <p
                  style={{
                    color: '#282828',
                    fontFamily: 'Pretendard',
                    fontSize: 'clamp(1vh, 2vh, 1.7vh)',
                    lineHeight: 1.7,
                  }}
                >
                  부산에서 시작해 세계로 확장되는 보안·지능 연구의 중심, 
                  <br />ACCSLAB이 만들어 갑니다.
                </p>
              </div>
            </div>
          </div>

          {/* 이미지 */}
          <div className="hidden lg:block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[332px]">
            <Image src="/main/image.png"
              alt="Digital Security Graphic"
              width={332}
              height={470}
              className="w-full h-auto object-contain"
              priority/>
          </div>
        </div>
      </section>

      {/* ===== 연구 실적 ===== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 lg:mt-20">
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-center mb-6 sm:mb-8"
          style={{ color: '#282828', fontFamily: 'Pretendard' }}
        >
          연구 실적
        </h2>

        <p
          className="text-sm sm:text-base text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-10"
          style={{ fontFamily: 'Pretendard' }}
        >
          ACCSLAB은 AI 보안, 산업시설 보안, 모빌리티 보안, 블록체인, 해킹·방어 등 다양한 분야에서
          국내외 학술지, 학회, 산학협력 과제를 통해 연구 성과를 축적하고 있습니다.
        </p>

        {/* 연구 실적 사진 3개 + 제목 */}
        <div className="mb-10 flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            {
              src: '/result_picture/kisa_picture.png',
              title: 'ACS 해킹방어대회 수상',
            },
            {
              src: '/result_picture/KCF_picture.png',
              title: '2025 국가암호공모전 수상',
            },
            {
              src: '/result_picture/dive_picture.png',
              title: 'DIVE AI 경진대회 수상',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center"
            >
              <div className="relative w-[24vh] min-w-[180px] max-w-xs aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image
                  src={item.src}
                  alt={`연구 실적 이미지 ${idx + 1}`}
                  fill
                  className={
                    idx === 1
                      ? 'object-contain scale-75 origin-center'
                      : 'object-cover'
                  }
                />
              </div>
              {/* 🔽 이미지 아래 작은 제목 */}
              <p
                className="mt-2 text-xs sm:text-sm text-gray-600 text-center"
                style={{ fontFamily: 'Pretendard' }}
              >
                {item.title}
              </p>
            </div>
          ))}
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
              <Image
                src="/main/AI.png"
                alt="AX융합 사이버보안 기술"
                width={120}
                height={120}
                className="object-contain"
              />
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
              <Image
                src="/main/Factory.png"
                alt="산업시설 사이버보안"
                width={120}
                height={120}
                className="object-contain"
              />
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
              <Image
                src="/main/drone.png"
                alt="모빌리티 보안"
                width={120}
                height={120}
                className="object-contain"
              />
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
              <Image
                src="/main/Blockchain.png"
                alt="블록체인 응용기술"
                width={120}
                height={120}
                className="object-contain"
              />
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
              <Image
                src="/main/Hacking.png"
                alt="해킹/방어 및 리버싱 기술"
                width={120}
                height={120}
                className="object-contain"
              />
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
            <Image
              src="/main/Vector.svg"
              alt="Arrow"
              width={10}
              height={18}
              className="h-4 w-auto"
            />
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
