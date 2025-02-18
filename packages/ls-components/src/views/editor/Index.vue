<script setup lang="ts">
const uploadServer = ref('http://192.168.1.161:8080/fss/upload');

const lsEditorRef = ref();

const uploadToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi57O757uf566h55CG5ZGYIiwiZW5jcnlwdGVkUHdkIjoiJDJhJDEwJGIzYXZkYk9OWkdreElPUWF6by9GNHVzUk1pNEZ4QjlwT3lzNWJNaW8yMmdvNVNyMDNaRElPIiwidXNlclR5cGUiOiJST0xFX0FETUlOIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlBFUl9VU0VSX01HVCJ9LHsiYXV0aG9yaXR5IjoiUEVSX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfRVFVSVBfTUdUIn0seyJhdXRob3JpdHkiOiJQRVJfT1ZFUl9WSUVXIn0seyJhdXRob3JpdHkiOiJQRVJfUkVNT1RFX0dVSURBTkNFIn0seyJhdXRob3JpdHkiOiJQRVJfT05MSU5FX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfSU5GT19WSUVXIn1dLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcyODg3MDU4MiwiZXhwIjoxNzMxNDYyNTgyfQ.oflBeBsWuCLifqP9u43eRducrJeQz7JR0IVjTITqTwM';

const editorConfig: any = ref({
  // MENU_CONF: {
  //   uploadImage: {
  //     customInsert(res: any, insertFn: any) {
  //       // res 即服务端的返回结果
  //       // 从 res 中找到 url alt href ，然后插入图片
  //       insertFn(res.data, '', '');
  //     }
  //   }
  // }
});

function onClick() {
  const editor = lsEditorRef.value.editorRef;
  console.log(editor.getHtml());
}
const formData = ref({
  content: '<div>测试内容</div>'
});

function handleCreated(editor: any) {
  const uploadImgConfig = editor.getConfig().MENU_CONF.uploadImage;
  uploadImgConfig.onError = (file: File) => {
    const isLt2M = file.size / 1024 / 1024 <= 1;
    if (!isLt2M) {
      ElMessage.error('上传图片大小不能超过 1M!');
    } else {
      ElMessage.error(`${file.name}上传失败，请刷新页面后重试~`);
    }
  };
}

onMounted(() => {
  setTimeout(() => {
    formData.value.content = `<div>222222222222222222222</div>`;
  }, 2000);
});
</script>

<template>
  <div>
    <LSEditor
      ref="lsEditorRef"
      :toolbar-config="{
        excludeKeys: ['italic']
      }"
      :upload-server="uploadServer"
      :upload-token="uploadToken"
      :editor-config="editorConfig"
      :value-html="formData.content"
      :upload-img-limit="1"
      :upload-img-size="1"
      height="400px"
      @handle-created="handleCreated"
    />

    <LSButton type="primary" @click="onClick"> 提交 </LSButton>
  </div>
</template>

<style lang="scss" scoped></style>
