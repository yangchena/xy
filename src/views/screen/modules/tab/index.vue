<template>
  <div class="tab">
    <div class="tab-list" :class="{ active: index == i }" @click="index = i" v-for="(row, i) in props.tab">{{ row }}</div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
let props = defineProps(['tab'])
let index = ref(0)

const emit = defineEmits(['change'])
watch(index, (newVal) => {
  emit('change')
})
</script>
<style scoped lang="scss">
.tab {
  margin-top: 3px;
  display: flex;
  justify-content: center;
  &-list {
    cursor: pointer;
    font-size: 14px;
    line-height: 26px;
    width: 92px;
    height: 26px;
    text-align: center;
    background-color: rgb(255, 255, 255, 0.2);
    transition: 0.3s all;
  }
  .active {
    font-weight: bold;
    background-color: rgb(32, 242, 255, 0.6);
  }
}
</style>
