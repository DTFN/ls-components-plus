import type { App } from 'vue';
import _LSPrint from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSPrint = Object.assign(_LSPrint, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSPrint.name) {
      app.component(_LSPrint.name, _LSPrint);
    }
  }
});

export default LSPrint;
