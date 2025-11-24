import Image from 'next/image';

export default function NlpDetail() {
  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-0 pb-12">
      {/* 메인 타이틀 */}
      <h3
        className="mx-auto text-center font-semibold break-keep text-2xl sm:text-3xl md:text-4xl leading-snug text-[#02162E]"
        style={{ fontFamily: 'Pretendard' }}
      >
        AI기반 자연어 처리
      </h3>

      {/* ============= 1. LLM 연구 ============= */}
      <section className="mt-8 max-w-5xl mx-auto">
        <h4
          className="text-xl sm:text-2xl font-bold text-[#043A6F]"
          style={{ fontFamily: 'Pretendard' }}
        >
          초거대 언어모델(LLM) 연구 및 LLM기반 서비스 연구
        </h4>
        <p
          className="mt-1 text-base sm:text-lg text-black"
          style={{ fontFamily: 'Pretendard' }}
        >
          (Research on LLM and its applications to Services)
        </p>

        <div
          className="mt-6 text-sm sm:text-base leading-relaxed text-[#282828]"
          style={{ fontFamily: 'Pretendard' }}
        >
          <div className="space-y-4">
            <div>
              <div>■ 초거대 언어모델 기반 기술 연구</div>
              <div>– 최신 NLP 기술 심층 분석 (Transformer, Pre-trained LLM, ChatGPT 등)</div>
              <div>
                – 초거대 언어모델(LLM) 경량화를 위한 Quantization, Pruning, Knowledge distillation 기법 연구
              </div>
              <div>– LLM 모델에 대한 효율적인 training 기법 연구(강화학습 연동, Dynamic batching 기법 등)</div>
              <div>– LLM 모델을 위한 데이터 augmentation, synthetic data, 학습 데이터 생성 기법 연구</div>
            </div>

            <div>
              <div>■ LLM 기반 도메인 특화 응용 연구</div>
              <div>– 응용 도메인 특화 프롬프트 엔지니어링 방안 연구</div>
              <div>– 강화학습 기반 도메인 특화 LLM Application 구현 방안 연구</div>
              <div>– 도메인 특화 LLM training data 생성 연구</div>
            </div>

            <div>
              <div>■ 자연어 처리(NLP) 전처리 기술 연구</div>
              <div>– 개체명 인식 기반 데이터 분석 기술 연구</div>
              <div>– 도메인 특화 토크나이저 기술 연구</div>
              <div>– 도메인 특화 텍스트 전처리 파이프라인 구현 연구</div>
            </div>
          </div>
        </div>

        <p
          className="mt-8 text-center text-sm sm:text-base text-black"
          style={{ fontFamily: 'Pretendard' }}
        >
          [ChatGPT에서 사용한 LLM 모델 training 방법론]
        </p>
        <div className="mt-6 max-w-5xl mx-auto">
          <Image
            src="/참고1.svg"
            alt="LLM model training technology"
            width={977}
            height={596}
            className="w-full h-auto rounded-md"
          />
        </div>
      </section>

      {/* ============= 2. 테스트 스크립트 생성 모델 ============= */}
      <section className="mt-16 max-w-5xl mx-auto">
        <h4
          className="text-xl sm:text-2xl font-bold text-[#043A6F]"
          style={{ fontFamily: 'Pretendard' }}
        >
          딥러닝 기반의 테스트 스크립트 생성 모델 개발
        </h4>
        <p
          className="mt-1 text-base sm:text-lg text-black"
          style={{ fontFamily: 'Pretendard' }}
        >
          (Research on Test Script Generation Automation System on Deep Learning)
        </p>

        <div
          className="mt-6 text-sm sm:text-base leading-relaxed text-[#282828]"
          style={{ fontFamily: 'Pretendard' }}
        >
          <div className="space-y-4">
            <div>
              <div>■ 인공지능 기반 테스트 스크립트 생성 RPA(Robotic Process Automation) 시스템 개발</div>
              <div>– Transformer[1], GPT-2[2] 등을 활용한 업무 특화 자연어 생성 모델 구현 연구</div>
              <div>– Beam Search, Top-K, Top-P 등 다양한 decoding 전략 연구</div>
            </div>

            <div>
              <div>■ LG전자 에어솔루션연구소와 긴밀한 협력을 통한 산학과제 진행</div>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-12 max-w-5xl mx-auto">
          <Image
            src="/참고3.svg"
            alt="Test Script System"
            width={968}
            height={623}
            className="w-full h-auto rounded-md"
          />
        </div>
      </section>
    </div>
  );
}
