<script setup lang="ts">
import type { BellMessageListType } from '@cpo/_types'

const noticeNum = ref(3)
const loading = ref(false)
const noMore = ref(false)

const list: Ref<BellMessageListType> = ref([
  {
    id: '1',
    title: '系统升级通知',
    msgType: '系统',
    content: '系统将于今晚 02:00 进行例行维护升级，预计耗时 30 分钟。',
    createdTime: '2024-06-15 09:30:00',
    readStatus: 0,
  },
  {
    id: '2',
    title: '权限变更提醒',
    msgType: '权限',
    content: '您的角色权限已变更，新增「数据导出」权限，将在下次登录后生效。',
    createdTime: '2024-06-14 16:00:00',
    readStatus: 1,
  },
  {
    id: '3',
    title: '待办任务',
    msgType: '任务',
    content: '您有 2 条待审批流程需要处理，请尽快登录后台查看。',
    createdTime: '2024-06-13 10:20:00',
    readStatus: 0,
  },
])

function loadMore() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    const start = list.value.length + 1

    for (let i = 0; i < 3; i++) {
      list.value.push({
        id: `${start + i}`,
        title: `新增消息 ${start + i}`,
        msgType: '通知',
        content: `这是第 ${start + i} 条加载更多的消息内容。`,
        createdTime: '2024-06-12 08:00:00',
        readStatus: 0,
      })
    }

    if (list.value.length >= 12) {
      noMore.value = true
    }
  }, 800)
}

function readMsg(id: string) {
  list.value = list.value.map((item: any) => {
    if (item.id === id) {
      item.readStatus = 1
    }

    return item
  })
  noticeNum.value = Math.max(0, noticeNum.value - 1)
}

function readAll() {
  list.value = list.value.map((item: any) => {
    item.readStatus = 1

    return item
  })
  noticeNum.value = 0
}

const iconConfig = ref({ name: 'Bell', color: '#409eff', size: 20 })
</script>

<template>
  <div class="bell-message-demo">
    <h2>消息铃铛 LSBellMessage</h2>

    <div class="demo-section">
      <h3>基础用法</h3>
      <p class="desc">
        展示未读消息数量，点击展开消息列表，支持单条已读和全部已读。
      </p>
      <div class="demo-toolbar">
        <LSBellMessage
          :notice-num="noticeNum"
          :list="list"
          :loading="loading"
          :no-more="noMore"
          style="margin-right: 18px"
          @read-msg="readMsg"
          @read-all="readAll"
          @load-more="loadMore"
        />
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义图标</h3>
      <p class="desc">
        通过 iconConfig 自定义铃铛图标样式。
      </p>
      <div class="demo-toolbar">
        <LSBellMessage
          :notice-num="5"
          :list="list"
          :loading="false"
          :icon-config="iconConfig"
        />
      </div>
    </div>

    <div class="demo-section">
      <h3>空状态</h3>
      <p class="desc">
        当消息列表为空时的展示效果。
      </p>
      <div class="demo-toolbar">
        <LSBellMessage
          :notice-num="0"
          :list="[]"
          :loading="false"
        />
      </div>
    </div>

    <div class="demo-section">
      <h3>Loading 状态</h3>
      <p class="desc">
        模拟加载更多时的 Loading 状态。
      </p>
      <div class="demo-toolbar">
        <LSBellMessage
          :notice-num="2"
          :list="list.slice(0, 2)"
          :loading="true"
          :no-more="false"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bell-message-demo {
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
.demo-toolbar {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 6px;
}
</style>
