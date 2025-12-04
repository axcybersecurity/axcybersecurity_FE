import Image from 'next/image';
import socPicture from '../../TopicsPicture/SoC_picture.png';

export default function SocDetail() {
  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-0 pb-12 font-['Pretendard']">
      <div className="max-w-5xl mx-auto">
        {/* 메인 타이틀 */}
        <h3 className="mx-auto text-center font-semibold break-keep text-2xl sm:text-3xl md:text-4xl leading-snug text-[#02162E]">
          모빌리티 보안
        </h3>

        {/* --- AI 기반 드론 탐지 연구 --- */}
        <section className="mt-10">
        {/* 그림 영역 */}
        <div className="mt-4 max-w-4xl mx-auto">
          <Image
            src={socPicture}
            alt="GraphRAG 기반 사이버보안 LLM 시스템 개념도"
            width={892}
            height={448}
            className="w-full h-auto rounded-md"
          />
        </div>

          <h4 className="mt-[3vh] mx-auto text-xl sm:text-2xl font-bold text-[#043A6F] break-keep">
            AI 기반 드론 탐지 연구
          </h4>
          <p className="mt-1 mx-auto text-base sm:text-lg text-black break-keep">
            (Research on AI-based Drone Detection)
          </p>

          <div className="mt-6 mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-[#282828] space-y-1">
            <p>■ AI 기반 드론 탐지 연구(Research on AI-based Drone Detection)</p>
            <p>– 장거리 드론에 대한 시계열 데이터 구축과 LSTM 및 GRU 조기 탐지 알고리즘 개발 연구</p>
            <p>– Unity3D 기반 가상 환경에서의 드론 시뮬레이션을 통한 합성 데이터 생성 및 도메인 적응 기법 연구</p>
            <p>– 카메라, 레이더, 음향 센서 데이터의 멀티모달 트랜스포머 네트워크 기반 통합 분석</p>
          </div>
        </section>

        {/* --- 안티드론 및 드론 제어권 탈취 연구 --- */}
        <section className="mt-16">
          <h4 className="mx-auto text-xl sm:text-2xl font-bold text-[#043A6F] break-keep">
            안티드론 및 드론 제어권 탈취 연구
          </h4>
          <p className="mt-1 mx-auto text-base sm:text-lg text-black break-keep">
            (Research on Anti-drone Techniques and Drone Control Hijacking)
          </p>

          <div className="mt-6 mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-[#282828] space-y-1">
            <p>■ 안티드론 및 드론 제어권 탈취 연구(Research on Anti-drone Techniques and Drone Control Hijacking)</p>
            <p>– 802.11 프로토콜 취약점을 이용한 GCS Deauthentication 공격 연구</p>
            <p>– SDR 활용 MAVLink 프로토콜 기반 드론 조종 패킷의 도청 및 재전송 공격 연구</p>
            <p>– 드론 펌웨어에 대한 Reverse Engineering 및 ROP 기반 코드 실행 취약점 연구</p>
            <p>– 드론 무선통신 간의 암호 취약점에 대한 분석 및 통신 안전성에 대한 연구</p>
            <p>– 물리적 파괴 방식의 한계를 극복하는 소프트웨어 기반 드론 방어 기술 연구</p>
          </div>
        </section>
      </div>
    </div>
  );
}
