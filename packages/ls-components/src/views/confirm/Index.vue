<script setup lang="ts">
import { markRaw } from 'vue'
import { CircleCloseFilled, QuestionFilled } from '@element-plus/icons-vue'
import axios from 'axios'

// 基础用法
const visible = ref(false)
const title = ref('标题')
const message = ref('内容')
const visible2 = ref(false)
const message2 = ref('<span style="color: red;">内容 2</span> <br/> <span style="color: green;">内容 222222</span>')

// 带异步请求
const visible3 = ref(false)
const message3 = ref('点击确定后，请求数据')
const requestApi = () => axios.get('https://jsonplaceholder.typicode.com/posts/1')

// 不同类型
const visible4 = ref(false)
const title4 = ref('')
const message4 = ref('')
const type4 = ref('')

// 自定义按钮文本
const visible5 = ref(false)

// 居中显示
const visible6 = ref(false)

// 自定义图标
const visible7 = ref(false)
const customIcon = markRaw(QuestionFilled)

// 禁用关闭按钮
const visible8 = ref(false)

// 点击蒙层可关闭
const visible9 = ref(false)

// 带请求参数
const visible10 = ref(false)
const message10 = ref('点击确定后，带参数请求数据')
const requestParams = { id: 123, name: '测试' }

// 仅显示确认按钮
const visible11 = ref(false)

// 按ESC键可关闭
const visible12 = ref(false)

// 自定义关闭图标
const visible13 = ref(false)
const closeIcon = markRaw(CircleCloseFilled)

// 动态更新内容
const visible15 = ref(false)
const message15 = ref('初始消息内容')

function onConfirm(data: any) {
  console.log('确认点击', data.value)
}

function onCancel() {
  console.log('取消')
}

function handleClick1() {
  visible.value = true
}

function handleClick2() {
  visible2.value = true
}

function handleClick3() {
  visible3.value = true
}

function handleClick4(type: string) {
  type4.value = type

  switch (type) {
    case 'success':
      title4.value = '成功提示'
      message4.value = '操作成功！'
      break
    case 'info':
      title4.value = '信息提示'
      message4.value = '这是一条信息提示。'
      break
    case 'warning':
      title4.value = '警告提示'
      message4.value = '请确认您的操作！'
      break
    case 'error':
      title4.value = '错误提示'
      message4.value = '操作失败，请重试！'
      break
  }

  visible4.value = true
}

function handleClick5() {
  visible5.value = true
}

function handleClick6() {
  visible6.value = true
}

function handleClick7() {
  visible7.value = true
}

function handleClick8() {
  visible8.value = true
}

function handleClick9() {
  visible9.value = true
}

function handleClick10() {
  visible10.value = true
}

function handleClick11() {
  visible11.value = true
}

function handleClick12() {
  visible12.value = true
}

function handleClick13() {
  visible13.value = true
}

function handleClick15() {
  message15.value = '初始消息内容'
  visible15.value = true

  // 2秒后更新消息内容
  setTimeout(() => {
    message15.value = '消息内容已更新'
  }, 2000)
}

function onConfirm3(data: any) {
  message3.value = '请求数据完成'
  console.log('请求结果', data.value)
}

function onConfirm10(data: any) {
  message10.value = '请求数据完成'
  console.log('请求结果', data.value)
}

function requestApiWithParams(params: any) {
  console.log('请求参数:', params)
  return axios.get('https://jsonplaceholder.typicode.com/posts/1', { params })
}
</script>

