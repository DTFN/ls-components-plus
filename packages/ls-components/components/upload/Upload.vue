<script setup lang="ts">
/**
 * 上传组件
 */
// import type { UploadFile, UploadFiles, UploadProgressEvent, UploadProps, UploadRawFile, UploadUserFile } from 'element-plus';
// import { isEqual } from 'lodash-es';
// import { genFileId } from 'element-plus';
// // import { download_api } from '~api/common';
// import { blobUrl, validateFileType } from '@cpo/_utils/utils';
// // import useUserStore from '~store/user';

// interface FileListType extends UploadUserFile {
//   pathKey?: string;
// }

// const props = withDefaults(
//   defineProps<{
//     type: 'image' | 'text';
//     // 接口
//     url: string;
//     // 文件大小限制(MB)
//     size?: number;
//     // 文件数量限制
//     limit?: number;
//     // 接受上传的文件类型
//     accept?: string;
//     // 文件格式限制提示
//     acceptHint?: string;
//     // 文件
//     fileList?: UploadFileType[];
//     // 是否显示已上传文件列表
//     showFileList?: boolean;
//     // 是否显示上传成功提示
//     showSuccessMessage?: boolean;
//     // 显示上传成功提示文字
//     successMessage?: string;
//     // 显示上传失败提示文字
//     errorMessage?: string;
//     // 显示上传按钮文字
//     buttonText?: string;
//     // 是否禁止
//     disabled?: boolean;
//     // 是否处理上传成功返回的数据
//     isDealRes?: boolean;
//     // 上传按钮属性
//     buttonAtttrs?: ObjType;
//     // 上传请求方法
//     method?: string;
//     // 上传请求参数
//     data?: ObjType | Function;
//     // 上传文件字段名
//     name?: string;
//   }>(),
//   {
//     fileList: () => [],
//     type: 'text',
//     showFileList: false,
//     limit: 1,
//     showSuccessMessage: true,
//     successMessage: '上传成功',
//     errorMessage: '上传失败',
//     buttonText: '上传文件',
//     disabled: false,
//     isDealRes: true,
//     data: () => ({}),
//     method: 'post',
//     name: 'file'
//   }
// );

// const emits = defineEmits<{
//   'update:fileList': [fileList: UploadFileType[]];
//   updateSuccess: [res: any];
//   handlePreview: [uploadFile: UploadFile];
// }>();

// const UploadRef = ref();

// const uploadLoading = ref(false);

// const baseURL = import.meta.env.VITE_APP_API_BASEURL;

// // const fileList = ref<UploadUserFile[]>([]);

// const propsUploadFiles = computed<UploadUserFile[]>(() => {
//   const list: FileListType[] = [];

//   if (props.fileList && props.fileList.length) {
//     props.fileList.forEach((item: UploadFileType) => {
//       const { url, name, pathKey } = item;
//       list.push({
//         url,
//         name: name || pathKey,
//         pathKey
//       });
//     });
//   }

//   return list;
// });

// const uploadFiles = computed<UploadFileType[]>(() => {
//   const list: UploadFileType[] = [];

//   if (fileList.value && fileList.value.length) {
//     fileList.value.forEach((item: FileListType) => {
//       const { url, name, status, pathKey } = item;

//       if (pathKey) {
//         list.push({
//           url,
//           name: name || pathKey,
//           pathKey
//         });
//       } else {
//         const response: any = item.response;

//         if (status && status === 'success' && response.code === 200 && response.data && response.data.filePathKey) {
//           list.push({
//             url,
//             name: name || response.data.filePathKey,
//             pathKey: response.data.filePathKey
//           });
//         }
//       }
//     });
//   }

//   return list;
// });

// watch(
//   () => propsUploadFiles.value,
//   newVal => {
//     if (!isEqual(newVal, uploadFiles.value)) fileList.value = newVal;
//   },
//   { immediate: true, deep: true }
// );

// watch(
//   () => uploadFiles.value,
//   newVal => {
//     if (!isEqual(newVal, propsUploadFiles.value)) emits('update:fileList', newVal);
//   },
//   { deep: true }
// );

// // 正在下载的图片 key:pathKey
// const downImageUrls: ObjType = ref({});

// // 获取图片url
// function getImageUrl(pathKey: string, uid: number) {
//   if (!uid) return;
//   const result = downImageUrls.value[uid];

//   if (!result && result !== 'uploading') {
//     const index = fileList.value.findIndex((item: FileListType) => item.uid === uid);

