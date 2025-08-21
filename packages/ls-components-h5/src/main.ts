import { setupRouter } from '@/router/index';
import { createApp } from 'vue';
import App from './App.vue';
import 'vant/lib/index.css';

import LSH5Components from '@cpo/main';

const app = createApp(App);

function setupAll() {
  setupRouter(app);

  app.use(LSH5Components);

  app.mount('#app');
}

setupAll();
