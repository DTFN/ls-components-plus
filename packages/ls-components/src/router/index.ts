import type { App } from 'vue'
import type { RouteMeta } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

function updateMeta(meta: RouteMeta) {
  document.title = `${import.meta.env.VITE_GLOB_APP_TITLE}-${meta.title || ''}`
}

router.beforeEach((to, from, next) => {
  // 进入页面时滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  updateMeta(to.meta)

  next()
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
