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

  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'token') {
        setIsLoggedIn(!!e.newValue);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const loadGalleryData = async () => {
    try {
      setIsLoading(true);
      const response = await postApi.getPosts(0, 50);
      const posts: Post[] = response.data;

      const apiItems: GalleryImage[] = posts
        .filter((post) => post.images && post.images.length > 0)
        .map((post) => ({
          imageUrl: post.images[0],
          caption: post.caption || '',
          date: post.created_at ? new Date(post.created_at).toISOString().split('T')[0] : '',
          postId: post.id,
        }));

      setGalleryData(apiItems);
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

  const handleDelete = async () => {
    if (deleteId === null) return;
    
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('로그인이 필요합니다.');
        setDeleteId(null);
        return;
      }

      await postApi.deletePost(deleteId, token);
      alert('삭제되었습니다.');
      setDeleteId(null);
      loadGalleryData();
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('삭제에 실패했습니다.');
      setDeleteId(null);
    }
  };

  const filteredImages = galleryData.filter((item) =>
    item.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedImages = filteredImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (isUploading) {
    return (
      <GalleryWrite
        onBack={() => setIsUploading(false)}
        onSave={async () => {
          await loadGalleryData();
          setIsUploading(false);
        }}
      />
    );
  }

  return (
    <div className="py-8 relative">
      {/* --- 삭제 확인 모달 (배경 딤 처리 강화: 모달만 떠 보이도록) --- */}
      {deleteId !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4 border border-gray-100">
            <h3 className="text-lg font-bold mb-2 text-gray-900">삭제 확인</h3>
            <p className="text-gray-600 mb-6">정말로 이 사진을 삭제하시겠습니까?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
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

        <div className="flex justify-end mt-4">
          <div className="flex items-center gap-2 border border-black rounded-md p-1.5 bg-white shadow-sm">
            <div className="flex items-center bg-gray-50 rounded h-10 w-full max-w-[250px] sm:max-w-sm border border-gray-200">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="py-2 px-3 outline-none text-black w-full h-full text-sm bg-transparent"
              />
              <button className="flex-shrink-0 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors">
                검색
              </button>
            </div>
            {isLoggedIn && (
              <button
                onClick={() => setIsUploading(true)}
                className="flex-shrink-0 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                업로드
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {isLoading ? (
            <div className="col-span-full py-20 text-center text-gray-500">로딩 중...</div>
          ) : paginatedImages.length > 0 ? (
            paginatedImages.map((item) => (
              <div
                key={item.postId}
                className="group relative bg-white overflow-hidden border transition-all duration-300 hover:shadow-lg"
              >
                {isLoggedIn && (
                  <button
                    onClick={() => setDeleteId(item.postId)}
                    className="absolute top-3 right-3 z-20 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-md"
                    title="삭제"
                  >
                    ✕
                  </button>
                )}

                <div className="relative w-full aspect-video">
                  <Image
                    src={item.imageUrl}
                    alt={item.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={true}
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-gray-700 truncate">{item.caption}</p>
                  <p className="text-xs text-gray-500 pt-3">{item.date}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">데이터가 없습니다.</div>
          )}
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white rounded-md disabled:opacity-30 text-gray-800 border shadow-sm"
          >
            &lt;
          </button>
          <span className="font-semibold text-gray-800">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white rounded-md disabled:opacity-30 text-gray-800 border shadow-sm"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
