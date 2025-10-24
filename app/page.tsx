'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { logoutApi } from '../lib/api';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 로그인 상태 확인
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      // 토큰 가져오기
      const token = localStorage.getItem('token');
      
      if (token) {
        // 로그아웃 API 호출 (토큰 포함)
        await logoutApi.logout(token);
      }
      
      // 로컬 스토리지에서 토큰 제거
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      
      // 페이지 새로고침으로 상태 업데이트
      window.location.reload();
    } catch (error) {
      console.error('로그아웃 실패:', error);
      // API 실패해도 로컬에서라도 로그아웃 처리
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      window.location.reload();
    }
  };

  return (
    <div className="w-full relative">
      {/* 히어로 이미지 섹션 (일반 흐름, aspect 고정) */}
      <div className="relative w-full aspect-[8/3]">
        <Image
          src="/3.png"
          alt="PNU InfoSec 히어로 이미지"
          className="object-cover object-[50%_60%]"
          fill
          priority
        />

        {/* 로그인/로그아웃 버튼 - 오른쪽 상단 (반응형) */}
        <div className="absolute top-[2%] right-[3%] sm:right-[4%] md:right-[5%] lg:right-[6%] z-30">
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logout.svg"
                alt="로그아웃"
                width={132}
                height={48}
                className="w-auto h-auto"
              />
            </button>
          ) : (
            <Link href="/login" className="flex items-center">
              <Image
                src="/loginbutton.svg"
                alt="로그인"
                width={132}
                height={48}
                className="hover:opacity-80 transition-opacity w-auto h-auto"
              />
            </Link>
          )}
        </div>

        {/* 히어로 텍스트 오버레이 (헤더 아래에 오도록 z 낮춤) */}
        <div className="absolute z-10 top-[65%] left-[20.8%] w-full max-w-[777px] -translate-y-1/2">
          <div>
            <h1 
              className="text-[32px] font-light mb-5 leading-[100%] tracking-[-5%]" 
              style={{ color: '#282828', fontFamily: 'Pretendard' }}
            >
              Information Security & AloT
            </h1>
            <p 
              className="text-[48px] font-semibold leading-[123%] tracking-[0%]" 
              style={{ color: '#282828', fontFamily: 'Pretendard' }}
            >
              AI, 블록체인, IoT기술로<br />미래를 설계하다.
            </p>
          </div>
        </div>
      </div>

      {/* 연구실 주요성과*/}
      <div 
        className="relative z-10 w-full flex justify-center" 
        style={{ marginTop: 'clamp(32px, 7vw, 84px)' }}
      >
        <h2 
          className="text-[32px] font-extrabold leading-[100%] tracking-[0%] text-center" 
          style={{ color: '#282828', fontFamily: 'Pretendard' }}
        >
          연구실 주요성과
        </h2>
      </div>

      {/* 연구실 성과 이미지 섹션 */}
      <div 
        className="relative z-10 w-full flex flex-col items-center" 
        style={{ marginTop: 'clamp(28px, 6vw, 56px)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl px-4">
          {/* ICCV 이미지 */}
          <div className="flex flex-col items-center">
            <div className="mb-[25px]">
              <Image
                src="/ICCV.png"
                alt="ICCV 논문"
                className="object-contain"
                width={216}
                height={133}
                quality={100}
              />
            </div>
            <p 
              className="text-[17px] font-medium leading-[120%] tracking-[-5%] text-center" 
              style={{ color: '#02162E', fontFamily: 'Pretendard' }}
            >
              ICCV-23<br/>논문 등재
            </p>
          </div>

          {/* CVPR 이미지 */}
          <div className="flex flex-col items-center">
            <div className="mb-[25px]">
              <Image
                src="/CVPR.png"
                alt="CVPR 논문"
                className="object-contain"
                width={216}
                height={133}
                quality={100}
              />
            </div>
            <p 
              className="text-[17px] font-medium leading-[120%] tracking-[-5%] text-center" 
              style={{ color: '#02162E', fontFamily: 'Pretendard' }}
            >
              CVR-2022<br/>논문 등재
            </p>
          </div>

          {/* 성과로고 이미지 */}
          <div className="flex flex-col items-center">
            <div className="mb-[26px]">
              <Image
                src="/성과로고_국가우수성과.png"
                alt="국가연구개발"
                className="object-contain"
                width={216}
                height={133}
                quality={100}
              />
            </div>
            <p 
              className="text-[17px] font-medium leading-[120%] tracking-[-5%] text-center" 
              style={{ color: '#02162E', fontFamily: 'Pretendard' }}
            >
              국가연구개발<br/>우수성과 100선
            </p>
          </div>
        </div>
      </div>

      {/* 공지사항 및 새소식 섹션 */}
      <div 
        className="relative z-10 w-full flex flex-col items-center" 
        style={{ marginTop: 'clamp(32px, 7vw, 84px)' }}
      >
        <div className="w-full h-[437px] flex items-center justify-center" style={{ backgroundColor: '#D9D9D933' }}>
          <div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl px-4 justify-items-center" 
            style={{ gap: 'clamp(32px, 8vw, 135px)' }}
          >
            {/* 공지사항 */}
            <div className="bg-transparent rounded-lg w-full max-w-[390px] h-[194px] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 
                  className="text-[24px] font-extrabold leading-[100%] tracking-[0%]" 
                  style={{ color: '#043A6F', fontFamily: 'Pretendard' }}
                >
                  공지사항
                </h3>
                <svg 
                  className="w-[32px] h-[36px] text-black relative" 
                  style={{ top: '2.26px', left: '2.34px' }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
              <div className="relative">
                <div className="w-[90px] h-[3px] bg-[#043A6F]"></div>
                <div className="w-full h-[0.75px] bg-black absolute top-0"></div>
              </div>
            </div>

            {/* 새소식 */}
            <div className="bg-transparent rounded-lg w-full max-w-[390px] h-[194px] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 
                  className="text-[24px] font-extrabold leading-[100%] tracking-[0%]" 
                  style={{ color: '#043A6F', fontFamily: 'Pretendard' }}
                >
                  새소식
                </h3>
                <svg 
                  className="w-[32px] h-[36px] text-black relative" 
                  style={{ top: '2.26px', left: '2.34px' }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
              <div className="relative">
                <div className="w-[70px] h-[3px] bg-[#043A6F]"></div>
                <div className="w-full h-[0.75px] bg-black absolute top-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 연구실 소개 섹션 */}
      <div 
        className="relative z-10 w-full flex flex-col items-center" 
        style={{ marginTop: 'clamp(64px, 10vw, 136px)' }}
      >
        <div className="w-full max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center relative">
            {/* 텍스트 섹션 */}
            <div className="flex-1 space-y-[75px]">
              <h2 
                style={{ 
                  fontFamily: 'Pretendard',
                  fontWeight: 600,
                  fontStyle: 'normal',
                  fontSize: '40px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#282828',
                  marginLeft: '-30px'
                }}
              >
                Securing the Future, Connecting the World
              </h2>
              
              <div 
                className="space-y-4" 
                style={{ 
                  backgroundColor: '#D9D9D933', 
                  backdropFilter: 'blur(30px)',
                  width: '1190px',
                  height: '381px',
                  paddingTop: '36px',
                  paddingRight: '64px',
                  paddingBottom: '36px',
                  paddingLeft: '64px',
                  gap: '40px',
                  marginLeft: '-188px'
                }}
              >
                <h3 
                  style={{ 
                    fontFamily: 'Pretendard',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    fontSize: '27px',
                    lineHeight: '100%',
                    letterSpacing: '-8%',
                    color: '#282828',
                    marginBottom: '40px'
                  }}
                >
                  Welcome
                </h3>
                
                <p 
                  style={{ 
                    fontFamily: 'Pretendard',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: '18px',
                    lineHeight: '30px',
                    letterSpacing: '-1px',
                    color: '#282828',
                    marginBottom: '35px'
                  }}
                >
                  인터넷이 세상을 연결했다면, ISLAB은 그 연결을 지능과 안전으로 완성합니다. AI보안·양자내성 암호·블록체인·지능형IoT를<br/>한축으로 묶어, 사람·데이터·사물이 믿음을 주고받는 미래를 부산에서 설계하고 전세계로 확장합니다.<br/>연구로 끝나지 않고, 산업·정책·창업 생태계를 함께 움직여
                </p>
                
                <p 
                  style={{ 
                    fontFamily: 'Pretendard',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: '24px',
                    lineHeight: '30px',
                    letterSpacing: '-1.92px',
                    color: '#282828',
                    marginBottom: '40px'
                  }}
                >
                  안전한 디지털 가치라는 새로운 표준을 만들어 가겠습니다.
                </p>

                <button 
                  style={{ 
                    fontFamily: 'Pretendard',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '24px',
                    lineHeight: '40px',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#5E9BDC',
                    padding: '8px 26px',
                    borderRadius: '8px',
                    border: '1px solid #5E9BDC',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  more
                </button>
              </div>
            </div>
            
            {/* 이미지 섹션 */}
            <div 
              className="flex-shrink-0" 
              style={{ 
                position: 'absolute',
                right: '-30px',
                top: '37%',
                transform: 'translateY(-50%)',
                zIndex: '-1'
              }}
            >
              <Image
                src="/image.png"
                alt="Digital Security Graphic"
                width={332}
                height={470}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* 연구실 소개 */}
      <div 
        className="relative z-10 w-full flex flex-col items-center" 
        style={{ marginTop: 'clamp(32px, 7vw, 84px)' }}
      >
        <h2 
          className="text-[32px] font-extrabold leading-[100%] tracking-[0%] text-center" 
          style={{ color: '#282828', fontFamily: 'Pretendard' }}
        >
          연구실 소개
        </h2>
        <div className="w-full px-4 mt-12 flex justify-center">
          <div 
            className="text-left" 
            style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto', transform: 'translateX(-3.5%)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '314px' }}>
              <a 
                href="#" 
                style={{ 
                  fontFamily: 'Pretendard',
                  fontWeight: 500,
                  fontStyle: 'medium',
                  fontSize: '24px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#02162E',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  whiteSpace: 'nowrap'
                }}
              >
                연구주제 자세히 보기
                <Image
                  src="/Vector.svg"
                  alt="Arrow"
                  width={9.75}
                  height={18}
                  className="object-contain"
                />
              </a>
              <p 
                style={{ 
                  fontFamily: 'Pretendard',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '24px',
                  lineHeight: '35px',
                  letterSpacing: '0%',
                  color: '#A8A3A3',
                  whiteSpace: 'pre-line'
                }}
              >
                저희 정보 보호 및 physical AI 연구실에서는<br/>
                정보보호 및 지능형 IoT를 주제로 다양한 연구를 진행중입니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 연구 주제 이미지들 */}
      <div 
        className="relative z-10 w-full flex flex-col items-center" 
        style={{ marginTop: '20px' }}
      >
        <div className="flex w-full px-4 justify-center">
          <Image
            src="/Property 1=01_AI보안 및  산업용 AI.svg"
            alt="AI보안 및 산업용 AI"
            width={240}
            height={411}
            className="object-contain"
          />
          <Image
            src="/Property 1=02_AI기반  자연어처리.svg"
            alt="AI기반 자연어처리"
            width={240}
            height={411}
            className="object-contain"
          />
          <Image
            src="/Property 1=03_반도체 SoC 및 사이버 보안.svg"
            alt="반도체 SoC 및 사이버 보안"
            width={240}
            height={411}
            className="object-contain"
          />
          <Image
            src="/Property 1=04_블록체인.svg"
            alt="블록체인"
            width={240}
            height={411}
            className="object-contain"
          />
          <Image
            src="/Property 1=05_양자컴퓨팅 및 암호 해독.svg"
            alt="양자컴퓨팅 및 암호 해독"
            width={240}
            height={411}
            className="object-contain"
          />
          <Image
            src="/Property 1=06_사이버보안.svg"
            alt="사이버보안"
            width={240}
            height={411}
            className="object-contain"
          />
        </div>
      </div>

      {/* 산학협력기관 */}
      <div 
        className="relative z-10 w-full flex justify-center" 
        style={{ marginTop: 'clamp(32px, 7vw, 104px)' }}
      >
        <h2 
          className="text-[32px] font-extrabold leading-[100%] tracking-[0%] text-center" 
          style={{ color: '#282828', fontFamily: 'Pretendard' }}
        >
          산학협력기관
        </h2>
      </div>
      
      {/* 산학협력기관 흐르는 텍스트 */}
      <div 
        className="relative z-10 w-full flex justify-center" 
        style={{ marginTop: '74px', marginBottom: '137px' }}
      >
        <Image
          src="/Main_흐르는텍스트_산학협력기관.svg"
          alt="산학협력기관 흐르는 텍스트"
          width={1127}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
}