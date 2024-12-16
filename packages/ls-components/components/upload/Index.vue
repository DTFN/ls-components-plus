<template>
  <div :class="[comClass, isDrag ? 'ls-upload-drag' : '', isProfile ? 'ls-profile' : '', isHideCover ? 'hide-cover-btn' : '']">
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
    >
      <template #trigger>
        <template v-if="!isProfile">
          <template v-if="!slots.trigger">
            <template v-if="isDrag">
              <LSButton v-if="uploading" text :loading="uploading" :disabled="disabled"></LSButton>
              <LSIcon v-else class="upload-icon" name="UploadFilled" size="56" color="#E7E7E7"></LSIcon>
              <div class="ls-drag">
                <div class="drag-txt ls-color-brand6">{{ btnText }}</div>
                <template v-if="!uploading">
                  &nbsp;&nbsp;/&nbsp;&nbsp;
                  <div class="drag-txt ls-color-text2">拖拽到此区域</div>
                </template>
              </div>
            </template>
            <template v-else>
              <div v-if="isPicCard" class="btn-picture-card">
                <LSButton v-if="uploading" text :loading="uploading" :disabled="disabled"></LSButton>
                <LSIcon v-else class="upload-btn-plus" name="Plus" :size="28" :color="configs.iconColor"></LSIcon>
                <div>{{ btnText }}</div>
              </div>
              <LSButton v-else plain icon="upload" :loading="uploading" :disabled="disabled">{{ btnText }}</LSButton>
            </template>
          </template>
          <slot v-else name="trigger"> </slot>
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
              >开始上传
            </LSButton>
            <template v-else>
              <LSButton
                v-if="!isCover || isMultiple"
                type="primary"
                :loading="uploading"
                :disabled="disabled"
                @click="cancelUpload"
                class="ls-upload-btn-com ls-upload-btn-cancel"
                >取消上传</LSButton
              >
              <LSButton
                class="start-upload ls-upload-btn-com ls-upload-btn-comfirm"
                :class="{ 'is-ready': hasReadyFile() }"
                type="primary"
                :loading="uploading"
                :disabled="disabled"
                @click="comfirmUpload"
                >开始上传</LSButton
              >
            </template>
          </div>
        </template>
        <slot v-else></slot>
      </template>

      <template #tip>
        <div v-if="!slots.tip" class="ls-tip">{{ tipContent || tipText }}</div>
        <slot v-else name="tip"> </slot>
      </template>

      <template v-if="slots.file" #file>
        <slot name="file"></slot>
      </template>
    </el-upload>

    <!-- <LSPreview
      v-model="configs.showPreview"
      :on-close="closePreview"
      :type="configs.typePreview"
      :source="configs.sourcePreview"
    /> -->
  </div>
</template>

<script setup lang="ts">
import { lsUploadProps, UPLOAD_TYPE_MAP, UPLOAD_STATUS_MAP, IMG_SUFFIX_LIST, fileTypeMap } from './types';
import type { configsType, UploadChangeFile } from './types';
import { getVariable } from '@cpo/_utils/config';
import type { UploadUserFile, UploadFiles, UploadRawFile, UploadFile } from 'element-plus';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import LSButton from '@cpo/button/Button.vue';
import LSIcon from '@cpo/icon/Index.vue';
// import { merge } from 'lodash-es';

defineOptions({
  name: 'LSUpload',
  inheritAttrs: false
});

const slots = useSlots();
const attrs = useAttrs();

const ns = useNamespace('upload');
const comClass: string = ns.b();

const uploadRef = ref();
const uploading = ref(false);

const defAttrs: any = reactive({
  isCover: true,
  accept: '',
  disabled: false
});
const configs: configsType = reactive({
  uploadFileList: [],
  initUploadStatus: true,
  showPreview: false,
  typePreview: '',
  sourcePreview: '',
  iconColor: getVariable('colorText1')
});

const props = defineProps(lsUploadProps);

const emits = defineEmits(['uploadErrorFunc', 'onChangeFunc', 'httpResponseFunc']);

watch(
  () => attrs['file-list'],
  (val: any) => {
    configs.uploadFileList = val || [];
  },
  {
    immediate: true,
    deep: true
  }
);

