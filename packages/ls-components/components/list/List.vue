<script setup lang="ts" name="LSList">
import useRouterHook from '@cpo/_hooks/useRouterHook'
import useTableListHook from '@cpo/_hooks/useTableListHook'
import LSForm from '@cpo/form/Form.vue'
import LSTable from '@cpo/table/Table.vue'
import { ElButton, ElDivider, ElMessage, ElMessageBox, ElSpace, ElSwitch } from 'element-plus'
/**
 * @summary 列表页面组件 - 标准列表页面模板
 *
 * 标准列表页组合组件，集成查询表单（行内）、数据表格与分页，内置新增/详情/编辑/删除与开关等常见操作的可配置支持。
 *
 * 常用属性（与 props 定义保持一致，仅摘录要点）：
 * @attr {Function} listApi            列表查询 API
 * @attr {Function} dealParams         查询参数处理函数
 * @attr {Function} dealData           返回数据处理函数
 * @attr {object}   listHookConfig     useTableListHook 其他配置
 * @attr {Function} delApi             删除 API
 * @attr {Function} dealDelParams      删除参数处理
 * @attr {string | Function} delMessage  删除成功提示语/函数
 * @attr {Function} switchApi          开关 API
 * @attr {Function} dealSwitchParams   开关参数处理
 * @attr {boolean}  showForm=true      是否显示表单
 * @attr {string}   formClass          表单区附加类名
 * @attr {object}   formData           表单数据对象
 * @attr {Array}    formItems          表单项配置
 * @attr {object}   formAttrs          表单透传属性
 * @attr {Function} queryFn            自定义查询事件（覆盖默认）
 * @attr {Function} resetFn            自定义重置事件（覆盖默认）
 * @attr {Array}    tableColumn        表格列配置
 * @attr {string}   tableRowKey='id'   表格行 key
 * @attr {object}   tableAttrs         表格透传属性
 * @attr {object}   tableListeners     表格事件监听
 * @attr {boolean}  showOperate=true   是否显示“操作按钮展示区”
 * @attr {boolean}  showOperateDivider=true 操作区是否显示分割线
 * @attr {string}   operateClass       操作区附加类名
 * @attr {boolean}  showAdd=true       是否显示新增按钮
 * @attr {boolean}  disabledAddBtn     新增按钮是否禁用
 * @attr {string}   addBtnText='添加'  新增按钮文案
 * @attr {object}   addBtnAttrs        新增按钮透传属性
 * @attr {Function} addFn              新增点击事件（覆盖默认）
 * @attr {boolean}  showTableSwitch=false 是否显示表格内开关列
 * @attr {string}   switchProp='status'   开关字段名
 * @attr {object}   tableSwitchColumn  开关列配置
 * @attr {object}   tableSwitchAttrs   开关控件透传属性
 * @attr {object}   tableSwitchPopAttrs 开关确认弹窗属性
 * @attr {string}   tableSwitchPopTxt='请问是否关闭？' 开关确认弹窗文案
 * @attr {boolean | Function} disabledTableSwitch 是否禁用开关
 * @attr {boolean}  showTableOperate=true 是否显示表格操作列
 * @attr {object}   tableOperateColumn 表格操作列配置
 * @attr {Function} tableDetailFn      自定义“查看”事件（覆盖默认）
 * @attr {Function} tableEditFn        自定义“编辑”事件（覆盖默认）
 * @attr {Function} tableDelFn         自定义“删除”事件（覆盖默认）
 * @attr {boolean | Function} showTableDetail   “查看”是否显示
 * @attr {boolean | Function} disabledTableDetail “查看”是否禁用
 * @attr {boolean | Function} showTableEdit     “编辑”是否显示
 * @attr {boolean | Function} disabledTableEdit “编辑”是否禁用
 * @attr {boolean | Function} showTableDel      “删除”是否显示
 * @attr {boolean | Function} disabledTableDel  “删除”是否禁用
 * @attr {object}   tableDelPopAttrs   删除确认弹窗属性
 * @attr {string}   addRoutePath       新增页路由
 * @attr {string}   detailRoutePath    详情页路由
 * @attr {string}   editRoutePath      编辑页路由
 * @attr {string | Function} tableDetailText='查看'  查看按钮文案/函数
 * @attr {string | Function} tbleEditText='编辑'    编辑按钮文案/函数
 * @attr {string | Function} tableDelText='删除'     删除按钮文案/函数
 * @attr {string | Function} tableDetailType='primary' 查看按钮类型/函数
 * @attr {string | Function} tableEditType='primary'   编辑按钮类型/函数
 * @attr {string | Function} tableDelType='danger'     删除按钮类型/函数
 * @attr {object}   tableDetailBtnAttrs 查看按钮透传属性
 * @attr {object}   tableEditBtnAttrs   编辑按钮透传属性
 * @attr {object}   tableDelBtnAttrs    删除按钮透传属性
 * @attr {object}   skeletonAttrs       骨架屏属性
 * @attr {boolean}  showSkeleton=true   是否显示骨架屏
 * @attr {string | Function} popconfirmTxt 删除确认弹窗提示语/函数
 *
 * 动态插槽（名称以字段名为前缀）：
 * @slot [field]-form-slot    表单项插槽（与字段匹配）
 * @slot [field]-table-slot   表格列插槽（与字段匹配）
 *
 * 通用插槽：
 * @slot form-append            表单区域追加内容
 * @slot operate                自定义整块操作区
 * @slot operate-prepend        操作区前置内容
 * @slot operate-append         操作区后置内容
 * @slot table-operate-prepend  表格操作列按钮前置内容
 * @slot table-operate-append   表格操作列按钮后置内容
 * @slot table-append           表格区域追加内容
 *
 * 事件：
 * @event submitForm(formData)      提交查询
 * @event resetForm(formData)       重置查询
 * @event delSuccess(row,res)       删除成功
 * @event switchSuccess(row,status) 开关操作成功
 * @event handleLoading(loading)    加载状态变化
 * @event handleCurrentPage(page)   当前页变化
 * @event handlePageSize(size)      每页条数变化
 *
 * @example
 * <LSList :formItems="formItems" :tableColumn="tableColumn" :listApi="getListApi" />
 */
