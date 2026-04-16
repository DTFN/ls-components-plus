---
outline: deep
---

# Cropper 图片裁剪

::: warning 基于 [vue-cropper](https://github.com/xyxiao001/vue-cropper) 二次封装，保留原属性和方法。
:::

## 简介

LSCropper 是一个功能强大的图片裁剪组件，基于 vue-cropper 二次封装，提供了丰富的裁剪功能和灵活的配置选项。它支持方形和圆形裁剪，实时预览，多种输出格式，并提供了详细的错误处理机制。

## 使用方式

### 1. 基本使用

<ClientOnly>
  <div>
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
  </div>
</ClientOnly>

::: details 点我查看代码

```vue
<script setup>
import { ref } from 'vue'

const fileList = ref([])
const visible = ref(false)
const cropData = ref({})
const imgUrl = ref('')

function onChangeFunc(res) {
  fileList.value = []
  imgUrl.value = res.blob
  visible.value = true
}

function onConfirm() {
  visible.value = false

  if (cropData.value.file) {
    fileList.value = [
      {
        url: URL.createObjectURL(cropData.value.file)
      }
    ]
  }
}

function onCropData(data) {
  console.log('裁剪数据:', data)
  cropData.value = data
}
</script>

<template>
  <div>
    <LSUpload
      list-type="picture-card"
      :auto-upload="false"
      :file-list="fileList"
      :item="{
        limitFile: ['png', 'jpg', 'jpeg'],
        limitSize: 20,
      }"
      @on-change-func="onChangeFunc"
    ></LSUpload>
    <LSDialog v-model="visible" @on-confirm="onConfirm">
      <LSCropper :img-url="imgUrl" graphics-type="circular" :show-preview="true" :fixed="false" @on-crop-data="onCropData" />
    </LSDialog>
  </div>
</template>
```

:::

### 2. 方形裁剪

<ClientOnly>
  <div>
    <LSCropper :img-url="sampleImageUrl" graphics-type="square" :show-preview="true" @on-crop-data="onCropDataSquare" />
  </div>
</ClientOnly>

::: details 点我查看代码

```vue
<script setup>
import { ref } from 'vue'

const sampleImageUrl = ref('http://192.168.1.33:8008/images/fish1.png')
const cropDataSquare = ref({})

function onCropDataSquare(data) {
  console.log('方形裁剪数据:', data)
  cropDataSquare.value = data
}
</script>

<template>
  <LSCropper :img-url="sampleImageUrl" graphics-type="square" :show-preview="true" @on-crop-data="onCropDataSquare" />
</template>
```

:::

### 3. 圆形裁剪

<ClientOnly>
  <div>
    <LSCropper :img-url="sampleImageUrl" graphics-type="circular" :show-preview="true" @on-crop-data="onCropDataCircular" />
  </div>
</ClientOnly>

::: details 点我查看代码

```vue
<script setup>
import { ref } from 'vue'

const sampleImageUrl = ref('http://192.168.1.33:8008/images/fish1.png')
const cropDataCircular = ref({})

function onCropDataCircular(data) {
  console.log('圆形裁剪数据:', data)
  cropDataCircular.value = data
}
</script>

<template>
  <LSCropper :img-url="sampleImageUrl" graphics-type="circular" :show-preview="true" @on-crop-data="onCropDataCircular" />
</template>
```

:::

### 4. 自定义输出格式

<ClientOnly>
  <div>
    <LSCropper :img-url="sampleImageUrl" graphics-type="square" output-type="jpeg" :show-preview="true" @on-crop-data="onCropDataJpeg" />
  </div>
</ClientOnly>

::: details 点我查看代码

```vue
<script setup>
import { ref } from 'vue'

const sampleImageUrl = ref('http://192.168.1.33:8008/images/fish1.png')
const cropDataJpeg = ref({})

function onCropDataJpeg(data) {
  console.log('JPEG格式裁剪数据:', data)
  cropDataJpeg.value = data
}
</script>

<template>
  <LSCropper
    :img-url="sampleImageUrl"
    graphics-type="square"
    output-type="jpeg"
    :show-preview="true"
    @on-crop-data="onCropDataJpeg"
  />
</template>
```

:::

### 5. 禁用预览

<ClientOnly>
  <div>
    <LSCropper :img-url="sampleImageUrl" graphics-type="square" :show-preview="false" @on-crop-data="onCropDataNoPreview" />
  </div>
</ClientOnly>

::: details 点我查看代码

```vue
<script setup>
import { ref } from 'vue'

const sampleImageUrl = ref('http://192.168.1.33:8008/images/fish1.png')
const cropDataNoPreview = ref({})

function onCropDataNoPreview(data) {
  console.log('无预览裁剪数据:', data)
  cropDataNoPreview.value = data
}
</script>

<template>
  <LSCropper :img-url="sampleImageUrl" graphics-type="square" :show-preview="false" @on-crop-data="onCropDataNoPreview" />
</template>
```

:::

### 6. 自定义文件名

<ClientOnly>
  <div>
    <LSCropper :img-url="sampleImageUrl" graphics-type="square" file-name="custom-cropped-image" :show-preview="true" @on-crop-data="onCropDataCustomName" />
  </div>
</ClientOnly>

::: details 点我查看代码

```vue
<script setup>
import { ref } from 'vue'

const sampleImageUrl = ref('http://192.168.1.33:8008/images/fish1.png')
const cropDataCustomName = ref({})

function onCropDataCustomName(data) {
  console.log('自定义文件名裁剪数据:', data)
  cropDataCustomName.value = data
}
</script>

<template>
  <LSCropper
    :img-url="sampleImageUrl"
    graphics-type="square"
    file-name="custom-cropped-image"
    :show-preview="true"
    @on-crop-data="onCropDataCustomName"
  />
</template>
```

:::

### 7. 自定义最小尺寸限制

<ClientOnly>
  <div>
    <LSCropper :img-url="sampleImageUrl" graphics-type="square" :limit-min-size="50" :show-preview="true" @on-crop-data="onCropDataCustomSize" />
  </div>
</ClientOnly>

::: details 点我查看代码

```vue
<script setup>
import { ref } from 'vue'

const sampleImageUrl = ref('http://192.168.1.33:8008/images/fish1.png')
const cropDataCustomSize = ref({})

function onCropDataCustomSize(data) {
  console.log('自定义最小尺寸裁剪数据:', data)
  cropDataCustomSize.value = data
}
</script>

<template>
  <LSCropper
    :img-url="sampleImageUrl"
    graphics-type="square"
    :limit-min-size="50"
    :show-preview="true"
    @on-crop-data="onCropDataCustomSize"
  />
</template>
```

:::

### 8. WebP 格式输出

<ClientOnly>
  <div>
    <LSCropper :img-url="sampleImageUrl" graphics-type="square" output-type="webp" :show-preview="true" @on-crop-data="onCropDataWebp" />
  </div>
</ClientOnly>

::: details 点我查看代码

```vue
<script setup>
import { ref } from 'vue'

const sampleImageUrl = ref('http://192.168.1.33:8008/images/fish1.png')
const cropDataWebp = ref({})

function onCropDataWebp(data) {
  console.log('WebP格式裁剪数据:', data)
  cropDataWebp.value = data
}
</script>

<template>
  <LSCropper
    :img-url="sampleImageUrl"
    graphics-type="square"
    output-type="webp"
    :show-preview="true"
    @on-crop-data="onCropDataWebp"
  />
</template>
```

:::

### 9. 带错误处理的裁剪

<ClientOnly>
  <div>
    <LSCropper :img-url="sampleImageUrl" graphics-type="square" :show-preview="true" @on-crop-data="onCropDataWithError" @on-crop-error="onCropError" />
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</ClientOnly>

::: details 点我查看代码

```vue
<script setup>
import { ref } from 'vue'

const sampleImageUrl = ref('http://192.168.1.33:8008/images/fish1.png')
const errorMessage = ref('')
const cropDataWithError = ref({})

function onCropDataWithError(data) {
  console.log('裁剪成功:', data)
  cropDataWithError.value = data
  errorMessage.value = ''
}

function onCropError(error) {
  console.error('裁剪失败:', error)
  errorMessage.value = '裁剪过程中发生错误，请重试'
}
</script>

<template>
  <div>
    <LSCropper
      :img-url="sampleImageUrl"
      graphics-type="square"
      :show-preview="true"
      @on-crop-data="onCropDataWithError"
      @on-crop-error="onCropError"
    />
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped>
.error-message {
  margin-top: 10px;
  padding: 10px;
  background-color: #fef0f0;
  color: #f56c6c;
  border-radius: 4px;
}
</style>
```

:::

### 10. 固定比例裁剪（1:1头像）

<ClientOnly>
  <div>
    <LSCropper :img-url="sampleImageUrl" graphics-type="square" :fixed="true" :fixed-number="[1,1]" :show-preview="true" @on-crop-data="onCropDataFixedRatio" />
  </div>
</ClientOnly>

::: details 点我查看代码

```vue
<script setup>
import { ref } from 'vue'

const sampleImageUrl = ref('http://192.168.1.33:8008/images/fish1.png')
const cropDataFixedRatio = ref({})

function onCropDataFixedRatio(data) {
  console.log('固定比例裁剪数据:', data)
  cropDataFixedRatio.value = data
}
</script>

<template>
  <LSCropper
    :img-url="sampleImageUrl"
    graphics-type="square"
    :fixed="true"
    :fixed-number="[1, 1]"
    :show-preview="true"
    @on-crop-data="onCropDataFixedRatio"
  />
</template>
```

:::

### 11. 响应式裁剪容器

<ClientOnly>
  <div style="width: 100%; max-width: 600px; margin: 0 auto;">
    <LSCropper :img-url="sampleImageUrl" graphics-type="square" :show-preview="true" @on-crop-data="onCropDataResponsive" />
  </div>
</ClientOnly>

::: details 点我查看代码

```vue
<script setup>
import { ref } from 'vue'

const sampleImageUrl = ref('http://192.168.1.33:8008/images/fish1.png')
const cropDataResponsive = ref({})

function onCropDataResponsive(data) {
  console.log('响应式裁剪数据:', data)
  cropDataResponsive.value = data
}
</script>

<template>
  <div class="responsive-container">
    <LSCropper :img-url="sampleImageUrl" graphics-type="square" :show-preview="true" @on-crop-data="onCropDataResponsive" />
  </div>
</template>

<style scoped>
.responsive-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
```

:::

### 12. 头像专用裁剪

<ClientOnly>
  <div>
    <LSCropper :img-url="sampleImageUrl" graphics-type="circular" :limit-min-size="100" :fixed="true" :fixed-number="[1,1]" file-name="avatar" :show-preview="true" @on-crop-data="onCropDataAvatar" />
  </div>
</ClientOnly>

::: details 点我查看代码

```vue
<script setup>
import { ref } from 'vue'

const sampleImageUrl = ref('http://192.168.1.33:8008/images/fish1.png')
const cropDataAvatar = ref({})

function onCropDataAvatar(data) {
  console.log('头像裁剪数据:', data)
  cropDataAvatar.value = data
}
</script>

<template>
  <LSCropper
    :img-url="sampleImageUrl"
    graphics-type="circular"
    :limit-min-size="100"
    :fixed="true"
    :fixed-number="[1, 1]"
    file-name="avatar"
    :show-preview="true"
    @on-crop-data="onCropDataAvatar"
  />
</template>
```

:::

## 功能特性

### 1. 核心功能

- **多种裁剪形状**：支持方形和圆形裁剪
- **实时预览**：裁剪过程中实时显示预览效果
- **多种输出格式**：支持 PNG、JPEG、WebP 格式
- **自定义配置**：可配置最小裁剪尺寸、文件名等
- **错误处理**：提供裁剪错误回调
- **Canvas 二次处理**：圆形裁剪时使用 Canvas 进行特殊处理，确保生成真正的圆形图片

### 2. 工作原理

1. **初始化**：通过 `imgUrl` 属性加载图片到裁剪区域
2. **裁剪操作**：用户可拖动、缩放裁剪框，调整裁剪区域
3. **实时处理**：裁剪过程中通过 `realTime` 方法实时生成裁剪数据
4. **格式转换**：根据 `outputType` 生成对应格式的图片
5. **特殊处理**：对于圆形裁剪，使用 Canvas 进行二次处理
6. **数据回调**：通过 `onCropData` 事件返回裁剪结果，包含 File 对象和 URL

### 3. 圆形裁剪特殊处理

对于圆形裁剪，组件会进行以下特殊处理：

1. 首先使用 vue-cropper 进行方形裁剪，获取裁剪区域
2. 然后通过 Canvas 进行二次处理，绘制圆形路径并剪切
3. 填充透明背景，确保圆形图片的背景透明
4. 将 Canvas 转换为 Blob 对象，生成最终的圆形图片

这种处理方式确保了圆形裁剪的图片在任何背景下都能正确显示为圆形。

## 完整使用示例

### 1. 实际项目中的完整裁剪流程

```vue
<script setup>
import { ref } from 'vue'

// 上传相关
const fileList = ref([])
const cropDialogVisible = ref(false)
const cropImageUrl = ref('')

// 裁剪相关
const cropType = ref('square')
const outputType = ref('png')
const cropResult = ref({})

// 处理文件上传
function handleFileChange(res) {
  fileList.value = []
  cropImageUrl.value = res.blob
  cropDialogVisible.value = true
}

// 处理裁剪数据
function handleCropData(data) {
  console.log('裁剪成功:', data)
  cropResult.value = data
}

// 处理裁剪错误
function handleCropError(error) {
  console.error('裁剪失败:', error)
  // 显示错误提示
}

// 确认裁剪
function handleCropConfirm() {
  cropDialogVisible.value = false

  if (cropResult.value.file) {
    // 显示裁剪后的图片
    fileList.value = [
      {
        url: URL.createObjectURL(cropResult.value.file)
      }
    ]

    // 可以在这里上传裁剪后的图片到服务器
    uploadCroppedImage(cropResult.value.file)
  }
}

// 取消裁剪
function handleCropCancel() {
  cropDialogVisible.value = false
  cropResult.value = {}
}

// 上传裁剪后的图片
function uploadCroppedImage(file) {
  const formData = new FormData()
  formData.append('file', file)

  // 这里实现上传逻辑
  console.log('上传裁剪后的图片:', file.name)
  // 例如：axios.post('/api/upload', formData);
}
</script>

<template>
  <div>
    <!-- 上传组件 -->
    <LSUpload
      list-type="picture-card"
      :auto-upload="false"
      :file-list="fileList"
      :item="{
        limitFile: ['png', 'jpg', 'jpeg'],
        limitSize: 20,
      }"
      @on-change-func="handleFileChange"
    ></LSUpload>

    <!-- 裁剪对话框 -->
    <LSDialog v-model="cropDialogVisible" title="图片裁剪" @on-confirm="handleCropConfirm" @on-cancel="handleCropCancel">
      <LSCropper
        :img-url="cropImageUrl"
        :graphics-type="cropType"
        :output-type="outputType"
        :show-preview="true"
        @on-crop-data="handleCropData"
        @on-crop-error="handleCropError"
      />
    </LSDialog>

    <!-- 裁剪设置 -->
    <div class="crop-settings">
      <h3>裁剪设置</h3>
      <div>
        <label>
          <input v-model="cropType" type="radio" value="square" />
          方形裁剪
        </label>
        <label>
          <input v-model="cropType" type="radio" value="circular" />
          圆形裁剪
        </label>
      </div>
      <div>
        <label>
          <input v-model="outputType" type="radio" value="png" />
          PNG格式
        </label>
        <label>
          <input v-model="outputType" type="radio" value="jpeg" />
          JPEG格式
        </label>
        <label>
          <input v-model="outputType" type="radio" value="webp" />
          WebP格式
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.crop-settings {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
}

.crop-settings h3 {
  margin-top: 0;
  margin-bottom: 15px;
}

.crop-settings div {
  margin-bottom: 10px;
}

.crop-settings label {
  margin-right: 20px;
  cursor: pointer;
}
</style>
```

## 常见问题及解决方案

### 1. 图片无法加载

**解决方案**：

- 确保 `imgUrl` 是有效的图片地址
- 检查图片是否跨域，若跨域需要服务器设置 CORS
- 对于本地文件，确保使用正确的 Blob URL
- 检查网络连接是否正常

### 2. 裁剪后的图片质量差

**解决方案**：

- 对于 JPEG 格式，可以调整输出质量（需要扩展组件）
- 确保原始图片分辨率足够高
- 避免多次裁剪同一图片
- 选择合适的输出格式，对于需要透明背景的场景使用 PNG

### 3. 圆形裁剪后图片不是真正的圆形

**解决方案**：

- 圆形裁剪会生成带透明背景的方形图片
- 在使用时需要通过 CSS 设置 `border-radius: 50%` 来显示为圆形
- 或者使用专门的圆形图片容器
- 确保使用 PNG 格式以保留透明背景

### 4. 裁剪速度慢

**解决方案**：

- 对于大图片，可以先进行压缩再裁剪
- 减少实时预览的频率
- 考虑使用 Web Worker 进行裁剪处理
- 优化设备性能，关闭其他占用资源的应用

### 5. 移动端适配问题

**解决方案**：

- 确保裁剪区域在移动端有合适的大小
- 考虑为移动端提供专门的裁剪界面
- 优化触摸操作体验，确保裁剪框可以流畅拖动
- 使用响应式设计，根据屏幕尺寸调整裁剪区域大小

### 6. 裁剪后的图片无法上传

**解决方案**：

- 检查服务器是否支持接收裁剪后的图片格式
- 确保上传的文件大小在服务器限制范围内
- 检查网络连接是否正常
- 查看浏览器控制台是否有相关错误信息

## API

### 1. Attributes

LSCropper 组件提供了丰富的配置属性，用于控制裁剪行为和输出结果。所有属性都是可选的，未设置时将使用默认值。

**核心属性说明：**

1. **imgUrl** (String) - 要裁剪的图片地址，可以是本地文件路径、Data URL 或网络图片 URL。这是唯一必需设置的属性。
2. **fileName** (String) - 裁剪后图片的文件名（不带扩展名）。默认使用时间戳作为文件名，如 "1739623456789"。组件会自动根据 `outputType` 添加正确的文件扩展名。

3. **limitMinSize** (Number) - 最小裁剪尺寸，单位为像素。默认值为 37px。当裁剪框小于此尺寸时，用户将无法继续缩小裁剪框。

4. **graphicsType** (String) - 裁剪图形形状，可选值为：
   - `"square"` (默认): 方形裁剪，直接输出方形图片
   - `"circular"`: 圆形裁剪，使用 Canvas 进行二次处理生成真正的圆形图片

5. **outputType** (String) - 输出图片格式，可选值为：
   - `"png"` (默认): PNG 格式，支持透明背景，质量无损
   - `"jpeg"`: JPEG 格式，文件较小，不支持透明背景
   - `"webp"`: WebP 格式，现代图片格式，压缩率高

6. **showPreview** (Boolean) - 是否显示预览图。默认值为 `true`，会在裁剪区域下方显示实时预览。

**vue-cropper 原生属性支持：**
LSCropper 通过 `v-bind="$attrs"` 支持所有 vue-cropper 原生属性，例如：

- `fixed`: 是否开启固定比例裁剪
- `fixed-number`: 固定比例值，如 `[1, 1]` 表示 1:1
- `auto-crop-width`: 默认裁剪宽度
- `auto-crop-height`: 默认裁剪高度
- `fixed-box`: 是否固定裁剪框大小
- 更多属性请参考 [vue-cropper 文档](https://github.com/xyxiao001/vue-cropper)

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Events

LSCropper 组件提供了两个主要事件，用于处理裁剪结果和错误情况。

**事件详细说明：**

1. **onCropData** - 裁剪成功事件
   - **触发时机**: 用户完成裁剪操作时触发
   - **回调参数**: `data: { file: File, url: string, data: any }`
     - `file`: 裁剪后的 File 对象，可直接用于上传
     - `url`: 裁剪后图片的 Object URL，可用于本地预览
     - `data`: vue-cropper 返回的原始裁剪数据，包含裁剪坐标等信息
   - **使用建议**: 获取裁剪结果后，应及时处理 File 对象或上传到服务器。对于预览 URL，使用完成后应调用 `URL.revokeObjectURL()` 释放内存。

2. **onCropError** - 裁剪错误事件
   - **触发时机**: 裁剪过程中发生错误时触发
   - **回调参数**: `error: Error`
     - 包含错误信息的 Error 对象
   - **常见错误**:
     - 图片加载失败
     - 图片格式不支持
     - Canvas 处理错误
     - 内存不足等
   - **使用建议**: 在回调中显示友好的错误提示，帮助用户解决问题。

**注意事项：**

- 两个事件都是可选的，可根据需要选择性监听
- 事件回调中的 URL 对象是临时创建的，长时间不使用时建议手动释放
- 圆形裁剪时，组件内部会进行 Canvas 二次处理，此过程可能增加处理时间

<ApiIntro :tableColumn="eventTableColumn" :tableData="tableData2" />

## 最佳实践

### 1. 图片上传与裁剪流程

1. **文件选择**：使用 LSUpload 组件选择图片
2. **格式验证**：限制图片格式和大小，避免处理过大的文件
3. **裁剪设置**：根据需求选择裁剪形状和输出格式
4. **执行裁剪**：用户调整裁剪区域，预览裁剪效果
5. **获取结果**：通过 onCropData 事件获取裁剪结果
6. **后续处理**：上传裁剪后的图片或在本地使用
7. **清理资源**：使用 URL.revokeObjectURL() 释放 URL 对象，避免内存泄漏

### 2. 不同场景的裁剪设置

| 场景     | 推荐设置                                            | 说明                                   |
| -------- | --------------------------------------------------- | -------------------------------------- |
| 头像上传 | `graphics-type="circular"` <br> `output-type="png"` | 圆形裁剪适合头像，PNG格式支持透明背景  |
| 产品图片 | `graphics-type="square"` <br> `output-type="jpeg"`  | 方形裁剪适合产品图片，JPEG格式压缩率高 |
| 图标生成 | `graphics-type="square"` <br> `output-type="png"`   | 方形裁剪适合图标，PNG格式质量好        |
| 证件照   | `graphics-type="square"` <br> `output-type="jpeg"`  | 方形裁剪适合证件照，JPEG格式文件小     |
| 网页图片 | `graphics-type="square"` <br> `output-type="webp"`  | WebP格式文件小，加载速度快             |

### 3. 性能优化

- **图片预处理**：上传前压缩大图片，减少处理时间
- **懒加载**：仅在需要时初始化裁剪组件
- **合理设置**：根据实际需求选择合适的裁剪参数
- **错误处理**：妥善处理裁剪过程中的错误，避免应用崩溃
- **内存管理**：及时释放 URL 对象和 Blob 对象，避免内存泄漏
- **网络优化**：选择合适的输出格式和质量，平衡图片质量和文件大小

### 4. 用户体验优化

- **提供预览**：启用 `show-preview` 让用户看到裁剪效果
- **清晰提示**：提供明确的操作指引，指导用户如何调整裁剪区域
- **快捷键支持**：考虑添加常见操作的快捷键，提高操作效率
- **响应式设计**：确保在不同设备上都有良好的体验
- **加载状态**：在裁剪过程中显示加载状态，提升用户体验
- **错误提示**：当裁剪失败时，提供清晰的错误提示

### 5. 安全性考虑

- **文件验证**：严格验证上传文件的格式和大小，防止恶意文件
- **服务器校验**：服务端也要进行文件验证，确保数据安全
- **防止滥用**：限制裁剪频率和文件大小，防止服务器资源被滥用
- **隐私保护**：妥善处理用户上传的图片，避免泄露用户隐私
- **XSS 防护**：确保处理图片时不会引入 XSS 漏洞
- **CORS 配置**：正确配置 CORS，避免跨域问题

## 高级用法

### 1. 自定义裁剪区域大小

通过 vue-cropper 的原生属性，可以自定义裁剪区域的大小和比例：

```vue
<template>
  <LSCropper
    :img-url="sampleImageUrl"
    graphics-type="square"
    :auto-crop-width="200"
    :auto-crop-height="200"
    :fixed-box="true"
    :show-preview="true"
    @on-crop-data="onCropData"
  />
</template>
```

### 2. 结合其他组件使用

可以与其他组件结合使用，实现更复杂的功能：

```vue
<template>
  <div>
    <!-- 上传组件 -->
    <LSUpload list-type="picture-card" :auto-upload="false" :file-list="fileList" @on-change-func="onChangeFunc"></LSUpload>

    <!-- 裁剪对话框 -->
    <LSDialog v-model="visible" title="图片裁剪" width="80%">
      <div class="crop-container">
        <LSCropper :img-url="imgUrl" graphics-type="circular" :show-preview="true" @on-crop-data="onCropData" />
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="visible = false">
            取消
          </el-button>
          <el-button type="primary" @click="onConfirm">
            确认裁剪
          </el-button>
        </div>
      </template>
    </LSDialog>
  </div>
</template>
```

### 3. 批量裁剪

对于需要批量裁剪多张图片的场景，可以使用以下方法：

```vue
<script setup>
import { ref } from 'vue'

const visible = ref(false)
const currentIndex = ref(0)
const images = ref([])
const currentImageUrl = ref('')
const cropResults = ref([])
const currentCropData = ref({})

function onBatchChangeFunc(res) {
  images.value = res.files.map(file => file.blob)
  currentIndex.value = 0
  cropResults.value = []

  if (images.value.length > 0) {
    currentImageUrl.value = images.value[0]
    visible.value = true
  }
}

function onCropData(data) {
  currentCropData.value = data
}

function onNext() {
  if (currentCropData.value.file) {
    cropResults.value.push(currentCropData.value)
  }

  currentIndex.value++

  if (currentIndex.value < images.value.length) {
    currentImageUrl.value = images.value[currentIndex.value]
    currentCropData.value = {}
  }
  else {
    visible.value = false
    // 处理所有裁剪结果
    handleAllCropResults()
  }
}

function onConfirm() {
  if (currentCropData.value.file) {
    cropResults.value.push(currentCropData.value)
  }
  visible.value = false
  // 处理所有裁剪结果
  handleAllCropResults()
}

function onCancel() {
  visible.value = false
  images.value = []
  cropResults.value = []
  currentCropData.value = {}
}

function handleAllCropResults() {
  console.log('所有裁剪结果:', cropResults.value)
  // 可以在这里批量上传裁剪后的图片
}
</script>

<template>
  <div>
    <!-- 批量上传 -->
    <LSUpload list-type="picture-card" :auto-upload="false" :multiple="true" @on-change-func="onBatchChangeFunc"></LSUpload>

    <!-- 裁剪对话框 -->
    <LSDialog v-model="visible" title="图片裁剪" width="80%">
      <LSCropper :img-url="currentImageUrl" graphics-type="square" :show-preview="true" @on-crop-data="onCropData" />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="onCancel">
            取消
          </el-button>
          <el-button type="primary" @click="onNext">
            下一张
          </el-button>
          <el-button type="primary" @click="onConfirm">
            完成
          </el-button>
        </div>
      </template>
    </LSDialog>

    <!-- 裁剪结果 -->
    <div class="crop-results">
      <h3>裁剪结果</h3>
      <div class="result-list">
        <div v-for="(result, index) in cropResults" :key="index" class="result-item">
          <img :src="result.url" alt="裁剪结果" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.result-item {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 4px;
}

.result-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```

<script setup>
import { tableColumn, tableMethodColumn } from '../constant';
import { ref, onMounted } from 'vue';

// 基本使用示例
const fileList = ref([]);
const visible = ref(false);
const cropData = ref({});
const imgUrl = ref('');

// 其他示例
const sampleImageUrl = ref('http://192.168.1.33:8008/images/fish1.png');
const cropDataSquare = ref({});
const cropDataCircular = ref({});
const cropDataJpeg = ref({});
const cropDataNoPreview = ref({});
const cropDataCustomName = ref({});
const cropDataCustomSize = ref({});
const cropDataWebp = ref({});
const cropDataWithError = ref({});
const errorMessage = ref('');

// 新增示例变量
const cropDataFixedRatio = ref({});
const cropDataResponsive = ref({});
const cropDataAvatar = ref({});

// 确保 sampleImageUrl 在组件挂载时被正确初始化
onMounted(() => {
  console.log('Sample image URL:', sampleImageUrl.value);
});

// 处理文件上传
function onChangeFunc(res) {
  fileList.value = [];
  imgUrl.value = res.blob;
  visible.value = true;
}

// 确认裁剪
function onConfirm() {
  visible.value = false;
  if (cropData.value.file) {
    fileList.value = [
      {
        url: URL.createObjectURL(cropData.value.file)
      }
    ];
  }
}

// 处理裁剪数据
function onCropData(data) {
  console.log('裁剪数据:', data);
  cropData.value = data;
}

// 方形裁剪
function onCropDataSquare(data) {
  console.log('方形裁剪数据:', data);
  cropDataSquare.value = data;
}

// 圆形裁剪
function onCropDataCircular(data) {
  console.log('圆形裁剪数据:', data);
  cropDataCircular.value = data;
}

// JPEG格式裁剪
function onCropDataJpeg(data) {
  console.log('JPEG格式裁剪数据:', data);
  cropDataJpeg.value = data;
}

// 无预览裁剪
function onCropDataNoPreview(data) {
  console.log('无预览裁剪数据:', data);
  cropDataNoPreview.value = data;
}

// 自定义文件名裁剪
function onCropDataCustomName(data) {
  console.log('自定义文件名裁剪数据:', data);
  cropDataCustomName.value = data;
}

// 自定义最小尺寸裁剪
function onCropDataCustomSize(data) {
  console.log('自定义最小尺寸裁剪数据:', data);
  cropDataCustomSize.value = data;
}

// WebP格式裁剪
function onCropDataWebp(data) {
  console.log('WebP格式裁剪数据:', data);
  cropDataWebp.value = data;
}

// 带错误处理的裁剪
function onCropDataWithError(data) {
  console.log('裁剪成功:', data);
  cropDataWithError.value = data;
  errorMessage.value = '';
}

// 处理裁剪错误
function onCropError(error) {
  console.error('裁剪失败:', error);
  errorMessage.value = '裁剪过程中发生错误，请重试';
}

// 固定比例裁剪
function onCropDataFixedRatio(data) {
  console.log('固定比例裁剪数据:', data);
  cropDataFixedRatio.value = data;
}

// 响应式裁剪
function onCropDataResponsive(data) {
  console.log('响应式裁剪数据:', data);
  cropDataResponsive.value = data;
}

// 头像专用裁剪
function onCropDataAvatar(data) {
  console.log('头像裁剪数据:', data);
  cropDataAvatar.value = data;
}

// API文档数据
const tableData = ref([
  {
    name: 'imgUrl',
    desc: '图片地址',
    type: 'string',
    value: ''
  },
  {
    name: 'fileName',
    desc: '图片名称，不需要带后缀',
    type: 'string',
    value: '当前时间戳.png'
  },
  {
    name: 'limitMinSize',
    desc: '最小裁剪尺寸',
    type: 'number',
    value: '37'
  },
  {
    name: 'graphicsType',
    desc: '设置裁剪图形形状 square:方形、circular:圆形',
    type: 'string',
    value: 'square'
  },
  {
    name: 'outputType',
    desc: '设置输出图片格式 jpeg, png, webp',
    type: 'string',
    value: 'png'
  },
  {
    name: 'showPreview',
    desc: '是否显示预览图',
    type: 'boolean',
    value: 'true'
  }
]);

const eventTableColumn = ref([
  {
    prop: 'name',
    label: '事件名'
  },
  {
    prop: 'desc',
    label: '说明'
  },
  {
    prop: 'params',
    label: '参数'
  }
]);

const tableData2 = ref([
  {
    name: 'onCropData',
    desc: '裁剪成功后回调',
    params: 'data: { file: File, url: string, data: any }'
  },
  {
    name: 'onCropError',
    desc: '裁剪图片出错时回调',
    params: 'error: Error'
  }
]);
</script>

<style lang="scss" scoped>
.crop-container {
  max-height: 60vh;
  overflow: auto;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.error-message {
  margin-top: 10px;
  padding: 10px;
  background-color: #fef0f0;
  color: #f56c6c;
  border-radius: 4px;
}

.crop-results {
  margin-top: 20px;
}

.result-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.result-item {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 4px;
}

.result-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
