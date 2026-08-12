import Image from 'next/image';
import marineAxPicture1 from '../../TopicsPicture/marineax_picture1.png';
import marineAxPicture2 from '../../TopicsPicture/marineax_picture2.png';
import marineAxPicture3 from '../../TopicsPicture/marineax_picture3.png';

export default function MarineAxDetail() {
  return (
    <div className="p-6 sm:p-8 md:p-12 font-['Pretendard']">
      <h3 className="mx-auto text-center font-semibold break-keep text-2xl sm:text-3xl md:text-4xl leading-snug text-[#02162E] font-pretendard">
        해양AX융합기술
      </h3>
      <p className="mt-2 text-center text-base sm:text-lg text-black font-pretendard">
        Marine AX Convergence Technology
      </p>

      <section className="mt-12 max-w-5xl mx-auto">
        <h4 className="text-xl sm:text-2xl font-bold text-[#043A6F] font-pretendard">
          생성형 AI 기반 해양 객체 탐지 기술
        </h4>
        <p className="mt-1 text-base sm:text-lg text-black font-pretendard">
          (Generative AI-based Marine Object Detection)
        </p>
        <div className="mt-4 max-w-5xl mx-auto">
          <Image
            src={marineAxPicture1}
            alt="생성형 AI 기반 해양 객체 탐지 및 데이터 증강 기술 개념도"
            className="w-full h-auto rounded-md"
            priority
          />
        </div>
        <div className="mt-6 text-sm sm:text-base leading-relaxed text-[#282828] font-pretendard">
          <div>■ 해양 객체 10종을 대상으로 한 AI 탐지 모델 설계</div>
          <div>– 불법 어망·어구, 불법 어선, 드론, 미식별 함정, 침투조, 조난자, 해양쓰레기 등 해양 객체 탐지</div>
          <div>– 기하 변환, 색상·조명 조절, 날씨 효과, 노이즈·왜곡, 합성 기법을 활용한 데이터 증강</div>
          <div>– 멀티모달 융복합을 통한 해양 객체 탐지 정확도 및 환경 강건성 향상</div>
        </div>
      </section>

      <section className="mt-16 max-w-5xl mx-auto">
        <h4 className="text-xl sm:text-2xl font-bold text-[#043A6F] font-pretendard">
          해양 생태계 첨단 온디바이스 AX
        </h4>
        <p className="mt-1 text-base sm:text-lg text-black font-pretendard">
          (Advanced On-device AX for Marine Ecosystems)
        </p>
        <div className="mt-4 max-w-5xl mx-auto">
          <Image
            src={marineAxPicture2}
            alt="해양 생태계 첨단 온디바이스 AX 전환 개념도"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="mt-6 text-sm sm:text-base leading-relaxed text-[#282828] font-pretendard">
          <div>■ 수중 드론과 온디바이스 AI를 활용한 상시 해양 생태계 감시</div>
          <div>– 수중 영상에서 어종을 실시간으로 인식하고 개체 수, 행동 패턴, 생체량 및 이상 징후 분석</div>
          <div>– 데이터 수집 이후 분석하는 방식에서 현장 실시간 분석·판단 체계로 전환</div>
          <div>– 생태계 위험 예측, 신속한 이상 탐지, 자동 경보 및 대응 체계 구축</div>
        </div>
      </section>

      <section className="mt-16 mb-16 max-w-5xl mx-auto">
        <h4 className="text-xl sm:text-2xl font-bold text-[#043A6F] font-pretendard">
          MarineSafetyMLOps 기반 대양 어종 AI 운영체계
        </h4>
        <p className="mt-1 text-base sm:text-lg text-black font-pretendard">
          (On-device AI Lifecycle Management for Marine Species)
        </p>
        <div className="mt-4 max-w-5xl mx-auto">
          <Image
            src={marineAxPicture3}
            alt="MarineSafetyMLOps 기반 대양 어종 온디바이스 AI 운영체계"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="mt-6 text-sm sm:text-base leading-relaxed text-[#282828] font-pretendard">
          <div>■ 해양 데이터를 수집·학습·배포·운영하는 온디바이스 AI 전 생애주기 관리</div>
          <div>– 수중 영상, 소나·음향 센서, 환경 및 항적 데이터를 표준화하여 학습 데이터 신뢰성 확보</div>
          <div>– 경량 객체 탐지와 어종 분류·추적·생체량 분석 모델을 저전력 엣지 환경에 배포</div>
          <div>– 추론 로그, 이상 행동 및 모델 성능 저하를 지속적으로 감시하고 재학습·검증과 연계</div>
          <div>– 저조도·탁도, 장시간 배터리, 방수·내염 등 실제 해역 조건을 고려한 실증 중심 운영체계 구축</div>
        </div>
      </section>
    </div>
  );
}
