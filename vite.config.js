import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  //检查process.cwd()路径下环境文件
  let env = loadEnv(mode, process.cwd())
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      // host: '192.168.60.24',
      port: 9000, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      proxy: {
        '/proxy': {
          secure: false, // 如果是https接口，需要配置这个参数
          changeOrigin: true, // //是否跨域
          target: env.VITE_BASE_API,
          rewrite: (path) => path.replace(/^\/proxy/, ''),
        },
      },
    },
  }
})
