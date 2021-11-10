import { getBannerRequest } from '@/api/banner.js';
import { getSongDetail } from '@/api/songDetail.js';
export default {
  async getBannerListAsync(context) {
    // 发送请求
    context.commit('getBannerList', await getBannerRequest());
  },
  async getSongDetailAsync(context, id) {
    // 发送带参数的请求
    context.commit('getSongs', await getSongDetail(id));
  },
};
