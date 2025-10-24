import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://axcybersecuritybe-production.up.railway.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginApi = {
  login: (loginData: { login_id: string; password: string }) =>
    api.post('/login', loginData),
};

export const logoutApi = {
  logout: () => api.post('/logout'),
};
