---
outline: deep
---

# Tree 权限树

::: warning 基于el-tree二次封装，保留原属性和方法。
:::

## 功能介绍

LSTree 组件是对 Element Plus Tree 组件的二次封装，提供了以下增强功能：

- 支持全选/取消全选功能
- 支持水平/垂直展示方向
- 支持自定义数据结构映射
- 支持节点前缀过滤
- 支持复选框状态管理
- 支持与表单集成
- 保留了 Element Plus Tree 的所有原有功能

## 使用方式

### 基本使用

<LSButton type="primary" @click="getChecked">获取已选项</LSButton>

<div>
所有已选项：{{ checkedIds }}
</div>

<ClientOnly>
<LSTree
  ref="tree1Ref"
  :tree-data="treeData"
  :is-check-all="true"
  :show-checkbox="true"
  :default-checked-keys="checkedPermissionIds"
/>
<LSTree
  :tree-data="treeData"
  :is-check-all="false"
  :show-checkbox="true"
  :default-checked-keys="checkedPermissionIds"
/>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';

//获取已选项
const tree1Ref = ref();
const checkedIds = ref([]);
function getChecked() {
  checkedIds.value = tree1Ref.value.lsTreeRef.getCheckedNodes();
}

// 权限树数据列表
const treeData = ref([
  {
    id: 20100,
    name: '凭证管理',
    permission: 'm1',
    parentId: 0,
    children: [
      {
        id: 20101,
        name: '新增凭证',
        permission: 'm11',
        parentId: 20100
      },
      {
        id: 20125,
        name: '凭证模板',
        permission: 'm15',
        parentId: 20100
      },
      {
        id: 20102,
        name: '列表',
        permission: 'm12',
        parentId: 20100,
        children: [
          {
            id: 20103,
            name: '查看详情',
            permission: 'm121',
            parentId: 20102,
            status: 1
          },
          {
            id: 20104,
            name: '编辑',
            permission: 'm122',
            parentId: 20102,
            children: [
              {
                id: 20105,
                name: '凭证详情接口',
                permission: 'Im1221',
                parentId: 20104
              },
              {
                id: 20106,
                name: '修改凭证接口',
                permission: 'Im1222',
                parentId: 20104
              },
              {
                id: 20124,
                name: '查看详情接口',
                permission: 'Im1223',
                parentId: 20104
              }
            ]
          },
          {
            id: 20107,
            name: '删除',
            permission: 'm123',
            parentId: 20102
          },
          {
            id: 20108,
            name: '服务端订阅',
            type: 2,
            permission: 'm124',
            parentId: 20102,
            children: [
              {
                id: 20109,
                name: '订阅列表',
                permission: 'm1241',
                parentId: 20108,
                children: [
                  {
                    id: 20110,
                    name: '新增订阅',
                    permission: 'm12411',
                    parentId: 20109,
                    children: [
                      {
                        id: 20111,
                        name: '消费组列表接口',
                        permission: 'Im124111',
                        parentId: 20110
                      },
                      {
                        id: 20112,
                        name: '产品列表接口',
                        permission: 'Im124112',
                        parentId: 20110
                      },
                      {
                        id: 20113,
                        name: '新增接口',
                        permission: 'Im124113',
                        parentId: 20110
                      }
                    ]
                  },
                  {
                    id: 20114,
                    name: '列表',
                    permission: 'm12412',
                    parentId: 20109,
                    children: [
                      {
                        id: 20115,
                        name: '编辑',
                        permission: 'm124121',
                        parentId: 20114,
                        children: [
                          {
                            id: 20116,
                            name: '消费组列表接口',
                            permission: 'Im1241211',
                            parentId: 20115
                          },
                          {
                            id: 20117,
                            name: '产品列表接口',
                            permission: 'Im1241212',
                            parentId: 20115
                          },
                          {
                            id: 20118,
                            name: '详情接口',
                            permission: 'Im1241213',
                            parentId: 20115
                          },
                          {
                            id: 20119,
                            name: '保存接口',
                            permission: 'Im1241214',
                            parentId: 20115
                          }
                        ]
                      },
                      {
                        id: 20120,
                        name: '删除',
                        permission: 'm124122',
                        parentId: 20114
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]);

// 当前用户角色拥有的权限数据结构，具体根据后端返回数据
const roleData = ref([
  {
    id: 20428,
    permissionId: 20100
  },
  {
    id: 20432,
    permissionId: 20101
  },
  {
    id: 20436,
    permissionId: 20102
  },
  {
    id: 20440,
    permissionId: 20103
  },
  {
    id: 20444,
    permissionId: 20104
  },
  {
    id: 20448,
    permissionId: 20105
  },
  {
    id: 20452,
    permissionId: 20106
  },
  {
    id: 20456,
    permissionId: 20107
  },
  {
    id: 20460,
    permissionId: 20108
  },
  {
    id: 20464,
    permissionId: 20109
  },
  {
    id: 20468,
    permissionId: 20110
  }
]);

// 当前用户拥有的权限数据转换
const checkedPermissionIds = getTreeCheckedData((roleData.value || []).map(item => item.permissionId));

function isEmpty(val) {
  if (val === null) {
    return true;
  }
  const type = typeof val;
  if (type === 'undefined') {
    return true;
  }
  if (type === 'string') {
    val = val.replace(/^\s*|\s*$/g, '');
    if (val === '') {
      return true;
    }
  }

  if (type === 'number') {
    if (isNaN(val)) {
      return true;
    }
  }
  if (type === 'object') {
    if (Object.keys(val).length === 0) {
      return true;
    }
  }
  if (type === 'boolean') {
    return false;
  }
  return false;
}

// 筛选去掉父级id
function getTreeCheckedData(ids) {
  let newIds = ids || [];
  if (!isEmpty(treeData.value) && !isEmpty(ids)) {
    const lunData = list => {
      if (!isEmpty(list)) {
        list.forEach(item => {
          const { id, children } = item;
          if (!isEmpty(children)) {
            let index = newIds.indexOf(id);
            if (index >= 0) {
              // 有子节点 并且 子节点有勾选 去掉当前父节点id
              newIds.splice(index, 1);
            }
            lunData(children);
          }
        });
      }
    };
    lunData(treeData.value);
  }
  return newIds;
}
```

```html
<LSTree :tree-data="treeData" :is-check-all="true" :show-checkbox="true" :default-checked-keys="checkedPermissionIds" />

<LSTree :tree-data="treeData" :is-check-all="false" :show-checkbox="true" :default-checked-keys="checkedPermissionIds" />
```

:::

### 水平展示

<ClientOnly>
<LSTree
  :tree-data="horizontalTreeData"
  :is-check-all="true"
  :show-checkbox="true"
  :default-checked-keys="checkedPermissionIds"
  style="--ls-tree-node-spacing: 5px;"
/>
</ClientOnly>

```html
<LSTree
  :tree-data="horizontalTreeData"
  :is-check-all="true"
  :show-checkbox="true"
  :default-checked-keys="checkedPermissionIds"
  style="--ls-tree-node-spacing: 5px;"
/>
```

::: details 水平展示说明

组件通过在数据结构中设置 `isPenultimate: true` 属性来实现水平布局。当节点的 `isPenultimate` 属性为 `true` 时，组件会自动为其添加 `is-penultimate` 类，使其子节点水平排列。

### 实现方式

1. **数据结构设置**：在需要水平展示子节点的父节点上添加 `isPenultimate: true` 属性

```js
// 水平展示示例数据
const horizontalTreeData = ref([
  {
    id: 20100,
    name: '凭证管理',
    permission: 'm1',
    parentId: 0,
    isPenultimate: true, // 开启水平布局
    children: [
      {
        id: 20101,
        name: '新增凭证',
        permission: 'm11',
        parentId: 20100
      },
      {
        id: 20125,
        name: '凭证模板',
        permission: 'm15',
        parentId: 20100
      },
      {
        id: 20102,
        name: '列表',
        permission: 'm12',
        parentId: 20100
      }
    ]
  },
  {
    id: 20200,
    name: '测试权限',
    permission: 'm2',
    parentId: 0,
    isPenultimate: true, // 开启水平布局
    children: [
      {
        id: 20201,
        name: '测试权限1',
        permission: 'm21',
        parentId: 20200
      }
    ]
  }
]);
```

2. **组件内部实现**：组件会自动为 `isPenultimate: true` 的节点添加 `is-penultimate` 类

```js
const customNodeClass = ({ isPenultimate }: TreeNodeData) => (isPenultimate ? 'is-penultimate' : '');
```

3. **CSS 样式**：为 `is-penultimate` 类添加水平布局样式

```css
:deep(.el-tree-node.is-penultimate) {
  > .el-tree-node__children {
    > div {
      display: inline-block;
      margin-right: 3px;
      vertical-align: middle;
      &:not(:first-child) .el-tree-node__content {
        padding-left: 0 !important;
        .el-tree-node__expand-icon {
          display: none;
        }
      }
      .el-tree-node__content {
        padding-right: 16px;
      }
    }
  }
}
```

### 注意事项

- `isPenultimate` 属性需要设置在父节点上，而不是子节点上
- 当设置 `isPenultimate: true` 后，该节点的所有子节点都会水平排列
- 水平排列的子节点会自动调整样式，确保在一条水平线上展示

:::

### 基本使用（非全选模式）

<ClientOnly>
<LSTree
  :tree-data="treeData"
  :is-check-all="false"
  :show-checkbox="true"
  :default-checked-keys="checkedPermissionIds"
/>
</ClientOnly>

```html
<LSTree :tree-data="treeData" :is-check-all="false" :show-checkbox="true" :default-checked-keys="checkedPermissionIds" />
```

## API

### Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### data 配置项

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

### Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData3" />

### Exposes

<ApiIntro :tableColumn="tableExposesColumn" :tableData="tableData4" />

<script setup>
import { tableColumn, tableMethodColumn, tableExposesColumn } from '../constant';
import { ref } from 'vue';
import { isEmpty } from '../.vitepress/utils/';


const treeData = ref([
  {
    id: 20100,
    name: '凭证管理',
    permission: 'm1',
    parentId: 0,
    children: [
      {
        id: 20101,
        name: '新增凭证',
        permission: 'm11',
        parentId: 20100
      },
      {
        id: 20125,
        name: '凭证模板',
        permission: 'm15',
        parentId: 20100
      },
      {
        id: 20102,
        name: '列表',
        permission: 'm12',
        parentId: 20100,
        children: [
          {
            id: 20103,
            name: '查看详情',
            permission: 'm121',
            parentId: 20102,
            status: 1
          },
          {
            id: 20104,
            name: '编辑',
            permission: 'm122',
            parentId: 20102,
            children: [
              {
                id: 20105,
                name: '凭证详情接口',
                permission: 'Im1221',
                parentId: 20104,
              },
              {
                id: 20106,
                name: '修改凭证接口',
                permission: 'Im1222',
                parentId: 20104,
              },
              {
                id: 20124,
                name: '查看详情接口',
                permission: 'Im1223',
                parentId: 20104,
              }
            ]
          },
          {
            id: 20107,
            name: '删除',
            permission: 'm123',
            parentId: 20102
          },
          {
            id: 20108,
            name: '服务端订阅',
            type: 2,
            permission: 'm124',
            parentId: 20102,
            children: [
              {
                id: 20109,
                name: '订阅列表',
                permission: 'm1241',
                parentId: 20108,
                children: [
                  {
                    id: 20110,
                    name: '新增订阅',
                    permission: 'm12411',
                    parentId: 20109,
                    children: [
                      {
                        id: 20111,
                        name: '消费组列表接口',
                        permission: 'Im124111',
                        parentId: 20110,
                      },
                      {
                        id: 20112,
                        name: '产品列表接口',
                        permission: 'Im124112',
                        parentId: 20110,
                      },
                      {
                        id: 20113,
                        name: '新增接口',
                        permission: 'Im124113',
                        parentId: 20110,
                      }
                    ],
                  },
                  {
                    id: 20114,
                    name: '列表',
                    permission: 'm12412',
                    parentId: 20109,
                    children: [
                      {
                        id: 20115,
                        name: '编辑',
                        permission: 'm124121',
                        parentId: 20114,
                        children: [
                          {
                            id: 20116,
                            name: '消费组列表接口',
                            permission: 'Im1241211',
                            parentId: 20115,
                          },
                          {
                            id: 20117,
                            name: '产品列表接口',
                            permission: 'Im1241212',
                            parentId: 20115,
                          },
                          {
                            id: 20118,
                            name: '详情接口',
                            permission: 'Im1241213',
                            parentId: 20115,
                          },
                          {
                            id: 20119,
                            name: '保存接口',
                            permission: 'Im1241214',
                            parentId: 20115,
                          }
                        ],
                      },
                      {
                        id: 20120,
                        name: '删除',
                        permission: 'm124122',
                        parentId: 20114,
                      }
                    ],
                  }
                ],
              }
            ]
          }
        ]
      }
    ]
  }
]);

// 当前用户角色拥有的权限id
const roleData = ref([
  {
    id: 20428,
    permissionId: 20100,
  },
  {
    id: 20432,
    permissionId: 20101,
  },
  {
    id: 20436,
    permissionId: 20102,
  },
  {
    id: 20440,
    permissionId: 20103,
  },
  {
    id: 20444,
    permissionId: 20104,
  },
  {
    id: 20448,
    permissionId: 20105,
  },
  {
    id: 20452,
    permissionId: 20106,
  },
  {
    id: 20456,
    permissionId: 20107,
  },
  {
    id: 20460,
    permissionId: 20108,
  },
  {
    id: 20464,
    permissionId: 20109,
  },
  {
    id: 20468,
    permissionId: 20110,
  }
]);

const checkedPermissionIds = ref();

checkedPermissionIds.value = getTreeCheckedData((roleData.value || []).map((item) => item.permissionId));

// 筛选去掉父级id
function getTreeCheckedData(ids) {
  let newIds = ids || [];
  if (!isEmpty(treeData.value) && !isEmpty(ids)) {
    const lunData = (list) => {
      if (!isEmpty(list)) {
        list.forEach((item) => {
          const { id, children } = item;
          if (!isEmpty(children)) {
            let index = newIds.indexOf(id);
            if (index >= 0) {
              // 有子节点 并且 子节点有勾选 去掉当前父节点id
              newIds.splice(index, 1);
            }
            lunData(children);
          }
        });
      }
    };
    lunData(treeData.value);
  }
  return newIds;
}

const tree1Ref = ref();
const checkedIds = ref([]);
function getChecked() {
  checkedIds.value = tree1Ref.value.lsTreeRef.getCheckedNodes();
}

// 水平展示示例数据
const horizontalTreeData = ref([
  {
    id: 20100,
    name: '凭证管理',
    permission: 'm1',
    parentId: 0,
    isPenultimate: true, // 开启水平布局
    children: [
      {
        id: 20101,
        name: '新增凭证',
        permission: 'm11',
        parentId: 20100
      },
      {
        id: 20125,
        name: '凭证模板',
        permission: 'm15',
        parentId: 20100
      },
      {
        id: 20102,
        name: '列表',
        permission: 'm12',
        parentId: 20100
      },
      {
        id: 20108,
        name: '服务端订阅',
        permission: 'm124',
        parentId: 20100
      }
    ]
  },
  {
    id: 20200,
    name: '测试权限',
    permission: 'm2',
    parentId: 0,
    isPenultimate: true, // 开启水平布局
    children: [
      {
        id: 20201,
        name: '测试权限1',
        permission: 'm21',
        parentId: 20200
      }
    ]
  }
]);

const tableData = ref([
  {
    name: 'isExpand',
    desc: '是否支持展开、收缩',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'height',
    desc: '展示区域高度',
    type: 'string',
    value: '-'
  },
  {
    name: 'treeData',
    desc: '树形结构数据',
    type: 'array',
    value: '[]'
  },
  {
    name: 'dataProps',
    desc: '树节点数据结构',
    type: 'json',
    value: `{
      children: 'children',
      label: 'name',
      class: ''
    }`
  },
  {
    name: 'hideNodePrefix',
    desc: '需要隐藏的节点的code码前缀',
    type: 'string',
    value: 'I'
  },
  {
    name: 'isCheckAll',
    desc: '是否全选',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'showCheckbox',
    desc: '是否显示复选框',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'defaultExpandAll',
    desc: '是否默认展开所有节点',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'nodeKey',
    desc: '节点唯一标识',
    type: 'string',
    value: 'id'
  },
  {
    name: 'isCheckStrictly',
    desc: '是否严格勾选',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'defaultCheckedKeys',
    desc: '默认选中的节点key数组',
    type: 'array',
    value: '[]'
  },
  {
    name: 'attrs',
    desc: '兼容部分el-tree属性，写入方式为json格式',
    type: 'object',
    value: '{}'
  }
])

const tableData2 = ref([
  {
    name: 'id',
    desc: '权限id',
    type: 'string / number',
    value: '-'
  },
  {
    name: 'name',
    desc: '权限名称',
    type: 'string',
    value: '-'
  },
  {
    name: 'permission',
    desc: '权限code码',
    type: 'string, 除查看（p）、详情（d），其他不要以这p或d开头',
    value: '-'
  },
  {
    name: 'parentId',
    desc: '父级id',
    type: 'string / number',
    value: '0'
  },
  {
    name: 'children',
    desc: '子节点',
    type: 'array',
    value: '[]'
  },
  {
    name: 'disabled',
    desc: '是否禁用节点',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'hasChildren',
    desc: '是否有子节点，用于异步加载',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'isLeaf',
    desc: '是否为叶子节点',
    type: 'boolean',
    value: 'false'
  }
])

const tableData3 = ref([
  {
    name: 'handleCheck',
    desc: '点击的节点复选框的数据回调方法',
    type: 'function',
    value: 'data，checkeds'
  },
  {
    name: 'handleChekChange',
    desc: '每一个节点复选框变化监听',
    type: 'function',
    value: 'data，checked'
  }
])

const tableData4 = ref([
  {
    name: 'lsTreeRef',
    desc: 'tree组件实例，可调用Element Plus Tree的所有方法',
    type: 'ref',
    value: '-'
  }
])
</script>
