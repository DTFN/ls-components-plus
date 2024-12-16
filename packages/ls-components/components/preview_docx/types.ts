import { buildProps } from '@cpo/_utils/runtime';

const emitNames = ['update:source', 'loadComplete', 'loadError'];

export { emitNames };

export const previewEmits = ['close', 'switch'].concat(emitNames);

export type PreviewEmits = typeof previewEmits;

// docx
export const docxProps = buildProps({
  source: {
    type: [ArrayBuffer, String],
    default: null
  },
  onClose: Function
});

export const lsPreviewProp = {
  source: {},
  zoomSize: {
    type: [Number, String],
    default: 1.5
  },
  needLoading: {
    type: Boolean,
    default: true
  },
  loadingOption: {
    type: Object,
    default: () => {
      return {
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.3)'
      };
    }
  }
};
