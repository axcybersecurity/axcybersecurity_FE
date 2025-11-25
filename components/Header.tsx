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
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

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

  const navTextSize = [
    'text-[13px]',
    'sm:text-[14px]',
    'md:text-[15px]',
    'xl:text-[15px]',
  ].join(' ');

  const burgerButtonSize = [
    'flex flex-col justify-center items-center',
    'shrink-0',
    'w-9',
    'h-9',
  ].join(' ');

  const burgerLineBase =
    'block w-7 h-[2px] rounded bg-gray-800 transition-transform transition-opacity duration-200';

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${headerClasses}`}
    >
      <nav className="w-full px-4 sm:px-6 h-[10vh] min-h-18 flex justify-between items-center max-h-[50px]">
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
        <div className="hidden md:flex items-center gap-[3vh]">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`hover:text-blue-600 focus:outline-none flex items-center whitespace-nowrap ${navTextSize}`}
                style={{ fontFamily: 'Pretendard', fontWeight: 'bold' }}
              >
                {link.title}
                <svg
                  className={`w-[14px] h-[14px] ml-[0.6vh] transform transition-transform ${
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
                        className="block px-4 py-2 text-[13px] sm:text-[14px] text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                        style={{ fontFamily: 'Pretendard' }}  
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

          {/* 세줄 메뉴 */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={burgerButtonSize}
            aria-label="메뉴 열기"
          >
            <span
              className={`${burgerLineBase} ${
                isMobileMenuOpen ? 'translate-y-[6px] rotate-45 bg-gray-700' : ''
              }`}
            />
            <span
              className={`${burgerLineBase} my-[5px] ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`${burgerLineBase} ${
                isMobileMenuOpen ? '-translate-y-[7px] -rotate-45 bg-gray-700' : ''
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
                  className="flex justify-between items-center py-2 text-sm whitespace-nowrap"
                  style={{ fontFamily: 'Pretendard' ,fontWeight: 'bold'}}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="whitespace-nowrap">{link.title}</span>
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
                        className="py-1 text-xs text-gray-700 whitespace-nowrap"
                        style={{ fontFamily: 'Pretendard' }}
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
