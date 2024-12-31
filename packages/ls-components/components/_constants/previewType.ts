import { buildProps } from '@cpo/_utils/runtime';
import { ExtractPropTypes } from 'vue';

export const previewEmits = ['close', 'switch', 'update:source', 'loadComplete', 'loadError', 'download'];

export type PreviewEmits = typeof previewEmits;

export type PreviewPropType = ExtractPropTypes<Partial<typeof lsPreviewProp>>;

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
  },
  hasDownload: {
    type: Boolean,
    default: false
  },
  downloadData: {
    type: Object,
    default: () => {
      return {};
    }
  }
});
