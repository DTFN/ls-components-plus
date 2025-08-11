import type { App } from 'vue';
import _LSPreviewDocx from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSPreviewDocx: typeof _LSPreviewDocx & { install: (app: App, options?: LSOptions) => void } = Object.assign(
  _LSPreviewDocx,
  {
    install: (app: App, options?: LSOptions) => {
      setGlobalConfig(app, options);
      if (_LSPreviewDocx.name) {
        app.component(_LSPreviewDocx.name, _LSPreviewDocx);
      }
    }
  }
);

export default LSPreviewDocx;
