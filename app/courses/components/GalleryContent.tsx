'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import GalleryWrite from './GalleryWrite';
import { postApi } from '../../../lib/api';

interface Post {
  id: number;
  caption: string;
  description: string;
  images: string[];
  created_at: string;
}

interface GalleryImage {
  imageUrl: string;
  caption: string;
  date: string;
  postId: number;
}

const ITEMS_PER_PAGE = 6;

export default function GalleryContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [galleryData, setGalleryData] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // 갤러리 데이터 로드
  const loadGalleryData = async () => {
    try {
      setIsLoading(true);
      const response = await postApi.getPosts(0, 100); // 충분한 수의 포스트 가져오기
      const posts: Post[] = response.data;
      
      // 각 포스트의 첫 번째 이미지를 사용하여 갤러리 아이템 생성
      const galleryItems: GalleryImage[] = posts
        .filter(post => post.images && post.images.length > 0)
        .map(post => ({
          imageUrl: post.images[0], // 첫 번째 이미지 사용
          caption: post.caption || '',
          date: post.created_at ? new Date(post.created_at).toISOString().split('T')[0] : '',
          postId: post.id
        }));
      
      setGalleryData(galleryItems);
    } catch (error) {
      console.error('갤러리 데이터 로드 실패:', error);
      setGalleryData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadGalleryData();
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
        onSave={async () => {
          // 업로드 완료 후 갤러리 목록 새로고침
          await loadGalleryData();
          setIsUploading(false);
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
              <button className="h-full px-3 sm:px-5 bg-blue-800 hover:bg-blue-700 transition-colors text-white whitespace-nowrap text-sm sm:text-base flex-shrink-0">
                검색
              </button>
            </div>

            {/* 업로드 버튼 (로그인 시에만 표시) */}
            {isLoggedIn && (
              <button 
                onClick={handleUpload}
                className="h-10 px-4 sm:px-6 bg-blue-800 text-white rounded hover:bg-blue-700 transition-colors font-medium whitespace-nowrap text-sm sm:text-base flex-shrink-0"
              >
                업로드
              </button>
            )}
          </div>
        </div>

        {/* --- 갤러리 그리드 --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {isLoading ? (
            <div className="col-span-full py-20 text-center text-gray-500 font-medium">
              로딩 중...
            </div>
          ) : paginatedImages.length > 0 ? (
            paginatedImages.map((item, index) => (
              <div key={`${item.postId}-${index}`} className="bg-white overflow-hidden border transition-transform duration-300 hover:shadow-lg">
                <div className="relative w-full aspect-video">
                  <Image
                    src={item.imageUrl}
                    alt={item.caption}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={item.imageUrl.startsWith('http') || item.imageUrl.startsWith('/api')}
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
              {searchTerm ? '검색 결과가 없습니다.' : '갤러리가 비어있습니다.'}
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