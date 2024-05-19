<template>
  <div class="echart" :id="id"></div>
</template>

<script setup>
import { commonEchartsConfig } from '@/utils/utils'
import { useEcharts } from '@/utils/hooks/useEcharts'
import * as echarts from 'echarts'
import { onMounted } from 'vue'
import { randomString } from '@/utils/utils'

let { option, chart, autoActions } = useEcharts()

let prop = defineProps(['list', 'max'])

let id = 'id' + randomString()
onMounted(() => {
  initChart()
})
function initChart() {
  if (chart.value) {
    chart.value.dispose()
  }
  chart.value = echarts.init(document.getElementById(id))

  let _config = commonEchartsConfig()

  option.value = {
    tooltip: {
      ..._config.tooltip,
    },
    grid: {
      left: '0',
      right: '0',
      bottom: '0',
      top: '15',
      containLabel: true,
    },
    xAxis: {
      data: prop.list.map((_) => _.name),
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        color: 'white',
      },
    },
    yAxis: {
      splitLine: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false },
    },
    series: [
      {
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',

        label: {
          show: true,
          position: 'top',
          distance: 0,
          color: 'white',
          opacity: 1,
        },

        itemStyle: {
          normal: {
            opacity: 0.8,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#1890FF', // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: '#18A5B8', // 100% 处的颜色
                },
                {
                  offset: 1,
                  color: '#1890FF', // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          },
        },
        data: prop.list.map((_) => _.num),
        z: 10,
      },
    ],
  }

  chart.value.setOption(option.value)

  autoActions()
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
