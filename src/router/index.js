import { createRouter, createWebHashHistory } from 'vue-router'

const constantRoutes = [
  { path: '', component: () => import('@/views/screen/index.vue') },
  { path: '/404', component: () => import('@/views/404.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router

export function setupRouter(app) {
  app.use(router)
}
