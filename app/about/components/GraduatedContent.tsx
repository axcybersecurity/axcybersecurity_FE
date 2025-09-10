'use client';

import React, { useState } from 'react';

// 구성원 데이터 타입을 교수님 카드와 유사하게 정의
interface Member {
  name: string;
  role: string;
  graduated: string;
  company: string;
  email: string;
  web: string;
}

const allMembersData: Member[] = [
  { name: '김해용', role: '박사졸업', graduated: '2023', company: 'LG', email: '',web: ''},
  { name: 'Harashta Tatimma Larasati', role: '박사졸업', graduated: '2022', company: '', email: 'harashta@islab.re.kr',web: ''},
  { name: 'Asep Muhamad Awaludin', role: '박사졸업', graduated: '2022', company: 'SmartM2M', email: 'asep@isalb.re.kr',web: ''},
  { name: '박태환', role: '박사졸업', graduated: '2019', company: '한국전자통신연구원(국가보안연구소)', email: 'pth5804@gmail.com',web: ''},
  { name: '최종석', role: '박사졸업', graduated: '2017', company: '카카오', email: 'jschoi@pusan.ac.kr',web: 'http://profile.artofthings.org/'},
  { name: '김지현', role: '박사졸업', graduated: '2017', company: '(주)LOCS CEO', email: 'jihyunkim@pusan.ac.kr',web: 'http://flyingdcat4.tistory.com/'},
  { name: '이동건', role: '박사졸업', graduated: '2015', company: '한국전자통신연구원(국가보안기술연구소)', email: 'guneez@gmail.com',web: 'http://www.gunee.net'},
  { name: '서화정', role: '박사졸업', graduated: '2016', company: '한성대학교 교수', email: 'hwajeong84@gmail.com',web: 'https://crypto.modoo.at/'},

  
  { name: '김재현', role: '석사졸업', graduated: '2025', company: 'SmartM2M', email: 'jaehyun@islab.re.kr',web: ''},
  { name: 'Muhammad Iqbal', role: '석사졸업', graduated: '2025', company: '', email: 'iqbal@islab.re.kr',web: ''},
  { name: '윤동욱', role: '석사졸업', graduated: '2025', company: '', email: 'dongwook@islab.re.kr',web: ''},
  { name: '정병욱', role: '석사졸업', graduated: '2025', company: '', email: 'byeonguk@islab.re.kr',web: ''},
  { name: '박상욱', role: '석사졸업', graduated: '2024', company: '', email: 'parksu9997@gmail.com',web: ''},
  { name: 'Agus Mahardika Ari Laksmono', role: '석사졸업', graduated: '2024', company: '', email: 'agus@islab.re.kr',web: ''},
  { name: '정한호', role: '석사졸업', graduated: '2024', company: 'SmartM2M', email: 'hanho@islab.re.kr',web: ''},
  { name: '오경우', role: '석사졸업', graduated: '2024', company: 'SmartM2M', email: 'kyeongwoo@islab.re.kr',web: ''},
  { name: '오시몬', role: '석사졸업', graduated: '2024', company: 'SmartM2M', email: 'simon@islab.re.kr',web: ''},
  { name: '신영재', role: '석사졸업', graduated: '2024', company: 'SmartM2M', email: 'yeongjae@islab.re.kr',web: ''},
  { name: '심혜진', role: '석사졸업', graduated: '2024', company: 'SmartM2M', email: 'hyejin@islab.re.kr',web: ''},
  { name: '김보금', role: '석사졸업', graduated: '2024', company: '', email: 'bogeum@islab.re.kr',web: ''},
  { name: '김요한', role: '석사졸업', graduated: '2024', company: 'SmartM2M', email: '',web: ''},
  { name: '홍윤영', role: '석사졸업', graduated: '2024', company: '', email: '',web: ''},
  { name: '오상봉', role: '석사졸업', graduated: '2023', company: '유안타증권', email: '',web: ''},
  { name: '이준호', role: '석사졸업', graduated: '2023', company: 'SmartM2M', email: 'bless4088@gmail.com',web: ''},
  { name: '김동규', role: '석사졸업', graduated: '2023', company: 'LG전자', email: '',web: ''},
  { name: '박종욱', role: '석사졸업', graduated: '2023', company: 'LIG넥스원', email: '',web: ''},
  { name: '김금보', role: '석사졸업', graduated: '2023', company: '서울보증보험(SGI)', email: '',web: ''},
  { name: '이현희', role: '석사졸업', graduated: '2023', company: 'SmartM2M', email: 'hyeonhui@smartm2m.co.kr',web: ''},
  { name: '조현진', role: '석사졸업', graduated: '2022', company: '한국주택금융공사', email: 'wh77g77@gmail.com',web: ''},
  { name: '김민재', role: '석사졸업', graduated: '2022', company: '삼성전자', email: 'minjae@islab.re.kr',web: ''},
  { name: '심준석', role: '석사졸업', graduated: '2022', company: 'LG', email: 'tjdrbsrhk123@gmail.com',web: ''},
  { name: '윤영여', role: '석사졸업', graduated: '2022', company: '이노뎁', email: 'youngyeo@islab.re.kr',web: ''},
  { name: '김도훈', role: '석사졸업', graduated: '2022', company: '한국해양진흥공사', email: 'dohun@islab.re.kr',web: ''},
  { name: '이진재', role: '석사졸업', graduated: '2022', company: '국방과학연구소', email: 'jinjae@islab.re.kr',web: ''},
  { name: 'Affifa tul mukaroh', role: '석사졸업', graduated: '2021', company: 'Tokopedia', email: 'affifa@islab.re.kr',web: ''},
  { name: '강원태', role: '석사졸업', graduated: '2021', company: 'SmartM2M', email: 'wontae@islab.re.kr',web: ''},
  { name: '이상현', role: '석사졸업', graduated: '2021', company: 'LG', email: 'sanghyun@islab.re.kr',web: ''},
  { name: '박찬희', role: '석사졸업', graduated: '2020', company: 'SmartM2M', email: 'chanhui@islab.re.kr',web: ''},
  { name: '김현곤', role: '석사졸업', graduated: '2020', company: 'SmartM2M', email: 'hyeongon@islab.re.kr',web: ''},
  { name: 'Eldi Putri Rahmawati Binti', role: '석사졸업', graduated: '2019', company: '사물인터넷연구센터', email: 'putrirhmwati@gmail.com',web: ''},
  { name: '김명길', role: '석사졸업', graduated: '2019', company: 'SmartM2M', email: 'clevermk7211@gmail.com',web: ''},
  { name: '김동주', role: '석사졸업', graduated: '2018', company: '한국재정정보원', email: 'rlaehdwndia@gmail.com',web: ''},
  { name: '이가람', role: '석사졸업', graduated: '2018', company: '금융보안원', email: 'rkfka4370@gmail.com',web: ''},
  { name: '서규원', role: '석사졸업', graduated: '2017', company: '한국주택금융공사', email: 'wkdfekf1@gmail.com',web: ''},
  { name: '박창준', role: '석사졸업', graduated: '2017', company: '하나 마이크론', email: 'pcj006@gmail.com',web: ''},
  { name: '배봉진', role: '석사졸업', graduated: '2017', company: '포멀웍스', email: 'bongjinbae704@gmail.com',web: ''},
  { name: '김재현', role: '석사졸업', graduated: '2017', company: '쿠팡', email: 'jjhh9012@gmail.com',web: ''},
  { name: '김경훈', role: '석사졸업', graduated: '2016', company: '남부발전', email: 'afywhenever@gmail.com',web: ''},
  { name: '석선희', role: '석사졸업', graduated: '2016', company: '네이버 랩스', email: 'seckseonhee@gmail.com',web: ''},
  { name: '안영진', role: '석사졸업', graduated: '2016', company: '한국물류정보통신', email: 'cubya0104@gmail.com',web: ''},
  { name: '김현진', role: '석사졸업', graduated: '2015', company: '한국전자통신연구원(국가보안기술연구소)', email: 'moonmaker@gmail.com',web: ''},
  { name: '이연철', role: '석사졸업', graduated: '2015', company: '한국전자통신연구원(국가보안기술연구소)', email: 'lycshotgunl@gmail.com',web: ''},
  { name: '권양현', role: '석사졸업', graduated: '2013', company: 'SK 하이닉스', email: 'ting9237@gmail.com',web: 'http://10.0.100.152/~ting9237'},
  { name: 'aparna', role: '석사졸업', graduated: '2013', company: 'CIPIO AS-Norway', email: 'aparna.nov03@gmail.com',web: 'http://sites.google.com/site/apar...'},
  { name: '이윤진', role: '석사졸업', graduated: '2013', company: '삼성전자', email: 'astroium@pusan.ac.kr',web: ''},
  { name: '유지민', role: '석사졸업', graduated: '2011', company: '현대 AutoEver', email: 'jmyu85@gmail.com',web: ''},
  { name: '김성윤', role: '석사졸업', graduated: '2011', company: '한국전자부품연구원', email: 'kims7y4@gmail.com',web: ''},
  { name: '이철희', role: '석사졸업', graduated: '2011', company: 'SK C&C', email: '2fehee@gmail.com',web: ''},
  { name: '황연자', role: '석사졸업', graduated: '2011', company: 'STX', email: 'tstcyanzi@gmail.com',web: ''},

  { name: 'Yustus Eko Oktian', role: '박사후연구원', graduated: '2023', company: '', email: 'yustus.oktian@gmail.com',web: ''}
];

