import axios from 'axios';

const API_BASE_URL = "/api";

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

// 포스팅 API
export const postApi = {
  // 목록 조회
  getPosts: (skip: number = 0, limit: number = 10) => 
    api.get('/posts/', {
      params: { skip, limit }
    }),
  
  // 상세 조회
  getPost: (postId: number) => 
    api.get(`/posts/${postId}`),
  
  // 생성 (multipart/form-data) - 여러 이미지 지원
  createPost: (
    //id auto
    images: File[], 
    caption: string, 
    description: string, 
    token: string
  ) => {
    const formData = new FormData();
    // 여러 이미지 파일 추가
    images.forEach((image) => {
      formData.append('images', image);
    });
    formData.append('caption', caption);
    formData.append('description', description);
    
    return api.post('/posts/', formData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  
  // 수정 (multipart/form-data) - 여러 이미지 지원
  updatePost: (
    postId: number,
    data: {
      caption?: string;
      description?: string;
      images?: File[];
    },
    token: string
  ) => {
    const formData = new FormData();
    if (data.caption !== undefined) formData.append('caption', data.caption);
    if (data.description !== undefined) formData.append('description', data.description);
    // 여러 이미지 파일 추가
    if (data.images && data.images.length > 0) {
      data.images.forEach((image) => {
        formData.append('images', image);
      });
    }
    
    return api.put(`/posts/${postId}`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  
  // 삭제
  deletePost: (postId: number, token: string) => 
    api.delete(`/posts/${postId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }),
};