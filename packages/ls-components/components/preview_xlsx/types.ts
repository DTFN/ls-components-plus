import { buildProps } from '@cpo/_utils/runtime';

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
