import {
  useSSRContext,
  ref,
  resolveComponent,
  unref,
  withCtx,
  createVNode,
  mergeProps,
  createTextVNode,
  openBlock,
  createBlock,
  Fragment,
  renderList
} from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { ElSwitch, ElButton, ElFormItem } from 'element-plus';
import { t as tableColumn, a as tableMethodColumn, c as tableSlotColumn, b as tableExposesColumn } from './index.CZ5Oz5P9.js';
const __pageData = JSON.parse(
  '{"title":"Form 表单","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/form.md","filePath":"docs/form.md","lastUpdated":1729253477000}'
);
const __default__ = { name: 'docs/form.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const read = ref(false);
    const formData_1 = ref({
      name: void 0,
      type: void 0,
      type1: void 0,
      type2: void 0,
      count: void 0,
      date: void 0,
      datetime: void 0,
      city: [],
      open: false,
      remark: void 0
    });
    const formItems_1 = [
      {
        type: 'input',
        label: '活动名称',
        prop: 'name',
        rules: {
          required: true,
          message: '请输入活动名称',
          trigger: 'blur'
        }
      },
      {
        type: 'select',
        label: '活动类型',
        prop: 'type',
        rules: {
          required: true,
          message: '请选择活动类型',
          trigger: 'blur'
        },
        attrs: {
          multiple: true
        },
        options: [
          {
            label: '体育',
            value: 1
          },
          {
            label: '唱歌',
            value: 2
          },
          {
            label: '美食',
            value: 3
          },
          {
            label: '摄影',
            value: 4
          }
        ]
      },
      {
        type: 'radio',
        label: '活动类型',
        prop: 'type1',
        rules: {
          required: true,
          message: '请选择活动类型',
          trigger: 'blur'
        },
        attrs: {
          multiple: true
        },
        options: [
          {
            label: '体育',
            value: 1
          },
          {
            label: '唱歌',
            value: 2
          },
          {
            label: '美食',
            value: 3
          },
          {
            label: '摄影',
            value: 4
          }
        ]
      },
      {
        type: 'checkbox',
        label: '活动类型',
        prop: 'type2',
        rules: {
          required: true,
          message: '请选择活动类型',
          trigger: 'blur'
        },
        attrs: {
          multiple: true
        },
        options: [
          {
            label: '体育',
            value: 1
          },
          {
            label: '唱歌',
            value: 2
          },
          {
            label: '美食',
            value: 3
          },
          {
            label: '摄影',
            value: 4
          }
        ]
      },
      {
        type: 'number',
        label: '活动人数',
        prop: 'count',
        rules: {
          required: true,
          message: '请输入活动人数',
          trigger: 'blur'
        },
        attrs: {
          max: 10
        },
        tooltip: '最多人数10人'
      },
      {
        type: 'date',
        label: '活动日期',
        prop: 'date',
        dateFormat: 'YYYY-MM-DD',
        rules: {
          required: true,
          message: '请选择活动日期',
          trigger: 'blur'
        }
      },
      {
        type: 'date',
        label: '活动时间',
        prop: 'datetime',
        rules: {
          required: true,
          message: '请选择活动日期',
          trigger: 'blur'
        },
        attrs: {
          type: 'datetime'
        }
      },
      {
        type: 'cascader',
        label: '活动城市',
        prop: 'city',
        rules: {
          required: true,
          message: '请选择活动城市',
          trigger: 'blur'
        },
        options: [
          {
            value: 'shanghai',
            label: '上海',
            children: [
              {
                value: 'pdxq',
                label: '浦东新区'
              },
              {
                value: 'hp',
                label: '黄浦区'
              },
              {
                value: 'xh',
                label: '徐汇区'
              }
            ]
          },
          {
            value: 'sichuan',
            label: '四川',
            children: [
              {
                value: 'chengdu',
                label: '成都市'
              },
              {
                value: 'leshan',
                label: '乐山市'
              }
            ]
          }
        ]
      },
      {
        type: 'switch',
        label: '是否开启',
        prop: 'open'
      },
      {
        type: 'textarea',
        label: '备注',
        prop: 'remark'
      }
    ];
    function submitFn(val) {
      /* @__PURE__ */ console.log('submit success!', val);
    }
    const formData_2 = ref({
      label: '嵌套表单',
      item_1: [
        {
          name: void 0,
          age: void 0
        }
      ],
      item_2: [
        {
          type: void 0,
          open: false
        }
      ]
    });
    const formItems_2 = [
      {
        type: 'label',
        label: '标题',
        prop: 'label'
      },
      {
        type: 'itemSlot',
        label: '第一段',
        prop: 'item_1'
      },
      {
        type: 'slot',
        label: '第二段',
        prop: 'item_2'
      }
    ];
    const item_1_form = [
      {
        type: 'input',
        label: '姓名',
        prop: 'name',
        required: true
      },
      {
        type: 'number',
        label: '年龄',
        prop: 'age'
      }
    ];
    const item_2_form = [
      {
        type: 'select',
        label: '类型',
        prop: 'type',
        rules: {
          required: true,
          message: '请选择活动类型',
          trigger: 'blur'
        },
        options: [
          {
            label: '选项1',
            value: 1
          }
        ]
      },
      {
        type: 'switch',
        label: '开启',
        prop: 'open'
      }
    ];
    function addItem_1() {
      formData_2.value.item_1.push({
        name: void 0,
        age: void 0
      });
    }
    function addItem_2() {
      formData_2.value.item_2.push({
        type: void 0,
        open: false
      });
    }
    function removeItem_1(index) {
      formData_2.value.item_1.splice(index, 1);
    }
    function removeItem_2(index) {
      formData_2.value.item_2.splice(index, 1);
    }
    const attrTableData = [
      {
        name: 'formData/v-model:form-data',
        desc: '表单数据对象',
        type: 'object',
        value: '-'
      },
      {
        name: 'formItems',
        desc: 'formItem 配置数据',
        type: 'array',
        value: '[]'
      },
      {
        name: 'column',
        desc: '列数',
        type: 'number',
        value: '1'
      },
      {
        name: 'loading',
        desc: '加载',
        type: 'boolean',
        value: 'false'
      },
      {
        name: 'showBtnLoading',
        desc: '是否展示confirm按钮加载状态',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'read',
        desc: '是否只读',
        type: 'boolean',
        value: 'false'
      },
      {
        name: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: 'false'
      },
      {
        name: 'showButtons',
        desc: '是否展示confirm和reset按钮',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'buttonsClass',
        desc: '展示confirm和reset按钮区域的样式',
        type: 'string',
        value: '-'
      },
      {
        name: 'showReset',
        desc: '是否显示重置按钮',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'confirmText',
        desc: 'confirm 文案',
        type: 'string',
        value: '确认'
      },
      {
        name: 'confirmClassName',
        desc: 'confirm 按钮 className',
        type: 'string',
        value: '-'
      },
      {
        name: 'colon',
        desc: '冒号显示与否',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'labelWidth',
        desc: `标签的长度，例如 '50px'`,
        type: 'string/number',
        value: 'auto'
      }
    ];
    const eventsTableData = [
      {
        name: 'submit',
        desc: '提交验证时触发，成功返回表单数据对象',
        type: 'Function',
        value: '表单数据对象'
      },
      {
        name: 'reset',
        desc: '重置时触发',
        type: 'Function',
        value: '表单数据对象'
      }
    ];
    const slotTableData = [
      {
        name: 'default',
        desc: '后置自定义内容'
      }
    ];
    const exposesTableData = [
      {
        name: 'FormRef',
        desc: 'el-form 组件的实例',
        type: '-',
        value: '-'
      },
      {
        name: 'validate',
        desc: '对整个表单的内容进行验证。 返回 Promise',
        type: '-',
        value: '-'
      },
      {
        name: 'submitForm',
        desc: '表单提交',
        type: '-',
        value: '-'
      }
    ];
    const attrTableData_1 = [
      {
        name: 'value/v-model:value',
        desc: '绑定值',
        type: 'any',
        value: '-'
      },
      {
        name: 'isValue',
        desc: '是否绑定到modelValue',
        type: 'boolean',
        value: 'false'
      },
      {
        name: 'type',
        desc: '控件类型',
        type: 'FormItemType',
        value: '-'
      },
      {
        name: 'label',
        desc: '显示的标题',
        type: 'string',
        value: '-'
      },
      {
        name: 'prop',
        desc: '字段名称 对应列内容的字段名',
        type: 'string/string[]',
        value: '-'
      },
      {
        name: 'rules',
        desc: '表单验证规则',
        type: 'object',
        value: '-'
      },
      {
        name: 'className',
        desc: 'FormItem 样式',
        type: 'string',
        value: '-'
      },
      {
        name: 'labelClass',
        desc: 'FormItem Label 样式',
        type: 'string',
        value: '-'
      },
      {
        name: 'tooltip',
        desc: '提示文本',
        type: 'string',
        value: '-'
      },
      {
        name: 'options',
        desc: 'select/cascader 控件选项值',
        type: 'array',
        value: '[]'
      },
      {
        name: 'attrs',
        desc: '控件配置项',
        type: 'object',
        value: '-'
      },
      {
        name: 'listeners',
        desc: '控件事件',
        type: 'object',
        value: '-'
      },
      {
        name: 'colon',
        desc: '是否展示冒号',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'read',
        desc: '是否只读',
        type: 'boolean',
        value: 'false'
      },
      {
        name: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: 'false'
      },
      {
        name: 'labelNumber',
        desc: 'type为Label时，文本内容是否是数字',
        type: 'boolean',
        value: 'false'
      },
      {
        name: 'dateFormat',
        desc: 'type为date时，文本内容日期时间格式',
        type: 'string',
        value: 'YYYY-MM-DD HH:mm:ss'
      }
    ];
    const formItemTypeColumn = [
      {
        prop: 'name',
        label: '值'
      },
      {
        prop: 'desc',
        label: '说明'
      }
    ];
    const formItemTypeData = [
      {
        name: 'label',
        desc: '文本显示'
      },
      {
        name: 'input',
        desc: '输入框（el-input）'
      },
      {
        name: 'textarea',
        desc: '文本域（el-input）'
      },
      {
        name: 'number',
        desc: '数字输入（el-input-number）'
      },
      {
        name: 'radio',
        desc: '单选框（el-radio'
      },
      {
        name: 'checkbox',
        desc: '复选框（el-checkbox'
      },
      {
        name: 'select',
        desc: '下拉选择框（el-select）'
      },
      {
        name: 'date',
        desc: '日期（el-date-picker）'
      },
      {
        name: 'cascader',
        desc: '级联（el-cascader）'
      },
      {
        name: 'multipleCascader',
        desc: '多选级联（el-cascader）'
      },
      {
        name: 'switch',
        desc: '开关（el-switch）'
      },
      {
        name: 'slot',
        desc: '自定义内容'
      },
      {
        name: 'itemSlot',
        desc: 'el-form-item 内自定义内容'
      }
    ];
    const slotTableData_1 = [
      {
        name: '[prop]',
        desc: '自定义内容,插槽名 跟 prop 一致'
      },
      {
        name: '[prop]-prepend',
        desc: '前置自定义内容'
      },
      {
        name: '[prop]-append',
        desc: '后置自定义内容'
      },
      {
        name: '[prop]-slot',
        desc: 'type是itemSlot时，FormItem内自定义内容'
      },
      {
        name: '[prop]-read-slot',
        desc: 'read时，展示文本内容的自定义内容'
      }
    ];
    const exposesTableData_1 = [
      {
        name: 'FormItemRef',
        desc: 'el-form-item 组件的实例',
        type: '-',
        value: '-'
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_LSForm = resolveComponent('LSForm');
      const _component_LSFormItem = resolveComponent('LSFormItem');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)}><h1 id="form-表单" tabindex="-1">Form 表单 <a class="header-anchor" href="#form-表单" aria-label="Permalink to &quot;Form 表单&quot;">​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block"><p class="custom-block-title">基于el-form二次封装，保留原属性和方法。</p></div><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><h3 id="_1-基础表单" tabindex="-1">1. 基础表单 <a class="header-anchor" href="#_1-基础表单" aria-label="Permalink to &quot;1. 基础表单&quot;">​</a></h3><br><div>`
      );
      _push(
        ssrRenderComponent(
          unref(ElSwitch),
          {
            modelValue: read.value,
            'onUpdate:modelValue': $event => (read.value = $event)
          },
          null,
          _parent
        )
      );
      _push(`<span>只读</span></div>`);
      _push(
        ssrRenderComponent(
          _component_LSForm,
          {
            class: 'demo-form_1',
            'form-data': formData_1.value,
            'onUpdate:formData': $event => (formData_1.value = $event),
            'form-items': formItems_1,
            read: read.value,
            onSubmit: submitFn
          },
          {
            'type-append': withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}>（支持多选）</div>`);
              } else {
                return [createVNode('div', null, '（支持多选）')];
              }
            }),
            _: 1
          },
          _parent
        )
      );
      _push(`<details class="details custom-block"><summary>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> formData_1</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">undefined</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">undefined</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  count: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">undefined</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  date: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">undefined</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  datetime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">undefined</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  city: [],</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  open: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">false</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  remark: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">undefined</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">});</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> formItems_1</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;input&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;活动名称&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;name&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    rules: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      required: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      message: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;请输入活动名称&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      trigger: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;blur&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;select&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;活动类型&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;type&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    rules: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      required: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      message: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;请选择活动类型&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      trigger: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;blur&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    attrs: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      multiple: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    options: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;体育&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;唱歌&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">2</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;美食&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">3</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;摄影&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">4</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;number&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;活动人数&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;count&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    rules: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      required: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      message: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;请输入活动人数&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      trigger: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;blur&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    attrs: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      max: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">10</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    tooltip: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;最多人数10人&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;date&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;活动日期&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;date&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    rules: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      required: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      message: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;请选择活动日期&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      trigger: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;blur&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;date&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;活动时间&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;datetime&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    rules: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      required: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      message: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;请选择活动日期&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      trigger: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;blur&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    attrs: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;datetime&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;cascader&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;活动城市&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;city&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    rules: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      required: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      message: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;请选择活动城市&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      trigger: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;blur&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    options: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;shanghai&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;上海&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        children: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">            value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;pdxq&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">            label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;浦东新区&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">            value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;hp&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">            label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;黄浦区&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">            value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;xh&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">            label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;徐汇区&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;sichuan&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;四川&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        children: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">            value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;chengdu&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">            label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;成都市&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">            value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;leshan&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">            label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;乐山市&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;switch&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;是否开启&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;open&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;textarea&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;备注&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;remark&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSForm</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> v-model:form-data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;formData_1&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> :form-items</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;formItems_1&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> @submit</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;submitFn&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">template</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> #type-append</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;（支持多选）&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSForm</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details><h3 id="_2-嵌套表单" tabindex="-1">2. 嵌套表单 <a class="header-anchor" href="#_2-嵌套表单" aria-label="Permalink to &quot;2. 嵌套表单&quot;">​</a></h3><br>`);
      _push(
        ssrRenderComponent(
          _component_LSForm,
          {
            'form-data': formData_2.value,
            'onUpdate:formData': $event => (formData_2.value = $event),
            'form-items': formItems_2,
            onSubmit: submitFn
          },
          {
            'item_1-slot': withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}><!--[-->`);
                ssrRenderList(formData_2.value.item_1, (item, index) => {
                  _push2(`<div class="item-center mb-24"${_scopeId}><!--[-->`);
                  ssrRenderList(item_1_form, (fItem, i) => {
                    _push2(
                      ssrRenderComponent(
                        _component_LSFormItem,
                        mergeProps(
                          {
                            key: i + '-' + index,
                            ref_for: true
                          },
                          fItem,
                          {
                            class: 'mr-24',
                            modelValue: formData_2.value.item_1[index][fItem.prop],
                            'onUpdate:modelValue': $event => (formData_2.value.item_1[index][fItem.prop] = $event),
                            prop: ['item_1', index, fItem.prop]
                          }
                        ),
                        null,
                        _parent2,
                        _scopeId
                      )
                    );
                  });
                  _push2(`<!--]-->`);
                  _push2(
                    ssrRenderComponent(
                      unref(ElButton),
                      {
                        type: 'danger',
                        class: 'ml-12',
                        onClick: $event => removeItem_1(index)
                      },
                      {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`删除`);
                          } else {
                            return [createTextVNode('删除')];
                          }
                        }),
                        _: 2
                      },
                      _parent2,
                      _scopeId
                    )
                  );
                  _push2(`</div>`);
                });
                _push2(`<!--]-->`);
                _push2(
                  ssrRenderComponent(
                    unref(ElButton),
                    {
                      type: 'primary',
                      class: 'mt-12',
                      onClick: addItem_1
                    },
                    {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`添加`);
                        } else {
                          return [createTextVNode('添加')];
                        }
                      }),
                      _: 1
                    },
                    _parent2,
                    _scopeId
                  )
                );
                _push2(`</div>`);
              } else {
                return [
                  createVNode('div', null, [
                    (openBlock(true),
                    createBlock(
                      Fragment,
                      null,
                      renderList(formData_2.value.item_1, (item, index) => {
                        return (
                          openBlock(),
                          createBlock(
                            'div',
                            {
                              key: index,
                              class: 'item-center mb-24'
                            },
                            [
                              (openBlock(),
                              createBlock(
                                Fragment,
                                null,
                                renderList(item_1_form, (fItem, i) => {
                                  return createVNode(
                                    _component_LSFormItem,
                                    mergeProps(
                                      {
                                        key: i + '-' + index,
                                        ref_for: true
                                      },
                                      fItem,
                                      {
                                        class: 'mr-24',
                                        modelValue: formData_2.value.item_1[index][fItem.prop],
                                        'onUpdate:modelValue': $event => (formData_2.value.item_1[index][fItem.prop] = $event),
                                        prop: ['item_1', index, fItem.prop]
                                      }
                                    ),
                                    null,
                                    16,
                                    ['modelValue', 'onUpdate:modelValue', 'prop']
                                  );
                                }),
                                64
                              )),
                              createVNode(
                                unref(ElButton),
                                {
                                  type: 'danger',
                                  class: 'ml-12',
                                  onClick: $event => removeItem_1(index)
                                },
                                {
                                  default: withCtx(() => [createTextVNode('删除')]),
                                  _: 2
                                },
                                1032,
                                ['onClick']
                              )
                            ]
                          )
                        );
                      }),
                      128
                    )),
                    createVNode(
                      unref(ElButton),
                      {
                        type: 'primary',
                        class: 'mt-12',
                        onClick: addItem_1
                      },
                      {
                        default: withCtx(() => [createTextVNode('添加')]),
                        _: 1
                      }
                    )
                  ])
                ];
              }
            }),
            item_2: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(
                  ssrRenderComponent(
                    unref(ElFormItem),
                    {
                      label: '第二段：',
                      prop: 'item_2'
                    },
                    {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div${_scopeId2}><!--[-->`);
                          ssrRenderList(formData_2.value.item_2, (item, index) => {
                            _push3(`<div class="item-center mb-24"${_scopeId2}><!--[-->`);
                            ssrRenderList(item_2_form, (fItem, i) => {
                              _push3(
                                ssrRenderComponent(
                                  _component_LSFormItem,
                                  mergeProps(
                                    {
                                      key: i + '-' + index,
                                      ref_for: true
                                    },
                                    fItem,
                                    {
                                      class: 'mr-24',
                                      modelValue: formData_2.value.item_2[index][fItem.prop],
                                      'onUpdate:modelValue': $event => (formData_2.value.item_2[index][fItem.prop] = $event),
                                      prop: ['item_2', index, fItem.prop]
                                    }
                                  ),
                                  null,
                                  _parent3,
                                  _scopeId2
                                )
                              );
                            });
                            _push3(`<!--]-->`);
                            _push3(
                              ssrRenderComponent(
                                unref(ElButton),
                                {
                                  type: 'danger',
                                  class: 'ml-12',
                                  onClick: $event => removeItem_2(index)
                                },
                                {
                                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                    if (_push4) {
                                      _push4(`删除`);
                                    } else {
                                      return [createTextVNode('删除')];
                                    }
                                  }),
                                  _: 2
                                },
                                _parent3,
                                _scopeId2
                              )
                            );
                            _push3(`</div>`);
                          });
                          _push3(`<!--]-->`);
                          _push3(
                            ssrRenderComponent(
                              unref(ElButton),
                              {
                                type: 'primary',
                                class: 'mt-12',
                                onClick: addItem_2
                              },
                              {
                                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(`添加`);
                                  } else {
                                    return [createTextVNode('添加')];
                                  }
                                }),
                                _: 1
                              },
                              _parent3,
                              _scopeId2
                            )
                          );
                          _push3(`</div>`);
                        } else {
                          return [
                            createVNode('div', null, [
                              (openBlock(true),
                              createBlock(
                                Fragment,
                                null,
                                renderList(formData_2.value.item_2, (item, index) => {
                                  return (
                                    openBlock(),
                                    createBlock(
                                      'div',
                                      {
                                        key: index,
                                        class: 'item-center mb-24'
                                      },
                                      [
                                        (openBlock(),
                                        createBlock(
                                          Fragment,
                                          null,
                                          renderList(item_2_form, (fItem, i) => {
                                            return createVNode(
                                              _component_LSFormItem,
                                              mergeProps(
                                                {
                                                  key: i + '-' + index,
                                                  ref_for: true
                                                },
                                                fItem,
                                                {
                                                  class: 'mr-24',
                                                  modelValue: formData_2.value.item_2[index][fItem.prop],
                                                  'onUpdate:modelValue': $event =>
                                                    (formData_2.value.item_2[index][fItem.prop] = $event),
                                                  prop: ['item_2', index, fItem.prop]
                                                }
                                              ),
                                              null,
                                              16,
                                              ['modelValue', 'onUpdate:modelValue', 'prop']
                                            );
                                          }),
                                          64
                                        )),
                                        createVNode(
                                          unref(ElButton),
                                          {
                                            type: 'danger',
                                            class: 'ml-12',
                                            onClick: $event => removeItem_2(index)
                                          },
                                          {
                                            default: withCtx(() => [createTextVNode('删除')]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        )
                                      ]
                                    )
                                  );
                                }),
                                128
                              )),
                              createVNode(
                                unref(ElButton),
                                {
                                  type: 'primary',
                                  class: 'mt-12',
                                  onClick: addItem_2
                                },
                                {
                                  default: withCtx(() => [createTextVNode('添加')]),
                                  _: 1
                                }
                              )
                            ])
                          ];
                        }
                      }),
                      _: 1
                    },
                    _parent2,
                    _scopeId
                  )
                );
              } else {
                return [
                  createVNode(
                    unref(ElFormItem),
                    {
                      label: '第二段：',
                      prop: 'item_2'
                    },
                    {
                      default: withCtx(() => [
                        createVNode('div', null, [
                          (openBlock(true),
                          createBlock(
                            Fragment,
                            null,
                            renderList(formData_2.value.item_2, (item, index) => {
                              return (
                                openBlock(),
                                createBlock(
                                  'div',
                                  {
                                    key: index,
                                    class: 'item-center mb-24'
                                  },
                                  [
                                    (openBlock(),
                                    createBlock(
                                      Fragment,
                                      null,
                                      renderList(item_2_form, (fItem, i) => {
                                        return createVNode(
                                          _component_LSFormItem,
                                          mergeProps(
                                            {
                                              key: i + '-' + index,
                                              ref_for: true
                                            },
                                            fItem,
                                            {
                                              class: 'mr-24',
                                              modelValue: formData_2.value.item_2[index][fItem.prop],
                                              'onUpdate:modelValue': $event =>
                                                (formData_2.value.item_2[index][fItem.prop] = $event),
                                              prop: ['item_2', index, fItem.prop]
                                            }
                                          ),
                                          null,
                                          16,
                                          ['modelValue', 'onUpdate:modelValue', 'prop']
                                        );
                                      }),
                                      64
                                    )),
                                    createVNode(
                                      unref(ElButton),
                                      {
                                        type: 'danger',
                                        class: 'ml-12',
                                        onClick: $event => removeItem_2(index)
                                      },
                                      {
                                        default: withCtx(() => [createTextVNode('删除')]),
                                        _: 2
                                      },
                                      1032,
                                      ['onClick']
                                    )
                                  ]
                                )
                              );
                            }),
                            128
                          )),
                          createVNode(
                            unref(ElButton),
                            {
                              type: 'primary',
                              class: 'mt-12',
                              onClick: addItem_2
                            },
                            {
                              default: withCtx(() => [createTextVNode('添加')]),
                              _: 1
                            }
                          )
                        ])
                      ]),
                      _: 1
                    }
                  )
                ];
              }
            }),
            _: 1
          },
          _parent
        )
      );
      _push(`<details class="details custom-block"><summary>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> formData_2</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;嵌套表单&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  item_1: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">undefined</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      age: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">undefined</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  item_2: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">undefined</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      open: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">false</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">});</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> formItems_2</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;label&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;标题&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;label&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;itemSlot&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;第一段&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;item_1&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;slot&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;第二段&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;item_2&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">];</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> item_1_form</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;input&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;姓名&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;name&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    required: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;number&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;年龄&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;age&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">];</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> item_2_form</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;select&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;类型&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;type&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    rules: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      required: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      message: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;请选择活动类型&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      trigger: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;blur&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    options: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;选项1&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;switch&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;开启&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    prop: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;open&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">];</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">function</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> addItem_1</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  formData_2.value.item_1.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">push</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">undefined</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    age: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">undefined</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  });</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">function</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> addItem_2</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  formData_2.value.item_2.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">push</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">undefined</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    open: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">false</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  });</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">function</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> removeItem_1</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(</span><span style="${ssrRenderStyle({ '--shiki-light': '#E36209', '--shiki-dark': '#FFAB70' })}">index</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  formData_2.value.item_1.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">splice</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(index, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">1</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">function</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> removeItem_2</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(</span><span style="${ssrRenderStyle({ '--shiki-light': '#E36209', '--shiki-dark': '#FFAB70' })}">index</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  formData_2.value.item_2.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">splice</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(index, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">1</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSForm</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> v-model:form-data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;formData_2&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> :form-items</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;formItems_2&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">template</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> #item_1-slot</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> v-for</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;(item, index) in formData_2.item_1&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> :key</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;index&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;item-center mb-24&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSFormItem</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">          v-for</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;(fItem, i) in item_1_form&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">          :key</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;i + &#39;-&#39; + index&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">          v-bind</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;fItem&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">          class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;mr-24&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">          v-model</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;formData_2.item_1[index][fItem.prop]&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">          :prop</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;[&#39;item_1&#39;, index, fItem.prop]&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        &gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSFormItem</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">el-button</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;danger&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;ml-12&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> @click</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;removeItem_1(index)&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;删除&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">el-button</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">el-button</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;primary&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;mt-12&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> @click</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;addItem_1&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;添加&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">el-button</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">template</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> #item_2</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">el-form-item</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> label</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;第二段：&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> prop</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;item_2&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> v-for</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;(item, index) in formData_2.item_2&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> :key</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;index&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;item-center mb-24&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSFormItem</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">            v-for</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;(fItem, i) in item_2_form&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">            :key</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;i + &#39;-&#39; + index&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">            v-bind</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;fItem&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">            class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;mr-24&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">            v-model</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;formData_2.item_2[index][fItem.prop]&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">            :prop</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;[&#39;item_2&#39;, index, fItem.prop]&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          &gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSFormItem</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">          &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">el-button</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;danger&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;ml-12&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> @click</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;removeItem_2(index)&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;删除&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">el-button</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">        &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">el-button</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;primary&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;mt-12&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> @click</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;addItem_2&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;添加&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">el-button</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">el-form-item</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSForm</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div></details><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="lsform" tabindex="-1">LSForm <a class="header-anchor" href="#lsform" aria-label="Permalink to &quot;LSForm&quot;">​</a></h3><h3 id="_1-attributes" tabindex="-1">1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;">​</a></h3>`);
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableColumn),
            tableData: attrTableData
          },
          null,
          _parent
        )
      );
      _push(
        `<h3 id="_2-events" tabindex="-1">2. Events <a class="header-anchor" href="#_2-events" aria-label="Permalink to &quot;2. Events&quot;">​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableMethodColumn),
            tableData: eventsTableData
          },
          null,
          _parent
        )
      );
      _push(
        `<h3 id="_3-slots" tabindex="-1">3. Slots <a class="header-anchor" href="#_3-slots" aria-label="Permalink to &quot;3. Slots&quot;">​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableSlotColumn),
            tableData: slotTableData
          },
          null,
          _parent
        )
      );
      _push(
        `<h3 id="_4-exposes" tabindex="-1">4. Exposes <a class="header-anchor" href="#_4-exposes" aria-label="Permalink to &quot;4. Exposes&quot;">​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableExposesColumn),
            tableData: exposesTableData
          },
          null,
          _parent
        )
      );
      _push(
        `<h3 id="lsformitem" tabindex="-1">LSFormItem <a class="header-anchor" href="#lsformitem" aria-label="Permalink to &quot;LSFormItem&quot;">​</a></h3><h3 id="_1-attributes-1" tabindex="-1">1. Attributes <a class="header-anchor" href="#_1-attributes-1" aria-label="Permalink to &quot;1. Attributes&quot;">​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableColumn),
            tableData: attrTableData_1
          },
          null,
          _parent
        )
      );
      _push(
        `<h4 id="_1-1-formitemtype" tabindex="-1">1.1 FormItemType <a class="header-anchor" href="#_1-1-formitemtype" aria-label="Permalink to &quot;1.1 FormItemType&quot;">​</a></h4>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: formItemTypeColumn,
            tableData: formItemTypeData
          },
          null,
          _parent
        )
      );
      _push(
        `<h3 id="_2-slots" tabindex="-1">2. Slots <a class="header-anchor" href="#_2-slots" aria-label="Permalink to &quot;2. Slots&quot;">​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableSlotColumn),
            tableData: slotTableData_1
          },
          null,
          _parent
        )
      );
      _push(
        `<h3 id="_3-exposes" tabindex="-1">3. Exposes <a class="header-anchor" href="#_3-exposes" aria-label="Permalink to &quot;3. Exposes&quot;">​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableExposesColumn),
            tableData: exposesTableData_1
          },
          null,
          _parent
        )
      );
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/form.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { __pageData, _sfc_main as default };
