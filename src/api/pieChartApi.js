import { axiosInstance } from './config';
// 获取banner
export const getPieChartDataRequest = () => {
  return axiosInstance.get('/getPieChartData');
};
