<script setup lang="ts">
import type { UploadFile, UploadFiles, UploadProgressEvent, UploadRawFile, UploadUserFile } from 'element-plus'
import type { configsType, UploadChangeFile, UploadItemType } from './types'
/**
 * @summary 上传组件 - 基于 Element Plus `el-upload` 的二次封装
 *
 * `LSUpload` 在保留 `el-upload` 原生能力的基础上，补充了业务侧常用的上传增强能力：
 * 1. 通过 `item` 对象集中配置覆盖上传、格式 / 大小校验、表单验证联动、头像模式等扩展选项。
 * 2. 通过内部默认文案和按钮状态处理，支持普通上传、拖拽上传、图片卡片、手动上传等常见展示形态。
 * 3. 提供图片预览、自定义文件项操作区以及裁剪入口等扩展交互。
 *
 * 组件显式声明的 props 只有 `item`、`onExceed`、`beforeUpload`、`onChange`、`onSuccess`、
 * `onError`、`onRemove`、`onPreview`、`onProgress`、`httpRequest`、`customFile`、`hasCropper`；
 * 其余大部分 `el-upload` 原生属性会继续通过 `$attrs` 透传给内部组件，因此仍可直接使用
 * `action`、`file-list`、`limit`、`multiple`、`drag`、`list-type`、`auto-upload`、`disabled` 等配置。
 *
 * @attr {object} item 业务扩展配置对象；用于控制覆盖上传、格式 / 大小限制、头像模式、手动上传适配、表单联动等能力，默认 `{}`
 * @attr {Function | null} onExceed 超出 `limit` 时的钩子；未传时走组件内置数量限制处理，默认 `null`
 * @attr {Function | null} beforeUpload 上传前钩子；返回 `false` 可阻止上传，默认 `null`
 * @attr {Function | null} onChange 文件状态变化钩子；未传时走组件内置文件校验与 `onChangeFunc` 事件，默认 `null`
 * @attr {Function | null} onSuccess 上传成功钩子，默认 `null`
 * @attr {Function | null} onError 上传失败钩子，默认 `null`
 * @attr {Function | null} onRemove 文件移除钩子，对应 `el-upload` 的 `on-remove`，默认 `null`
 * @attr {Function | null} onPreview 文件预览钩子；未传时图片场景走组件内置预览逻辑，默认 `null`
 * @attr {Function | null} onProgress 上传进度钩子，默认 `null`
 * @attr {Function | null} httpRequest 自定义上传请求；优先级高于 `item.httpRequestFunc`，默认 `null`
 * @attr {boolean} customFile 是否启用内置的图片卡片自定义操作区，默认 `false`
 * @attr {boolean} hasCropper 是否在内置图片卡片操作区显示裁剪入口；通常与 `customFile` 搭配使用，默认 `false`
 *
 * @slot trigger 上传触发区域插槽；用于替换默认上传按钮 / 拖拽区入口
 * @slot default 默认插槽；通常用于替换上传区域默认内容；当 `customFile=true` 时，该插槽内容会额外渲染到内置文件操作区，并携带 `{ file, index }`
 * @slot tip 提示文案插槽；未传时展示组件根据限制条件生成的默认提示
 * @slot file 文件列表项插槽；当前主要在 `customFile=false` 时透传给内部 `el-upload` 的 `file` 插槽，参数：`{ file, index }`
 *
 * @event uploadErrorFunc 上传校验或上传流程错误事件，参数：`msg`
 * @event onChangeFunc 文件变化事件；在组件内置处理链路中返回包含 `blob` 的文件对象或清空结果，参数：`file`
 * @event httpResponseFunc 使用内置 `httpRequestAction` 时的接口响应事件，参数：`response`
 * @event onHandleCropper 点击裁剪入口时触发，参数：`file`、`index`
 *
 * @expose uploadRef 内部 `el-upload` 实例；可通过 `uploadRef.value.uploadRef` 继续调用 `submit`、`clearFiles`、`abort`、`handleStart`、`handleRemove` 等原生方法
 */
import { useNamespace } from '@cpo/_hooks/useNamespace'
import { getVariable } from '@cpo/_utils/config'
import LSButton from '@cpo/button/Button.vue'
import LSIcon from '@cpo/icon/Index.vue'
import LSPreviewImage from '@cpo/preview_image'
import imageCompression from 'browser-image-compression'
import { fileTypeMap, IMG_SUFFIX_LIST, lsUploadProps, UPLOAD_STATUS_MAP, UPLOAD_TYPE_MAP } from './types'
// import { merge } from 'lodash-es';