// 公共列表页面
import { h } from 'vue'
import { lsListProps } from './types'

const props: any = defineProps(lsListProps)

const emits = defineEmits<{
  // 表单提交事件
  submitForm: [formData: any]
  // 表单重置事件
  resetForm: [data: any]
  // 删除成功后的回调
  delSuccess: [row: any, res: any]
  // 开关操作成功后的回调
  switchSuccess: [row: any, status: any]
  // 加载状态变化事件
  handleLoading: [loading: boolean]
  // 当前页变化事件
  handleCurrentPage: [currentPage: number]
  // 每页条数变化事件
  handlePageSize: [pageSize: number]
}>()

const { jumpRouteCom, currentRouter } = useRouterHook()

// 获取插槽
const slots: any = useSlots()

const FormRef = ref()
const TableRef = ref()

// 获取表单插槽
const formSlots = computed(() => {
  return Object.keys(slots).filter(slotName => slotName.toString().endsWith('-form-slot'))
})

// 获取表格插槽
const tableSlots = computed(() => {
  return Object.keys(slots).filter(slotName => slotName.toString().endsWith('-table-slot'))
})

// 获取插槽名称
function getSlotName(slotName: any, isForm: boolean = false) {
  if (slotName) {
    const index = slotName.toString().lastIndexOf(`${isForm ? '-form-slot' : '-table-slot'}`)

    return index !== -1 ? slotName.toString().slice(0, index) : slotName
  }

  return ''
}

// 表格数据
const {
  isFirst,
  loading,
  tableData,
  total,
  pageSize,
  currentPage,
  handleReset,
  loadData,
  handleCurrentPageChange,
  handleSizeChange,
} = useTableListHook(props.listApi, props.formData, {
  dealData: props?.dealData,
  dealParams: props?.dealParams,
  ...props?.listHookConfig,
})

watch(loading, (newVal: any) => {
  emits('handleLoading', newVal)
})

watch(currentPage, (newVal: any) => {
  emits('handleCurrentPage', newVal)
})

watch(pageSize, (newVal: any) => {
  emits('handlePageSize', newVal)
})

// 查询
function submitForm(val: any) {
  handleCurrentPageChange(1, false)
  emits('submitForm', val)

  if (props?.queryFn) {
    props.queryFn(val)
  }
  else {
    loadData()
  }
}

// 重置
function resetForm(val: any) {
  console.warn('resetForm', val)
  emits('resetForm', val)

  if (props?.resetFn) {
    props.resetFn(val)
  }
  else {
    handleReset()
  }
}

const routePath = computed(() => {
  return currentRouter ? currentRouter.value.path : ''
})

// 添加
function onAdd() {
  if (props?.addFn) {
    props.addFn()
  }
  else {
    jumpRouteCom(
      {
        path: props?.addRoutePath ? props.addRoutePath : `${routePath.value}/add`,
      },
      1,
    )
  }
}

