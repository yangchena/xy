<template>
  <div class="left-3">
    <base-title title="机构总览"></base-title>
    <base-tab class="tab" :tab="tab" @change="change"></base-tab>
    <div class="rate">
      <div class="rate-left">
        <img src="@/assets/3-home.png" alt="" />
      </div>
      <div class="rate-center">
        <div>已上线机构</div>
        <div class="rate-center-num"><animationNum :num="10465"></animationNum></div>
      </div>
      <div class="rate-right">
        <div class="rate-right-text">
          上线率 <span><animationNum :num="85.3"></animationNum>.3%</span>
        </div>
        <div class="rate-right-block">
          <div class="rate-right-block-list" :style="{ width: rate }"></div>
        </div>
      </div>
    </div>
    <module-chart class="chart" :list="list" ref="charts"></module-chart>
  </div>
</template>
<script setup>
import { getRandom } from '@/utils/utils'
import moduleChart from './chart.vue'
import { ref } from 'vue'
let charts = ref(null)
let rate = ref(0)
let tab = ref(['全部机构', '诊所', '其他机构'])
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
setTimeout(() => {
  rate.value = '25%'
}, 1000)
</script>
<style scoped lang="scss">
.left-3 {
  margin-left: 35px;
  height: 330px;
  flex-flow: column;
  display: flex;
  .tab {
    margin-top: -5px;
  }
  .rate {
    padding-left: 35px;
    padding-right: 10px;
    margin-top: 22px;
    // background-color: rgb(red, 0.3);
    display: flex;
    height: 60px;
    align-items: center;
    &-left {
      margin-right: 22px;
      width: 44px;
      img {
        margin-top: 12px;
        width: 100%;
      }
    }
    &-center {
      margin-right: 8px;
      &-num {
        font-size: 30px;
      }
    }
    &-right {
      flex-grow: 1;
      // background-color: red;
      &-text {
        margin-top: -10px;
        text-align: end;
        font-size: 16px;
        span {
          font-size: 25px;
        }
      }
      &-block {
        margin-top: 13px;
        background-color: rgb(0, 0, 0, 0.12);
        height: 7px;
        &-list {
          height: 100%;
          transition: 1s all;
          background-color: #3beaff;
        }
      }
    }
  }
}
.chart {
  height: 130px;
  width: 95%;
  margin: 0 auto;
}
</style>
