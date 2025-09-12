import Image from 'next/image';

export default function AiotDetail() {
    return (
      <div className="mt-8 p-6">
        <h3 
          className="mx-auto text-center font-semibold break-keep"
          style={{
            // width: '281px',
            // height: '43px',
            fontFamily: 'Pretendard',
            // fontStyle: 'semibold',
            fontWeight: 600,
            fontSize: '36px',
            lineHeight: '43px',
            color: '#02162E'
          }}
        >
          AI보안 및 산업용 AI
        </h3>
        
        <h4 
          className="mt-8 mx-auto"
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'bold',
            color: '#043A6F'
          }}
        >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            적대적 인공지능 공격 및 방어 기술 연구
          </div>
        </h4>
        <h4 
          className="mt-0 mx-auto"
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            color: '#000000'
          }}
        >
          <div style={{ fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%', marginTop: '4px' }}>
            (Research on adversarial attack & defense for AI)
          </div>
        </h4>
        
        <div 
          className="mt-6 mx-auto"
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
          <div className="space-y-4">
            <div>
              <div>적대적 인공지능 공격 및 방어 기술 연구(Research on adversarial attack & defense for AI)</div>
              <div>■적대적 공격/방어 기술 연구–적대적 공격 대상 영상분석 딥러닝 모델 DB 구축</div>
              <div>–최신 적대적 공격 기술 및 방어 기술 분석–공격/방어 모델 표준 인터페이스 구현</div>
            </div>
            
            <div>
              <div>■그래픽 엔진 기반 3D 공격 및 방어 시뮬레이션 시스템 구축 연구</div>
              <div>–딥러닝 프레임워크와 그래픽 엔진 연동을 통한 딥러닝 모델 학습 방안 연구</div>
              <div>–그래픽 엔진(Unreal Engine), 오픈소스 시뮬레이터(CARLA)등을 활용한 3D 시뮬레이션 구축</div>
              <div>–3D 환경에서의 적대적 공격 및 방어 가시화 기술 연구</div>
            </div>
            
            <div>
              <div>■3D 축소모형 제작을 통한 물리적 공격/방어 기술 연구</div>
              <div>–3차원 축소모형 제작을 통한 적대적 물리공격 및 방어 기술 연구</div>
              <div>–실제 환경에서의 적대적 공격/방어 실험을 위한 테스트베드 구축</div>
            </div>
            
            <div>
              <div>■Top-tier AI conference 논문 게재 지원</div>
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
            [CVPR 2022 Main Conference 게재 논문 포스터]
            </div>
            <div className="mt-8 mx-auto" style={{ width: '892px' }}>
              <Image
                src="/image47.svg"
                alt="Research poster"
                width="892"
                height="448"
                className="max-w-full h-auto"
              />
            </div>
            <div>
              <div>가상 데이터 기반 객체 인식·탐지·추적 기술 연구</div>
              <div>(Research on synthetic data-based object recognition, detection and tracking technology)</div>
            </div>
        <h4 
          className="mt-20 mx-auto mb-0"
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'bold',
            color: '#043A6F'
          }}
        >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            가상 데이터 기반 객체 인식·탐지·추적 기술 연구
          </div>
        </h4>
        <h4 
          className="mt-0 mx-auto mb-8"
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            color: '#000000'
          }}
        >
          <div style={{ fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%', marginTop: '4px' }}>
            (Research on synthetic data-based object recognition, detection and tracking technology)
          </div>
        </h4>
        <div 
          className="mt-6 mx-auto"
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
          <div className='space-y-4'>
            <div>
              <div>■인공지능 기반 객체 인식·탐지·추적 기술 연구–가상 데이터 기반의 객체 인식·탐지·추적 기술 연구</div>
              <div>–최신 객체 인식·탐지·추적 기술 분석 및 구현</div>
              <div>–그래픽 엔진(Unreal Engine, Unity)과 오픈소스 시뮬레이터(CARLA, Unity)를 통한 자율주행 시스템 연구</div>
            </div>
            
            <div>
              <div>■그래픽 엔진(Unreal Engine) 기반 객체 인식·탐지·추적 프레임워크 구축 연구</div>
              <div>–그래픽엔진(Unreal Engine) 기반 가상 데이터를 활용한 객체 인식·탐지·추적 프레임워크 구현</div>
              <div>–오픈소스 시뮬레이터(CARLA)를 통한 자율주행 특화 객체 인식·탐지·추적 기술 개발</div>
              <div>–객체 인식·탐지·추적 모델 검증을 위한 실제 환경에서의 3D 축소 테스트 베드 구축</div>
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
            [가상 데이터 기반 객체 인식/탐지/추적 테스트 프로세스]
            </div>
            {/* Step 1/2/3 섹션 */}
<div className="mx-auto mt-6" style={{ width: '958px' }}>
  <div className="grid grid-cols-3 gap-10 items-start justify-items-center">
    {/* Step 1 */}
    <div>
      <div className="mb-3 min-h-[96px]">
        <div className="mb-6"style={{ fontFamily: 'Pretendard', fontWeight: 700, fontSize: '18px', color: '#000' }}>
          Step 1. 시뮬레이션 환경
        </div>
        <div style={{ fontFamily: 'Pretendard', fontWeight: 400, fontSize: '14px', color: '#000', lineHeight: '150%' }}>
          Unity, Unreal 그래픽 엔진 기반<br />
          <span className='font-bold'>실제 환경과 유사한 자율주행 테스트 환경 구축</span>
        </div>
      </div>
      <div className="rounded flex items-center justify-center bg-white"
           style={{ width: '325px', height: '340px' }}>
        <img
          src="/참고2.1.svg"
          alt="Step 1"
          width={325}
          height={228}
          className='object-contain'
        />
      </div>
    </div>

    {/* Step 2 */}
    <div>
      <div className="mb-3 min-h-[96px]">
        <div className="mb-6" style={{ fontFamily: 'Pretendard', fontWeight: 700, fontSize: '18px', color: '#000' }}>
          Step 2. 영상처리 딥러닝 모델
        </div>
        <div style={{ fontFamily: 'Pretendard', fontWeight: 400, fontSize: '14px', color: '#000', lineHeight: '150%' }}>
          <span className='font-bold'>자율주행 핵심 영상처리 딥러닝</span><br />
          분류 모델, 객체 탐지모델, 객체 추적 <span className='font-bold'>모델 구현</span>
        </div>
      </div>
      <div className="rounded flex items-center justify-center bg-white mx-auto"
           style={{ width: '218px', height: '340px' }}>
        <img
          src="/참고2.2.svg"
          alt="Step 2"
          width={218}
          height={340}
          className='object-contain'
        />
      </div>
    </div>

    {/* Step 3 */}
    <div>
      <div className="mb-3 min-h-[96px]">
        <div className="mb-6" style={{ fontFamily: 'Pretendard', fontWeight: 700, fontSize: '18px', color: '#000' }}>
          Step 3. 테스트베드
        </div>
        <div style={{ fontFamily: 'Pretendard', fontWeight: 400, fontSize: '14px', color: '#000', lineHeight: '150%' }}>
          기술 시연 및 성능평가 시험 환경<br />
          <span className='font-bold'>객체 인식 기술 시연 테스트베드 구축</span>
        </div>
      </div>
      <div className="rounded flex items-center justify-center bg-white"
           style={{ width: '309px', height: '340px' }}>
        <img
          src="/참고2.3.svg"
          alt="Step 3"
          width={309}
          height={311}
          className='object-contain'
        />
      </div>
    </div>
  </div>
</div>            
        <h4 
          className="mt-20 mx-auto mb-0"
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'bold',
            color: '#043A6F'
          }}
        >
          <div style={{ fontWeight: 700, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
            가상 데이터 기반 객체 인식·탐지·추적 기술 연구 딥러닝 기반의 유체 운동 예측 기술 연구
          </div>
        </h4>
        <h4 
          className="mt-0 mx-auto mb-8"
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            color: '#000000'
          }}
        >
          <div style={{ fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%', marginTop: '4px' }}>
            (Research on Fluid Motion Prediction Technology based on Deep Learning)
          </div>
        </h4>
        <div 
          className="mt-6 mx-auto"
          style={{
            width: '958px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            color: '#282828'
          }}
        ></div>
        <div className='space-y-4'>
          <div>
            <div>■인공지능 기반 2D/3D 유체 운동 예측 기술 연구</div>
            <div>–CFD 해석 프로그램을 사용한 데이터수집 및 딥러닝 모델 DB 구축</div>
            <div>–다양한 경계조건에서 Laminar Flow와 Turbulent Flow에 대한 Steady-State Prediction 연구</div>
            <div>–딥러닝을 이용한 Time-Dependent 유동 해석 예측 연구</div>
          </div>
          <div>
            <div>■유체를 포함한 모든 물리 모사 기술 연구</div>
            <div>–물리적 현상을 모사하는 딥러닝 모델 연구 (e.g. PINN(Physics Informed Neural Network))</div>
            <div>–여러 지배방정식을 학습/추론 가능하도록 Methodology/Architecture 연구</div>
          </div>
          <div>
            <div>■2D/3D 유체 유동 가시화 연구</div>
            <div>–그래픽 엔진(Unreal Engine, Unity)을 활용한 유동 가시화 방안 연구</div>
            <div>–딥러닝 프레임워크와 그래픽 엔진간 실시간 연동을 위한 데이터 파이프라인 구축</div>
          </div>
        </div>
            <div className="mt-8 mb-16 mx-auto" style={{ width: '790px' }}>
              <Image
                src="/3참고.svg"
                alt="딥러닝 기반 유동 예측 모델 개념도"
                width="790"
                height="458"
                className="max-w-full h-auto"
              />
            </div>
        </div>
          </div>
        </div>
      </div>
    );
  } 