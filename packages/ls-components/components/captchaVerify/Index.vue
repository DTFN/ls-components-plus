<script setup lang="ts" name="LSCaptchaVerify">
/**
 * @summary 滑块拼图验证码组件 - 基于 `LSDialog` 的二次封装
 *
 * `LSCaptchaVerify` 提供滑块拼图形式的验证码交互，包含拖动轨迹记录、状态反馈、自动重试等功能。
 * 组件通过 `v-model` 控制显隐，通过 `sceneSeed` 控制视觉主题和拼图形状，通过 `targetPercent` 控制缺口位置。
 *
 * 组件自有属性：
 * @attr {boolean} loading 验证中 loading 状态，默认 `false`
 * @attr {string} prompt 提示文案，默认 `'按住滑块拖动拼图到缺口处'`
 * @attr {number} targetPercent 缺口目标位置百分比(0-1)，默认 `0.5`
 * @attr {CaptchaStatus} status 验证状态：`'idle' | 'error' | 'success'`，默认 `'idle'`
 * @attr {number} sceneSeed 场景种子，用于生成不同的背景主题和拼图形状，默认 `0`
 * @attr {string} serialNo 验证码序列号，显示在右下角
 *
 * 常用透传属性（来自 `LSDialog` / `$attrs`）：
 * @attr {boolean} v-model 控制验证码弹窗显示/隐藏
 * @attr {string} title 弹窗标题，默认 `'安全验证'`
 * @attr {string|number} width 弹窗宽度，默认 `'420px'`
 * @attr {boolean} hasFooter 是否显示底部操作区，默认 `false`
 *
 * @event refresh 点击"换一张"时触发
 * @event select 拖动完成并满足精度要求时触发，参数：`{ dragPercent: number, durationMs: number, trace: TracePoint[] }`
 *
 * @example
 * <LSCaptchaVerify
 *   v-model="visible"
 *   :target-percent="0.6"
 *   :scene-seed="seed"
 *   :serial-no="captchaId"
 *   @refresh="loadCaptcha"
 *   @select="onVerify"
 * />
 *
 * @example
 * <LSCaptchaVerify
 *   v-model="visible"
 *   :loading="verifyLoading"
 *   :status="verifyStatus"
 *   @select="handleSelect"
 * />
 */

import type { CaptchaSelectPayload, TracePoint } from './types'
import LSDialog from '../dialog'
import { lsCaptchaVerifyProps } from './types'

defineOptions({
  name: 'LSCaptchaVerify',
  inheritAttrs: false,
})

const props = defineProps(lsCaptchaVerifyProps)

const emit = defineEmits<{
  /** 点击换一张时触发 */
  refresh: []
  /** 拖动完成时触发 */
  select: [payload: CaptchaSelectPayload]
}>()

const visible = defineModel<boolean>({ default: false })

const PIECE_SIZE = 60
const MIN_OVERLAP_RATIO = 0.95
const MAX_CENTER_DISTANCE = PIECE_SIZE * (1 - MIN_OVERLAP_RATIO)

const sceneRef = ref<HTMLElement>()
const sliderRef = ref<HTMLElement>()
const thumbRef = ref<HTMLElement>()
const dragging = ref(false)
const dragX = ref(0)
const maxDragX = ref(0)
const sceneWidth = ref(0)
const startTime = ref(0)
const trace = ref<TracePoint[]>([])
const localFail = ref(false)
let resizeObserver: ResizeObserver | null = null

const seed = computed(() => props.sceneSeed || Date.now())

