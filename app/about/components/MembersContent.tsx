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
  professor: string;
}

const allMembersData: Member[] = [
  { name: '최봉준', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/최봉준.jpg', interests: 'Security', email:'bongjun@islab.re.kr'},
  { name: '김명진', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/김명진.jpg', interests: 'AI', email:'mj.kim@komeri.re.kr'},
  { name: '김지호', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/김지호.jpg', interests: 'AI', email:'jihokim0015@gmail.com'},
  { name: 'Le Thi Thu Huong', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/Le Thi Thu Huong.jpg', interests: 'XAI / Industrial AI / AI Security', email:'lehuong7885@gmail.com'},
  { name: 'Rini Wisnu Wardhani', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/Rini Wisnu Wardhani.jpg', interests: 'Quantun / Cryptography / Security', email:'rini@islab.re.kr'},
  { name: 'Dedy Septono Catur Putranto', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/Dedy Septono Catur Putranto.jpg', interests: 'Quantun / Cryptography / Security', email:'dedy@islab.re.kr'},
  { name: '최창우', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/최창우.jpg', interests: 'AI / Security', email:'changwoo@islab.re.kr'},
  { name: 'Naufal Suryanto', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/Naufal Suryanto.jpg', interests: 'IoT / AI / Security', email:'naufal@islab.re.kr'},
  { name: 'Ismail', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/Ismail.jpg', interests: 'IoT / Security', email:'ismail@islab.re.kr'},
  { name: '허신욱', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/허신욱.jpg', interests: 'IoT Security / Blockchain', email:'shinwook@islab.re.kr'},
  { name: '지창현', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/지창현.jpg', interests: 'HW / Quantum / Cryptography', email:'janghyun@islab.re.kr'},
  { name: 'Derry Pratama', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/Derry Pratama.jpg', interests: 'HW / Security', email:'derry@islab.re.kr'},
  { name: '조욱', role: '박사과정', professor: '김호원', imageUrl: '/구성원소개사진/조욱.jpg', interests: 'Blockchain', email:'jouk@islab.re.kr'},

  
  { name: 'Morsheda Akter Annie', role: '박사과정', professor: '손준영', imageUrl: '/부산대로고.png', interests: 'Security', email:'annie@islab.re.kr'},
  { name: '조재한', role: '박사과정', professor: '손준영', imageUrl: '/구성원소개사진/조재한.jpg', interests: 'Security', email:'jaehan@islab.re.kr'},
  
  { name: '강은세', role: '석사과정', professor: '김호원', imageUrl: '/구성원소개사진/강은세.jpg', interests: 'HW Security / Cryptography', email:'eunse@islab.re.kr'},

  { name: '박영주', role: '학부연구생', professor: '손준영', imageUrl: '/구성원소개사진/박영주.jpg', interests: 'AI / Security', email:'yeongju@islab.re.kr'},
  { name: '성도범', role: '학부연구생', professor: '손준영', imageUrl: '/구성원소개사진/성도범.jpg', interests: 'Security', email:'dobeom@islab.re.kr'},
  { name: '정지인', role: '학부연구생', professor: '손준영', imageUrl: '/구성원소개사진/정지인.jpg', interests: 'AI / Security', email:'jiin@islab.re.kr'},
  { name: '김진수', role: '학부연구생', professor: '손준영', imageUrl: '/구성원소개사진/김진수.jpg', interests: 'Blockchain', email:'jinsu@islab.re.kr'},
  { name: '이경윤', role: '학부연구생', professor: '손준영', imageUrl: '/구성원소개사진/이경윤.jpg', interests: 'Blockchain', email:'kyungyun@islab.re.kr'},
  { name: '장현진', role: '학부연구생', professor: '손준영', imageUrl: '/구성원소개사진/장현진.jpg', interests: 'AI Security', email:'hyunjin@islab.re.kr'}, 
  
];

export default function MembersContent() {
  const [activeTab, setActiveTab] = useState('박사과정');
  const [activeProfessor, setActiveProfessor] = useState('김호원');

  const filteredMembers = allMembersData.filter(
    member => member.role === activeTab && member.professor === activeProfessor
  );

  const tabs = ['박사과정', '석사과정', '학부연구생'];
  const professors = ['김호원', '손준영'];

  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        {/* === 제목과 탭 버튼 === */}
        <div className="border-b-2 pb-4 mb-8">
          <h2 className="text-3xl text-black font-bold inline-block border-b-4 border-blue-800 pb-2">구성원 소개</h2>
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
<div className="flex justify-center mb-8">
  <div className="flex items-center gap-4">
    <div className="flex bg-gray-200 rounded-full"> 
      {professors.map((prof, index) => (
        <button
          key={prof}
          onClick={() => setActiveProfessor(prof)}
          className={`
            px-25 py-2 text-sm font-semibold transition-colors duration-200 flex flex-col items-center 
            ${
              activeProfessor === prof
                ? 'bg-[#042A5B] text-white shadow'
                : 'text-gray-600'
            }
            ${
              activeProfessor === prof && index === 0
                ? 'rounded-l-full'
                : ''
            }
            ${
              activeProfessor === prof && index === professors.length - 1
                ? 'rounded-r-full'
                : ''
            }
            ${
              activeProfessor === prof && index > 0 && index < professors.length - 1
                ? 'rounded-none'
                : ''
            }
          `}
        >
          <span className='text-xs'>지도교수</span>
          {prof} 교수님
        </button>
      ))}
    </div>
  </div>
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
                    className="w-full h-full object-cover"
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