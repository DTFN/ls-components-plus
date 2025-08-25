import { setupRouter } from '@/router/index';
import { createApp } from 'vue';
import App from './App.vue';
import 'lib-flexible/flexible';

import LSH5Components from '@cpo/main';

import 'vant/lib/index.css';

// import LSH5Components from '@lingshugroup/components-h5';
// import LSDateTimePicker from '@lingshugroup/components-h5/dateTimePicker';
// import LSH5Components from '../lib/index';
// import '../lib/index.css';

const app = createApp(App);

function setupAll() {
  setupRouter(app);

  app.use(LSH5Components);
  // app.component(LSDateTimePicker.name, LSDateTimePicker);

  app.mount('#app');
}

setupAll();
