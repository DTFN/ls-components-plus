import type { App, ComponentPublicInstance } from 'vue';
import _LSUploader from './Index.vue';
import { setGlobalConfig } from '../_utils/config';
import type { LSOptions } from '../_utils/types';

const LSUploader: ComponentPublicInstance<any> = Object.assign(_LSUploader, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSUploader.name) {
      app.component(_LSUploader.name, _LSUploader);
    }
  }
});

export default LSUploader;
