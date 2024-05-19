<template>
  <div class="right-2">
    <base-title title="用户增值服务"></base-title>
    <base-tab :tab="tab" @change="change"></base-tab>
    <base-money></base-money>
    <module-chart class="chart" :list="list" ref="charts"></module-chart>
  </div>
</template>
<script setup>
import moduleChart from './chart.vue'
import { ref } from 'vue'
let tab = ref(['医护上门', '体检预约', '在线咨询', '预约挂号'])
let charts = ref(null)
import { getRandom } from '@/utils/utils'
let list = ref([
  { name: '南平', num1: getRandom(), num2: getRandom() },
  { name: '宁德', num1: getRandom(), num2: getRandom() },
  { name: '三明', num1: getRandom(), num2: getRandom() },
  { name: '龙岩', num1: getRandom(), num2: getRandom() },
  { name: '漳州', num1: getRandom(), num2: getRandom() },
  { name: '厦门', num1: getRandom(), num2: getRandom() },
  { name: '泉州', num1: getRandom(), num2: getRandom() },
  { name: '莆田', num1: getRandom(), num2: getRandom() },
  { name: '福州', num1: getRandom(), num2: getRandom() },
  { name: '平潭', num1: getRandom(), num2: getRandom() },
])
function change(params) {
  charts.value.initChart()
}
</script>
<style scoped lang="scss">
.right-2 {
  height: 295px;
  display: flex;
  flex-flow: column;
}

.chart {
  height: 110px;
  width: 90%;
  margin: 0 auto;
}
</style>
