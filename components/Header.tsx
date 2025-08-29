'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
        
      ],
    },
  ];

  return (
    <header className="bg-transparent relative z-10">
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
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href={link.href} className="text-gray-800 hover:text-blue-600 focus:outline-none flex items-center">
                {link.title}
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === link.title ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              
              {openDropdown === link.title && (
                <div className="absolute left-0 top-full mt-1 w-auto bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10">
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
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}