<template>
  <div class="scatterChart">
    <h1>{{ msg }}</h1>
    <p>{{ scatterChartData && scatterChartData[0] }}</p>
  </div>
</template>

<script>
import { helpFunc } from './scatterChartHelp';
export default {
  name: 'ScatterChart',
  props: {
    msg: String,
    scatterChartData: Array,
  },
  mounted() {
    console.log(helpFunc());
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
