<template>
  <div class="map">
    <div id="chartMap" class="chartMap"></div>
    <div class="absolute">
      <div class="btn" v-for="(row, i) in btn" :class="{ active: i === index }" @click="index = i">
        <div class="btn-content"></div>
      </div>
      <!-- <div class="btn">
        <div>机构端上线机构</div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import 'echarts-gl'

import dataJson from './350000.json'
import { inject, onMounted, watch, ref } from 'vue'
let btn = ref(['机构端上线机构', '用户端上线机构'])
let index = ref(0)
onMounted(getEcharts)
//地图设置
function getEcharts() {
  let data = [
    { name: '南平市', value: [118.178459, 26.635627, 10] },
    { name: '宁德市', value: [119.527082, 26.6592, 100] },
    { name: '三明市', value: [117.635001, 26.26544, 20] },
    { name: '龙岩市', value: [117.02978, 25.0916, 100] },
    { name: '漳州市', value: [117.661801, 24.51089, 40] },
    { name: '厦门市', value: [118.11022, 24.49047, 100] },
    { name: '泉州市', value: [118.589421, 24.90885, 50] },
    { name: '莆田市', value: [119.007558, 25.43101, 100] },
    { name: '福州市', value: [119.306239, 26.0753, 60] },
  ]
  let mapName = 'gd'
  echarts.registerMap(mapName, dataJson)

  //地图chart 设置
  // let option = {
  //   geo: {
  //     map: mapName, //使用
  //     zoom: 1.2,
  //     roam: false,
  //     itemStyle: {
  //       shadowColor: 'rgb(113,245,246)',
  //       shadowOffsetX: 5,
  //       shadowOffsetY: 5,
  //     },
  //   },
  //   series: [
  //     {
  //       type: 'map',
  //       label: {
  //         show: true,
  //         fontSize: 10,
  //         color: 'white',
  //         fontWeight: 'bold',
  //       },
  //       itemStyle: {
  //         borderColor: '#9DC2E9',
  //         areaColor: 'rgb(72,142,244)',
  //         borderWidth: 1,
  //       },
  //       emphasis: {
  //         label: {
  //           color: 'white',
  //         },
  //         itemStyle: {
  //           borderColor: 'rgb(113,245,246)',
  //           areaColor: '#3879F8',
  //         },
  //       },
  //       select: {
  //         label: {
  //           color: 'white',
  //         },
  //         itemStyle: {
  //           borderColor: 'rgb(113,245,246)',
  //           areaColor: '#3879F8',
  //         },
  //       },
  //       zoom: 1.2,
  //       roam: false,
  //       data: data.value,
  //       map: mapName, //使用
  //     },
  //   ],
  // }

  let option = {
    geo3D: {
      map: mapName,
      label: {
        show: false,
      },

      emphasis: {
        label: {
          show: false,
        },
      },
      viewControl: {
        distance: 100,
        center: [-10, -10, 20],
        alpha: 40, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。
        beta: -5, // 视角绕 y 轴，即左右旋转的角度。
      },
      // environment: 'black',
      itemStyle: {
        borderColor: 'rgb(62,215,213)',
        areaColor: '#4490fc',
        borderWidth: 1,
      },
    },

    series: [
      {
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        bevelSize: 0,
        tooltip: {
          formatter: function () {
            const htmlContent = `<span style="color: red;">23233</span>`

            return htmlContent
          },
        },
        data: data,
      },
    ],
  }

  let myEcharts = echarts.init(document.getElementById('chartMap'))
  myEcharts.setOption(option)
}
</script>

<style lang="scss" scoped>
.map {
  position: relative;
  .absolute {
    font-size: 22px;
    width: 250px;
    position: absolute;
    bottom: 0px;
    right: 13px;
    .btn {
      background-image: url('@/assets//btn.png');
      background-size: 100%;
      transition: 0.3s all;
      cursor: pointer;
      border-radius: 12px;
      width: 230px;
      height: 52px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 19px;
      &-content {
        transition: 0.3s all;
        transform: translateY(-0.1px);
        border-radius: 10px;
        text-align: center;
        line-height: 52px;
        width: 227px;
        height: 53px;
      }
    }
    .active {
      background-image: url('@/assets//btn1.png');
      .btn-content {
      }
    }
  }
}
.chartMap {
  position: relative;
  width: 100%;
  height: 800px;
  // background-color: var(--screen-box-background) !important;
  // background-color: pink;
}
</style>
