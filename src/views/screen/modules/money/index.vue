<template>
  <div class="money">
    <div class="money-text">累计成交金额</div>
    <div class="money-block" v-for="row in num"><animationNum :num="row"></animationNum></div>
    <div class="money-num">万元</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
let num = ref('12346')
</script>
<style scoped lang="scss">
.money {
  font-size: 16.5px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 10px;
  height: 50px;
  padding-right: 25px;
  &-text {
    margin-right: 10px;
    color: #56edef;
    font-weight: bold;
  }
  &-block {
    font-size: 26px;
    font-weight: bold;
    width: 30px;
    height: 40px;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    background-color: rgb(12, 148, 228);
    background: linear-gradient(180deg, #00aae0, #117ee8);
    color: rgb(255, 216, 23);
    margin: 0 2.5px;
  }
  &-num {
    margin-left: 5px;
    font-size: 14px;
  }
}
</style>
