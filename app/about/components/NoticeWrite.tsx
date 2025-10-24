'use client';

import React, { useState } from 'react';

interface NoticeWriteProps {
  onBack: () => void;
  onSave?: (notice: { title: string; content: string }) => void;
}

export default function NoticeWrite({ onBack, onSave }: NoticeWriteProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    if (onSave) {
      onSave({ title: title.trim(), content: content.trim() });
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 제목 */}
        <div className="mb-8">
          <h2 className="text-4xl font-semibold text-[#02162E] mb-6">
            공지사항 작성
          </h2>
          <div className="flex items-center">
            <div className="w-44 border-t-[3px] border-blue-800" />
            <div className="flex-1 border-t border-gray-300" />
          </div>
        </div>

        {/* 글쓰기 폼 */}
        <div className="bg-white rounded-lg shadow-sm border">
          {/* 제목 입력 */}
          <div className="border-b border-gray-200 p-6">
            <label className="block mb-2">
              <span className="text-lg font-semibold text-gray-700">제목</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* 내용 입력 */}
          <div className="p-6">
            <label className="block mb-2">
              <span className="text-lg font-semibold text-gray-700">내용</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              rows={15}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
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
                if (title.trim() || content.trim()) {
                  if (confirm('작성 중인 내용이 있습니다. 정말 취소하시겠습니까?')) {
                    onBack();
                  }
                } else {
                  onBack();
                }
              }}
              className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              취소
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
