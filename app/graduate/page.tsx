'use client';

// ✅ 중요: next/navigation에서 필요한 훅들을 모두 가져옵니다.
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
// ✅ 중요: Suspense를 react에서 가져옵니다.
import { Suspense } from 'react';

// CurriculumContent, AdmissionContent 컴포넌트는 그대로 둡니다.
const CurriculumContent = () => ( <div>여기에 교육과정을 추가해</div> );
const AdmissionContent = () => ( <div>여기에 입학안내를 추가해</div> );

// 실제 UI와 로직을 담는 내부 컴포넌트입니다.
function GraduatePageContent() {
  const router = useRouter();
  const pathname = usePathname(); 
  const searchParams = useSearchParams(); 
  
  // URL에서 'tab' 파라미터 값을 읽습니다. 이 코드는 URL이 바뀔 때마다 실행됩니다.
  const activeTab = searchParams.get('tab') || 'curriculum';

  const handleTabClick = (tabName: string) => {
    // 페이지 내부 탭 버튼 클릭 시 URL을 변경하여 페이지를 업데이트합니다.
    router.push(`${pathname}?tab=${tabName}`);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">대학원 진학 안내</h1>
      원합니다 내가 살기 위해서
      <div className="flex border-b mb-6">
        <button
          onClick={() => handleTabClick('curriculum')}
          className={`py-2 px-6 text-lg font-medium ${
            activeTab === 'curriculum'
              ? 'border-b-2 border-[#043A6F] text-[#043A6F]'
              : 'text-gray-500'
          }`}
        >
          교육과정
        </button>
        <button
          onClick={() => handleTabClick('admission')}
          className={`py-2 px-6 text-lg font-medium ${
            activeTab === 'admission'
              ? 'border-b-2 border-[#043A6F] text-[#043A6F]'
              : 'text-gray-500'
          }`}
        >
          입학안내
        </button>
      </div>
      <div className="p-4">
        {activeTab === 'curriculum' && <CurriculumContent />}
        {activeTab === 'admission' && <AdmissionContent />}
      </div>
    </div>
  );
}

// ✅ 중요: useSearchParams를 사용하는 컴포넌트는 반드시 Suspense로 감싸야 합니다.
export default function GraduatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GraduatePageContent />
    </Suspense>
  );
}