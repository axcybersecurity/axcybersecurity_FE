'use client';

import Image from "next/image";

export default function BlockchainDetail() {
  return (
    <div className="mt-8 px-4 sm:px-6">
      {/* ===== 제목 ===== */}
      <h3 className="mx-auto text-center font-semibold break-keep text-[26px] sm:text-[36px] text-[#02162E]">
        블록체인
      </h3>

      {/* ===== BaaS용 블록체인 기술 ===== */}
      <div className="mt-12 max-w-[958px] mx-auto">
        <h4 className="text-[#043A6F] font-bold text-[18px] sm:text-[24px] leading-snug">
          BaaS용 블록체인 기술
        </h4>
        <p className="text-[#000] font-normal text-[14px] sm:text-[20px] mt-1">
          (Blockchain Technology for BaaS)
        </p>
        
          <div className="mt-6 text-[#282828] text-[13px] sm:text-[16px] leading-[150%] space-y-4">
            <div>
              <p>- 블록체인을 손쉽게 구축 및 관리할 수 있는 솔루션으로 Web UI 기반의 높은 접근성과 편의성을 제공</p>
              <p>- 기업 자체 시설에 설비된 서버 환경(온프레미스 환경)뿐만 아니라 AWS, NHN, Alibaba 등 멀티클라우드 배포 지원</p>
              <p>- 외부 기존 서비스와의 연계를 위한 인터페이스(Connector) 구축 및 연구</p>
              <p>- 기 구축된 블록체인을 연계하여 추가 서비스 어플리케이션을 쉽게 구축할 수 있는 솔루션 연구</p>
              <p>- Zero-coding 스마트컨트랙트 생성 기능, Flow-based 서비스 통합 도구 연구</p>
              <p>- 블록체인 데이터 오라클, IPFS, DID 등 블록체인 서비스 개발에 필요한 미들웨어 서비스 연구</p>
            </div>
        </div>

        {/* BaaS Architecture 이미지 */}
        <div
          className="mt-10 text-center"
          style={{ fontFamily: "Pretendard", fontWeight: 400, fontSize: "16px", color: "#000" }}
        >
          [BaaS 플랫폼 아키텍처]
        </div>

        <div className="mt-4 w-full max-w-[977px] mx-auto">
          <Image
            src="/research_TopicsDetail/1참고사진.svg"
            alt="BaaS Architecture"
            width={977}
            height={654}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      {/* ===== 저사양 디바이스 블록체인 네트워크 기술 ===== */}
      <div className="mx-auto mt-20 w-full max-w-[958px]">
        <h4 style={{ fontFamily: "Pretendard", fontWeight: 700, fontSize: "24px", color: "#043A6F" }}>
          저사양 디바이스 지원을 위한 경량 사물 블록체인 네트워크 기술개발
        </h4>
        <div style={{ fontFamily: "Pretendard", fontWeight: 400, fontSize: "20px", color: "#000", marginTop: "4px" }}>
          (Development of lightweight monoblock chain network technology to support low-specification devices)
        </div>

        <div
          className="mt-6 leading-[150%]"
          style={{ fontFamily: "Pretendard", fontWeight: 400, fontSize: "16px", color: "#282828" }}
        >
          <div className="space-y-2">
            <div>– Raspberry Pi 3 등 저사양 IoT 디바이스에서도 동작 가능한 사물 블록체인 메인넷 기술 개발</div>
            <div>– 저사양 디바이스 환경에서 원활히 동작하며 보안 취약성이 없는 경량 합의 알고리즘 개발</div>
            <div>– 대용량 IoT 데이터를 실시간 처리 가능한 L2 경량 블록체인 기술 개발</div>
            <div>– L2 ↔ L1 데이터 및 신뢰 연동 기술 개발</div>
            <div>– 사물 블록체인 네트워크, 신뢰 연동, 시스템 플랫폼, 응용 서비스 개발</div>
          </div>
        </div>
      </div>

      {/* ===== Hardware 기반 딥러닝 가속기 ===== */}
      <div className="mx-auto mt-20 w-full max-w-[988px]">
        <h4 style={{ fontFamily: "Pretendard", fontWeight: 700, fontSize: "24px", color: "#043A6F" }}>
          Hardware 기반 딥러닝 가속기 연구
        </h4>
        <div style={{ fontFamily: "Pretendard", fontWeight: 400, fontSize: "20px", color: "#000", marginTop: "4px" }}>
          (Research on Hardware Based Deep Learning Accelerator)
        </div>

        <div className="mt-8 w-full">
          <Image
            src="/research_TopicsDetail/2참고사진.svg"
            alt="Hardware Based Deep Learning Accelerator"
            width={988}
            height={519}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* ===== 블록체인 암호 기술 연구 ===== */}
      <div className="mx-auto mt-20 w-full max-w-[958px]">
        <h4 style={{ fontFamily: "Pretendard", fontWeight: 700, fontSize: "24px", color: "#043A6F" }}>
          블록체인 암호 기술 연구
        </h4>
        <div style={{ fontFamily: "Pretendard", fontWeight: 400, fontSize: "20px", color: "#000", marginTop: "4px" }}>
          (Blockchain Cryptography Research)
        </div>

        <div
          className="mt-6 leading-[150%]"
          style={{ fontFamily: "Pretendard", fontWeight: 400, fontSize: "16px", color: "#282828" }}
        >
          <div className="space-y-2">
            <div>– 블록체인 보안 암호 프리미티브 연구 (EIP39, EIP32, HASH 등)</div>
            <div>– 블록체인 플랫폼 Layer 2 (ZK-Rollup) 연구 및 개발</div>
            <div>– 블록체인 플랫폼 상의 익명성 제공 기술 분석 (BBS+ / CL Signature, PDC 등)</div>
            <div>– Anonymous Credential, zkSNARK/zkSTARK 기반 익명 인증 기술 개발</div>
          </div>
        </div>

        <div className="mt-6 w-full max-w-[975px] mx-auto">
          <Image
            src="/research_TopicsDetail/3참고사진.svg"
            alt="Blockchain Cryptography Security"
            width={975}
            height={462}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      {/* ===== 블록체인 Security Plane 및 플랫폼 연동 ===== */}
      <div className="mx-auto mt-20 w-full max-w-[958px]">
        <h4 style={{ fontFamily: "Pretendard", fontWeight: 700, fontSize: "24px", color: "#043A6F" }}>
          블록체인 Security Plane 개발 및 블록체인 플랫폼 통합/연동 기술 개발
        </h4>
        <div
          style={{
            fontFamily: "Pretendard",
            fontWeight: 400,
            fontSize: "20px",
            color: "#000",
            marginTop: "4px",
            letterSpacing: "-0.05%"
          }}
        >
          (Blockchain Security Plane Development and Blockchain Platform Integration Technology)
        </div>

        <div
          className="mt-6 leading-[150%]"
          style={{ fontFamily: "Pretendard", fontWeight: 400, fontSize: "16px", color: "#282828" }}
        >
          <div className="space-y-6">
            <div>
              <div>■ 블록체인 Security Plane</div>
              <div>– 인증/인가, 접근 제어, 상태 저장, 해킹 방지, 계약 사기 방지 등 보안 기능 수행</div>
              <div>– IoT 디바이스/게이트웨이 보안 관리용 Security Plane 서브 체인 개발</div>
              <div>– DID 기반 IoT 보안 연동, 인증/인가 기술 개발</div>
            </div>

            <div>
              <div>■ 블록체인 플랫폼 통합/연동 기술</div>
              <div>– 기존 블록체인 플랫폼과 Security Plane 연동</div>
              <div>– IoT / 블록체인 플랫폼 연동 인터페이스 개발 (HTTP, MQTT, gRPC 등)</div>
              <div>– 보안 기술 기반 블록체인 API 및 계층별 인터페이스 기술 개발</div>
              <div>– 경량 Security Plane ↔ 블록체인 플랫폼 연동 기술 개발</div>
              <div>– 클라우드 IoT 플랫폼과의 보안 연동 기술 개발 (예: AWS GreenGrass)</div>
              <div>– oneM2M, LwM2M 등 이종 IoT 플랫폼 보안 연동 기술 개발</div>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full max-w-[991px] mx-auto">
          <Image
            src="/research_TopicsDetail/4참고사진.svg"
            alt="Blockchain Platform Security Integration"
            width={991}
            height={561}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* ===== 사이버보안 강화 기술 ===== */}
      <div className="mx-auto mt-20 mb-16 w-full max-w-[958px]">
        <h4 style={{ fontFamily: "Pretendard", fontWeight: 700, fontSize: "24px", color: "#043A6F" }}>
          사이버보안 강화 기술
        </h4>
        <div
          style={{
            fontFamily: "Pretendard",
            fontWeight: 400,
            fontSize: "20px",
            color: "#000",
            marginTop: "4px",
            letterSpacing: "-0.05%"
          }}
        >
          (Cybersecurity Enhancement Technology)
        </div>

        <div
          className="mt-6 leading-[150%]"
          style={{ fontFamily: "Pretendard", fontWeight: 400, fontSize: "16px", color: "#282828" }}
        >
          <div className="space-y-2">
            <div>– 블록체인 기반 고신뢰 클라우드 보안 기술 개발</div>
            <div>– Notary Server 취약점 분석 및 연구</div>
            <div>– Kubernetes 보안 구조 취약점 분석 및 연구</div>
            <div>– Kubernetes 이미지 보안성 분석 기법 연구</div>
            <div>– 블록체인 데이터 무결성 보장 기법 연구</div>
            <div>– 백신 엔진 및 데이터셋 기반 바이러스/멀웨어 분석 기법 연구</div>
          </div>
        </div>

        <div className="mt-6 w-full max-w-[989px] mx-auto">
          <Image
            src="/research_TopicsDetail/5참고사진.svg"
            alt="Cybersecurity Enhancement"
            width={989}
            height={581}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
