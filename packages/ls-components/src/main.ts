import { setupElement } from '@/plugins/element';
import { setupRouter } from '@/router/index';
import { createApp } from 'vue';
import App from './App.vue';

// import LSWebPlus, { vAuth } from '@cpo/main';

import LSWebPlus, { vAuth } from '../lib/';

import 'element-plus/dist/index.css';
import '../lib/lsWebPlus.css';

const app = createApp(App);

function createDirective() {
  vAuth.permissions = ['a', 'b', 'c'];
  app.directive('auth', vAuth);
}

// 创建实例
const setupAll = () => {
  setupElement(app);
  setupRouter(app);
  app.use(LSWebPlus);

  createDirective();

  app.mount('#app');
};

setupAll();
