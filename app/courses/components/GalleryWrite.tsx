'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { postApi } from '../../../lib/api';
// AxiosError 타입을 import 하여 catch 문에서 사용합니다.
import { AxiosError } from 'axios';

interface GalleryWriteProps {
  onBack: () => void;
  onSave?: (gallery: { caption: string; description: string; images: File[] }) => void;
}

// 에러 응답 객체의 구조를 정의합니다.
interface ErrorResponse {
  detail?: string;
}

export default function GalleryWrite({ onBack, onSave }: GalleryWriteProps) {
  const [caption, setCaption] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedImages((prev) => [...prev, ...fileArray]);

      const newPreviewUrls = fileArray.map((file) => URL.createObjectURL(file));
      setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    URL.revokeObjectURL(previewUrls[index]);
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  // 버그 수정: 의존성 배열에 previewUrls를 포함하되, 
  // 내부 로직은 마운트 시가 아닌 언마운트 시에만 실행되도록 유지하거나 
  // previewUrls가 바뀔 때마다 정리(cleanup)되도록 구성합니다.
  useEffect(() => {
    return () => {
      // 컴포넌트 언마운트 시 모든 URL 해제
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]); // 의존성 배열 추가

  const handleSave = async () => {
    if (!caption.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }

    if (selectedImages.length === 0) {
      alert('이미지를 최소 하나 이상 선택해주세요.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }

    try {
      setIsSubmitting(true);

      await postApi.createPost(
        selectedImages,
        caption.trim(),
        description.trim(),
        token
      );

      alert('성공적으로 업로드되었습니다.');
      
      if (onSave) {
        onSave({
          caption: caption.trim(),
          description: description.trim(),
          images: selectedImages,
        });
      }
      onBack();
    } catch (error) {
      console.error('Upload Error:', error);
      
      if (error instanceof AxiosError) {
        const data = error.response?.data as ErrorResponse;
        alert(data?.detail || '업로드 중 오류가 발생했습니다.');
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-semibold text-[#02162E] mb-6">갤러리 업로드</h2>
          <div className="flex items-center">
            <div className="w-44 border-t-[3px] border-blue-800" />
            <div className="flex-1 border-t border-gray-300" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="border-b border-gray-200 p-6">
            <label className="block mb-2 font-semibold text-gray-700">제목</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="제목을 입력하세요"
              disabled={isSubmitting}
              className="text-black w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="border-b border-gray-200 p-6">
            <label className="block mb-2 font-semibold text-gray-700">설명</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="내용을 입력하세요"
              rows={3}
              disabled={isSubmitting}
              className="text-black w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
          </div>

          <div className="p-6">
            <label className="block mb-2 font-semibold text-gray-700">
              이미지 ({selectedImages.length}개 선택됨)
            </label>
            <div className="space-y-4">
              <label className={`inline-block px-6 py-2 bg-blue-600 text-white rounded-md cursor-pointer ${isSubmitting ? 'opacity-50' : 'hover:bg-blue-700'}`}>
                파일 추가
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  multiple
                  disabled={isSubmitting}
                />
              </label>

              {previewUrls.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                  {previewUrls.map((url, index) => (
                    <div key={url} className="relative aspect-square border rounded-md overflow-hidden group">
                      <Image
                        src={url}
                        alt={`미리보기 ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      {!isSubmitting && (
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={onBack}
            disabled={isSubmitting}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
          >
            목록으로
          </button>
          <div className="flex gap-3">
            <button
              onClick={() => {
                if (caption || description || selectedImages.length > 0) {
                  if (confirm('작성 중인 내용이 삭제됩니다. 취소하시겠습니까?')) onBack();
                } else onBack();
              }}
              disabled={isSubmitting}
              className="px-6 py-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
            >
              취소
            </button>
            <button
              onClick={handleSave}
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-md disabled:bg-blue-400"
            >
              {isSubmitting ? '업로드 중...' : '저장'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}