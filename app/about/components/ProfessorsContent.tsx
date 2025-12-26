'use client';

import React from 'react';
import Image from 'next/image';

const professor = {
  name: '손준영',
  title: '교수',
  major: 'AX융합사이버보안 연구',
  imageUrl: '/구성원소개사진/손준영.jpg',
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

          {/* 본문 레이아웃 */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[520px_1fr] lg:gap-10">
            {/* 왼쪽: 교수 카드 */}
            <div className="border border-gray-200 bg-white shadow-sm">
              <div className="flex flex-col gap-6 p-6 md:flex-row md:items-start">
                {/* 사진 */}
                <div className="w-full md:w-[180px]">
                  <div className="relative w-full overflow-hidden bg-gray-100 aspect-[3/4]">
                    <Image
                      src={professor.imageUrl}
                      alt={`${professor.name} 교수님 프로필 사진`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 180px"
                    />
                  </div>
                </div>

                {/* 정보 */}
                <div className="flex-1 min-w-0">
                  <p className="mb-1 text-sm text-gray-500">{professor.title}</p>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    {professor.name}
                  </h3>
                  <p className="text-sm text-gray-500 break-keep">{professor.major}</p>

                  {/* 모바일에서 로고를 자연스럽게 아래에 */}
                  <div className="mt-6 md:hidden">
                    <Image src="/pnu_logo.png" alt="부산대 로고" width={90} height={90} />
                  </div>
                </div>

                {/* md 이상에서 우측(원본 느낌) */}
                <div className="hidden md:block shrink-0">
                  <Image src="/pnu_logo.png" alt="부산대 로고" width={90} height={90} />
                </div>
              </div>
            </div>

            {/* 오른쪽: 소개 */}
            <div className="border border-gray-200 bg-gray-50 px-6 py-6 text-sm leading-6 text-gray-700">
              <p className="mb-2 font-semibold">Hello!</p>
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
        </section>

        {/* Connect */}
        <section className="mt-10 text-gray-800">
          <h3 className="flex items-center gap-2 px-3 py-3 text-3xl font-semibold">
            <Image src="/logo.png" alt="로고" width={30} height={30} />
            Connect
          </h3>

          <ul className="space-y-2 px-6 pt-1 text-gray-700 lg:px-8">
            <li className="flex flex-wrap items-start gap-2">
              <strong className="w-20 shrink-0 lg:w-24">이메일</strong>
              <span className="break-all">jyson@pusan.ac.kr</span>
            </li>
            <li className="flex flex-wrap items-start gap-2">
              <strong className="w-20 shrink-0 lg:w-24">홈페이지</strong>
              <a
                href="https://accs.pusan.ac.kr"
                className="break-all text-blue-600 hover:underline"
              >
                https://accs.pusan.ac.kr
              </a>
            </li>
            <li className="flex flex-wrap items-start gap-2">
              <strong className="w-20 shrink-0 lg:w-24">전공분야</strong>
              <span className="break-keep">
                AX융합사이버보안, 블록체인/금융/산업시설 보안, 해킹/방어 기술, 역공학/테스팅, 생성형 AI 보안
              </span>
            </li>
            <li className="flex flex-wrap items-start gap-2">
              <strong className="w-20 shrink-0 lg:w-24">연락처</strong>
              <span>051) 510-3641</span>
            </li>
            <li className="flex flex-wrap items-start gap-2">
              <strong className="w-20 shrink-0 lg:w-24">연구실</strong>
              <span>부산대학교 IT관 714호</span>
            </li>
          </ul>
        </section>

        {/* Career */}
        <section className="mt-8 text-gray-800">
          <h3 className="flex items-center gap-2 px-3 py-3 text-3xl font-semibold">
            <Image src="/logo.png" alt="로고" width={30} height={30} />
            Career
          </h3>

          <ul className="list-inside list-disc space-y-2 px-6 pt-1 text-gray-700 lg:px-8">
            <li>부산광역시 정보보호 지역협의체 위원, 2024.08.01~</li>
            <li>육군본부 사이버전자전 자문위원, 2022.10.01~</li>
            <li>육군본부 교육사 드론과학기술그룹 자문위원, 2024.02.01~</li>
            <li>공공안전통신망포럼 운영위원, 2022.03.01~</li>
            <li>한국무인이동체연구조합 부이사장, 2021.12.01~2024.07</li>
            <li>한국포렌식학회 연구이사, 2024.01.01~</li>
            <li>한국정보보호협회 이사, 2020.10.01~2023.04.30</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
