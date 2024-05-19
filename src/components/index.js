import baseTitle from '@/views/screen/modules/title/index.vue'
import baseTab from '@/views/screen/modules/tab/index.vue'
import baseMoney from '@/views/screen/modules/money/index.vue'
import animationNum from '@/views/screen/modules/animationNum/index.vue'

export function setupComponents(app) {
  app.component('baseTitle', baseTitle)
  app.component('baseTab', baseTab)
  app.component('baseMoney', baseMoney)
  app.component('animationNum', animationNum)
}
