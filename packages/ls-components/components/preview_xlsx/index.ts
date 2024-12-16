import type { App } from 'vue';
import _LSPreviewXlsx from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSPreviewXlsx = Object.assign(_LSPreviewXlsx, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSPreviewXlsx.name) {
      app.component(_LSPreviewXlsx.name, _LSPreviewXlsx);
    }
  }
});

export default LSPreviewXlsx;
