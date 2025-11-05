'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import MainContent from './components/MainContent';
import ProfessorsContent from './components/ProfessorsContent';
import MembersContent from './components/MembersContent';
import GraduatedContent from './components/GraduatedContent';
import NoticeContent from '../courses/components/NoticeContent';

function AboutPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'main';

  const tabs = [
    { id: 'main', title: '연구실', href: '/about?tab=main' },
    { id: 'professors', title: '교수진', href: '/about?tab=professors' },
    { id: 'members', title: '구성원', href: '/about?tab=members' },
    { id: 'graduated', title: '졸업생', href: '/about?tab=graduated' },
  ];

  return (
    <div>
      {/* ==== Hero Section ==== */}
      <div className="relative bg-[url('/page배경.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative container mx-auto px-4 sm:px-6 min-h-[260px] md:min-h-[330px] flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 border-b-4 border-white pb-3 md:pb-4 pt-16 md:pt-20 text-white inline-block">
            연구실 소개
          </h1>

          {/* 탭 섹션 */}
          <div
            className="w-full max-w-5xl pb-6 md:pb-10 flex justify-center"
            role="tablist"
            aria-label="연구실 소개 탭"
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

      {/* ==== White Content Section ==== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {activeTab === 'main' && <MainContent />}
        {activeTab === 'professors' && <ProfessorsContent />}
        {activeTab === 'members' && <MembersContent />}
        {activeTab === 'graduated' && <GraduatedContent />}
        {activeTab === 'notice' && <NoticeContent />}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="py-10 text-center text-gray-500">Loading...</div>}>
      <AboutPageContent />
    </Suspense>
  );
}