const isToast = computed(() => {
  return (props?.item?.isToast || typeof props?.item?.isToast) === 'undefined' ? true : false;
});
const isCover = computed(() => {
  const status = props?.item?.isCover;

  return typeof status === 'undefined' ? true : status;
});
const isMultiple = computed(() => {
  return attrs.multiple;
});
const autoUpload = computed(() => {
  const status = attrs['auto-upload'];
  return typeof status === 'undefined' ? true : status;
});
const emptyFileMsg = computed(() => {
  return props?.item?.emptyFileMsg || '';
});
const listType = computed(() => {
  return attrs['list-type'];
});
const isPicCard = computed(() => {
  return listType.value === UPLOAD_TYPE_MAP.picCard;
});
const isDefault = computed(() => {
  return !listType.value || listType.value == 'text';
});
const limitFile = computed(() => {
  return props?.item?.limitFile || [];
});
const limitFileMsg = computed(() => {
  return props?.item?.limitFileMsg || '';
});
const limitSize = computed(() => {
  return props?.item?.limitSize || 2;
});
const limitSizeMsg = computed(() => {
  return props?.item?.limitSizeMsg || '';
});
const limitUnit = computed(() => {
  return props?.item?.limitUnit || 'MB';
});
const limitNumMsg = computed(() => {
  return props?.item?.limitNumMsg || '';
});
const isProfile = computed(() => {
  return props?.item?.profile || false;
});
const isDrag = computed(() => {
  return attrs.drag;
});
const isHideCover = computed(() => {
  return props?.item?.hideCoverBtn && isCover.value && configs.uploadFileList.length > 0;
});
const disabled = computed(() => {
  return attrs.disabled;
});
const btnText = computed(() => {
  const hint = isPicCard.value ? '图片' : '文件';
  let text = `选择${hint}`;
  if (uploading.value) {
    text = '正在上传...';
  } else if (isCover.value && !isMultiple.value) {
    if (autoUpload.value) {
      if (configs.initUploadStatus) {
        text = '点击上传';
      } else {
        text = '重新上传';
      }
    } else {
      if (configs.initUploadStatus) {
        text = `选择${hint}`;
      } else {
        text = '重新上传';
      }
    }
  } else {
    if (autoUpload.value) {
      text = '点击上传';
    }
  }
  return text;
});
const tipText = computed(() => {
  let text = '不限制上传格式，';
  if (isPicCard.value) {
    text = '文件须为图片格式，';
  }
  return `${text}文件大小不超过${limitSize.value}${limitUnit.value}`;
});
const tipContent = computed(() => {
  return props?.item?.tipContent || '';
});
const httpRequestFunc = computed(() => {
  return props?.item?.httpRequestFunc;
});
// const textPreview = computed(() => {
//   return props?.item?.textPreview;
// });

watch(
  [isCover, httpRequestFunc],
  ([nVal1, nVal2]) => {
    defAttrs.isCover = nVal1;

    if (nVal2 && nVal2 instanceof Function) {
      defAttrs['http-request'] = httpRequestAction;
    }
  },
  {
    immediate: true,
    deep: true
  }
);

watch(
  () => limitFile.value,
  val => {
    if (val && val.length > 0) {
      updateFileAccept(val);
    }
  },
  {
    immediate: true,
    deep: true
  }
);

function updateFileAccept(files: Array<string>) {
  defAttrs.accept = '';
  files.forEach((key: string) => {
    const fileType = fileTypeMap[key] || '';
    if (fileType) {
      if (defAttrs.accept) defAttrs.accept += ',';
      defAttrs.accept += fileType;
    }
  });
}

function validateForm(msg: String) {
  const { formRuleFunc, formValidateFunc } = toRefs(props?.item);
  if (formRuleFunc && formRuleFunc.value instanceof Function && formValidateFunc && formValidateFunc.value instanceof Function) {
    const formRule = formRuleFunc.value();
    const { message } = formRule;
    formRule.message = msg;
    formValidateFunc.value();
    formRule.message = message;
  }
  emits('uploadErrorFunc', msg);
}

function onExceedAction(files: File[], fileList: UploadUserFile[]) {
  uploading.value = false;
  if (props.onExceed) {
    return props.onExceed(files, fileList);
  }
  const msg: any =
    `当前限制选择 ${attrs.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件` ||
    limitNumMsg.value;
  if (isToast.value) {
    setTimeout(() => {
      ElMessage.warning(msg);
    }, 200);
  } else {
    validateForm(msg);
  }
}

