'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import MainContent from './components/MainContent';
import ProfessorsContent from './components/ProfessorsContent';
import MembersContent from './components/MembersContent';
import GraduatedContent from './components/GraduatedContent';
import NoticeContent from './components/NoticeContent';


function AboutPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'main';

  const tabs = [
    { id: 'professors', title: '교수진', href: '/about?tab=professors' },
    { id: 'members', title: '구성원', href: '/about?tab=members' },
    { id: 'graduated', title: '졸업생', href: '/about?tab=graduated' },
    { id: 'notice', title: '공지사항', href: '/about?tab=notice' },
  ];

  return (
    <div>
      <div className="relative bg-[url('/후보.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative container mx-auto px-6 py-12 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-8 border-b-4 border-white pb-4 pt-20 text-white inline-block">
            연구실 소개
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
                <span className={activeTab === tab.id ? '' : ''}>
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* === 2. 배경 이미지가 없는 흰색 콘텐츠 영역 === */}
      <div className="container mx-auto px-6 py-8">
        {/* 탭 안의 내용 */}
        <div>
          {activeTab === 'main' && <MainContent />}
          {activeTab === 'professors' && <ProfessorsContent />}
          {activeTab === 'members' && <MembersContent />}
          {activeTab === 'graduated' && <GraduatedContent />}
          {activeTab === 'notice' && <NoticeContent />}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutPageContent />
    </Suspense>
  );
}