import type { App } from 'vue';
import _LSBreadcrumb from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSBreadcrumb = Object.assign(_LSBreadcrumb, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSBreadcrumb.name) {
      app.component(_LSBreadcrumb.name, _LSBreadcrumb);
    }
  }
});

export default LSBreadcrumb;

export type { DefineListType } from './types';
