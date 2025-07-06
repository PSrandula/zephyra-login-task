import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  config => {
    console.log('Sending Request:', config);
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => {
    console.log('Received Response:', response);
    return response;
  },
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;