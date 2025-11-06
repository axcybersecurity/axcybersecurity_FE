// app/research/components/TopicsDetail/SocDetail.tsx
'use client';

import Image from 'next/image';

export default function SocDetail() {
  return (
    <div className="mt-8 p-4 sm:p-6 font-['Pretendard']">
      {/* ===== 제목 ===== */}
      <h3 className="mx-auto text-center font-semibold break-keep text-[28px] sm:text-[36px] leading-[1.2] text-[#02162E]">
        반도체 SoC 및 사이버 보안
      </h3>

      {/* ===== 섹션 1: TLS/SSL 보안칩 ===== */}
      <section className="mt-10 max-w-6xl mx-auto">
        <h4 className="text-[#043A6F] font-bold text-[20px] sm:text-[24px] leading-snug">
          TLS/SSL(TLS1.2, TLS1.3)지원 보안칩 개발 연구
        </h4>
        <p className="text-[#000] font-normal text-[16px] sm:text-[20px] mt-1">
          (Research on TLS Security Chip Optimization and Implementation)
        </p>

        <div className="mt-6 text-[#282828] text-[14px] sm:text-[16px] leading-[150%] space-y-3">
          <p>– TLS 1.2 및 보안 표준 프로토콜 호환 칩 FPGA 구현 및 ASIC(공정) 구현</p>
          <p>– 보안 칩과 연동을 위한 TLS/SSL 라이브러리 API(OpenSSL, MbedTLS, WolfSSL, GnuSSL 등) 구현 및 최적화 연구</p>
          <p>– CPS(Cyber Physical System) 응용 프로토콜(CoAP, MQTT 등) 호환 암호 코어 및 인터페이스 개발</p>
          <p>– 실시간 제어 프로토콜(PROFINET, ModBus 등)의 보안성 제공을 위한 기술 연구</p>
          <p>– 양자내성암호(PQC) 최적화 구현 및 PQC TLS 라이브러리/CPS 응용 프로토콜 연동 연구</p>
        </div>

        <div className="mt-8 flex justify-center">
          <Image
            src="/research_TopicsDetail/반도체_01.svg"
            alt="TLS 보안칩 아키텍처"
            width={964}
            height={844}
            className="w-full max-w-[980px] h-auto"
            priority
          />
        </div>

        <div className="mt-6 text-[#282828] text-[14px] sm:text-[16px] leading-[150%] space-y-3">
          <p>– 블록 암호, 스트림 암호, 타원곡선 암호 등 암호 모듈 고속화/최적화 및 물리채널 공격(DPA, CPA, EM, Timing) 방지 기법 연구</p>
          <p>– HMAC, DRBG, KDF 등을 활용한 키 생성 프로토콜 및 제어 모듈 구현/최적화 연구</p>
          <p>– End-To-End 보안 및 유/무선 네트워크 보안성을 위한 L2(MACsec), L3(IPSec) 하드웨어 구현 및 고속화 기법 연구</p>
        </div>
      </section>

      {/* ===== 섹션 2: 하드웨어 기반 딥러닝 가속기 ===== */}
      <section className="mt-16 max-w-6xl mx-auto">
        <h4 className="text-[#043A6F] font-bold text-[20px] sm:text-[24px] leading-snug">
          Hardware 기반 딥러닝 가속기 연구
        </h4>
        <p className="text-[#000] font-normal text-[16px] sm:text-[20px] mt-1">
          (Research on Hardware Based Deep Learning Accelator)
        </p>

        <div className="mt-6 text-[#282828] text-[14px] sm:text-[16px] leading-[150%] space-y-3">
          <p>– Real-Time Object Detection (YOLO v2, v4 등) RTL 기반 추론 가속회로 Verilog 구현 및 FPGA/ASIC 개발</p>
          <p>– 입력/가중치 데이터 고정소수점 전처리(Dynamic Fixed Point, Round-up 등) 및 결과 후처리(BBox, Class) 최적화</p>
          <p>– BNN(Binarized Neural Network) 기반 연산 가속회로 구현 및 호스트 프로세서 연동 SoC 개발</p>
          <p>– DRAM 타겟 공격(Bit Flip, Code Corruption, EM 등) 방어를 위한 무결성/기밀성 보장 구조 연구</p>
        </div>

        <p className="mt-4 text-center text-[15px] sm:text-[16px] text-black">[딥러닝 가속기 설계 구조]</p>
        <div className="mt-4 flex justify-center">
          <Image
            src="/research_TopicsDetail/DeepLearning_Accelator.svg"
            alt="딥러닝 가속기 설계 구조"
            width={971}
            height={447}
            className="w-full max-w-[980px] h-auto"
          />
        </div>

        <p className="mt-12 text-center text-[15px] sm:text-[16px] text-black">[내부 메모리 스케줄링 기법 최적화 연구]</p>
        <div className="mt-4 flex justify-center">
          <Image
            src="/research_TopicsDetail/memory_scheduling.svg"
            alt="메모리 스케줄링 최적화"
            width={985}
            height={519}
            className="w-full max-w-[1000px] h-auto"
          />
        </div>

        <div className="mt-6 text-[#282828] text-[14px] sm:text-[16px] leading-[150%] space-y-3">
          <p>– 딥러닝 가속기에 대한 물리채널 공격(Power, Timing, Glitch 등) 방어 기법 연구</p>
          <p>– 메모리 스케줄링(Line-based Reuse, Hybrid Reuse) 최적화 기법 연구</p>
          <p>– Binarized Layer 최적화(Logic-Gate 기반 Binary Conv, Bit-Shift 기반 BatchNorm 등)</p>
        </div>
      </section>

      {/* ===== 섹션 3: 시스템 구조 및 보안 ===== */}
      <section className="mt-16 max-w-6xl mx-auto">
        <h4 className="text-[#043A6F] font-bold text-[20px] sm:text-[24px] leading-snug">
          시스템 구조 및 보안 연구
        </h4>
        <p className="text-[#000] font-normal text-[16px] sm:text-[20px] mt-1">
          (RISC-V, ARM, Intel · Research on System Architecture and Security)
        </p>

        <div className="mt-6 text-[#282828] text-[14px] sm:text-[16px] leading-[150%] space-y-3">
          <p>– 저사양/임베디드 디바이스용 32/64-bit 코프로세서 구조 설계 및 개발</p>
          <p>– 명령어 파이프라인 최적화(Out-of-Order Completion), 명령어 확장(Vector Processing Unit) 연구</p>
        </div>

        <p className="mt-12 text-center text-[15px] sm:text-[16px] text-black">[내부 메모리 스케줄링 기법 최적화 연구]</p>
        <div className="mt-4 flex justify-center">
          <Image
            src="/research_TopicsDetail/Table.svg"
            alt="내부 메모리 스케줄링 비교 테이블"
            width={985}
            height={369}
            className="w-full max-w-[1000px] h-auto"
          />
        </div>

        <div className="mt-6 text-[#282828] text-[14px] sm:text-[16px] leading-[150%] space-y-3">
          <p>– ARIA-GCM 및 HMAC 기반 메모리 격리(무결성/기밀성) 기술 연구(키/IV 보호, 초기화 및 인터페이스 차단 등)</p>
          <p>– RISC-V ISA 및 PMP를 활용한 명령어 수준 도메인 격리(Domain Isolation), TMA(Tagged Memory Architecture) 연구</p>
        </div>

        <p className="mt-12 text-center text-[15px] sm:text-[16px] text-black">[명령어 수준의 도메인 격리 기술 연구]</p>
        <div className="mt-4 flex justify-center">
          <Image
            src="/research_TopicsDetail/domain.svg"
            alt="명령어 수준 도메인 격리"
            width={744}
            height={377}
            className="w-full max-w-[760px] h-auto"
          />
        </div>
      </section>

      {/* ===== 섹션 4: KCMVP L3 & Tamper ===== */}
      <section className="mt-16 max-w-6xl mx-auto">
        <h4 className="text-[#043A6F] font-bold text-[20px] sm:text-[24px] leading-snug">
          KCMVP Security Level 3용 보안칩 개발 및 Tamper Resistance 기술 연구
        </h4>
        <p className="text-[#000] font-normal text-[16px] sm:text-[20px] mt-1">
          (Security Module Architecture & Physical/Logical Tamper Resistance)
        </p>

        <div className="mt-6 text-[#282828] text-[14px] sm:text-[16px] leading-[150%] space-y-4">
          <div>
            <p>– Security Level 3를 갖는 고보안성 하드웨어 보안 모듈 핵심 기술 연구</p>
            <p>– Tamper Resistance, Tamper Evidence 기술 연구</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">■ Security Level 3 이상의 고보안성 하드웨어 보안 핵심 기술</p>
            <p>– HSM/TPM 수준의 키 관리, Side-channel 저항성(SPA/DPA/Timing) 제공, 고엔트로피 키 생성, 자격 기반 접근제어</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">■ Tamper Resistance / Tamper Evidence</p>
            <p>– 물리적 보안(특수 케이스, 홀로그램/개봉 여부 확인 스티커, eSeal 등), 논리적 보안(S/W 무결성, Secure Boot, Isolation 등)</p>
            <p>– 침입탐지 센서 및 논리적 탐지로 Tamper Evidence와 결합해 보안성 강화</p>
          </div>
        </div>
      </section>
    </div>
  );
}
