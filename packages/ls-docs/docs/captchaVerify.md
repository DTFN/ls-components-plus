---
outline: deep
---

# CaptchaVerify 滑块拼图验证码

::: tip 滑块拼图验证码组件，用于登录、注册等场景的安全验证。
:::

## 使用方式

```vue
<script setup>
import { ref } from 'vue'

const visible = ref(false)
const captchaId = ref('')
const seed = ref(0)
const targetPercent = ref(0.5)
const captchaStatus = ref('idle')
const captchaLoading = ref(false)

// 加载验证码
async function loadCaptcha() {
  // 调用接口获取验证码数据
  // const res = await fetchCaptcha();
  // captchaId.value = res.captchaId;
  // seed.value = res.sceneSeed;
  // targetPercent.value = res.targetPercent;
}

// 验证回调
function onVerify(payload) {
  console.log('拖动百分比:', payload.dragPercent)
  console.log('耗时(ms):', payload.durationMs)
  console.log('轨迹:', payload.trace)

  // 调用验证接口
  // await verifyCaptcha({
  //   captchaId: captchaId.value,
  //   dragPercent: payload.dragPercent,
  //   durationMs: payload.durationMs,
  //   trace: payload.trace
  // });
}
</script>

<template>
  <LSCaptchaVerify
    v-model="visible"
    :target-percent="0.6"
    :scene-seed="seed"
    :serial-no="captchaId"
    :status="captchaStatus"
    :loading="captchaLoading"
    @refresh="loadCaptcha"
    @select="onVerify"
  />
</template>
```

## 基础示例

```vue
<script setup>
import { ref } from 'vue'

const visible = ref(false)

function handleRefresh() {
  console.log('换一张')
}

function handleSelect(payload) {
  console.log('验证数据:', payload)
}
</script>

<template>
  <div>
    <el-button @click="visible = true">
      打开验证码
    </el-button>

    <LSCaptchaVerify
      v-model="visible"
      :target-percent="0.5"
      :scene-seed="123"
      serial-no="CAPTCHA-001"
      @refresh="handleRefresh"
      @select="handleSelect"
    />
  </div>
</template>
```

## 完整示例（配合后端验证）

```vue
<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  account: '',
  password: ''
})

const captchaVisible = ref(false)
const captchaId = ref('')
const sceneSeed = ref(0)
const targetPercent = ref(0.5)
const captchaStatus = ref('idle')
const captchaLoading = ref(false)

async function loadCaptcha() {
  captchaLoading.value = true

  try {
    // const res = await apiGetCaptcha();
    // captchaId.value = res.captchaId;
    // sceneSeed.value = res.sceneSeed;
    // targetPercent.value = res.targetPercent;
    // captchaStatus.value = 'idle';
  }
  finally {
    captchaLoading.value = false
  }
}

async function openCaptcha() {
  await loadCaptcha()
  captchaVisible.value = true
}

async function onCaptchaSelect(payload) {
  captchaLoading.value = true

  try {
    // const res = await apiVerifyCaptcha({
    //   captchaId: captchaId.value,
    //   ...payload
    // });
    // if (res.verified) {
    //   captchaStatus.value = 'success';
    //   setTimeout(() => {
    //     captchaVisible.value = false;
    //     doLogin();
    //   }, 500);
    // } else {
    //   captchaStatus.value = 'error';
    //   setTimeout(loadCaptcha, 600);
    // }
  }
  finally {
    captchaLoading.value = false
  }
}

function doLogin() {
  console.log('执行登录')
}
</script>

<template>
  <div class="login-form">
    <el-form :model="form" @submit.prevent="onSubmit">
      <el-form-item label="账号">
        <el-input v-model="form.account" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="openCaptcha">
          登录
        </el-button>
      </el-form-item>
    </el-form>

    <LSCaptchaVerify
      v-model="captchaVisible"
      :target-percent="targetPercent"
      :scene-seed="sceneSeed"
      :serial-no="captchaId"
      :status="captchaStatus"
      :loading="captchaLoading"
      @refresh="loadCaptcha"
      @select="onCaptchaSelect"
    />
  </div>
</template>
```

