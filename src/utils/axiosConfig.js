// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.OPENAI_BASE_URL, // Replace with your OpenAI API base URL if different
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
      console.log('Request:', config);
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response) {
      console.log('Response:', response);
      // Do something with response data
      return response;
    },
    function (error) {
      console.error('Response Error:', error);
      // Do something with response error
      return Promise.reject(error);
    }
);

export default axiosInstance;