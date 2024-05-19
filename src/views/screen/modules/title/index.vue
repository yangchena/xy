<template>
  <div class="title">
    <div class="title-left">
      <img class="group" src="@/assets/group.png" alt="" />
      <img class="icon" src="@/assets/title1.png" alt="" />
    </div>
    <div class="title-right">
      <div class="title-right-text">{{ props.title }}</div>
      <img class="line" src="@/assets/line.png" alt="" />
    </div>
  </div>
</template>
<script setup>
let props = defineProps(['title', 'width'])
</script>
<style scoped lang="scss">
.title {
  display: flex;
  width: 100%;
  // background-color: tan;
  &-left {
    width: 90px;
    flex-shrink: 0;
    position: relative;
    .group {
      width: 100%;
      height: 100%;
    }
    .icon {
      position: absolute;
      width: 40px;
      left: 25px;
      top: 25px;
    }
  }
  &-right {
    display: flex;
    justify-content: center;
    flex-direction: column;
    &-text {
      font-weight: bold;
      margin-left: 12px;
      margin-bottom: 5px;
      font-size: 23px;
      color: white;
    }
    .line {
      width: 100%;
    }
  }
}
</style>
