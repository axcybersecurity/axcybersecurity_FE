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
};

const TOPICS: TopicItem[] = [
  { id: 'aiot', ko: 'AI보안 및 산업용 AI', en: 'Artificial Intelligence & IoT' },
  { id: 'nlp', ko: 'AI기반 자연어처리', en: 'Artificial Intelligence-based natural language processing' },
  { id: 'soc', ko: '반도체 SoC 및 사이버 보안', en: 'Hardware SOC & Cyber Security' },
  { id: 'blockchain', ko: '블록체인', en: 'Blockchain Technology' },
  { id: 'quantum', ko: '양자컴퓨팅 및 암호 해독', en: 'Quantum Computing & Cryptanalysis' },
  { id: 'cybersec', ko: '사이버보안', en: 'Processing/Cybersecurity' },
];

export default function TopicsContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const active = searchParams.get('topic') ?? 'aiot';

  const onSelect = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', 'topics');
    params.set('topic', id);
    router.push(`${pathname}?${params.toString()}`);
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="flex flex-col items-start gap-2 w-full">
                  <div
                    style={{
                      fontFamily: 'Pretendard',
                      fontWeight: 700,
                      fontSize: '28px',
                      lineHeight: '1.2',
                      color: isSelected ? '#EFF2F5' : '#0B2E5A',
                    }}
                    className="break-keep"
                  >
                    {topic.ko}
                  </div>

                  {/* 여기서 NLP만 natural 뒤에 줄바꿈 */}
                  <div
                    style={{
                      fontFamily: 'Pretendard',
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '1.3',
                      color: isSelected ? '#EFF2F5' : '#6D6D6D',
                    }}
                    className="break-keep whitespace-normal"
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

      {/* 선택된 주제 상세 */}
      {renderDetail()}
    </div>
  );
}