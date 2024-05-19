<template>
  <div class="block1">
    <div class="list" :style="{ width: rate }"></div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
let props = defineProps(['num'])
let rate = ref(0)
setTimeout(() => {
  rate.value = (props.num / 2258) * 100 + '%'
  console.log(rate.value)
}, 1000)
</script>
<style scoped lang="scss">
.block1 {
  width: 110px;
  height: 4px;
  margin-bottom: 2px;
  margin-right: 15px;
  .list {
    background-color: rgb(1, 238, 196);
    height: 100%;
    transition: 1s all;
  }
}
</style>
