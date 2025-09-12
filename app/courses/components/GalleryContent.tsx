'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  imageUrl: string;
  caption: string;
  date: string;
}

const galleryData: GalleryImage[] = [
  { imageUrl: '/gallery/photo1.jpg', caption: '2025년 워크샵 단체 사진', date: '2025-07-07'},
];

const ITEMS_PER_PAGE = 6;

export default function GalleryContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredImages = galleryData.filter(item =>
    item.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedImages = filteredImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        {/* --- 제목과 검색창 --- */}
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
          {/* --- 검색창 영역 --- */}
          <div className="flex justify-end mt-4"> 
            <div className="flex items-center border-2 rounded-md max-w-sm">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="py-2 px-4 outline-none text-black w-75"
              />
              <button className="p-2 bg-blue-800 hover:bg-blue-700">
                <p className="text-white pr-2 pl-2">검색</p>
              </button>
            </div>
          </div>

        {/* --- 갤러리 그리드(3열) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
          {paginatedImages.map((item, index) => (
            <div key={index} className="bg-white overflow-hidden border transition-transform duration-300">
              <div className="relative w-full aspect-video">
                <Image
                  src={item.imageUrl}
                  alt={item.caption}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-700">{item.caption}</p>
                <p className="text-xs text-gray-700 pt-3">{item.date}</p>
              </div>
            </div>
          ))}
    
          {Array.from({ length: Math.max(0, ITEMS_PER_PAGE - paginatedImages.length) }).map((_, index) => (
            <div key={`placeholder-${index}`} className="hidden lg:block" />
          ))}
        </div>

        {/* --- 페이지네이션 바 --- */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white rounded-md disabled:opacity-50 text-gray-800 border"
          >
            &lt;
          </button>
          <span className="font-semibold text-gray-800">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white rounded-md disabled:opacity-50 text-gray-800 border"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};