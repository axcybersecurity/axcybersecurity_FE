'use client';

import React, { useState } from 'react';

interface Member {
  name: string;
  role: string;
  graduated: string;
  company: string;
  email: string;
  web: string;
}

const allMembersData: Member[] = [
  
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎓 {member.name}
              </h3>
              <div className="space-y-3">
                <InfoRow label="과정" value={member.role} />
                <InfoRow label="졸업" value={member.graduated} />
                <InfoRow label="직장" value={member.company} />
                <InfoRow label="메일" value={member.email} href={`mailto:${member.email}`} />
                <InfoRow label="WEB" value={member.web} href={member.web} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};