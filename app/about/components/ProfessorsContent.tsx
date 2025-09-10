'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Bio_Kim from './Bio_Kim';
import Bio_Son from './Bio_Son';

interface Professor {
  name: string;
  title: string;
  major: string;
  imageUrl: string;
  detailedBio: React.ComponentType;
}

const professorsData: Professor[] = [
  {
    name: '김호원',
    title: '교수',
    major: '정보보호/사물지능',
    imageUrl: '/김호원교수님.png',
    detailedBio: Bio_Kim
  },
  {
    name: '손준영',
    title: '조교수',
    major: '지능정보기술 활용 사이버보안 연구',
    imageUrl: '/손준영교수님.png',
    detailedBio: Bio_Son
    }
];

const ProfessorsContext = () => {
  const [selectedProf, setSelectedProf] = useState<Professor | null>(null);

  const handleCardClick = (prof: Professor) => {
    if (selectedProf?.name === prof.name) {
      setSelectedProf(null);
    } else {
      setSelectedProf(prof);
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* === 테두리 컨테이너 === */}
        <div className="relative border border-gray-300 p-8 pt-10">
          {/* === 제목 === */}

          <h2 className="absolute -top-6 left-6 bg-gray-50 px-3 py-1 text-4xl font-bold text-gray-800 flex items-center gap-2">
            <Image 
              src="/logo.png"
              alt="로고" 
              width={35} 
              height={35}
              className="flex-shrink-0"
            />
            Professor
          </h2>

          {/* --- 교수님 카드 그리드 --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
            {professorsData.map((prof, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(prof)}
                className={`relative bg-white shadow-lg transition-all duration-300 cursor-pointer overflow-hidden ${
                  selectedProf?.name === prof.name
                    ? 'ring-2 ring-blue-800 scale-105'
                    : 'hover:scale-105'
                }`}
              >
                <Image 
                  src="/부산대로고.png"
                  alt="로고"
                  width={130}
                  height={130}
                  className="absolute top-6 right-6"
                />
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                  <div className="flex-shrink-0 w-52 h-80">
                    <Image
                      src={prof.imageUrl}
                      alt={`${prof.name} 교수님 프로필 사진`}
                      width={232}
                      height={292} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center sm:text-left mt-40">
                    <p className="text-gray-500 text-lg">{prof.title}</p>
                    <h2 className="text-3xl font-bold text-gray-900 mt-1 mb-4">
                      {prof.name}
                    </h2>
                    <p className="text-gray-500 text-sm pt-6">{prof.major}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 선택된 교수님의 상세 설명 섹션 */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            selectedProf ? 'opacity-100 mt-12' : 'max-h-0 opacity-0'
          }`}
        >
          {selectedProf && (
            <selectedProf.detailedBio />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessorsContext;