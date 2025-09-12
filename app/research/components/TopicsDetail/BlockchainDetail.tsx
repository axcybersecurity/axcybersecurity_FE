import Image from "next/image";

export default function BlockchainDetail() {
  return (
    <div className='mt-8 p-6'>
      <h3
        className='mx-auto text-center font-semibold break-keep'
        style={{
          // width: '125px',
          // height: '43px',
          fontFamily: 'Pretendard',
          // fontStyle: 'semibold',
          fontWeight: 600,
          fontSize: '36px',
          lineHeight: '43px',
          color: '#02162E'
        }}
        >
          블록체인
        </h3>
        <h4
          className='mt-8 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'Bold',
            color: '#043A6F'
          }}
          >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            BaaS용 블록체인 기술
          </div>
          </h4>
          <h4
          className='mt-0 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            color: '#000000'
          }}
          >
          <div style={{ fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%', marginTop: '4px' }}>
            (Blockchain Technology for BaaS)
          </div>
          </h4>

          <div
            className='mt-6 mx-auto'
            style={{
              width: '958px',
              fontFamily: 'Pretendard',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#282828'
            }}
            >
            <div>
              <div>–블록체인을 손쉽게 구축 및 관리할 수 있는 솔루션으로 Web UI 기반의 높은 접근성과 편의성을 제공–기업 자체 시설에 설비된 서버 환경</div>
              <div>(온프레미스 환경)을 이용할 수 있고, AWS, NHN, Alibaba 등 다양한 클라우드 인프라(멀티클라우드)에 블록체인 배포를 지원</div>
              <div>–외부의 기존 서비스와의 연계를 위한 인터페이스(Connector) 구축 및 연구–기구축된 블록체인을 연계하여 손쉽게 추가 서비스</div>
              <div>어플리케이션을 구축할 수 있는 솔루션 연구</div>
              <div>–코딩이 필요없는 Zero-coding 스마트컨트랙트 생성 기능, Flow-based 서비스 통합 도구 구축 및 연구</div>
              <div>–블록체인 데이터 오라클, IPFS(데이터 분산 관리 시스템), DID(자기주권 신원증명) 등 블록체인 서비스 개발에 필요한 다양한 기능에 대한</div>
              <div>미들웨어 서비스 구축 및 연구</div>
            </div>
          </div>
          <div
            className="mt-10 mx-auto text-center"
            style={{
                fontFamily: 'Pretendard',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#000000'
            }}
            >
            [BaaS 플랫폼 아키텍처]
            </div>
          <div className='mt-8 mx-auto' style={{ width: '977px' }}>
            <Image
              src="1참고사진.svg"
              alt="BaaS Architecture"
              width="977"
              height="654"
              className='max-w-full h-auto'
              />
          </div>
        <h4
          className='mt-20 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'Bold',
            color: '#043A6F'
          }}
          >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            저사양 디바이스 지원을 위한 경량 사물 블록체인 네트워크 기술개발
          </div>
          </h4>
        <h4
          className='mt-0 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            color: '#000000'
          }}
          >
          <div style={{ fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%', marginTop: '4px' }}>
            (Development of lightweight monoblock chain network technology to support low-specification devices)
          </div>
          </h4>
          <div
            className='mt-6 mx-auto'
            style={{
              width: '958px',
              fontFamily: 'Pretendard',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#282828'
            }}
            >
            <div>
              <div>–Raspberry Pi 3 등, 저사양 IoT 디바이스에서도 구동 및 사용될 수 있는 사물 블록체인 메인넷 기술 개발</div>
              <div>–저사양 디바이스 환경에서 원활히 동작하며, 보안 취약성이 없는 경량 합의 알고리즘 개발</div>
              <div>–대용량 IoT 데이터를 실시간으로 처리할 수 있는 L2 경량 블록체인 기술 개발</div>
              <div>–블록체인 계층 간(L2, L1) 데이터 및 신뢰 연동 기술 개발
              <div>–사물 블록체인 네트워크 기술, 신뢰 연동 기술, 시스템 플랫폼 기술 및 응용 서비스 개발</div>
            </div>
          </div>
        </div>
        <h4
          className='mt-20 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'Bold',
            color: '#043A6F'
          }}
          >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            Hardware 기반 딥러닝 가속기 연구
          </div>
          </h4>
        <h4
          className='mt-0 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            color: '#000000'
          }}
          >
          <div style={{ fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%', marginTop: '4px' }}>
            (Research on Hardware Based Deep Learning Accelator)
          </div>
          </h4>
          <div className='mt-8 mx-auto' style={{ width: '988px' }}>
            <Image
              src="2참고사진.svg"
              alt="Hardware Based Deep Learning Accelator"
              width="988"
              height="519"
              className='max-w-full h-auto'
              />
          </div>
        <h4
          className='mt-16 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'bold',
            color: '#043A6F'
          }}
          >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            블록체인 암호 기술 연구
          </div>
          </h4>
        <h4
          className='mt-0 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            color: '#000000'
          }}
          >
          <div style={{ fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%', marginTop: '4px' }}>
            (blockchain cryptography research)
          </div>
          </h4>
          <div
            className='mt-6 mx-auto'
            style={{
              width: '958px',
              fontFamily: 'Pretendard',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#282828'
            }}
            >
            <div>
              <div>–블록체인 보안 암호 프리미티브 연구 (EIP39, EIP32, HASH 등)</div>
              <div>–블록체인 플랫폼 Layer 2 (ZK-Rollup) 연구 및 개발</div>
              <div>–블록체인 플랫폼상에서의 익명성 제공 기술 분석(Identity Mixer의 BBS+ Signature/CL Signature, Private Data Collection)</div>
              <div>–블록체인 플랫폼용 익명 인증 기술 개발(Anonymous Credential, zkSNARK(zkSTARK), Selective Disclosure, Commitment 등)</div>
            </div>
          </div>
          <div className='mt-6 mx-auto' style={{ width: '975px' }}>
            <Image
              src="3참고사진.svg"
              alt="blockchain cryptography security"
              width="975"
              height="462"
              className='max-w-full h-auto'
              />
          </div>
        <h4
          className='mt-16 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'bold',
            color: '#043A6F'
          }}
          >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            블록체인 Security Plane 개발 및 블록체인 플랫폼 통합/연동 기술 개발
          </div>
          </h4>
        <h4
          className='mt-0 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            color: '#000000'
          }}
          >
          <div style={{ fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: '-0.05%', marginTop: '4px', whiteSpace: 'nowrap' }}>
            (Blockchain Security Plane Development and Blockchain Platform Integration/Integration Technology Development)
          </div>
        </h4>
        <div
          className="mt-4 mb-8 mx-auto"
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            color: '#282828'
          }}
          >
          <div className='space-y-6'>
            <div>
              <div>■블록체인 Security Plane</div>
              <div>–서브 블록체인 레이어로 블록체인 내 인증/인가, 권한설정, 접근 제어, 상태 저장, 해킹 방지, 계약 사기, 부인 방지 등의 기능을 수행</div>
              <div>–IoT 디바이스/게이트웨이 보안 관리용 Security Plane 서브 체인 개발</div>
              <div>–DID 기반 IoT 보안 연동, 인증/인가 기술 개발</div>
            </div>

            <div>
              <div>■블록체인 플랫폼 통합/연동 기술–기존 블록체인 플랫폼과 블록체인 Security Plane 연동</div>
              <div>–IoT/블록체인 플랫폼간 연동을 위한 인터페이스(HTTP 기반 프로토콜, MQTT, gRPC 등) 개발</div>
              <div>–Security Plane상의 암호/보안 기술을 활용하는 블록체인 플랫폼 API 및 계층별 인터페이스 기술 개발</div>
              <div>(ex : 블록체인 응용 계층, 블록체인 전송 계층, 블록체인 Ledger 계층 등)</div>
              <div>–IoT 디바이스/게이트웨이용 경량형 블록체인 Security Plane과 블록체인 플랫폼과의 연동 기술 개발</div>
              <div>–클라우드 기반 IoT 플랫폼과의 보안 연동 기술 개발(AWS GreenGrass 와 같은 클라우드 기반 플랫폼과의 연동 기술 개발)</div>
              <div>–이종 IoT 플랫폼과의 보안 연동 기술 개발(oneM2M, LwM2M 등의 접근제어, 인증/인가, 보안 연관, RSPF와의 연동 기술 개발)</div>
            </div>
          </div>
        </div>
          <div className='mt-6 mx-auto' style={{ width: '991px' }}>
            <Image
              src="4참고사진.svg"
              alt="blockchain platform"
              width="991"
              height="561"
              className='max-w-full h-auto'
              />
          </div>
        <h4
          className='mt-16 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'bold',
            color: '#043A6F'
          }}
          >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            사이버보안 강화 기술
          </div>
          </h4>
        <h4
          className='mt-0 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            color: '#000000'
          }}
          >
          <div style={{ fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: '-0.05%', marginTop: '4px', whiteSpace: 'nowrap' }}>
            (cybersecurity enhancement technology)
          </div>
        </h4>
          <div
            className='mt-6 mx-auto'
            style={{
              width: '958px',
              fontFamily: 'Pretendard',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#282828'
            }}
            >
            <div>
              <div>–블록체인을 활용한 고신뢰 클라우드 보안 기술 개발​–Notary Server(공증 서버) 취약점 분석 및 연구​</div>
              <div>–Kubernetes 보안 구조 취약점 분석 및 연구​–Kubernetes 이미지 보안성 분석 기법 연구​</div>
              <div>–블록체인 데이터 무결성 보장 기법 연구​</div>
              <div>–백신엔진 및 데이터 셋을 이용한 바이러스/맬웨어 분석 기법 연구​​</div>
            </div>
          </div> 
          <div className='mt-6 mb-8 mx-auto' style={{ width: '989px' }}>
            <Image
              src="5참고사진.svg"
              alt="cybersecurity enhancement"
              width="989"
              height="581"
              className='max-w-full h-auto'
              />
          </div>  
      </div>
  );
} 