// 查看
function onDetail(id: number, row: any) {
  if (props?.tableDetailFn) {
    props.tableDetailFn(row)
  }
  else {
    jumpRouteCom(
      {
        path: `${props?.detailRoutePath ? props.detailRoutePath : `${routePath.value}/detail`}/${id}`,
      },
      1,
    )
  }
}

// 编辑
function onEdit(id: number, row: any) {
  if (props?.tableEditFn) {
    props.tableEditFn(row)
  }
  else {
    jumpRouteCom(
      {
        path: `${props?.editRoutePath ? props.editRoutePath : `${routePath.value}/edit`}/${id}`,
      },
      1,
    )
  }
}

const delId = ref<number | undefined>(undefined)
const delLoading = ref(false)

// 删除
function onDel(id: any, row: any) {
  delId.value = id

  if (props?.tableDelFn) {
    props.tableDelFn(row, (loading: boolean) => {
      delLoading.value = loading
    })
  }
  else {
    if (props.delApi) {
      delLoading.value = true

      let params = id

      if (props?.dealDelParams) {
        params = props.dealDelParams(row)
      }

      props
        .delApi(params)
        .then(() => {
          const msg = getTableDelMessage(row) || `${getTableDelText(row)}成功`
          ElMessage.success(msg)
          loadData()
          emits('delSuccess', row, true)
        })
        .catch((err: any) => {
          console.warn(err)
        })
        .finally(() => {
          delLoading.value = false
        })
    }
  }
}

// 启用 停用
const switchId = ref()
const switchLoading = ref(false)

function switchBeforeChange(id: number, status: boolean | number, row: any): Promise<boolean> {
  switchId.value = id

  const onSwitch = (resolve: (value: boolean | PromiseLike<boolean>) => void, reject: any) => {
    if (props.switchApi) {
      switchLoading.value = true
      let params = id

      if (props?.dealSwitchParams) {
        params = props.dealSwitchParams(row)
      }
      props
        .switchApi(params)
        .then(() => {
          loadData(false)
          resolve(true)
          emits('switchSuccess', row, status)
        })
        .catch(() => {
          reject(new Error('Error'))
        })
        .finally(() => {
          switchLoading.value = false
        })
    }
    else {
      reject(new Error('Error'))
    }
  }

  return new Promise((resolve, reject) => {
    if (status) {
      ElMessageBox.confirm(`<strong class="text-14px">${props.tableSwitchPopTxt || '请问是否关闭？'}</strong>`, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        dangerouslyUseHTMLString: true,
        customStyle: {
          width: '240px',
        },
        ...props.tableSwitchPopAttrs,
      })
        .then(() => {
          onSwitch(resolve, reject)
        })
        .catch(() => {
          reject(new Error('Error'))
        })
    }
    else {
      onSwitch(resolve, reject)
    }
  })
}

// 表格上的开启开关禁用规则
function disabledTableSwitch(row: any) {
  let disabled: boolean = false

  if (props?.disabledTableSwitch) {
    if (typeof props.disabledTableSwitch === 'boolean') {
      disabled = props.disabledTableSwitch
    }
    else if (typeof props.disabledTableSwitch === 'function') {
      disabled = props.disabledTableSwitch(row)
    }
  }

  return !!disabled
}

// 表格查看按钮的文案
function getTableDetailText(row: any) {
  if (props?.tableDetailText) {
    if (typeof props.tableDetailText === 'string') {
      return props.tableDetailText
    }
    else if (typeof props.tableDetailText === 'function') {
      return props.tableDetailText(row)
    }
  }

  return '查看'
}

// 表格查看按钮的显示规则
function showTableDetail(row: any) {
  let show: boolean = false

  if (props?.showTableDetail) {
    if (typeof props.showTableDetail === 'boolean') {
      show = props.showTableDetail
    }
    else if (typeof props.showTableDetail === 'function') {
      show = props.showTableDetail(row)
    }
  }

  return !!show
}

// 表格查看按钮的禁用规则
function disabledTableDetail(row: any) {
  let disabled: boolean = false

  if (props?.disabledTableDetail) {
    if (typeof props.disabledTableDetail === 'boolean') {
      disabled = props.disabledTableDetail
    }
    else if (typeof props.disabledTableDetail === 'function') {
      disabled = props.disabledTableDetail(row)
    }
  }

  return !!disabled
}

// 表格编辑按钮的文案
function getTableEditText(row: any) {
  if (props?.tableEditText) {
    if (typeof props.tableEditText === 'string') {
      return props.tableEditText
    }
    else if (typeof props.tableEditText === 'function') {
      return props.tableEditText(row)
    }
  }

  return '编辑'
}

