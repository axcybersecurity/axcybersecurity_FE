'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Professor {
  name: string;
  title: string;
  major: string;
  imageUrl: string;
}

const professorsData: Professor[] = [
  {
    name: '손준영',
    title: '교수',
    major: 'AX융합사이버보안 연구',
    imageUrl: '/구성원소개사진/손준영.jpg',
  },
];

const ProfessorsContext = () => {
  const [selectedProf, setSelectedProf] = useState<Professor | null>(null);

  const handleCardClick = (prof: Professor) => {
    if (selectedProf?.name === prof.name) setSelectedProf(null);
    else setSelectedProf(prof);
  };

  return (
    <div className="bg-gray-50 py-10 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* === 테두리 컨테이너 === */}
        <div className="relative border border-gray-300 p-4 sm:p-6 lg:p-10 pt-12">
          {/* === 제목 === */}
          <h2 className="absolute -top-6 left-4 sm:left-6 bg-gray-50 px-3 sm:px-4 py-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.png"
              alt="로고"
              width={30}
              height={30}
              className="flex-shrink-0"
            />
            Professor
          </h2>

          {/* --- 교수님 카드 그리드 --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6">
            {professorsData.map((prof, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(prof)}
                className="relative bg-white shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* 우상단 로고 (반응형 크기) */}
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6">
                  <Image
                    src="/부산대로고.png"
                    alt="부산대 로고"
                    width={110}
                    height={110}
                    className="w-16 h-auto sm:w-[110px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-4 sm:p-6">
                  {/* 이미지: 원본 비율 유지, 모바일 전체폭 */}
                  <div className="w-full sm:w-52 h-72 sm:h-80 flex-shrink-0 overflow-hidden bg-gray-100">
                    <Image
                      src={prof.imageUrl}
                      alt={`${prof.name} 교수님 프로필 사진`}
                      width={232}
                      height={292}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* 텍스트 영역 */}
                  <div className="w-full text-center sm:text-left mt-4 sm:mt-0">
                    <p className="text-gray-500 text-base sm:text-lg">{prof.title}</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 mb-3">
                      {prof.name}
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base pt-4 break-words">
                      {prof.major}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* 소개 텍스트 */}
            <div className="flex-grow text-gray-800 p-4 sm:p-6">
              <p className="text-lg sm:text-xl">Hello!</p>
              <p className="leading-relaxed text-sm sm:text-base mt-2">
                I am currently an Assistant Professor in the School of Computer Science and
                Engineering at Pusan National University, having joined in March 2024.
                <br />
                I hold a Ph.D. in Computer Science from the Graduate School of Information
                Security at the Korea Advanced Institute of Science and Technology (KAIST).
                <br />
                From August 2009 to 2012, I worked as a researcher at the National Security
                Research Institute (NSRI), and subsequently at RIMS from January 2013 to
                February 13, 2013.
                <br />
                From February 2013 to 2017, I served as a senior researcher and auditor at the
                Korea Institute of Nuclear Safety (KINS).
                <br />
                Since 2017, until February 2024, I was a senior researcher and team leader in
                cybersecurity research at the Korea Atomic Energy Research Institute (KAERI).
              </p>
            </div>
          </div>
        </div>

        {/* 정보 섹션 (Connect) */}
        <div className="text-gray-800 mt-8">
          <h3 className="px-3 py-3 text-2xl sm:text-3xl font-semibold text-gray-800 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="로고"
              width={28}
              height={28}
              className="flex-shrink-0"
            />
            Connect
          </h3>

          <ul className="list-none space-y-2 p-4 sm:p-8 pt-2 sm:pt-4 text-gray-700">
            <div className="space-y-3 text-gray-700">
              <div className="flex flex-wrap items-center gap-2">
                <strong className="w-20 sm:w-24 flex-shrink-0">이메일</strong>
                <span className="break-words">jyson@pusan.ac.kr</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <strong className="w-20 sm:w-24 flex-shrink-0">홈페이지</strong>
                <a
                  href="http://infosec.pusan.ac.kr"
                  className="text-blue-600 hover:underline break-all"
                >
                  http://infosec.pusan.ac.kr
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <strong className="w-20 sm:w-24 flex-shrink-0">전공분야</strong>
                <span className="break-words">AX융합사이버보안</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <strong className="w-20 sm:w-24 flex-shrink-0">연락처</strong>
                <span className="break-words">051) 510-2219</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <strong className="w-20 sm:w-24 flex-shrink-0">연구실</strong>
                <span className="break-words">이사 후 수정</span>
              </div>
            </div>
          </ul>
        </div>

        {/* 대외활동사항 섹션 (Career) */}
        <div className="text-gray-800 mt-8">
          <h3 className="px-3 py-3 text-2xl sm:text-3xl font-semibold text-gray-800 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="로고"
              width={28}
              height={28}
              className="flex-shrink-0"
            />
            Career
          </h3>
          <ul className="list-disc list-inside space-y-2 p-4 sm:p-8 pt-2 sm:pt-4 text-gray-700">
            <li>부산광역시 정보보호 지역협의체 위원, 2024.08.01~</li>
            <li>육군본부 사이버전자전 자문위원, 2022.10.01 ~</li>
            <li>육군본부 교육사 드론과학기술그룹 자문위원, 2024.02.01~</li>
            <li>공공안전통신망포럼 운영위원, 2022.03.01~2</li>
            <li>한국무인이동체연구조합 부이사장사, 2021.12.01~ 2024.07</li>
            <li>한국포렌식학회 연구이사, 2024.01.01~</li>
            <li>한국정보보호협회 이사, 2020.10.01~ 2023.04.30</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessorsContext;