defineOptions({
  name: 'LSUpload',
  inheritAttrs: false,
})

const props = defineProps(lsUploadProps)
const emits = defineEmits(['uploadErrorFunc', 'onChangeFunc', 'httpResponseFunc', 'onHandleCropper'])
const slots: any = useSlots()
const attrs = useAttrs()

const ns = useNamespace('upload')
const comClass: string = ns.b()

const uploadRef = ref()
const uploading = ref(false)

interface TempType {
  'http-request': (options: any) => Promise<any> | void
}

const defAttrs: UploadItemType | TempType = reactive({
  isCover: true,
  accept: '',
  disabled: false,
})
const configs: configsType = reactive({
  uploadFileList: [],
  initUploadStatus: true,
  showPreview: false,
  sourcePreview: '',
  iconColor: getVariable('colorText1'),
})

watch(
  () => attrs['file-list'],
  (val: any) => {
    configs.uploadFileList = val || []
  },
  {
    immediate: true,
    deep: true,
  },
)

const isToast = computed(() => {
  return !!(props?.item?.isToast || typeof props?.item?.isToast === 'undefined')
})
const isCover = computed(() => {
  const status = props?.item?.isCover

  return typeof status === 'undefined' ? true : status
})
const isMultiple = computed(() => {
  return attrs.multiple
})
const autoUpload = computed(() => {
  const status = attrs['auto-upload']

  return typeof status === 'undefined' ? true : status
})
const emptyFileMsg = computed(() => {
  return props?.item?.emptyFileMsg || ''
})
const listType = computed(() => {
  return attrs['list-type']
})
const isPicCard = computed(() => {
  return listType.value === UPLOAD_TYPE_MAP.picCard
})
const isDefault = computed(() => {
  return !listType.value || listType.value === 'text'
})
const limitFile = computed(() => {
  return props?.item?.limitFile || []
})
const limitFileMsg = computed(() => {
  return props?.item?.limitFileMsg || ''
})
const limitSize = computed(() => {
  return props?.item?.limitSize || 2
})
const limitSizeMsg = computed(() => {
  return props?.item?.limitSizeMsg || ''
})
const limitUnit = computed(() => {
  return props?.item?.limitUnit || 'MB'
})
const limitNumMsg = computed(() => {
  return props?.item?.limitNumMsg || ''
})
const limitAllFail = computed(() => {
  return props?.item?.limitAllFail
})
const isCompress = computed(() => {
  return props?.item?.compress || false
})
const compressThreshold = computed(() => {
  return props?.item?.compressThreshold ?? 500
})
const compressMaxWidth = computed(() => {
  return props?.item?.compressMaxWidth ?? 4000
})
const compressMaxHeight = computed(() => {
  return props?.item?.compressMaxHeight ?? 4000
})
const compressQuality = computed(() => {
  return props?.item?.compressQuality ?? 0.8
})
const compressUseWebWorker = computed(() => {
  return props?.item?.compressUseWebWorker ?? true
})
const compressFieldName = computed(() => {
  return props?.item?.compressFieldName || 'compressed'
})
const isProfile = computed(() => {
  return props?.item?.profile || false
})
const isDrag = computed(() => {
  return attrs.drag
})
const isHideCover = computed(() => {
  return props?.item?.hideCoverBtn && isCover.value && configs.uploadFileList.length > 0
})
const disabled = computed(() => {
  return attrs.disabled
})
const btnText = computed(() => {
  const hint = isPicCard.value ? '图片' : '文件'
  let text = `选择${hint}`

  if (uploading.value) {
    text = '正在上传...'
  }
  else if (isCover.value && !isMultiple.value) {
    if (autoUpload.value) {
      if (configs.initUploadStatus) {
        text = '点击上传'
      }
      else {
        text = '重新上传'
      }
    }
    else {
      if (configs.initUploadStatus) {
        text = `选择${hint}`
      }
      else {
        text = '重新上传'
      }
    }
  }
  else {
    if (autoUpload.value) {
      text = '点击上传'
    }
  }

  return text
})
const tipText = computed(() => {
  let text = '不限制上传格式，'

  if (isPicCard.value) {
    text = '文件须为图片格式，'
  }

  return `${text}文件大小不超过${limitSize.value}${limitUnit.value}`
})
const tipContent = computed(() => {
  return props?.item?.tipContent || ''
})
const httpRequestFunc = computed(() => {
  return props?.item?.httpRequestFunc
})
// const textPreview = computed(() => {
//   return props?.item?.textPreview;
// });

