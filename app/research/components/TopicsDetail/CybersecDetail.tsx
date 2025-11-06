'use client';

import Image from 'next/image';
import React from 'react';

export default function CybersecDetail() {
  return (
    <div className="mt-8 px-4 sm:px-6">
      {/* 제목 */}
      <h3 className="mx-auto text-center font-semibold break-keep text-[24px] sm:text-[36px] text-[#02162E]">
        사이버 보안
      </h3>

      {/* 섹션: 안티드론 / 드론 보안 */}
      <div className="mt-8 max-w-[958px] mx-auto">
        <h4 className="text-[#043A6F] font-bold text-[18px] sm:text-[24px]">
          안티드론/사이버전자전 및 드론 사이버 보안 기술
        </h4>
        <p className="text-[#000] font-normal text-[14px] sm:text-[20px] mt-1">
          (Anti-drone / cyber-electronic warfare and drone cybersecurity technology)
        </p>

        <div className="mt-4 mb-6 mx-auto text-[#282828] text-[13px] sm:text-[16px] leading-[150%] space-y-4">
          <div>
            <p>■ AI 기반 드론 탐지 연구 (Research on AI-based Drone Detection)</p>
            <p>– 장거리 드론 시계열 데이터 구축 및 LSTM/GRU 기반 조기 탐지 알고리즘 연구</p>
            <p>– Unity3D 기반 합성 데이터 생성 및 도메인 적응 연구</p>
            <p>– 카메라 / 레이더 / 음향 센서의 멀티모달 통합 분석 연구</p>
          </div>

          <div>
            <p>■ 안티드론 및 드론 제어권 탈취 연구 (Anti-drone & hijacking)</p>
            <p>– 802.11 기반 GCS Deauthentication, MAVLink 패킷 분석·재전송 공격 연구</p>
            <p>– SDR을 이용한 드론 무선통신 분석 및 취약점 연구</p>
            <p>– 드론 펌웨어 리버스/ROP 기반 취약점 분석</p>
          </div>
        </div>

        <p className="text-center mt-6 text-[14px] sm:text-[16px] text-black">[안티드론 기술의 활용]</p>

        <div className="mt-4 mx-auto w-full flex justify-center">
          <div className="w-full max-w-[980px]">
            <Image
              src="/research_TopicsDetail/antidrone.svg"
              alt="Anti-Drone"
              width={982}
              height={490}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* 섹션: 산업시설 사이버보안 */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h4 className="text-[#043A6F] font-bold text-[18px] sm:text-[24px]">
          산업시설 사이버보안
        </h4>
        <p className="text-[#000] font-normal text-[14px] sm:text-[20px] mt-1">
          (industrial facility cybersecurity)
        </p>

        <div className="mt-4 text-[#282828] text-[13px] sm:text-[16px] leading-[150%] space-y-3">
          <div>
            <p>■ 원자력발전소·원자로·산업시설 대상 사이버보안 연구</p>
            <p>– 산업시설 대상 공격 식별 및 위협 모델링</p>
            <p>– 취약점 분석 및 모의해킹을 통한 보호 기술 개발</p>
            <p>– 보안 가이드라인 및 방어 체계 설계</p>
          </div>
          <div>
            <p>■ 연구 항목 예시</p>
            <p>– 산업제어시스템(ICS/SCADA) 보안, 펌웨어·네트워크 취약점 분석</p>
            <p>– 물리적/논리적 접근 제어, 이상 탐지(Anomaly Detection) 기술</p>
          </div>
        </div>

        <p className="text-center mt-6 text-[14px] sm:text-[16px] text-black">
          [산업 시설 및 에너지 시설 공격 흐름도]
        </p>

        <div className="mt-4 mx-auto w-full flex justify-center mb-10">
          <div className="w-full max-w-[820px]">
            <Image
              src="/research_TopicsDetail/industry.svg"
              alt="Industry attack flow"
              width={788}
              height={648}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
