'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { loginApi } from '../../lib/api';

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'login';

  const [loginData, setLoginData] = useState({
    login_id: '',
    password: ''
  });

  const tabs = [
    { id: 'register', title: '가입하기', href: '/login?tab=register' },
    { id: 'login', title: '로그인', href: '/login?tab=login' }
  ];

  // 활성 탭에 따른 제목 설정
  const getPageTitle = () => {
    return activeTab === 'login' ? '로그인' : '가입하기';
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginApi.login(loginData);
      localStorage.setItem('token', response.data.access_token);
      router.push('/');
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== 히어로 섹션 (배경 + 탭) ===== */}
      <div
        className="relative bg-[url('/page배경.jpg')] bg-cover bg-center"
        style={{ minHeight: '30vh' }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div
          className="relative container mx-auto px-6 flex flex-col items-center"
          style={{
            paddingTop: '10vh',
            paddingBottom: '5vh'
          }}
        >
          <h1
            className="mb-8 border-b-4 border-white pb-4 text-white inline-block"
            style={{
              paddingTop: '2vh',
              fontSize: '3vh',
              fontWeight: 700
            }}
          >
            {getPageTitle()}
          </h1>

          <div className="flex" style={{ paddingBottom: '3vh' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => router.push(tab.href)}
                className={`py-2 px-6 text-lg font-medium transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'border-b-2 border-white text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 콘텐츠 영역 ===== */}
      <div
        className="flex-1"
        style={{
          paddingTop: '6vh',
          paddingBottom: '6vh'
        }}
      >
        {/* ==== 가입하기 탭 ==== */}
        {activeTab === 'register' && (
          <div className="container mx-auto px-6 flex justify-center items-center">
            <p
              className="text-center"
              style={{
                fontFamily: 'Pretendard',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '2.4vh',
                lineHeight: '120%',
                letterSpacing: '0%',
                color: '#02162E'
              }}
            >
              관리자에게 문의바랍니다.
            </p>
          </div>
        )}

        {/* ==== 로그인 탭 ==== */}
        {activeTab === 'login' && (
          <div className="container mx-auto px-6">
            {/* 전체 로그인 블록 */}
            <div
              className="max-w-3xl mx-auto"
              style={{ marginTop: '10vh', marginBottom: '8vh' }}
            >
              {/* ===== 제목 + 라인 ===== */}
              <div className="mb-12">
                <div>
                  {/* 제목 */}
                  <h2
                    className="inline-block"
                    style={{
                      fontFamily: 'Pretendard',
                      fontWeight: 700,
                      fontStyle: 'normal',
                      fontSize: '4vh',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#02162E'
                    }}
                  >
                    로그인(Login)
                  </h2>

                  {/* 제목 아래에 가로선 */}
                  <div
                    style={{
                      marginTop: '1.5vh',   // 제목과 선 사이 간격
                      height: '1px',
                      width: '100%',        // 부모 너비 전체로 선
                      backgroundColor: '#02162E'
                    }}
                  />
                </div>
              </div>

              {/* ===== 로그인 폼 ===== */}
              <div className="max-w-md">
                <form className="space-y-6" onSubmit={handleLogin}>
                  {/* 아이디 또는 이메일 입력 필드 */}
                  <div>
                    <label className="block mb-2">
                      <span
                        style={{
                          fontFamily: 'Pretendard',
                          fontWeight: 600,
                          fontStyle: 'normal',
                          fontSize: '2.2vh',
                          lineHeight: '100%',
                          letterSpacing: '-0.05vh',
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
                          fontSize: '2.2vh',
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
                      value={loginData.login_id}
                      onChange={(e) =>
                        setLoginData({ ...loginData, login_id: e.target.value })
                      }
                      className="w-full px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      style={{
                        border: '1px solid #A8A3A3',
                        minHeight: '5vh'
                      }}
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
                          fontSize: '2.2vh',
                          lineHeight: '100%',
                          letterSpacing: '-0.05vh',
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
                          fontSize: '2.2vh',
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
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                      className="w-full px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      style={{
                        border: '1px solid #A8A3A3',
                        minHeight: '5vh'
                      }}
                    />
                  </div>

                  {/* 로그인 상태 유지 체크박스 */}
                  <div className="flex items-center" style={{ marginTop: '-1vh' }}>
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
                        fontSize: '1.8vh',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#02162E'
                      }}
                    >
                      로그인 상태 유지
                    </label>
                  </div>

                  {/* 로그인 버튼 */}
                  <div>
                    <button
                      type="submit"
                      className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                      style={{
                        paddingTop: '2.2vh',
                        paddingBottom: '2.2vh',
                        backgroundColor: '#3B99D3',
                        borderRadius: '4px',
                        fontFamily: 'Pretendard',
                        fontWeight: 500,
                        fontStyle: 'normal',
                        fontSize: '2.4vh',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        textAlign: 'center',
                        color: '#EFF2F5'
                      }}
                    >
                      로그인
                    </button>
                  </div>

                  {/* 비밀번호 찾기 링크 */}
                  <div className="text-left">
                    <a
                      href="#"
                      style={{
                        fontSize: '2vh',
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
