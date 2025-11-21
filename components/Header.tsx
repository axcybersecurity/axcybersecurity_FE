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

  // --- 스크롤 감지를 위한 상태 ---
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 10px 대신 화면 높이의 1% (1vh) 이상 스크롤 시 감지
      setIsScrolled(window.scrollY > window.innerHeight * 0.01);
    };
    window.addEventListener('scroll', handleScroll);
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

  // --- 동적 클래스 ---
  const headerClasses = isHomePage && !isScrolled 
    ? 'bg-transparent text-black' 
    : 'bg-white text-gray-800 shadow-md';

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${headerClasses}`}
      // 헤더 높이: 고정 px 제거하고 화면 높이의 10vh 사용
      style={{ height: '10vh', minHeight: '50px' }}
    >
      <nav className="container mx-auto px-[4vw] h-full flex justify-between items-center">
        {/* 1. 왼쪽 로고 */}
        <div className="flex-shrink-0">
          <Link href="/">
            {/* 로고 크기: 너비와 높이 비율을 vh/vw로 조정 */}
            <div className="relative w-[25vw] lg:w-[15vw] h-[5vh] min-h-[30px]">
              <Image 
                src="/main_logo.png" 
                alt="메인로고" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* 2. 데스크톱 메뉴 (lg 이상에서 보임) */}
        <div className="hidden lg:flex items-center gap-[3vw]">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className="relative group h-full flex items-center"
              onMouseEnter={() => setOpenDropdown(link.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link 
                href={link.href} 
                className="hover:text-blue-600 focus:outline-none flex items-center font-medium whitespace-nowrap transition-colors"
                // 폰트 크기를 vh로 설정 (화면 높이에 따라 글자 크기 변경)
                style={{ fontSize: 'clamp(1.4vh, 1.6vh, 2.2vh)' }} 
              >
                {link.title}
                <svg
                  // 아이콘 크기도 vh로 변경
                  className={`w-[1.5vh] h-[1.5vh] ml-[0.5vh] transform transition-transform ${openDropdown === link.title ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>

              {/* 드롭다운 메뉴 */}
              {openDropdown === link.title && link.sublinks.length > 0 && (
                // top 위치를 헤더 높이인 10vh에 맞춤
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[8vh] pt-[2vh] w-auto min-w-[12vw] z-20">
                  <div className="bg-white border border-gray-200 rounded-md shadow-lg py-[1vh] overflow-hidden">
                    {link.sublinks.map((sublink) => (
                      <Link
                        key={sublink.title}
                        href={sublink.href}
                        className="block px-[2vw] py-[1vh] text-gray-700 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap transition-colors text-center"
                        style={{ fontSize: 'clamp(1.2vh, 1.4vh, 2vh)' }}
                      >
                        {sublink.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* 로그인/로그아웃 버튼 (데스크톱) */}
          <div className="ml-[1vw]">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="hover:opacity-80 transition-opacity relative"
                // 버튼 크기 vh/vw 적용
                style={{ width: '6vw', height: '4vh', minWidth: '60px' }}
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
                className="hover:opacity-80 transition-opacity relative block"
                style={{ width: '6vw', height: '4vh', minWidth: '60px' }}
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
        </div>

        {/* 3. 모바일 메뉴 버튼 (lg 미만에서 보임) */}
        <button
          className="lg:hidden flex items-center justify-center p-[1vh]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴 열기"
        >
          <svg
            className="w-[3vh] h-[3vh]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* 4. 모바일 메뉴 드롭다운 */}
      {isMobileMenuOpen && (
        // 높이 계산 시 px 제거하고 vh 사용 (100vh - 헤더높이10vh)
        <div className="lg:hidden absolute top-[10vh] left-0 w-full bg-white border-t border-gray-200 shadow-xl overflow-y-auto max-h-[90vh]">
          <div className="container mx-auto px-[4vw] py-[3vh] space-y-[2vh]">
            {navLinks.map((link) => (
              <div key={link.title} className="border-b border-gray-100 pb-[1.5vh] last:border-0">
                <Link
                  href={link.href}
                  className="block font-bold text-gray-800 mb-[1vh] hover:text-blue-600"
                  style={{ fontSize: '2vh' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
                <div className="pl-[4vw] space-y-[1vh] border-l-2 border-gray-100 ml-[0.5vw]">
                  {link.sublinks.map((sublink) => (
                    <Link
                      key={sublink.title}
                      href={sublink.href}
                      className="block text-gray-600 hover:text-blue-500 py-[0.5vh]"
                      style={{ fontSize: '1.6vh' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      - {sublink.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            {/* 모바일 로그인/로그아웃 */}
            <div className="pt-[2vh] flex justify-center">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative w-[12vh] h-[5vh]"
                  aria-label="로그아웃"
                >
                  <Image src="/main/logout.svg" alt="로그아웃" fill className="object-contain" />
                </button>
              ) : (
                <Link
                  href="/login"
                  className="relative w-[12vh] h-[5vh]"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="로그인"
                >
                  <Image src="/main/loginbutton.svg" alt="로그인" fill className="object-contain" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}