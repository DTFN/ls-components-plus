import type { App } from 'vue';
import _LSFlowBox from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSFlowBox = Object.assign(_LSFlowBox, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSFlowBox.name) {
      app.component(_LSFlowBox.name, _LSFlowBox);
    }
  }
});

export default LSFlowBox;