function beforeUploadAction(file: UploadRawFile) {
  if (props.beforeUpload) {
    const beforeStatus = props.beforeUpload(file);
    if (beforeStatus && isCover.value && !isMultiple.value) {
      updateCoverFileList();
    }
    return beforeStatus;
  }
  const isSuccess = validateUploadFile(file, true);
  if (isSuccess && autoUpload.value && isCover.value && !isMultiple.value) {
    updateCoverFileList();
  }
  return isSuccess;
}

function validateUploadFile(file: UploadRawFile, showMsg: Boolean): Boolean {
  let isSuccess: Boolean = true;
  const { size, name } = file;
  const isLimitFile = limitFile.value.length > 0 && !fileTypeMatch(name);

  let isLimitSize = false;
  switch (limitUnit.value) {
    case 'KB':
      isLimitSize = size / 1024 > limitSize.value;
      break;
    case 'MB':
      isLimitSize = size / 1024 / 1024 > limitSize.value;
      break;
    default:
      isLimitSize = size / 1024 / 1024 / 1024 > limitSize.value;
      break;
  }

  if (isLimitFile) {
    const msg =
      limitFileMsg.value ||
      `上传文件 ${file.name} 只能是 ${limitFile.value
        .filter(item => item)
        .join('，')
        .toLocaleLowerCase()} 格式！`;
    if (isToast.value && showMsg) {
      setTimeout(() => {
        ElMessage.error(msg);
      }, 200);
    } else {
      validateForm(msg);
    }
    isSuccess = false;
  }
  if (isLimitSize) {
    const msg = limitSizeMsg.value || `上传文件 ${file.name} 大小不能超过 ${limitSize.value}${limitUnit.value}！`;
    if (isToast.value && showMsg) {
      setTimeout(() => {
        ElMessage.error(msg);
      }, 200);
    } else {
      validateForm(msg);
    }
    isSuccess = false;
  }
  if (isPicCard.value && !fileTypeMatch(name, IMG_SUFFIX_LIST)) {
    const msg = `上传文件 ${file.name} 不是图片格式的文件！`;
    if (isToast.value && showMsg) {
      setTimeout(() => {
        ElMessage.error(msg);
      }, 200);
    } else {
      validateForm(msg);
    }
    isSuccess = false;
  }
  return isSuccess;
}

function fileTypeMatch(name: string, list?: Array<string>) {
  let fileData: Array<any> = [];
  if (limitFile.value.length > 0) {
    fileData = limitFile.value;
  } else if (list) {
    fileData = list;
  }
  if (fileData.length <= 0) {
    return true;
  }
  for (let i = 0; i < fileData.length; i++) {
    const elem = (fileData[i] || '').toLowerCase();
    if (name.toLowerCase().endsWith(elem)) {
      return true;
    }
  }
  return false;
}

function updateCoverFileList(preIndex?: number, endIndex?: number) {
  configs.uploadFileList.splice(preIndex || 0, endIndex || configs.uploadFileList.length - 1);
}

function onChangeAction(file: UploadChangeFile, fileList: UploadFiles) {
  configs.uploadFileList = fileList;
  const isSuccess = file.raw && validateUploadFile(file.raw, !autoUpload.value);
  if (isSuccess && isCover.value && !isMultiple.value) {
    updateCoverFileList();
  }
  if (props.onChange) {
    return props.onChange(file, fileList);
  }
  const { size } = file;
  if (size <= 0) {
    setChangeRes();
    const msg = emptyFileMsg.value || '禁止上传空文件，请检查后重新上传！';
    if (isToast.value) {
      ElMessage.error(msg);
    } else {
      validateForm(msg);
    }
    return;
  }
  if (file.raw) {
    if (!autoUpload.value && !isSuccess) {
      setChangeRes();
    } else {
      file.blob = URL.createObjectURL(file.raw) || '';
      emits('onChangeFunc', file);
    }
  }
}

function setChangeRes() {
  let startIndex = 0;
  if (configs.uploadFileList.length > 1) {
    startIndex = configs.uploadFileList.length - 1;
  }
  updateCoverFileList(startIndex, 1);
  emits('onChangeFunc', {});
}

function onSuccessAction(response: any, file: UploadFile, fileList: UploadFiles) {
  uploading.value = false;
  configs.initUploadStatus = false;
  const { formRuleFunc, formValidateFunc } = toRefs(props?.item);
  if (formRuleFunc && formRuleFunc.value instanceof Function && formValidateFunc && formValidateFunc.value instanceof Function) {
    formValidateFunc.value();
  }
  if (props.onSuccess) {
    return props.onSuccess(response, file, fileList);
  }
}

