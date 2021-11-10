<template>
  <!-- 摆放各个组件以及布局 -->
  <div class="layout">
    <div class="top">
      <img alt="Vue logo" src="../assets/logo.png" />
      <PieChart msg="PieChart" :pieChartData="bannerList" />
    </div>
    <div class="left">
      <ScatterChart msg="ScatterChart" :scatterChartData="songs" />
    </div>
    <div class="bottom">
      <h2>{{ count }}</h2>
      <button @click="add">+1</button>
      <p>{{ bannerList && bannerList.length }}</p>
      <p>{{ songs && songs.length }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PieChart from '@/components/PieChart/index.vue';
import ScatterChart from '@/components/ScatterChart/index.vue';
export default {
  name: 'Home',
  components: {
    PieChart,
    ScatterChart,
  },
  mounted() {
    console.log(this.count);
    const id = 32311;
    this.$store.dispatch('getBannerListAsync');
    this.$store.dispatch('getSongDetailAsync', id);
  },
  computed: {
    // 获取vuex中的数据，并且声明为组价的计算属性
    count() {
      return this.$store.state.count;
    },
    bannerList() {
      return this.$store.state.bannerList;
    },
    songs() {
      return this.$store.state.songs;
    },
  },
  methods: {
    add() {
      this.$store.commit('increment', {
        amount: 10,
      });
    },
  },
};
</script>
