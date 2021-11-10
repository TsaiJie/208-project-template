import { axiosInstance } from './config';
// 获取banner
export const getBannerRequest = () => {
  return axiosInstance.get('/banner');
};
