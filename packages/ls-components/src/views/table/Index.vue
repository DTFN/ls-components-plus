<script setup lang="ts">
import { computed, ref } from 'vue';
import { ElMessage } from 'element-plus';

type UserStatus = 'ENABLED' | 'DISABLED' | 'PENDING';

interface UserRow {
  id: number;
  name: string;
  website?: string;
  websiteUrl?: string;
  amount: number;
  status: UserStatus;
  createdAt: number; // 时间戳（毫秒）
  disabled?: boolean;
}

const allData = ref<UserRow[]>([
  {
    id: 1,
    name: '张三',
    website: '零数官网',
    websiteUrl: 'https://lingshu.group',
    amount: 1200,
    status: 'ENABLED',
    createdAt: new Date('2024-10-16T10:28:11').getTime()
  },
  {
    id: 2,
    name: '李四',
    website: '产品页',
    websiteUrl: 'https://lingshu.group/product',
    amount: -50,
    status: 'DISABLED',
    createdAt: new Date('2024-10-16T11:00:00').getTime(),
    disabled: true
  },
  {
    id: 3,
    name: '王五',
    website: '数据服务',
    websiteUrl: 'https://lingshu.group/data',
    amount: 300,
    status: 'PENDING',
    createdAt: new Date('2024-10-17T09:30:00').getTime()
  }
]);

const statusStyle = ref<'default' | 'dot' | 'follow'>('follow');

const basicTableColumn = computed(() => [
  {
    label: 'ID',
    prop: 'id',
    minWidth: 60
  },
  {
    label: '姓名',
    prop: 'name',
    minWidth: 120
  },
  {
    label: '创建时间',
    prop: 'createdAt',
    minWidth: 180,
    type: 'date',
    dateTemplate: 'YYYY年MM月DD日 HH时mm分ss秒',
    sortable: true
  },
  {
    label: '状态',
    prop: 'status',
    minWidth: 140,
    type: 'status',
    statusStyle: statusStyle.value,
    value: {
      ENABLED: { type: 'success', label: '启用' },
      DISABLED: { type: 'danger', label: '停用' },
      PENDING: { type: 'warning', label: '待审核' },
      default: { type: 'info', label: '未知' }
    },
    statusProps: ({ row }: { row: UserRow }) => ({
      truncated: true,
      style: { cursor: row.disabled ? 'not-allowed' : 'default' }
    })
  },
  {
    label: '余额',
    prop: 'amount',
    minWidth: 100,
    type: 'number',
    isSuc: true
  }
]);

const linkAndButtonColumn = computed(() => [
  {
    label: '官网链接',
    prop: 'website',
    minWidth: 160,
    type: 'link',
    hrefProp: 'websiteUrl',
    textFormatter: (row: UserRow, raw: string) => raw || row.websiteUrl || '--',
    linkProps: ({ row }: { row: UserRow }) => ({
      type: 'primary',
      underline: true,
      disabled: row.disabled,
      target: '_blank'
    })
  },
  {
    label: '详情',
    prop: 'name',
    minWidth: 120,
    type: 'button',
    text: '查看详情',
    buttonProps: ({ row }: { row: UserRow }) => ({
      type: 'primary',
      link: true,
      disabled: row.disabled
    }),
    onClick({ row }: { row: UserRow }) {
      console.log('查看详情:', row);
      ElMessage.success(`查看详情: ${row.name}`);
    }
  }
]);

const customRenderColumn = computed(() => [
  {
    label: '自定义渲染',
    prop: 'name',
    minWidth: 180,
    render: (props: { row: UserRow; value: any }) =>
      `自定义：${props.value ?? props.row.name ?? '--'}（余额：${props.row.amount}）`
  }
]);

const selection = ref<any[]>([
  {
    id: 1,
    no: 'NO-0001',
    name: '张三',
    amount: -1505,
    createdAt: 1773716740612
  },
  {
    id: 13,
    no: 'NO-0013',
    name: '王五',
    amount: 194,
    createdAt: 1773587140612
  },
  {
    id: 24,
    no: 'NO-0024',
    name: '赵六',
    amount: 4726,
    createdAt: 1773468340612
  }
]);

watch(
  selection,
  newVal => {
    console.log('selection:', newVal);
  },
  {
    immediate: true,
    deep: true
  }
);

const tableData = computed(() => allData.value);

const advancedTableColumn = computed(() => [
  ...basicTableColumn.value,
  ...linkAndButtonColumn.value,
  ...customRenderColumn.value
]);

