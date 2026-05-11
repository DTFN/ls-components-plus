<script setup lang="ts">
import type { CaptchaSelectPayload, TracePoint } from '@cpo/captchaVerify/index'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)

const targetPercent = ref(0.5)
const sceneSeed = ref(0)
const serialNo = ref('CAP-20240508-001')
const loading = ref(false)
const status = ref<'idle' | 'error' | 'success'>('idle')
const customPrompt = ref('请拖动滑块完成验证')

const lastPayload = ref<CaptchaSelectPayload | null>(null)
const lastPayload2 = ref<CaptchaSelectPayload | null>(null)

const propTableData = [
  { prop: 'v-model', desc: '控制弹窗显示/隐藏', type: 'boolean', default: 'false' },
  { prop: 'loading', desc: '验证中 loading 状态', type: 'boolean', default: 'false' },
  { prop: 'prompt', desc: '提示文案', type: 'string', default: '按住滑块拖动拼图到缺口处' },
  { prop: 'targetPercent', desc: '缺口目标位置百分比(0-1)', type: 'number', default: '0.5' },
  { prop: 'status', desc: '验证状态 idle/error/success', type: 'string', default: 'idle' },
  { prop: 'sceneSeed', desc: '场景种子，控制主题和形状', type: 'number', default: '0' },
  { prop: 'serialNo', desc: '验证码序列号', type: 'string', default: '' },
]

const eventTableData = [
  { event: 'refresh', desc: '点击换一张时触发', params: '-' },
  { event: 'select', desc: '拖动完成并满足精度时触发', params: 'CaptchaSelectPayload' },
]

function openBasic() {
  reset()
  visible1.value = true
}

function openCustom() {
  reset()
  targetPercent.value = Math.round((0.2 + Math.random() * 0.6) * 100) / 100
  sceneSeed.value = Math.floor(Math.random() * 100)
  serialNo.value = `CAP-${Date.now()}`
  visible2.value = true
}

function openStatusDemo() {
  reset()
  status.value = 'idle'
  visible3.value = true
}

function reset() {
  loading.value = false
  status.value = 'idle'
  lastPayload.value = null
  lastPayload2.value = null
}

function onRefresh() {
  sceneSeed.value = Math.floor(Math.random() * 1000)
  targetPercent.value = Math.round((0.2 + Math.random() * 0.6) * 100) / 100
  status.value = 'idle'
  loading.value = false
}

function onVerify(payload: CaptchaSelectPayload) {
  lastPayload.value = payload
  loading.value = true
  setTimeout(() => {
    loading.value = false

    if (Math.random() > 0.3) {
      status.value = 'success'
      setTimeout(() => {
        visible1.value = false
      }, 600)
    }
    else {
      status.value = 'error'
      // 1.5s 后自动恢复 idle，允许重新验证
      setTimeout(() => {
        status.value = 'idle'
      }, 1500)
    }
  }, 800)
}

function onVerify2(payload: CaptchaSelectPayload) {
  lastPayload2.value = payload
  loading.value = true
  setTimeout(() => {
    loading.value = false

    if (Math.random() > 0.3) {
      status.value = 'success'
      setTimeout(() => {
        visible2.value = false
      }, 600)
    }
    else {
      status.value = 'error'
      setTimeout(() => {
        status.value = 'idle'
      }, 1500)
    }
  }, 600)
}

function setStatus(s: 'idle' | 'error' | 'success') {
  status.value = s
}

function getTraceSummary(trace: TracePoint[]) {
  if (!trace || trace.length === 0)
    return '无轨迹数据'
  const first = trace[0]

  const last = trace[trace.length - 1]

  return `共 ${trace.length} 个点, 耗时 ${last.t - first.t}ms, 距离 ${(last.x - first.x).toFixed(4)}`
}
</script>

