import { buildProps } from '@cpo/_utils/runtime';

export const lsLayoutProp = buildProps({
  /**
   * 1. header+aside+main
   * 2. header+main
   * 3. aside+header+main
   */
  mode: {
    type: [String, Number],
    default: 1
  },
  headerHeight: {
    type: String,
    default: '60px'
  },
  showFooter: {
    type: Boolean,
    default: false
  },
  footerHeight: {
    type: String,
    default: '60px'
  },
  asideWidth: {
    type: String,
    default: '200px'
  },
  showLogo: {
    type: Boolean,
    default: true
  },
  logo: {
    type: String,
    default: ''
  },
  customCss: {
    type: String,
    default: ''
  }
});

export const lsHeaderProp = buildProps({
  mode: {
    type: [String, Number],
    default: 1
  },
  title: {
    type: String,
    default: ''
  },
  showLogo: {
    type: Boolean,
    default: true
  },
  logo: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: '60px'
  },
  showCommand: {
    type: Boolean,
    default: true
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

export const lsEmitNames = ['onCommand', 'onDropdownCommand', 'onDropdownCommand2'];
