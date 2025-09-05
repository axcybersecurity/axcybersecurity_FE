import Image from 'next/image';

export default function SocDetail() {
  return (
    <div className='mt-8 p-6'>
      <h3
        className='mx-auto text-center'
        style={{
          width: '384px',
          height: '43px',
          fontFamily: 'Pretendard',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '36px',
          lineHeight: '43px',
          color: '#02162E'
        }}
        >
          반도체 SoC 및 사이버 보안
        </h3>
        <h4
          className='mt-8 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            color: '#043A6F'
          }}
          >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            TLS/SSL(TLS1.2, TLS1.3)지원 보안칩 개발 연구
          </div>
          <div style={{ fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%', marginTop: '4px' }}>
            (Research on TLS Security Chip Optimization and Implementation)
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
              <div>–TLS 1.2 및 보안 표준 프로토콜 호환 칩 FPGA 구현 및 ASIC(공정) 구현</div>
              <div>–보안 칩과 연동을 위한 TLS/SSL 라이브러리 API(OpenSSL, MbedTLS, WolfSSL, GnuSSL 등) 구현 및 최적화 연구</div>
              <div>–CPS(Cyber Physical System) 응용 프로토콜(CoAP, MQTT 등) 호환 암호 코어 및 인터페이스 개발</div>
              <div>–실시간 제어 프로토콜(PROFINET, ModBus 등)의 보안성 제공을 위한 기술 연구</div>
              <div>–양자내성암호(Post Quantum cryptography) 최적화 구현 및 양자내성암호 TLS 라이브러리/CPS 응용 프로토콜 연동 연구</div>
            </div>
          </div>
          <div className='mt-8 mx-auto' style={{ width: '964px' }}>
            <Image
              src="반도체_01.svg"
              alt="Semiconductor"
              width="964"
              height="844"
              className='max-w-full h-auto'
              />
          </div>
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
              <div>–블록 암호, 스트림 암호, 타원곡선 암호 등 암호 모듈 고속화/최적화 및 물리채널 공격( DPA, CPA, EM Attack, Timing Attack 등) 방지 기법 연구</div>
              <div>–HMAC, DRBG, KDF 등을 활용한 키 생성 프로토콜 및 제어 모듈 구현 및 최적화 연구</div>
              <div>–CPS(Cyber Physical System) 응용 프로토콜(CoAP, MQTT 등) 호환 암호 코어 및 인터페이스 개발</div>
              <div>–End-To-End 보안 및 유선/무선 네트워크 보안성을 위한 Layer2 보안(MACsec), Layer3 보안(IPSec) 하드웨어 구현 및 고속화 기법 연구</div>
            </div>
          </div>
        <h4
          className='mt-20 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            color: '#043A6F',
          }}
          >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            Hardware 기반 딥러닝 가속기 연구
          </div>
          <div style={{ fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: '-0.05%', marginTop: '4px' }}>
            (Research on Hardware Based Deep Learning Accelator)
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
              <div>–Real-Time Object Detection Model(Yolo v2, Yolo v4 등)에 대한 RTL(Register Transfer Level) 기반 딥러닝 추론 가속회로</div>
              <div>Verilog 구현 및 FPGA/ASIC 개발</div>
              <div>–딥러닝 가속기 입력 데이터(Image Data, Weight Data)에 대한 데이터 전처리(Fixed Point, Dynamic Fixed Point, Round up 기법,</div>
              <div>Floating Point 연산기 최적화 등) 및 객체 탐지 결과(Bounding box, Class) 데이터 후처리 기법 연구</div>
              <div>–BNN(Binarized Neural Network) 기반 추론 연산 가속 회로 Verilog 구현 및 호스트 프로세서와의 연동을 통한 System On Chip 개발</div>
              <div>–외부 메모리 저장 파라미터에 대한 DRAM 타겟 공격(Bit Flip Attack, Code Corruption Attack, EM Attack 등) 방어 기법</div>
              <div>(데이터 무결성 및 기밀성 보장 구조) 연구</div>
            </div>
          </div>
          <div
            className="mt-4 mx-auto text-center"
            style={{
                fontFamily: 'Pretendard',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#000000'
            }}
            >
            [딥러닝 가속기 설계 구조]
            </div>
            <div className="mt-4 mx-auto" style={{ width: '971px' }}>
              <Image
                src="/DeepLearning_Accelator.svg"
                alt="DeepLearning Accelator"
                width="971"
                height="447"
                className="max-w-full h-auto"
              />
          </div>    
          <div
            className="mt-16 mx-auto text-center"
            style={{
                fontFamily: 'Pretendard',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#000000'
            }}
            >
            [내부 메모리 스케줄링 기법 최적화 연구]
            </div>
            <div className="mt-4 mx-auto" style={{ width: '985px' }}>
              <Image
                src="/memory_scheduling.svg"
                alt="Memory Scheduling"
                width="985"
                height="519"
                className="max-w-full h-auto"
              />
          </div>
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
              <div>-딥러닝 가속기에 대한 물리채널 공격(Power Analysis, Timing Attack, Glitch Attack 등) 방어 기법 연구</div>
              <div>–딥러닝 가속기 메모리 스케줄링 최적화(Line based Reuse, Hybrid Reuse) 기법 연구</div>
              <div>-Binarized Layer 연산기 최적화 기법(Logic Gate 기반 Binarized Convolution Method, Bit Shift 기반 Batch Normalization 등 연구</div>
            </div>
          </div>                             
    </div>
  );
} 