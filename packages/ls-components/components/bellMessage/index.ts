import type { App } from 'vue';
import _LSBellMessage from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSBellMessage = Object.assign(_LSBellMessage, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSBellMessage.name) {
      app.component(_LSBellMessage.name, _LSBellMessage);
    }
  }
});

export default LSBellMessage;
