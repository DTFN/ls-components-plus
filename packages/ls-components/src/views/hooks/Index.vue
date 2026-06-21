<script setup lang="ts">
import { useTableListHook, useOptionsHook } from '@lingshugroup/web-plus/hooks'

// 模拟请求函数
const mockRequest = (params: any) => {
  console.log('请求参数:', params)
  return new Promise((resolve) => {
    setTimeout(() => {
      const { currentPage = 1, pageSize = 10 } = params
      const total = 85
      const records = Array.from({ length: pageSize }, (_, i) => ({
        id: (currentPage - 1) * pageSize + i + 1,
        name: `用户${(currentPage - 1) * pageSize + i + 1}`,
        age: Math.floor(Math.random() * 30) + 20,
        email: `user${(currentPage - 1) * pageSize + i + 1}@example.com`,
      }))
      resolve({
        records,
        total,
      })
    }, 1000)
  })
}

// 模拟选项请求函数
const mockOptionsRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: '选项1', disabled: false },
        { id: 2, name: '选项2', disabled: false },
        { id: 3, name: '选项3', disabled: true },
        { id: 4, name: '选项4', disabled: false },
        { id: 5, name: '选项5', disabled: false },
      ])
    }, 800)
  })
}

// useTableListHook 示例
const {
  loading: tableLoading,
  tableData,
  total,
  currentPage,
  pageSize,
  handleReset,
  loadData,
} = useTableListHook(mockRequest, {}, {
  pageSizeProp: 10,
  autoFetch: true,
})

// useOptionsHook 示例
const {
  loading: optionsLoading,
  selData,
  getSelOptions,
  getLabelByValue,
} = useOptionsHook({
  cacheKey: 'userOptions',
  cacheTime: 5 * 60 * 1000, // 缓存5分钟
})

// useWSHook 示例nconst {n  status: wsStatus,n  isConnected: wsIsConnected,n  messageList: wsMessageList,n  wsData,n  createWebSocket,n  close: closeWS,n  sendMessage,n  clearMessages: clearWsMessages,n} = useWS()nconst wsLoading = ref(false)nconst wsLatestMessage = ref("")nnfunction connectWS() {n  wsLoading.value = truen  // 使用公开的测试 WebSocket 地址n  createWebSocket("wss://echo.websocket.org/", (data) => {n    wsLatestMessage.value = typeof data === "string" ? data : JSON.stringify(data)n    ElMessage.success("收到新消息")n  })n  setTimeout(() => (wsLoading.value = false), 1500)n}nnfunction disconnectWS() {n  closeWS.value?.()n  wsLatestMessage.value = ""n  ElMessage.info("已断开连接")n}nnfunction sendTestMessage() {n  const message = {n    type: "test",n    content: "Hello WebSocket",n    timestamp: Date.now(),n  }n  sendMessage(message)n  ElMessage.success("测试消息已发送")n}nnwatch(wsData, (newData) => {n  if (newData) {n    wsLatestMessage.value = typeof newData === "string" ? newData : JSON.stringify(newData)n  }n})nconst selectedValue = ref<number>(2)

// 加载选项
const loadOptions = async () => {
  await getSelOptions(mockOptionsRequest, ['name'], ['id'])
}

// 页面加载时获取选项
onMounted(() => {
  loadOptions()
})
</script>

<template>
  <div class="hooks-demo">
    <h2>useTableListHook 示例</h2>
    <p>用于列表页面的分页数据加载，自动处理分页、加载状态、数据格式化等</p>
    
    <LSButton type="primary" @click="handleReset" :loading="tableLoading">
      刷新数据
    </LSButton>
    <LSButton @click="loadData(false)" :loading="tableLoading" style="margin-left: 10px">
      静默刷新
    </LSButton>

    <div style="margin: 20px 0">
      <el-table :data="tableData" v-loading="tableLoading" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="age" label="年龄" width="80" />
        <el-table-column prop="email" label="邮箱" />
      </el-table>
      <div style="margin-top: 10px; text-align: right">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="total"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
        />
      </div>
    </div>

    <h2 style="margin-top: 40px">useOptionsHook 示例</h2>
    <p>用于下拉框选项数据的获取，支持缓存、防抖搜索、标签映射等功能</p>
    
    <LSButton type="primary" @click="loadOptions" :loading="optionsLoading" style="margin-bottom: 20px">
      重新加载选项
    </LSButton>

    <div style="width: 300px">
      <el-select v-model="selectedValue" placeholder="请选择">
        <el-option
          v-for="item in selData.allOption"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>
      <p style="margin-top: 10px">
        选中值: {{ selectedValue }}，对应的标签: {{ getLabelByValue(selectedValue) }}
      </p>
    </div>

    <h2 style="margin-top: 40px">useWSHook WebSocket 连接</h2>
    <p>用于 WebSocket 连接管理，支持自动重连、心跳检测、消息收发等功能。</p>
    <div style="margin: 20px 0">
      <LSButton type="primary" @click="connectWS" :loading="wsLoading" :disabled="wsIsConnected">
        {{ wsIsConnected ? "已连接" : "连接 WebSocket" }}
      </LSButton>
      <LSButton @click="disconnectWS" :disabled="!wsIsConnected" style="margin-left: 10px">
        断开连接
      </LSButton>
      <LSButton @click="sendTestMessage" :disabled="!wsIsConnected" style="margin-left: 10px">
        发送测试消息
      </LSButton>
      <LSButton @click="clearWsMessages" style="margin-left: 10px">
        清空消息
      </LSButton>

      <div style="margin-top: 20px; padding: 20px; background: #f5f7fa; border-radius: 8px;">
        <p><strong>连接状态：</strong>
          <el-tag :type="wsIsConnected ? 'success' : 'info'">
            {{ wsStatus }}
          </el-tag>
        </p>
        <p style="margin-top: 10px"><strong>最新消息：</strong>{{ wsLatestMessage }}</p>
        <div style="margin-top: 20px;">
          <h4>消息历史：</h4>
          <div style="max-height: 200px; overflow-y: auto; background: #fff; padding: 10px; border-radius: 4px;">
            <p v-for="(msg, idx) in wsMessageList" :key="idx" style="margin-bottom: 8px; font-size: 13px;">
              [{{ new Date(msg.timestamp).toLocaleTimeString() }}] {{ JSON.stringify(msg.data) }}
            </p>
            <p v-if="wsMessageList.length === 0" style="color: #909399; text-align: center;">暂无消息</p>
          </div>
        </div>
      </div>
    </div>
    <h2 style="margin-top: 40px">其他 Hooks</h2>
    <ul style="margin-top: 20px; line-height: 2">
      <li><strong>useRouterHook</strong>: 路由相关的工具 hook，提供路由跳转、参数获取等功能</li>
      <li><strong>useWSHook</strong>: WebSocket 连接管理 hook，支持自动重连、消息收发等</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.hooks-demo {
  padding: 20px;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    margin-bottom: 20px;
  }
}
</style>
