<script setup lang="ts">
const printContent = ref(`<div style="padding:20px;">
  <h2>打印测试内容</h2>
  <p>这是一段用于 LSPrint 组件测试的打印内容。</p>
  <table border="1" cellpadding="8" style="border-collapse:collapse;width:100%;">
    <tr><th>项目</th><th>数值</th></tr>
    <tr><td>名称</td><td>测试打印</td></tr>
    <tr><td>日期</td><td>2024-06-15</td></tr>
    <tr><td>状态</td><td>成功</td></tr>
  </table>
</div>`)

const canPrint = ref(true)
</script>

<template>
  <div class="print-demo">
    <h2>打印 LSPrint</h2>

    <div class="demo-section">
      <h3>内嵌打印</h3>
      <p class="desc">
        通过默认插槽传入需要打印的内容，点击按钮直接打印。
      </p>
      <LSPrint content="正在测试打印功能" btn-txt="打印内嵌内容" :can-print="canPrint" :icon-config="{ name: 'Printer' }" type="primary">
        <div class="print-card" v-html="printContent" />
      </LSPrint>
    </div>

    <div class="demo-section">
      <h3>指定区域打印</h3>
      <p class="desc">
        通过 printObj.id 指定页面中某个 DOM 元素的 id 进行打印。
      </p>
      <div id="printArea" class="print-card">
        <h3>指定区域内容</h3>
        <p>该区域通过 id="printArea" 被 LSPrint 组件指定打印。</p>
        <el-tag>标签 A</el-tag>
        <el-tag type="success">标签 B</el-tag>
        <el-tag type="warning">标签 C</el-tag>
      </div>
      <LSPrint
        :print-obj="{ id: '#printArea', popTitle: '打印测试' }"
        content="正在打印指定区域"
        btn-txt="打印指定区域"
        :can-print="true"
        :icon-config="{ name: 'Printer' }"
        type="primary"
      />
    </div>

    <div class="demo-section">
      <h3>禁用打印</h3>
      <p class="desc">
        canPrint 为 false 时按钮禁用，鼠标移入显示 content 提示。
      </p>
      <LSPrint
        content="当前状态禁止打印"
        btn-txt="禁止打印"
        :can-print="false"
        :icon-config="{ name: 'Printer', color: 'red' }"
        type="primary"
      />
    </div>

    <div class="demo-section">
      <h3>动态控制</h3>
      <p class="desc">
        通过开关控制 canPrint 状态。
      </p>
      <el-switch v-model="canPrint" active-text="允许打印" inactive-text="禁止打印" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.print-demo {
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
.print-card {
  padding: 16px;
  margin-bottom: 16px;
  background: #f5f7fa;
  border: 1px dashed #c0c4cc;
  border-radius: 6px;
}
</style>
