'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'register';

  const tabs = [
    { id: 'register', title: '가입하기', href: '/login?tab=register' },
    { id: 'login', title: '로그인', href: '/login?tab=login' }
  ];

  // 활성 탭에 따른 제목 설정
  const getPageTitle = () => {
    return activeTab === 'login' ? '로그인' : '가입하기';
  };

  return (
    <div>
      {/* 히어로 섹션 - 후보.png 배경 */}
      <div className="relative bg-[url('/후보.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative container mx-auto px-6 py-12 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-8 border-b-4 border-white pb-4 pt-20 text-white inline-block">
            {getPageTitle()}
          </h1>
          <div className="flex pb-10">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => router.push(tab.href)}
                className={`py-2 px-6 text-lg font-medium transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'border-b-2 border-white text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className={activeTab === tab.id ? '' : ''}>
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="bg-white py-16 px-0">
        {activeTab === 'register' && (
          <div className="container mx-auto px-6">
            {/* 가입하기 폼 내용 */}
            <p>가입하기 폼을 여기에 추가하세요</p>
          </div>
        )}
        {activeTab === 'login' && (
          <div className="container mx-auto px-6">
            <div className="relative">
              <div className="flex justify-center">
                {/* 로그인 제목 - 중앙정렬에서 왼쪽으로 이동 */}
                <div className="relative" style={{ transform: 'translateX(-200%)' }}>
                <h2 
                  style={{
                    fontFamily: 'Pretendard',
                    fontWeight: 700,
                    fontStyle: 'normal',
                      fontSize: '35px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#02162E',
                    marginBottom: '8px'
                  }}
                >
                  로그인(Login)
                </h2>
                <div 
                  className="relative inline-block" 
                  style={{ 
                    width: '100%'
                  }}
                >
                  <div 
                    className="border-b-[3px] border-black absolute" 
                    style={{ 
                      width: '100%',
                      top: '0px'
                    }}
                  ></div>
                  </div>
                </div>
              </div>
              
              {/* 1px 밑줄 - 3px 밑줄과 겹치게 */}
              <div 
                className="absolute flex justify-center" 
                style={{ 
                  top: '62px',
                  width: '100%'
                }}
              >
                <div className="border-b border-black w-7/10"></div>
              </div>
            </div>
            
            {/* Cover 1.svg 이미지 - 바깥쪽으로 분리 */}
            <div className="flex justify-center mt-4">
              <img 
                src="/Cover 1.svg" 
                alt="Cover" 
                className="w-auto h-auto"
              />
            </div>
            
            {/* 로그인 폼 */}
            <div className="max-w-md mx-auto mt-8 mb-20">
              <form className="space-y-6">
                {/* 아이디 또는 이메일 입력 필드 */}
                <div>
                  <label className="block mb-2">
                    <span
                      style={{
                        fontFamily: 'Pretendard',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontSize: '18px',
                        lineHeight: '100%',
                        letterSpacing: '-1px',
                        color: '#02162E'
                      }}
                    >
                      아이디 또는 이메일
                    </span>
                    <span
                      style={{
                        fontFamily: 'Pretendard',
                        fontWeight: 500,
                        fontStyle: 'normal',
                        fontSize: '18px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#A0A1A1'
                      }}
                    >
                      {' '}ID or Email
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ border: '1px solid #A8A3A3' }}
                  />
                </div>
                
                {/* 비밀번호 입력 필드 */}
                <div>
                  <label className="block mb-2">
                    <span
                      style={{
                        fontFamily: 'Pretendard',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontSize: '18px',
                        lineHeight: '100%',
                        letterSpacing: '-1px',
                        color: '#02162E'
                      }}
                    >
                      비밀번호
                    </span>
                    <span
                      style={{
                        fontFamily: 'Pretendard',
                        fontWeight: 500,
                        fontStyle: 'normal',
                        fontSize: '18px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#A0A1A1'
                      }}
                    >
                      {' '}Password
                    </span>
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ border: '1px solid #A8A3A3' }}
                  />
                </div>
                
                {/* 로그인 상태 유지 체크박스 */}
                <div className="flex items-center -mt-2.5">
                  <input
                    type="checkbox"
                    id="keepLogin"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded appearance-none"
                    style={{ 
                      border: '2px solid #000000',
                      backgroundColor: 'white'
                    }}
                  />
                  <label 
                    htmlFor="keepLogin" 
                    className="ml-2 block"
                    style={{
                      fontFamily: 'Pretendard',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#02162E'
                    }}
                  >
                    로그인 상태 유지
                  </label>
                </div>
                
                {/* 로그인 및 멤버 가입 버튼 */}
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    style={{ 
                      backgroundColor: '#3B99D3', 
                      borderRadius: '4px',
                      fontFamily: 'Pretendard',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      textAlign: 'center',
                      color: '#EFF2F5'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      // 로그인 처리 로직
                      console.log('로그인 버튼 클릭');
                    }}
                  >
                    로그인
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-gray-200 py-3.5 px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                    style={{ 
                      borderRadius: '4px',
                      fontFamily: 'Pretendard',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      textAlign: 'center',
                      color: '#282828'
                    }}
                    onClick={() => router.push('/login?tab=register')}
                  >
                    멤버 가입
                  </button>
                </div>
                
                {/* 비밀번호 찾기 링크 */}
                <div className="text-left">
                  <a
                    href="#"
                    className="text"
                    style={{
                      fontSize: '15px',
                      fontFamily: 'Pretendard',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      lineHeight: '100%',
                      letterSpacing: '0%'
                    }}
                  >
                    비밀번호를 잊으셨나요?
                  </a>
              </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  );
}