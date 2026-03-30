'use client';

import React from 'react';
import { classNoticeApi } from '../../../lib/api';

interface NoticeFile {
  id?: number;
  original_name: string;
  file_url: string;
  file_size?: number;
}

interface Notice {
  id: number;
  title: string;
  author: string;
  created_at: string;
  view_count: number;
  content?: string;
  files?: NoticeFile[];
}

interface ClassNoticeDetailProps {
  notice: Notice;
  onBack: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}

export default function ClassNoticeDetail({
  notice,
  onBack,
  onDelete,
  onEdit,
}: ClassNoticeDetailProps) {
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

      await classNoticeApi.deleteNotice(noticeData.id, token);
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
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="border-b border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{noticeData.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="font-medium mr-2">작성자:</span>
                <span>{noticeData.author}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">등록일:</span>
                <span>
                  {new Date(noticeData.created_at)
                    .toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    })
                    .replace(/\./g, '-')
                    .replace(/\s/g, '')
                    .replace(/-$/, '')}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">조회수:</span>
                <span>{noticeData.view_count}</span>
              </div>
            </div>
          </div>

          <div className="p-6 border-b border-gray-200">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: noticeData.content || '내용이 없습니다.' }}
            />
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">첨부파일</h3>

            {(noticeData.files?.length || 0) > 0 ? (
              <div className="space-y-2">
                {noticeData.files?.map((file, index) => (
                  <div
                    key={`${file.original_name}-${index}`}
                    className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-md bg-gray-50"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">
                        {file.original_name}
                      </p>
                      {file.file_size && (
                        <p className="text-xs text-gray-500">
                          {(file.file_size / 1024).toFixed(1)} KB
                        </p>
                      )}
                    </div>

                    <a
                      href={file.file_url}
                      download={file.original_name}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                    >
                      다운로드
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-4 py-6 border border-dashed border-gray-300 rounded-md text-sm text-gray-400">
                첨부파일이 없습니다.
              </div>
            )}
          </div>
        </div>

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