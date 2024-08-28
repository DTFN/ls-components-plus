import { setupElement } from '@/plugins/element'
import { setupRouter } from '@/router/index'
import { createApp } from 'vue'
import App from './App.vue'

import 'element-plus/dist/index.css'

const app = createApp(App)

// 创建实例
const setupAll = () => {
  setupElement(app)
  setupRouter(app)
  app.mount('#app')
}

setupAll()
