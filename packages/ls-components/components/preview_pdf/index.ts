import type { App } from 'vue';
import _LSPreviewPdf from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSPreviewPdf = Object.assign(_LSPreviewPdf, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSPreviewPdf.name) {
      app.component(_LSPreviewPdf.name, _LSPreviewPdf);
    }
  }
});

export default LSPreviewPdf;
