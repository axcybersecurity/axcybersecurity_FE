// app/about/_components/NoticeContent.tsx

'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // 상세 페이지 이동을 위해 추가

interface Notice {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
}

const allNoticeData: Notice[] = [
  { id: 11, title: '오픈소스 컨트리뷰톤 참가자 모집', author: '관리자', date: '2025-10-05', views: 150 },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const ITEMS_PER_PAGE = 10;

export default function NoticeContent() {
  const router = useRouter(); // useRouter 훅 사용
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  const [currentSearchType, setCurrentSearchType] = useState('title');
  const [appliedSearchTerm, setAppliedSearchTerm] = useState('');
  const [appliedSearchType, setAppliedSearchType] = useState('title');
  const [currentPage, setCurrentPage] = useState(1);

  // '작성자' 검색 기능 추가
  const filteredItems = useMemo(() => {
    if (!appliedSearchTerm) {
      return allNoticeData;
    }
    return allNoticeData.filter(item => {
      if (appliedSearchType === 'title') {
        return item.title.toLowerCase().includes(appliedSearchTerm.toLowerCase());
      }
      if (appliedSearchType === 'author') {
        return item.author.toLowerCase().includes(appliedSearchTerm.toLowerCase());
      }
      if (appliedSearchType === 'date') {
        return item.date === appliedSearchTerm;
      }
      return true;
    });
  }, [appliedSearchTerm, appliedSearchType]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const handleSearch = () => {
    setAppliedSearchTerm(currentSearchTerm);
    setAppliedSearchType(currentSearchType);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setCurrentSearchTerm('');
    setCurrentSearchType('title');
    setAppliedSearchTerm('');
    setAppliedSearchType('title');
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentSearchTerm('');
  }, [currentSearchType]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* === 제목 === */}
        <div className="mb-8">
          <h2 className="text-4xl font-semibold text-[#02162E] mb-6">
            공지사항
          </h2>
          <div className="flex items-center">
            <div className="w-44 border-t-[3px] border-blue-800" />
            <div className="flex-1 border-t border-gray-300" />
          </div>
        </div>
        
        {/* === 검색 및 필터 UI === */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-8 p-4 bg-gray-50 border rounded-lg shadow-sm">
          <div className="flex-shrink-0">
            <input 
              type="date" 
              className="p-2 border rounded-md w-full sm:w-auto text-gray-700"
              value={currentSearchType === 'date' ? currentSearchTerm : ''}
              onChange={(e) => {
                setCurrentSearchTerm(e.target.value);
                setCurrentSearchType('date');
              }}
            />
          </div>
          <div className="relative flex-grow">
            <select 
              value={currentSearchType} 
              onChange={(e) => setCurrentSearchType(e.target.value)}
              className="absolute left-0 top-0 bottom-0 px-3 border-r rounded-l-md bg-gray-200 text-gray-700 outline-none z-10"
            >
              <option value="title">제목</option>
              <option value="author">작성자</option>
            </select>
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={currentSearchType !== 'date' ? currentSearchTerm : ''}
              onChange={(e) => setCurrentSearchTerm(e.target.value)}
              className="pl-24 pr-2 py-2 border rounded-md w-full outline-none"
            />
          </div>
          <button 
            onClick={handleReset} 
            className="flex-shrink-0 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
          >
            초기화
          </button>
          <button 
            onClick={handleSearch} 
            className="flex-shrink-0 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition"
          >
            검색
          </button>
        </div>

        {/* === 공지사항 테이블 === */}
        <div className="overflow-x-auto border-t border-gray-200 mt-6">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600 w-16">번호</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">제목</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600 w-24">작성자</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600 w-28">등록일자</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600 w-20">조회</th>
              </tr>
            </thead>
            <tbody>
              {paginatedItems.length > 0 ? (
                paginatedItems.map((item, index) => (
                  <tr 
                    key={item.id} 
                    className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                    onClick={() => router.push(`/notice/${item.id}`)}
                  >
                    <td className="py-3 px-4 text-center text-sm text-gray-700">
                      {filteredItems.length - ((currentPage - 1) * ITEMS_PER_PAGE) - index}
                    </td>
                    <td className="py-3 px-4 text-left text-sm text-gray-700">{item.title}</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-700">{item.author}</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-700">{item.date}</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-700">{item.views}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-16 text-gray-500 text-lg">
                    게시글이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* === 페이지네이션 === */}
        {totalPages > 0 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white rounded-md disabled:opacity-50 text-gray-800 border"
            >
              &lt;
            </button>
            <span className="font-semibold text-gray-700">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white rounded-md disabled:opacity-50 text-gray-800 border"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}