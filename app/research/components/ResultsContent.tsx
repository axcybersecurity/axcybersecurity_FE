'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ResultsContent() {
  const [activeTab, setActiveTab] = useState('SCI');

  const tabs = ['SCI', '국제학술대회', '국내논문 및 국내학술대회', '특허실적', '프로젝트'];

  // ✅ 상단 요약 통계 (숫자 하드코딩)
  const summaryStats = [
    { key: 'SCI', label: 'SCI', value: 11, icon: '/results/sci.svg' },
    { key: 'PATENT', label: '특허', value: 22, icon: '/results/patent.svg' },
    { key: 'PROJECT', label: '프로젝트', value: 33, icon: '/results/project.svg' },
    { key: 'AWARD', label: '수상', value: 44, icon: '/results/award.svg' },
  ];

  return (
    <div className="relative pt-20 isolate">
      {/* 연구실적 리스트 */}
      <div className="w-full mt-16 sm:-mt-24 px-4">

        {/* 상단 요약 (SCI / 특허 / 프로젝트 / 수상) */}
        <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {summaryStats.map((item, idx) => (
              <div key={item.key} className="flex items-center">
                <div className="flex items-center gap-3">
                  {/* 동그란 아이콘 배경 */}
                  <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F4F7FB]">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  {/* 텍스트 */}
                  <div className="flex flex-col">
                    <span
                      className="text-xs sm:text-sm text-gray-800"
                      style={{ fontFamily: 'Pretendard' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-xl sm:text-2xl font-bold"
                      style={{ color: '#0066CC', fontFamily: 'Pretendard' }}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>

                {/* 세로 점선 구분선 (마지막 아이템 제외, 모바일에서는 숨김) */}
                {idx < summaryStats.length - 1 && (
                  <div className="hidden sm:block h-14 mx-6 border-l border-dashed border-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 탭 */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium transition-colors duration-200 rounded-full ${
                  activeTab === tab
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                style={activeTab === tab ? { backgroundColor: '#043A6F' } : {}}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 선택 탭 컨테이너 */}
        <div className="mx-auto bg-white rounded-lg p-4 sm:p-6 mb-8 w-full max-w-[980px] shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <h3
              className="text-center"
              style={{
                fontFamily: 'Pretendard',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '26px',
                color: '#02162E',
              }}
            >
              {activeTab}
            </h3>
          </div>

          <div className="h-px bg-black mb-4 mx-auto w-full" />

          <div className="w-full min-h-[320px] sm:min-h-[420px] md:min-h-[500px] flex justify-start text-left px-2">
            {/* 탭 내용 */}
            {activeTab === 'SCI' && (
              <p className="text-black text-base sm:text-lg">
                여기에 SCI 논문 내용이 들어갑니다
              </p>
            )}

            {activeTab === '국제학술대회' && (
              <div className="space-y-4 text-left">
                <ul className="list-disc list-inside text-gray-800 leading-relaxed">
                  <li>
                    <strong>Heechan-Kim, Jaehyun-Kim, Kyungyun-Lee, Junyoung-Son.</strong> 2025. &quot;Blockchain-Assisted Explainable AI Framework for Accountability in Autonomous Driving Systems&quot;
                  </li>
                  <li>
                    <strong>SeHwa-Ko, Kyeong-Min Lee, Eunse-Kang, Junyoung-Son.</strong> 2025. &quot;FingerRatchet: A Lightweight Anonymous P2P Protocol with Out-of-Band Fingerprint Exchange&quot;
                  </li>
                  <li>
                    <strong>Hyunjin-Jang, Jiwon-Yun, Yeonjeong-Hwang, Morsheda Akter, Howon-Kim, Junyoung-Son.</strong> 2025. &quot;Multi-class Attack Detection in CAN Networks using Lightweight 1D CNN&quot;
                  </li>
                  <li>
                    <strong>Andro Aprila Adiputra, Ahmada Yusril Kadiptya, Thi-Thu-Huong Le, JunYoung-Son, Howon Kim.</strong> 2025. &quot;Enhancing Contextual Understanding with Multimodal Siamese Networks Using Contrastive Loss and Text Embeddings&quot;
                  </li>
                  <li>
                    <strong>Thi-Thu-Huong Le, Andro Aprila Adiputra, YeonJeong-Hwang, JunYoung-Son, Howon Kim.</strong> 2025. &quot;Fine-Tuning Transformer LLMs for Detecting SQL Injection and XSS Vulnerabilities&quot;
                  </li>
                  <li>
                    <strong>KyeongMin-Lee, YeonJeong-Hwang, Thi-Thu-Huong Le, JunYoung Son.</strong> 2025. &quot;Performance Analysis of Signing Algorithms and Integrity Enhancement Techniques for MAVLink in PX4&quot;
                  </li>
                </ul>
              </div>
            )}

            {activeTab === '국내논문 및 국내학술대회' && (
              <div className="space-y-4 text-left">
                <ul className="list-disc list-inside text-gray-800 leading-relaxed">
                  <li>
                    <strong>Beomsun-Lee, Junyoung-Son.</strong> 2025. &quot;Enhancing Automotive Cybersecurity Assurance Evaluation Based on CAL Expansion&quot;
                  </li>
                  <li>
                    <strong>Jiwon-Yun, Yeonjeong-Hwang, Junyoung-Son.</strong> 2025. &quot;CVE-Based Analysis and Classification of Automotive Security Threats&quot;
                  </li>
                  <li>
                    <strong>KyeongMin-Lee, Yeonjeong-Hwang, Junyoung-Son.</strong> 2025. &quot;An Analysis of the ARIA Algorithm Using Dynamic S-box Based on Isomorphic Mordell Elliptic Curves&quot;
                  </li>
                  <li>
                    <strong>Heechan-Kim, Kyungyun-Lee, Junyoung-Son.</strong> 2025. &quot;Cross-Chain Protocols for Ensuring Blockchain Interoperability: Analysis of Limitations and Countermeasure Techniques&quot;
                  </li>
                  <li>
                    <strong>SeHwa-Ko, Beomsun-Lee, Junyoung-Son.</strong> 2025. &quot;A Survey of Lightweight Techniques for TLS 1.3&quot;
                  </li>
                </ul>
              </div>
            )}

            {/* ✅ 특허실적 탭에 1~5 리스트 추가 */}
            {activeTab === '특허실적' && (
              <div className="space-y-4 text-left">
                <ul className="list-disc list-inside text-gray-800 leading-relaxed">
                  <li>
                    <strong>Jiin-Jeong, Dobeom-Sung, Beomsun-Lee, Junyoung-Son.</strong> 2025. &quot;A Method and System for Value Assessment and Token-Based Transaction of Natural Language Data Generated from Social Media Posts&quot;
                  </li>
                  <li>
                    <strong>Hyunjin-Jang, Yeonjeong-Hwang, Howon Kim, Junyoung-Son.</strong> 2025. &quot;GPU-BASED ACCELERATED POST-QUANTUM CRYPTOGRAPHY CALCULATION SYSTEM SUPPORTING SMAUG-T&quot;
                  </li>
                  <li>
                    <strong>Heechan-Kim, Jaehan-Jo, Junyoung-Son.</strong> 2025. &quot;Blockchain System for Strengthening BMS Security for EV&quot;
                  </li>
                  <li>
                    <strong>Heechan-Kim, Kyungyun-Lee, Jinsu-Kim, Junyoung-Son.</strong> 2025. &quot;Vehicle Rental Damage Evidence and Automatic Settlement System through Cross-Blockchain Interoperability&quot;
                  </li>
                  <li>
                    <strong>Eunse-Kang, SeHwa-Ko, Howon Kim, Junyoung-Son.</strong> 2025. &quot;KMAC and cSHAKE AEAD Specification&quot;
                  </li>
                </ul>
              </div>
            )}

            {activeTab === '프로젝트' && (
              <p className="text-black text-base sm:text-lg">
                여기에 프로젝트 내용이 들어갑니다
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
