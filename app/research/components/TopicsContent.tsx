'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
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
  frameWidth: number;
  frameHeight: number;
  koWidth: number;
  enWidth: number;
};

const TOPICS: TopicItem[] = [
  { 
    id: 'aiot', 
    ko: 'AI보안 및 산업용 AI', 
    en: 'Artificial Intelligence & IoT',
    frameWidth: 224,
    frameHeight: 63,
    koWidth: 224,
    enWidth: 224
  },
  { 
    id: 'nlp', 
    ko: 'AI기반 자연어처리', 
    en: 'Artificial Intelligence-based natural language processing',
    frameWidth: 287,
    frameHeight: 81,
    koWidth: 287,
    enWidth: 287
  },
  { 
    id: 'soc', 
    ko: '반도체 SoC 및 사이버 보안', 
    en: 'Hardware SOC & Cyber Security',
    frameWidth: 287,
    frameHeight: 63,
    koWidth: 313,
    enWidth: 287
  },
  { 
    id: 'blockchain', 
    ko: '블록체인', 
    en: 'Blockchain Technology',
    frameWidth: 224,
    frameHeight: 63,
    koWidth: 224,
    enWidth: 224
  },
  { 
    id: 'quantum', 
    ko: '양자컴퓨팅 및 암호 해독', 
    en: 'Quantum Computing & Cryptanalysis',
    frameWidth: 287,
    frameHeight: 63,
    koWidth: 287,
    enWidth: 287
  },
  { 
    id: 'cybersec', 
    ko: '사이버보안', 
    en: 'Processing/Cybersecurity',
    frameWidth: 287,
    frameHeight: 63,
    koWidth: 287,
    enWidth: 287
  },
];

export default function TopicsContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 현재 선택된 주제 (기본값: aiot)
  const active = searchParams.get('topic') ?? 'aiot';

  const onSelect = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', 'topics');
    params.set('topic', id);
    router.push(`${pathname}?${params.toString()}`);
  };

  // 선택된 주제에 따른 상세 컴포넌트 렌더링
  const renderDetail = () => {
    switch (active) {
      case 'aiot':
        return <AiotDetail />;
      case 'nlp':
        return <NlpDetail />;
      case 'soc':
        return <SocDetail />;
      case 'blockchain':
        return <BlockchainDetail />;
      case 'quantum':
        return <QuantumDetail />;
      case 'cybersec':
        return <CybersecDetail />;
      default:
        return <AiotDetail />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      {/* 연구주제 제목 - 간격 조정 */}
      <div className="mb-8">
        <h2 
          style={{
            width: '139px',
            height: '48px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: '40px',
            lineHeight: '48px',
            color: '#02162E',
            marginBottom: '24px'
          }}
        >
          연구주제
        </h2>
        <div className="flex items-center">
          <div 
            style={{
              width: '205px',
              height: '0px',
              border: '3px solid #000000'
            }}
          ></div>
          <div 
            style={{
              width: '1278px',
              height: '0px',
              border: '1px solid #D3D3D3'
            }}
          ></div>
        </div>
      </div>

      {/* 그리드 배경과 카드들 - 이전 상태로 복원 */}
      <div className="bg-gray-100 bg-opacity-20 py-8 px-6 rounded-lg">
        <div className="grid grid-cols-3 gap-6">
          {TOPICS.map((topic) => {
            const isSelected = active === topic.id;
            
            return (
              <button
                key={topic.id}
                onClick={() => onSelect(topic.id)}
                className="flex flex-col justify-center items-start text-left transition-all duration-200 cursor-pointer"
                style={{
                  width: '353px',
                  height: '155px',
                  padding: '28px',
                  gap: '12px',
                  background: isSelected ? '#0B2E5A' : '#FFFFFF',
                  boxShadow: isSelected 
                    ? '13px 23px 11px rgba(11, 46, 90, 0.01), 7px 13px 9px rgba(11, 46, 90, 0.02), 3px 6px 7px rgba(11, 46, 90, 0.03), 1px 1px 4px rgba(0, 0, 0, 0.04)'
                    : '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '24px',
                  border: 'none'
                }}
              >
                <div 
                  className="flex flex-col items-start"
                  style={{
                    width: `${topic.frameWidth}px`,
                    height: `${topic.frameHeight}px`,
                    gap: '12px',
                    padding: '0px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0
                  }}
                >
                  <div 
                    style={{
                      width: `${topic.koWidth}px`,
                      height: '33px',
                      fontFamily: 'Pretendard',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '28px',
                      lineHeight: '33px',
                      color: isSelected ? '#EFF2F5' : '#0B2E5A',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0
                    }}
                  >
                    {topic.ko}
                  </div>
                  <div 
                    style={{
                      width: `${topic.enWidth}px`,
                      height: '18px',
                      fontFamily: 'Pretendard',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '18px',
                      color: isSelected ? '#EFF2F5' : '#6D6D6D',
                      flex: 'none',
                      order: 1,
                      alignSelf: 'stretch',
                      flexGrow: 0
                    }}
                  >
                    {topic.id === 'nlp' ? (
                      <>
                        Artificial Intelligence-based natural<br />
                        language processing
                      </>
                    ) : (
                      topic.en
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 선택된 주제의 상세 내용 */}
      {renderDetail()}
    </div>
  );
}