## API

### Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### Events

<ApiIntro :tableColumn="eventColumn" :tableData="eventData" />

### Select Payload

<ApiIntro :tableColumn="payloadColumn" :tableData="payloadData" />

### TracePoint

<ApiIntro :tableColumn="traceColumn" :tableData="traceData" />

## 交互说明

1. **拖动滑块**：按住滑块向右拖动，拼图块会跟随移动
2. **精度要求**：拼图块需要与缺口位置相差不超过 6%（`TOLERANCE = 0.06`）
3. **轨迹记录**：组件会自动记录拖动过程中的坐标和时间戳
4. **状态反馈**：
   - `idle` - 待验证状态
   - `success` - 验证通过（显示绿色遮罩）
   - `error` - 验证失败（显示红色遮罩，自动重置）
5. **换一张**：点击"换一张"按钮可以重新生成验证码

## 视觉主题

组件内置 8 种渐变背景主题和 8 种拼图形状，通过 `sceneSeed` 控制：

- `sceneSeed % 8` - 选择背景主题
- `Math.floor(sceneSeed / 7) % 8` - 选择拼图形状
- `sceneSeed % 4 * 90` - 拼图旋转角度
- `30 + sceneSeed % 40` - 垂直偏移位置

## 注意事项

- 组件内部使用 `LSDialog` 作为容器，继承其所有属性
- 拖动操作使用 Pointer Events，支持鼠标和触摸设备
- 组件会自动处理窗口大小变化和组件卸载时的清理工作
- 轨迹数据最多保留 300 个点（`trace.slice(-300)`）

<script setup>
import { tableColumn, tableMethodColumn } from '../constant';
import { ref } from 'vue';

const tableData = ref([
  {
    name: 'v-model',
    desc: '控制验证码弹窗显示/隐藏',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'loading',
    desc: '验证中 loading 状态',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'prompt',
    desc: '提示文案',
    type: 'string',
    value: '按住滑块拖动拼图到缺口处'
  },
  {
    name: 'targetPercent',
    desc: '缺口目标位置百分比(0-1)，会被限制在 0.15~0.85 之间',
    type: 'number',
    value: '0.5'
  },
  {
    name: 'status',
    desc: '验证状态：idle(待验证) / success(成功) / error(失败)',
    type: 'string',
    value: 'idle'
  },
  {
    name: 'sceneSeed',
    desc: '场景种子，用于生成不同的背景主题和拼图形状',
    type: 'number',
    value: '0'
  },
  {
    name: 'serialNo',
    desc: '验证码序列号，显示在右下角',
    type: 'string',
    value: '-'
  }
]);

const eventColumn = ref([
  { name: '事件名', value: 'name' },
  { name: '说明', value: 'desc' },
  { name: '回调参数', value: 'params' }
]);

const eventData = ref([
  {
    name: 'refresh',
    desc: '点击"换一张"按钮时触发',
    params: '-'
  },
  {
    name: 'select',
    desc: '拖动完成并满足精度要求时触发',
    params: '{ dragPercent, durationMs, trace }'
  }
]);

const payloadColumn = ref([
  { name: '字段', value: 'name' },
  { name: '类型', value: 'type' },
  { name: '说明', value: 'desc' }
]);

const payloadData = ref([
  {
    name: 'dragPercent',
    type: 'number',
    desc: '最终拖动位置百分比(0-1)，保留4位小数'
  },
  {
    name: 'durationMs',
    type: 'number',
    desc: '拖动耗时(毫秒)'
  },
  {
    name: 'trace',
    type: 'TracePoint[]',
    desc: '拖动轨迹数组，包含每个采样点的坐标和时间'
  }
]);

const traceColumn = ref([
  { name: '字段', value: 'name' },
  { name: '类型', value: 'type' },
  { name: '说明', value: 'desc' }
]);

const traceData = ref([
  {
    name: 'x',
    type: 'number',
    desc: '位置百分比(0-1)'
  },
  {
    name: 't',
    type: 'number',
    desc: '距离开始的时间(毫秒)'
  }
]);
</script>
