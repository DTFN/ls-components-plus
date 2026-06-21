<script setup lang="ts">
const jsonData = ref({
  name: '零数科技',
  version: '2.6.8',
  description: '前端UI组件库（Vue3）',
  features: ['Vue3', 'TypeScript', 'Element Plus'],
  author: {
    name: '前端团队',
    email: 'frontend@lingshu.com'
  },
  createTime: '2024-01-01',
  isOpenSource: true,
  downloadCount: 10000
})

const readOnly = ref(false)
const jsonValue = ref(JSON.stringify(jsonData.value, null, 2))

function handleChange(val: any) {
  console.log('JSON内容变化：', val)
  ElMessage.success('JSON内容已更新')
}
</script>

<template>
  <div class="json-editor-demo">
    <h2>JsonEditor JSON编辑器</h2>
    <p>用于编辑和查看JSON格式数据的组件</p>

    <div style="margin: 20px 0">
      <LSButton type="primary" @click="readOnly = !readOnly" style="margin-bottom: 20px">
        {{ readOnly ? '切换为编辑模式' : '切换为只读模式' }}
      </LSButton>

      <LSJsonEditor
        :json-value="jsonValue"
        :read-only="readOnly"
        height="500px"
        :navigation-bar="true"
        @change="handleChange"
      />
    </div>

    <div style="margin-top: 40px">
      <h3>编辑结果：</h3>
      <pre style="background: #f5f5f5; padding: 20px; border-radius: 4px; max-height: 300px; overflow: auto">
        {{ JSON.stringify(JSON.parse(jsonValue), null, 2) }}
      </pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.json-editor-demo {
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

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>
