// app/research/components/ResultsContent.tsx

import Image from 'next/image';
import { useState } from 'react';

export default function ResultsContent() {
  const [activeTab, setActiveTab] = useState('전체');

  return (
    // ✅ 전체를 relative로 감싸 스택 컨텍스트 생성
    <div className="relative py-8 isolate">
      {/* ✅ 후보.png 바로 밑에서 시작하는 그라데이션 (page.tsx 수정 없이) */}
      {/* page.tsx의 콘텐츠 래퍼가 py-16(=64px) 이므로 -mt-16로 보정하여 '바로 아래'에서 시작하게 함 */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-x-0 -top-16  /* 후보.png 바로 아래(콘텐츠 패딩 64px 보정) */
          bg-gradient-to-b from-cyan-50 to-transparent
          -z-10
          mx-auto
        "
        style={{
          height: '620px',          // 둥가둥가 카드 중간까지 닿도록(필요 시 420~600px 사이 조정)
          maxWidth: '100vw'          // 뷰포트 전폭
        }}
      />

      {/* 연구실적 모아보기 섹션 */}
      <div className="w-full flex justify-center mb-16">
        <div className="relative">
          <Image
            src="/연구실적 모아보기.svg"
            alt="연구실적 성과"
            width={912}
            height={108}
            className="object-contain"
          />
          {/* 점선 구분선 - % 기준 */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-20 border-l border-dashed border-[#A8A3A3] z-10"
            style={{ left: '30%' }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-20 border-l border-dashed border-[#A8A3A3] z-10"
            style={{ left: '66.5%' }}
          />
        </div>
      </div>

      {/* 연구실 주요성과 섹션 */}
      <div className="w-full flex flex-col items-center">
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: 'Pretendard',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '38px',
            color: '#02162E'
          }}
        >
          연구실 주요성과
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-8xl px-4">
          <img
            src="/둥가둥가1.svg"
            alt="ICCV 논문"
            width={400}
            height={480}
            className="object-contain cursor-pointer -mr-8 shadow-none"
            style={{ 
              animation: 'gentleFloat 4s ease-in-out infinite',
              animationDelay: '0s'
            }}
          />
          <img
            src="/둥가둥가2.svg"
            alt="CVPR 논문"
            width={400}
            height={480}
            className="object-contain cursor-pointer -mx-8 shadow-none"
            style={{ 
              animation: 'gentleFloat2 4s ease-in-out infinite',
              animationDelay: '1.3s',
              transform: 'translateY(-40px)'
            }}
          />
          <img
            src="/둥가둥가3.svg"
            alt="국가연구개발 우수성과"
            width={400}
            height={480}
            className="object-contain cursor-pointer -ml-8 shadow-none"
            style={{ 
              animation: 'gentleFloat 4s ease-in-out infinite',
              animationDelay: '2.6s'
            }}
          />
        </div>
      </div>

      {/* 연구실적 상세 섹션 */}
      <div className="w-full pt-0 pb-0 -mt-24 px-8">
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: 'Pretendard',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '38px',
            color: '#02162E'
          }}
        >
          연구실적
        </h2>

        <div className="flex justify-center mb-4">
          <div className="flex gap-20">
            {['전체', 'SCI', '국제학술대회', '국내논문 및 국내학술대회', '특허실적', '프로젝트'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-1 text-base font-medium transition-colors duration-200 rounded-full ${
                  activeTab === tab ? 'text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                style={activeTab === tab ? { backgroundColor: '#043A6F' } : {}}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 선택된 탭 제목 표시 - 탭 바로 아래에 위치 */}
        {activeTab !== '전체' && (
          <div 
            className="mx-auto bg-white rounded-lg p-6 mb-8"
            style={{ width: '925px' }}
          >
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
                  fontSize: '24px',
                  lineHeight: '28px',
                  color: '#02162E'
                }}
              >
                {activeTab}
              </h3>
            </div>
            <div 
              className="h-px bg-black mb-4 mx-auto"
              style={{
                width: '925px' // 둥가둥가1 왼쪽부터 둥가둥가3 오른쪽까지의 거리
              }}
            ></div>
            
            {/* 연구실적 내용 영역 */}
            <div className="w-full min-h-[500px] flex items-center justify-center">
              <p className="text-black text-lg">
                {activeTab === 'SCI' && '여기에 SCI 논문 내용이 들어갑니다'}
                {activeTab === '국제학술대회' && '여기에 국제학술대회 내용이 들어갑니다'}
                {activeTab === '국내논문 및 국내학술대회' && '여기에 국내논문 및 국내학술대회 내용이 들어갑니다'}
                {activeTab === '특허실적' && '여기에 특허실적 내용이 들어갑니다'}
                {activeTab === '프로젝트' && '여기에 프로젝트 내용이 들어갑니다'}
              </p>
            </div>
          </div>
        )}

        {/* 전체 탭일 때의 내용 */}
        {activeTab === '전체' && (
          <div className="w-full min-h-96 rounded-lg flex items-center justify-center" style={{}}>
            <p className="text-black text-lg">여기에 전체 연구실적 내용이 들어갑니다</p>
          </div>
        )}
      </div>
    </div>
  );
}
