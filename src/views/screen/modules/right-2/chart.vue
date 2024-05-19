<template>
  <div class="echart" :id="id"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { commonEchartsConfig } from '@/utils/utils'
import { onMounted } from 'vue'
import { randomString } from '@/utils/utils'

let prop = defineProps(['list', 'max'])
let id = 'id' + randomString()
onMounted(() => {
  initChart()
})
let chart
let timer = null
let delay = 1000
let option
function initChart() {
  if (chart) {
    chart.dispose()
  }
  chart = echarts.init(document.getElementById(id))
  let _config = commonEchartsConfig()
  let colorBar = '#00C3DA'
  let colorLine = '#FFCC18'

  option = {
    tooltip: {
      trigger: 'axis',
      ..._config.tooltip,
      formatter: function (params) {
        let [first, second] = params
        return `
        <div class="tooltip-custom">
          <div class="row">
            <div class="dot color1"></div>
            <div class="text">
              <div class="name">${first.seriesName}</div>
              ${first.value}</div>
          </div>
          <div class="row">
            <div class="dot color2"></div>
            <div class="text">
              <div class="name">${second.seriesName}</div>
              ${second.value}</div>
          </div>
        </div>
        `
      },
    },
    grid: {
      left: '0',
      right: '0',
      bottom: '0',
      top: '15',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        splitLine: {
          show: false,
        },
        axisLine: {
          //坐标轴轴线相关设置。数学上的x轴
          show: true,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: 'white',
        },
        data: prop.list.map((_) => _.name),
      },
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLine: {
          //坐标轴轴线相关设置。数学上的x轴
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '访问量',
        type: 'bar',
        barWidth: 5,
        color: colorBar,
        data: prop.list.map((_) => _.num2),
      },
      {
        name: '上线机构',
        type: 'line',
        symbol: 'circle',
        color: colorLine,
        // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
          normal: {
            width: 3,
            color: colorLine, // 线条颜色
          },
        },
        areaStyle: {
          //区域填充样式
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: colorLine,
                },
                {
                  offset: 1,
                  color: 'rgba(255,218,24, 0.12)',
                },
              ],
              false
            ),
            shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
            shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          },
        },
        data: prop.list.map((_) => _.num1),
      },
    ],
  }

  chart.setOption(option)
  if (chart) {
    // 鼠标移入停止轮播
    chart.on('mouseover', stopActions)
    // 鼠标移出重新开始轮播
    chart.on('mouseout', startActions)
  }
  startActions()
}

function startActions() {
  let dataIndex = -1

  const dataLen = option?.series?.[0]?.data?.length || 0

  if (!chart || dataLen === 0) {
    return
  }

  clearInterval(timer)

  timer = setInterval(() => {
    if (!chart) {
      clearInterval(timer)

      return
    }

    chart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex,
    })
    dataIndex = (dataIndex + 1) % dataLen
    chart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex,
    })
    chart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex,
    })
  }, delay)
}

function stopActions() {
  clearInterval(timer)
}

defineExpose({
  initChart,
})
</script>

<style scoped>
.echart {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
.tooltip-custom {
  font-size: 15px;
  .row {
    display: flex;
    align-items: center;
    .dot {
      width: 10px;
      height: 10px;
      margin-right: 10px;
      border-radius: 50%;
    }
    .color1 {
      background-color: #00c3da;
    }
    .color2 {
      background-color: #ffcc18;
    }

    .text {
      display: flex;
      align-items: center;
      color: white;
      font-size: 12px;
      .name {
        width: 80px;
      }
    }
  }
}
</style>
