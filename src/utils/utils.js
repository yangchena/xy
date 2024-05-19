// 随机字符串
export function randomString(len) {
  len = len || 10
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz' /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length
  var pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

/**
 * 获取指定数值区间的随机数
 * @param min
 * @param max
 */
export function getRandom(min = 0, max = 100) {
  // +1包括最大值
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 图表公共轴配置
export function commonEchartsConfig() {
  let tooltip = {
    position: function (point, params, dom, rect, size) {
      // 固定在顶部
      return [point[0], point[1]]
    },
    confine: true,
    backgroundColor: 'rgba(0, 0, 0, 0.48)',
    borderColor: 'transparent',
    textStyle: { color: 'white' },
  }
  return { tooltip }
}

/**
 * @param dateStr 日期字符串或时间戳
 * @param format 这个格式 随便你拼接例如：YYYY年MM-DD日 --> 2024年03-05日
 */
export function formatDate(dateStr, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!dateStr) return ''

  // 处理10位时间戳转化
  if (Number(dateStr) && String(dateStr).length == 10) {
    dateStr = dateStr * 1000
  }

  const time = new Date(dateStr)
  if (!isValidDate(time)) return ''

  const options = {
    YYYY: time.getFullYear(),
    MM: (time.getMonth() + 1 < 10 ? '0' : '') + (time.getMonth() + 1),
    DD: (time.getDate() < 10 ? '0' : '') + time.getDate(),
    HH: (time.getHours() < 10 ? '0' : '') + time.getHours(),
    mm: (time.getMinutes() < 10 ? '0' : '') + time.getMinutes(),
    ss: (time.getSeconds() < 10 ? '0' : '') + time.getSeconds(),
  }

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => options[match])
}
