'use client';

import React from 'react';
import { noticeApi } from '../../../lib/api';

interface Notice {
  id: number;
  title: string;
  author: string;
  created_at: string;
  view_count: number;
  content?: string;
}

interface NoticeDetailProps {
  notice: Notice;
  onBack: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}

export default function NoticeDetail({ notice, onBack, onDelete, onEdit }: NoticeDetailProps) {
  // 이미 API에서 받은 완전한 데이터를 사용
  const noticeData = notice;
  const handleDelete = async () => {
    if (!confirm('정말로 이 공지사항을 삭제하시겠습니까?')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('로그인이 필요합니다.');
        return;
      }

      await noticeApi.deleteNotice(noticeData.id, token);
      alert('공지사항이 삭제되었습니다.');
      onBack();
      if (onDelete) onDelete();
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('삭제에 실패했습니다.');
    }
  };
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* 공지사항 상세 */}
        <div className="bg-white rounded-lg shadow-sm border">
          {/* 헤더 */}
          <div className="border-b border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {noticeData.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="font-medium mr-2">작성자:</span>
                <span>{noticeData.author}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">등록일:</span>
                <span>{new Date(noticeData.created_at).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                }).replace(/\./g, '-').replace(/\s/g, '').replace(/-$/, '')}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">조회수:</span>
                <span>{noticeData.view_count}</span>
              </div>
            </div>
          </div>

          {/* 내용 */}
          <div className="p-6">
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: noticeData.content || '내용이 없습니다.' }}
            />
          </div>
        </div>

        {/* 하단 버튼들 */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={onBack}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            목록으로
          </button>
          
          <div className="flex gap-3">
            <button
              onClick={() => {
                if (onEdit) onEdit();
              }}
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              수정
            </button>
              <button
                onClick={handleDelete}
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                삭제
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
