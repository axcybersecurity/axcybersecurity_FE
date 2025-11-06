'use client';

import Image from 'next/image';

export default function NlpDetail() {
  return (
    <div className="mt-8 p-4 sm:p-6">
      
      {/* ===== 제목 ===== */}
      <h3 className="mx-auto text-center font-semibold break-keep text-[28px] sm:text-[36px] text-[#02162E]">
        AI기반 자연어 처리
      </h3>

      {/* ===== 섹션 1: LLM 연구 ===== */}
      <div className="mt-10 max-w-6xl mx-auto">
        <h4 className="text-[#043A6F] font-bold text-[20px] sm:text-[24px] leading-snug">
          초거대 언어모델(LLM) 연구 및 LLM기반 서비스 연구
        </h4>
        <p className="text-[#000] font-normal text-[16px] sm:text-[20px] mt-1">
          (Research on LLM and its applications to Services)
        </p>

        <div className="mt-6 text-[#282828] text-[14px] sm:text-[16px] leading-[150%] space-y-6">
          <div>
            <p>■ 초거대 언어모델 기반 기술 연구</p>
            <p>- 최신 NLP 기술 분석 (Transformer, Pre-trained LLM, ChatGPT 등)</p>
            <p>- LLM 경량화: Quantization, Pruning, Knowledge distillation 연구</p>
            <p>- LLM Training 효율화 연구 (강화학습, Dynamic batching 등)</p>
            <p>- 데이터 augmentation, synthetic data 생성 기법 연구</p>
          </div>

          <div>
            <p>■ LLM 기반 도메인 특화 응용 연구</p>
            <p>- 도메인 특화 Prompt Engineering 연구</p>
            <p>- 강화학습 기반 LLM Application 구현 연구</p>
            <p>- 도메인 특화 Training Data 생성 연구</p>
          </div>

          <div>
            <p>■ 자연어 처리(NLP) 전처리 기술 연구</p>
            <p>- 개체명 인식 기반 데이터 분석 기술</p>
            <p>- 도메인 특화 토크나이저 연구</p>
            <p>- 도메인 특화 텍스트 전처리 파이프라인 연구</p>
          </div>
        </div>

        {/* 이미지 1 */}
        <p className="text-center mt-10 text-[15px] sm:text-[16px] text-black">
          [ChatGPT에서 사용한 LLM 모델 Training 방법론]
        </p>
        <div className="mt-6 flex justify-center">
          <Image
            src="/research_TopicsDetail/참고1.svg"
            alt="LLM model training technology"
            width={977}
            height={596}
            className="w-full max-w-[900px] h-auto"
          />
        </div>
      </div>

      {/* ===== 섹션 2: 테스트 스크립트 생성 모델 ===== */}
      <div className="mt-20 max-w-6xl mx-auto">
        <h4 className="text-[#043A6F] font-bold text-[20px] sm:text-[24px] leading-snug">
          딥러닝 기반의 테스트 스크립트 생성 모델 개발
        </h4>
        <p className="text-[#000] font-normal text-[16px] sm:text-[20px] mt-1">
          (Research on Test Script Generation Automation System on Deep Learning)
        </p>

        <div className="mt-6 text-[#282828] text-[14px] sm:text-[16px] leading-[150%] space-y-6">
          <div>
            <p>■ 인공지능 기반 테스트 스크립트 생성 RPA 시스템 개발</p>
            <p>- Transformer, GPT-2 기반 자연어 생성 모델 연구</p>
            <p>- Beam Search, Top-K, Top-P 등 다양한 decoding 전략 연구</p>
          </div>

          <div>
            <p>■ LG전자 에어솔루션연구소와 산학과제 수행</p>
          </div>
        </div>

        {/* 이미지 2 */}
        <div className="mt-10 flex justify-center mb-12">
          <Image
            src="/research_TopicsDetail/참고3.svg"
            alt="Test Script System"
            width={968}
            height={623}
            className="w-full max-w-[900px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
