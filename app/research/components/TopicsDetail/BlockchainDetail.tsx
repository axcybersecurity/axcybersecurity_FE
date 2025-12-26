import Image from "next/image";
import blockChainPicture1 from '../../TopicsPicture/blockchain_picture1.png';
import blockChainPicture2 from '../../TopicsPicture/blockchain_picture2.png';

export default function BlockchainDetail() {
  return (
    <div className="p-6 sm:p-8 md:p-12 font-['Pretendard']">
      {/* 메인 타이틀 */}
      <h3
        className="mx-auto text-center font-semibold break-keep text-2xl sm:text-3xl md:text-4xl leading-snug text-[#02162E]"
        style={{ fontFamily: 'Pretendard' }}
      >
        블록체인
      </h3>

        {/* ============= 1. 블록체인 연동 BMS ============= */}
        <section>
          {/* 그림 영역 */}
        <div className="mt-4 max-w-4xl mx-auto">
          <Image
            src={blockChainPicture1}
            alt="GraphRAG 기반 사이버보안 LLM 시스템 개념도"
            width={892}
            height={448}
            className="w-full h-auto rounded-md"
          />
        </div>

          <h4 className="mt-[4vh] text-xl sm:text-2xl font-bold text-[#043A6F] break-keep">
            블록체인 네트워크 연동 BMS(배터리 관리 시스템)
          </h4>
          <p className="mt-1 text-base sm:text-lg text-black break-keep">
            (Blockchain-integrated Battery Management System)
          </p>

          <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#282828] space-y-2">
            <p>■ 블록체인 네트워크 연동 BMS(배터리 관리 시스템)</p>
            <p>– 블록체인과 BMS 보안 플랫폼 간 상호연동을 위한 보안연관(Security Association) 기술 구현</p>
            <p>– 대용량 배터리 이력 데이터를 실시간으로 블록체인에 기록할 수 있는 안정적인 하드웨어 인터페이스 구현</p>
            <p>– BMS 보안 플랫폼과 블록체인 플랫폼 간의 데이터 교환 시, 통신 채널의 기밀성을 확보하고 상호 간의 신뢰 관계를 확립</p>
          </div>
        </section>

        {/* ============= 2. 블록체인 기반 통합 공급망 데이터 공유 ============= */}
        <section className="mt-[10vh]">
        <div className="mt-4 max-w-4xl mx-auto">
          <Image
            src={blockChainPicture2}
            alt="GraphRAG 기반 사이버보안 LLM 시스템 개념도"
            width={892}
            height={448}
            className="w-full h-auto rounded-md"
          />
        </div>

          <h4 className="mt-[4vh] text-xl sm:text-2xl font-bold text-[#043A6F] break-keep">
            블록체인 기반 통합 공급망 데이터 공유 체계 연구
          </h4>
          <p className="mt-1 text-base sm:text-lg text-black break-keep">
            (Research on Blockchain-based Integrated Supply Chain Data Sharing System)
          </p>

          <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#282828] space-y-2">
            <p>■ 블록체인 기반 통합 공급망 데이터 공유 체계 연구</p>
            <p>– 해상, 항만, 육상 데이터 수집 및 처리, 공유, 활용을 위한 블록체인 기반 기술 연구</p>
            <p>– Multi-Layer 블록체인 기술 기반 플랫폼 연동 기술 연구</p>
            <p>– 중요 및 민감 데이터 보호를 위한 공유 데이터 보안 방법론 연구</p>
            <p>– 해상·항만·육상 IoT 데이터 블록체인 오라클 기술 연구 및 개발</p>
          </div>
        </section>
      </div>
  );
}
