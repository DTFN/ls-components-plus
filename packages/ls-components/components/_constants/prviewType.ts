import { buildProps } from '@cpo/_utils/runtime';

export const previewEmits = ['close', 'switch', 'update:source', 'loadComplete', 'loadError'];

export type PreviewEmits = typeof previewEmits;

export const lsPreviewProp = buildProps({
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
});
