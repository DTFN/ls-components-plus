<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, reactive, shallowRef, watch } from 'vue'
import type { LSCropperCropData, LSCropperGraphicsType, LSCropperOutputType } from '@cpo/cropper/types'

interface CropperCase {
  id: string
  title: string
  desc: string
  imgUrl: string
  graphicsType: LSCropperGraphicsType
  outputType: LSCropperOutputType
  fixed: boolean
  fixedNumber?: [number, number]
  autoCropWidth: number
  autoCropHeight: number
  cropperHeight: number
  previewHeight: number
  previewFit: 'contain' | 'cover'
  showPreview: boolean
}

const sampleImages = {
  portrait: createSampleImage('portrait', '#0f766e', '#f97316', 'AVATAR', '1:1'),
  banner: createSampleImage('banner', '#1d4ed8', '#22c55e', 'BANNER', '16:9'),
  document: createSampleImage('document', '#334155', '#f59e0b', 'DETAIL', 'FREE'),
}

const cropperCases = shallowRef<CropperCase[]>([
  {
    id: 'avatar',
    title: '头像裁剪',
    desc: '圆形输出，适合用户头像、组织 Logo 等固定 1:1 场景。',
    imgUrl: sampleImages.portrait,
    graphicsType: 'circular',
    outputType: 'png',
    fixed: true,
    fixedNumber: [1, 1],
    autoCropWidth: 220,
    autoCropHeight: 220,
    cropperHeight: 360,
    previewHeight: 168,
    previewFit: 'cover',
    showPreview: true,
  },
  {
    id: 'banner',
    title: '横幅裁剪',
    desc: '固定 16:9 比例，适合封面图、活动 banner、卡片主图。',
    imgUrl: sampleImages.banner,
    graphicsType: 'square',
    outputType: 'jpeg',
    fixed: true,
    fixedNumber: [16, 9],
    autoCropWidth: 360,
    autoCropHeight: 203,
    cropperHeight: 360,
    previewHeight: 150,
    previewFit: 'cover',
    showPreview: true,
  },
  {
    id: 'free',
    title: '自由比例',
    desc: '不固定比例，适合详情页配图、证件附件等尺寸不确定的图片。',
    imgUrl: sampleImages.document,
    graphicsType: 'square',
    outputType: 'webp',
    fixed: false,
    autoCropWidth: 260,
    autoCropHeight: 180,
    cropperHeight: 360,
    previewHeight: 160,
    previewFit: 'contain',
    showPreview: true,
  },
  {
    id: 'silent',
    title: '无预览输出',
    desc: '关闭内置预览，只监听 onCropData，将文件交给业务侧自定义展示。',
    imgUrl: sampleImages.banner,
    graphicsType: 'square',
    outputType: 'png',
    fixed: true,
    fixedNumber: [4, 3],
    autoCropWidth: 300,
    autoCropHeight: 225,
    cropperHeight: 320,
    previewHeight: 140,
    previewFit: 'contain',
    showPreview: false,
  },
])

const activeCaseId = shallowRef(cropperCases.value[0].id)
const currentCropData = shallowRef<LSCropperCropData | null>(null)
const cropError = shallowRef('')

const fileList = shallowRef<any[]>([])
const visible = shallowRef(false)
const dialogCropData = shallowRef<LSCropperCropData | null>(null)
const imgUrl = shallowRef('')
const dialogMode = reactive({
  graphicsType: 'circular' as LSCropperGraphicsType,
  fixedNumber: [1, 1] as [number, number],
  outputType: 'png' as LSCropperOutputType,
  previewFit: 'cover' as const,
})

let cropObjectUrl: string | null = null
let confirmedObjectUrl: string | null = null

const activeCase = computed(() => {
  return cropperCases.value.find(item => item.id === activeCaseId.value) || cropperCases.value[0]
})

const currentMeta = computed(() => formatCropMeta(currentCropData.value))
const dialogMeta = computed(() => formatCropMeta(dialogCropData.value))

