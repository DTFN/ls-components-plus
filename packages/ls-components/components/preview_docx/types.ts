import { buildProps } from '@cpo/_utils/runtime';

// docx
export const docxProps = buildProps({
  source: {
    type: [ArrayBuffer, String],
    default: null
  },
  onClose: Function
});