const hideBtn = computed(() => {
  const limitNum = Number(attrs.limit || 0)

  if (!limitNum) {
    return false
  }

  return props?.item?.hideBtnReachLimit && configs.uploadFileList.length >= limitNum
})

watch(
  [isCover, httpRequestFunc, () => props.httpRequest],
  ([nVal1, nVal2, nVal3]) => {
    defAttrs.isCover = nVal1

    if ((nVal2 && typeof nVal2 === 'function') || (nVal3 && typeof nVal3 === 'function')) {
      (defAttrs as TempType)['http-request'] = httpRequestAction
    }
  },
  {
    immediate: true,
    deep: true,
  },
)

watch(
  () => limitFile.value,
  (val) => {
    if (val && val.length > 0) {
      updateFileAccept(val)
    }
  },
  {
    immediate: true,
    deep: true,
  },
)

function updateFileAccept(files: Array<string>) {
  (defAttrs as any).accept = ''
  files.forEach((key: string) => {
    const fileType = fileTypeMap[key] || ''

    if (fileType) {
      if ((defAttrs as any).accept)
        (defAttrs as any).accept += ',';
      (defAttrs as any).accept += fileType
    }
  })
}

function getFormValidateHandlers() {
  const { formRuleFunc, formValidateFunc } = props.item || {}

  return { formRuleFunc, formValidateFunc }
}

function validateForm(msg: string) {
  const { formRuleFunc, formValidateFunc } = getFormValidateHandlers()

  if (typeof formRuleFunc === 'function' && typeof formValidateFunc === 'function') {
    const formRule = formRuleFunc()
    const { message } = formRule
    formRule.message = msg
    formValidateFunc()
    formRule.message = message
  }
  emits('uploadErrorFunc', msg)
}

async function onExceedAction(files: any, fileList: UploadUserFile[]) {
  uploading.value = false

  if (props.onExceed) {
    return props.onExceed(files, fileList)
  }

  const limitNum: number = Number(attrs.limit || 0)
  let curLimitNum: number = 0

  if (!limitAllFail.value) {
    curLimitNum = limitNum - configs.uploadFileList.length

    if (curLimitNum > 0) {
      comHandleStart(files.slice(0, curLimitNum))

      if (autoUpload.value) {
        comfirmUpload()
      }
    }
  }

  const msg: any
    = limitNumMsg.value || `当前限制选择 ${limitNum} 个文件，本次选择了 ${files.length} 个文件，已成功上传 ${curLimitNum} 个文件`

  if (isToast.value) {
    setTimeout(() => {
      ElMessage.warning(msg)
    }, 200)
  }
  else {
    validateForm(msg)
  }
}

async function beforeUploadAction(file: UploadRawFile): Promise<boolean | File> {
  if (props.beforeUpload) {
    const beforeStatus = await props.beforeUpload(file)

    if (beforeStatus && isCover.value && !isMultiple.value) {
      updateCoverFileList()
    }

    return beforeStatus
  }

  // 先校验文件类型；大小在压缩后校验
  if (!validateUploadFileType(file, true)) {
    return false
  }

  let uploadFile: UploadRawFile | File = file

  // 开启压缩且为图片文件时，执行压缩流程
  if (isCompress.value && isImageFile(file)) {
    try {
      const compressedFile = await compressImage(file)

      if (compressedFile) {
        uploadFile = compressedFile
      }
    }
    catch (error) {
      console.error('Image compression failed:', error)
      const msg = '图片压缩失败，请检查后重新上传！'

      if (isToast.value) {
        setTimeout(() => {
          ElMessage.error(msg)
        }, 200)
      }
      else {
        validateForm(msg)
      }

      return false
    }
  }

  // 压缩完成后再校验最终文件大小
  if (!validateUploadFileSize(uploadFile, true)) {
    return false
  }

  // 图片卡片模式下仍需校验图片格式
  if (isPicCard.value && !fileTypeMatch(uploadFile.name, IMG_SUFFIX_LIST)) {
    const msg = `上传文件 ${uploadFile.name} 不是图片格式的文件！`

    if (isToast.value) {
      setTimeout(() => {
        ElMessage.error(msg)
      }, 200)
    }
    else {
      validateForm(msg)
    }

    return false
  }

  if (autoUpload.value && isCover.value && !isMultiple.value) {
    updateCoverFileList()
  }

  // 将压缩信息挂载到文件对象，供上传请求组装 FormData 时使用
  ;(uploadFile as any).__compressedInfo = {
    isCompressed: uploadFile !== file,
    originalSize: file.size,
    compressedSize: uploadFile.size,
  }

  // 保持 uid 与原始文件一致
  ;(uploadFile as any).uid = file.uid

  return uploadFile
}

