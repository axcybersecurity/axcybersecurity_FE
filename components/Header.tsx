// components/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    // shadow-md: 그림자 효과, bg-white: 배경색 흰색
    <header className="bg-white shadow-md">
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
        <div className="flex space-x-8 items-center">
          <Link href="/graduate" className="hover:text-blue-500" style={{ color: '#282828' }}>
            대학원 진학
          </Link>
          <Link href="/about" className="hover:text-blue-500" style={{ color: '#282828' }}>
            연구실 소개
          </Link>
          <Link href="/research" className="hover:text-blue-500" style={{ color: '#282828' }}>
            연구 실적
          </Link>
          <Link href="/courses" className="hover:text-blue-500" style={{ color: '#282828' }}>
            수업 강의
          </Link>
        </div>
      </nav>
    </header>
  );
}