import Image from "next/image";

export default function CybersecDetail() {
  return (
    <div className='mt-8 p-6'>
      <h3
        className='mx-auto text-center font-semibold break-keep'
        style={{
          // width: '169px',
          // height: '43px',
          fontFamily: 'Pretendard',
          // fontStyle: 'semibold',
          fontWeight: 600,
          fontSize: '36px',
          lineHeight: '43px',
          color: '#02162E'
        }}
        >
          사이버 보안
        </h3>
        <h4
          className='mt-12 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'bold',
            color: '#043A6F'
          }}
          >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            안티드론/사이버전자전 및 드론 사이버 보안 기술
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
            (Anti-drone/cyber war autobiography and drone cybersecurity technology)
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
              <div>■AI 기반 드론 탐지 연구(Research on AI-based Drone Detection)</div>
              <div>–장거리 드론에 대한 시계열 데이터 구축과 LSTM 및 GRU 조기 탐지 알고리즘 개발 연구</div>
              <div>–Unity3D 기반 가상 환경에서의 드론 시뮬레이션을 통한 합성 데이터 생성 및 도메인 적응 기법 연구</div>
              <div>–카메라, 레이더, 음향 센서 데이터의 멀티모달 트랜스포머 네트워크 기반 통합 분석</div>
            </div>

            <div>
              <div>■안티드론 및 드론 제어권 탈취 연구(Research on Anti-drone Techniques and Drone Control Hijacking)</div>
              <div>–802.11 프로토콜 취약점을 이용한 GCS Deauthentication 공격 연구</div>
              <div>–SDR 활용 MAVLink 프로토콜 기반 드론 조종 패킷의 도청 및 재전송 공격 연구</div>
              <div>–드론 펌웨어에 대한 Reverse Engineering 및 ROP 기반 코드 실행 취약점 연구</div>
              <div>–드론 무선통신 간의 암호 취약점에 대한 분석 및 통신 안전성에 대한 연구</div>
            </div>
          </div>
        </div>
          <div
            className="mt-8 mx-auto text-center"
            style={{
                fontFamily: 'Pretendard',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#000000'
            }}
            >
            [안티드론 기술의 활용]
            </div>    
            <div className="mt-4 mx-auto" style={{ width: '982px' }}>
              <Image
                src="/antidrone.svg"
                alt="Anti-Drone"
                width="982"
                height="490"
                className="max-w-full h-auto"
              />
          </div> 
        <h4
          className='mt-18 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'bold',
            color: '#043A6F'
          }}
          >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            산업시설 사이버보안
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
            (industrial facility cybersecurity)
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
            <div>■원자력발전소, 원자로, 기타 산업 시설 등 산업시설에 대한 사이버 보안 기술 연구​</div>
            <div>–산업 시설을 목적으로 하는 공격 식별 및 평가 검증​</div>
            <div>–산업 시설에 대한 취약점 분석 및 취약점을 통한 모의 해킹 연구​</div>
            <div>–산업 시설 보안 기능 개발</div>
            <div>–산업 시설 리스트 분석–산업 시설 공격 기법의 고도화를 위한 보안 기술 연구 및 제품 개발</div>
            <div>–고도화된 산업 시설 공격 예방을 위한 보안 가이드라인 연구</div>
          </div>
        </div> 
          <div
            className="mt-8 mx-auto text-center"
            style={{
                fontFamily: 'Pretendard',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#000000'
            }}
            >
            [산업 시설 및 에너지 시설 공격 흐름도]
          </div>   
          <div className='mt-2 mb-10 mx-auto' style={{ width: '788px' }}>
            <Image
              src="industry.svg"
              alt="Industry"
              width="788"
              height="648"
              className='max-w-full h-auto'
              />
          </div>  
    </div>
  );
} 