function validateUploadFile(file: UploadRawFile | File, showMsg: boolean): boolean {
  if (!validateUploadFileType(file, showMsg)) {
    return false
  }

  if (!validateUploadFileSize(file, showMsg)) {
    return false
  }

  if (isPicCard.value && !fileTypeMatch(file.name, IMG_SUFFIX_LIST)) {
    const msg = `上传文件 ${file.name} 不是图片格式的文件！`

    if (isToast.value && showMsg) {
      setTimeout(() => {
        ElMessage.error(msg)
      }, 200)
    }
    else {
      validateForm(msg)
    }

    return false
  }

  return true
}

function validateUploadFileType(file: UploadRawFile | File, showMsg: boolean): boolean {
  const { name } = file
  const isLimitFile = limitFile.value.length > 0 && !fileTypeMatch(name)

  if (isLimitFile) {
    const msg
      = limitFileMsg.value
        || `上传文件 ${file.name} 只能是 ${limitFile.value
          .filter(item => item)
          .join('，')
          .toLocaleLowerCase()} 格式！`

    if (isToast.value && showMsg) {
      setTimeout(() => {
        ElMessage.error(msg)
      }, 200)
    }
    else {
      validateForm(msg)
    }

    return false
  }

  return true
}

function validateUploadFileSize(file: UploadRawFile | File, showMsg: boolean): boolean {
  const { size, name } = file

  let isLimitSize = false

  switch (limitUnit.value) {
    case 'KB':
      isLimitSize = size / 1024 > limitSize.value
      break
    case 'MB':
      isLimitSize = size / 1024 / 1024 > limitSize.value
      break
    default:
      isLimitSize = size / 1024 / 1024 / 1024 > limitSize.value
      break
  }

  if (isLimitSize) {
    const msg = limitSizeMsg.value || `上传文件 ${name} 大小不能超过 ${limitSize.value}${limitUnit.value}！`

    if (isToast.value && showMsg) {
      setTimeout(() => {
        ElMessage.error(msg)
      }, 200)
    }
    else {
      validateForm(msg)
    }

    return false
  }

  return true
}

function fileTypeMatch(name: string, list?: Array<string>) {
  let fileData: Array<any> = []

  if (limitFile.value.length > 0) {
    fileData = limitFile.value
  }
  else if (list) {
    fileData = list
  }

  if (fileData.length <= 0) {
    return true
  }

  for (let i = 0; i < fileData.length; i++) {
    const elem = (fileData[i] || '').toLowerCase()

    if (name.toLowerCase().endsWith(elem)) {
      return true
    }
  }

  return false
}

/**
 * 判断文件是否为图片
 * @param file 待判断文件
 */
function isImageFile(file: File): boolean {
  if (file.type && file.type.startsWith('image/')) {
    return true
  }

  return fileTypeMatch(file.name, IMG_SUFFIX_LIST)
}

/**
 * 加载图片并返回 Image 对象
 * @param file 图片文件
 */
function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img)
    }

    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('图片加载失败'))
    }
    img.src = url
  })
}

/**
 * 压缩图片
 * @param file 原始图片文件
 * @returns 压缩后的 File；若无需压缩则返回 null
 */
async function compressImage(file: File): Promise<File | null> {
  if (!isImageFile(file)) {
    return null
  }

  const thresholdKB = compressThreshold.value
  const maxWidth = compressMaxWidth.value
  const maxHeight = compressMaxHeight.value
  const isOverSize = file.size / 1024 > thresholdKB

  let isOverDimension = false
  let targetWidthOrHeight: number | undefined

  try {
    const img = await loadImage(file)
    isOverDimension = img.width > maxWidth || img.height > maxHeight

    if (!isOverSize && !isOverDimension) {
      return null
    }

    const scale = Math.min(1, maxWidth / img.width, maxHeight / img.height)
    targetWidthOrHeight = Math.floor(Math.max(img.width * scale, img.height * scale))
  }
  catch {
    // 无法读取图片尺寸时，若文件大小未超限则认为无需压缩
    if (!isOverSize) {
      return null
    }
  }

  const options = {
    maxSizeMB: thresholdKB / 1024,
    maxWidthOrHeight: targetWidthOrHeight,
    useWebWorker: compressUseWebWorker.value,
    initialQuality: compressQuality.value,
    fileType: file.type,
  }

  const compressedBlob = await imageCompression(file, options)

  return new File([compressedBlob], file.name, {
    type: compressedBlob.type,
    lastModified: file.lastModified,
  })
}

