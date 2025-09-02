'use client';


import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { Suspense } from 'react';

// '2025-학부' 탭에 표시될 내용 컴포넌트
const UndergraduateContent = () => (
  <div>
  여기에 학부 강의 내용을 넣어
  </div>
);
// '2025-대학원' 탭에 표시될 내용 컴포넌트
const GraduateContent = () => (
  <div>
   여기에 대학원 강의 내용을  넣어
  </div>
);

function CoursesPageContent() {
  const router = useRouter();
  const pathname = usePathname(); 
  const searchParams = useSearchParams(); 
  
  
  const activeTab = searchParams.get('tab') || 'undergraduate';

  const handleTabClick = (tabName: string) => {
  
    router.push(`${pathname}?tab=${tabName}`);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">수업 강의</h1>
      <div className="flex border-b mb-6">
        <button
          onClick={() => handleTabClick('undergraduate')}
          className={`py-2 px-6 text-lg font-medium ${
            activeTab === 'undergraduate'
              ? 'border-b-2 border-[#043A6F] text-[#043A6F]'
              : 'text-gray-500'
          }`}
        >
          2025-학부
        </button>
        <button
          onClick={() => handleTabClick('graduate')}
          className={`py-2 px-6 text-lg font-medium ${
            activeTab === 'graduate'
              ? 'border-b-2 border-[#043A6F] text-[#043A6F]'
              : 'text-gray-500'
          }`}
        >
          2025-대학원
        </button>
      </div>
      <div className="p-4">
        {activeTab === 'undergraduate' && <UndergraduateContent />}
        {activeTab === 'graduate' && <GraduateContent />}
      </div>
    </div>
  );
}

// useSearchParams를 사용하는 컴포넌트는 반드시 Suspense로 감싸야 함
export default function CoursesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoursesPageContent />
    </Suspense>
  );
}