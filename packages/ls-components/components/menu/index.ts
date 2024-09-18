import type { App } from 'vue';
import _LSMenu from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';
import useRouterHook from '@cpo/_hooks/useRouterHook';

const LSMenu = Object.assign(_LSMenu, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSMenu.name) {
      app.component(_LSMenu.name, _LSMenu);
    }
  }
});

export default LSMenu;

export { useRouterHook };
