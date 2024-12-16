import type { App } from 'vue';
import _LSPreviewImage from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSPreviewImage = Object.assign(_LSPreviewImage, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSPreviewImage.name) {
      app.component(_LSPreviewImage.name, _LSPreviewImage);
    }
  }
});

export default LSPreviewImage;