//     if (index >= 0) {
//       downImageUrls[uid] = 'uploading';
//       download_api(pathKey).then(res => {
//         const url: any = blobUrl(res);
//         fileList.value[index].url = url;
//         fileList.value[index].status = 'success';
//         fileList.value[index].percentage = 100;
//         delete downImageUrls.value[uid];
//       });
//     }
//   }
// }

// watch(
//   () => fileList.value,
//   newVal => {
//     if (props.type === 'image') {
//       newVal.forEach((item: FileListType) => {
//         const { url, status, pathKey, uid } = item;

//         if (!url && status !== 'uploading' && pathKey && uid) {
//           item.status = 'uploading';
//           item.percentage = 50;
//           getImageUrl(pathKey, uid);
//         }
//       });
//     }
//   },
//   { immediate: true, deep: true }
// );

// // 文件列表的类型
// const listType = computed<'text' | 'picture-card'>(() => {
//   return props.type === 'image' ? 'picture-card' : 'text';
// });

// // 是否显示已上传文件列表
// const showFileList = computed<boolean>(() => {
//   return props.type === 'image' ? true : props.showFileList;
// });

// // 图片预览url集
// const urlList = computed<string[]>(() => {
//   return fileList.value ? fileList.value.map((item: any) => item.url) : [];
// });

// const showViewer = ref(false);
// const urlIndex = ref(0);

// // 鼠标滚轮事件 放大缩小事件 不往下传 不影响浏览器事件
// let stopWheelListener: (() => void) | undefined;

// // 监听鼠标滚轮事件 放大缩小事件
// function wheelHandler(e: WheelEvent) {
//   if (!e.ctrlKey) return;

//   if (e.deltaY < 0) {
//     e.preventDefault();

//     return false;
//   } else if (e.deltaY > 0) {
//     e.preventDefault();

//     return false;
//   }
// }

// // 关闭图片文件预览窗口
// function closeViewer() {
//   stopWheelListener?.();
//   showViewer.value = false;
// }

// // 点击文件列表中已上传的文件时的钩子
// const handlePreview: UploadProps['onPreview'] = (uploadFile: UploadFile) => {
//   if (props.type === 'image') {
//     stopWheelListener = useEventListener('wheel', wheelHandler, {
//       passive: false
//     });
//     const findIndex = (urlList.value || []).findIndex(item => item === uploadFile.url);
//     urlIndex.value = findIndex < 0 ? 0 : findIndex;
//     // 文件预览
//     showViewer.value = true;
//   }
//   emits('handlePreview', uploadFile);
// };

// // 文件列表移除文件时的钩子
// const handleRemove: UploadProps['onRemove'] = (_uploadFile: UploadFile, _uploadFiles: UploadFiles) => {
//   // console.log('handleRemove', uploadFile, uploadFiles)
// };

// // 文件上传成功时的钩子
// const handleSuccess: UploadProps['onSuccess'] = (_response: any, _uploadFile: UploadFile, _uploadFiles: UploadFiles) => {
//   // console.log('handleSuccess-response', _response)
//   uploadLoading.value = false;
//   let isSuc = true;

//   if (_response && _response.code === 200) {
//     if (props.isDealRes) isSuc = !!(_response.data && _response.data.filePathKey);
//   } else {
//     isSuc = false;
//   }

//   if (isSuc) {
//     if (props.showSuccessMessage) ElMessage.success(props.successMessage || '上传成功');

//     emits('updateSuccess', _response.data);
//   } else {
//     ElMessage.error(_response?.msg || `${props.errorMessage || '上传失败'}`);
//   }
//   // console.log('handleSuccess', uploadFile, uploadFiles)
// };

// // 文件上传失败时的钩子
// const handleError: UploadProps['onError'] = (_error: Error, _uploadFile: UploadFile, _uploadFiles: UploadFiles) => {
//   // console.log('handleError', _error)
//   uploadLoading.value = false;
//   ElMessage.error(`${props.errorMessage || '上传失败'}`);
// };

// // 文件上传时的钩子
// const handleProgress: UploadProps['onProgress'] = (
//   _evt: UploadProgressEvent,
//   _uploadFile: UploadFile,
//   _uploadFiles: UploadFiles
// ) => {
//   // console.log('handleProgress', _evt, _uploadFile, uploadFiles)
// };

// // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
// const handleChange: UploadProps['onChange'] = (_uploadFile: UploadFile, _uploadFiles: UploadFiles) => {
//   // console.log('handleChange', uploadFile, uploadFiles)
// };

// // 当超出限制时，执行的钩子函数
// const handleExceed: UploadProps['onExceed'] = (_files: File[], _uploadFiles: UploadUserFile[]) => {
//   // 如果文件个数限制一个的时候 自动替换
//   if (props.limit === 1) {
//     UploadRef.value!.clearFiles();
//     const file = _files[0] as UploadRawFile;
//     file.uid = genFileId();
//     UploadRef.value!.handleStart(file);
//     UploadRef.value!.submit();
//   } else {
//     uploadLoading.value = false;
//     ElMessage.error(`只能上传 ${props.limit} 个文件`);
//   }
// };

// // 文件上传之前是否通过
// const isBeforeUploadSuc = ref(true);

// // 上传文件之前
// const beforeUpload: UploadProps['beforeUpload'] = (rawFile: UploadRawFile) => {
//   const accept: string | undefined = props.accept;

//   // 文件格式校验
//   let isAccord: boolean = true;

//   if (accept) isAccord = validateFileType(accept, rawFile);

//   if (!isAccord) {
//     ElMessage.error(props.acceptHint || `请上传 ${accept} 格式的文件!`);
//     isBeforeUploadSuc.value = false;

//     return false;
//   }

//   // 文件尺寸校验
//   let isLtM = true;

//   if (props.size) isLtM = rawFile.size / 1024 / 1024 < props.size;

//   if (!isLtM) {
//     ElMessage.error(`上传的文件大小不能超过 ${props.size} MB!`);
//     isBeforeUploadSuc.value = false;

//     return false;
//   }
//   isBeforeUploadSuc.value = true;

//   uploadLoading.value = true;

//   return true;
// };

// // 删除文件之前的钩子
// const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, _uploadFiles) => {
//   if (!isBeforeUploadSuc.value) return true;

//   return ElMessageBox.confirm(`是否删除 ${uploadFile.name} ?`).then(
//     () => true,
//     () => false
//   );
// };

// // 文件数量是否超出限制
// const isExceed = computed(() => {
//   return props.limit ? fileList.value.length >= props.limit : false;
// });

// defineExpose({
//   UploadRef,
//   fileList
// });
</script>

<template>
  <div>
    <!-- <el-upload
      ref="UploadRef"
      v-model:file-list="fileList"
      :class="[{ 'hide-upload': isExceed || disabled }, { 'hide-file-list': !showFileList }]"
      :action="`${baseURL}${url}`"
      :headers="{ Authorization: `Bearer ${useUserStore().getToken()}` }"
      :method="method"
      :data="data"
      :name="name"
      :accept="accept"
      :list-type="listType"
      :show-file-list="showFileList"
      :limit="limit"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :on-change="handleChange"
      :on-exceed="handleExceed"
      :before-upload="beforeUpload"
      :before-remove="beforeRemove"
      :disabled="disabled || uploadLoading"
    >
      <div v-if="type === 'image'" class="i-ep-plus text-24px" />

      <el-button v-else type="primary" v-bind="buttonAtttrs" :loading="uploadLoading" :disabled="disabled || uploadLoading">
        {{ buttonText }}
      </el-button>

      <template v-if="$slots.trigger && type !== 'image'" #trigger>
        <slot name="trigger" />
      </template>

      <template v-if="$slots.tip" #tip>
        <slot name="tip" />
      </template>
    </el-upload>

    <el-image-viewer
      v-if="showViewer"
      teleported
      :url-list="urlList"
      :initial-index="urlIndex"
      :z-index="3000"
      @close="closeViewer"
    /> -->
  </div>
</template>

<style scoped lang="scss">
.hide-upload {
  &:deep() .el-upload--picture-card {
    display: none;
  }
}
:deep() .el-upload-list--picture-card {
  .el-upload--picture-card,
  .el-upload-list__item {
    width: 120px;
    height: 120px;
    color: var(--el-border-color-darker);
  }
  .el-icon--close-tip {
    display: none;
    opacity: 0;
  }
  .el-progress {
    width: 100px !important;
    .el-progress-circle {
      width: 100px !important;
      height: 100px !important;
    }
  }
}
.hide-file-list {
  &:deep() .el-upload-list {
    margin: 0;
  }
}
:deep() .is-disabled {
  .el-upload-list__item-status-label {
    display: none;
  }
}
</style>
