<template>
  <div class="wrap">
    <div class="wrap-container" v-for="(v, i) in list" :key="i">
      <div class="part">
        <div class="row-1 linear">
          <animationNum :num="v.num"></animationNum>
          <span class="unit"> {{ v.unit }} </span>
        </div>
        <div class="row-2">{{ v.text }}</div>
      </div>
      <div class="split" v-if="i != list.length - 1"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
let list = ref([
  { num: 2345, unit: '万人', text: '用户端用户总数' },
  { num: 5678, unit: '万次', text: '用户端访问量' },
  { num: 6789, unit: '万张', text: '处方总量' },
  { num: 7890, unit: '万元', text: '增值服务收入' },
])
</script>
<style scoped lang="scss">
.wrap {
  margin-top: 130px;
  margin-bottom: 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  .wrap-container {
    display: flex;
    align-items: center;
  }
  .split {
    width: 1px;
    height: 52.6px;
    background: #a6daff;
    margin: 0 20px;
  }
  .part {
    flex: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    .row-1 {
      font-weight: bold;
      display: flex;
      align-items: baseline;
      font-size: 48px;
      .unit {
        font-size: 20px;
      }
    }
    .row-2 {
      margin-top: -4px;
      font-size: 20px;
      color: white;
      // font-weight: bold;
    }
  }
}
</style>
