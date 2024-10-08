import type { App } from 'vue';
import _LSJsonEditor from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSJsonEditor = Object.assign(_LSJsonEditor, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSJsonEditor.name) {
      app.component(_LSJsonEditor.name, _LSJsonEditor);
    }
  }
});

export default LSJsonEditor;
