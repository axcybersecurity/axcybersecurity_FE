'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import GalleryWrite from './GalleryWrite';

interface GalleryImage {
  imageUrl: string;
  caption: string;
  date: string;
}

const galleryData: GalleryImage[] = [
  { imageUrl: '/gallery/photo1.jpg', caption: '2025년 워크샵 단체 사진', date: '2025-07-07' },
];

const ITEMS_PER_PAGE = 6;

export default function GalleryContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 상태 확인
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // 로그인 상태 변경 감지 (다른 탭에서 로그인/로그아웃 시)
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'token') {
        setIsLoggedIn(!!e.newValue);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const filteredImages = galleryData.filter(item =>
    item.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedImages = filteredImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleUpload = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }
    setIsUploading(true);
  };

  // --- 업로드 모드(GalleryWrite) 렌더링 ---
  if (isUploading) {
    return (
      <GalleryWrite 
        onBack={() => setIsUploading(false)}
        onSave={async (newGallery) => {
          try {
            // 실제 API 연동 시 이 부분에서 데이터를 처리합니다.
            console.log('새 갤러리 데이터:', newGallery);
            setIsUploading(false);
            alert('업로드 완료 (백엔드 연동 필요)');
          } catch (error) {
            console.error('업로드 실패:', error);
          }
        }}
      />
    );
  }

  // --- 기본 목록 모드 렌더링 ---
  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        {/* --- 제목 --- */}
        <div className="mb-8">
          <h2
            style={{
              fontFamily: 'Pretendard',
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: '48px',
              color: '#02162E',
              marginBottom: '24px',
            }}
          >
            갤러리
          </h2>
          <div className="flex items-center">
            <div className="w-35 border-t-[3px] border-blue-800" />
            <div className="flex-1 border-t border-gray-300" />
          </div>
        </div>

        {/* --- 검색창 및 업로드 버튼 영역 --- */}
        <div className="flex justify-end mt-4">
          <div className="flex items-center gap-2 sm:gap-4 border border-black rounded-md p-1.5 bg-white shadow-sm">
            
            {/* 검색 입력 영역 (높이를 h-10으로 통일) */}
            <div className="flex items-center bg-gray-50 rounded h-10 w-full max-w-[250px] sm:max-w-sm border border-gray-200">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="py-2 px-3 sm:px-4 outline-none text-black w-full h-full text-sm sm:text-base min-w-0 bg-transparent"
              />
              <button className="flex-shrink-0 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors">
                검색
              </button>
            </div>

            {/* 업로드 버튼 (로그인 시에만 표시) */}
            {isLoggedIn && (
              <button 
                onClick={handleUpload}
                className="flex-shrink-0 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                업로드
              </button>
            )}
          </div>
        </div>

        {/* --- 갤러리 그리드 --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {paginatedImages.length > 0 ? (
            paginatedImages.map((item, index) => (
              <div key={index} className="bg-white overflow-hidden border transition-transform duration-300 hover:shadow-lg">
                <div className="relative w-full aspect-video">
                  <Image
                    src={item.imageUrl}
                    alt={item.caption}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-gray-700 truncate">{item.caption}</p>
                  <p className="text-xs text-gray-500 pt-3">{item.date}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500 font-medium">
              검색 결과가 없습니다.
            </div>
          )}

          {/* 빈 공간 유지용 플레이스홀더 */}
          {Array.from({ length: Math.max(0, ITEMS_PER_PAGE - paginatedImages.length) }).map((_, index) => (
            <div key={`placeholder-${index}`} className="hidden lg:block h-[1px]" />
          ))}
        </div>

        {/* --- 페이지네이션 바 --- */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white rounded-md disabled:opacity-30 text-gray-800 border hover:bg-gray-50 transition-colors shadow-sm"
          >
            &lt;
          </button>
          <span className="font-semibold text-gray-800">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white rounded-md disabled:opacity-30 text-gray-800 border hover:bg-gray-50 transition-colors shadow-sm"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}