'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="w-full">
      {/* ===== HERO ===== */}
      <section className="relative w-full">
        {/* 이미지 비율은 유지하되 높이도 반응형으로 고려 */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[8/3]">
          <Image
            src="/main/3.png"
            alt="PNU InfoSec 히어로 이미지"
            className="object-cover object-center"
            fill
            priority
          />

          {/* 히어로 텍스트 + 갤러리 슬라이드 */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="container mx-auto h-full px-[4vh] flex items-center justify-between">

              {/* 왼쪽 히어로 텍스트 - vh 단위 적극 사용 */}
              <div className="max-w-[60vh]">
                <h1
                  className="font-light mb-[2vh] leading-none"
                  style={{ 
                    color: '#282828', 
                    fontFamily: 'Pretendard',
                    fontSize: '2.5vh' // 창 너비에 비례
                  }}
                >
                  AI Transformation Cyber Security
                </h1>
                <p
                  className="font-semibold leading-snug"
                  style={{ 
                    color: '#282828', 
                    fontFamily: 'Pretendard',
                    fontSize: '4vh' // 창 너비에 비례하여 크게
                  }}
                >
                  AI, 블록체인, IoT기술로
                  <br className="hidden sm:block" />
                  미래를 설계하다.
                </p>
              </div>

              {/* 오른쪽 자동 슬라이드 갤러리 - 고정 px 제거하고 vh/vh 사용 */}
              <Link
                href="/courses?tab=gallery"
                className="hidden md:block bg-white/60 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
                style={{ 
                  width: '25vh',    // 화면 너비의 25%
                  height: '16vh',   // 비율 유지를 위해 width에 맞춘 높이 설정 (혹은 vh 사용 가능)
                  minWidth: '300px', // 너무 작아지지 않도록 최소폭 설정
                  minHeight: '200px'
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <div className="absolute inset-0 flex animate-slide-horizontal">
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

      {/* ===== 연구실 소개(텍스트+이미지) ===== */}
      {/* 상단 여백을 vh 단위로 설정 */}
      <section className="container mx-auto px-[4vh] mt-[10vh]">
        <div className="flex flex-col lg:flex-row items-center gap-[5vh]">
          {/* 텍스트 */}
          <div className="flex-1 w-full">
            <h2
              className="font-semibold leading-tight"
              style={{ 
                color: '#282828', 
                fontFamily: 'Pretendard',
                fontSize: 'clamp(24px, 3vh, 48px)' // 최소 24px, 평소 3vh, 최대 48px
              }}
            >
              Securing the Future, Connecting the World
            </h2>

            <div
              className="mt-[4vh] rounded-xl"
              style={{ backgroundColor: '#D9D9D933', backdropFilter: 'blur(30px)' } as React.CSSProperties}
            >
              <div className="p-[3vh] space-y-[2vh]">
                <h3
                  className="font-medium"
                  style={{ 
                    color: '#282828', 
                    fontFamily: 'Pretendard',
                    fontSize: 'clamp(18px, 2vh, 30px)'
                  }}
                >
                  Welcome
                </h3>

                <p
                  className="leading-relaxed"
                  style={{ 
                    color: '#282828', 
                    fontFamily: 'Pretendard',
                    fontSize: 'clamp(14px, 1.1vh, 18px)' // 본문은 너무 작아지지 않도록 clamp 사용
                  }}
                >
                  우리 AX융합 사이버보안 연구실은 AI보안, 산업시설 보안, 모빌리티 보안, 블록체인, 해킹·방어 기술을 
                  <br className="hidden lg:block" /> 하나로 엮어 지능형·안전한 디지털 세계를 설계합니다.
                  <br />AI 자가진화와 적대적 공격부터 스마트공장·드론·자동차 보안까지 연결된 모든 기술이 신뢰로 작동하는 미래 표준을 만들어 가겠습니다.
                </p>

                <p
                  className="leading-relaxed"
                  style={{ 
                    color: '#282828', 
                    fontFamily: 'Pretendard',
                    fontSize: 'clamp(16px, 1.4vh, 22px)'
                  }}
                >
                  부산에서 시작해 세계로 확장되는 보안·지능 연구의 중심, 
                  <br />ACCSLAB이 만들어 갑니다.
                </p>
              </div>
            </div>
          </div>

          {/* 이미지: 고정 픽셀 대신 % 너비 사용 */}
          <div className="w-full lg:w-[30%] max-w-[400px]">
            <div className="relative w-full aspect-[332/470]">
                <Image
                src="/main/image.png"
                alt="Digital Security Graphic"
                fill
                className="object-contain"
                priority
                />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 연구주제 ===== */}
      <section className="container mx-auto px-[4vh] mt-[10vh]">
        <h2
          className="font-extrabold text-center mb-[5vh]"
          style={{ 
            color: '#282828', 
            fontFamily: 'Pretendard',
            fontSize: 'clamp(24px, 2.5vh, 40px)'
          }}
        >
          연구주제
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3vh]">
          {/* 카드 컴포넌트화 대신 맵핑으로 처리하여 코드 간소화 및 일괄 스타일 적용 */}
          {[
            { src: "/main/AI.png", title: "AX융합 사이버보안 기술", desc: "AI 자가진화, 생성형 AI, AI 해킹, 적대적공격 등" },
            { src: "/main/Factory.png", title: "산업시설 사이버보안", desc: "스마트공장, 에너지시설, 원자력 사이버보안" },
            { src: "/main/drone.png", title: "모빌리티 보안", desc: "드론, 자동차, 로봇 사이버보안" },
            { src: "/main/Blockchain.png", title: "블록체인 응용기술", desc: "블록체인기술 적용연구" },
            { src: "/main/Hacking.png", title: "해킹/방어 및 리버싱 기술", desc: "역공학, 포렌식기술" },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-[2vh] shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-[2vh] flex justify-center">
                {/* 이미지 크기도 vh로 반응형 처리 */}
                <div className="relative w-[10vh] h-[10vh] min-w-[80px] min-h-[80px] max-w-[120px] max-h-[120px]">
                    <Image src={item.src} alt={item.title} fill className="object-contain" />
                </div>
              </div>
              <h3
                className="font-bold mb-[1vh] text-center"
                style={{ 
                    color: '#043A6F', 
                    fontFamily: 'Pretendard',
                    fontSize: 'clamp(18px, 1.5vh, 24px)' 
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-center"
                style={{ 
                    fontFamily: 'Pretendard',
                    fontSize: 'clamp(14px, 1vh, 16px)'
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 연구주제 자세히 보기 */}
        <div className="mt-[8vh] text-center">
          <a
            href="/research?tab=topics"
            className="inline-flex items-center gap-3 font-medium text-[#02162E] hover:text-[#043A6F] transition-colors"
            style={{ 
                fontFamily: 'Pretendard',
                fontSize: 'clamp(16px, 1.4vh, 20px)'
            }}
          >
            연구주제 자세히 보기
            <div className="relative w-[1vh] h-[1.8vh] min-w-[10px] min-h-[18px]">
                 <Image src="/main/Vector.svg" alt="Arrow" fill className="object-contain" />
            </div>
          </a>
        </div>
      </section>

      {/* ===== 산학협력기관 ===== */}
      <section className="container mx-auto px-[4vh] mt-[15vh]">
        <h2
          className="font-extrabold text-center"
          style={{ 
            color: '#282828', 
            fontFamily: 'Pretendard',
            fontSize: 'clamp(24px, 2.5vh, 40px)'
          }}
        >
          산학협력기관
        </h2>

        <div className="mt-[5vh] mb-[15vh] flex justify-center">
          <div className="relative w-full max-w-[80vh] aspect-[1127/100]">
            <Image
                src="/main/Main_흐르는텍스트_산학협력기관.svg"
                alt="산학협력기관 흐르는 텍스트"
                fill
                className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}