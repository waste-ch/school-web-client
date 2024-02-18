// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://school-web-server.vercel.app/' : 'http://localhost:5000', // Your API base URL
  timeout: 600000, // Set the timeout for requests if needed
});

//// Add an interceptor to include the token in the request headers
//api.interceptors.request.use((config) => {
//  const token = localStorage.getItem('accessToken'); // Fetch the token from storage
//  if (token) {
//    config.headers['Authorization'] = `Bearer ${token}`;
//  }
//  return config;
//});

export default api;