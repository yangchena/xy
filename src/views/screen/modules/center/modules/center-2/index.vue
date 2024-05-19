<template>
  <div class="map">
    <div id="chartMap" class="chartMap"></div>
    <div class="absolute">
      <div class="btn" v-for="(row, i) in btn" :class="{ active: i === index }" @click="change(i)">
        <div class="btn-content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { commonEchartsConfig } from '@/utils/utils'

import dataJson from './350000.json'
import { getRandom } from '@/utils/utils'
import { inject, onMounted, watch, ref } from 'vue'
import { useEcharts } from '@/utils/hooks/useEcharts'
let btn = ref(['机构端上线机构', '用户端上线机构'])
let index = ref(0)
let { option, chart, autoActions } = useEcharts()

function change(i) {
  index.value = i
  getEcharts()
}

onMounted(getEcharts)
//地图设置
function getEcharts() {
  if (chart.value) {
    chart.value.dispose()
  }
  chart.value = echarts.init(document.getElementById('chartMap'))
  let _config = commonEchartsConfig()
  let mapName = 'map'
  echarts.registerMap(mapName, dataJson)

  var geoCoordMap = {
    南平市: [118.147051, 27.338631],
    宁德市: [119.489149, 26.971576],
    三明市: [117.635001, 26.26544],
    龙岩市: [117.02978, 25.0916],
    漳州市: [117.661801, 24.51089],
    厦门市: [118.123854, 24.676398],
    泉州市: [118.589421, 24.90885],
    莆田市: [119.007558, 25.43101],
    福州市: [119.306239, 26.0753],
  }
  let min = 1000
  let max = 5000
  var customerBatteryCityData = [
    { name: '南平市', value: getRandom(min, max) },
    { name: '宁德市', value: getRandom(min, max) },
    { name: '三明市', value: getRandom(min, max) },
    { name: '龙岩市', value: getRandom(min, max) },
    { name: '漳州市', value: getRandom(min, max) },
    { name: '厦门市', value: getRandom(min, max) },
    { name: '泉州市', value: getRandom(min, max) },
    { name: '莆田市', value: getRandom(min, max) },
    { name: '福州市', value: getRandom(min, max) },
  ]

  // 动态计算柱形图的高度（定一个max）
  function lineMaxHeight() {
    const maxValue = Math.max(...customerBatteryCityData.map((item) => item.value))
    return 0.9 / maxValue
  }
  // 柱状体的主干
  function lineData() {
    return customerBatteryCityData.map((item) => {
      return {
        coords: [geoCoordMap[item.name], [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + item.value * lineMaxHeight()]],
      }
    })
  }
  // 柱状体的顶部
  function scatterData() {
    return customerBatteryCityData.map((item) => {
      return [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + item.value * lineMaxHeight()]
    })
  }
  // 柱状体的底部
  function scatterData2() {
    return customerBatteryCityData.map((item) => {
      return {
        name: item.name,
        value: geoCoordMap[item.name],
      }
    })
  }

  option.value = {
    // backgroundColor: '#131C38',
    tooltip: {
      ..._config.tooltip,
    },
    geo: [
      {
        map: mapName,
        selectedMode: false,

        aspectScale: 0.9,
        roam: false, // 是否允许缩放
        zoom: 1, // 默认显示级别
        layoutSize: '95%',
        layoutCenter: ['55%', '50%'],
        itemStyle: {
          normal: {
            areaColor: {
              type: 'linear-gradient',
              x: 0,
              y: 400,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(37,108,190,0.3)', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(15,169,195,0.3)', // 50% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
            borderColor: '#4ecee6',
            borderWidth: 1,
          },
          emphasis: {
            areaColor: {
              type: 'linear-gradient',
              x: 0,
              y: 300,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(37,108,190,1)', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(15,169,195,1)', // 50% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
          },
        },
        emphasis: {
          itemStyle: {
            areaColor: '#0160AD',
          },
          label: {
            show: 0,
            color: '#fff',
          },
        },
        zlevel: 3,
      },
      {
        map: mapName,
        selectedMode: false,

        aspectScale: 0.9,
        roam: false, // 是否允许缩放
        zoom: 1, // 默认显示级别
        layoutSize: '95%',
        layoutCenter: ['55%', '50%'],
        itemStyle: {
          normal: {
            borderColor: 'rgba(192,245,249,.6)',
            borderWidth: 2,
            shadowColor: '#2C99F6',
            shadowOffsetY: 0,
            shadowBlur: 120,
            areaColor: 'rgba(29,85,139,.2)',
          },
        },
        zlevel: 2,
        silent: false,
      },
      {
        map: mapName,
        selectedMode: false,

        aspectScale: 0.9,
        roam: false, // 是否允许缩放
        zoom: 1, // 默认显示级别
        layoutSize: '95%',
        layoutCenter: ['55%', '51.5%'],
        itemStyle: {
          // areaColor: '#005DDC',
          areaColor: 'rgba(0,27,95,0.4)',
          borderColor: '#004db5',
          borderWidth: 1,
        },
        zlevel: 1,
        silent: false,
      },
    ],
    series: [
      // map
      {
        name: '上线机构',
        geoIndex: 0,
        // coordinateSystem: 'geo',
        showLegendSymbol: true,
        type: 'map',
        roam: true,
        label: {
          normal: {
            show: false,
            textStyle: {
              color: '#fff',
            },
          },
          emphasis: {
            show: false,
            textStyle: {
              color: '#fff',
            },
          },
        },

        itemStyle: {
          normal: {
            borderColor: '#2ab8ff',
            borderWidth: 1.5,
            areaColor: '#12235c',
          },
          emphasis: {
            areaColor: '#2AB8FF',
            borderWidth: 0,
            color: 'red',
          },
        },
        map: mapName,
        selectedMode: false,
        // 使用
        data: customerBatteryCityData,
        // data: this.difficultData //热力图数据   不同区域 不同的底色
      },
      // 柱状体的主干
      {
        tooltip: { show: false },
        type: 'lines',
        zlevel: 5,
        effect: {
          show: false,
          // period: 4, //箭头指向速度，值越小速度越快
          // trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
          // symbol: 'arrow', //箭头图标
          // symbol: imgDatUrl,
          symbolSize: 5, // 图标大小
        },
        lineStyle: {
          width: 20, // 尾迹线条宽度
          color: 'rgb(22,255,255, .6)',
          opacity: 1, // 尾迹线条透明度
          curveness: 0, // 尾迹线条曲直度
        },
        label: {
          show: 0,
          position: 'end',
          formatter: '245',
        },
        silent: false,
        data: lineData(),
      },
      // 柱状体的顶部
      {
        tooltip: { show: false },

        type: 'scatter',
        coordinateSystem: 'geo',
        geoIndex: 0,
        zlevel: 5,
        label: {
          show: false,
          position: 'top',
        },
        symbol: 'circle',
        symbolSize: [20, 10],
        itemStyle: {
          color: 'rgb(22,255,255, 1)',
          opacity: 1,
        },
        silent: false,
        data: scatterData(),
      },
      // 柱状体的底部
      {
        tooltip: { show: false },

        type: 'scatter',
        coordinateSystem: 'geo',
        geoIndex: 0,
        zlevel: 4,
        label: {
          // 这儿是处理的
          formatter: '{b}',
          position: 'bottom',
          color: '#fff',
          fontSize: 12,
          distance: 10,
          show: true,
        },
        symbol: 'circle',
        symbolSize: [20, 10],
        itemStyle: {
          // color: '#F7AF21',
          color: 'rgb(22,255,255, 1)',
          opacity: 1,
        },
        silent: false,
        data: scatterData2(),
      },
      // 底部外框
      {
        tooltip: { show: false },

        type: 'scatter',
        coordinateSystem: 'geo',
        geoIndex: 0,
        zlevel: 4,
        label: {
          show: false,
        },
        symbol: 'circle',
        symbolSize: [40, 20],
        itemStyle: {
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: 'rgb(22,255,255, 0)', // 0% 处的颜色
              },
              {
                offset: 0.75,
                color: 'rgb(22,255,255, 0)', // 100% 处的颜色
              },
              {
                offset: 0.751,
                color: 'rgb(22,255,255, 1)', // 100% 处的颜色
              },
              {
                offset: 1,
                color: 'rgb(22,255,255, 1)', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },

          opacity: 1,
        },
        silent: false,
        data: scatterData2(),
      },
    ],
  }

  chart.value.setOption(option.value)

  autoActions()
}
</script>

<style lang="scss" scoped>
.map {
  margin-left: 20px;
  // background-color: #131c38;
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
