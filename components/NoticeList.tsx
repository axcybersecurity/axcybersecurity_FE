'use client';

import React, { useState, useEffect } from 'react';
import { noticeApi } from '../lib/api';

interface Notice {
  id: number;
  title: string;
  author: string;
  created_at: string;
  view_count: number;
}

interface NoticeListProps {
  limit: number;
  onNoticeClick?: (notice: Notice) => void;
  showIndex?: boolean;
  showDashedLine?: boolean;
  fontSize?: 'sm' | 'base' | 'lg';
}

export default function NoticeList({
  limit,
  onNoticeClick,
  showIndex = false,
  showDashedLine = false,
  fontSize = 'base',
}: NoticeListProps) {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  // Tailwind 안전 매핑 (동적 클래스 문자열 제거)
  const sizeClass =
    fontSize === 'sm' ? 'text-sm' : fontSize === 'lg' ? 'text-lg' : 'text-base';

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        const response = await noticeApi.getNotices();
        const allNotices = response?.data?.notices ?? [];
        const sorted = allNotices
          .sort(
            (a: Notice, b: Notice) =>
              new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          )
          .slice(0, limit);
        setNotices(sorted);
      } catch (error) {
        console.error('공지사항을 불러오는데 실패했습니다:', error);
        setNotices([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, [limit]);

  if (loading) {
    return (
      <div className="py-2">
        <div className="h-4 w-2/3 bg-gray-200/70 rounded animate-pulse" />
      </div>
    );
  }

  if (notices.length === 0) {
    return (
      <div className="text-center py-2">
        <div className="text-gray-500 text-sm">공지사항이 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="mt-2">
      {notices.map((notice, index) => (
        <div key={notice.id}>
          <button
            type="button"
            onClick={() => onNoticeClick?.(notice)}
            className="block w-full text-left hover:bg-gray-50 p-1 rounded transition-colors cursor-pointer"
            aria-label={`공지: ${notice.title}`}
          >
            <div
              className={`${sizeClass} text-gray-800 break-words sm:truncate`}
              style={{
                fontFamily: 'Pretendard',
                fontWeight: showIndex ? 400 : 500,
                fontStyle: 'normal',
                lineHeight: '120%',
                letterSpacing: '0%',
              }}
              title={notice.title}
            >
              {showIndex ? `#${index + 1} ${notice.title}` : notice.title}
            </div>
          </button>

          {showDashedLine && (
            <div className="border-b border-dashed border-gray-300 mt-3 mb-2"></div>
          )}
        </div>
      ))}
    </div>
  );
}
