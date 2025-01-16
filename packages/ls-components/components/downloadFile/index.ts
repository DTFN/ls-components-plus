import type { App } from 'vue';
import _LSDownloadFile from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSDownloadFile = Object.assign(_LSDownloadFile, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSDownloadFile.name) {
      app.component(_LSDownloadFile.name, _LSDownloadFile);
    }
  }
});

export default LSDownloadFile;
