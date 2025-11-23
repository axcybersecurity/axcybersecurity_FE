'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { logoutApi } from '../lib/api';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    setIsLoggedIn(!!token);
  }, []);

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

  const headerClasses =
    isHomePage && !isScrolled
      ? 'bg-transparent text-black'
      : 'bg-white text-gray-800 shadow-md';

  const authButtonBase =
    'relative hover:opacity-80 transition-opacity inline-block';
  const authButtonSize =
    [
      'h-[3.2vh]',
      'min-h-[26px]',
      'w-[22vw]',
      'min-w-[72px]',
      'sm:h-[3.6vh]',
      'sm:min-h-[28px]',
      'sm:w-[18vw]',
      'sm:min-w-[80px]',
      'md:h-[4vh]',
      'md:min-h-[32px]',
      'md:w-[12vh]',
      'md:min-w-[100px]',
      'lg:h-[4.4vh]',
      'lg:min-h-[36px]',
      'lg:w-[13vh]',
      'lg:min-w-[110px]',
    ].join(' ');

  // ✅ 세줄 메뉴(햄버거) 최소 크기 설정
  const burgerButtonSize =
    [
      'flex flex-col justify-center items-center',
      'w-[4vh]',
      'h-[4vh]',
      'min-w-[38px]', // 최소 너비
      'min-h-[38px]', // 최소 높이
      'sm:min-w-[40px]',
      'sm:min-h-[40px]',
    ].join(' ');

  // 줄(스팬)도 너무 얇아지지 않도록 최소 높이 부여
  const burgerLineBase =
    'block w-full h-[0.3vh] min-h-[2px] rounded transition-transform duration-200';

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${headerClasses}`}
    >
      <nav className="w-full px-4 sm:px-6 h-[10vh] min-h-16 flex justify-between items-center">
        {/* 왼쪽 로고 */}
        <div className="relative h-[6vh] min-h-[250px] w-[30vh] min-w-[200px]">
          <Link href="/" className="block h-full w-full">
            <Image
              src="/main_logo.png"
              alt="메인로고"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>
        </div>

        {/* 오른쪽 메뉴 - 데스크탑 */}
        <div className="hidden md:flex items-center gap-[3vw]">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="hover:text-blue-600 focus:outline-none flex items-center text-[1.7vh] md:text-[2.2vh]"
              >
                {link.title}
                <svg
                  className={`w-[1.6vh] h-[1.6vh] ml-[0.6vh] transform transition-transform ${
                    openDropdown === link.title ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
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

          {/* 로그인/로그아웃 버튼 (데스크탑) */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className={`${authButtonBase} ${authButtonSize}`}
              aria-label="로그아웃"
            >
              <Image
                src="/main/logout.svg"
                alt="로그아웃"
                fill
                className="object-contain"
              />
            </button>
          ) : (
            <Link
              href="/login"
              className={`${authButtonBase} ${authButtonSize}`}
              aria-label="로그인"
            >
              <Image
                src="/main/loginbutton.svg"
                alt="로그인"
                fill
                className="object-contain"
              />
            </Link>
          )}
        </div>

        {/* 오른쪽 메뉴 - 모바일 */}
        <div className="flex items-center gap-2 md:hidden">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className={`${authButtonBase} ${authButtonSize}`}
              aria-label="로그아웃"
            >
              <Image
                src="/main/logout.svg"
                alt="로그아웃"
                fill
                className="object-contain"
              />
            </button>
          ) : (
            <Link
              href="/login"
              className={`${authButtonBase} ${authButtonSize}`}
              aria-label="로그인"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/main/loginbutton.svg"
                alt="로그인"
                fill
                className="object-contain"
              />
            </Link>
          )}

          {/* ✅ 세줄 메뉴: 최소 크기 보장 */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={burgerButtonSize}
            aria-label="메뉴 열기"
          >
            <span
              className={`${burgerLineBase} ${
                isMobileMenuOpen ? 'translate-y-[0.6vh] rotate-45 bg-gray-700' : 'bg-gray-800'
              }`}
            />
            <span
              className={`${burgerLineBase} my-[0.4vh] ${
                isMobileMenuOpen ? 'opacity-0 bg-gray-800' : 'opacity-100 bg-gray-800'
              }`}
            />
            <span
              className={`${burgerLineBase} ${
                isMobileMenuOpen
                  ? '-translate-y-[0.6vh] -rotate-45 bg-gray-700'
                  : 'bg-gray-800'
              }`}
            />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-t border-gray-200">
          <div className="px-4 py-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.title} className="flex flex-col">
                <Link
                  href={link.href}
                  className="flex justify-between items-center py-2 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.title}</span>
                  {link.sublinks.length > 0 && (
                    <span className="text-xs text-gray-500">▼</span>
                  )}
                </Link>
                {link.sublinks.length > 0 && (
                  <div className="pl-4 pb-1 flex flex-col gap-1">
                    {link.sublinks.map((sublink) => (
                      <Link
                        key={sublink.title}
                        href={sublink.href}
                        className="py-1 text-xs text-gray-700"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sublink.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
