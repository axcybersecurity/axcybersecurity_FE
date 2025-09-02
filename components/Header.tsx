'use client';

import Link from 'next/link';
// useState는 드롭다운 메뉴에 더 이상 필요하지 않습니다.
// import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  // const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  
  // 메인페이지(/)인지 확인
  const isHomePage = pathname === '/';

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
        { title: '교수진', href: '/about?tab=professors' },
        { title: '구성원', href: '/about?tab=members' },
        { title: '졸업생', href: '/about?tab=graduated' },
        { title: '공지사항', href: '/about?tab=notice' },
        { title: '갤러리', href: '/about?tab=gallery' },
        { title: '새소식', href: '/about?tab=news' },
      ],
    },
    {
      title: '연구 실적',
      href: '/research',
      sublinks: [
        { title: '연구주제', href: '/research?tab=topics' },
        { title: '연구실적', href: '/research?tab=results' },
      ],
    },
    {
      title: '수업 강의',
      href: '/courses',
      sublinks: [ { title: '2025-학부', href: '/courses?tab=undergraduate' },
        { title: '2025-대학원', href: '/courses?tab=graduate' },],
    },
  ];

  return (
    <header 
      className={`bg-transparent ${
        isHomePage 
          ? 'absolute inset-x-0 top-0 z-20' 
          : 'relative z-10'
      }`}
    >
      {/* container: 내용물의 최대 너비를 제한
        mx-auto: 가운데 정렬
        px-6: 좌우 패딩(여백) 
        h-20: 높이 지정 (80px)
        flex: 내부 요소들을 가로로 배치
        justify-between: 요소들 사이에 공간을 균등하게 배분 (로고는 왼쪽, 메뉴는 오른쪽)
        items-center: 요소들을 세로축 가운데로 정렬
      */}
      <nav className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* 왼쪽 로고 */}
        <div>
          <Link href="/" className="text-xl font-bold" style={{ color: '#282828' }}>
            PNU InfoSec
          </Link>
        </div>

        {/* 오른쪽 메뉴 */}
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className="relative group"
            >
              <Link href={link.href} className="text-gray-800 hover:text-blue-600 focus:outline-none flex items-center">
                {link.title}
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform group-hover:rotate-180`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              
              <div className="absolute left-0 top-full mt-1 w-auto bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
                {link.sublinks.map((sublink) => (
                  <Link
                    key={sublink.title}
                    href={sublink.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {sublink.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}