// 高级示例：排序 / 筛选 / 展开 / 合并统计 / 固定列 / 合并单元格 / 单选 / 分页
interface OrderRow {
  id: number;
  orderNo: string;
  customer: string;
  category: string;
  amount: number;
  createdAt: number;
  group: string;
}

const allOrders = ref<OrderRow[]>([
  {
    id: 1,
    orderNo: 'A-001A-001A-001A-001A-001A-001A-001A-001A-001A-001A-001A-001A-001A-001A-001A-001A-001A-001A-001',
    customer: '小明',
    category: 'A 类',
    amount: 100,
    createdAt: Date.now() - 1000 * 60 * 60,
    group: 'G1'
  },
  {
    id: 2,
    orderNo: 'A-002',
    customer: '小红',
    category: 'A 类',
    amount: 200,
    createdAt: Date.now() - 1000 * 60 * 30,
    group: 'G1'
  },
  {
    id: 3,
    orderNo: 'B-001',
    customer: '小刚',
    category: 'B 类',
    amount: 300,
    createdAt: Date.now() - 1000 * 60 * 10,
    group: 'G2'
  },
  {
    id: 4,
    orderNo: 'B-002',
    customer: '小王',
    category: 'B 类',
    amount: 150,
    createdAt: Date.now() - 1000 * 60 * 5,
    group: 'G2'
  },
  {
    id: 5,
    orderNo: 'C-001',
    customer: '小李',
    category: 'C 类',
    amount: 80,
    createdAt: Date.now(),
    group: 'G3'
  }
]);

const currentPage = ref(1);
const pageSize = ref(3);

const totalOrders = computed(() => allOrders.value.length);
const pagedOrders = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return allOrders.value.slice(start, start + pageSize.value);
});

const advancedFeatureColumns = computed(() => [
  {
    label: '订单号',
    prop: 'orderNo',
    minWidth: 120,
    // fixed: 'left',
    sortable: 'custom'
  },
  {
    label: '客户',
    prop: 'customer',
    minWidth: 120
  },
  {
    label: '分类',
    prop: 'category',
    minWidth: 100,
    filters: [
      { text: 'A 类', value: 'A 类' },
      { text: 'B 类', value: 'B 类' },
      { text: 'C 类', value: 'C 类' }
    ],
    filterMethod(value: string, row: OrderRow) {
      return row.category === value;
    }
  },
  {
    label: '金额',
    prop: 'amount',
    minWidth: 100,
    type: 'number',
    sortable: true,
    isSuc: true
  },
  {
    label: '创建时间',
    prop: 'createdAt',
    minWidth: 180,
    type: 'date'
  },
  {
    label: '分组',
    prop: 'group',
    minWidth: 80
  },
  {
    label: '操作',
    prop: 'operate',
    minWidth: 160,
    type: 'slot',
    headerSlot: true,
    filterIconSlot: true,
    filters: [
      { text: '2016-05-01', value: '2016-05-01' },
      { text: '2016-05-02', value: '2016-05-02' },
      { text: '2016-05-03', value: '2016-05-03' },
      { text: '2016-05-04', value: '2016-05-04' }
    ]
  }
]);

function handleSortChange(payload: any) {
  console.log('排序变更：', payload);
}

function summaryMethod({ columns, data }: { columns: any[]; data: OrderRow[] }) {
  const sums: (string | number)[] = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = '合计';
      return;
    }
    if (column.property === 'amount') {
      const total = data.reduce((acc, item) => acc + Number(item.amount || 0), 0);
      sums[index] = total;
    } else {
      sums[index] = '';
    }
  });
  return sums;
}

function spanMethod({ rowIndex, column }: any) {
  if (column.property === 'group') {
    const rows = allOrders.value;
    const current = rows[rowIndex];
    const prev = rows[rowIndex - 1];
    const next = rows[rowIndex + 1];
    if (prev && prev.group === current.group) {
      return { rowspan: 0, colspan: 0 };
    }
    if (next && next.group === current.group) {
      return { rowspan: 2, colspan: 1 };
    }
  }
  return { rowspan: 1, colspan: 1 };
}

const currentRow = ref<UserRow | null>(null);

function handleCurrentChange(row: UserRow) {
  currentRow.value = row;
}

// 分页示例
interface PageRow {
  id: number;
  no: string;
  name: string;
  amount: number;
  createdAt: number;
}

const pagingData = ref<PageRow[]>(
  Array.from({ length: 120 }, (_, i) => ({
    id: i + 1,
    no: `NO-${String(i + 1).padStart(4, '0')}`,
    name: ['张三', '李四', '王五', '赵六', '钱七'][i % 5],
    amount: Math.round(Math.random() * 10000 - 2000),
    createdAt: Date.now() - i * 1000 * 60 * 60 * 3
  }))
);

