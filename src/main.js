import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css' // 在产业地图模块有用到

import { setupRouter } from '@/router'
import { setupComponents } from '@/components'

function bootstrap() {
  const app = createApp(App)

  // 配置路由
  setupRouter(app)

  // 配置全局组件
  setupComponents(app)
  // app.use(ElementPlus)
  app.mount('#app')
}

bootstrap()

import '@/styles/index.scss' // 配置全局样式
