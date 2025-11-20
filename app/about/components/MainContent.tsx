import Image from 'next/image';

const researchData = [
  {
    id: '01',
    title: 'AX융합 사이버보안 기술',
    topics: ['AI 자가진화, 생성형 AI, AI 해킹, 적대적 공격'],
  },
  {
    id: '02',
    title: '산업시설 사이버보안',
    topics: ['스마트 공장 사이버보안, 에너지 시설 사이버보안, 원자력 사이버보안'],
  },
  {
    id: '03',
    title: '모빌리티 보안',
    topics: ['드론 사이버보안, 자동차 사이버보안, 로봇 사이버보안'],
  },
  {
    id: '04',
    title: '블록체인 응용기술',
    topics: ['블록체인 응용기술'],
  },
  {
    id: '05',
    title: '해킹/방어 및 리버싱 기술',
    topics: ['역공학, 포렌식 기술'],
  },
];

type ResearchCardProps = {
  id: string;
  title: string;
  topics: string[];
};

function ResearchCard({ id, title, topics }: ResearchCardProps) {
  return (
    <div className="bg-[#1E293B] rounded-4xl p-8 text-white">
      <span className="text-s font-semibold text-orange-200 inline-block pr-5 b-4">
        {id}  
      </span>
      <strong className="text-2xl font-bold">
         {title}
      </strong>
      <ul className="space-y-3">
        {topics.map((topic, index) => (
          <li key={index} className="text-gray-300 text-s pt-6">
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">연구실 소개</h2>
            <p className="text-gray-600">
                <br></br><strong className="text-xl">01&nbsp;&nbsp;&nbsp;연구실</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;부산대학교 IT관
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
                <br></br><strong className="text-xl">02&nbsp;&nbsp;&nbsp;연구 주제</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AX융합 사이버보안 주제로 진행되는 다양한 연구
            </p>
            {/* 그리드 블록 */}
        <div className="flex flex-col gap-8 w-full">
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
                <p>부산대학교 IT관 714호</p>
            </div>
            </div>
        </div>
</div>
    </div>
  );
}