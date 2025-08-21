import axios from 'axios';

// Use environment variable or fallback to relative path for production
const baseURL = import.meta.env.VITE_API_URL || '/api';

const API = axios.create({
<<<<<<< HEAD
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
=======
  baseURL: import.meta.env.VITE_API_URL || '/api',
>>>>>>> b59e8029ff3c0a5b74fca59cab09b9aad2d3ed1d
  timeout: 10000, // 10 second timeout
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Add response interceptor for better error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default API;
