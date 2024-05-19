<template>
  <span ref="el" class="din">{{ getNumber(array[0]).toFixed(0) }}</span>
</template>
<script setup>
import { nextTick, ref, watch } from 'vue'
import { TransitionPresets, useTransition, useElementVisibility } from '@vueuse/core'

function getNumber(target) {
  return Number(target) || 0
}

let prop = defineProps(['num'])
let el = ref(null)
// 初始化 数组源
let baseArray = ref([0])
// 生成 基于数据源的 响应式对象
let array = getVuesueTransition(baseArray)
// 获取 组件库返回对象
function getVuesueTransition(target) {
  return useTransition(target, {
    duration: 1000,
    transition: TransitionPresets.easeInOutCubic,
  })
}
// 重渲染 滑动效果
function re_rendering() {
  nextTick(() => {
    baseArray.value = new Array(1).fill(0)
    array = getVuesueTransition(baseArray)
    baseArray.value = [prop.num]
  })
}
watch(useElementVisibility(el), (newValue) => {
  // 每次出现在视口时候 显示滑动效果
  if (newValue) {
    re_rendering()
  }
})
// 数字改变也重新滑动
watch(prop, () => {
  re_rendering()
})
re_rendering()
</script>

<style lang="scss" scoped>
.din {
  font-family: D-DIN;
}
</style>
