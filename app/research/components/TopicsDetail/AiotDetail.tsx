import Image from 'next/image';
import axPicture from '../../TopicsPicture/ax_picture.png';
import is2dImage from '../../TopicsPicture/ax_picture2.png';

export default function AiotDetail() {
  return (
    <div className="p-6 sm:p-8 md:p-12 font-['Pretendard']">
      {/* 메인 타이틀 */}
      <h3
        className="mx-auto text-center font-semibold break-keep text-2xl sm:text-3xl md:text-4xl leading-snug text-[#02162E]"
        style={{ fontFamily: 'Pretendard' }}
      >
        AX융합 사이버보안 기술
      </h3>

      {/* ===== 섹션 1: GraphRAG 기반 사이버보안 LLM 시스템 ===== */}
      <section className="mt-8 max-w-5xl mx-auto">
        {/* 한글 제목 */}
        <h4
          className="text-xl sm:text-2xl font-bold text-[#043A6F]"
          style={{ fontFamily: 'Pretendard' }}
        >
          GraphRAG 기반 사이버보안 LLM 시스템
        </h4>

        {/* 영어 부제 */}
        <p
          className="mt-1 text-base sm:text-lg text-black"
          style={{ fontFamily: 'Pretendard' }}
        >
          (GraphRAG-based Cybersecurity LLM System)
        </p>

        {/* 그림 영역 */}
        <div className="mt-4 max-w-4xl mx-auto">
          <Image
            src={axPicture}
            alt="GraphRAG 기반 사이버보안 LLM 시스템 개념도"
            width={892}
            height={448}
            className="w-full h-auto rounded-md"
          />
        </div>
        {/* 본문 */}
        <div
          className="mt-[3vh] space-y-4 text-sm sm:text-base leading-relaxed text-[#282828]"
          style={{ fontFamily: 'Pretendard' }}
        >
          <div>
            <div>■ GraphRAG 기반 사이버보안 LLM 시스템</div>
            <div>– 그래프 DB 구축 및 매니지먼트 개념도 설계</div>
            <div>– GraphRAG/LLM 기반 보안 방어 모델 연구</div>
            <div>
              – CTI 지식 기반 보안 위협 데이터를 그래프 DB로 통합하고, 시스템의 각 계층과의 연결에 대한
              아키텍쳐 및 파이프라인 설계
            </div>
          </div>
        </div>
      </section>

      {/* ===== 섹션 2: IS²D(Intelligent Self-evolving Security Dome) ===== */}
      <section className="mt-16 max-w-5xl mx-auto mb-16">
        {/* 한글 제목 */}
        <h4
          className="text-xl sm:text-2xl font-bold text-[#043A6F]"
          style={{ fontFamily: 'Pretendard' }}
        >
          IS²D(Intelligent Self-evolving Security Dome) 보안 메커니즘
        </h4>

        {/* 영어 부제 */}
        <p
          className="mt-1 text-base sm:text-lg text-black"
          style={{ fontFamily: 'Pretendard' }}
        >
          (IS²D – Intelligent Self-evolving Security Dome Mechanism)
        </p>

         {/* 그림 영역 */}
        <div className="mt-4 max-w-4xl mx-auto">
          <Image
            src={is2dImage}
            alt="IS²D(Intelligent Self-evolving Security Dome) 보안 메커니즘 개념도"
            width={892}
            height={448}
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* 본문 */}
        <div
          className="mt-[3vh] space-y-4 text-sm sm:text-base leading-relaxed text-[#282828]"
          style={{ fontFamily: 'Pretendard' }}
        >
          <div>
            <div>■ IS²D(Intelligent Self-evolving Security Dome) 보안 메커니즘</div>
            <div>– 생성형 AI 기반 적대적 공격 및 방어, 자가진화 구조 기반 사이버 아이언돔 개발</div>
            <div>
              – LLM 추론 엔진과 다양한 보안 도구를 표준 프로토콜로 통합하는 MCP 기반 에이전트 아키텍처 설계
            </div>
            <div>
              – IS²D 플랫폼의 보안 지식 기반을 지속적으로 확장하고 RAG 시스템의 정확도를 향상하는 자가진화
              파이프라인 설계
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
