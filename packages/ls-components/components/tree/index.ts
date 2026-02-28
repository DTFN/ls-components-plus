import type { App } from 'vue';
import _LSTree from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSTree: typeof _LSTree & { install: (app: App, options?: LSOptions) => void } = Object.assign(_LSTree, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSTree.name) {
      app.component(_LSTree.name, _LSTree);
    }
  }
});

export default LSTree;
