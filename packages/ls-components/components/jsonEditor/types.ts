import { buildProps } from '@cpo/_utils/runtime';

export const lsJsonEditorProps = buildProps({
  jsonValue: {
    type: [Object, String],
    default: () => {
      return {};
    }
  }
});
