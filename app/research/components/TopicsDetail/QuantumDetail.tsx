'use client';

import Image from 'next/image';

export default function QuantumDetail() {
  return (
    <div className="p-4 sm:p-6">
      <div className="mx-auto max-w-6xl font-['Pretendard']">
        {/* ===== 제목 ===== */}
        <h2 className="text-center font-semibold text-[#02162E] text-[28px] sm:text-[36px] leading-[1.2]">
          양자컴퓨팅 및 암호 해독
        </h2>

        {/* --- 공개키 암호 해독 양자회로 연구 --- */}
        <section className="mt-10 sm:mt-12">
          <h3 className="text-[#043A6F] font-bold text-[20px] sm:text-[24px] leading-snug">
            공개키 암호 해독 양자회로 연구
          </h3>
          <p className="text-black text-[16px] sm:text-[20px] mt-1">
            (Research on quantum circuits for cracking public-key cryptography)
          </p>

          <div className="mt-6 text-[#282828] text-[14px] sm:text-[16px] leading-[150%] space-y-6">
            <div>
              <p className="font-semibold">
                Building Shor&apos;s Algorithm circuit for cracking RSA/ECC cryptosystem
              </p>
              <ul className="list-disc list-inside space-y-1 pl-3">
                <li>
                  RSA 크랙용 기초 서브회로 개발
                  <ul className="list-['–'] list-inside ml-5 space-y-1">
                    <li>양자 가산기</li>
                    <li>양자 모듈 가산기</li>
                    <li>양자 모듈러 곱셈</li>
                    <li>양자 모듈 지수화</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <ul className="list-disc list-inside space-y-1 pl-3">
                <li>
                  ECC 크랙용 기초 서브 회로 개발(소수 곡선, 이진 타원 곡선)
                  <ul className="list-['–'] list-inside ml-5 space-y-1">
                    <li>양자 승수</li>
                    <li>양자 반전</li>
                    <li>양자점 가산</li>
                  </ul>
                </li>
              </ul>
            </div>

            <ul className="list-disc list-inside space-y-2 pl-3">
              <li>양자 회로 최적화(전체적인 깊이, 게이트 수, T 깊이 등 감소)</li>
              <li>양자 회로 시뮬레이션(IBM Qiskit, Q-Crypton 등)</li>
              <li>양자 자원 추정</li>
            </ul>
            <p className="font-semibold">Various research topics on quantum security</p>
          </div>

          <figure className="mt-8 text-center">
            <figcaption className="mb-2 text-black text-[15px] sm:text-[16px]">
              [Quantum Circuit for Cracking RSA Cryptosystem – High-Level Overview]
            </figcaption>
            <Image
              src="/research_TopicsDetail/quantum_circuit.svg"
              alt="Quantum Circuit"
              width={975}
              height={584}
              className="mx-auto h-auto w-full max-w-[980px]"
              priority
            />
          </figure>

          <figure className="mt-8 text-center">
            <figcaption className="mb-2 text-black text-[15px] sm:text-[16px]">
              [Example: Modular Adder Library Development on Q-Crypton Visualization (Vnote)]
            </figcaption>
            <Image
              src="/research_TopicsDetail/Q_visualization.svg"
              alt="Visualization"
              width={860}
              height={574}
              className="mx-auto h-auto w-full max-w-[880px]"
            />
          </figure>
        </section>

        {/* --- 양자 기계 학습에 관한 연구 --- */}
        <section className="mt-16 sm:mt-20">
          <h3 className="text-[#043A6F] font-bold text-[20px] sm:text-[24px] leading-snug">
            양자 기계 학습에 관한 연구
          </h3>
          <p className="text-black text-[16px] sm:text-[20px] mt-1">
            (Research on Quantum Machine Learning)
          </p>

          <div className="mt-6 text-[#282828] text-[14px] sm:text-[16px] leading-[150%]">
            <ul className="list-disc list-inside pl-3">
              <li>사이버 보안 및 암호 분석을 위한 하이브리드 양자-고전적 딥러닝 연구</li>
            </ul>
          </div>

          <figure className="mt-8 text-center">
            <figcaption className="mb-2 text-black text-[15px] sm:text-[16px]">
              [Hybrid Quantum-Classical Machine Operation Flow Example]
            </figcaption>
            <Image
              src="/research_TopicsDetail/example.svg"
              alt="Hybrid Operation Flow"
              width={897}
              height={561}
              className="mx-auto h-auto w-full max-w-[900px]"
            />
          </figure>

          <figure className="mt-8 text-center">
            <figcaption className="mb-2 text-black text-[15px] sm:text-[16px]">
              [Example of Hybrid Quantum-Classical Machine Learning Architecture]
            </figcaption>
            <Image
              src="/research_TopicsDetail/HybridQuantum.svg"
              alt="Hybrid Quantum ML Architecture"
              width={982}
              height={427}
              className="mx-auto h-auto w-full max-w-[990px]"
            />
          </figure>
        </section>

        {/* --- 양자 연합 학습에 관한 연구 --- */}
        <section className="mt-16 sm:mt-20">
          <h3 className="text-[#043A6F] font-bold text-[20px] sm:text-[24px] leading-snug">
            양자 연합 학습에 관한 연구
          </h3>

          <div className="mt-6 text-[#282828] text-[14px] sm:text-[16px] leading-[150%]">
            <ul className="list-disc list-inside pl-3 space-y-2">
              <li>양자 연합 학습 계획에 관한 연구</li>
              <li>개발 제약, 배포 전략 및 상황과 같은 구현 과제에 대한 연구</li>
            </ul>
          </div>

          <figure className="mt-8 text-center">
            <figcaption className="mb-2 text-black text-[15px] sm:text-[16px]">
              [Example of Quantum Federated Learning Schemes]
            </figcaption>
            <Image
              src="/research_TopicsDetail/Schemes.svg"
              alt="Quantum Federated Learning Schemes"
              width={941}
              height={489}
              className="mx-auto h-auto w-full max-w-[950px]"
            />
          </figure>
        </section>
      </div>
    </div>
  );
}
