<script setup lang="ts">
const visible = ref(false)
const title = ref('标题')
const message = ref('内容')
const type = ref(1)
const useHtml = ref(false)
const requestApi: any = ref(null)

const defIcon = markRaw(WarningFilled)

function onConfirm(data: any) {
  console.log(data.value)
}

function onCancel() {
  console.log('取消')
}

function handleClick(val: number) {
  type.value = val

  if (val === 1) {
    title.value = '标题 1'
    message.value = '内容 1内容 1内容 1内容 1内容 1内容 1内容 1内容 1内容 1内容 1内容 1内容 1内容 1'
    setTimeout(() => {
      title.value = '标题 111111'
    }, 1000)
    useHtml.value = false
  }
  else if (val === 2) {
    title.value = '标题 2'
    message.value = '<span style="color: red;">内容 2</span> <br/> <span style="color: green;">内容 222222</span>'
    setTimeout(() => {
      message.value = '<span style="color: blue;">内容 222222</span>'
    }, 1000)
    useHtml.value = true
  }
  else if (val === 3) {
    title.value = '标题 3'
    useHtml.value = false
    setTimeout(() => {
      message.value = '内容 3'
    }, 1000)
    requestApi.value = (params: any) => axios.post('https://jsonplaceholder.typicode.com/posts/1', params)
  }
  visible.value = true
}
</script>

<template>
  <div class="confirm-demo">
    <h2>确认框 LSConfirm</h2>

    <div class="demo-section">
      <h3>基础用法</h3>
      <p class="desc">
        三种不同类型的确认框：纯文本、HTML 内容、带请求接口。
      </p>
      <div class="btn-row">
        <LSButton type="primary" @click="handleClick(1)">
          纯文本确认
        </LSButton>
        <LSButton type="warning" @click="handleClick(2)">
          HTML 内容确认
        </LSButton>
        <LSButton type="danger" @click="handleClick(3)">
          接口请求确认
        </LSButton>
      </div>
    </div>

    <div class="demo-section">
      <h3>属性说明</h3>
      <p class="desc">
        v-model 控制显示；title / message 设置标题与内容；useHtml 开启 HTML 渲染；requestApi 支持点击确认后自动请求接口。
      </p>
      <el-alert
        title="提示"
        type="info"
        description="点击上方按钮查看不同场景的确认框交互。"
        show-icon
        :closable="false"
      />
    </div>

    <LSConfirm
      v-model="visible"
      :title="title"
      :message="message"
      :use-html="useHtml"
      :request-api="requestApi"
      type="warning"
      :icon="defIcon"
      :request-params="{ id: 111 }"
      :close-icon="defIcon"
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
