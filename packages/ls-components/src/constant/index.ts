export const MENU_LIST = [
  {
    id: '1',
    title: 'Button 按钮',
    name: 'Button',
    path: '/button',
    cpoPath: 'button/Index',
    key: '1'
  },
  {
    id: '2',
    title: 'Upload 上传',
    name: 'Upload',
    path: '/upload',
    cpoPath: 'upload/Index',
    key: '2'
  },
  {
    id: '3',
    title: 'Descriptions 描述',
    name: 'Descriptions',
    path: '/descriptions',
    cpoPath: 'descriptions/Index',
    key: '3'
  },
  {
    id: '4',
    title: 'Form 表单',
    name: 'Form',
    path: '/form',
    cpoPath: 'form/Index',
    key: '4'
  },
  {
    id: '5',
    title: 'Preview 预览',
    name: 'Preview',
    path: '/preview',
    cpoPath: 'preview/Index',
    key: '5'
  },
  {
    id: '6',
    title: 'Menu 菜单',
    name: 'Menu',
    path: '/menu',
    cpoPath: 'menu/Index',
    key: '6'
  },
  {
    id: '7',
    title: 'Table 表格',
    name: 'Table',
    path: '/table',
    cpoPath: 'table/Index',
    key: '7'
  },
  {
    id: '8',
    title: 'Confirm 确认框',
    name: 'Confirm',
    path: '/confirm',
    cpoPath: 'confirm/Index',
    key: '8'
  },
  {
    id: '9',
    title: 'Chart 图表',
    name: 'Chart',
    path: '/chart',
    cpoPath: 'chart/Index',
    key: '9'
  },
  {
    id: '10',
    title: 'Tree 树',
    name: 'Tree',
    path: '/tree',
    cpoPath: 'tree/Index',
    key: '10'
  },
  {
    id: '11',
    title: 'FlowBox 流程容器',
    name: 'FlowBox',
    path: '/flowBox',
    cpoPath: 'flowBox/Index',
    key: '11'
  },
  {
    id: '12',
    title: 'Map 地图',
    name: 'Map',
    path: '/map',
    cpoPath: 'map/Index',
    key: '12'
  },
  {
    id: '13',
    title: 'Editor 富文本编辑器',
    name: 'Editor',
    path: '/editor',
    cpoPath: 'editor/Index',
    key: '13'
  },
  {
    id: '14',
    title: 'JsonEditor json编辑器',
    name: 'JsonEditor',
    path: '/jsonEditor',
    cpoPath: 'jsonEditor/Index',
    key: '14'
  }
];

export const MonthDays = Array.from({ length: 31 }, (_, index) => `${index + 1}日`);
export const MonthDayOptions = MonthDays.map((item: string, i: number) => {
  return {
    value: i + 1,
    label: item
  };
});
