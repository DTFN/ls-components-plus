import type { App } from 'vue';
import _LSPreview from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSPreview = Object.assign(_LSPreview, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSPreview.name) {
      app.component(_LSPreview.name, _LSPreview);
    }
  }
});

export default LSPreview;
