// app/about/_components/NoticeContent.tsx

'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';

interface Notice {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
}

const allNoticeData: Notice[] = [
  { id: 11, title: '오픈소스 컨트리뷰톤 참가자 모집', author: '관리자', date: '2025-10-05', views: 150 },
  { id: 10, title: '동계 방학 특별 세미나 안내', author: '손준영', date: '2025-09-30', views: 220 },
  { id: 9, title: '연구실 서버 점검 공지 (10/10)', author: '관리자', date: '2025-09-28', views: 180 },
  { id: 8, title: '국제 정보보호 컨퍼런스 참가 후기', author: '김석사', date: '2025-09-25', views: 350 },
  { id: 7, title: '학부 연구생 추가 모집', author: '김호원', date: '2025-09-20', views: 512 },
  { id: 6, title: '연구실 비품 구매 목록 조사', author: '관리자', date: '2025-09-15', views: 98 },
  { id: 5, title: '2026년도 국가 연구 과제 공모', author: '김호원', date: '2025-09-11', views: 630 },
  { id: 1, title: '연구실 홈페이지 리뉴얼 오픈', author: '관리자', date: '2025-09-08', views: 123 },
  { id: 2, title: '2025년 하반기 신입생 모집 안내', author: '김호원', date: '2025-09-05', views: 456 },
  { id: 3, title: 'AI 보안 관련 국제 학회 논문 채택', author: '이박사', date: '2025-08-22', views: 789 },
  { id: 4, title: '연구실 워크샵 일정 공지', author: '관리자', date: '2025-08-15', views: 321 },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 최신순 정렬

const ITEMS_PER_PAGE = 10;

export default function NoticeContent() {
  const [currentSearchTerm, setCurrentSearchTerm] = useState(''); // input에 입력된 값
  const [currentSearchType, setCurrentSearchType] = useState('title'); // select에 선택된 값
  const [appliedSearchTerm, setAppliedSearchTerm] = useState(''); // 검색 버튼 눌러서 적용된 값
  const [appliedSearchType, setAppliedSearchType] = useState('title'); // 검색 버튼 눌러서 적용된 타입

  const [currentPage, setCurrentPage] = useState(1);

  // 검색 버튼이 눌렸을 때 필터링
  const filteredItems = useMemo(() => {
    if (!appliedSearchTerm) {
      return allNoticeData;
    }
    return allNoticeData.filter(item => {
      if (appliedSearchType === 'title') {
        return item.title.toLowerCase().includes(appliedSearchTerm.toLowerCase());
      }
      if (appliedSearchType === 'date') {
        return item.date === appliedSearchTerm;
      }
      return true;
    });
  }, [appliedSearchTerm, appliedSearchType]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  // 검색 버튼 클릭 핸들러
  const handleSearch = () => {
    setAppliedSearchTerm(currentSearchTerm);
    setAppliedSearchType(currentSearchType);
    setCurrentPage(1); // 검색 시 1페이지로 이동
  };

  // 초기화 버튼 클릭 핸들러
  const handleReset = () => {
    setCurrentSearchTerm('');
    setCurrentSearchType('title');
    setAppliedSearchTerm('');
    setAppliedSearchType('title');
    setCurrentPage(1); // 초기화 시 1페이지로 이동
  };

  // 검색 타입 변경 시 input 초기화
  useEffect(() => {
    setCurrentSearchTerm('');
  }, [currentSearchType]);

  // totalPages가 0일 때 currentPage가 1이 아니면 1로 설정 (검색 결과 없을 때 대비)
  useEffect(() => {
    if (totalPages === 0 && currentPage !== 1) {
      setCurrentPage(1);
    } else if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);


  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* === 제목 === */}
        <div className="border-b-2 border-gray-300 pb-4 mb-8">
          <h2 className="text-3xl text-black font-bold inline-block border-b-4 border-blue-800 pb-2">공지사항</h2>
        </div>
        
        {/* === 검색 및 필터 UI === */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-8 p-4 bg-gray-20 border rounded-lg shadow-sm">
          {/* 날짜 선택 (input type="date") */}
          <div className="flex-shrink-0">
            <input 
              type="date" 
              className="p-2 border rounded-md w-full sm:w-auto"
              value={currentSearchType === 'date' ? currentSearchTerm : ''}
              onChange={(e) => {
                setCurrentSearchTerm(e.target.value);
                setCurrentSearchType('date');
              }}
            />
          </div>

          {/* 구분선 (시안에 없지만 시각적으로 분리) */}
          {/* <div className="border-l border-gray-300 mx-2 h-full hidden sm:block"></div> */}

          {/* 검색어 입력 필드 */}
          <div className="relative flex-grow">
            <select 
              value={currentSearchType} 
              onChange={(e) => setCurrentSearchType(e.target.value)}
              className="absolute left-0 top-0 bottom-0 px-3 border-r rounded-l-md bg-gray-200 text-gray-700 outline-none z-10"
            >
              <option value="title">제목</option>
              <option value="author">작성자</option> {/* 작성자 검색 추가 */}
            </select>
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={currentSearchType !== 'date' ? currentSearchTerm : ''}
              onChange={(e) => setCurrentSearchTerm(e.target.value)}
              className="pl-24 pr-2 py-2 border rounded-md w-full outline-none" // select 공간 확보
            />
          </div>

          {/* 초기화 버튼 */}
          <button 
            onClick={handleReset} 
            className="flex-shrink-0 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
          >
            초기화
          </button>

          {/* 검색 버튼 */}
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
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600">제목</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600 w-24">작성자</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600 w-28">등록일자</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600 w-20">조회</th>
              </tr>
            </thead>
            <tbody>
              {paginatedItems.length > 0 ? (
                paginatedItems.map((item, index) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
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
                  <td colSpan={5} className="text-center py-10 text-gray-500 text-lg">
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