export default function MembersContent() {
  const [activeTab, setActiveTab] = useState('박사졸업');

  const filteredMembers = allMembersData.filter(
    member => member.role === activeTab
  );

  const tabs = ['박사졸업', '석사졸업', '박사후연구원'];
  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        {/* === 제목과 탭 버튼 === */}
        <div className="border-b-2 pb-4 mb-8">
          <h2 className="text-3xl text-black font-bold inline-block border-b-4 border-blue-800 pb-2">졸업생 소개</h2>
        </div>
        
        {/* --- 과정 탭 버튼 --- */}
        <div className="flex border overflow-hidden mb-8">
        {tabs.map(tab => (
            <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 p-5 font-semibold transition-colors duration-200 text-center ${
                activeTab === tab 
                ? 'bg-[#042A5B] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            >
            {tab}
            </button>
        ))}
        </div>

        {/* --- 멤버 카드 그리드 --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-4">
                <div className="text-center sm:text-left pt-8">
                  <h2 className="text-3xl font-bold text-gray-900 mt-1 mb-4">
                    🎓 {member.name}
                  </h2>
                  <p className="text-gray-500 text-s pt-4"> {member.role}</p>
                  <p className="text-gray-500 text-s pt-4"> {member.graduated}</p>
                  <p className="text-gray-500 text-s pt-4"> {member.email}</p>
                  <p className="text-gray-500 text-s pt-4"> {member.company}</p>
                  <p className="text-gray-500 text-s pt-4"> {member.web}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};