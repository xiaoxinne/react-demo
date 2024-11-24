import axios from 'axios';
import { message } from 'antd';
// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // 使用环境变量
  timeout: 5000, // 设置请求超时
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    console.log('🚀 ~ token:', token);
    if (token) {
      config.headers['Authorization'] = `${token}`;
    }
    return config;
  },
  error => {
    console.error('Request error:', error); // 请求发送前的错误处理
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;

    // 自定义状态码判断
    if (res.code !== 200) {
      message.error({
        type: 'error',
        content: res.message,
      });
      // 返回一个 Promise 拒绝，通知调用者捕获错误
      return Promise.reject(res.message || 'Error');
    } else {
      return res.data;
    }
  },
  error => {
    // 捕获请求失败的各种错误
    let errorMessage = '';

    if (error.response) {
      // 服务器返回了非2xx的响应状态码
      const status = error.response.status;
      switch (status) {
        case 400:
          errorMessage = '请求参数错误';
          break;
        case 401:
          errorMessage = '未授权，请登录';
          break;
        case 403:
          errorMessage = '拒绝访问';
          break;
        case 404:
          errorMessage = '请求地址出错';
          break;
        case 500:
          errorMessage = '服务器内部错误';
          break;
        default:
          errorMessage = `连接错误，状态码：${status}`;
      }
    } else if (error.request) {
      // 请求发送失败，没有收到响应
      errorMessage = '请求失败，请检查网络';
    } else {
      // 其他未知错误
      errorMessage = error.message || '请求错误';
    }
    message.error({
      type: 'error',
      content: errorMessage,
    });
    return Promise.reject(new Error(errorMessage)); // 将错误抛出，供调用者处理
  }
);

export default service;
