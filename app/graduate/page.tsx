'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Curriculum from './components/curriculum';
import Admission from './components/admission';

function GraduatePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'curriculum';

  const tabs = [
    { id: 'curriculum', title: '교육과정', href: '/graduate?tab=curriculum' },
    { id: 'admission', title: '입학안내', href: '/graduate?tab=admission' },
  ];

  return (
    <div>
      {/* Hero 섹션 */}
      <div className="relative bg-[url('/page배경.jpg')] bg-cover bg-center">
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        {/* 컨텐츠 */}
        <div className="relative container mx-auto px-4 sm:px-6 min-h-[280px] md:min-h-[340px] flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 border-b-4 border-white pb-3 md:pb-4 pt-16 md:pt-20 text-white inline-block">
            대학원 진학 안내
          </h1>

          {/* 탭: 모바일 가로 스크롤, 데스크탑 가운데 정렬 */}
          <div
            className="w-full max-w-5xl pb-6 md:pb-10 flex justify-center"
            role="tablist"
            aria-label="대학원 진학 안내 탭"
          >
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar px-4 sm:px-0">
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
                        : 'text-gray-200 hover:text-white'
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

      {/* 본문 */}
      <div className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div id="panel-curriculum" role="tabpanel" hidden={activeTab !== 'curriculum'}>
          {activeTab === 'curriculum' && <Curriculum />}
        </div>
        <div id="panel-admission" role="tabpanel" hidden={activeTab !== 'admission'}>
          {activeTab === 'admission' && <Admission />}
        </div>
      </div>
    </div>
  );
}

export default function GraduatePage() {
  return (
    <Suspense fallback={<div className="py-10 text-center text-gray-500">Loading...</div>}>
      <GraduatePageContent />
    </Suspense>
  );
}
