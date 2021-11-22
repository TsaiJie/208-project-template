import { getPieChartDataRequest } from '@/api/pieChartApi.js';
import { getScatterChartDataRequest } from '@/api/scatterChartApi.js';
export default {
  async getPieChartDataAsync(context) {
    // 发送请求
    context.commit('getPieChartData', await getPieChartDataRequest());
  },
  async getScatterChartDataAsync(context, id) {
    // 发送带参数的请求
    context.commit('getScatterChartData', await getScatterChartDataRequest());
  },
};
