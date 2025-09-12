// app/about/_components/ProfessorBios/Bio_Kim.tsx

import Image from "next/image";

export default function Bio_Kim() {
  return (
    // 1. ProfessorsContext에서 가져온 컨테이너 스타일 적용
    <div className="p-10 rounded-xl shadow-lg">
      {/* 2. ProfessorsContext에서 가져온 제목(h2) 추가 */}
      <h2 className="px-3 py-3 text-4xl font-bold text-gray-800 flex items-center gap-2">
        김호원교수님
      </h2>

      {/* 3. 기존 Bio_Kim 콘텐츠 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-gray-100 shadow rounded-xl p-6 mt-4">
        {/* 텍스트 영역 */}
        <div className="flex-grow text-gray-800">
          <br></br>
          <p className="text-xl">Hello!</p>
          <p className="leading-relaxed pb-6">
            I’m a professor at the department of computer engineering Chief of Energy IoT (Internet of Things) ITRC(IT Research Center) and Chief of ISEC(Information Security Education Center), PNU(Pusan National University).
            <br />
            Before I joined PNU, I had worked at ETRI(Electronics and Telecommunications Research Institute) as a team leader for 10 years since December 1998.
            <br />
            I had visited Chair for Communication Security Group(COSY) in Ruhr-University Bochum, Germany, as a post doctorial, from July 20030 to June 2004.
            <br />
            I got Ph.D. degree from POSTECH(Pohang University of Science and Technology) and bachelor’s degree from the KyungPook National University.
          </p>
        </div>
        {/* 이미지 영역 */}
        <div className="flex-shrink-0 w-[300px] h-[300px] sm:w-[280px] sm:h-[280px] relative">
          <Image 
            src="/김호원교수님 로고.png"
            alt="김호원 교수님 로고"
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
              <span>howonkim@pusan.ac.kr</span>
            </div>
            <div className="flex">
              <strong className="w-24 flex-shrink-0">홈페이지</strong>
              <a href="http://infosec.pusan.ac.kr" className="text-blue-600 hover:underline">
                http://infosec.pusan.ac.kr
              </a>
            </div>
            <div className="flex">
              <strong className="w-24 flex-shrink-0">전공분야</strong>
              <span>정보보호/사물지능</span>
            </div>
            <div className="flex">
              <strong className="w-24 flex-shrink-0">연락처</strong>
              <span>051) 510-1010</span>
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
          <li>한국정보보호학회 수석부회장, 2025.01 ~</li>
          <li>산업부 자율제조 AI 기획위원 2024. ~</li>
          <li>한국암호포럼 의장 2024. ~</li>
          <li>디지털 금융포럼 공동대표 2021. ~</li>
          <li>조달청 대형 소프트웨어사업 전문평가위원, 2020.08 ~ 2021.04</li>
          <li>부산시 정보화 기본계획 수립 자문위원, 2020.07 ~</li>
          <li>부산 에코델타 스마트시티 국가시범도시 총괄계획단 위원, 2020.04 ~ 2020.12</li>
          <li>부산시교육청 사물인터넷 교재개발 집필진, 2019.04 ~ 2019.12</li>
          <li>부산광역시 정보화위원회 위원, 2018.12 ~ 2020.11</li>
          <li>경찰청 디지털포렌식 자문위원, 2018.09 ~ 2020.08</li>
          <li>BNK 백년대계위원회 위원, 2018.01 ~ 2018.12</li>
          <li>한국정보처리학회 이사, 2015.01 ~ 2016.12</li>
          <li>한국멀티미디어학회 이사, 2015.01 ~ 2016.12</li>
        </ul>
      </div>

      {/* 아카데미수상 섹션 */}
      <div className="text-gray-800 mt-8">
        <h3 className="px-3 py-3 text-3xl font-semibold text-gray-800 flex items-center gap-2">
        <Image src="/logo.png" alt="로고" width={30} height={30} className="flex-shrink-0"/>
        Academic Activities
        </h3>
        <ul className="list-disc list-inside space-y-2 p-8 pt-4 text-gray-700">
          <li>WISA 2019 Organizing Committee Member, 8/21~24, Jeju, Korea, 2019</li>
          <li>ICUFN 2019 Steering Committee Member, 7/2~5, Zagreb, Croatia, 2019</li>
          <li>ICISC 2017 Program Chair, 11/30 ~ 12/2, Seoul, Korea, 2017</li>
          <li>ICT Convergence Korea 2017 Steering Committee, 3/22~23, Seoul, Korea, 2017</li>
          <li>PlatCon-17 Local Arrangement Chair, 2/13~15, Busan, Korea, 2017</li>
          <li>WISA 2016 Organization Chair, 8/22~24, Jeju, Korea, 2016</li>
          <li>ICISC 2014 Program Committee Member, 12/3~5, Seoul, Korea, 2014</li>
          <li>PROOFS(Security Proofs for Embedded Systems) 2014 General Chair, 9/27, Busan, Korea, 2014</li>
          <li>CHES 2014 Program Committee Member, 9/23~26, Busan, Korea, 2014</li>
          <li>WISA 2014 Program Committee Member, 8/25~27, Jeju, Korea, 2014</li>
          <li>ICISC 2011 Program Chair, 11/30 ~ 12/2, Seoul, Korea, 2011</li>
          <li>ICTC 2011 Program Committee Member, 9/28~30, Seoul, Korea, 2011</li>
          <li>WISA 2011 Program Committee Member, 8/22~24, Jeju, Korea, 2011</li>
          <li>WISA 2010 Program Committee Member, 8/24~26, Jeju, Korea, 2010</li>
          <li>WISA 2009 Program Committee Member, 8/25~27, Busan, Korea, 2009</li>
        </ul>
      </div>
    </div>
  );
}