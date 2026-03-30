'use client';

import React, { useRef, useState } from 'react';

interface ClassNoticeWriteProps {
  onBack: () => void;
  onSave?: (formData: FormData) => Promise<void> | void;
}

export default function ClassNoticeWrite({ onBack, onSave }: ClassNoticeWriteProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    if (onSave) {
      const formData = new FormData();
      formData.append('title', title.trim());
      formData.append('content', content.trim());

      files.forEach((file) => {
        formData.append('files', file);
      });

      onSave(formData);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    setFiles((prev) => {
      const merged = [...prev, ...selectedFiles];
      return merged.filter(
        (file, index, self) =>
          index ===
          self.findIndex(
            (f) =>
              f.name === file.name &&
              f.size === file.size &&
              f.lastModified === file.lastModified
          )
      );
    });

    e.target.value = '';
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-semibold text-[#02162E] mb-6">공지사항 작성</h2>
          <div className="flex items-center">
            <div className="w-44 border-t-[3px] border-blue-800" />
            <div className="flex-1 border-t border-gray-300" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="border-b border-gray-200 p-6">
            <label className="block mb-2">
              <span className="text-lg font-semibold text-gray-700">제목</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              className="text-black w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="border-b border-gray-200 p-6">
            <label className="block mb-2">
              <span className="text-lg font-semibold text-gray-700">내용</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              rows={15}
              className="text-black w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="p-6">
            <label className="block mb-3">
              <span className="text-lg font-semibold text-gray-700">첨부파일</span>
            </label>

            <div className="flex items-center gap-3 mb-4">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                파일 선택
              </button>
              <span className="text-sm text-gray-500">여러 파일 업로드 가능합니다.</span>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />

            {files.length > 0 ? (
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={`${file.name}-${file.size}-${file.lastModified}-${index}`}
                    className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-md bg-gray-50"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{file.name}</p>
                      <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="ml-4 px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                    >
                      삭제
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-4 py-6 border border-dashed border-gray-300 rounded-md text-sm text-gray-400">
                첨부된 파일이 없습니다.
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
                if (title.trim() || content.trim() || files.length > 0) {
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