const pagingPage = ref(1);
const pagingSize = ref(10);

const pagingTotal = computed(() => pagingData.value.length);

const pagingTableData = computed(() => {
  const start = ((pagingPage.value || 1) - 1) * pagingSize.value;
  return pagingData.value.slice(start, start + pagingSize.value);
});

const pagingColumns = [
  { label: 'ID', prop: 'id', minWidth: 60 },
  { label: '编号', prop: 'no', minWidth: 120 },
  { label: '姓名', prop: 'name', minWidth: 100, sortable: true },
  {
    label: '金额',
    prop: 'amount',
    minWidth: 120,
    type: 'number',
    isSuc: true,
    sortable: true
  },
  { label: '创建时间', prop: 'createdAt', minWidth: 180, type: 'date' }
];

// ─── 测试：Loading 状态 / 空数据变体 ─────────────────────────────────
const loadingToggle = ref(false);
const emptyVariantData = ref<UserRow[]>([...allData.value]);

// ─── 测试：序号列配置变体 ─────────────────────────────────────────────
const indexVariantColumns = [
  { label: '姓名', prop: 'name', minWidth: 120 },
  {
    label: '状态',
    prop: 'status',
    minWidth: 120,
    type: 'status',
    value: {
      ENABLED: { type: 'success', label: '启用' },
      DISABLED: { type: 'danger', label: '停用' },
      PENDING: { type: 'warning', label: '待审核' }
    }
  },
  { label: '余额', prop: 'amount', minWidth: 100, type: 'number', isSuc: true }
];

// ─── 测试：空值占位（labelEmpty / labelEmptyClass + null 数据） ────────
interface SparseRow {
  id: number;
  name?: string | null;
  email?: string | null;
  score?: number | null;
  remark?: string | null;
}
const sparseData = ref<SparseRow[]>([
  { id: 1, name: '张三', email: null, score: 92, remark: null },
  { id: 2, name: null, email: 'li4@example.com', score: null, remark: '备注内容' },
  { id: 3, name: '王五', email: '', score: 0, remark: null }
]);
const sparseColumns = [
  { label: 'ID', prop: 'id', minWidth: 60 },
  { label: '姓名', prop: 'name', minWidth: 120 },
  { label: '邮箱', prop: 'email', minWidth: 200 },
  { label: '分数', prop: 'score', minWidth: 100, type: 'number' },
  { label: '备注', prop: 'remark', minWidth: 160 }
];

// ─── 测试：currentPage 越界修正 ────────────────────────────────────────
const boundaryTotal = ref(100);
const boundaryPage = ref(10); // 初始第10页，共100条/10条每页，合法
const boundarySize = ref(10);
const boundaryData = computed(() => {
  const start = (boundaryPage.value - 1) * boundarySize.value;
  return Array.from({ length: Math.min(boundarySize.value, Math.max(0, boundaryTotal.value - start)) }, (_, i) => ({
    id: start + i + 1,
    name: `记录 ${start + i + 1}`
  }));
});
const boundaryColumns = [
  { label: 'ID', prop: 'id', minWidth: 60 },
  { label: '名称', prop: 'name', minWidth: 160 }
];

// ─── 测试：Expose 方法 + 行事件 ────────────────────────────────────────
const exposeTableRef = ref();
const exposeSelection = ref<UserRow[]>([]);
const rowClickLog = ref('（点击行后显示信息）');
</script>

