'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryWriteProps {
  onBack: () => void;
  onSave?: (gallery: { caption: string; image: File | null }) => void;
}

export default function GalleryWrite({ onBack, onSave }: GalleryWriteProps) {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      // 미리보기 URL 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!caption.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }

    if (!selectedImage) {
      alert('이미지를 선택해주세요.');
      return;
    }

    if (onSave) {
      onSave({ caption: caption.trim(), image: selectedImage });
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 제목 */}
        <div className="mb-8">
          <h2 className="text-4xl font-semibold text-[#02162E] mb-6">
            갤러리 업로드
          </h2>
          <div className="flex items-center">
            <div className="w-44 border-t-[3px] border-blue-800" />
            <div className="flex-1 border-t border-gray-300" />
          </div>
        </div>

        {/* 업로드 폼 */}
        <div className="bg-white rounded-lg shadow-sm border">
          {/* 제목 입력 */}
          <div className="border-b border-gray-200 p-6">
            <label className="block mb-2">
              <span className="text-lg font-semibold text-gray-700">제목</span>
            </label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="제목을 입력하세요"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* 이미지 업로드 */}
          <div className="p-6">
            <label className="block mb-2">
              <span className="text-lg font-semibold text-gray-700">이미지</span>
            </label>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                  파일 선택
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
                {selectedImage && (
                  <span className="text-sm text-gray-600">
                    {selectedImage.name}
                  </span>
                )}
              </div>
              
              {/* 이미지 미리보기 */}
              {previewUrl && (
                <div className="mt-4 border border-gray-300 rounded-md overflow-hidden">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={previewUrl}
                      alt="미리보기"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              )}
            </div>
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
                if (caption.trim() || selectedImage) {
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

