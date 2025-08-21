import type { App, ComponentPublicInstance } from 'vue';
import _LSPicker from './LSPicker.vue';
import { setGlobalConfig } from '../_utils/config';
import type { LSOptions } from '../_utils/types';

const LSDateTimePicker: ComponentPublicInstance<any> = Object.assign(_LSPicker, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSPicker.name) {
      app.component(_LSPicker.name, _LSPicker);
    }
  }
});

export default LSDateTimePicker;
