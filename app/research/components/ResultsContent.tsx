'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ResultsContent() {
  const [activeTab, setActiveTab] = useState('전체');

  const tabs = ['전체', 'SCI', '국제학술대회', '국내논문 및 국내학술대회', '특허실적', '프로젝트'];

  return (
    <div className="relative py-8 isolate">
      {/* 상단 그라데이션 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-16 bg-gradient-to-b from-cyan-50 to-transparent -z-10"
        style={{
          height: '560px',
          maxWidth: '100vw',
        }}
      />

      {/* 연구실적 모아보기 */}
      <div className="w-full flex justify-center mb-12 sm:mb-16 px-4">
        <div className="relative w-full max-w-[920px]">
          <Image
            src="/research_ResultContent/연구실적 모아보기.svg"
            alt="연구실적 성과"
            width={912}
            height={108}
            className="w-full h-auto object-contain"
            priority
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-16 sm:h-20 border-l border-dashed border-[#A8A3A3] z-10"
            style={{ left: '30%' }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-16 sm:h-20 border-l border-dashed border-[#A8A3A3] z-10"
            style={{ left: '66.5%' }}
          />
        </div>
      </div>

      {/* 연구실 주요성과 */}
      <div className="w-full flex flex-col items-center">
        <h2
          className="text-center mb-10 sm:mb-14"
          style={{
            fontFamily: 'Pretendard',
            fontWeight: 600,
            fontSize: '28px',
            lineHeight: '34px',
            color: '#02162E',
          }}
        >
          연구실 주요성과
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 max-w-[1200px] px-4">
          <Image
            src="/research_ResultContent/둥가둥가1.svg"
            alt="ICCV 논문"
            width={360}
            height={440}
            className="object-contain cursor-pointer md:-mr-8 shadow-none w-[260px] sm:w-[320px] md:w-[360px] float1"
          />
          <Image
            src="/research_ResultContent/둥가둥가2.svg"
            alt="CVPR 논문"
            width={360}
            height={440}
            className="object-contain cursor-pointer md:-mx-8 shadow-none w-[260px] sm:w-[320px] md:w-[360px] float2"
          />
          <Image
            src="/research_ResultContent/둥가둥가3.svg"
            alt="국가연구개발 우수성과"
            width={360}
            height={440}
            className="object-contain cursor-pointer md:-ml-8 shadow-none w-[260px] sm:w-[320px] md:w-[360px] float3"
          />
        </div>
      </div>

      {/* 연구실적 리스트 */}
      <div className="w-full pt-0 pb-0 -mt-16 sm:-mt-24 px-4">
        <h2
          className="text-center mb-8 sm:mb-12"
          style={{
            fontFamily: 'Pretendard',
            fontWeight: 600,
            fontSize: '28px',
            lineHeight: '34px',
            color: '#02162E',
          }}
        >
          연구실적
        </h2>

        {/* 탭 */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium transition-colors duration-200 rounded-full ${
                  activeTab === tab
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                style={activeTab === tab ? { backgroundColor: '#043A6F' } : {}}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 선택 탭 컨테이너 */}
        {activeTab !== '전체' ? (
          <div className="mx-auto bg-white rounded-lg p-4 sm:p-6 mb-8 w-full max-w-[980px] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="logo"
                width={24}
                height={24}
                className="object-contain"
              />
              <h3
                className="text-center"
                style={{
                  fontFamily: 'Pretendard',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '26px',
                  color: '#02162E',
                }}
              >
                {activeTab}
              </h3>
            </div>

            <div className="h-px bg-black mb-4 mx-auto w-full" />

            <div className="w-full min-h-[320px] sm:min-h-[420px] md:min-h-[500px] flex items-center justify-center text-center px-2">
              <p className="text-black text-base sm:text-lg">
                {activeTab === 'SCI' && '여기에 SCI 논문 내용이 들어갑니다'}
                {activeTab === '국제학술대회' && '여기에 국제학술대회 내용이 들어갑니다'}
                {activeTab === '국내논문 및 국내학술대회' && '여기에 국내논문 및 국내학술대회 내용이 들어갑니다'}
                {activeTab === '특허실적' && '여기에 특허실적 내용이 들어갑니다'}
                {activeTab === '프로젝트' && '여기에 프로젝트 내용이 들어갑니다'}
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] rounded-lg flex items-center justify-center bg-white/0">
            <p className="text-black text-base sm:text-lg">
              여기에 전체 연구실적 내용이 들어갑니다
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