function createSampleImage(type: 'portrait' | 'banner' | 'document', colorA: string, colorB: string, title: string, ratio: string) {
  const width = type === 'portrait' ? 900 : 1280
  const height = type === 'portrait' ? 900 : type === 'banner' ? 720 : 900
  const grid = type === 'document' ? '<path d="M210 230h420M210 315h650M210 400h560M210 485h610" stroke="rgba(255,255,255,.75)" stroke-width="18" stroke-linecap="round"/>' : ''
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${colorA}"/>
          <stop offset="100%" stop-color="${colorB}"/>
        </linearGradient>
        <pattern id="p" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M80 0H0v80" fill="none" stroke="rgba(255,255,255,.16)" stroke-width="2"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect width="100%" height="100%" fill="url(#p)"/>
      <circle cx="${width * 0.78}" cy="${height * 0.24}" r="${height * 0.18}" fill="rgba(255,255,255,.24)"/>
      <circle cx="${width * 0.2}" cy="${height * 0.76}" r="${height * 0.22}" fill="rgba(15,23,42,.2)"/>
      ${grid}
      <text x="90" y="${height - 145}" fill="rgba(255,255,255,.94)" font-family="Verdana, sans-serif" font-size="78" font-weight="700">${title}</text>
      <text x="94" y="${height - 78}" fill="rgba(255,255,255,.78)" font-family="Verdana, sans-serif" font-size="34">${ratio} crop sample</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

function revokeCropObjectUrl() {
  if (!cropObjectUrl)
    return

  URL.revokeObjectURL(cropObjectUrl)
  cropObjectUrl = null
}

function revokeConfirmedObjectUrl() {
  if (!confirmedObjectUrl)
    return

  URL.revokeObjectURL(confirmedObjectUrl)
  confirmedObjectUrl = null
}

/** 本页为裁剪弹窗单独创建的 blob URL，需在关闭或替换时 revoke，避免泄漏；且不可依赖 Upload 内部的 blob（清空列表时可能被 revoke） */
async function onChangeFunc(res: any) {
  if (!res?.raw && !res?.blob)
    return

  // 先用本地 File 生成独立 URL，再清空上传列表；否则先清空会导致 el-upload revoke 掉 res.blob，裁剪区图片高度为 0
  revokeCropObjectUrl()
  const url = res.raw ? URL.createObjectURL(res.raw) : res.blob
  if (res.raw)
    cropObjectUrl = url

  imgUrl.value = url
  fileList.value = []
  dialogCropData.value = null
  await nextTick()
  visible.value = true
}

function onConfirm() {
  if (!dialogCropData.value)
    return

  visible.value = false
  revokeConfirmedObjectUrl()
  confirmedObjectUrl = URL.createObjectURL(dialogCropData.value.file)
  fileList.value = [{ url: confirmedObjectUrl }]
}

function onCaseChange(id: string) {
  activeCaseId.value = id
  currentCropData.value = null
  cropError.value = ''
}

function onCropData(data: LSCropperCropData) {
  currentCropData.value = data
}

function onDialogCropData(data: LSCropperCropData) {
  dialogCropData.value = data
}

function onCropError(error: unknown) {
  cropError.value = error instanceof Error ? error.message : '裁剪失败'
}

function switchDialogMode(type: 'avatar' | 'banner') {
  if (type === 'avatar') {
    dialogMode.graphicsType = 'circular'
    dialogMode.fixedNumber = [1, 1]
    dialogMode.outputType = 'png'
    dialogMode.previewFit = 'cover'

    return
  }

  dialogMode.graphicsType = 'square'
  dialogMode.fixedNumber = [16, 9]
  dialogMode.outputType = 'jpeg'
  dialogMode.previewFit = 'cover'
}

function formatCropMeta(data: LSCropperCropData | null) {
  if (!data)
    return '等待裁剪结果'

  const size = data.file.size > 1024 * 1024 ? `${(data.file.size / 1024 / 1024).toFixed(2)} MB` : `${(data.file.size / 1024).toFixed(1)} KB`
  const width = data.width ? Math.round(data.width) : '-'
  const height = data.height ? Math.round(data.height) : '-'

  return `${data.file.name} / ${data.type} / ${size} / ${width} x ${height}`
}

watch(visible, (value) => {
  if (!value) {
    revokeCropObjectUrl()
    imgUrl.value = ''
  }
})

onBeforeUnmount(() => {
  revokeCropObjectUrl()
  revokeConfirmedObjectUrl()
})
</script>

<template>
  <div class="cropper-demo">
    <section class="cropper-demo__toolbar">
      <div class="cropper-demo__title">
        <h2>LSCropper 图片裁剪</h2>
        <p>覆盖头像、横幅、自由比例和无预览输出等常见业务场景。</p>
      </div>
      <div class="cropper-demo__actions">
        <LSUpload
          list-type="picture-card"
          :auto-upload="false"
          :file-list="fileList"
          :item="{
            limitFile: ['png', 'jpg', 'jpeg', 'webp'],
            limitSize: 20,
          }"
          @on-change-func="onChangeFunc"
        ></LSUpload>
      </div>
    </section>

    <section class="cropper-demo__cases">
      <button
        v-for="item in cropperCases"
        :key="item.id"
        class="cropper-demo__case"
        :class="{ 'is-active': item.id === activeCaseId }"
        type="button"
        @click="onCaseChange(item.id)"
      >
        <span class="cropper-demo__case-title">{{ item.title }}</span>
        <span class="cropper-demo__case-desc">{{ item.desc }}</span>
      </button>
    </section>

    <section class="cropper-demo__workbench">
      <div class="cropper-demo__panel cropper-demo__panel--main">
        <LSCropper
          :key="activeCase.id"
          :img-url="activeCase.imgUrl"
          :graphics-type="activeCase.graphicsType"
          :output-type="activeCase.outputType"
          :fixed="activeCase.fixed"
          :fixed-number="activeCase.fixedNumber"
          :auto-crop-width="activeCase.autoCropWidth"
          :auto-crop-height="activeCase.autoCropHeight"
          :cropper-height="activeCase.cropperHeight"
          :preview-height="activeCase.previewHeight"
          :preview-fit="activeCase.previewFit"
          :show-preview="activeCase.showPreview"
          :file-name="`${activeCase.id}.${activeCase.outputType === 'jpeg' ? 'jpg' : activeCase.outputType}`"
          @on-crop-data="onCropData"
          @on-crop-error="onCropError"
        />
      </div>

      <aside class="cropper-demo__panel cropper-demo__panel--side">
        <div class="cropper-demo__result">
          <span class="cropper-demo__eyebrow">当前案例</span>
          <h3>{{ activeCase.title }}</h3>
          <p>{{ activeCase.desc }}</p>
        </div>
        <div class="cropper-demo__stat">
          <span>裁剪形状</span>
          <strong>{{ activeCase.graphicsType }}</strong>
        </div>
        <div class="cropper-demo__stat">
          <span>输出格式</span>
          <strong>{{ activeCase.outputType }}</strong>
        </div>
        <div class="cropper-demo__stat">
          <span>结果信息</span>
          <strong>{{ currentMeta }}</strong>
        </div>
        <p v-if="cropError" class="cropper-demo__error">
          {{ cropError }}
        </p>
      </aside>
    </section>

    <LSDialog
      v-model="visible"
      title="上传图片裁剪"
      width="860px"
      :close-on-click-modal="false"
      @on-confirm="onConfirm"
    >
      <div class="cropper-demo__dialog-tools">
        <LSButton :type="dialogMode.graphicsType === 'circular' ? 'primary' : 'default'" @click="switchDialogMode('avatar')">
          头像模式
        </LSButton>
        <LSButton :type="dialogMode.graphicsType === 'square' ? 'primary' : 'default'" @click="switchDialogMode('banner')">
          横幅模式
        </LSButton>
        <span>{{ dialogMeta }}</span>
      </div>

      <!-- key 保证换图和切换模式时 vue-cropper 重新挂载，避免弹窗内尺寸计算为 0 -->
      <LSCropper
        v-if="visible && imgUrl"
        :key="`${imgUrl}-${dialogMode.graphicsType}`"
        :img-url="imgUrl"
        :graphics-type="dialogMode.graphicsType"
        :fixed-number="dialogMode.fixedNumber"
        :output-type="dialogMode.outputType"
        :preview-fit="dialogMode.previewFit"
        :show-preview="true"
        :fixed="true"
        :auto-crop-width="dialogMode.graphicsType === 'circular' ? 220 : 420"
        :auto-crop-height="dialogMode.graphicsType === 'circular' ? 220 : 236"
        :cropper-height="420"
        :preview-height="170"
        preview-title="上传结果"
        file-name="upload-crop-result.png"
        @on-crop-data="onDialogCropData"
        @on-crop-error="onCropError"
      />
    </LSDialog>
  </div>
</template>

<style lang="scss" scoped>
.cropper-demo {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 18px;
  color: #1f2a3d;
}

.cropper-demo__toolbar {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px;
  background: #f7f9fc;
  border: 1px solid #e4eaf2;
  border-radius: 8px;
}

.cropper-demo__title h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
}