function onErrorAction(err: Error, file: UploadFile, fileList: UploadFiles) {
  uploading.value = false;
  if (props.onError) {
    return props.onError(err, file, fileList);
  }
}

function onRemoveAction(file: UploadFile, fileList: UploadFiles) {
  configs.initUploadStatus = !fileList.length;
  configs.uploadFileList = configs.uploadFileList.filter((item: any) => {
    if (item.uid === file.uid || item.name === file.name) {
      return null;
    }
    return item;
  });
  if (props.onRemove) {
    return props.onRemove(file, fileList);
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
//         configs.typePreview = 'image';
//         configs.sourcePreview = isPicCard.value ? [url] : [blob];
//         configs.showPreview = true;
//       } else if (type == 'application/pdf') {
//         if (textPreview.value.includes('pdf')) {
//           configs.typePreview = 'pdf';
//           configs.sourcePreview = blob;
//           configs.showPreview = true;
//         } else if (textPreview.value.includes('pdfNative')) {
//           blob && window.open(blob, '_blank');
//         }
//       } else if (
//         textPreview.value.includes('xlsx') &&
//         ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(type)
//       ) {
//         configs.typePreview = 'xlsx';
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
//         configs.typePreview = 'docx';
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
//         configs.typePreview = 'image';
//         configs.sourcePreview = [url];
//         configs.showPreview = true;
//       }
//     }
//   } else if (isPicCard.value) {
//     configs.typePreview = 'image';
//     configs.sourcePreview = [url];
//     configs.showPreview = true;
//   }
// }

async function httpRequestAction(data: any) {
  const { file } = data;
  if (!file) {
    return;
  }
  const { size } = file;
  if (size <= 0 || !validateUploadFile(file, false)) {
    return;
  }
  if (props.httpRequest) {
    return props.httpRequest(data);
  }
  const formData = new FormData();
  formData.append('file', file);
  if (httpRequestFunc.value instanceof Function) {
    uploading.value = true;
    let res: any = {};
    try {
      res = await httpRequestFunc.value(formData);
    } catch (error) {
      res = error;
    } finally {
      uploading.value = false;
      emits('httpResponseFunc', res);
    }
  }
}

function hasReadyFile() {
  let status = false;
  for (let i = 0; i < configs.uploadFileList.length; i++) {
    const file = configs.uploadFileList[i];
    if (file.status === UPLOAD_STATUS_MAP.ready) {
      status = true;
      break;
    }
  }
  return status;
}

function comfirmUpload() {
  uploadRef?.value?.submit();
}

function removeFile(file: UploadFile) {
  uploadRef?.value.handleRemove(file);
}

function cancelUpload() {
  configs.uploadFileList.forEach((file: UploadFile) => {
    if (file) {
      try {
        uploadRef?.value?.abort(file);
        removeFile(file);
      } catch (error) {}
    }
  });
}

function onProgressAction() {
  uploading.value = true;
}

// function closePreview() {
//   configs.showPreview = false;
//   configs.sourcePreview = '';
// }

defineExpose({
  uploadRef
});
</script>

<style lang="scss" scoped>
.ls-upload {
  position: relative;
  width: 100%;
  font-size: $font-size-content-small;
  :deep(.ls-tip) {
    margin-top: 8px;
    font-size: $font-size-content-small;
    font-weight: 400;
    line-height: $line-height-content-small;
    color: $color-text3;
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
      font-size: $font-size-content-medium;
      line-height: $line-height-content-medium;
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
      font-size: $font-size-content-small;
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
      font-size: $font-size-content-medium;
      line-height: $line-height-content-medium;
      color: $color-text1;
    }
    &.ls-upload-btn-comfirm,
    &.ls-upload-btn-cancel {
      font-size: $font-size-content-medium;
      line-height: $line-height-content-medium;
    }
    &.ls-upload-btn-comfirm {
      color: $color-light;
      background-color: $color-brand3;
      border: 1px solid $color-brand3;
      &.is-ready {
        background-color: $color-brand6;
        border: 1px solid $color-brand6;
      }
    }
    &.ls-upload-btn-cancel {
      color: $color-text1;
      background-color: #e7e7e7;
      border: 1px solid #e7e7e7;
    }
    &.ls-upload-btn-default {
      &:hover {
        background-color: $color-border6;
      }
      &:focus {
        background-color: $color-border5;
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
  &.hide-cover-btn {
    :deep(.el-upload--picture-card) {
      display: none;
    }
  }
}
</style>
