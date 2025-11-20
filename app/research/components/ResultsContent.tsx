'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ResultsContent() {
  const [activeTab, setActiveTab] = useState('SCI');

  const tabs = ['SCI', '국제학술대회', '국내논문 및 국내학술대회', '특허실적', '프로젝트'];

  return (
    <div className="relative pt-20 isolate">
      {/* 연구실적 리스트 */}
      <div className="w-full mt-16 sm:-mt-24 px-4">

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

        {/* 선택 탭 컨테이너 — 모든 탭 동일하게 사용 */}
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
            {/* 탭 내용 넣기 */}
            {activeTab === 'SCI' && (
              <p className="text-black text-base sm:text-lg">
                여기에 SCI 논문 내용이 들어갑니다
              </p>
            )}

            {activeTab === '국제학술대회' && (
              <div className="space-y-4 text-left">
                <ul className="list-disc list-inside text-gray-800 leading-relaxed">
                  <li>
                    <strong>Heechan-Kim, Jaehyun-Kim, Kyungyun-Lee, Junyoung-Son.</strong> 2025. "Blockchain-Assisted Explainable AI Framework for Accountability in Autonomous Driving Systems"
                  </li>
                  <li>
                    <strong>SeHwa-Ko, Kyeong-Min Lee, Eunse-Kang, Junyoung-Son.</strong> 2025. "FingerRatchet: A Lightweight Anonymous P2P Protocol with Out-of-Band Fingerprint Exchange"
                  </li>
                  <li>
                    <strong>KyeongMin-Lee, YeonJeong-Hwang, Thi-Thu-Huong Le, JunYoung Son.</strong> 2025. "Performance Analysis of Signing Algorithms and Integrity Enhancement Techniques for MAVLink in PX4"
                  </li>
                </ul>
              </div>
            )}

            {activeTab === '국내논문 및 국내학술대회' && (
              <div className="space-y-4 text-left">
                <ul className="list-disc list-inside text-gray-800 leading-relaxed">
                  <li>
                    <strong>Beomsun-Lee, Junyoung-Son.</strong> 2025. "Enhancing Automotive Cybersecurity Assurance Evaluation Based on CAL Expansion"
                  </li>
                  <li>
                    <strong>Jiwon-Yun, Yeonjeong-Hwang, Junyoung-Son.</strong> 2025. "CVE-Based Analysis and Classification of Automotive Security Threats"
                  </li>
                  <li>
                    <strong>KyeongMin-Lee, Yeonjeong-Hwang, Junyoung-Son.</strong> 2025. "An Analysis of the ARIA Algorithm Using Dynamic S-box Based on Isomorphic Mordell Elliptic Curves"
                  </li>
                  <li>
                    <strong>Heechan-Kim, Kyungyun-Lee, Junyoung-Son.</strong> 2025. "Cross-Chain Protocols for Ensuring Blockchain Interoperability: Analysis of Limitations and Countermeasure Techniques"
                  </li>
                  <li>
                    <strong>SeHwa-Ko, Beomsun-Lee, Junyoung-Son.</strong> 2025. "A Survey of Lightweight Techniques for TLS 1.3"
                  </li>
                </ul>
              </div>
            )}

            {activeTab === '특허실적' && (
              <p className="text-black text-base sm:text-lg">
                여기에 특허실적 내용이 들어갑니다
              </p>
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
