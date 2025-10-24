// app/about/_components/NoticeContent.tsx

'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NoticeDetail from './NoticeDetail';
import NoticeWrite from './NoticeWrite';
import NoticeEdit from './NoticeEdit';
import { noticeApi } from '../../../lib/api';

interface Notice {
  id: number;
  title: string;
  author: string;
  created_at: string;
  view_count: number;
}


const ITEMS_PER_PAGE = 10;

export default function NoticeContent() {
  const router = useRouter(); // useRouter 훅 사용
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  const [currentSearchType, setCurrentSearchType] = useState('title');
  const [appliedSearchTerm, setAppliedSearchTerm] = useState('');
  const [appliedSearchType, setAppliedSearchType] = useState('title');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [isWriting, setIsWriting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  // API에서 공지사항 목록 가져오기
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        const response = await noticeApi.getNotices();
        setNotices(response.data.notices || []);
      } catch (error) {
        console.error('공지사항을 불러오는데 실패했습니다:', error);
        setNotices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  // '작성자' 검색 기능 추가
  const filteredItems = useMemo(() => {
    if (!appliedSearchTerm) {
      return notices;
    }
    return notices.filter(item => {
      if (appliedSearchType === 'title') {
        return item.title.toLowerCase().includes(appliedSearchTerm.toLowerCase());
      }
      if (appliedSearchType === 'author') {
        return item.author.toLowerCase().includes(appliedSearchTerm.toLowerCase());
      }
      if (appliedSearchType === 'date') {
        return item.created_at === appliedSearchTerm;
      }
      return true;
    });
  }, [notices, appliedSearchTerm, appliedSearchType]);

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

  // 글쓰기 상태면 NoticeWrite 컴포넌트 렌더링
  if (isWriting) {
    return (
      <NoticeWrite 
        onBack={() => setIsWriting(false)}
        onSave={async (newNotice) => {
          try {
            const token = localStorage.getItem('token');
            if (!token) {
              alert('로그인이 필요합니다.');
              return;
            }
            
            await noticeApi.createNotice(newNotice, token);
            setIsWriting(false);
            
            // 목록 새로고침
            const response = await noticeApi.getNotices();
            setNotices(response.data.notices || []);
          } catch (error) {
            console.error('공지사항 작성 실패:', error);
          }
        }}
      />
    );
  }

  // 수정 상태면 NoticeEdit 컴포넌트 렌더링
  if (isEditing && selectedNotice) {
    return (
      <NoticeEdit 
        notice={selectedNotice}
        onBack={() => setIsEditing(false)}
        onSave={async () => {
          // 목록 새로고침
          try {
            const response = await noticeApi.getNotices();
            setNotices(response.data.notices || []);
            // 수정 완료 후 상세보기 상태도 초기화
            setSelectedNotice(null);
          } catch (error) {
            console.error('목록 새로고침 실패:', error);
          }
        }}
      />
    );
  }

  // 상세 보기 상태면 NoticeDetail 컴포넌트 렌더링
  if (selectedNotice) {
    return (
      <NoticeDetail 
        notice={selectedNotice} 
        onBack={async () => {
          setSelectedNotice(null);
          // 목록 새로고침으로 업데이트된 조회수 반영
          try {
            const response = await noticeApi.getNotices();
            setNotices(response.data.notices || []);
          } catch (error) {
            console.error('목록 새로고침 실패:', error);
          }
        }}
        onEdit={() => setIsEditing(true)}
        onDelete={async () => {
          // 목록 새로고침
          try {
            const response = await noticeApi.getNotices();
            setNotices(response.data.notices || []);
          } catch (error) {
            console.error('목록 새로고침 실패:', error);
          }
        }}
      />
    );
  }

  if (loading) {
    return (
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-lg">로딩 중...</div>
        </div>
      </div>
    );
  }

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
          <button
            onClick={() => setIsWriting(true)}
            className="flex-shrink-0 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            글쓰기
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
                    onClick={async () => {
                      // 클릭 시 즉시 상세 조회 API 호출
                      try {
                        const response = await noticeApi.getNotice(item.id);
                        setSelectedNotice(response.data);
                      } catch (error) {
                        console.error('상세 조회 실패:', error);
                        setSelectedNotice(item);
                      }
                    }}
                  >
                    <td className="py-3 px-4 text-center text-sm text-gray-700">
                      {filteredItems.length - ((currentPage - 1) * ITEMS_PER_PAGE) - index}
                    </td>
                    <td className="py-3 px-4 text-left text-sm text-gray-700">{item.title}</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-700">{item.author}</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-700">
                      {new Date(item.created_at).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      }).replace(/\./g, '-').replace(/\s/g, '').replace(/-$/, '')}
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-gray-700">{item.view_count}</td>
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