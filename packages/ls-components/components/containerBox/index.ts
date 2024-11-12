import type { App } from 'vue';
import _LSContainerBox from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSContainerBox = Object.assign(_LSContainerBox, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSContainerBox.name) {
      app.component(_LSContainerBox.name, _LSContainerBox);
    }
  }
});

export default LSContainerBox;