function updateCoverFileList(preIndex?: number, endIndex?: number) {
  configs.uploadFileList.splice(preIndex || 0, endIndex || configs.uploadFileList.length - 1)
}

/**
 * 文件变更处理函数
 * @param file 变更的文件对象
 * @param fileList 文件列表
 */
function onChangeAction(file: UploadChangeFile, fileList: UploadFiles) {
  // 更新文件列表
  configs.uploadFileList = fileList

  // 验证文件是否合法；开启图片压缩时，文件大小在压缩完成后再校验
  let isSuccess = false

  if (file.raw) {
    isSuccess = isCompress.value && isImageFile(file.raw)
      ? validateUploadFileType(file.raw, !autoUpload.value)
      : validateUploadFile(file.raw, !autoUpload.value)
  }

  // 如果是覆盖模式且不是多选模式，则更新文件列表
  if (isSuccess && isCover.value && !isMultiple.value) {
    updateCoverFileList()
  }

  // 如果有自定义onChange处理函数，则执行
  if (props.onChange) {
    return props.onChange(file, fileList)
  }

  // 检查文件大小
  const { size = 0 } = file

  if (size <= 0) {
    setChangeRes()
    const msg = emptyFileMsg.value || '禁止上传空文件，请检查后重新上传！'

    if (isToast.value) {
      ElMessage.error(msg)
    }
    else {
      validateForm(msg)
    }

    return
  }

  // 处理原始文件
  if (file.raw) {
    if (!autoUpload.value && !isSuccess) {
      // 非自动上传且验证失败时，清除文件
      setChangeRes()
    }
    else {
      // 创建文件Blob URL并触发change事件
      file.blob = URL.createObjectURL(file.raw) || ''
      emits('onChangeFunc', file)
    }
  }
}

/**
 * 重置文件上传结果
 * 当文件验证失败或为空文件时调用此函数清理文件列表
 */
function setChangeRes() {
  let startIndex = 0

  // 如果文件列表中有多个文件，则从最后一个开始清除
  if (configs.uploadFileList.length > 1) {
    startIndex = configs.uploadFileList.length - 1
  }
  // 清除指定位置的文件
  updateCoverFileList(startIndex, 1)
  // 触发change事件，传递空对象表示清除
  emits('onChangeFunc', {})
}

function onSuccessAction(response: any, file: UploadFile, fileList: UploadFiles) {
  uploading.value = false
  configs.initUploadStatus = false
  const { formRuleFunc, formValidateFunc } = getFormValidateHandlers()

  if (typeof formRuleFunc === 'function' && typeof formValidateFunc === 'function') {
    formValidateFunc()
  }

  if (props.onSuccess) {
    return props.onSuccess(response, file, fileList)
  }
}

function onErrorAction(err: Error, file: UploadFile, fileList: UploadFiles) {
  uploading.value = false

  if (props.onError) {
    return props.onError(err, file, fileList)
  }
}

function onRemoveAction(file: UploadFile, fileList: UploadFiles) {
  uploading.value = false
  configs.initUploadStatus = !fileList.length
  configs.uploadFileList = configs.uploadFileList.filter((item: any) => {
    if (item.uid === file.uid || item.name === file.name) {
      return null
    }

    return item
  })

  if (props.onRemove) {
    return props.onRemove(file, fileList)
  }
}

