'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { logoutApi } from '../lib/api';
import NoticeList from '../components/NoticeList';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) await logoutApi.logout(token);
    } catch (e) {
      console.error('로그아웃 실패:', e);
    } finally {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      window.location.reload();
    }
  };

  return (
    <div className="w-full">
      {/* ===== HERO ===== */}
      <section className="relative w-full">
        {/* 모바일 16:9 → md 21:9 → lg 8:3 비율 */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[8/3]">
          <Image
            src="/main/3.png"
            alt="PNU InfoSec 히어로 이미지"
            className="object-cover object-center"
            fill
            priority
          />

          {/* 로그인/로그아웃 */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-6 md:top-6 md:right-8 z-30">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="hover:opacity-80 transition-opacity" aria-label="로그아웃">
                <Image src="/main/logout.svg" alt="" width={132} height={48} />
              </button>
            ) : (
              <Link href="/login" className="hover:opacity-80 transition-opacity" aria-label="로그인">
                <Image src="/main/loginbutton.svg" alt="" width={132} height={48} />
              </Link>
            )}
          </div>

          {/* 히어로 텍스트 */}
          <div className="absolute inset-0 z-10">
            <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
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
            </div>
          </div>
        </div>
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

      {/* ===== 연구실 소개(링크+문장) ===== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-center"
          style={{ color: '#282828', fontFamily: 'Pretendard' }}
        >
          연구실 소개
        </h2>

        <div className="mt-6 sm:mt-10 flex flex-col gap-4 sm:gap-6 items-center">
          <a
            href="#"
            className="flex items-center gap-3 text-lg sm:text-xl font-medium text-[#02162E]"
            style={{ fontFamily: 'Pretendard' }}
          >
            연구주제 자세히 보기
            <Image src="/main/Vector.svg" alt="Arrow" width={10} height={18} className="h-4 w-auto" />
          </a>

          <p
            className="text-center text-gray-500 text-base sm:text-lg leading-7"
            style={{ fontFamily: 'Pretendard' }}
          >
            저희 정보 보호 및 physical AI 연구실에서는
            <br className="hidden sm:block" />
            정보보호 및 지능형 IoT를 주제로 다양한 연구를 진행중입니다.
          </p>
        </div>
      </section>

      {/* ===== 연구 주제 이미지 그리드 ===== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {[
            ['/main/Property 1=01_AI보안 및  산업용 AI.svg', 'AI보안 및 산업용 AI'],
            ['/main/Property 1=02_AI기반  자연어처리.svg', 'AI기반 자연어처리'],
            ['/main/Property 1=03_반도체 SoC 및 사이버 보안.svg', '반도체 SoC 및 사이버 보안'],
            ['/main/Property 1=04_블록체인.svg', '블록체인'],
            ['/main/Property 1=05_양자컴퓨팅 및 암호 해독.svg', '양자컴퓨팅 및 암호 해독'],
            ['/main/Property 1=06_사이버보안.svg', '사이버보안'],
          ].map(([src, alt]) => (
            <div key={src} className="flex justify-center">
              <Image src={src} alt={alt} width={240} height={411} className="h-auto w-full max-w-[200px]" />
            </div>
          ))}
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
