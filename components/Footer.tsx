export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#282828' }}>
      <div className="container mx-auto px-4 sm:px-8 lg:px-10 py-8 sm:py-10 text-gray-400">
        {/* Footer 전체 컨텐츠 */}
        <div className="flex flex-col space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            (46241) 부산광역시 금정구 부산대학로 63번길 2 IT관 714호
          </p>
          <p>
            (A06) 714, School of IT, Pusan National
            University, 2, BusanDaehak-ro 63beon-gil, Geumjeoung-gu, Busan,
            46241, Republic of Korea
          </p>

          <div className="pt-2">
            <p>📞 +82 51-510-3641</p>
            <p>✉️ jyson@pusan.ac.kr</p>
          </div>

          <div className="border-t border-gray-600 mt-6 pt-4 text-xs sm:text-sm text-gray-500">
            © Copyright PUSAN NATIONAL UNIVERSITY. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
