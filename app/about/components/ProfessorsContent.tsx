'use client';

import React from 'react';
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

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 외곽 박스 */}
        <div className="relative border border-gray-300 bg-white pt-12 px-4 sm:px-6 lg:px-10 pb-8">
          {/* 제목 (원본 위치 유지) */}
          <h2 className="absolute -top-6 left-6 bg-gray-50 px-4 py-0 text-4xl lg:text-5xl font-bold text-gray-800 flex items-center gap-3">
            <Image src="/logo.png" alt="로고" width={35} height={35} />
            Professor
          </h2>

          {/* 본문 레이아웃: PC는 좌우 2열(원본 유지), 모바일은 세로 */}
          <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-6 lg:gap-10">
            {/* 왼쪽: 교수 카드 (원본 카드 느낌 유지) */}
            <div className="bg-white border border-gray-200 shadow-sm px-8 py-10">
              <div className="flex items-start gap-8">
                <div className="w-[160px] h-[260px] flex-shrink-0 overflow-hidden bg-gray-100">
                  <Image
                    src={professorsData[0].imageUrl}
                    alt={`${professorsData[0].name} 교수님 프로필 사진`}
                    width={232}
                    height={292}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 pt-40">
                  <p className="text-gray-500 text-sm mb-1">{professorsData[0].title}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-5">{professorsData[0].name}</h3>
                  <p className="text-gray-500 text-sm">{professorsData[0].major}</p>
                </div>
                {/* 카드 안 우상단 마크(원본 느낌) */}
                <div className="hidden md:block ml-auto">
                  <Image src="/부산대로고.png" alt="부산대 로고" width={90} height={90} />
                </div>
              </div>
            </div>

            {/* 오른쪽: 소개 텍스트 박스 (원본처럼 테두리/연한 배경) */}
            <div className="border border-gray-200 bg-gray-50 px-6 py-6 leading-6 text-sm text-gray-700">
              <p className="font-semibold mb-2">Hello!</p>
              <p>
                I am currently an Assistant Professor in the School of Computer Science and
                Engineering at Pusan National University, having joined in March 2024.
              </p>
              <p className="mt-2">
                I hold a Ph.D. in Computer Science from the Graduate School of Information
                Security at the Korea Advanced Institute of Science and Technology (KAIST).
              </p>
              <p className="mt-2">
                From August 2009 to 2012, I worked as a researcher at the National Security
                Research Institute (NSRI), and subsequently at RIMS from January 2013 to
                February 13, 2013.
              </p>
              <p className="mt-2">
                From February 2013 to 2017, I served as a senior researcher and auditor at the
                Korea Institute of Nuclear Safety (KINS).
              </p>
              <p className="mt-2">
                Since 2017, until February 2024, I was a senior researcher and team leader in
                cybersecurity research at the Korea Atomic Energy Research Institute (KAERI).
              </p>
            </div>
          </div>
        </div>

        {/* Connect 섹션 (원본 여백 유지 + 모바일 줄바꿈만) */}
        <div className="text-gray-800 mt-10">
          <h3 className="px-3 py-3 text-3xl font-semibold text-gray-800 flex items-center gap-2">
            <Image src="/logo.png" alt="로고" width={30} height={30} />
            Connect
          </h3>
          <ul className="list-none space-y-2 px-6 lg:px-8 pt-1 text-gray-700">
            <li className="flex flex-wrap items-center gap-2">
              <strong className="w-20 lg:w-24">이메일</strong>
              <span className="break-all">jyson@pusan.ac.kr</span>
            </li>
            <li className="flex flex-wrap items-center gap-2">
              <strong className="w-20 lg:w-24">홈페이지</strong>
              <a href="http://infosec.pusan.ac.kr" className="text-blue-600 hover:underline break-all">
                http://accs.pusan.ac.kr
              </a>
            </li>
            <li className="flex flex-wrap items-center gap-2">
              <strong className="w-20 lg:w-24">전공분야</strong>
              <span>AX융합사이버보안</span>
            </li>
            <li className="flex flex-wrap items-center gap-2">
              <strong className="w-20 lg:w-24">연락처</strong>
              <span>051) 510-3641</span>
            </li>
            <li className="flex flex-wrap items-center gap-2">
              <strong className="w-20 lg:w-24">연구실</strong>
              <span>부산대학교 IT관 714호</span>
            </li>
          </ul>
        </div>

        {/* Career 섹션 (원본 스타일 유지) */}
        <div className="text-gray-800 mt-8">
          <h3 className="px-3 py-3 text-3xl font-semibold text-gray-800 flex items-center gap-2">
            <Image src="/logo.png" alt="로고" width={30} height={30} />
            Career
          </h3>
          <ul className="list-disc list-inside space-y-2 px-6 lg:px-8 pt-1 text-gray-700">
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
