import type { App } from 'vue';
import _LSDescriptions from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSDescriptions = Object.assign(_LSDescriptions, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSDescriptions.name) {
      app.component(_LSDescriptions.name, _LSDescriptions);
    }
  }
});

export default LSDescriptions;