<template>
  <div class="demo-wrap">
    <h2 class="demo-title">基础表格</h2>
    <div class="status-style-switch">
      <span>状态样式：</span>
      <el-radio-group v-model="statusStyle" size="small">
        <el-radio-button value="default">默认</el-radio-button>
        <el-radio-button value="dot">圆点</el-radio-button>
        <el-radio-button value="follow">跟随</el-radio-button>
      </el-radio-group>
    </div>

    <LSTable :key="statusStyle" :show-pagination="false" :table-column="basicTableColumn" :table-data="tableData" />

    <h2 class="demo-title">链接 / 按钮 / 自定义渲染</h2>
    <LSTable
      :key="statusStyle"
      :show-pagination="false"
      :table-column="advancedTableColumn"
      :table-data="tableData"
      row-key="id"
    />

    <h2 class="demo-title">分页示例（共 120 条，支持切换每页条数）</h2>
    <LSTable
      row-key="id"
      :table-column="pagingColumns"
      :table-data="pagingTableData"
      :total="pagingTotal"
      v-model:current-page="pagingPage"
      v-model:page-size="pagingSize"
      :page-sizes="[10, 20, 50]"
      :show-select="true"
      v-model:selection="selection"
      border
    />

    <h2 class="demo-title">高级功能：排序 / 筛选 / 展开 / 合并 / 单选 / 分页 / 自定义表头 / 自定义列内容 / 自定义筛选图标</h2>
    <LSTable
      row-key="id"
      :radio-column-options="{
        label: '选择'
      }"
      :border="true"
      :table-column="advancedFeatureColumns"
      :table-data="pagedOrders"
      :total="totalOrders"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :show-radio="true"
      show-summary
      :summary-method="summaryMethod"
      :span-method="spanMethod"
      :table-listeners="{ 'sort-change': handleSortChange }"
      :current-row="currentRow"
      @current-change="handleCurrentChange"
    >
      <!-- 表头插槽：operate 列 -->
      <template #operate-header="{ column }">
        <span>自定义表头 · {{ column.label }}</span>
      </template>

      <!-- filter-icon 插槽：operate 列 -->
      <template #operate-filter-icon="{ filterOpened }">
        <span style="color: #409eff">
          {{ filterOpened ? '🔽' : '🔼' }}
        </span>
      </template>

      <!-- 列内容插槽：operate 列 -->
      <template #operate="{ row }">
        <el-button link type="primary" @click="ElMessage.info(`查看订单：${row.orderNo}`)">查看</el-button>
        <el-button link type="danger" @click="ElMessage.warning(`删除订单：${row.orderNo}`)">删除</el-button>
      </template>

      <!-- 展开行插槽 -->
      <template #expand="{ row }">
        <div class="expand-content">
          <div>订单号：{{ row.orderNo }}</div>
          <div>客户：{{ row.customer }}</div>
          <div>金额：{{ row.amount }}</div>
        </div>
      </template>

      <!-- 追加插槽 -->
      <template #append>
        <div style="padding: 16px">追加内容</div>
      </template>

      <el-table-column label="操作" width="160">
        <template #default="{ row }">
          <el-button link type="primary" @click="ElMessage.info(`查看订单：${row.orderNo}`)">查看</el-button>
        </template>
      </el-table-column>
    </LSTable>

    <!-- ────────── Loading 状态 ────────── -->
    <h2 class="demo-title">Loading 状态</h2>
    <div class="test-toolbar">
      <el-button size="small" @click="loadingToggle = !loadingToggle">
        {{ loadingToggle ? '关闭 Loading' : '开启 Loading' }}
      </el-button>
    </div>
    <LSTable :loading="loadingToggle" :show-pagination="false" :table-column="basicTableColumn" :table-data="tableData" />

    <!-- ────────── 空数据变体 ────────── -->
    <h2 class="demo-title">空数据变体</h2>
    <div class="test-toolbar">
      <el-button size="small" @click="emptyVariantData = [...allData]">恢复数据</el-button>
      <el-button size="small" @click="emptyVariantData = []">清空数据（默认空状态）</el-button>
    </div>

    <!-- 默认空状态文案 -->
    <p class="test-label">① 默认空状态（emptyLabel 未配置）</p>
    <LSTable :show-pagination="false" :table-column="basicTableColumn" :table-data="emptyVariantData" />

    <!-- 自定义 emptyLabel -->
    <p class="test-label">② 自定义 emptyLabel="该列表暂时没有数据哦～"</p>
    <LSTable :show-pagination="false" :table-column="basicTableColumn" :table-data="[]" empty-label="该列表暂时没有数据哦～" />

    <!-- 自定义 empty 插槽 -->
    <p class="test-label">③ 自定义 #empty 插槽</p>
    <LSTable :show-pagination="false" :table-column="basicTableColumn" :table-data="[]">
      <template #empty>
        <div class="custom-empty">
          <span style="font-size: 32px">📭</span>
          <p>暂无相关记录，请调整筛选条件后重试</p>
        </div>
      </template>
    </LSTable>

    <!-- showEmpty=false -->
    <p class="test-label">④ showEmpty=false（不渲染空状态占位）</p>
    <LSTable :show-pagination="false" :table-column="basicTableColumn" :table-data="[]" :show-empty="false" />

    <!-- ────────── 序号列配置变体 ────────── -->
    <h2 class="demo-title">序号列配置变体</h2>

    <p class="test-label">① showTableIndex=false（隐藏序号列）</p>
    <LSTable :show-pagination="false" :show-table-index="false" :table-column="indexVariantColumns" :table-data="tableData" />

    <p class="test-label">② tableIndexLabel="#" + tableIndexStart=true（从 0 开始）</p>
    <LSTable
      :show-pagination="false"
      table-index-label="#"
      :table-index-start="true"
      :table-column="indexVariantColumns"
      :table-data="tableData"
    />

    <p class="test-label">③ tableIndexInPage=true（单页内从 1 累加，不受当前页偏移影响）</p>
    <LSTable :show-pagination="false" :table-index-in-page="true" :table-column="indexVariantColumns" :table-data="tableData" />

    <p class="test-label">④ tableIndexfixed=true（序号列固定左侧）</p>
    <LSTable :show-pagination="false" :table-index-fixed="true" :table-column="indexVariantColumns" :table-data="tableData" />

    <!-- ────────── 空值占位 ────────── -->
    <h2 class="demo-title">空值占位（labelEmpty / labelEmptyClass）</h2>

    <p class="test-label">① 默认 labelEmpty="--"（null / 空字符串均触发）</p>
    <LSTable :show-pagination="false" :table-column="sparseColumns" :table-data="sparseData" />

    <p class="test-label">② 自定义 labelEmpty="N/A" + labelEmptyClass="text-muted"</p>
    <LSTable
      :show-pagination="false"
      :table-column="sparseColumns"
      :table-data="sparseData"
      label-empty="N/A"
      label-empty-class="text-muted"
    />

    <!-- ────────── currentPage 越界修正 ────────── -->
    <h2 class="demo-title">currentPage 越界修正</h2>
    <p class="test-label">
      当前 total={{ boundaryTotal }}，pageSize={{ boundarySize }}，maxPage={{ Math.ceil(boundaryTotal / boundarySize) }}，传入
      currentPage={{ boundaryPage }}
    </p>
    <div class="test-toolbar">
      <el-button
        size="small"
        @click="
          boundaryTotal = 100;
          boundaryPage = 10;
        "
        >重置（100条/第10页）</el-button
      >
      <el-button size="small" type="warning" @click="boundaryTotal = 30">
        减少 total 至 30（maxPage=3，当前第10页 → 自动校正至第3页）
      </el-button>
      <el-button size="small" type="danger" @click="boundaryTotal = 0">
        total=0（无数据，currentPage 静默重置为 1，不 emit）
      </el-button>
    </div>
    <LSTable
      row-key="id"
      :table-column="boundaryColumns"
      :table-data="boundaryData"
      :total="boundaryTotal"
      v-model:current-page="boundaryPage"
      v-model:page-size="boundarySize"
      :page-sizes="[10, 20]"
      border
    />

    <!-- ────────── Expose 方法 + 行事件 ────────── -->
    <h2 class="demo-title">Expose 方法调用 + 行事件（row-click / cell-click）</h2>
    <p class="test-label">通过 ref 访问 TableRef 调用 el-table 原生方法；@row-click 通过 attrs 直接绑定</p>
    <div class="test-toolbar">
      <el-button size="small" type="primary" @click="exposeTableRef?.TableRef?.clearSelection()">clearSelection</el-button>
      <el-button size="small" @click="exposeTableRef?.TableRef?.toggleAllSelection()">toggleAllSelection</el-button>
      <el-button size="small" @click="exposeTableRef?.TableRef?.doLayout()">doLayout</el-button>
      <el-button size="small" @click="exposeTableRef?.TableRef?.clearSort()">clearSort</el-button>
    </div>
    <p class="test-label" style="color: #409eff">行点击日志：{{ rowClickLog }}</p>
    <LSTable
      ref="exposeTableRef"
      row-key="id"
      :show-pagination="false"
      :show-select="true"
      :table-column="basicTableColumn"
      :table-data="tableData"
      v-model:selection="exposeSelection"
      @row-click="(row: UserRow) => (rowClickLog = `点击了行 id=${row.id}，姓名：${row.name}`)"
      @cell-click="(row: UserRow, col: any) => ElMessage.info(`单元格点击：${col.label} = ${(row as any)[col.property]}`)"
    />
  </div>
</template>

<style lang="scss" scoped>
.demo-wrap {
  padding: 16px;
}
.status-style-switch {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
}
.demo-title {
  margin: 16px 0 8px;
  font-size: 16px;
  font-weight: 600;
}
.expand-content {
  padding: 8px 16px;
  font-size: 13px;
  line-height: 1.6;
}
.test-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}
.test-label {
  margin: 6px 0;
  font-size: 13px;
  color: #606266;
}
.custom-empty {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 16px 0;
  font-size: 14px;
  color: #909399;
}
:global(.text-muted) {
  font-style: italic;
  color: #c0c4cc;
}
</style>
