import Image from 'next/image';
import cyperPicture1 from '../../TopicsPicture/cyper_picture1.png';
import cyperPicture2 from '../../TopicsPicture/cyper_picture2.png';

export default function QuantumDetail() {
  return (
    <div className="p-6 sm:p-8 md:p-12 font-['Pretendard']">
        {/* 메인 타이틀 */}
      <h3
        className="mx-auto text-center font-semibold break-keep text-2xl sm:text-3xl md:text-4xl leading-snug text-[#02162E]"
        style={{ fontFamily: 'Pretendard' }}
      >
        보안 통신 프로토콜 설계
      </h3>

        {/* --- 보안 통신 프로토콜 설계 --- */}
        <section className="mt-12">
           {/* 그림 영역 */}
        <div className="mt-4 max-w-4xl mx-auto">
          <Image
            src={cyperPicture1}
            alt="GraphRAG 기반 사이버보안 LLM 시스템 개념도"
            width={892}
            height={448}
            className="w-full h-auto rounded-md"
          />
        </div>

         {/* 그림 영역 */}
         <div className="mt-4 max-w-4xl mx-auto">
          <Image
            src={cyperPicture2}
            alt="GraphRAG 기반 사이버보안 LLM 시스템 개념도"
            width={892}
            height={448}
            className="w-full h-auto rounded-md"
          />
        </div>

          <h3 className="text-2xl font-bold text-[#043A6F] break-keep">
            보안 통신 프로토콜 설계
          </h3>
          <p className="text-xl text-black mt-1 break-keep">
            (Design of Secure Communication Protocols)
          </p>

          <div className="mt-6 text-base text-[#282828] leading-relaxed space-y-3">
            <p className="font-semibold">
              ■ 보안 통신 프로토콜 설계
            </p>
            <ul className="list-disc list-inside pl-2 space-y-2">
              <li>
                TLS(Transport Layer Security)의 경량화를 위한 신규 스킴 개발
              </li>
              <li>
                TLS 1.3 대비 동일한 보안성을 유지하며 핸드셰이크 크기 약 80% 축소
              </li>
              <li>
                Nonblocking I/O, 송수신 버퍼 풀링, 멀티 클라이언트 동시 처리 구현을 통한 라이브러리 개발
              </li>
            </ul>
          </div>
        </section>
      </div>
  );
}
