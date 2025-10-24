'use client';

import React from 'react';

const ClassContent: React.FC = () => {

  return (
    <div className="min-h-screen p-4 max-w-6xl mx-auto">
      {/* Header Section */}
        <div className="text-white p-4 mb-4 rounded-lg" style={{backgroundColor: '#20354C'}}>
        <div className="text-sm mb-1">과목</div>
        <div className="text-xl" style={{
          fontFamily: 'Pretendard',
          fontWeight: 500,
          fontStyle: 'normal',
          lineHeight: '100%',
          letterSpacing: '0%'
        }}>정보보안</div>
      </div>

      {/* Notice Section */}
      <div className="rounded p-4 mb-4 shadow-sm" style={{backgroundColor: '#EFF2F5'}}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <img src="/logo.svg" alt="로고" className="w-6 h-6 mr-2" />
            <div>
              <h2 className="text-lg font-bold text-gray-900">공지사항</h2>
              <p className="text-sm text-gray-500">Notice</p>
            </div>
          </div>
          <div className="w-4 h-4">
            <img src="/Vector (1).svg" alt="화살표" className="w-4 h-4" />
          </div>
        </div>
        <div className="border-b-2 border-black mb-3"></div>
        
        <div className="space-y-2">
          {/* 공지사항 목록이 여기에 표시됩니다 */}
        </div>
      </div>

      {/* Lecture Materials Section */}
      <div className="rounded p-4 shadow-sm" style={{backgroundColor: '#EFF2F5'}}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <img src="/logo.svg" alt="로고" className="w-6 h-6 mr-2" />
            <div>
              <h2 className="text-lg font-bold text-gray-900">강의자료</h2>
              <p className="text-sm text-gray-500">Lecture materials</p>
            </div>
          </div>
          <div className="w-4 h-4">
            <img src="/Vector (1).svg" alt="화살표" className="w-4 h-4" />
          </div>
        </div>
        <div className="border-b-2 border-black mb-3"></div>
        
        <div className="space-y-2">
          {/* 강의자료 목록이 여기에 표시됩니다 */}
        </div>
      </div>
    </div>
  );
};

export default ClassContent;
