export default {
  '/docs/': [
    {
      text: '指南',
      items: [{ text: '快速开始', link: '/docs/quickstart' }]
    },
    {
      text: 'Basic 基础组件',
      items: [
        { text: 'Icon 图标', link: '/docs/icon' },
        { text: 'Button 按钮', link: '/docs/button' },
        { text: 'Layout 布局', link: '/docs/layout' }
      ]
    },
    {
      text: 'Form 表单组件',
      items: [
        { text: 'Form 表单', link: '/docs/form' },
        { text: 'Upload 上传', link: '/docs/upload' }
      ]
    },
    {
      text: 'Data 数据展示',
      items: [
        { text: 'Table 表格', link: '/docs/table' },
        { text: 'Descriptions 描述', link: '/docs/descriptions' },
        { text: 'Preview 预览（旧，不再更新）', link: '/docs/preview' },
        { text: 'PreviewImage 图片预览', link: '/docs/previewImage' },
        { text: 'PreviewPdf PDF预览', link: '/docs/previewPdf' },
        { text: 'PreviewXlsx Excel预览', link: '/docs/previewXlsx' },
        { text: 'PreviewDoc 文档预览', link: '/docs/previewDocx' },
        { text: 'Tree 权限树', link: '/docs/tree' },
        { text: 'Map 地图', link: '/docs/map' },
        { text: 'Live 直播/视频', link: '/docs/live' },
        { text: 'Editor 富文本', link: '/docs/editor' },
        { text: 'List 列表', link: '/docs/list' }
      ]
    },
    {
      text: 'Chart 图表',
      items: [
        { text: 'chart 介绍', link: '/docs/charts/' },
        { text: 'Bar 柱状图', link: '/docs/charts/bar' },
        { text: 'Line 折线图', link: '/docs/charts/line' },
        { text: 'Pie 饼图', link: '/docs/charts/pie' }
      ]
    },
    {
      text: 'Navigation 导航',
      items: [
        { text: 'Backtop 回到顶部', link: '/docs/backtop' },
        { text: 'Breadcrumb 面包屑', link: '/docs/breadcrumb' },
        { text: 'Menu 菜单', link: '/docs/menu' }
      ]
    },
    {
      text: 'Feedback 反馈组件',
      items: [
        { text: 'Confirm 确认框', link: '/docs/confirm' },
        { text: 'BellMessage 消息通知列表', link: '/docs/bellMessage' },
        { text: 'Dialog 对话框', link: '/docs/dialog' },
        { text: 'Tooltip 弹出提示', link: '/docs/tooltip' }
      ]
    },
    {
      text: 'Other 其它组件',
      items: [
        { text: 'Print 打印', link: '/docs/print' },
        // { text: 'ContainerBox 适配容器', link: '/docs/containerBox' },
        { text: 'Download 下载', link: '/docs/download' },
        { text: 'Cropper 图片裁剪', link: '/docs/cropper' }
      ]
    }
  ],
  '/tools/': [
    // {
    //   text: 'directives',
    //   items: [{ text: 'auth', link: '/tools/directives/auth' }]
    // },
    {
      text: 'hooks',
      items: [
        { text: 'useRouterHook', link: '/tools/hooks/useRouterHook' },
        { text: 'useWSHook', link: '/tools/hooks/useWSHook' },
        { text: 'useOptionHook', link: '/tools/hooks/useOptionHook' },
        { text: 'useTableListHook', link: '/tools/hooks/useTableListHook' }
      ]
    },
    {
      text: 'utils',
      items: [
        { text: 'lsValidate', link: '/tools/utils/validate' },
        { text: 'lsCheck', link: '/tools/utils/check' },
        { text: 'lsUtil', link: '/tools/utils/util' }
      ]
    }
  ]
};