<template>
  <div class="captcha-verify-demo">
    <h2>滑块拼图验证码 LSCaptchaVerify</h2>

    <div class="demo-section">
      <h3>基础用法</h3>
      <p class="desc">
        点击按钮打开验证码弹窗，拖动滑块完成拼图。
      </p>
      <el-button type="primary" @click="openBasic">
        打开基础验证
      </el-button>

      <LSCaptchaVerify
        v-model="visible1"
        :target-percent="0.5"
        :scene-seed="sceneSeed"
        :serial-no="serialNo"
        @refresh="onRefresh"
        @select="onVerify"
      />

      <div v-if="lastPayload" class="result-card">
        <h4>验证结果</h4>
        <p><strong>dragPercent:</strong> {{ lastPayload.dragPercent }}</p>
        <p><strong>durationMs:</strong> {{ lastPayload.durationMs }}ms</p>
        <p><strong>trace:</strong> {{ getTraceSummary(lastPayload.trace) }}</p>
        <p><strong>当前状态:</strong> {{ status }}</p>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义参数</h3>
      <p class="desc">
        随机 targetPercent、sceneSeed 和 serialNo，每次打开都是不同的主题和缺口位置。
      </p>
      <el-button type="primary" @click="openCustom">
        打开随机主题验证
      </el-button>

      <LSCaptchaVerify
        v-model="visible2"
        :target-percent="targetPercent"
        :scene-seed="sceneSeed"
        :serial-no="serialNo"
        :prompt="customPrompt"
        @refresh="onRefresh"
        @select="onVerify2"
      />

      <div v-if="lastPayload2" class="result-card">
        <h4>验证结果</h4>
        <p><strong>dragPercent:</strong> {{ lastPayload2.dragPercent }}</p>
        <p><strong>durationMs:</strong> {{ lastPayload2.durationMs }}ms</p>
        <p><strong>trace:</strong> {{ getTraceSummary(lastPayload2.trace) }}</p>
      </div>
    </div>

    <div class="demo-section">
      <h3>状态控制</h3>
      <p class="desc">
        通过外部控制 status 和 loading 状态，模拟后端验证流程。
      </p>
      <el-button type="primary" @click="openStatusDemo">
        打开状态演示
      </el-button>

      <div class="status-btns">
        <el-button size="small" @click="setStatus('idle')">
          设为 idle
        </el-button>
        <el-button size="small" type="danger" @click="setStatus('error')">
          设为 error
        </el-button>
        <el-button size="small" type="success" @click="setStatus('success')">
          设为 success
        </el-button>
        <el-button size="small" type="warning" :loading="loading" @click="loading = !loading">
          {{ loading ? '停止 loading' : '开始 loading' }}
        </el-button>
      </div>

      <LSCaptchaVerify
        v-model="visible3"
        :target-percent="0.6"
        :scene-seed="42"
        :status="status"
        :loading="loading"
        serial-no="DEMO-STATUS-001"
        @refresh="onRefresh"
        @select="onVerify"
      />
    </div>

    <div class="demo-section">
      <h3>API 说明</h3>
      <el-table :data="propTableData" border>
        <el-table-column prop="prop" label="属性/事件" width="160" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" width="120" />
        <el-table-column prop="default" label="默认值" width="160" />
      </el-table>

      <h4 style="margin-top: 16px;">
        事件
      </h4>
      <el-table :data="eventTableData" border>
        <el-table-column prop="event" label="事件名" width="120" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="params" label="参数" />
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.captcha-verify-demo {
  padding: 24px;
}
h2 {
  margin-bottom: 24px;
  font-size: 22px;
}
.demo-section {
  padding: 20px;
  margin-bottom: 24px;
  background: #ffffff;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  h3 {
    margin-bottom: 12px;
    font-size: 16px;
    color: #303133;
  }
  .desc {
    margin-bottom: 16px;
    font-size: 14px;
    color: #606266;
  }
}
.result-card {
  padding: 16px;
  margin-top: 16px;
  background: #f5f7fa;
  border-radius: 6px;
  h4 {
    margin-bottom: 8px;
    font-size: 14px;
    color: #303133;
  }
  p {
    margin: 4px 0;
    font-size: 13px;
    color: #606266;
  }
}
.status-btns {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}
</style>
