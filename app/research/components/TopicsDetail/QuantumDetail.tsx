import Image from "next/image";

export default function QuantumDetail() {
  return (
    <div className='mt-8 p-6'>
      <h3
        className='mx-auto text-center font-semibold break-keep'
        style={{
          // width: '340px',
          // height: '43px',
          fontFamily: 'Pretendard',
          // fontStyle: 'semibold',
          fontWeight: 600,
          fontSize: '36px',
          lineHeight: '43px',
          color: '#02162E'
        }}
        >
          양자컴퓨팅 및 암호 해독
        </h3>
        <h4
          className='mt-8 mx-auto'
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'bold',
            color: '#043A6F'
          }}
          >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            공개키 암호 해독 양자회로 연구
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
            (Research on quantum circuits for cracking public-key cryptography)
          </div>
          </h4>
          <div
            className='mt-4 mb-8 mx-auto'
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
                <div style={{ fontWeight: 700 }}>Building Shor's Algorithm circuit for cracking RSA/ECC cryptosystem</div>
                <div>■RSA 크랙용 기초 서브회로 개발</div>
                <div>–양자 가산기</div>
                <div>–양자 모듈 가산기</div>
                <div>–양자 모듈러 곱셈</div>
                <div>–양자 모듈 지수화</div>
              </div>

              <div>
                <div>■ECC 크랙용 기초 서브 회로 개발(소수 곡선, 이진 타원 곡선)</div>
                <div>–양자 승수</div>
                <div>-양자 반전</div>
                <div>–양자점 가산</div>
              </div>

              <div>
                <div>■양자 회로 최적화(전체적인 깊이, 게이트 수, T 깊이 등 감소)</div>
                <div>■양자 회로 시뮬레이션(IBM Qiskit, Q-Crypton 등)</div>
                <div>■양자 자원 추정</div>
              </div>

              <div>
                <div style={{ fontWeight: 700 }}>Various research topics on quantum security</div>
              </div>
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
            [Quantum Circuit for Cracking RSA Cryptosystem – High-Level Overview]
            </div>
            <div className="mt-2 mx-auto" style={{ width: '975px' }}>
              <Image
                src="/quantum_circuit.svg"
                alt="Quantum Circuit"
                width="975"
                height="584"
                className="max-w-full h-auto"
              />
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
            [Example: Modular Adder Library Development on Q-Crypton Visualization (Vnote)]
            </div>
            <div className="mt-0 mx-auto" style={{ width: '860px' }}>
              <Image
                src="/Q_visualization.svg"
                alt="Visualization"
                width="860"
                height="574"
                className="max-w-full h-auto"
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
            양자 기계 학습에 관한 연구
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
            (Research on Quantum Machine Learning)
          </div>
          </h4>
          <div
            className='mt-4 mb-4 mx-auto'
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
                <div>-사이버 보안 및 암호 분석을 위한 하이브리드 양자-고전적 딥러닝 연구</div>
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
            [Hybrid Quantum-Classical Machine Operation Flow Example]
            </div>
            <div className="mt-4 mx-auto" style={{ width: '897px' }}>
              <Image
                src="/example.svg"
                alt="Example"
                width="897"
                height="561"
                className="max-w-full h-auto"
              />
          </div> 
          <div
            className="mt-12 mx-auto text-center"
            style={{
                fontFamily: 'Pretendard',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#000000'
            }}
            >
            [Example of Hybrid Quantum-Classical Machine Learning Architecture]
            </div>
            <div className="mt-2 mx-auto" style={{ width: '982px' }}>
              <Image
                src="/HybridQuantum.svg"
                alt="HybridQuantum"
                width="982"
                height="427"
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
              <div style={{ fontWeight: 700}}>양자 연합 학습에 관한 연구</div>
              <div>■양자 연합 학습 계획에 관한 연구</div>
              <div>■개발 제약, 배포 전략 및 상황과 같은 구현 과제에 대한 연구.</div>
            </div>
          </div>
          <div
            className="mt-12 mx-auto text-center"
            style={{
                fontFamily: 'Pretendard',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#000000'
            }}
            >
            [Example of Quantum Federated Learning Schemes]
            </div>
            <div className="mt-4 mb-10 mx-auto" style={{ width: '941px' }}>
              <Image
                src="/Schemes.svg"
                alt="Learning Schemes"
                width="941"
                height="489"
                className="max-w-full h-auto"
              />
          </div>
      </div>
  );
}