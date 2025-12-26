'use client';

import React from 'react';
import Image from 'next/image';

const professor = {
  name: '손준영',
  title: '교수',
  major: 'AX융합사이버보안 연구',
  imageUrl: '/구성원소개사진/손준영(로고).jpg',
  cardUrl: '/명함.png',
};

export default function ProfessorsContext() {
  return (
    <div className="bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* 외곽 박스 */}
        <section className="relative border border-gray-300 bg-white px-4 pb-8 pt-12 sm:px-6 lg:px-10">
          {/* 제목 */}
          <h2 className="absolute -top-6 left-6 flex items-center gap-3 bg-gray-50 px-4 text-4xl font-bold text-gray-800 lg:text-5xl">
            <Image src="/logo.png" alt="로고" width={35} height={35} />
            Professor
          </h2>

          {/* 교수 카드 */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* 왼쪽: 교수 사진 */}
            <div className="w-[320px]">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-b-full bg-gray-100">
                <Image
                  src={professor.imageUrl}
                  alt={`${professor.name} 교수님 프로필`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* 오른쪽: 명함 이미지 (반응형) */}
            <div className="w-full lg:flex-1 lg:max-w-[820px]">
              <div className="relative w-full overflow-hidden rounded-lg aspect-[16/9] sm:aspect-[2/1]">
                <Image
                  src={professor.cardUrl}
                  alt="명함 이미지"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 820px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Connect */}
        <section className="mt-12 text-gray-800">
          <h3 className="flex items-center gap-2 px-3 py-3 text-4xl font-semibold">
            <Image src="/logo.png" alt="로고" width={35} height={35} />
            Introduction
          </h3>
          <p className="text-2xl mt-4 ml-4 font-semibold">
            Hello!
          </p>
          <p className="text-xl mt-4 ml-4 ">
            I am currently an Assistant Professor in the School of Computer Science and
            Engineering at Pusan National University, having joined in March 2024.
          </p>
          <p className="text-xl mt-4 ml-4 ">
            I hold a Ph.D. in Computer Science from the Graduate School of Information
            Security at the Korea Advanced Institute of Science and Technology (KAIST).
          </p>
          <p className="text-xl mt-4 ml-4 ">
            From August 2009 to 2012, I worked as a researcher at the National Security
            Research Institute (NSRI).
          </p>
          <p className="text-xl mt-4 ml-4 ">
            From February 2013 to 2017, I served as a senior researcher and auditor at the
            Korea Institute of Nuclear Safety (KINS).
          </p>
          <p className="text-xl mt-4 ml-4 ">
            Since 2017, until February 2024, I was a senior researcher and team leader in
            cybersecurity research at the Korea Atomic Energy Research Institute (KAERI).
          </p>
        </section>

        {/* Career */}
        <section className="mt-10 text-gray-800">
          <h3 className="flex items-center gap-2 px-3 py-3 text-4xl font-semibold">
            <Image src="/logo.png" alt="로고" width={35} height={35} />
            Career
          </h3>

          <ul className="list-disc list-inside space-y-2 px-6 text-gray-700 lg:px-8">
            <li className="text-xl mt-4">부산광역시 정보보호 지역협의체 위원, 2024.08.01~</li>
            <li className="text-xl mt-4">육군본부 사이버전자전 자문위원, 2022.10.01~</li>
            <li className="text-xl mt-4">육군본부 교육사 드론과학기술그룹 자문위원, 2024.02.01~</li>
            <li className="text-xl mt-4">공공안전통신망포럼 운영위원, 2022.03.01~</li>
            <li className="text-xl mt-4">한국무인이동체연구조합 부이사장, 2021.12.01~2024.07</li>
            <li className="text-xl mt-4">한국포렌식학회 연구이사, 2024.01.01~</li>
            <li className="text-xl mt-4">한국정보보호협회 이사, 2020.10.01~2023.04.30</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
