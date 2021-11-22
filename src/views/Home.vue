<template>
  <!-- 摆放各个组件以及布局 -->
  <div class="layout">
    <div class="top">
      <img alt="Vue logo" src="../assets/logo.png" />
      <PieChart msg="PieChart" :pieChartData="pieChartData" />
    </div>
    <div class="left">
      <ScatterChart msg="ScatterChart" :scatterChartData="scatterChartData" />
    </div>
    <div class="bottom">
      <h2>{{ count }}</h2>
      <button @click="add">+1</button>
      <p>{{ pieChartData && pieChartData.length }}</p>
      <p>{{ scatterChartData && scatterChartData.length }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PieChart from '@/components/PieChart/pieChart.vue';
import ScatterChart from '@/components/ScatterChart/scatterChart.vue';
export default {
  name: 'Home',
  components: {
    PieChart,
    ScatterChart,
  },
  mounted() {
    console.log(this.count);
    const id = 32311;
    this.$store.dispatch('getPieChartDataAsync');
    this.$store.dispatch('getScatterChartDataAsync');
  },
  computed: {
    // 获取vuex中的数据，并且声明为组价的计算属性
    count() {
      return this.$store.state.count;
    },
    scatterChartData() {
      return this.$store.state.scatterChartData;
    },
    pieChartData() {
      return this.$store.state.pieChartData;
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
