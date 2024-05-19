<template>
  <div class="left-2">
    <base-title title="机构增值服务"></base-title>
    <base-tab :tab="tab" @change="change"></base-tab>
    <base-money></base-money>
    <module-chart class="chart" :list="list" ref="charts"></module-chart>
  </div>
</template>
<script setup>
import moduleChart from './chart.vue'
import { ref } from 'vue'
let tab = ref(['医保对接', '药品供应链', '医疗责任险'])
let charts = ref(null)
import { getRandom } from '@/utils/utils'
let list = ref([
  { name: '南平', num: getRandom() },
  { name: '宁德', num: getRandom() },
  { name: '三明', num: getRandom() },
  { name: '龙岩', num: getRandom() },
  { name: '漳州', num: getRandom() },
  { name: '厦门', num: getRandom() },
  { name: '泉州', num: getRandom() },
  { name: '莆田', num: getRandom() },
  { name: '福州', num: getRandom() },
  { name: '平潭', num: getRandom() },
])
function change(params) {
  charts.value.initChart()
}
</script>
<style scoped lang="scss">
.left-2 {
  margin-left: 35px;
  height: 304px;
  display: flex;
  flex-flow: column;
}

.chart {
  // flex: 1;
  height: 120px;
  width: 95%;
  margin: 0 auto;
}
</style>