// function onPreviewAction(file: UploadFile) {
//   if (props.onPreview) {
//     return props.onPreview(file);
//   }
//   const { raw, url, blob, name }: any = file;
//   const { type }: any = raw || {};
//   if (raw) {
//     if (textPreview.value && textPreview.value.length > 0) {
//       if (type?.startsWith('image')) {
//         configs.sourcePreview = isPicCard.value ? [url] : [blob];
//         configs.showPreview = true;
//       } else if (type == 'application/pdf') {
//         if (textPreview.value.includes('pdf')) {
//           configs.sourcePreview = blob;
//           configs.showPreview = true;
//         } else if (textPreview.value.includes('pdfNative')) {
//           blob && window.open(blob, '_blank');
//         }
//       } else if (
//         textPreview.value.includes('xlsx') &&
//         ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(type)
//       ) {
//         fetch(blob)
//           .then((response: any) => response.blob())
//           .then(data => {
//             configs.sourcePreview = new File([data], name, { type });
//             configs.showPreview = true;
//           });
//       } else if (
//         textPreview.value.includes('docx') &&
//         type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//       ) {
//         fetch(blob)
//           .then(response => response.blob())
//           .then(blob => blob.arrayBuffer())
//           .then(data => {
//             configs.sourcePreview = data;
//             configs.showPreview = true;
//           });
//       }
//     } else if (isPicCard.value) {
//       if (type?.startsWith('image')) {
//         configs.sourcePreview = [url];
//         configs.showPreview = true;
//       }
//     }
//   } else if (isPicCard.value) {
//     configs.sourcePreview = [url];
//     configs.showPreview = true;
//   }
// }

async function httpRequestAction(data: any) {
  const { file } = data

  if (!file) {
    return
  }
  const { size } = file

  if (size <= 0 || !validateUploadFile(file, false)) {
    return
  }

  if (props.httpRequest) {
    return props.httpRequest(data)
  }
  const formData = new FormData()
  formData.append('file', file)

  // 开启压缩时，向后端传递压缩信息
  if (isCompress.value) {
    const compressedInfo = (file as any).__compressedInfo || {
      isCompressed: false,
      originalSize: file.size,
      compressedSize: file.size,
    }
    formData.append(compressFieldName.value, JSON.stringify(compressedInfo))
  }

  if (typeof httpRequestFunc.value === 'function') {
    uploading.value = true
    let res: any = {}

    try {
      res = await httpRequestFunc.value(formData)
    }
    catch (error) {
      res = error
    }
    finally {
      uploading.value = false
      emits('httpResponseFunc', res)
    }
  }
}

function hasReadyFile() {
  let status = false

  for (let i = 0; i < configs.uploadFileList.length; i++) {
    const file = configs.uploadFileList[i]

    if (file.status === UPLOAD_STATUS_MAP.ready) {
      status = true
      break
    }
  }

  return status
}

function comfirmUpload() {
  uploadRef?.value?.submit()
}

function comHandleStart(files: Array<UploadRawFile>) {
  (files || []).forEach((file: UploadRawFile) => {
    uploadRef?.value?.handleStart(file)
  })
}

function removeFile(file: UploadFile) {
  uploadRef?.value.handleRemove(file)
}

function cancelUpload() {
  configs.uploadFileList.forEach((file: UploadFile) => {
    if (file) {
      try {
        uploadRef?.value?.abort(file)
        removeFile(file)
      }
      catch (error) {
        console.log(error)
      }
    }
  })
}

function onProgressAction(evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) {
  uploading.value = true

  if (props.onProgress) {
    return props.onProgress(evt, uploadFile, uploadFiles)
  }
}

function onPreviewAction(uploadFile: UploadFile) {
  if (props.onPreview) {
    return props.onPreview(uploadFile)
  }

  if (isPicCard.value) {
    const { url }: any = uploadFile || {}

    if (url) {
      configs.sourcePreview = url
      configs.showPreview = true
    }
  }
}

function closePreview() {
  configs.showPreview = false
  configs.sourcePreview = ''
}

// 自定义预览图片
const viewerVisible = ref(false)
const viewerUrlList = ref<string[]>([])

function onHandlePreview(file: any, index: number) {
  viewerUrlList.value = [configs.uploadFileList[index]?.url || file?.url]
  viewerVisible.value = true
}

function onHandleRemove(file: any) {
  removeFile(file)
}

function onHandleCropper(file: any, index: number) {
  emits('onHandleCropper', file, index)
}

defineExpose({
  uploadRef,
})
</script>

