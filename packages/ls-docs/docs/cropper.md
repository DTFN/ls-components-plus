---
outline: deep
---

# Cropper 描述

::: warning 基于(vue-cropper)[https://github.com/xyxiao001/vue-cropper]二次封装，保留原属性和方法。
:::

## 使用方式

<LSUpload
  list-type="picture-card"
  :auto-upload="false"
  :file-list="fileList"
  :item="{
    limitFile: ['png', 'jpg', 'jpeg'],
    limitSize: 20
  }"
  @on-change-func="onChangeFunc"
></LSUpload>
<LSDialog v-model="visible" @on-confirm="onConfirm">
  <LSCropper :img-url="imgUrl" graphics-type="circular" :show-preview="true" :fixed="false" @on-crop-data="onCropData" />
</LSDialog>

```html
<LSUpload
  list-type="picture-card"
  :auto-upload="false"
  :file-list="fileList"
  :item="{
    limitFile: ['png', 'jpg', 'jpeg'],
    limitSize: 20
  }"
  @on-change-func="onChangeFunc"
></LSUpload>
<LSDialog v-model="visible" @on-confirm="onConfirm">
  <LSCropper :img-url="imgUrl" graphics-type="circular" :show-preview="true" :fixed="false" @on-crop-data="onCropData" />
</LSDialog>
```

```javascript
const fileList = ref([]);

const visible = ref(false);

const cropData = ref({});

const imgUrl = ref('');

function onChangeFunc(res) {
  fileList.value = [];
  imgUrl.value = res.blob;
  visible.value = true;
}

function onConfirm() {
  visible.value = false;
  fileList.value = [
    {
      url: URL.createObjectURL(cropData.value.file)
    }
  ];
}

function onCropData(data) {
  console.log(data);
  cropData.value = data;
}

```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Methods，通过emit抛出的可使用方法

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData2" />

<script setup>
import { tableColumn, tableMethodColumn } from '../constant';
import { ref } from 'vue';

const fileList = ref([]);

const visible = ref(false);

const cropData = ref({});

const imgUrl = ref('');

function onChangeFunc(res) {
  fileList.value = [];
  imgUrl.value = res.blob;
  visible.value = true;
}

function onConfirm() {
  visible.value = false;
  fileList.value = [
    {
      url: URL.createObjectURL(cropData.value.file)
    }
  ];
}

function onCropData(data) {
  console.log(data);
  cropData.value = data;
}

const tableData = ref([
  {
    name: 'imgUrl',
    desc: '图片地址',
    type: 'string',
    value: '-'
  },
  {
    name: 'fileName',
    desc: '图片名称，不需要带后缀',
    type: 'string',
    value: '-'
  },
  {
    name: 'graphicsType',
    desc: '设置裁剪图形形状 square:方形、circular:圆形(默认：square(方形))',
    type: 'string',
    value: 'square'
  },
  {
    name: 'showPreview',
    desc: '是否显示预览图',
    type: 'boolean',
    value: 'true'
  }
]);

const tableData2 = ref([
  {
    name: 'onCropData',
    desc: '裁剪成功后回调',
    type: 'function',
    value: '{}'
  },
  {
    name: 'onCropError',
    desc: '裁剪图片出错时回调',
    type: 'function',
    value: '-'
  }
])
</script>

<style lang="scss" scoped>
</style>