// 表格编辑按钮的显示规则
function showTableEdit(row: any) {
  let show: boolean = false

  if (props?.showTableEdit) {
    if (typeof props.showTableEdit === 'boolean') {
      show = props.showTableEdit
    }
    else if (typeof props.showTableEdit === 'function') {
      show = props.showTableEdit(row)
    }
  }

  return !!show
}

// 表格编辑按钮的禁用规则
function disabledTableEdit(row: any) {
  let disabled: boolean = false

  if (props?.disabledTableEdit) {
    if (typeof props.disabledTableEdit === 'boolean') {
      disabled = props.disabledTableEdit
    }
    else if (typeof props.disabledTableEdit === 'function') {
      disabled = props.disabledTableEdit(row)
    }
  }

  return !!disabled
}

// 表格删除按钮的文案
function getTableDelText(row: any) {
  if (props?.tableDelText) {
    if (typeof props.tableDelText === 'string') {
      return props.tableDelText
    }
    else if (typeof props.tableDelText === 'function') {
      return props.tableDelText(row)
    }
  }

  return '删除'
}

// 表格删除成功提示文案
function getTableDelMessage(row: any) {
  if (props?.delMessage) {
    if (typeof props.delMessage === 'string') {
      return props.delMessage
    }
    else if (typeof props.delMessage === 'function') {
      return props.delMessage(row)
    }
  }

  return ''
}

// 表格删除按钮的显示规则
function showTableDel(row: any) {
  let show: boolean = false

  if (props?.showTableDel) {
    if (typeof props.showTableDel === 'boolean') {
      show = props.showTableDel
    }
    else if (typeof props.showTableDel === 'function') {
      show = props.showTableDel(row)
    }
  }

  return !!show
}

// 表格删除按钮的禁用规则
function disabledTableDel(row: any) {
  let disabled: boolean = false

  if (props?.disabledTableDel) {
    if (typeof props.disabledTableDel === 'boolean') {
      disabled = props.disabledTableDel
    }
    else if (typeof props.disabledTableDel === 'function') {
      disabled = props.disabledTableDel(row)
    }
  }

  return !!disabled
}

// 表格删除按钮的弹窗文案
function getPopconfirmTxt(row: any) {
  if (props?.popconfirmTxt) {
    if (typeof props.popconfirmTxt === 'string') {
      return props.popconfirmTxt
    }
    else if (typeof props.popconfirmTxt === 'function') {
      return props.popconfirmTxt(row)
    }
  }

  return `是否${getTableDelText(row)}当前行数据？`
}

// 表格操作列按钮的弹窗文案
function getTableBtnType(key: string, row: any) {
  const val: any = props[key]

  if (val) {
    if (typeof val === 'string') {
      return val
    }
    else if (typeof val === 'function') {
      return val(row)
    }
  }

  return ''
}

const spacer = h(ElDivider, { direction: 'vertical' })

// 是否隐藏骨架屏
const hideSkeleton = computed(() => {
  let show = props.showSkeleton

  if (show) {
    return !isFirst.value
  }

  return true
})

defineExpose({
  loadData,
  handleReset,
  setCurrentPage: handleCurrentPageChange,
  setPageSize: handleSizeChange,
  isFirst,
  loading,
  routePath,
  currentPage,
  pageSize,
  total,
  FormRef,
  TableRef,
})
</script>

