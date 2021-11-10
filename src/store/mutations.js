export default {
  increment(state, payload) {
    console.log(payload);
    // 变更状态
    state.count += payload.amount;
  },
  getBannerList(state, payload) {
    state.bannerList = payload.banners;
  },
  getSongs(state, payload) {
    state.songs = payload.songs;
  },
};
