// components/Footer.tsx

export default function Footer() {
  return (
    // style 속성으로 피그마의 배경색(#282828)을 직접 지정
    <footer style={{ backgroundColor: '#282828' }}>
      {/* container: 내용물의 최대 너비를 제한하고 가운데 정렬
        mx-auto: 가운데 정렬
        px-6: 좌우 여백
        py-8: 상하 여백
      */}
      <div className="px-10 py-13">
        {/*
          grid: 격자 레이아웃 사용
          gap-8: 격자 항목 사이의 간격
          md:grid-cols-3: 중간 크기 화면 이상에서 3열로 배치
          text-sm: 글자 크기
        */}
          <div className="flex flex-col gap-3 items-start space-y-2" style={{ color: '#A8A3A3' }}>
            <p>(46241) 부산광역시 금정구 부산대학로 63번길 2 제6공학관 6512호</p>
            <p>(A06) 6512 School of computer science & engineering, Pusan National University, 2, BusanDaehak-ro 63beon-gil, Geumjeoung-gu, Busan, 46241, Republic of Korea</p>
            
            <p className="pt-2">📞 +82 51-510-1010</p>
            <p>✉️ howonkim@pusan.ac.kr</p>
            <br></br>
            <p className="pt-4">© Copyright PUSAN NATIONAL UNIVERSITY. All Rights Reserved.</p>
          </div>
      </div>
    </footer>
  );
}