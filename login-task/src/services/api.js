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