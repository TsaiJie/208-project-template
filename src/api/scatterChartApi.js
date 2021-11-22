import { axiosInstance } from './config';
// 获取banner
export const getScatterChartDataRequest = () => {
  return axiosInstance.get('/getScatterChartData');
};
