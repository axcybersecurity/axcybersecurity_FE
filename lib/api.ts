import axios from 'axios';

const API_BASE_URL = "";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginApi = {
  login: (loginData: { login_id: string; password: string }) =>
    api.post('/auth/login', loginData),
};

export const logoutApi = {
  logout: (token: string) => api.post('/auth/logout', {}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }),
};

// 공지사항 API
export const noticeApi = {
  // 목록 조회
  getNotices: () => api.get('/notices/'),
  
  // 상세 조회
  getNotice: (id: number) => api.get(`/notices/${id}`),
  
  // 생성
  createNotice: (data: { title: string; content: string }, token: string) => 
    api.post('/notices/', data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }),
  
  // 수정
  updateNotice: (id: number, data: { title: string; content: string }, token: string) => 
    api.put(`/notices/${id}`, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }),
  
  // 삭제
  deleteNotice: (id: number, token: string) => 
    api.delete(`/notices/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }),
};
