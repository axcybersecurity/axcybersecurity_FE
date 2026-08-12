'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { postApi } from '../lib/api';

interface Post {
  id: number;
  caption: string;
  description: string;
  image_paths: string[];
  created_at: string;
}

type SlideItem = {
  imageUrl: string;
  postId: number;
  createdAt: string;
};

const getGalleryImageUrl = (imagePath: string) => {
  if (/^(https?:)?\/\//.test(imagePath) || imagePath.startsWith('/api/')) {
    return imagePath;
  }

  return `/api/${imagePath.replace(/^\/+/, '')}`;
};

export default function Home() {
  const [slideItems, setSlideItems] = useState<SlideItem[]>([]);
  const [slideLoading, setSlideLoading] = useState(true);

  // ✅ 추가: 현재 슬라이드 인덱스 + 트랜지션 on/off
  const [slideIndex, setSlideIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    const loadSlideImages = async () => {
      try {
        setSlideLoading(true);

        const res = await postApi.getPosts(0, 30);
        const posts: Post[] = (res.data?.posts ?? res.data) as Post[];

        const items: SlideItem[] = (posts || [])
          .filter((p) => Array.isArray(p.image_paths) && p.image_paths.length > 0)
          .map((p) => ({
            imageUrl: getGalleryImageUrl(p.image_paths[0]),
            postId: p.id,
            createdAt: p.created_at,
          }))
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 5);

        setSlideItems(items);
        setSlideIndex(0);
        setEnableTransition(true);
      } catch (e) {
        console.error('슬라이드 이미지 로드 실패:', e);
        setSlideItems([]);
      } finally {
        setSlideLoading(false);
      }
    };

    loadSlideImages();
  }, []);

  // ✅ 무한루프용: 마지막에 첫 장 복제
  const loopItems = useMemo(() => {
    if (slideItems.length === 0) return [];
    return [...slideItems, slideItems[0]];
  }, [slideItems]);

  // ✅ “머무름(hold) → 빠른 이동” 타이밍 제어
  useEffect(() => {
    if (slideItems.length === 0) return;

    const HOLD_MS = 3500;     // 머무는 시간
    const MOVE_MS = 500;      // 이동 시간(transition duration과 맞춰야 함)

    const t = setTimeout(() => {
      setEnableTransition(true);
      setSlideIndex((prev) => prev + 1);
    }, HOLD_MS);

    return () => clearTimeout(t);
  }, [slideIndex, slideItems.length]);

  // ✅ 트랜지션 끝났을 때: 복제 슬라이드(인덱스=5)에 도달하면 “순간이동”으로 0으로
  const handleTransitionEnd = () => {
    if (slideItems.length === 0) return;

    if (slideIndex === slideItems.length) {
      // 지금 화면은 "복제된 0번" 이므로, 트랜지션 끄고 진짜 0번으로 순간 이동
      setEnableTransition(false);
      setSlideIndex(0);

      // 다음 프레임에서 다시 트랜지션 켜기(안 켜면 이후 이동이 뚝뚝 끊김)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
    }
  };

  return (
    <div className="w-full mx-auto">
      <section className="relative w-full overflow-hidden z-10">
        {/* ===== 배경 이미지 ===== */}
        <Image
          src="/main/bg.png" // ← 새 배경 이미지 경로
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* ===== 화면 기준 50:50 분할 ===== */}
        <div className="relative z-10 min-h-[70vh] lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-x-0">
          {/* ===== LEFT : TEXT (왼쪽 반 섹션 정중앙) ===== */}
          <div className="flex items-center justify-center pl-6 lg:pl-12 pr-6 lg:pr-0 lg:-mr-40">
            <div className="max-w-xl">
              <p className="text-2xl sm:text-2xl text-gray-600 mb-3">
                Information Security &amp; AIoT
              </p>

              <h1 className="font-bold leading-tight text-4xl sm:text-4xl lg:text-4xl xl:text-5xl text-[#282828]">
                AI, 블록체인, IoT 기술로
                <br />
                미래를 설계하다
              </h1>
            </div>
          </div>

          {/* ===== RIGHT : SLIDE (오른쪽 반 섹션 정중앙) ===== */}
          <div className="hidden md:flex items-center justify-center pl-6 lg:pl-0 lg:-ml-8 pr-6 lg:pr-30">
            <Link
              href="/courses?tab=gallery"
              className="
                bg-white/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden
                hover:scale-[1.03] transition-transform
                w-[clamp(360px,32vw,620px)]
                aspect-[16/10] lg:aspect-[3/2]
              "
            >
              <div className="relative w-full h-full">
                {slideLoading ? (
                  <div className="flex items-center justify-center w-full h-full text-gray-600 text-sm">
                    로딩 중...
                  </div>
                ) : slideItems.length === 0 ? (
                  <div className="flex items-center justify-center w-full h-full text-gray-600 text-sm">
                    갤러리 이미지 없음
                  </div>
                ) : (
                  <div
                    className="flex h-full"
                    onTransitionEnd={handleTransitionEnd}
                    style={{
                      transform: `translateX(-${slideIndex * 100}%)`,
                      transition: enableTransition ? 'transform 350ms ease-in-out' : 'none',
                      willChange: 'transform',
                    }}
                  >
                    {loopItems.map((item, idx) => (
                      <div
                        key={`${item.postId}-${idx}`}
                        className="min-w-full h-full relative flex-shrink-0"
                      >
                        <Image
                          src={item.imageUrl}
                          alt={`gallery-slide-${idx}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 400px"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 연구실 소개(텍스트+이미지) ===== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-28">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* 텍스트 */}
          <div className="flex-1 w-full">
            <h2
              className="font-semibold leading-tight font-pretendard text-dark"
              style={{
                fontSize: 'clamp(1.7vh, 2.8vh, 2.8vh)',
                lineHeight: 1.25,
              }}
            >
              Securing the Future, Connecting the World
            </h2>

            <div
              className="mt-6 sm:mt-8 rounded-xl"
              style={{ backgroundColor: '#D9D9D933', backdropFilter: 'blur(30px)' } as React.CSSProperties}
            >
              <div className="p-5 sm:p-8 lg:p-10 space-y-5">
                <h3
                  className="font-medium font-pretendard text-dark"
                  style={{
                    fontSize: 'clamp(2vh, 2.5vh, 2.5vh)',
                  }}
                >
                  Welcome
                </h3>

                <p
                  className="leading-7 font-pretendard text-dark"
                  style={{
                    fontSize: 'clamp(1vh, 2vh, 1.7vh)',
                    lineHeight: 1.8,
                  }}
                >
                  우리 AX융합 사이버보안 연구실은 AI보안, 산업시설 보안, 모빌리티 보안, 블록체인,
                  해킹·방어 기술을
                  <br />
                  하나로 엮어 지능형·안전한 디지털 세계를 설계합니다.
                  <br />
                  AI 자가진화와 적대적 공격부터 스마트공장·드론·자동차 보안까지 연결된 모든 기술이
                  신뢰로 작동하는 미래 표준을 만들어 가겠습니다.
                </p>

                <p className="font-pretendard text-dark" style={{
                    fontSize: 'clamp(1vh, 2vh, 1.7vh)',
                    lineHeight: 1.7,
                  }}>
                  부산에서 시작해 세계로 확장되는 보안·지능 연구의 중심,
                  <br />
                  ACCSLAB이 만들어 갑니다.
                </p>
              </div>
            </div>
          </div>

          {/* 이미지 */}
          <div className="hidden lg:block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[332px]">
            <Image
              src="/main/image.png"
              alt="Digital Security Graphic"
              width={332}
              height={470}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== 연구 실적 ===== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 lg:mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 sm:mb-8 font-pretendard text-dark">연구 실적</h2>

        <p className="text-sm sm:text-base text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-10 font-pretendard">
          ACCSLAB은 AI 보안, 산업시설 보안, 모빌리티 보안, 블록체인, 해킹·방어 등 다양한 분야에서
          국내외 학술지, 학회, 산학협력 과제를 통해 연구 성과를 축적하고 있습니다.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            {
              src: '/result_picture/kisa_picture.png',
              title: 'ACS 해킹방어대회 수상',
            },
            {
              src: '/result_picture/KCF_picture.png',
              title: '2025 국가암호공모전 수상',
            },
            {
              src: '/result_picture/dive_picture.png',
              title: 'DIVE AI 경진대회 수상',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-[24vh] min-w-[180px] max-w-xs aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image
                  src={item.src}
                  alt={`연구 실적 이미지 ${idx + 1}`}
                  fill
                  className={
                    idx === 1 ? 'object-contain scale-75 origin-center' : 'object-cover'
                  }
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center font-pretendard">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 연구주제 ===== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 font-pretendard text-dark">연구주제</h2>

        {/* 위 3개 + 아래 2개 (넓을 때 가운데 정렬) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* 연구주제 1 */}
          <Link href="/research?tab=topics&topic=ax-cybersecurity" className="block">
            <div className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-lg transition-shadow h-full">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <Image
                  src="/main/AI.png"
                  alt="AX융합 사이버보안 기술"
                  width={120}
                  height={120}
                  className="object-contain w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                />
              </div>
              <h3 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl text-center font-pretendard text-brand">
                AX융합 사이버보안 기술
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed text-center font-pretendard">
                AI 자가진화, 생성형 AI, AI 해킹, 적대적공격 등
              </p>
            </div>
          </Link>

          {/* 연구주제 2 */}
          <Link href="/research?tab=topics&topic=industrial-security" className="block">
            <div className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-lg transition-shadow h-full">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <Image
                  src="/main/Factory.png"
                  alt="산업시설 사이버보안"
                  width={120}
                  height={120}
                  className="object-contain w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                />
              </div>
              <h3 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl text-center font-pretendard text-brand">
                산업시설 사이버보안
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed text-center font-pretendard">
                스마트공장, 에너지시설, 원자력 사이버보안
              </p>
            </div>
          </Link>

          {/* 연구주제 3 */}
          <Link href="/research?tab=topics&topic=mobility-security" className="block">
            <div className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-lg transition-shadow h-full">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <Image
                  src="/main/drone.png"
                  alt="모빌리티 보안"
                  width={120}
                  height={120}
                  className="object-contain w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                />
              </div>
              <h3 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl text-center font-pretendard text-brand">모빌리티 보안</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed text-center font-pretendard">드론, 자동차, 로봇 사이버보안</p>
            </div>
          </Link>

          {/* 아래 2개: 넓을 때 가운데 정렬 */}
          <div className="md:col-span-2 lg:col-span-3 flex flex-col md:flex-row justify-center gap-4 sm:gap-6 lg:gap-8">
            {/* 연구주제 4 */}
            <Link
              href="/research?tab=topics&topic=blockchain"
              className="block w-full md:w-1/2 lg:w-1/3"
            >
              <div className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <Image
                    src="/main/Blockchain.png"
                    alt="블록체인 응용기술"
                    width={120}
                    height={120}
                    className="object-contain w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                  />
                </div>
                <h3 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl text-center font-pretendard text-brand">
                  블록체인 응용기술
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed text-center font-pretendard">
                  블록체인기술 적용연구
                </p>
              </div>
            </Link>

            {/* 연구주제 5 */}
            <Link
              href="/research?tab=topics&topic=hacking-reversing"
              className="block w-full md:w-1/2 lg:w-1/3"
            >
              <div className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <Image
                    src="/main/Hacking.png"
                    alt="해킹/방어 및 리버싱 기술"
                    width={120}
                    height={120}
                    className="object-contain w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                  />
                </div>
                <h3 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl text-center font-pretendard text-brand">해킹/방어 및 리버싱 기술</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed text-center font-pretendard">역공학, 포렌식기술</p>
              </div>
            </Link>
          </div>
        </div>

        {/* 연구주제 자세히 보기 */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="/research?tab=topics"
            className="inline-flex items-center gap-3 text-lg sm:text-xl font-medium text-[#02162E] hover:text-[#043A6F] transition-colors font-pretendard"
          >
            연구주제 자세히 보기
            <Image
              src="/main/Vector.svg"
              alt="Arrow"
              width={10}
              height={18}
              className="h-4 w-auto"
            />
          </a>
        </div>
      </section>

      {/* ===== 산학협력기관 ===== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center font-pretendard text-dark">산학협력기관</h2>

        <div className="mt-8 sm:mt-12 mb-16 sm:mb-28 flex justify-center">
          <Image
            src="/main/Main_흐르는텍스트_산학협력기관.svg"
            alt="산학협력기관 흐르는 텍스트"
            width={1127}
            height={100}
            className="w-full max-w-5xl h-auto object-contain"
          />
        </div>
      </section>
      {/* ===== 산학협력대학교 ===== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center font-pretendard text-dark">국제협력대학교</h2>

        <div className="mt-8 sm:mt-12 mb-16 sm:mb-28 flex justify-center">
  <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 max-w-5xl w-full">
    <Image
      src="/main/NANYANG.png"
      alt="난양공대 로고"
      width={220}
      height={80}
      className="h-16 w-auto object-contain"
    />

    <Image
      src="/main/SNL.png"
      alt="SNL 로고"
      width={220}
      height={80}
      className="h-16 w-auto object-contain"
    />

    <Image
      src="/main/UQ.png"
      alt="UQ 로고"
      width={220}
      height={80}
      className="h-16 w-auto object-contain"
    />
  </div>
</div>

      </section>
    </div>
  );
}