<template>
  <div v-if="hideSkeleton" class="animate_fadeIn transition-all-300 ls-list-wrap">
    <LSForm
      v-if="showForm"
      ref="FormRef"
      class="mb-6px ls-form-cpo"
      label-position="top"
      :class="formClass"
      :show-btn-loading="false"
      :colon="false"
      :inline="true"
      :form-data="formData"
      :form-items="formItems"
      :loading="loading"
      confirm-text="查询"
      v-bind="formAttrs"
      @submit="submitForm"
      @reset="resetForm"
    >
      <template #default="scoope: any">
        <slot name="form-append" v-bind="scoope" />
      </template>

      <template v-for="slotName in formSlots" :key="slotName" #[getSlotName(slotName,true)]="scoope: any">
        <slot :name="slotName" v-bind="scoope" />
      </template>
    </LSForm>

    <template v-if="showOperate">
      <!-- 操作按钮区域 -->
      <slot v-if="$slots.operate" name="operate" />

      <template v-else>
        <el-divider v-if="showOperateDivider" border-style="dashed" />
        <div class="mt-24px flex items-center justify-start" :class="operateClass">
          <slot name="operate-prepend" />

          <el-button v-if="showAdd" type="primary" :disabled="loading || disabledAddBtn" v-bind="addBtnAttrs" @click="onAdd">
            {{ addBtnText }}
          </el-button>

          <slot name="operate-append" />
        </div>
      </template>
    </template>

    <LSTable
      ref="TableRef"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      class="ls-table-cpo"
      :class="[showOperate ? 'mt-16px' : 'mt-24px']"
      :show-overflow-tooltip="true"
      :loading="loading"
      :total="total"
      :table-data="tableData"
      :table-column="tableColumn"
      v-bind="tableAttrs"
      v-on="tableListeners || {}"
    >
      <!-- 开关列 -->
      <el-table-column v-if="showTableSwitch" :prop="switchProp" label="是否开启" width="100" v-bind="tableSwitchColumn">
        <template #default="{ row }">
          <el-switch
            class="ls-list-table__switch"
            :model-value="row[switchProp] ? 1 : 0"
            :active-value="1"
            :inactive-value="0"
            :loading="switchLoading && row[tableRowKey] === switchId"
            :before-change="() => switchBeforeChange(row[tableRowKey], row[switchProp], row)"
            :disabled="disabledTableSwitch(row)"
            v-bind="tableSwitchAttrs"
          />
        </template>
      </el-table-column>

      <!-- 操作列 -->
      <el-table-column
        v-if="showTableOperate"
        fixed="right"
        prop="operate"
        label="操作"
        :show-overflow-tooltip="false"
        v-bind="tableOperateColumn"
      >
        <template #default="{ row }">
          <div class="flex items-center">
            <el-space :size="0" :spacer="spacer">
              <slot name="table-operate-prepend" :row="row" />

              <el-button
                v-if="showTableDetail(row)"
                :disabled="disabledTableDetail(row)"
                link
                :type="getTableBtnType('tableDetailType', row) || 'primary'"
                v-bind="tableDetailBtnAttrs"
                @click="onDetail(row[tableRowKey], row)"
              >
                {{ row.tableDetailText || getTableDetailText(row) }}
              </el-button>

              <el-button
                v-if="showTableEdit(row)"
                :disabled="disabledTableEdit(row)"
                link
                :type="getTableBtnType('tableEditType', row) || 'primary'"
                v-bind="tableEditBtnAttrs"
                @click="onEdit(row[tableRowKey], row)"
              >
                {{ row.tableEditText || getTableEditText(row) }}
              </el-button>

              <el-popconfirm
                v-if="showTableDel(row)"
                hide-icon
                placement="top"
                width="180"
                confirm-button-text="确认"
                cancel-button-text="取消"
                :title="row.popconfirmTxt || getPopconfirmTxt(row)"
                v-bind="tableDelPopAttrs"
                @confirm="onDel(row[tableRowKey], row)"
              >
                <template #reference>
                  <el-button
                    link
                    :type="getTableBtnType('tableDelType', row) || 'danger'"
                    :disabled="delLoading || disabledTableDel(row)"
                    :loading="delLoading && delId === row[tableRowKey]"
                    v-bind="tableDelBtnAttrs"
                  >
                    {{ delLoading && delId === row[tableRowKey] ? '' : row.tableDelText || getTableDelText(row) }}
                  </el-button>
                </template>
              </el-popconfirm>

              <slot name="table-operate-append" :row="row" />
            </el-space>
          </div>
        </template>
      </el-table-column>

      <slot name="table-append" :table-data="tableData" />

      <!-- 表格插槽 -->
      <template v-for="slotName in tableSlots" :key="slotName" #[getSlotName(slotName,false)]="scoope: any">
        <slot :name="slotName" v-bind="scoope" />
      </template>
    </LSTable>
  </div>
  <el-skeleton v-else :rows="5" animated v-bind="skeletonAttrs" />
</template>

<style scoped lang="scss">
:deep(.el-divider--horizontal) {
  margin: 0;
}
:deep(.mt-16px) {
  margin-top: 16px;
}
:deep(.mt-24px) {
  margin-top: 24px;
}
.ls-table-cpo {
  transition: all 3s ease-out;
}
.mt-16px {
  margin-top: 16px;
}
.mt-24px {
  margin-top: 24px;
}
.mb-6px {
  margin-bottom: 6px;
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.items-end {
  align-items: end;
}
.justify-start {
  justify-content: start;
}
.justify-center {
  justify-content: center;
}
.ls-list-table__switch {
  height: 18px;
}
.transition-all-300 {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-property: all;
}
.animate_fadeIn {
  animation-name: fadein;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