<template>
  <div
    :class="[
      comClass,
      isDrag ? 'ls-upload-drag' : '',
      isProfile ? 'ls-profile' : '',
      isHideCover ? 'hide-cover-btn' : '',
      hideBtn ? 'hide-btn' : '',
    ]"
  >
    <el-upload
      ref="uploadRef"
      v-bind="Object.assign(defAttrs, $attrs)"
      :on-exceed="onExceedAction"
      :before-upload="beforeUploadAction"
      :on-change="onChangeAction"
      :on-success="onSuccessAction"
      :on-error="onErrorAction"
      :on-remove="onRemoveAction"
      :on-progress="onProgressAction"
      :on-preview="onPreviewAction"
    >
      <template #trigger>
        <template v-if="!isProfile">
          <template v-if="!slots.trigger">
            <template v-if="isDrag">
              <LSButton v-if="uploading" text :loading="uploading" :disabled="disabled"></LSButton>
              <LSIcon v-else class="upload-icon" name="UploadFilled" size="56" color="#E7E7E7"></LSIcon>
              <div class="ls-drag">
                <div class="drag-txt ls-color-brand6">
                  {{ btnText }}
                </div>
                <template v-if="!uploading">
                  &nbsp;&nbsp;/&nbsp;&nbsp;
                  <div class="drag-txt ls-color-text2">
                    拖拽到此区域
                  </div>
                </template>
              </div>
            </template>
            <template v-else>
              <div v-if="isPicCard" class="btn-picture-card">
                <LSButton v-if="uploading" text :loading="uploading" :disabled="disabled"></LSButton>
                <LSIcon v-else class="upload-btn-plus" name="Plus" :size="28" :color="configs.iconColor"></LSIcon>
                <div>{{ btnText }}</div>
              </div>
              <LSButton v-else plain icon="upload" :loading="uploading" :disabled="disabled">
                {{ btnText }}
              </LSButton>
            </template>
          </template>
          <slot v-else name="trigger">
          </slot>
        </template>
        <template v-else-if="item.defProfile && configs.uploadFileList.length < 1">
          <el-avatar :size="60" :src="item.defProfile" fit="contain" />
        </template>
      </template>

      <template #default>
        <template v-if="!slots.default">
          <div
            v-if="!autoUpload && (isDefault || isDrag)"
            class="upload-btn-handle"
            :class="[isDrag ? 'drag-css' : 'nor-css', !isCover || isMultiple ? 'multi-css' : '']"
          >
            <LSButton
              v-if="!isDrag"
              type="primary"
              class="ls-upload-btn-com ls-upload-btn-comfirm"
              :class="{ 'is-ready': hasReadyFile() }"
              :loading="uploading"
              :disabled="disabled"
              @click="comfirmUpload"
            >
              开始上传
            </LSButton>
            <template v-else>
              <LSButton
                v-if="!isCover || isMultiple"
                type="primary"
                :loading="uploading"
                :disabled="disabled"
                class="ls-upload-btn-com ls-upload-btn-cancel"
                @click="cancelUpload"
              >
                取消上传
              </LSButton>
              <LSButton
                class="start-upload ls-upload-btn-com ls-upload-btn-comfirm"
                :class="{ 'is-ready': hasReadyFile() }"
                type="primary"
                :loading="uploading"
                :disabled="disabled"
                @click="comfirmUpload"
              >
                开始上传
              </LSButton>
            </template>
          </div>
        </template>
        <slot v-else></slot>
      </template>

      <template #tip>
        <div v-if="!slots.tip" class="ls-tip">
          {{ tipContent || tipText }}
        </div>
        <slot v-else name="tip">
        </slot>
      </template>

      <!-- 自定义且图片卡片时支持 -->
      <template v-if="customFile" #file="{ file, index }">
        <img :src="configs.uploadFileList[index]?.url || file.url" class="el-upload-list__item-thumbnail" />
        <div class="el-upload-list__item-actions">
          <slot :file="file" :index="index"></slot>
          <span v-if="hasCropper" class="el-upload-list__item-cropper" @click="onHandleCropper(file, index)">
            <el-icon><Crop /></el-icon>
          </span>
          <span class="el-upload-list__item-preview" @click="onHandlePreview(file, index)">
            <el-icon><ZoomIn /></el-icon>
          </span>
          <span class="el-upload-list__item-delete" @click="onHandleRemove(file)">
            <el-icon><Delete /></el-icon>
          </span>
        </div>
      </template>
      <template v-else #file="{ file, index }">
        <slot name="file" :file="file" :index="index"></slot>
      </template>
    </el-upload>

    <LSPreviewImage v-model="configs.showPreview" :source="configs.sourcePreview" :on-close="closePreview" />

    <teleport to="body">
      <el-image-viewer v-if="viewerVisible" :url-list="viewerUrlList" @close="viewerVisible = false" />
    </teleport>
  </div>
</template>

