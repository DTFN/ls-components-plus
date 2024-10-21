import { setupElement } from '@/plugins/element';
import { setupRouter } from '@/router/index';
import { createApp } from 'vue';
import App from './App.vue';

import print from 'vue3-print-nb';

// import LSWebPlus, { vAuth } from '@cpo/main';

// import { LSButton, LSMenu, LSBellMessage, LSBreadcrumb, LSLayout, vAuth } from '@cpo/main';

// import LSWebPlus, { vAuth } from '../lib/';

import { LSButton, LSMenu, LSBellMessage, LSBreadcrumb, LSLayout, vAuth } from '../lib/';

import 'element-plus/dist/index.css';
import '../lib/lsWebPlus.css';

const app = createApp(App);

function createDirective() {
  app.directive('print', print);
  vAuth.permissions = ['a', 'b', 'c'];
  app.directive('auth', vAuth);
}

// 创建实例
const setupAll = () => {
  setupElement(app);
  setupRouter(app);

  // app.use(LSWebPlus);
  app.component('LSButton', LSButton);
  app.component('LSMenu', LSMenu);
  app.component('LSBellMessage', LSBellMessage);
  app.component('LSBreadcrumb', LSBreadcrumb);
  app.component('LSLayout', LSLayout);

  createDirective();

  app.mount('#app');
};

setupAll();
