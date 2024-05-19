<template>
  <div class="right-1">
    <base-title title="机构使用总览"></base-title>
    <div class="right-1-wrap">
      <img src="@/assets/vector.png" class="vector" alt="" />
      <div class="part">
        <module-chart-left class="chart" :list="list" :max="max"></module-chart-left>
        <module-chart-right class="chart chart2" :list="list" :max="max"></module-chart-right>
      </div>
    </div>
  </div>
</template>
<script setup>
import moduleChartLeft from './chart-left.vue'
import moduleChartRight from './chart-right.vue'
import { getRandom } from '@/utils/utils'
import { ref } from 'vue'
let min = 6000
let max = 10000
let list = ref([
  { name: '南平', num1: getRandom(min, max), num2: getRandom(min, max) },
  { name: '宁德', num1: getRandom(min, max), num2: getRandom(min, max) },
  { name: '三明', num1: getRandom(min, max), num2: getRandom(min, max) },
  { name: '龙岩', num1: getRandom(min, max), num2: getRandom(min, max) },
  { name: '漳州', num1: getRandom(min, max), num2: getRandom(min, max) },
  { name: '厦门', num1: getRandom(min, max), num2: getRandom(min, max) },
  { name: '泉州', num1: getRandom(min, max), num2: getRandom(min, max) },
  { name: '莆田', num1: getRandom(min, max), num2: getRandom(min, max) },
  { name: '福州', num1: getRandom(min, max), num2: getRandom(min, max) },
  { name: '平潭', num1: getRandom(min, max), num2: getRandom(min, max) },
])
</script>
<style scoped lang="scss">
.chart {
  width: 237px;
  height: 300px;
}
.chart2 {
  width: 270px;
}
.right-1 {
  height: 400px;
  // background-color: pink;
  display: flex;
  flex-flow: column;
  align-items: center;
  .right-1-wrap {
    display: block;
    width: 409px;
    justify-content: center;
    .vector {
      display: block;
      width: 100%;
    }
    .part {
      display: flex;
      align-items: center;
    }
  }
}
</style>
