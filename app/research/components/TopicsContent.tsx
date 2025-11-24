'use client';

import { useState } from 'react';
import AiotDetail from './TopicsDetail/AiotDetail';
import NlpDetail from './TopicsDetail/NlpDetail';
import SocDetail from './TopicsDetail/SocDetail';
import BlockchainDetail from './TopicsDetail/BlockchainDetail';
import QuantumDetail from './TopicsDetail/QuantumDetail';
import CybersecDetail from './TopicsDetail/CybersecDetail';

type TopicItem = {
  id: string;
  ko: string;
  en: string;
  description: string;
};

const TOPICS: TopicItem[] = [
  {
    id: 'ax-cybersecurity',
    ko: 'AX융합 사이버보안 기술',
    en: 'AX Convergence Cybersecurity Technology',
    description: 'AI 자가진화, 생성형 AI, AI 해킹, 적대적공격 등'
  },
  {
    id: 'industrial-security',
    ko: '산업시설 사이버보안',
    en: 'Industrial Facility Cybersecurity',
    description: '스마트공장, 에너지시설, 원자력 사이버보안'
  },
  {
    id: 'mobility-security',
    ko: '모빌리티 보안',
    en: 'Mobility Security',
    description: '드론, 자동차, 로봇 사이버보안'
  },
  {
    id: 'blockchain',
    ko: '블록체인 응용기술',
    en: 'Blockchain Application Technology',
    description: '블록체인기술 적용연구'
  },
  {
    id: 'hacking-reversing',
    ko: '해킹/방어 및 리버싱 기술',
    en: 'Hacking/Defense & Reversing Technology',
    description: '역공학, 포렌식기술'
  },
];

export default function TopicsContent() {
  const [active, setActive] = useState<string>('ax-cybersecurity');

  const onSelect = (id: string) => {
    setActive(id);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 연구주제 제목 */}
      <div className="mb-8">
        <h2
          style={{
            fontFamily: 'Pretendard',
            fontWeight: 600,
            fontSize: '40px',
            lineHeight: '48px',
            color: '#02162E',
            marginBottom: '24px',
          }}
        >
          연구주제
        </h2>
        <div className="flex items-center">
          <div className="w-45 border-t-[3px] border-blue-800" />
          <div className="flex-1 border-t border-gray-300" />
        </div>
      </div>

      {/* 카드 그리드 */}
      <div className="bg-gray-100 bg-opacity-20 py-8 px-6 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TOPICS.map((topic) => {
            const isSelected = active === topic.id;

            return (
              <button
                key={topic.id}
                onClick={() => onSelect(topic.id)}
                className="flex flex-col justify-center items-start text-left transition-all duration-200 cursor-pointer w-full p-7 gap-3 rounded-2xl"
                style={{
                  background: isSelected ? '#0B2E5A' : '#FFFFFF',
                  boxShadow: isSelected
                    ? '13px 23px 11px rgba(11,46,90,0.01), 7px 13px 9px rgba(11,46,90,0.02), 3px 6px 7px rgba(11,46,90,0.03), 1px 1px 4px rgba(0,0,0,0.04)'
                    : '0px 4px 8px rgba(0,0,0,0.1)',
                }}
              >
                <div className="flex flex-col items-center gap-2 w-full">
                  <div
                    style={{
                      fontFamily: 'Pretendard',
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '1.2',
                      color: isSelected ? '#EFF2F5' : '#0B2E5A',
                    }}
                    className="break-keep text-center"
                  >
                    {topic.ko}
                  </div>

                  <div
                    style={{
                      fontFamily: 'Pretendard',
                      fontWeight: 400,
                      fontSize: '13px',
                      lineHeight: '1.3',
                      color: isSelected ? '#EFF2F5' : '#6D6D6D',
                    }}
                    className="break-keep whitespace-normal text-center"
                  >
                    {topic.en}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 선택된 주제 상세 - 모든 컴포넌트 렌더링하되 hidden으로 제어 */}
      <div className="mt-8">
        <div className={active === 'ax-cybersecurity' ? '' : 'hidden'}>
          <AiotDetail />
        </div>
        <div className={active === 'industrial-security' ? '' : 'hidden'}>
          <NlpDetail />
        </div>
        <div className={active === 'mobility-security' ? '' : 'hidden'}>
          <SocDetail />
        </div>
        <div className={active === 'blockchain' ? '' : 'hidden'}>
          <BlockchainDetail />
        </div>
        <div className={active === 'hacking-reversing' ? '' : 'hidden'}>
          <QuantumDetail />
        </div>
      </div>
    </div>
  );
}