import { ref } from 'vue'
export function useEcharts() {
  let option = ref({})
  let timer = null
  let chart = ref(null)
  let delay = 1000
  function startActions() {
    let dataIndex = -1

    const dataLen = option.value?.series?.[0]?.data?.length || 0

    if (!chart.value || dataLen === 0) {
      return
    }

    clearInterval(timer)

    timer = setInterval(() => {
      if (!chart.value) {
        clearInterval(timer)

        return
      }

      chart.value.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex,
      })
      dataIndex = (dataIndex + 1) % dataLen
      chart.value.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex,
      })
      chart.value.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex,
      })
    }, delay)
  }

  function stopActions() {
    clearInterval(timer)
  }

  function autoActions() {
    startActions()
    if (chart.value) {
      // 鼠标移入停止轮播
      chart.value.off('mouseover').on('mouseover', stopActions)
      // 鼠标移出重新开始轮播
      chart.value.off('mouseout').on('mouseout', startActions)
    }
  }

  return {
    option,
    chart,
    autoActions,
  }
}
