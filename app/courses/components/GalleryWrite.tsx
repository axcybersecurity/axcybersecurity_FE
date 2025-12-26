'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios, { AxiosError } from 'axios';
import { postApi } from '../../../lib/api';

interface GalleryWriteProps {
  onBack: () => void;
  onSave?: (gallery: { caption: string; description: string; images: File[] }) => void;
}

// 에러 응답 객체의 구조를 정의합니다.
interface ErrorResponse {
  detail?: string;
}

// 이미지 압축 및 리사이즈 함수
const compressImage = (file: File, maxWidth: number = 1920, maxHeight: number = 1920, quality: number = 0.8): Promise<File> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = document.createElement('img');
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // 비율 유지하면서 리사이즈
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas context를 가져올 수 없습니다.'));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('이미지 압축에 실패했습니다.'));
              return;
            }
            const compressedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          },
          file.type,
          quality
        );
      };
      img.onerror = () => reject(new Error('이미지를 로드할 수 없습니다.'));
    };
    reader.onerror = () => reject(new Error('파일을 읽을 수 없습니다.'));
  });
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function GalleryWrite({ onBack, onSave }: GalleryWriteProps) {
  const [caption, setCaption] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setIsCompressing(true);
    try {
      const fileArray = Array.from(files);
      const processedFiles: File[] = [];
      const newPreviewUrls: string[] = [];

      for (const file of fileArray) {
        // 파일 크기 확인
        if (file.size > MAX_FILE_SIZE) {
          // 큰 파일은 압축 시도
          try {
            const compressedFile = await compressImage(file);
            processedFiles.push(compressedFile);
            newPreviewUrls.push(URL.createObjectURL(compressedFile));
          } catch (error) {
            console.error('이미지 압축 실패:', error);
            alert(`${file.name} 파일이 너무 큽니다. 다른 이미지를 선택해주세요.`);
          }
        } else {
          processedFiles.push(file);
          newPreviewUrls.push(URL.createObjectURL(file));
        }
      }

      if (processedFiles.length > 0) {
        setSelectedImages((prev) => [...prev, ...processedFiles]);
        setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
      }
    } catch (error) {
      console.error('이미지 처리 오류:', error);
      alert('이미지 처리 중 오류가 발생했습니다.');
    } finally {
      setIsCompressing(false);
      // input 초기화 (같은 파일 다시 선택 가능하도록)
      e.target.value = '';
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

      // 업로드 전 모든 이미지 압축 (안전을 위해)
      const compressedImages: File[] = [];
      for (const image of selectedImages) {
        try {
          const compressed = await compressImage(image, 1920, 1920, 0.75);
          compressedImages.push(compressed);
        } catch (error) {
          console.error('이미지 압축 실패:', error);
          // 압축 실패 시 원본 사용
          compressedImages.push(image);
        }
      }

      // FormData 생성
      const formData = new FormData();
      compressedImages.forEach((image) => {
        formData.append('images', image);
      });
      formData.append('caption', caption.trim());
      formData.append('description', description.trim());

      // axios로 직접 요청 (FormData는 Content-Type을 자동으로 설정)
      // 서버가 슬래시를 요구하므로 /api/posts/로 요청
      await axios.post('/api/posts/', formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        maxRedirects: 5, // 리다이렉트 허용
        validateStatus: (status) => status < 500 // 4xx는 에러로 처리하되 5xx는 허용
      });

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
        if (error.response?.status === 413) {
          alert('파일 크기가 너무 큽니다. 이미지를 압축하거나 더 작은 이미지를 선택해주세요.');
        } else {
          const data = error.response?.data as ErrorResponse;
          alert(data?.detail || '업로드 중 오류가 발생했습니다.');
        }
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
              className="w-full px-4 py-3 border border-gray-300 ro
              unded-md focus:ring-2 focus:ring-blue-500 outline-none"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
          </div>

          <div className="p-6">
            <label className="block mb-2 font-semibold text-gray-700">
              이미지 ({selectedImages.length}개 선택됨)
            </label>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className={`inline-block px-6 py-2 bg-blue-600 text-white rounded-md cursor-pointer ${isSubmitting || isCompressing ? 'opacity-50' : 'hover:bg-blue-700'}`}>
                  {isCompressing ? '처리 중...' : '파일 추가'}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    multiple
                    disabled={isSubmitting || isCompressing}
                  />
                </label>
                <span className="text-sm text-gray-500">
                  최대 5MB, 자동 압축됩니다
                </span>
              </div>

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