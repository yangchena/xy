<template>
  <div class="right-0">
    <div class="right-0-text">{{ time }}</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
let time = ref()

setInterval(() => {
  time.value = formatTime(new Date())
}, 1000)
function formatTime(date) {
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()

  var formattedTime = hours.toString().padStart(2, '0') + ' : ' + minutes.toString().padStart(2, '0') + ' : ' + seconds.toString().padStart(2, '0')

  return formattedTime
}
</script>
<style scoped lang="scss">
.right-0 {
  height: 80px;
  color: white;
  &-text {
    font-size: 25px;
    text-align: right;
    // margin-left: 365px;
    margin-right: 70px;
    padding-top: 50px;
  }
}
</style>
