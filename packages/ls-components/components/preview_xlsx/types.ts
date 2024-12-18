import { buildProps } from '@cpo/_utils/runtime';

const emitNames = ['update:source', 'loadComplete', 'loadError'];

export { emitNames };

export const previewEmits = ['close', 'switch'].concat(emitNames);

export type PreviewEmits = typeof previewEmits;

// xlsx
export const xlsxProps = buildProps({
  source: {
    type: [File, String],
    default: null
  },
  onClose: Function
});

export interface Match {
  start: {
    idx: number;
    offset: number;
  };
  end: {
    idx: number;
    offset: number;
  };
  str: string;
  oindex: number;
}

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
