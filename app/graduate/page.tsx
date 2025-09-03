'use client';

import Image from 'next/image';
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
   { id: 'admission', title: '입학안내', href: '/graduate?tab=admission' }
  ];
 
  return (
    <div>
      <div className="relative bg-[url('/후보.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative container mx-auto px-6 py-12 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-8 border-b-4 border-white pb-4 pt-20 text-white inline-block">
            대학원 진학 안내
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
 
      
      <div className="bg-white py-16 px-0"> 
        {activeTab === 'curriculum' && <Curriculum />}
        {activeTab === 'admission' && <Admission />}
      </div>
    </div>
  );
}
 
export default function GraduatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GraduatePageContent />
    </Suspense>
  );
}