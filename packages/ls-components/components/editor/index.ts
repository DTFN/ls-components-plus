import type { App } from 'vue';
import _LSEditor from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSEditor = Object.assign(_LSEditor, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSEditor.name) {
      app.component(_LSEditor.name, _LSEditor);
    }
  }
});

export default LSEditor;
