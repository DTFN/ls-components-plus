import type { App } from 'vue';
import _LSLayout from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSLayout = Object.assign(_LSLayout, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSLayout.name) {
      app.component(_LSLayout.name, _LSLayout);
    }
  }
});

export default LSLayout;
