<template>
  <div class="right-1">
    <base-title title="用户总览"></base-title>
    <div class="body">
      <div class="body-left">
        <div class="body-left-wx">
          <div class="icon"></div>
          <div>微信 &nbsp;</div>
          <div class="num linear"><animationNum :num="4567"></animationNum> <span class="unit">万人</span></div>
        </div>
        <div class="body-left-wx">
          <div class="icon"></div>
          <div>闽政通 &nbsp;</div>
          <div class="num linear"><animationNum :num="567"></animationNum> <span class="unit">万人</span></div>
        </div>
      </div>
      <div class="body-right">
        <div class="icon"></div>
        <div>闽政通</div>
        <div class="num linear"><animationNum :num="4567"></animationNum> <span class="unit">家</span></div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.right-1 {
  // margin-top: 80px;
  height: 276px;
  .body {
    text-align: center;
    width: 425px;
    background-image: url('@/assets/right-bg.png');
    background-size: 100% 100%;
    margin-left: 55px;
    margin-top: 6px;
    display: flex;
    height: 166px;
    .icon {
      height: 75px;
    }
    &-left {
      width: 280px;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      // background-color: rgb(11, 63, 103);
      &-wx {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
    }
    &-right {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 123px;
      margin-left: 15px;
      // background-color: red;
    }
    .num {
      font-size: 30px;
      font-weight: bold;
      .unit {
        color: white;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}
</style>
