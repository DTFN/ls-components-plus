import type { App } from 'vue';
import _LSMap from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSMap = Object.assign(_LSMap, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSMap.name) {
      app.component(_LSMap.name, _LSMap);
    }
  }
});

export default LSMap;
