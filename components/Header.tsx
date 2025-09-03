'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'; // 추가

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // 스크롤 상태를 감지하기 위한 코드 추가
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
      sublinks: [
        { title: '2025-학부', href: '/courses?tab=undergraduate' },
        { title: '2025-대학원', href: '/courses?tab=graduate' },
      ],
    },
  ];

  // 동적 클래스 변수 추가
  const headerBgClass = isScrolled || !isHomePage ? 'bg-white shadow-md' : 'bg-transparent';
  const textColorClass = isScrolled || !isHomePage ? 'text-gray-800' : 'text-white';

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${headerBgClass}`}>
      <nav className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* 왼쪽 로고 */}
        <div className="pt-8">
          <Link href="/">
            <Image 
              src="/메인로고.png" 
              alt="PNU InfoSec 로고" 
              width={250}
              height={100}
            />
          </Link>
        </div>

        {/* 오른쪽 메뉴 */}
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className="relative group"
            >
              <Link href={link.href} className={`flex items-center hover:text-blue-600 focus:outline-none ${textColorClass}`}>
                {link.title}
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform group-hover:rotate-180`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              
              <div className="absolute left-0 top-full mt-1 w-auto bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
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
          ))}
        </div>
      </nav>
    </header>
  );
}