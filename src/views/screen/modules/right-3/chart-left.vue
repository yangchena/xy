<template>
  <div class="echart" :id="id"></div>
</template>

<script setup>
import { useEcharts } from '@/utils/hooks/useEcharts'

import * as echarts from 'echarts'
import { commonEchartsConfig } from '@/utils/utils'
import { onMounted } from 'vue'
import { randomString } from '@/utils/utils'

let { option, chart, autoActions } = useEcharts()

let prop = defineProps(['list', 'max'])
let id = 'id' + randomString()
onMounted(() => {
  initChart()
})
let fontsizeColor = '#83D0FB'

function initChart() {
  if (chart.value) {
    chart.value.dispose()
  }
  chart.value = echarts.init(document.getElementById(id))
  let _config = commonEchartsConfig()
  let numList = prop.list.map((_) => _.num1)
  option.value = {
    tooltip: { ..._config.tooltip },
    grid: {
      left: '30%',
      right: '8%',
      bottom: '0%',
      top: '10%',
      containLabel: true,
    },
    yAxis: [
      {
        type: 'category',
        // data: xData.value,
        data: prop.list.map((item) => item.name),
        axisLabel: {
          show: false, //让Y轴数据不显示
        },
        axisTick: {
          show: false, //隐藏Y轴刻度
        },
        axisLine: {
          show: false, //隐藏Y轴线段
        },
      },
    ],
    xAxis: [
      {
        inverse: true,
        type: 'value',
        show: false,
      },
    ],
    series: [
      {
        zlevel: 2,
        label: {
          show: false,
        },
        type: 'bar',
        barWidth: 4,
        barBorderRadius: 30,
        showBackground: true,
        backgroundStyle: {
          color: '#3B485D',
        },
        itemStyle: {
          normal: {
            color: function (params) {
              return {
                x: 0, //右
                y: 0, //下
                x2: 1, //左
                y2: 0, //上
                colorStops: [
                  {
                    offset: 0,
                    color: '#24E7E7', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#3CE88B', // 100% 处的颜色
                  },
                ],
              }
            },
          },
        },
        data: numList,
      },

      {
        barGap: '-100%',
        label: {
          show: true,
          position: 'left',
          offset: [-10, 0],
          color: fontsizeColor,
          fontSize: 14,
          formatter: function (params) {
            return numList[params.dataIndex]
          },
        },
        zlevel: 1,
        type: 'bar',
        barWidth: 4,
        barBorderRadius: 30,
        showBackground: true,
        backgroundStyle: {
          color: '#3B485D',
        },
        data: new Array(numList.length).fill(prop.max),
      },
    ],
  }

  chart.value.setOption(option.value)

  autoActions()
}
</script>

<style scoped>
.echart {
  width: 100%;
  height: 100%;
}
</style>
