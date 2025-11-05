'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false); // 모바일 메뉴 토글
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일에서 다른 링크 클릭 시 메뉴 닫힘
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

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
        { title: '연구실', href: '/about?tabmain' },
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
        { title: '공지사항', href: '/about?tab=notice' },
        { title: '갤러리', href: '/about?tab=gallery' },
        { title: '강의자료', href: '/about?tab=gallery' },
      ],
    },
  ];

  const headerClasses =
    isHomePage && !isScrolled ? 'bg-transparent text-black' : 'bg-white text-gray-800 shadow-md';

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${headerClasses}`}>
      <nav className="container mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center">
          <Image
            src="/메인로고.png" // 이미지 경로 변경 원치 않아 그대로 둠
            alt="메인로고"
            width={250}
            height={50}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(link.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href={link.href} className="hover:text-blue-600 focus:outline-none flex items-center">
                {link.title}
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    openDropdown === link.title ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>

              {/* 데스크탑 드롭다운 */}
              {openDropdown === link.title && link.sublinks.length > 0 && (
                <div className="absolute left-0 top-full mt-1 min-w-[10rem] bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10">
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
              )}
            </div>
          ))}
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5 transition"
          aria-label="모바일 메뉴 열기"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {/* 아이콘: 열기/닫기 */}
          {mobileOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* 모바일 드롭다운 메뉴 (컴팩트, 화면 깨짐 방지용) */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => {
              const opened = openDropdown === link.title;
              return (
                <div key={link.title} className="border-b last:border-b-0 border-gray-100 pb-2">
                  {/* 상위 링크 + 아코디언 토글 */}
                  <div className="flex items-center justify-between">
                    <Link href={link.href} className="py-2 text-base" onClick={() => setMobileOpen(false)}>
                      {link.title}
                    </Link>
                    {link.sublinks.length > 0 && (
                      <button
                        className="p-2 -mr-2"
                        aria-label={`${link.title} 하위메뉴`}
                        onClick={() => setOpenDropdown(opened ? null : link.title)}
                      >
                        <svg
                          className={`h-5 w-5 transition-transform ${opened ? 'rotate-180' : ''}`}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* 하위 메뉴 (아코디언) */}
                  {opened && link.sublinks.length > 0 && (
                    <div className="mt-1 pl-2 space-y-1">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.title}
                          href={sublink.href}
                          className="block py-1.5 text-sm text-gray-700"
                          onClick={() => {
                            setMobileOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {sublink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
