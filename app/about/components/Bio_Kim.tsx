export default function Bio_Kim() {
  return (
    // 이곳에 김호원 교수님의 상세 설명을 자유롭게 작성합니다.
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">주요 연구 분야</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>정보보호</li>
        <li>사물지능</li>
        <li>블록체인</li>
      </ul>
      <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">학력</h3>
      <p className="text-gray-600">
        부산대학교 컴퓨터공학과 학사, 석사, 박사
      </p>
    </div>
  );
}