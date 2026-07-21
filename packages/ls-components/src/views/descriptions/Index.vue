<script setup lang="ts">
import type { DescriptionsListType } from '@cpo/_types'

const iconColor = ref('red')

const itemLabelWidth = ref('160px')
const list1: Ref<DescriptionsListType> = ref([
  {
    iconConfig: { type: 1, name: 'iconoir:fish', color: iconColor },
    label: '养殖品种',
    value: '舟山鲈鱼',
    labelWidth: itemLabelWidth,
  },
  {
    iconConfig: { type: 1, name: 'game-icons:whale-tail' },
    label: '尾数范围',
    value: '56024 - 93366 尾',
    labelWidth: itemLabelWidth,
  },
  {
    iconConfig: { name: 'Edit' },
    label: '批次数量',
    value: '5',
    labelWidth: itemLabelWidth,
  },
])

const list2: Ref<DescriptionsListType> = ref([
  {
    label: '捕捞编号',
    value: 'F202406130003',
  },
  {
    label: '销售订单号',
    value: 'XSDD00000001010',
  },
  {
    label: '鱼种',
    value: '舟山鲈鱼',
  },
  {
    label: '捕捞规格',
    value: '--',
  },
  {
    label: '责任人',
    value: '',
  },
  {
    label: '捕捞量(斤)',
    value: 12,
  },
  {
    label: '桶数量',
    value: 1,
  },
  {
    label: '我方人员',
    value: '',
  },
  {
    label: '客户人员',
    value: '',
  },
  {
    label: '司机姓名',
    value: '',
  },
  {
    label: '车牌号',
    value: '',
  },
  {
    label: '备注',
    value: '',
  },
])

// 带日期格式化
const list3: Ref<DescriptionsListType> = ref([
  {
    label: '创建时间',
    type: 'date',
    value: new Date('2024-06-13T10:30:00'),
  },
  {
    label: '更新时间',
    type: 'date',
    value: new Date('2024-06-14T15:45:00'),
    format: 'YYYY/MM/DD',
  },
  {
    label: '截止时间',
    type: 'date',
    value: new Date('2024-06-30T23:59:59'),
    format: 'MM-DD HH:mm',
  },
])

// 带选择框类型
const list4: Ref<DescriptionsListType> = ref([
  {
    label: '订单状态',
    type: 'select',
    value: '1',
    propMap: {
      0: { label: '待处理' },
      1: { label: '处理中' },
      2: { label: '已完成' },
      3: { label: '已取消' },
    },
  },
  {
    label: '支付方式',
    type: 'select',
    value: '2',
    propMap: {
      1: { label: '微信支付' },
      2: { label: '支付宝' },
      3: { label: '银行卡' },
    },
  },
  {
    label: '配送方式',
    type: 'select',
    value: '3',
    propMap: {
      1: { label: '快递' },
      2: { label: '自提' },
      3: { label: '上门配送' },
    },
  },
])

// 带自定义插槽
const list5: Ref<DescriptionsListType> = ref([
  {
    label: '订单号',
    value: 'ORD20240613001',
  },
  {
    label: '订单状态',
    type: 'slot',
    slotName: 'statusSlot',
  },
  {
    label: '操作',
    type: 'slot',
    slotName: 'customSlot',
  },
])

// 不同图标配置
const list6: Ref<DescriptionsListType> = ref([
  {
    iconConfig: { type: 1, name: 'material-symbols:check-circle', color: '#4CAF50' },
    label: '状态',
    value: '正常',
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:warning', color: '#FF9800' },
    label: '警告',
    value: '无',
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:error', color: '#F44336' },
    label: '错误',
    value: '无',
  },
])

// 响应式列数
const list7: Ref<DescriptionsListType> = ref([
  { label: '属性1', value: '值1' },
  { label: '属性2', value: '值2' },
  { label: '属性3', value: '值3' },
  { label: '属性4', value: '值4' },
  { label: '属性5', value: '值5' },
  { label: '属性6', value: '值6' },
  { label: '属性7', value: '值7' },
  { label: '属性8', value: '值8' },
])
</script>

<template>
  <div class="descriptions-demo">
    <h2>描述列表 LSDescriptions</h2>

    <div class="demo-section">
      <h3>基础用法（带图标与自定义颜色）</h3>
      <p class="desc">
        通过 list 传入数据，iconConfig 配置每行图标，labelBgColor / labelColor 自定义标签样式。
      </p>
      <LSDescriptions label-bg-color="blue" label-color="#fff" :list="list1" label-width="200px" />
    </div>

    <div class="demo-section">
      <h3>带标题与多列</h3>
      <p class="desc">
        通过 title 设置标题，column 控制每行显示的列数。
      </p>
      <LSDescriptions title="捕捞记录" :list="list2" :column="2" />
    </div>

    <div class="demo-section">
      <h3>五列展示</h3>
      <p class="desc">
        column 设置为 5 时，数据密集型场景下可一屏展示更多信息。
      </p>
      <LSDescriptions :list="list2" :column="5" />
    </div>

    <div class="demo-section">
      <h3>带边框样式</h3>
      <p class="desc">
        border 属性开启边框模式，适合需要明确区分字段的数据展示。
      </p>
      <LSDescriptions :list="list2" :column="2" border />
    </div>

    <div class="demo-section">
      <h3>日期格式化</h3>
      <p class="desc">
        type 设为 date 时支持日期格式化，通过 format 自定义输出格式。
      </p>
      <LSDescriptions :list="list3" :column="1" />
    </div>

    <div class="demo-section">
      <h3>枚举映射（select 类型）</h3>
      <p class="desc">
        type 设为 select 时，通过 propMap 将值映射为可读文本。
      </p>
      <LSDescriptions :list="list4" :column="1" />
    </div>

    <div class="demo-section">
      <h3>自定义插槽</h3>
      <p class="desc">
        type 设为 slot 时，通过 slotName 指定插槽名称，可嵌入任意内容。
      </p>
      <LSDescriptions :list="list5">
        <template #customSlot>
          <el-button type="primary" size="small">
            查看详情
          </el-button>
        </template>
        <template #statusSlot>
          <el-tag type="success">
            已完成
          </el-tag>
        </template>
      </LSDescriptions>
    </div>

    <div class="demo-section">
      <h3>不同图标与颜色配置</h3>
      <p class="desc">
        iconConfig 支持 Iconify 图标库，可配合不同颜色表达状态语义。
      </p>
      <LSDescriptions label-bg-color="green" label-color="#fff" :list="list6" />
    </div>

    <div class="demo-section">
      <h3>响应式列数</h3>
      <p class="desc">
        column 支持响应式对象配置，根据屏幕宽度自动调整列数。
      </p>
      <LSDescriptions :list="list7" :column="{ xs: 1, sm: 2, md: 3, lg: 4 }" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.descriptions-demo {
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
</style>
