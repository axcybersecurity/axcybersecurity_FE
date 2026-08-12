'use client';

import React, { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginApi } from '../../lib/api';

function LoginPageContent() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const [loginData, setLoginData] = useState({
    login_id: '',
    password: '',
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const res = await loginApi.login(loginData);
      localStorage.setItem('token', res.data.access_token);
      router.push('/');
    } catch (err) {
      setErrorMessage('아이디 또는 비밀번호가 올바르지 않습니다.');
      console.error('로그인 실패:', err);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 히어로 */}
      <section className="relative min-h-[30vh] bg-[url('/page배경.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* 로그인 폼 */}
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-center text-3xl font-bold text-[#02162E]">로그인(Login)</h2>
            <div className="mt-4 h-px w-full bg-[#02162E]" />
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            {/* 아이디 */}
            <div>
              <label className="mb-2 block text-[#02162E]">
                <span className="font-semibold">아이디 또는 이메일</span>
                <span className="ml-2 text-gray-400">ID or Email</span>
              </label>
              <input
                type="text"
                value={loginData.login_id}
                onChange={(e) => {
                  setLoginData((prev) => ({
                    ...prev,
                    login_id: e.target.value,
                  }));
                  setErrorMessage('');
                }}
                className="text-black w-full rounded border border-gray-300 px-3 py-3
                           focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="username"
              />
            </div>

            {/* 비밀번호 */}
            <div>
              <label className="mb-2 block text-[#02162E]">
                <span className="font-semibold">비밀번호</span>
                <span className="ml-2 text-gray-400">Password</span>
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => {
                  setLoginData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                  setErrorMessage('');
                }}
                className="text-black w-full rounded border border-gray-300 px-3 py-3
                           focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="current-password"
              />
            </div>

            {/* 로그인 유지 */}
            <label className="flex items-center gap-2 text-sm text-[#02162E]">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-2 border-black accent-blue-600"
              />
              로그인 상태 유지
            </label>

            {/* 에러 메시지 */}
            {errorMessage && (
              <p className="rounded bg-red-50 px-4 py-2 text-sm text-red-600">
                {errorMessage}
              </p>
            )}

            {/* 버튼 */}
            <button
              type="submit"
              className="w-full rounded bg-[#3B99D3] py-3 text-lg font-medium text-white
                         transition-opacity hover:opacity-90
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              로그인
            </button>
            <h4 className="pt-10 text-center text-black">회원가입은 관리자에게 문의 부탁드립니다.</h4>
          </form>
        </div>
      </main>
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
