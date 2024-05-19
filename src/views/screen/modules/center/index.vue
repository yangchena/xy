<template>
  <div>
    <module-center-1 class=" "></module-center-1>
    <module-center-2 class="bg2"></module-center-2>
  </div>
</template>
<script setup>
import ModuleCenter1 from './modules/center-1/index.vue'
import ModuleCenter2 from './modules/center-2/index.vue'
// const ModuleCenter1 = defineAsyncComponent(() => import('./modules/center-1/index.vue'))
// const ModuleCenter2 = defineAsyncComponent(() => import('./modules/center-2/index.vue'))
</script>
<style scoped>
.bg2 {
  background-color: #131c38;
}
</style>
