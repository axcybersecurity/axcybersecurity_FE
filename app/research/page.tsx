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
    { id: 'results', title: '연구실적', href: '/research?tab=results' },
  ];

  const pageTitle = '연구 내용';

  return (
    <div>
      {/* ==== Hero Section ==== */}
      <div className="relative bg-[url('/page배경.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative container mx-auto px-4 sm:px-6 min-h-[260px] md:min-h-[330px] flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 border-b-4 border-white pb-3 md:pb-4 pt-16 md:pt-20 text-white inline-block">
            {pageTitle}
          </h1>

          {/* 탭 영역: 중앙 정렬 + 모바일 스크롤 */}
          <div
            className="w-full max-w-5xl pb-6 md:pb-10 flex justify-center"
            role="tablist"
            aria-label="연구 내용 탭"
          >
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar px-4 sm:px-0">
              {tabs.map((tab) => {
                const selected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`panel-${tab.id}`}
                    onClick={() => router.push(tab.href)}
                    className={`whitespace-nowrap py-2 px-4 md:px-6 text-base md:text-lg font-medium transition-colors duration-300 rounded ${
                      selected
                        ? 'border-b-2 border-white text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ==== Content Area ==== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {activeTab === 'topics' && <TopicsContent />}
        {activeTab === 'results' && <ResultsContent />}
      </div>
    </div>
  );
}

export default function ResearchPage() {
  return (
    <Suspense fallback={<div className="py-10 text-center text-gray-500">Loading...</div>}>
      <ResearchPageContent />
    </Suspense>
  );
}
