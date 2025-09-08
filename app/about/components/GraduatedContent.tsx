'use client';

import React, { useState } from 'react';

// 구성원 데이터 타입을 교수님 카드와 유사하게 정의
interface Member {
  name: string;
  role: string;
  graduated: string;
  company: string;
  email: string;
  web: string;
}

const allMembersData: Member[] = [
  { name: 'Harashta Tatimma Larasati', role: '박사졸업', graduated: '2022', company: '', email: 'harashta@islab.re.kr',web: ''},
  { name: 'Asep Muhamad Awaludin', role: '박사졸업', graduated: '2022', company: 'SmartM2M', email: 'asep@isalb.re.kr',web: ''},
  { name: '최종석', role: '박사졸업', graduated: '2017', company: '카카오', email: 'jschoi@pusan.ac.kr',web: 'http://profile.artofthings.org/'},
  { name: '이동건', role: '박사졸업', graduated: '2015', company: '한국전자통신연구원(국가보안기술연구소)', email: 'guneez@gmail.com',web: 'http://www.gunee.net'},
];

export default function MembersContent() {
  const [activeTab, setActiveTab] = useState('박사졸업');

  const filteredMembers = allMembersData.filter(
    member => member.role === activeTab
  );

  const tabs = ['박사졸업', '석사졸업', '박사후연구원'];
  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        {/* === 제목과 탭 버튼 === */}
        <div className="border-b-2 pb-4 mb-8">
          <h2 className="text-3xl text-black font-bold inline-block border-b-4 border-blue-800 pb-2">졸업생 소개</h2>
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

        {/* --- 멤버 카드 그리드 --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-4">
                <div className="text-center sm:text-left pt-8">
                  <h2 className="text-3xl font-bold text-gray-900 mt-1 mb-4">
                    🎓 {member.name}
                  </h2>
                  <p className="text-gray-500 text-s pt-4"> {member.role}</p>
                  <p className="text-gray-500 text-s pt-4"> {member.graduated}</p>
                  <p className="text-gray-500 text-s pt-4"> {member.email}</p>
                  <p className="text-gray-500 text-s pt-4"> {member.company}</p>
                  <p className="text-gray-500 text-s pt-4"> {member.web}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};