const BG_THEMES = [
  { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', piece: 'rgba(102,126,234,0.7)' },
  { bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', piece: 'rgba(245,87,108,0.7)' },
  { bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', piece: 'rgba(79,172,254,0.7)' },
  { bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', piece: 'rgba(67,233,123,0.7)' },
  { bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', piece: 'rgba(250,112,154,0.7)' },
  { bg: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', piece: 'rgba(161,140,209,0.7)' },
  { bg: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)', piece: 'rgba(213,126,235,0.7)' },
  { bg: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)', piece: 'rgba(150,251,196,0.7)' },
]

const SHAPES = [
  '6px',
  '50%',
  '12px 4px',
  '20px 6px 20px 6px',
  '4px 16px',
  '50% 4px 50% 4px',
  '16px 4px 4px 16px',
  '30% 70% 70% 30% / 30% 30% 70% 70%',
]

const themeIndex = computed(() => seed.value % BG_THEMES.length)
const shapeIndex = computed(() => Math.floor(seed.value / 7) % SHAPES.length)
const pieceRotation = computed(() => (seed.value % 4) * 90)
const verticalOffset = computed(() => 30 + (seed.value % 40))

const sceneStyle = computed(() => ({
  background: BG_THEMES[themeIndex.value].bg,
}))

const clampedTarget = computed(() => Math.max(0.15, Math.min(0.85, props.targetPercent)))

const dragPercent = computed(() => {
  if (!maxDragX.value)
    return 0

  return Math.min(1, Math.max(0, dragX.value / maxDragX.value))
})

const holeStyle = computed(() => ({
  left: `${clampedTarget.value * 100}%`,
  top: `${verticalOffset.value}%`,
  width: `${PIECE_SIZE}px`,
  height: `${PIECE_SIZE}px`,
  borderRadius: SHAPES[shapeIndex.value],
  transform: `translate(-50%, -50%) rotate(${pieceRotation.value}deg)`,
}))

const pieceStyle = computed(() => ({
  left: `${dragPercent.value * 100}%`,
  top: `${verticalOffset.value}%`,
  width: `${PIECE_SIZE}px`,
  height: `${PIECE_SIZE}px`,
  borderRadius: SHAPES[shapeIndex.value],
  background: BG_THEMES[themeIndex.value].piece,
  transform: `translate(-50%, -50%) rotate(${pieceRotation.value}deg)`,
}))

const thumbStyle = computed(() => ({
  transform: `translateX(${dragX.value}px)`,
}))

const fillStyle = computed(() => ({
  width: `${dragX.value + 40}px`,
}))

function updateMaxDrag() {
  const el = sliderRef.value
  if (!el)
    return
  maxDragX.value = Math.max(0, el.clientWidth - 40)
  sceneWidth.value = sceneRef.value?.clientWidth || el.clientWidth
}

function getPositionOverlapRatio() {
  const width = sceneWidth.value || sliderRef.value?.clientWidth || 0

  if (!width)
    return 0

  const centerDistance = Math.abs(dragPercent.value - clampedTarget.value) * width

  return Math.max(0, (PIECE_SIZE - centerDistance) / PIECE_SIZE)
}

function detachWindowPointerListeners() {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerEnd)
  window.removeEventListener('pointercancel', onPointerEnd)
}

function releaseThumbCapture(e: PointerEvent) {
  const thumb = thumbRef.value

  if (thumb?.hasPointerCapture(e.pointerId)) {
    try {
      thumb.releasePointerCapture(e.pointerId)
    }
    catch {
      /* ignore */
    }
  }
}

function resetDrag() {
  detachWindowPointerListeners()
  dragging.value = false
  localFail.value = false
  dragX.value = 0
  startTime.value = 0
  trace.value = []
}

function onPointerDown(e: PointerEvent) {
  if (props.loading || props.status === 'success')
    return
  if (e.button !== 0)
    return
  updateMaxDrag()
  dragging.value = true
  localFail.value = false
  dragX.value = 0
  startTime.value = performance.now()
  trace.value = [{ x: 0, t: 0 }]
  const thumb = e.currentTarget as HTMLElement
  thumb.setPointerCapture(e.pointerId)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerEnd)
  window.addEventListener('pointercancel', onPointerEnd)
}

function onPointerMove(e: PointerEvent) {
  if (!dragging.value || !sliderRef.value)
    return
  const rect = sliderRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left - 20
  dragX.value = Math.min(Math.max(0, x), maxDragX.value)
  const t = Math.round(performance.now() - startTime.value)
  const last = trace.value[trace.value.length - 1]

  if (!last || t - last.t >= 16) {
    trace.value.push({ x: Number(dragPercent.value.toFixed(4)), t })
  }
}

function onPointerEnd(e: PointerEvent) {
  detachWindowPointerListeners()
  releaseThumbCapture(e)

  if (!dragging.value)
    return
  dragging.value = false

  const centerDistance = Math.abs(dragPercent.value - clampedTarget.value) * (sceneWidth.value || sliderRef.value?.clientWidth || 0)
  const overlapRatio = getPositionOverlapRatio()

  if (overlapRatio < MIN_OVERLAP_RATIO || centerDistance > MAX_CENTER_DISTANCE) {
    localFail.value = true
    setTimeout(resetDrag, 300)

    return
  }

  dragX.value = clampedTarget.value * maxDragX.value
  const durationMs = Math.max(1, Math.round(performance.now() - startTime.value))
  trace.value.push({ x: Number(dragPercent.value.toFixed(4)), t: durationMs })

  emit('select', {
    dragPercent: Number(dragPercent.value.toFixed(4)),
    durationMs,
    trace: trace.value.slice(-300),
  })
}

function onRefresh() {
  resetDrag()
  emit('refresh')
}

watch(() => [props.status, props.loading] as const, ([s, loading]) => {
  if (s === 'error')
    resetDrag()
  else if (s === 'idle' && !loading)
    resetDrag()
})

watch(() => [props.serialNo, props.sceneSeed] as const, () => {
  if (visible.value)
    resetDrag()
})

watch(visible, (open) => {
  if (open) {
    nextTick(() => {
      updateMaxDrag()
      const sliderEl = sliderRef.value
      const sceneEl = sceneRef.value

      if ((sliderEl || sceneEl) && typeof ResizeObserver !== 'undefined') {
        resizeObserver?.disconnect()
        resizeObserver = new ResizeObserver(() => updateMaxDrag())
        if (sliderEl)
          resizeObserver.observe(sliderEl)
        if (sceneEl)
          resizeObserver.observe(sceneEl)
      }
    })
  }
  else {
    resizeObserver?.disconnect()
    resizeObserver = null
    resetDrag()
  }
})

onMounted(() => {
  window.addEventListener('resize', updateMaxDrag)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  resizeObserver = null
  window.removeEventListener('resize', updateMaxDrag)
  resetDrag()
})
</script>

<template>
  <LSDialog
    v-model="visible"
    title="安全验证"
    width="420px"
    :has-footer="false"
    destroy-on-close
    v-bind="$attrs"
  >
    <div class="captcha-wrap" :class="{ 'is-slider-dragging': dragging }">
      <div v-if="loading" class="captcha-loading-mask" aria-live="polite">
        <span class="captcha-loading-dot" />
        <span>验证中…</span>
      </div>
      <div ref="sceneRef" class="captcha-scene" :class="`is-${status}`" :style="sceneStyle">
        <div class="captcha-hole" :style="holeStyle" />
        <div class="captcha-piece" :style="pieceStyle" />
        <div v-if="status !== 'idle'" class="captcha-overlay">
          <span class="captcha-overlay-icon">{{ status === 'success' ? '&#10003;' : '&#10007;' }}</span>
          <span class="captcha-overlay-text">{{ status === 'success' ? '验证通过' : status === 'error' ? '不通过' : '验证失败，请重试' }}</span>
        </div>
      </div>

      <div class="captcha-prompt">
        {{ props.prompt }}
      </div>

      <div
        ref="sliderRef"
        class="captcha-slider"
        role="slider"
        :aria-valuemin="0"
        :aria-valuemax="100"
        :aria-valuenow="Math.round(dragPercent * 100)"
        :aria-disabled="loading || status === 'success'"
        :class="{ 'is-dragging': dragging, 'is-fail': localFail, 'is-loading': loading, 'is-success': status === 'success', 'is-error': status === 'error' }"
      >
        <div class="captcha-slider-fill" :style="fillStyle" />
        <div
          ref="thumbRef"
          class="captcha-slider-thumb"
          :style="thumbStyle"
          @pointerdown.prevent="onPointerDown"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M9 18l6-6-6-6" />
            <path d="M4 18l6-6-6-6" />
          </svg>
        </div>
        <span v-if="!dragging && status === 'idle' && dragX === 0" class="captcha-slider-hint">
          向右拖动滑块完成拼图
        </span>
      </div>

      <div class="captcha-actions">
        <button type="button" class="captcha-action-btn" :disabled="loading" @click="onRefresh">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
          换一张
        </button>
        <!-- <span class="captcha-serial-text">{{ serialNo }}</span> -->
      </div>
    </div>
  </LSDialog>
</template>

<style lang="scss" scoped>
.captcha-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  user-select: none;
}
.captcha-loading-mask {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: #475569;
  pointer-events: all;
  background: rgb(255 255 255 / 72%);
  backdrop-filter: blur(2px);
  border-radius: 8px;
}
.captcha-loading-dot {
  width: 8px;
  height: 8px;
  background: #6366f1;
  border-radius: 50%;
  animation: captcha-dot-pulse 0.9s ease-in-out infinite alternate;
}

@keyframes captcha-dot-pulse {
  from {
    opacity: 0.35;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.captcha-scene {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
}
.captcha-hole {
  position: absolute;
  box-sizing: border-box;
  background: rgb(0 0 0 / 30%);
  border: 2px solid rgb(255 255 255 / 60%);
  box-shadow: inset 0 0 8px rgb(0 0 0 / 40%);
}
.captcha-piece {
  position: absolute;
  box-sizing: border-box;
  border: 2px solid rgb(255 255 255 / 95%);
  box-shadow: 0 2px 12px rgb(0 0 0 / 30%);
  transition: box-shadow 0.2s;
}
.captcha-wrap:not(.is-slider-dragging) .captcha-piece {
  transition:
    box-shadow 0.2s,
    left 0.22s ease-out;
}
.captcha-overlay {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
.captcha-scene.is-success .captcha-overlay {
  background: rgb(16 185 129 / 80%);
  backdrop-filter: blur(3px);
}
.captcha-scene.is-error .captcha-overlay {
  background: rgb(239 68 68 / 80%);
  backdrop-filter: blur(3px);
  animation: captcha-shake 0.4s ease-in-out;
}
.captcha-overlay-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  font-size: 32px;
  color: #ffffff;
  border: 3px solid rgb(255 255 255 / 90%);
  border-radius: 50%;
  animation: captcha-overlay-pop 0.35s ease-out;
}

@keyframes captcha-overlay-pop {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.captcha-overlay-text {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 2px 4px rgb(0 0 0 / 50%);
}

@keyframes captcha-shake {
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-6px);
  }
  40%,
  80% {
    transform: translateX(6px);
  }
}
.captcha-prompt {
  padding: 0 2px;
  font-size: 13px;
  color: #6b7280;
}
.captcha-slider {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  overflow: hidden;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
}
.captcha-slider-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 40px;
  background: rgb(99 102 241 / 15%);
  border-radius: 20px;
  transition: background 0.2s;
}
.captcha-slider.is-dragging .captcha-slider-fill {
  background: rgb(99 102 241 / 25%);
}
.captcha-slider.is-loading {
  pointer-events: none;
  opacity: 0.72;
}
.captcha-slider.is-fail .captcha-slider-fill {
  background: rgb(239 68 68 / 50%);
}
.captcha-slider.is-success .captcha-slider-fill {
  background: rgb(16 185 129 / 50%);
}
.captcha-slider.is-error .captcha-slider-fill {
  background: rgb(239 68 68 / 50%);
}
.captcha-slider-thumb {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #6366f1;
  touch-action: none;
  cursor: grab;
  background: #ffffff;
  border: 2px solid #6366f1;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgb(99 102 241 / 25%);
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}
.captcha-slider-thumb:active {
  cursor: grabbing;
  box-shadow: 0 4px 12px rgb(99 102 241 / 35%);
}
.captcha-slider.is-fail .captcha-slider-thumb,
.captcha-slider.is-error .captcha-slider-thumb {
  color: #ef4444;
  border-color: #ef4444;
}
.captcha-slider.is-success .captcha-slider-thumb {
  color: #10b981;
  border-color: #10b981;
}
.captcha-slider-hint {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #94a3b8;
  pointer-events: none;
}
.captcha-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.captcha-action-btn {
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 4px 8px;
  font-size: 13px;
  color: #64748b;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 4px;
  transition:
    color 0.2s,
    background 0.2s;
}
.captcha-action-btn:hover:not(:disabled) {
  color: #334155;
  background: #f1f5f9;
}
.captcha-action-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.captcha-serial-text {
  font-family: monospace;
  font-size: 11px;
  color: #cbd5e1;
}
</style>
