import axios from 'axios';
// 请求的根路径
// export const baseUrl = 'http://1.15.227.196:3000';
export const baseUrl = 'http://localhost:3000/';
//创建axios 的实例及拦截器配置
export const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    alert(err, '网络错误');
  }
);
