import type { App } from 'vue';
import _LSConfirm from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSConfirm = Object.assign(_LSConfirm, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSConfirm.name) {
      app.component(_LSConfirm.name, _LSConfirm);
    }
  }
});

export default LSConfirm;
