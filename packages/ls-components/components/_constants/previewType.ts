import { buildProps } from '@cpo/_utils/runtime'

/**
 * @summary 通用预览组件事件名集合
 *
 * 供 `preview_image`、`preview_docx`、`preview_pdf`、`preview_xlsx` 等预览子组件复用，
 * 具体组件会根据自身实现选择性触发其中的事件。
 *
 * @event close - 保留的关闭事件名
 * @event switch - 多资源切换事件
 * @event update:source - 关闭时同步清空数据源
 * @event loadComplete - 资源渲染完成事件
 * @event loadError - 资源渲染失败事件
 * @event onDownload - 点击下载按钮时触发
 */
export const previewEmits = ['close', 'switch', 'update:source', 'loadComplete', 'loadError', 'onDownload']

/** 通用预览组件事件名类型。 */
export type PreviewEmits = typeof previewEmits

/**
 * @summary 通用预览组件 props
 *
 * 该配置会被各类预览入口组件复用，再由 `usePreviewHook` 整理后透传给具体渲染子组件。
 *
 * @attr {any} source - 预览资源数据源，具体支持的类型由各预览组件自行约束
 * @attr {number|string} zoomSize - 对外暴露的缩放尺寸配置，默认 `1.5`
 * @attr {boolean} needLoading - 是否显示全局加载状态，默认 `true`
 * @attr {object} loadingOption - 全局加载状态配置，透传给 `ElLoading.service`
 * @attr {boolean} hasDownload - 是否显示下载按钮，默认 `false`
 * @attr {object} downloadData - 下载附带数据，点击下载按钮时通过 `onDownload` 事件原样传出，默认 `{}`
 * @attr {boolean} hideOnClickModal - 点击遮罩层是否允许关闭预览，默认 `false`
 * @attr {boolean} showWatermark - 是否显示水印，默认 `false`
 * @attr {object} watermarkOption - 水印配置，透传给 `el-watermark`，默认 `{}`
 */
export const lsPreviewProp = buildProps({
  /** 预览资源数据源；具体支持的类型由各预览组件自行约束 */
  source: {},
  /** 对外暴露的缩放尺寸配置 */
  zoomSize: {
    type: [Number, String],
    default: 1.5,
  },
  /** 是否显示全局加载状态；打开预览后由 `usePreviewHook` 控制 Loading 生命周期 */
  needLoading: {
    type: Boolean,
    default: true,
  },
  /** 全局加载状态配置，透传给 Element Plus `ElLoading.service` */
  loadingOption: {
    type: Object,
    default: () => {
      return {
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.3)',
      }
    },
  },
  /** 是否显示下载按钮 */
  hasDownload: {
    type: Boolean,
    default: false,
  },
  /** 下载附带数据；点击下载按钮时通过 `onDownload` 事件原样传出 */
  downloadData: {
    type: Object,
    default: () => {
      return {}
    },
  },
  /** 点击遮罩层是否允许关闭预览 */
  hideOnClickModal: {
    type: Boolean,
    default: false,
  },
  /** 是否显示水印 */
  showWatermark: {
    type: Boolean,
    default: false,
  },
  /** 水印配置，透传给 `el-watermark` */
  watermarkOption: {
    type: Object,
    default: () => {
      return {}
    },
  },
  /** 是否以页面模式展示；为 true 时不以弹窗形式展示，隐藏关闭按钮并调整顶部操作栏布局 */
  pageMode: {
    type: Boolean,
    default: false,
  },
  /** 滚动容器高度，透传给 `el-scrollbar`；默认 `calc(100vh - 48px)` */
  wrapperHeight: {
    type: [Number, String],
    default: 'calc(100vh - 48px)',
  },
})

/**
 * @summary 通用预览空资源提示文案
 *
 * 用于空文件、资源不存在或加载失败场景的统一报错提示。
 */
export const fileEmpty = '文档加载失败，请检查资源是否存在'
