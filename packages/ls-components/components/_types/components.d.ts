type FormItemType =
  | 'label'
  | 'input'
  | 'textarea'
  | 'number'
  | 'radio'
  | 'checkbox'
  | 'select'
  | 'date'
  | 'cascader'
  | 'multipleCascader'
  | 'switch'
  | 'inputRange'
  | 'inputNumberRange'
  | 'slot'
  | 'itemSlot';

type ObjType = {
  [key: string | number]: any;
};

type OptionType = {
  label: string;
  value: string | number;
  disabled?: boolean;
  parentCode?: string | number;
  defaultValue?: string | number;
  children?: OptionType[];
  [key: string | number]: any;
};

type FormItemsType = {
  type: FormItemType;
  label: string;
  prop: string | string[];
  props?: any;
  rules?: any;
  className?: string;
  labelClass?: string;
  tooltip?: string;
  isRow?: boolean;
  options?: OptionType[];
  attrs?: {
    [key: string]: any;
  };
  listeners?: {
    [key: string]: any;
  };
  colon?: boolean;
  disabled?: boolean;
  read?: boolean;
  labelNumber?: boolean;
  dateFormat?: string;
  radioType?: string;
};

interface PageType {
  label: string;
  fileName: string;
  path: string;
  meta?: ObjType;
}

interface MenuItem {
  label: string;
  name: string;
  permission: string; // 权限
  icon?: string;
  apiName?: string; // 接口文件名
  isMkFile?: boolean; // 是否生成文件
  alone?: boolean; // 只有单独一页
  notBg?: boolean; // 是否需要背景色
  notAside?: boolean; // 不显示在侧边栏菜单
  notAsideChildren?: boolean; // 子集不显示在侧边栏菜单
  pages?: PageType[]; //增加的页面
  notPages?: ('add' | 'edit' | 'detail')[];
  children?: MenuItem[];
  crumbLable?: string[];
  meta?: ObjType;
  asideKey?: string;
}

interface RouterItem {
  path: string;
  name?: string;
  component: any;
  meta?: {
    title: string;
    asideKey?: string;
    crumb: string;
  };
}

interface UploadFileType {
  url?: string;
  name?: string;
  pathKey: string;
}
