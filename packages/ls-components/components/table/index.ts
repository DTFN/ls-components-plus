import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';
import type { App } from 'vue';
import _LSTable from './Table.vue';

const LSTable = Object.assign(_LSTable, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSTable.name) {
      app.component(_LSTable.name, _LSTable);
    }
  }
});

export default LSTable;
