import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';
import type { App } from 'vue';
import _LSList from './List.vue';

const LSList: typeof _LSList & { install: (app: App, options?: LSOptions) => void } = Object.assign(_LSList, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSList.name) {
      app.component(_LSList.name, _LSList);
    }
  }
});

export default LSList;
