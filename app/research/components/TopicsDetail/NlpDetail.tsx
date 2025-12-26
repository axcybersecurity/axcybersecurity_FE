import Image from 'next/image';
import nlpPicture from '../../TopicsPicture/nlp_picture.png';

export default function NlpDetail() {
  return (
    <div className="p-6 sm:p-8 md:p-12 font-['Pretendard']">
      {/* 메인 타이틀 */}
      <h3
        className="mx-auto text-center font-semibold break-keep text-2xl sm:text-3xl md:text-4xl leading-snug text-[#02162E]"
        style={{ fontFamily: 'Pretendard' }}
      >
        산업시설 사이버보안
      </h3>

      {/* 산업 시설 사이버 보안 기술 연구 */}
      <section className="mt-8 max-w-5xl mx-auto">
        {/* 그림 영역 */}
        <div className="mt-4 max-w-4xl mx-auto">
          <Image
            src={nlpPicture}
            alt="GraphRAG 기반 사이버보안 LLM 시스템 개념도"
            width={892}
            height={448}
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* 한 줄 띄운 후 섹션 제목 */}
        <h4
          className="mt-[4vh] text-xl sm:text-2xl font-bold text-[#043A6F]"
          style={{ fontFamily: 'Pretendard' }}
        >
          산업시설 사이버 보안 기술 연구
        </h4>

        <p
          className="mt-1 text-base sm:text-lg text-black"
          style={{ fontFamily: 'Pretendard' }}
        >
          (Cybersecurity Research for Industrial Facilities such as Nuclear Power Plants, Reactors, and Others)
        </p>

        <div
          className="mt-6 text-sm sm:text-base leading-relaxed text-[#282828]"
          style={{ fontFamily: 'Pretendard' }}
        >
          <div className="space-y-4">
            <div>■ 원자력발전소, 원자로, 기타 산업 시설 등 산업시설에 대한 사이버 보안 기술 연구</div>
            <div>– 산업 시설을 목적으로 하는 공격 식별 및 평가 검증</div>
            <div>– 산업 시설에 대한 취약점 분석 및 취약점을 통한 모의 해킹 연구</div>
            <div>– 산업 시설 보안 기능 개발</div>
            <div>– 산업 시설 리스트 분석</div>
            <div>– 산업 시설 공격 기법의 고도화를 위한 보안 기술 연구 및 제품 개발</div>
            <div>– 고도화된 산업 시설 공격 예방을 위한 보안 가이드라인 연구</div>
          </div>
        </div>
      </section>
    </div>
  );
}
