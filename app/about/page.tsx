'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import MainContent from './components/MainContent';

// --- 각 탭에 들어갈 예시 콘텐츠 컴포넌트들 ---
const ProfessorsContent = () => (<div>여기에 교수님들을 소개해</div>);
const MembersContent = () => (<div>여기에 구성원을 소개해</div>);
const GraduatedContent = () => (<div>여기에 졸업생들을 소개해</div>);
const NoticeContent = () => (<div>여기에 공지사항을 넣어</div>);
const GalleryContent = () => (<div>여기에 갤러리를 넣어</div>);
const NewsContent = () => (<div>여기에 새소식을 넣어</div>);


function AboutPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // URL의 ?tab= 파라미터를 읽습니다. 파라미터가 없으면 'main'을 기본값으로 사용합니다.
  const activeTab = searchParams.get('tab') || 'main';

  // 탭 버튼 데이터를 배열로 관리합니다.
  const tabs = [
    { id: 'main', title: '소개', href: '/about' },
    { id: 'professors', title: '교수진', href: '/about?tab=professors' },
    { id: 'members', title: '구성원', href: '/about?tab=members' },
    { id: 'graduated', title: '졸업생', href: '/about?tab=graduated' },
    { id: 'notice', title: '공지사항', href: '/about?tab=notice' },
    { id: 'gallery', title: '갤러리', href: '/about?tab=gallery' },
    { id: 'news', title: '새소식', href: '/about?tab=news' },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">연구실 소개</h1>
      <div className="flex border-b mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => router.push(tab.href)}
            className={`py-2 px-6 text-lg font-medium ${
              activeTab === tab.id
                ? 'border-b-2 border-[#043A6F] text-[#043A6F]'
                : 'text-gray-500'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        {activeTab === 'main' && <MainContent />}
        {activeTab === 'professors' && <ProfessorsContent />}
        {activeTab === 'members' && <MembersContent />}
        {activeTab === 'graduated' && <GraduatedContent />}
        {activeTab === 'notice' && <NoticeContent />}
        {activeTab === 'gallery' && <GalleryContent />}
        {activeTab === 'news' && <NewsContent />}
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