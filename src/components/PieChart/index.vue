<template>
  <div class="pieChart">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { helpFunc } from './pieChartHelp';
export default {
  name: 'PieChart',
  props: {
    msg: String,
  },
  mounted() {
    console.log(helpFunc());
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
