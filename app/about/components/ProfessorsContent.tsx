'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Professor {
  name: string;
  title: string;
  major: string;
  imageUrl: string;
  detailedBio: string;
}

const professorsData: Professor[] = [
  {
    name: '김호원',
    title: '교수',
    major: '정보보호/사물지능',
    imageUrl: '/prof_kim.jpg',
    detailedBio:
      '김부산 교수님은 20여 년간 정보 보안 분야에서 깊이 있는 연구를 수행해 오셨습니다. 특히, 차세대 암호 기술과 인공지능을 결합하여 능동적으로 사이버 위협을 예측하고 방어하는 시스템 개발에 주력하고 있으며, 다수의 SCI급 논문과 특허를 보유하고 있습니다. 산업계와의 긴밀한 협력을 통해 실제 필드에서 적용 가능한 보안 솔루션을 개발하는 데에도 큰 기여를 하고 있습니다.',
  },
  {
    name: '손준영',
    title: '조교수',
    major: '지능정보기술 활용 사이버보안 연구',
    imageUrl: '/prof_lee.jpg',
    detailedBio:
      '이로운 교수님은 시스템 해킹과 방어 기술 분야의 전문가입니다. 최신 악성코드의 동작 방식을 분석하고, 이를 기반으로 한 자동화된 탐지 및 차단 기술을 연구하고 있습니다. 또한, 사이버 범죄 수사를 위한 디지털 포렌식 기법 고도화 연구를 통해 수사 기관에 기술 자문을 제공하는 등 활발한 활동을 펼치고 있습니다.',
  },
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
        {/* === 추가된 테두리 컨테이너 === */}
        <div className="relative border border-gray-300 rounded-xl p-8 pt-10">
          {/* === 추가된 제목 === */}
          <h2 className="absolute -top-4 left-6 bg-gray-50 px-3 py-1 text-3xl font-bold text-gray-800">
            Professor
          </h2>

          {/* 교수님 카드 그리드 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
            {professorsData.map((prof, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(prof)}
                className={`bg-white shadow-lg p-8 transition-all duration-300 cursor-pointer ${
                  selectedProf?.name === prof.name
                    ? 'ring-4 ring-indigo-400 scale-105'
                    : 'hover:scale-105'
                }`}
              >
                {/* 카드 내용은 이전과 동일 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src={prof.imageUrl}
                      alt={`${prof.name} 교수님 프로필 사진`}
                      width={144}
                      height={144}
                      className="border-4 border-gray-200 flex"
                    />
                  </div>
                  <div className="text-center sm:text-left mt-30 ml-10">
                    <p className="text-gray-500 text-lg">{prof.title}</p>
                    <h2 className="text-3xl font-bold text-gray-900 mt-1 mb-4">
                      {prof.name}
                    </h2>
                    <p className="text-gray-500 text-s pt-6">{prof.major}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 선택된 교수님의 상세 설명 섹션 */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            selectedProf ? 'max-h-[1000px] opacity-100 mt-12' : 'max-h-0 opacity-0'
          }`}
        >
          {selectedProf && (
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedProf.name} 교수님
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {selectedProf.detailedBio}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessorsContext;