'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Member {
  name: string;
  role: string;
  graduated: string;
  email: string;
  imageUrl: string;
}

const allMembersData: Member[] = [
  { name: '황연정', role: '석사졸업', imageUrl: '/구성원소개사진/황연정.jpg', graduated: '2026', email:'yeonjeong@islab.re.kr'},
  { name: '윤지원', role: '석사졸업', imageUrl: '/구성원소개사진/윤지원.jpg', graduated: '2026 - LG전자 입사', email:'jiwon@islab.re.kr'},
  { name: '현창훈', role: '박사후연구원', imageUrl: '/구성원소개사진/현창훈.jpg', graduated: '2026 - 순천대학교 교수 임용', email:'chhyun@pusan.ac.kr'}, 
];

const InfoRow = ({ label, value, href }: { label: string; value: string; href?: string }) => {
  if (!value) return null;

  return (
    <p className="text-gray-600 text-sm">
      <strong className="text-white bg-gray-400 p-1 rounded">{label}</strong>
      <span className="ml-2">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {value}
          </a>
        ) : (
          value
        )}
      </span>
    </p>
  );
};

export default function GraduatedContent() {
  const [activeTab, setActiveTab] = useState('박사졸업');

  const filteredMembers = allMembersData.filter(
    member => member.role === activeTab
  );

  const tabs = ['박사졸업', '석사졸업', '박사후연구원'];
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        {/* === 제목 === */}
        <div className="mb-8">
        <h2
          style={{
            fontFamily: 'Pretendard',
            fontWeight: 600,
            fontSize: '40px',
            lineHeight: '48px',
            color: '#02162E',
            marginBottom: '24px',
          }}
        >
          졸업생
        </h2>
        <div className="flex items-center">
          <div className="w-35 border-t-[3px] border-blue-800" />
          <div className="flex-1 border-t border-gray-300" />
        </div>
      </div>
        
        {/* --- 과정 탭 버튼 --- */}
        <div className="flex border rounded-md overflow-hidden mb-8">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 p-5 font-semibold transition-colors duration-200 text-center ${
                activeTab === tab 
                  ? 'bg-[#042A5B] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* --- 멤버 카드 그리드 --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {filteredMembers.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white border transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-4">
                        <div className="flex-shrink-0 w-52 h-64">
                          <Image
                            src={member.imageUrl}
                            alt={`${member.name} 프로필 사진`}
                            width={208}
                            height={256} 
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="text-center sm:text-left pt-8">
                          <h2 className="text-3xl font-bold text-gray-900 mt-1 mb-4">
                            {member.name}
                          </h2>
                          <p
                            className="text-gray-500 text-s pt-4"
                            style={{ fontFamily: 'Pretendard', fontSize: '1.5vh', lineHeight: 1.5 , color: 'black'}}>
                            <span className="inline-block bg-gray-300 px-1 rounded">
                              과정
                            </span>{' '}
                            {member.role}
                          </p>
        
                          <p
                            className="text-gray-500 text-s pt-4"
                            style={{ fontFamily: 'Pretendard', fontSize: '1.5vh', lineHeight: 1.5 , color: 'black'}}>
                            <span className="inline-block bg-gray-300 px-1 rounded">
                              졸업
                            </span>{' '}
                            {member.graduated}
                          </p>
        
                          <p
                            className="text-gray-500 text-s pt-4"
                            style={{ fontFamily: 'Pretendard', fontSize: '1.5vh', lineHeight: 1.5 , color: 'black'}}>
                            <span className="inline-block bg-gray-300 px-1 rounded">
                              메일
                            </span>{' '}
                            {member.email}
                          </p>
        
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
      </div>
    </div>
  );
};