<style lang="scss" scoped>
.ls-upload {
  position: relative;
  width: 100%;
  font-size: cpo-var.$font-size-content-small;
  :deep(.ls-tip) {
    margin-top: 8px;
    font-size: cpo-var.$font-size-content-small;
    font-weight: 400;
    line-height: cpo-var.$line-height-content-small;
    color: cpo-var.$color-text3;
  }
  :deep(.upload-icon) {
    top: 16px;

    @extend %horizontal-center;
  }
  :deep(.ls-drag) {
    @extend %horizontal-center;

    bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    line-height: normal;
    .drag-txt {
      font-size: cpo-var.$font-size-content-medium;
      line-height: cpo-var.$line-height-content-medium;
    }
  }
  :deep(.upload-btn-handle) {
    position: relative;
    width: 334px;
    vertical-align: middle;
    cursor: pointer;
    &.nor-css {
      display: inline-block;
      width: auto;
      margin-left: 8px;
    }
    &.drag-css {
      position: absolute;
      right: 0;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: flex-end;
      margin-top: 12px;
      .start-upload {
        margin-left: 8px;
      }
      &.multi-css {
        width: 100%;

        // min-width: 496px;
        // max-width: 800px;
      }
    }
  }
  :deep(.el-upload-list) {
    .el-upload-list__item {
      transition: none !important;
    }
    .el-upload-list__item-name {
      padding-left: 0;
      font-size: cpo-var.$font-size-content-small;
      .el-icon-document {
        display: none;
      }
      .file-name-icon {
        margin-right: 4px;
        vertical-align: text-bottom;
      }
    }
    .el-progress-bar {
      display: none;
    }
    &.el-upload-list--text {
      .el-upload-list__item .el-progress__text {
        top: -25px;
      }
    }
    .el-icon--close-tip {
      display: none !important;
    }
  }
  :deep(.btn-picture-card) {
    @extend %v-h-center;

    text-align: center;
    .upload-btn-plus {
      margin-bottom: 10px;
    }
  }
  :deep(.ls-upload-btn-com) {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    // padding: 5px 16px;
    // border: 1px solid #e7e7e7;
    // border-radius: 2px;
    .ls-icon {
      margin-right: 8px;
    }
    .ls-upload-btn-text {
      font-size: cpo-var.$font-size-content-medium;
      line-height: cpo-var.$line-height-content-medium;
      color: cpo-var.$color-text1;
    }
    &.ls-upload-btn-comfirm,
    &.ls-upload-btn-cancel {
      font-size: cpo-var.$font-size-content-medium;
      line-height: cpo-var.$line-height-content-medium;
    }
    &.ls-upload-btn-comfirm {
      color: cpo-var.$color-light;
      background-color: cpo-var.$color-brand3;
      border: 1px solid cpo-var.$color-brand3;
      &.is-ready {
        background-color: cpo-var.$color-brand6;
        border: 1px solid cpo-var.$color-brand6;
      }
    }
    &.ls-upload-btn-cancel {
      color: cpo-var.$color-text1;
      background-color: #e7e7e7;
      border: 1px solid #e7e7e7;
    }
    &.ls-upload-btn-default {
      &:hover {
        background-color: cpo-var.$color-border6;
      }
      &:focus {
        background-color: cpo-var.$color-border5;
      }
    }
  }
  :deep(.el-upload--picture-card) {
    position: relative;
  }
  :deep(.el-upload) {
    vertical-align: middle;
    .el-upload-dragger {
      min-height: 120px;
    }
    .el-icon {
      &.is-loading {
        font-size: 24px;
      }
    }
  }
  &.ls-upload-drag {
    :deep(.el-upload-list--picture-card) {
      width: 100%;
      .el-upload {
        width: 100%;
        height: auto;
      }
    }
    :deep(.el-upload-list) {
      margin-top: 24px;
    }
  }
  &.ls-profile {
    :deep(.el-upload-list--picture-card) {
      width: 60px;
      height: 60px;
      overflow: hidden;
      border-radius: 50%;
      box-shadow: 0 0 2px #73767a;
      .el-upload-list__item {
        background-color: transparent;
        &.is-success,
        &.is-ready {
          z-index: 2;
          width: 100%;
          height: 100%;
          margin: 0;
          object-fit: cover;
          border: 0;
          border-radius: 0;
        }
      }
    }
    :deep(.el-upload--picture-card) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
    :deep(.el-upload-list__item-actions) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    :deep(.el-upload-list__item-status-label) {
      display: none;
    }
  }
  &.hide-cover-btn,
  &.hide-btn {
    :deep(.el-upload--picture-card) {
      display: none;
    }
  }
}
</style>
