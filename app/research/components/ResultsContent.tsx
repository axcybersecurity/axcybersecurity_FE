'use client';

import Image from 'next/image';
import { useState } from 'react';
import award from '../../../public/icon/award_icon.png';
import sci from '../../../public/icon/sci_icon.png';
import project from '../../../public/icon/project_icon.png';
import patent from '../../../public/icon/patent_icon.png';

export default function ResultsContent() {
  const [activeTab, setActiveTab] = useState('SCI');

  const tabs = ['SCI', '국제학술대회', '국내논문 및 국내학술대회', '특허실적', '프로젝트','수상'];

  const summaryStats = [
    { key: 'SCI', label: 'SCI', value: 0, icon: sci },
    { key: 'PATENT', label: '특허', value: 5, icon: patent },
    { key: 'PROJECT', label: '프로젝트', value: 0, icon: project },
    { key: 'AWARD', label: '수상', value: 5, icon: award },
  ];

  return (
    <div
      className="
        relative isolate
        px-4 sm:px-6 lg:px-0
        pb-[6vh]           /* 아래 여백도 vh로 */
        font-['Pretendard']
        pt-[1vh] sm:pt-[1vh]  /* 상단 여백을 vh로 줄임 */
      ">
      <div className="w-full max-w-5xl mx-auto">
        {/* 상단 요약 (SCI / 특허 / 프로젝트 / 수상) */}
        <div className="w-full mb-[4vh] sm:mb-[5vh] mt-[1vh] sm:mt-[1vh]">
          <div
            className="
              flex flex-row flex-wrap
              items-center justify-center
              gap-3 sm:gap-6 lg:gap-10
            "
          >
            {summaryStats.map((item, idx) => (
              <div
                key={item.key}
                className="flex items-center justify-start"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F4F7FB] flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm text-gray-800">
                      {item.label}
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#0066CC]">
                      {item.value}
                    </span>
                  </div>
                </div>

                {/* 세로 점선 구분선 (마지막 아이템 제외, 모바일에서는 숨김) */}
                {idx < summaryStats.length - 1 && (
                  <div className="hidden sm:block h-10 sm:h-14 mx-4 sm:mx-6 border-l border-dashed border-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 탭 버튼 */}
        <div className="flex justify-center mb-[3vh] sm:mb-[4vh]">
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-medium transition-colors duration-200 rounded-full whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-white bg-[#043A6F]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 탭 내용 컨테이너 */}
        <div className="mx-auto bg-white rounded-lg p-4 sm:p-6 mb-[4vh] w-full max-w-[980px] shadow-sm">
          {/* 제목 영역 */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[#02162E]">
              {activeTab}
            </h3>
          </div>

          <div className="h-px bg-black mb-4 w-full" />

          {/* 내용 영역 */}
          <div className="w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] flex justify-start text-left">
            {activeTab === 'SCI' && (
              <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed">
                여기에 SCI 논문 내용이 들어갑니다
              </p>
            )}

            {activeTab === '국제학술대회' && (
              <div className="space-y-4 text-left text-sm sm:text-base leading-relaxed text-gray-800">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Heechan-Kim, Jaehyun-Kim, Kyungyun-Lee, Junyoung-Son.</strong>{' '}
                    2025. &quot;Blockchain-Assisted Explainable AI Framework for Accountability in Autonomous Driving Systems&quot;
                  </li>
                  <li>
                    <strong>SeHwa-Ko, Kyeong-Min Lee, Eunse-Kang, Junyoung-Son.</strong>{' '}
                    2025. &quot;FingerRatchet: A Lightweight Anonymous P2P Protocol with Out-of-Band Fingerprint Exchange&quot;
                  </li>
                  <li>
                    <strong>Hyunjin-Jang, Jiwon-Yun, Yeonjeong-Hwang, Morsheda Akter, Howon-Kim, Junyoung-Son.</strong>{' '}
                    2025. &quot;Multi-class Attack Detection in CAN Networks using Lightweight 1D CNN&quot;
                  </li>
                  <li>
                    <strong>
                      Andro Aprila Adiputra, Ahmada Yusril Kadiptya, Thi-Thu-Huong Le, JunYoung-Son, Howon Kim.
                    </strong>{' '}
                    2025. &quot;Enhancing Contextual Understanding with Multimodal Siamese Networks Using Contrastive Loss and Text Embeddings&quot;
                  </li>
                  <li>
                    <strong>
                      Thi-Thu-Huong Le, Andro Aprila Adiputra, YeonJeong-Hwang, JunYoung-Son, Howon Kim.
                    </strong>{' '}
                    2025. &quot;Fine-Tuning Transformer LLMs for Detecting SQL Injection and XSS Vulnerabilities&quot;
                  </li>
                  <li>
                    <strong>
                      KyeongMin-Lee, YeonJeong-Hwang, Thi-Thu-Huong Le, JunYoung Son.
                    </strong>{' '}
                    2025. &quot;Performance Analysis of Signing Algorithms and Integrity Enhancement Techniques for MAVLink in PX4&quot;
                  </li>
                </ul>
              </div>
            )}

            {activeTab === '국내논문 및 국내학술대회' && (
              <div className="space-y-4 text-left text-sm sm:text-base leading-relaxed text-gray-800">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Beomsun-Lee, Junyoung-Son.</strong>{' '}
                    2025. &quot;Enhancing Automotive Cybersecurity Assurance Evaluation Based on CAL Expansion&quot;
                  </li>
                  <li>
                    <strong>Jiwon-Yun, Yeonjeong-Hwang, Junyoung-Son.</strong>{' '}
                    2025. &quot;CVE-Based Analysis and Classification of Automotive Security Threats&quot;
                  </li>
                  <li>
                    <strong>KyeongMin-Lee, Yeonjeong-Hwang, Junyoung-Son.</strong>{' '}
                    2025. &quot;An Analysis of the ARIA Algorithm Using Dynamic S-box Based on Isomorphic Mordell Elliptic Curves&quot;
                  </li>
                  <li>
                    <strong>Heechan-Kim, Kyungyun-Lee, Junyoung-Son.</strong>{' '}
                    2025. &quot;Cross-Chain Protocols for Ensuring Blockchain Interoperability: Analysis of Limitations and Countermeasure Techniques&quot;
                  </li>
                  <li>
                    <strong>SeHwa-Ko, Beomsun-Lee, Junyoung-Son.</strong>{' '}
                    2025. &quot;A Survey of Lightweight Techniques for TLS 1.3&quot;
                  </li>
                </ul>
              </div>
            )}

            {activeTab === '특허실적' && (
              <div className="space-y-4 text-left text-sm sm:text-base leading-relaxed text-gray-800">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Jiin-Jeong, Dobeom-Sung, Beomsun-Lee, Junyoung-Son.</strong>{' '}
                    2025. &quot;A Method and System for Value Assessment and Token-Based Transaction of Natural Language Data Generated from Social Media Posts&quot;
                  </li>
                  <li>
                    <strong>Hyunjin-Jang, Yeonjeong-Hwang, Howon Kim, Junyoung-Son.</strong>{' '}
                    2025. &quot;GPU-BASED ACCELERATED POST-QUANTUM CRYPTOGRAPHY CALCULATION SYSTEM SUPPORTING SMAUG-T&quot;
                  </li>
                  <li>
                    <strong>Heechan-Kim, Jaehan-Jo, Junyoung-Son.</strong>{' '}
                    2025. &quot;Blockchain System for Strengthening BMS Security for EV&quot;
                  </li>
                  <li>
                    <strong>Heechan-Kim, Kyungyun-Lee, Jinsu-Kim, Junyoung-Son.</strong>{' '}
                    2025. &quot;Vehicle Rental Damage Evidence and Automatic Settlement System through Cross-Blockchain Interoperability&quot;
                  </li>
                  <li>
                    <strong>Eunse-Kang, SeHwa-Ko, Howon Kim, Junyoung-Son.</strong>{' '}
                    2025. &quot;KMAC and cSHAKE AEAD Specification&quot;
                  </li>
                </ul>
              </div>
            )}

            {activeTab === '프로젝트' && (
              <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed">
                여기에 프로젝트 내용이 들어갑니다
              </p>
            )}

            {/* 🔽 수상 탭 내용 추가 */}
            {activeTab === '수상' && (
              <div className="space-y-4 text-left text-sm sm:text-base leading-relaxed text-gray-800">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>2025 국가암호공모전</strong> - 암호원천기술 분야 입상
                  </li>
                  <li>
                    <strong>2025 국가암호공모전</strong> - KpqC 알고리즘 분야 입상
                  </li>
                  <li>
                    <strong>2025 DIVE 헤커톤</strong> - 발제사 부문 1등
                  </li>
                  <li>
                    <strong>2025 DIVE 헤커톤</strong> - 종합 3등
                  </li>
                  <li>
                    <strong>ACS 영남권 해킹방어대회</strong> - 1등 · 2등 동시 수상
                  </li>
                </ul>
                {/* 필요하면 위 항목들을 실제 실적에 맞게 수정해서 쓰면 됩니다 */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
