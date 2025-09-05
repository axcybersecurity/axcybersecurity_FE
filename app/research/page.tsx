'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import TopicsContent from './components/TopicsContent';
import ResultsContent from './components/ResultsContent';

function ResearchPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'topics';

  const tabs = [
    { id: 'topics', title: '연구주제', href: '/research?tab=topics' },
    { id: 'results', title: '연구실적', href: '/research?tab=results' }
  ];

  // 활성 탭에 따른 제목 설정
  const getPageTitle = () => {
    return activeTab === 'topics' ? '연구주제' : '연구실적';
  };

  return (
    <div>
      {/* 히어로 섹션 - 후보.png 배경 */}
      <div className="relative bg-[url('/후보.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative container mx-auto px-6 py-12 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-8 border-b-4 border-white pb-4 pt-20 text-white inline-block">
            {getPageTitle()}
          </h1>
          <div className="flex pb-10">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => router.push(tab.href)}
                className={`py-2 px-6 text-lg font-medium transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'border-b-2 border-white text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="bg-white py-16 px-0">
        {activeTab === 'topics' && <TopicsContent />}
        {activeTab === 'results' && <ResultsContent />}
      </div>
    </div>
  );
}

export default function ResearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResearchPageContent />
    </Suspense>
  );
}