import type { App } from 'vue';
import _LSMenu from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSMenu = Object.assign(_LSMenu, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSMenu.name) {
      app.component(_LSMenu.name, _LSMenu);
    }
  }
});

export default LSMenu;
