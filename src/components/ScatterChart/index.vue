<template>
  <div class="scatterChart">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { helpFunc } from './scatterChartHelp';
export default {
  name: 'ScatterChart',
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
