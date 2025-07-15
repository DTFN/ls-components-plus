import { buildProps } from '@cpo/_utils/runtime';

export const previewEmits = ['close', 'switch', 'update:source', 'loadComplete', 'loadError', 'download'];

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
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  }
});

export const fileEmpty = '文档加载失败，请检查资源是否存在';