<template>
  <div class="confirm-demo">
    <h2>确认框 LSConfirm</h2>

    <div class="demo-section">
      <h3>基础用法</h3>
      <p class="desc">
        纯文本确认框，通过 v-model 控制显示，title / message 设置标题与内容。
      </p>
      <div class="btn-row">
        <LSButton type="primary" @click="handleClick1">
          纯文本确认
        </LSButton>
        <LSButton type="warning" @click="handleClick2">
          HTML 内容确认
        </LSButton>
        <LSButton type="danger" @click="handleClick3">
          接口请求确认
        </LSButton>
      </div>
    </div>

    <div class="demo-section">
      <h3>不同类型</h3>
      <p class="desc">
        通过 type 设置 success / info / warning / error 四种类型，展示不同图标与配色。
      </p>
      <div class="btn-row">
        <LSButton type="success" @click="handleClick4('success')">
          成功确认框
        </LSButton>
        <LSButton type="info" @click="handleClick4('info')">
          信息确认框
        </LSButton>
        <LSButton type="warning" @click="handleClick4('warning')">
          警告确认框
        </LSButton>
        <LSButton type="danger" @click="handleClick4('error')">
          错误确认框
        </LSButton>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义按钮文本</h3>
      <p class="desc">
        通过 confirm-btn-txt 和 cancel-btn-txt 自定义确认与取消按钮的文案。
      </p>
      <div class="btn-row">
        <LSButton type="primary" @click="handleClick5">
          自定义按钮文本
        </LSButton>
      </div>
    </div>

    <div class="demo-section">
      <h3>居中显示</h3>
      <p class="desc">
        center 属性让标题与内容居中显示，适合提示类场景。
      </p>
      <div class="btn-row">
        <LSButton type="primary" @click="handleClick6">
          居中显示确认框
        </LSButton>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义图标</h3>
      <p class="desc">
        通过 icon 属性传入 Element Plus 图标组件，替换默认类型图标。
      </p>
      <div class="btn-row">
        <LSButton type="primary" @click="handleClick7">
          自定义图标确认框
        </LSButton>
      </div>
    </div>

    <div class="demo-section">
      <h3>仅显示确认按钮</h3>
      <p class="desc">
        show-cancel-btn 设为 false 时隐藏取消按钮，适合纯提示场景。
      </p>
      <div class="btn-row">
        <LSButton type="primary" @click="handleClick11">
          仅显示确认按钮
        </LSButton>
      </div>
    </div>

    <div class="demo-section">
      <h3>禁用关闭按钮</h3>
      <p class="desc">
        show-close 设为 false 时隐藏右上角关闭按钮，强制用户通过按钮操作。
      </p>
      <div class="btn-row">
        <LSButton type="primary" @click="handleClick8">
          禁用关闭按钮
        </LSButton>
      </div>
    </div>

    <div class="demo-section">
      <h3>点击蒙层可关闭</h3>
      <p class="desc">
        close-on-click-modal 设为 true 时，点击遮罩层可关闭确认框。
      </p>
      <div class="btn-row">
        <LSButton type="primary" @click="handleClick9">
          点击蒙层可关闭
        </LSButton>
      </div>
    </div>

    <div class="demo-section">
      <h3>按 ESC 键可关闭</h3>
      <p class="desc">
        close-on-press-escape 设为 true 时，支持按 ESC 键关闭确认框。
      </p>
      <div class="btn-row">
        <LSButton type="primary" @click="handleClick12">
          按 ESC 键可关闭
        </LSButton>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义关闭图标</h3>
      <p class="desc">
        通过 close-icon 属性传入自定义图标组件，替换默认关闭图标。
      </p>
      <div class="btn-row">
        <LSButton type="primary" @click="handleClick13">
          自定义关闭图标
        </LSButton>
      </div>
    </div>

    <div class="demo-section">
      <h3>带请求参数的确认框</h3>
      <p class="desc">
        request-api 配合 request-params，点击确认后自动携带参数请求接口。
      </p>
      <div class="btn-row">
        <LSButton type="primary" @click="handleClick10">
          带请求参数
        </LSButton>
      </div>
    </div>

    <div class="demo-section">
      <h3>动态更新内容</h3>
      <p class="desc">
        确认框打开后，修改 message 的值可动态更新显示内容，适合异步场景。
      </p>
      <div class="btn-row">
        <LSButton type="primary" @click="handleClick15">
          动态更新内容
        </LSButton>
      </div>
    </div>

    <!-- 确认框实例 -->
    <LSConfirm
      v-model="visible"
      :title="title"
      :message="message"
      @on-confirm="onConfirm"
      @on-cancel="onCancel"
    />
    <LSConfirm
      v-model="visible2"
      :title="title"
      :message="message2"
      draggable
      use-html
      @on-confirm="onConfirm"
      @on-cancel="onCancel"
    />
    <LSConfirm
      v-model="visible3"
      :title="title"
      :message="message3"
      :request-api="requestApi"
      @on-confirm="onConfirm3"
      @on-cancel="onCancel"
    />
    <LSConfirm
      v-model="visible4"
      :title="title4"
      :message="message4"
      :type="type4"
      @on-confirm="onConfirm"
      @on-cancel="onCancel"
    />
    <LSConfirm
      v-model="visible5"
      :title="title"
      :message="message"
      confirm-btn-txt="同意"
      cancel-btn-txt="拒绝"
      @on-confirm="onConfirm"
      @on-cancel="onCancel"
    />
    <LSConfirm
      v-model="visible6"
      :title="title"
      :message="message"
      center
      @on-confirm="onConfirm"
      @on-cancel="onCancel"
    />
    <LSConfirm
      v-model="visible7"
      :title="title"
      :message="message"
      :icon="customIcon"
      @on-confirm="onConfirm"
      @on-cancel="onCancel"
    />
    <LSConfirm
      v-model="visible8"
      :title="title"
      :message="message"
      :show-close="false"
      @on-confirm="onConfirm"
      @on-cancel="onCancel"
    />
    <LSConfirm
      v-model="visible9"
      :title="title"
      :message="message"
      :close-on-click-modal="true"
      @on-confirm="onConfirm"
      @on-cancel="onCancel"
    />
    <LSConfirm
      v-model="visible10"
      :title="title"
      :message="message10"
      :request-api="requestApiWithParams"
      :request-params="requestParams"
      @on-confirm="onConfirm10"
      @on-cancel="onCancel"
    />
    <LSConfirm
      v-model="visible11"
      :title="title"
      :message="message"
      :show-cancel-btn="false"
      @on-confirm="onConfirm"
    />
    <LSConfirm
      v-model="visible12"
      :title="title"
      :message="message"
      :close-on-press-escape="true"
      @on-confirm="onConfirm"
      @on-cancel="onCancel"
    />
    <LSConfirm
      v-model="visible13"
      :title="title"
      :message="message"
      :close-icon="closeIcon"
      @on-confirm="onConfirm"
      @on-cancel="onCancel"
    />
    <LSConfirm
      v-model="visible15"
      :title="title"
      :message="message15"
      @on-confirm="onConfirm"
      @on-cancel="onCancel"
    />
  </div>
</template>

<style lang="scss" scoped>
.confirm-demo {
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
.btn-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
