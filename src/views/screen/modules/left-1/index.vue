<template>
  <div class="left-1">
    <base-title title="机构端使用情况"></base-title>
    <div class="center">
      <img src="@/assets/1-home.png" alt="" />
      <div class="center-text">
        <div class="center-text-name">使用机构总数</div>
        <div class="center-text-num"><animationNum :num="1234"></animationNum> <span class="unit">家</span></div>
      </div>
      <img src="@/assets/1-add.png" alt="" />
      <div class="center-text">
        <div class="center-text-name">诊疗数据总数</div>
        <div class="center-text-num"><animationNum :num="456789"></animationNum> <span class="unit">条</span></div>
      </div>
    </div>
    <div class="table">
      <div class="table-head">
        <div class="table-head-address">地区</div>
        <div class="table-head-use">使用机构</div>
        <div class="table-head-data">诊疗数据</div>
      </div>
      <div class="table-body" v-for="(row, index) in arr" :class="{ white: index % 2 == 1 }">
        <div class="table-body-address">{{ row.name }}</div>
        <div class="table-body-use"><animationNum :num="row.use"></animationNum></div>
        <block1 :num="row.data"></block1>
        <div class="table-body-data"><animationNum :num="row.use"></animationNum></div>
        <block2 :num="row.data"></block2>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import block1 from './block1.vue'
import block2 from './block2.vue'
let arr = ref([
  { name: '福州市', use: 801, data: 1201 },
  { name: '莆田', use: 328, data: 628 },
  { name: '三明市', use: 451, data: 951 },
  { name: '厦门市', use: 2236, data: 2236 },
])
</script>
<style scoped lang="scss">
.left-1 {
  margin-top: 80px;
  margin-left: 35px;
  height: 338px;
  .center {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    img {
      width: 46px;
    }
    &-text {
      margin-left: 20px;
      margin-right: 45px;
      &-name {
      }
      &-num {
        font-size: 27px;
        .unit {
          font-size: 16px;
        }
      }
    }
  }
  .table {
    padding-left: 16px;
    margin-top: 16px;
    height: 150px;
    // background-color: red;
    &-head {
      background-color: rgb(0, 178, 255, 29%);
      // background-color: rgb(red, 0.3);
      height: 33px;
      font-size: 12px;
      align-items: center;
      display: flex;
      &-address {
        margin-left: 34px;
      }
      &-use {
        margin-left: 47px;
      }
      &-data {
        margin-left: 128px;
      }
    }
    .white {
      background-color: rgb(255, 255, 255, 0.15);
    }
    &-body {
      height: 30px;
      font-size: 12px;
      align-items: center;
      display: flex;
      &-address {
        width: 90px;
        text-align: center;
      }
      &-use {
        margin-left: 15px;
        width: 50px;
        text-align: center;
      }
      &-block1 {
        width: 110px;
        background-color: rgb(0, 208, 236);
        height: 4px;
        margin-bottom: 2px;
        margin-right: 15px;
      }
      &-data {
        width: 50px;
        margin-right: 15px;
      }
    }
  }
}
</style>
