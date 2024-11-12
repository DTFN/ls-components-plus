import type { App } from 'vue';
import _LSLive from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSLive = Object.assign(_LSLive, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSLive.name) {
      app.component(_LSLive.name, _LSLive);
    }
  }
});

export default LSLive;