.cropper-demo__title p {
  margin: 8px 0 0;
  font-size: 14px;
  color: #66758a;
}

.cropper-demo__actions {
  min-width: 128px;
}

.cropper-demo__cases {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.cropper-demo__case {
  min-height: 112px;
  padding: 14px;
  text-align: left;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dde5ef;
  border-radius: 8px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.cropper-demo__case:hover,
.cropper-demo__case.is-active {
  border-color: #14b8a6;
  box-shadow: 0 12px 30px rgba(15, 118, 110, 0.12);
  transform: translateY(-1px);
}

.cropper-demo__case-title,
.cropper-demo__case-desc {
  display: block;
}

.cropper-demo__case-title {
  font-size: 15px;
  font-weight: 700;
  color: #1f2a3d;
}

.cropper-demo__case-desc {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.5;
  color: #66758a;
}

.cropper-demo__workbench {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 16px;
  align-items: start;
}

.cropper-demo__panel {
  padding: 16px;
  background: #fff;
  border: 1px solid #e1e7ef;
  border-radius: 8px;
}

.cropper-demo__panel--side {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.cropper-demo__result h3 {
  margin: 6px 0 8px;
  font-size: 18px;
}

.cropper-demo__result p {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: #66758a;
}

.cropper-demo__eyebrow {
  font-size: 12px;
  font-weight: 700;
  color: #0f766e;
}

.cropper-demo__stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  background: #f7f9fc;
  border-radius: 6px;
}

.cropper-demo__stat span {
  font-size: 12px;
  color: #7a8798;
}

.cropper-demo__stat strong {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
  color: #243247;
  word-break: break-all;
}

.cropper-demo__error {
  padding: 10px 12px;
  margin: 0;
  font-size: 13px;
  color: #b42318;
  background: #fff1f0;
  border: 1px solid #ffd6d3;
  border-radius: 6px;
}

.cropper-demo__dialog-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 14px;
}

.cropper-demo__dialog-tools span {
  min-width: 220px;
  font-size: 13px;
  color: #66758a;
  word-break: break-all;
}

@media (max-width: 1100px) {
  .cropper-demo__cases {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cropper-demo__workbench {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .cropper-demo {
    padding: 12px;
  }

  .cropper-demo__toolbar {
    flex-direction: column;
  }

  .cropper-demo__cases {
    grid-template-columns: 1fr;
  }
}
</style>
