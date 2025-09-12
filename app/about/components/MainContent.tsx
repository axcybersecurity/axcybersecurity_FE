import Image from 'next/image';

const researchData = [
  {
    id: '01',
    title: '지능형 IoT 인공지능',
    topics: ['인공지능 기법 기반 지능형 사물인터넷 기술 연구', '딥러닝 기반 에너지 분석 및 에너지 사용량 예측 기술 연구', '머신러닝 기반 행동 분석, 상향 분석 및 예측 기술 연구', '통계 및 추론 기반 사물인터넷 데이터 분석 기술 연구', '지능형 사물인터넷용 빅데이터 플랫폼 구축 및 연구'],
  },
  {
    id: '02',
    title: '정보보호 IoT/HW/SW',
    topics: ['사물인터넷 경량 암호 기술 연구', '차세대 양자화 암호 기술 연구', '암호 알고리즘 최적화 연구', '사물인터넷 플랫폼 보안 기술 연구', '사물인터넷 보안칩 기술 연구'],
  },
  {
    id: '03',
    title: '블록체인',
    topics: ['BFT 알고리즘 최적화 연구', '완전 분산된 원장 트랜잭션 연구', '가상화폐 프라이버시 보호 기법 연구', '리소스 최적화된 블록체인 채굴 기법 연구', '블록체인 트랜잭션 기밀성 보장기법 연구'],
  },
  {
    id: '04',
    title: '디지털트윈',
    topics: ['인공지능 기법 기반 디지털트윈 구현 기술 연구', '에이전트 기반 모델링 및 시뮬레이션 기술 연구', '딥러닝 기반 건전성 예측 관리 기술 연구', '사물인터넷을 활용한 플랜트 제어 시뮬레이터 연구'],
  },
  {
    id: '05',
    title: '보안칩',
    topics: ['하드웨어 암호 모듈 개별 연구', '암호 모듈 검증 및 테스트에 관한 연구', 'IoT 환경에서 최적화된 경량 암호 소프트웨어 및 TLS', 'DTLS 보안 프로토콜 연동 하드웨어칩 개발연구', 'IoT 디바이스용 암호에 대한 최적화 구현 연구'],
  },
  {
    id: '06',
    title: '보안 플랫폼',
    topics: ['OneM2M 플랫폼 기반의 보안 기술 연구', '클라우드 기반 IoT 보안 기술 개발 및 연구', '스마트시티 플랫폼 기반의 보안 기술 연구', '이종 IoT 플랫폼 간 연동 기술 연구'],
  },
];

type ResearchCardProps = {
  id: string;
  title: string;
  topics: string[];
};

function ResearchCard({ id, title, topics }: ResearchCardProps) {
  return (
    <div className="bg-[#1E293B] rounded-4xl p-8 text-white aspect-square">
      <span className="text-s font-semibold text-orange-200 inline-block pr-5 pt-14 pb-4 mb-4">
        {id}  
      </span>
      <strong className="text-2xl font-bold mb-6">
         {title}
      </strong>
      <ul className="space-y-3">
        {topics.map((topic, index) => (
          <li key={index} className="text-gray-300 text-xs">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="space-y-16 mt-10">
      {/* 연구실 소개 */}
      <div className="flex flex-col items-center gap-12">
        {/* 소개글 영역 */}
        <div className="w-full space-y-4">
            <br></br>
            <h2 className="text-3xl font-bold text-gray-800 mb-10">연구실 소개</h2>
            <p className="text-gray-600">
                <br></br><strong className="text-xl">01&nbsp;&nbsp;&nbsp;연구실</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;부산대학교 제6공학관 컴퓨터공학관
            </p>
        </div>
        {/* 이미지 영역 */}
        <div className="flex gap-4">
            <div className="w-3/4">
                <Image 
                src="/3.png" 
                alt="연구실 사진 1" 
                width={800} 
                height={600}
                className="w-full h-full rounded-lg object-cover" 
                />
            </div>
            <div className="w-1/4 flex flex-col gap-4">
                <div className="flex-1">
                <Image 
                    src="/3.png" 
                    alt="연구실 사진 2" 
                    width={250} 
                    height={300} 
                    className="w-full h-full rounded-lg object-fill" 
                />
                </div>
                <div className="flex-1">
                <Image 
                    src="/3.png" 
                    alt="연구실 사진 3" 
                    width={250} 
                    height={300} 
                    className="w-full h-full rounded-lg object-fill" 
                />
                </div>
            </div>

        </div>
      </div>

      {/* 연구 과제 */}
        <div className="w-full space-y-4">
            <p className="text-gray-600 mb-8">
                <br></br><strong className="text-xl">02&nbsp;&nbsp;&nbsp;연구 과제</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정보보호 및 지능형 IoT 주제로 진행되는 다양한 연구
            </p>
            {/* 그리드 블록 */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pt-4">
          {researchData.map((item) => (
            <ResearchCard
              key={item.id}
              id={item.id}
              title={item.title}
              topics={item.topics}
            />
          ))}
        </div>
        </div>

      {/* 연구실 연혁 */}
        <div className="w-full space-y-4">
            <br></br>
            <h2 className="text-3xl font-bold text-gray-800 mb-10">연구실 연혁</h2>
          <div className="col-span-2">
            <Image src="/정지인_연구실 연혁.png" alt="연구실 사진 1" width={500} height={100} className="object-cover w-full h-full" />
          </div>
        </div>

      {/* 오시는 길 */}
        <div className="w-full space-y-4 container mx-auto px-6 py-16">
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">오시는 길</h2>
        </div>

        {/* 지도와 텍스트를 감싸는 컨테이너 */}
        <div className="mt-8 flex flex-col md:flex-row gap-8 items-center">   
            {/* 왼쪽: 지도 영역 */}
            <div className="flex-1 w-full h-80 rounded-lg overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.913118453998!2d129.08172541772404!3d35.23081559965055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356893ed44882865%3A0x7734040946809f1!2z7KCcNuqzte2Vmeq0gCAo7Lu07ZOo7YSw6rO17ZWZ6rSAKQ!5e0!3m2!1sko!2skr!4v1756780665500!5m2!1sko!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
            {/* 오른쪽: 텍스트 영역 */}
            <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                부산대학교 정보보호 및 사물지능 연구실
            </h3><br></br>
            <div className="space-y-2 text-gray-700">
                <p>(46241) 부산광역시 금정구 부산대학로 63번길 2 (장전동)</p>
                <p>부산대학교 제6공학관(컴퓨터공학관) 6512호</p>
            </div>
            </div>
        </div>
</div>
    </div>
  );
}