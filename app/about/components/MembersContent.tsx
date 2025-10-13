'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// 구성원 데이터 타입을 교수님 카드와 유사하게 정의
interface Member {
  name: string;
  role: string;
  interests: string;
  email: string;
  imageUrl: string;
}

const allMembersData: Member[] = [

  { name: '조재한', role: '박사과정', imageUrl: '/구성원소개사진/조재한.jpg', interests: 'Security', email:'jaehan@islab.re.kr'},
  
  { name: '강은세', role: '석사과정', imageUrl: '/구성원소개사진/강은세.jpg', interests: 'HW Security / Cryptography', email:'eunse@islab.re.kr'},
  { name: '고세화', role: '석사과정', imageUrl: '/구성원소개사진/고세화.jpg', interests: 'Security', email:'sehwa@islab.re.kr'},
  { name: '신다윗', role: '석사과정', imageUrl: '/구성원소개사진/신다윗.jpg', interests: 'Quantum / Cryptography / Security', email:'dawit@islab.re.kr'},
  { name: '이범수', role: '석사과정', imageUrl: '/구성원소개사진/이범수.jpg', interests: 'AI', email:'beomsu@islab.re.kr'},
  { name: '이경민', role: '석사과정', imageUrl: '/구성원소개사진/이경민.jpg', interests: 'Security', email:'kyeongmin@islab.re.kr'},
  { name: '윤지원', role: '석사과정', imageUrl: '/구성원소개사진/윤지원.jpg', interests: 'AI / Security', email:'jiwon@islab.re.kr'},
  { name: '황연정', role: '석사과정', imageUrl: '/구성원소개사진/황연정.jpg', interests: 'Security', email:'yeonjeong@islab.re.kr'},
  { name: '김희찬', role: '석사과정', imageUrl: '/구성원소개사진/김희찬.jpg', interests: 'Blockchain', email:'heechan@islab.re.kr'},
  
  { name: '하승원', role: '학부연구생', imageUrl: '/부산대로고.png', interests: 'AI', email:'seungwon@islab.re.kr'},
  { name: '박영주', role: '학부연구생', imageUrl: '/구성원소개사진/박영주.jpg', interests: 'AI / Security', email:'yeongju@islab.re.kr'},
  { name: '성도범', role: '학부연구생', imageUrl: '/구성원소개사진/성도범.jpg', interests: 'Security', email:'dobeom@islab.re.kr'},
  { name: '정지인', role: '학부연구생', imageUrl: '/구성원소개사진/정지인.jpg', interests: 'AI / Security', email:'jiin@islab.re.kr'},
  { name: '김진수', role: '학부연구생', imageUrl: '/구성원소개사진/김진수.jpg', interests: 'Blockchain', email:'jinsu@islab.re.kr'},
  { name: '이경윤', role: '학부연구생', imageUrl: '/구성원소개사진/이경윤.jpg', interests: 'Blockchain', email:'kyungyun@islab.re.kr'},
  { name: '장현진', role: '학부연구생', imageUrl: '/구성원소개사진/장현진.jpg', interests: 'AI Security', email:'hyunjin@islab.re.kr'}, 
  
];

export default function MembersContent() {
  const [activeTab, setActiveTab] = useState('박사과정');
  const [activeProfessor, setActiveProfessor] = useState('김호원');

  const filteredMembers = allMembersData.filter(
    member => member.role === activeTab
  );

  const tabs = ['박사과정', '석사과정', '학부연구생'];
  const professors = ['김호원', '손준영'];

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
          구성원
        </h2>
        <div className="flex items-center">
          <div className="w-35 border-t-[3px] border-blue-800" />
          <div className="flex-1 border-t border-gray-300" />
        </div>
      </div>
        
        {/* --- 과정 탭 버튼 --- */}
        <div className="flex border overflow-hidden mb-8">
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

        {/* --- 교수님 탭 버튼 --- */}

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
                  <p className="text-gray-500 text-s pt-4">📍 {member.role}</p>
                  <p className="text-gray-500 text-s pt-4">✍️ {member.interests}</p>
                  <p className="text-gray-500 text-s pt-4">✉️ {member.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};