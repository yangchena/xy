<template>
  <div>
    <div class="wrap">
      <div class="title">
        <div class="title-name">闽诊通平台</div>
        <div class="title-adress"><img src="@/assets/title.png" alt="" /> 福建省</div>
      </div>
      <div class="wrap-left">
        <module-left-1></module-left-1>
        <module-left-2></module-left-2>
        <module-left-3></module-left-3>
      </div>
      <div class="wrap-center">
        <module-center></module-center>
      </div>
      <div class="wrap-right">
        <module-right-0></module-right-0>
        <module-right-1></module-right-1>
        <module-right-2></module-right-2>
        <module-right-3></module-right-3>
      </div>
    </div>
  </div>
</template>
<script setup>
import ModuleLeft1 from './modules/left-1/index.vue'
import ModuleLeft2 from './modules/left-2/index.vue'
import ModuleLeft3 from './modules/left-3/index.vue'
import ModuleCenter from './modules/center/index.vue'
import ModuleRight0 from './modules/right-0/index.vue'
import ModuleRight1 from './modules/right-1/index.vue'
import ModuleRight2 from './modules/right-2/index.vue'
import ModuleRight3 from './modules/right-3/index.vue'
</script>
<style scoped lang="scss">
.wrap {
  position: relative;
  color: white;
  background-color: rgb(15, 22, 33);
  background-image: url('@/assets/bg.jpg');
  background-image: url('@/assets/bg-2.png');
  background-size: 100% 100%;
  display: flex;
  flex-flow: row nowrap;
  width: 1920px;
  height: 1080px;

  .wrap-left {
    width: 535px;
    // background-color: pink;
  }
  .wrap-center {
    width: 840px;
    // background-color: blanchedalmond;
  }
  .wrap-right {
    width: 550px;
    // background-color: beige;
  }
  .title {
    width: 100%;
    height: 116px;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url('@/assets/big-title.png');
    background-size: 100% 100%;
    text-align: center;
    &-name {
      margin-top: 10px;
      font-size: 48px;
    }
    &-adress {
      padding-left: 5px;
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      font-weight: bold;
      img {
        margin-top: 5px;
        margin-right: 10px;
        width: 22px;
      }
    }
  }
}
</style>
