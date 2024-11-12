import type { App } from 'vue';
import _LSBackTop from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSBackTop = Object.assign(_LSBackTop, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSBackTop.name) {
      app.component(_LSBackTop.name, _LSBackTop);
    }
  }
});

export default LSBackTop;
