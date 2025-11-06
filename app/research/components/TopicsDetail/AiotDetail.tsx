'use client';

import Image from 'next/image';

export default function AiotDetail() {
  return (
    <div className="mt-8 px-4 sm:px-6">
      {/* ===== 제목 ===== */}
      <h3 className="mx-auto text-center font-semibold break-keep text-[26px] sm:text-[36px] text-[#02162E]">
        AI보안 및 산업용 AI
      </h3>

      {/* ===== 적대적 AI ===== */}
      <div className="mt-12 max-w-[958px] mx-auto">
        <h4 className="text-[#043A6F] font-bold text-[18px] sm:text-[24px] leading-snug">
          적대적 인공지능 공격 및 방어 기술 연구
        </h4>
        <p className="text-[#000] font-normal text-[14px] sm:text-[20px] mt-1">
          (Research on adversarial attack & defense for AI)
        </p>

        <div className="mt-6 text-[#282828] text-[13px] sm:text-[16px] leading-[150%] space-y-4">
          <div>
            <p>■ 적대적 공격/방어 기술 연구</p>
            <p>- 적대적 공격 대상 영상분석 딥러닝 모델 DB 구축</p>
            <p>- 최신 적대적 공격 기술 및 방어 기술 분석</p>
            <p>- 공격/방어 모델 표준 인터페이스 구현</p>
          </div>

          <div>
            <p>■ 그래픽 엔진 기반 3D 공격 및 방어 시뮬레이션 시스템 구축 연구</p>
            <p>- 딥러닝 프레임워크와 그래픽 엔진 연동 학습 방안 연구</p>
            <p>- Unreal Engine, CARLA 등을 활용한 3D 시뮬레이션 구축</p>
            <p>- 3D 환경에서의 적대적 공격 및 방어 가시화 연구</p>
          </div>

          <div>
            <p>■ 3D 축소모형 제작을 통한 물리적 공격/방어 기술 연구</p>
            <p>- 3D 축소모형 제작을 통한 적대적 물리공격 및 방어 연구</p>
            <p>- 실제 환경 실험을 위한 테스트베드 구축</p>
          </div>

          <p>■ Top-tier AI conference 논문 게재 지원</p>
        </div>

        {/* 포스터 이미지 */}
        <p className="text-center mt-10 text-[14px] sm:text-[16px] text-black">
          [CVPR 2022 Main Conference 게재 논문 포스터]
        </p>

        <div className="mt-6 mx-auto w-full flex justify-center">
          <Image
            src="/research_TopicsDetail/image47.svg"
            alt="Research poster"
            width={892}
            height={448}
            className="w-full max-w-[900px] h-auto"
          />
        </div>
      </div>

      {/* ===== 섹션 2: 가상 데이터 기반 객체 인식/탐지/추적 ===== */}
      <div className="mt-20 max-w-[958px] mx-auto">
        <h4 className="text-[#043A6F] font-bold text-[18px] sm:text-[24px] leading-snug">
          가상 데이터 기반 객체 인식·탐지·추적 기술 연구
        </h4>
        <p className="text-[#000] font-normal text-[14px] sm:text-[20px] mt-1">
          (Research on synthetic data-based object recognition, detection and tracking technology)
        </p>

        <div className="mt-6 text-[#282828] text-[13px] sm:text-[16px] leading-[150%] space-y-4">
          <div>
            <p>■ 인공지능 기반 객체 인식·탐지·추적 기술 연구</p>
            <p>- 가상 데이터 기반 객체 인식·탐지·추적 기술 연구</p>
            <p>- 최신 객체 인식·탐지·추적 기술 분석 및 구현</p>
            <p>- Unreal Engine, CARLA 등을 통한 자율주행 시스템 연구</p>
          </div>

          <div>
            <p>■ 그래픽 엔진 기반 객체 인식·탐지·추적 프레임워크 구축 연구</p>
            <p>- Unreal Engine 기반 가상 데이터 활용 객체 인식/탐지/추적 프레임워크 구현</p>
            <p>- CARLA 기반 자율주행 특화 객체 인식/탐지/추적 기술 개발</p>
            <p>- 실제 환경 검증 위한 3D 축소 테스트베드 구축</p>
          </div>
        </div>

        {/* Step Images */}
        <p className="text-center mt-10 text-[14px] sm:text-[16px] text-black">
          [가상 데이터 기반 객체 인식/탐지/추적 테스트 프로세스]
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 justify-items-center">
          {/* Step 1 */}
          <div className="w-full max-w-[330px]">
            <div className="mb-3">
              <h5 className="font-bold text-[15px] sm:text-[18px]">Step 1. 시뮬레이션 환경</h5>
              <p className="text-[12px] sm:text-[14px] mt-1 leading-[150%]">
                Unity, Unreal 엔진 기반 <br />
                <span className="font-bold">실제 환경 유사 자율주행 테스트 환경 구축</span>
              </p>
            </div>
            <div className="bg-white flex items-center justify-center rounded-md w-full h-[220px] sm:h-[300px] mx-auto">
              <img
                src="/research_TopicsDetail/참고2.1.svg"
                alt="Step 1"
                className="object-contain max-h-full"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="w-full max-w-[330px]">
            <div className="mb-3">
              <h5 className="font-bold text-[15px] sm:text-[18px]">Step 2. 영상처리 딥러닝 모델</h5>
              <p className="text-[12px] sm:text-[14px] mt-1 leading-[150%]">
                <span className="font-bold">자율주행 핵심 영상처리 딥러닝</span><br />
                분류/탐지/추적 모델 구현
              </p>
            </div>
            <div className="bg-white flex items-center justify-center rounded-md w-full h-[220px] sm:h-[300px] mx-auto">
              <img
                src="/research_TopicsDetail/참고2.2.svg"
                alt="Step 2"
                className="object-contain max-h-full"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="w-full max-w-[330px]">
            <div className="mb-3">
              <h5 className="font-bold text-[15px] sm:text-[18px]">Step 3. 테스트베드</h5>
              <p className="text-[12px] sm:text-[14px] mt-1 leading-[150%]">
                기술 시연 및 성능평가 시험 환경 구축<br />
                <span className="font-bold">객체 인식 기술 시연 테스트베드</span>
              </p>
            </div>
            <div className="bg-white flex items-center justify-center rounded-md w-full h-[220px] sm:h-[300px] mx-auto">
              <img
                src="/research_TopicsDetail/참고2.3.svg"
                alt="Step 3"
                className="object-contain max-h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== 섹션 3: 유체 AI ===== */}
      <div className="mt-20 max-w-[958px] mx-auto mb-16">
        <h4 className="text-[#043A6F] font-bold text-[18px] sm:text-[24px] leading-snug">
          딥러닝 기반의 유체 운동 예측 기술 연구
        </h4>
        <p className="text-[#000] font-normal text-[14px] sm:text-[20px] mt-1">
          (Research on Fluid Motion Prediction Technology based on Deep Learning)
        </p>

        <div className="mt-6 text-[#282828] text-[13px] sm:text-[16px] leading-[150%] space-y-4">
          <div>
            <p>■ 인공지능 기반 2D/3D 유체 운동 예측 기술 연구</p>
            <p>- CFD 데이터 수집 및 딥러닝 DB 구축</p>
            <p>- Laminar/Turbulent Flow 예측 연구</p>
            <p>- Time-Dependent 유동 해석 예측 연구</p>
          </div>
          <div>
            <p>■ 물리 모사 기술 연구</p>
            <p>- PINN 기반 물리 현상 모사 연구</p>
            <p>- 다양한 PDE 학습/추론 가능한 Architecture 연구</p>
          </div>
          <div>
            <p>■ 2D/3D 유동 가시화 연구</p>
            <p>- Unreal/Unity 기반 유동 가시화 연구</p>
            <p>- 딥러닝 ↔ 그래픽 엔진 실시간 데이터 파이프라인 구축</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Image
            src="/research_TopicsDetail/3참고.svg"
            alt="딥러닝 기반 유동 예측 모델 개념도"
            width={790}
            height={458}
            className="w-full max-w-[820px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
