<template>
<!-- 摆放各个组件以及布局 -->
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <PieChart msg="PieChart" />
    <ScatterChart msg="ScatterChart" />
  </div>
</template>

<script>
// @ is an alias to /src
import PieChart from '@/components/PieChart/index.vue';
import ScatterChart from '@/components/ScatterChart/index.vue';
import { getBannerRequest } from '@/api/banner.js';
import { getSongDetail } from '@/api/songDetail.js';
export default {
  name: 'Home',
  components: {
    PieChart,
    ScatterChart
  },
  mounted() {
    const id = 32311;
    // 发送请求
    getBannerRequest().then((data) => console.log(data));
    // 发送带参数的请求
    getSongDetail(id).then((data) => console.log(data));
  },
};
</script>
