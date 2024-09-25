import { setupElement } from '@/plugins/element';
import { setupRouter } from '@/router/index';
import { createApp } from 'vue';
import App from './App.vue';

import LSWebPlus, { vAuth } from '@cpo/main';

import 'element-plus/dist/index.css';

const app = createApp(App);

function createDirective() {
  vAuth.permissions = ['a', 'b', 'c'];
  app.directive('auth', vAuth);
}

// 创建实例
const setupAll = () => {
  setupElement(app);
  setupRouter(app);
  app.mount('#app');

  app.use(LSWebPlus);

  createDirective();
};

setupAll();
