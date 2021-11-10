<template>
  <div class="pieChart">
    <h1>{{ msg }}</h1>
    <p>{{ pieChartData && pieChartData[0] }}</p>
  </div>
</template>

<script>
import { helpFunc } from './pieChartHelp';
export default {
  name: 'PieChart',
  props: {
    msg: String,
    pieChartData: Array,
  },
  mounted() {
    console.log(helpFunc());
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
