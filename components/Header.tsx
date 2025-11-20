'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { logoutApi } from '../lib/api';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  // --- 스크롤 감지를 위한 상태 추가 ---
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치가 10px보다 크면 true
      setIsScrolled(window.scrollY > 10);
    };
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
    // 컴포넌트가 사라질 때 리스너 제거 (메모리 누수 방지)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- 로그인 상태 확인 ---
  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    setIsLoggedIn(!!token);
  }, []);

  // --- 로그아웃 핸들러 ---
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) await logoutApi.logout(token);
    } catch (e) {
      console.error('로그아웃 실패:', e);
    } finally {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      window.location.reload();
    }
  };
  
  const navLinks = [
    {
      title: '대학원 진학',
      href: '/graduate',
      sublinks: [
        { title: '교육과정', href: '/graduate?tab=curriculum' },
        { title: '입학안내', href: '/graduate?tab=admission' },
      ],
    },
    {
      title: '연구실 소개',
      href: '/about',
      sublinks: [
        { title: '연구실', href: '/about?tab=main' },
        { title: '교수진', href: '/about?tab=professors' },
        { title: '구성원', href: '/about?tab=members' },
        { title: '졸업생', href: '/about?tab=graduated' },
      ],
    },
    {
      title: '연구 내용',
      href: '/research',
      sublinks: [
        { title: '연구주제', href: '/research?tab=topics' },
        { title: '연구실적', href: '/research?tab=results' },
      ],
    },
    {
      title: '자료실',
      href: '/courses',
      sublinks: [
        { title: '공지사항', href: '/courses?tab=notice' },
        { title: '갤러리', href: '/courses?tab=gallery' },
        { title: '강의자료', href: '/courses?tab=class' },
      ],
    },
  ];

  // --- 동적 클래스를 위한 변수 선언 ---
  const headerClasses = isHomePage && !isScrolled ? 'bg-transparent text-black' : 'bg-white text-gray-800 shadow-md';
  
  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${headerClasses}`}>
      <nav className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* 왼쪽 로고 */}
        <div>
          <Link href="/">
            <Image src="/main_logo.png" alt="메인로고" width={250} height={50}/>
          </Link>
        </div>

        {/* 오른쪽 메뉴 */}
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href={link.href} className="hover:text-blue-600 focus:outline-none flex items-center">
                {link.title}
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === link.title ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>

              {openDropdown === link.title && link.sublinks.length > 0 && (
                <div className="absolute left-0 top-full pt-1 w-auto z-10">
                  <div className="bg-white border border-gray-200 rounded-md shadow-lg py-2">
                    {link.sublinks.map((sublink) => (
                      <Link
                        key={sublink.title}
                        href={sublink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                      >
                        {sublink.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* 로그인/로그아웃 버튼 */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:opacity-80 transition-opacity"
              aria-label="로그아웃"
            >
              <Image src="/main/logout.svg" alt="로그아웃" width={100} height={36} />
            </button>
          ) : (
            <Link
              href="/login"
              className="hover:opacity-80 transition-opacity"
              aria-label="로그인"
            >
              <Image src="/main/loginbutton.svg" alt="로그인" width={100} height={36} />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}