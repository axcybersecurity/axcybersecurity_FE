'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// '연구주제' 탭에 표시될 예시 콘텐츠
const TopicsContent = () => (
    <div>
      여기에 연구 주제를 넣어
    </div>
);

// '연구실적' 탭에 표시될 예시 콘텐츠
const ResultsContent = () => (
    <div>
        여기에 연구 실적을 넣어
    </div>
);


function ResearchPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // URL에서 'tab' 파라미터를 읽어옵니다. 없으면 'topics'를 기본값으로 사용합니다.
  const activeTab = searchParams.get('tab') || 'topics';

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">연구 실적</h1>
      <div className="flex border-b mb-6">
        <button
          onClick={() => router.push(`${pathname}?tab=topics`)}
          className={`py-2 px-6 text-lg font-medium ${
            activeTab === 'topics'
              ? 'border-b-2 border-[#043A6F] text-[#043A6F]'
              : 'text-gray-500'
          }`}
        >
          연구주제
        </button>
        <button
          onClick={() => router.push(`${pathname}?tab=results`)}
          className={`py-2 px-6 text-lg font-medium ${
            activeTab === 'results'
              ? 'border-b-2 border-[#043A6F] text-[#043A6F]'
              : 'text-gray-500'
          }`}
        >
          연구실적
        </button>
      </div>
      <div className="p-4">
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