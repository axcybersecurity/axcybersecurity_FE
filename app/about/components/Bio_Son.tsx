import Image from "next/image";

export default function Bio_Son() {
  return (
    <div className="p-10 rounded-xl shadow-lg">
      <h2 className="px-3 py-3 text-4xl font-bold text-gray-800 flex items-center gap-2">
        손준영교수님
      </h2>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-gray-100 shadow rounded-xl p-6 mt-4">
        {/* 텍스트 영역 */}
        <div className="flex-grow text-gray-800">
          <br></br>
          <p className="text-xl">Hello!</p>
          <p className="leading-relaxed">
            I am currently an Assistant Professor in the School of Computer Science and Engineering at Pusan National University, having joined in March 2024. 
            <br></br>
            I hold a Ph.D. in Computer Science from the Graduate School of Information Security at the Korea Advanced Institute of Science and Technology (KAIST).
            <br></br>
            From August 2009 to 2012, I worked as a researcher at the National Security Research Institute (NSRI), and subsequently at RIMS from January 2013 to February 13, 2013.
            <br></br>
            From February 2013 to 2017, I served as a senior researcher and auditor at the Korea Institute of Nuclear Safety (KINS). 
            <br></br>
            Since 2017, until February 2024, I was a senior researcher and team leader in cybersecurity research at the Korea Atomic Energy Research Institute (KAERI).
          </p>
        </div>
        {/* 이미지 영역 */}
        <div className="flex-shrink-0 w-[300px] h-[300px] sm:w-[280px] sm:h-[280px] relative">
          <Image 
            src="/손준영교수님 로고.png"
            alt="손준영 교수님 로고"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* 정보 섹션 */}
      <div className="text-gray-800 mt-8">
        <h3 className="px-3 py-3 text-3xl font-semibold text-gray-800 flex items-center gap-2">
        <Image src="/logo.png" alt="로고" width={30} height={30} className="flex-shrink-0"/>
        Connect
        </h3>
        <ul className="list-none space-y-2 p-8 pt-4 text-gray-700">
          <div className="space-y-3 text-gray-700">
            <div className="flex">
              <strong className="w-24 flex-shrink-0">이메일</strong>
              <span>jyson@pusan.ac.kr</span>
            </div>
            <div className="flex">
              <strong className="w-24 flex-shrink-0">홈페이지</strong>
              <a href="http://infosec.pusan.ac.kr" className="text-blue-600 hover:underline">
                http://infosec.pusan.ac.kr
              </a>
            </div>
            <div className="flex">
              <strong className="w-24 flex-shrink-0">전공분야</strong>
              <span>지능정보기술 활용 사이버보안</span>
            </div>
            <div className="flex">
              <strong className="w-24 flex-shrink-0">연락처</strong>
              <span>051) 510-2219</span>
            </div>
            <div className="flex">
              <strong className="w-24 flex-shrink-0">연구실</strong>
              <span>이사 후 수정</span>
            </div>
          </div>
        </ul>
      </div>
      
      {/* 대외활동사항 섹션 */}
      <div className="text-gray-800 mt-8">
        <h3 className="px-3 py-3 text-3xl font-semibold text-gray-800 flex items-center gap-2">
        <Image src="/logo.png" alt="로고" width={30} height={30} className="flex-shrink-0"/>
        Career
        </h3>
        <ul className="list-disc list-inside space-y-2 p-8 pt-4 text-gray-700">
          <li>부산광역시 정보보호 지역협의체 위원, 2024.08.01~</li>
          <li>육군본부 사이버전자전 자문위원, 2022.10.01 ~</li>
          <li>육군본부 교육사 드론과학기술그룹 자문위원, 2024.02.01~</li>
          <li>공공안전통신망포럼 운영위원, 2022.03.01~2</li>
          <li>한국무인이동체연구조합 부이사장사, 2021.12.01~ 2024.07</li>
          <li>한국포렌식학회 연구이사, 2024.01.01~</li>
          <li>한국정보보호협회 이사, 2020.10.01~ 2023.04.30</li>
        </ul>
      </div>
    </div>
  );
}