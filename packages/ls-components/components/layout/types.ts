import { buildProps } from '@cpo/_utils/runtime';

export const lsLayoutProp = buildProps({
  mode: {
    type: Number,
    default: 1
  },
  headerHeight: {
    type: String,
    default: '60px'
  },
  asideWidth: {
    type: String,
    default: '200px'
  }
});

export const lsHeaderProp = buildProps({
  title: {
    type: String,
    default: ''
  },
  logo: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: '60px'
  },
  userName: {
    type: String,
    default: 'Admin'
  },
  userIcon: {
    type: String,
    default: ''
  },
  commandList: {
    type: Array<{
      key: string;
      name: string;
    }>,
    default: () => []
  }
});

export const lsEmitNames = ['onCommand'];
