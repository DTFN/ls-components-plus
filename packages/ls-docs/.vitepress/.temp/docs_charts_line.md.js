import {
  useSSRContext,
  ref,
  resolveComponent,
  unref,
  withCtx,
  createTextVNode,
  createVNode,
  openBlock,
  createBlock,
  Fragment,
  renderList
} from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { t as tableColumn } from './index.CZ5Oz5P9.js';
import { ElForm, ElFormItem, ElRadioGroup, ElRadio, ElSelect, ElOption } from 'element-plus';
import { _ as _export_sfc } from './plugin-vue_export-helper.1tPrXgE0.js';
const __pageData = JSON.parse(
  '{"title":"Line 折线图","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/charts/line.md","filePath":"docs/charts/line.md","lastUpdated":1728983795000}'
);
const __default__ = { name: 'docs/charts/line.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const formInline = ref({
      themeModel: 'default',
      axis: 'x',
      pos: 'top'
    });
    const themeOptions = ref([
      {
        label: '默认',
        value: 'default'
      },
      {
        label: '暗黑',
        value: 'dark'
      }
    ]);
    const customOption = ref({
      xAxis: [
        {
          axisLabel: {
            rotate: 45,
            align: 'center',
            margin: 24
          }
        }
      ]
    });
    const temperatureData = [
      {
        propertyValue: '73.55',
        propertyTime: 17261748e5
      },
      {
        propertyValue: '75.72',
        propertyTime: 17261784e5
      },
      {
        propertyValue: '76.77',
        propertyTime: 1726182e6
      },
      {
        propertyValue: '75.68',
        propertyTime: 17261856e5
      },
      {
        propertyValue: '76.13',
        propertyTime: 17261892e5
      },
      {
        propertyValue: '74.85',
        propertyTime: 17261928e5
      },
      {
        propertyValue: '75.95',
        propertyTime: 17261964e5
      },
      {
        propertyValue: '75.80',
        propertyTime: 17262e8
      },
      {
        propertyValue: '74.35',
        propertyTime: 17262036e5
      },
      {
        propertyValue: '74.33',
        propertyTime: 17262072e5
      },
      {
        propertyValue: '74.02',
        propertyTime: 17262108e5
      },
      {
        propertyValue: '76.27',
        propertyTime: 17262144e5
      }
    ];
    const humidity = [
      {
        propertyValue: '30.67',
        propertyTime: 17261748e5
      },
      {
        propertyValue: '28.82',
        propertyTime: 17261784e5
      },
      {
        propertyValue: '29.82',
        propertyTime: 1726182e6
      },
      {
        propertyValue: '29.25',
        propertyTime: 17261856e5
      },
      {
        propertyValue: '30.52',
        propertyTime: 17261892e5
      },
      {
        propertyValue: '29.65',
        propertyTime: 17261928e5
      },
      {
        propertyValue: '29.70',
        propertyTime: 17261964e5
      },
      {
        propertyValue: '30.18',
        propertyTime: 17262e8
      },
      {
        propertyValue: '29.47',
        propertyTime: 17262036e5
      },
      {
        propertyValue: '29.33',
        propertyTime: 17262072e5
      },
      {
        propertyValue: '30.58',
        propertyTime: 17262108e5
      },
      {
        propertyValue: '29.13',
        propertyTime: 17262144e5
      }
    ];
    const templateAllLine = ref({
      templateSimpleLine: {
        labelPosition: 'top',
        tooltip: 'cross'
      },
      templateMultipleLine: {
        labelPosition: 'top',
        type: 'multiple',
        smooth: true,
        areaStyle: {},
        tooltip: 'cross',
        legend: ['Email', 'name', 'address'],
        dataZoom: 'horizontal'
        // dynamicAxis: true
      },
      templateLineBar: {
        labelPosition: 'top',
        type: 'multiple',
        smooth: true,
        lineBar: true
        // dynamicAxis: true
      },
      templateDynamicLine: {
        labelPosition: 'top',
        type: 'multiple',
        tooltip: 'cross',
        dynamicAxis: true
      }
    });
    const dataSimpleLine = {
      axisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      seriesData: [120, 200, 150, 80, 70, 110, 130]
    };
    const dataMultipleLine = {
      axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      seriesData: [
        {
          name: 'Email',
          type: 'line',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'name',
          type: 'line',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'address',
          type: 'line',
          data: [22, 66, 99, 234, 33, 56, 310]
        }
      ]
    };
    const dataLineBarLine = {
      axisData: temperatureData.map(item => item.propertyTime),
      seriesData: [
        {
          type: 'line',
          data: temperatureData.map(item => item.propertyValue)
        },
        {
          type: 'bar',
          data: humidity.map(item => item.propertyValue)
        }
      ]
    };
    const dynamicLine = {
      axisData: temperatureData.map(item => item.propertyTime),
      seriesData: [
        {
          type: 'line',
          data: temperatureData.map(item => item.propertyValue)
        }
      ]
    };
    function changeChartStyle() {
      ['templateSimpleLine', 'templateMultipleLine', 'templateLineBar', 'templateDynamicLine'].forEach(item => {
        templateAllLine.value[item].theme = formInline.value.themeModel;
        templateAllLine.value[item].axis = formInline.value.axis;
        templateAllLine.value[item].labelPosition = formInline.value.pos;
      });
    }
    const tableData = ref([
      {
        name: 'type',
        desc: '模板类型，可选项：normal / multiple',
        type: 'string',
        value: '-'
      },
      {
        name: 'axis',
        desc: '基于x或y展示数据, 可选项：x / y',
        type: 'string',
        value: 'x'
      },
      {
        name: 'smooth',
        desc: '是否平滑曲线',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'areaStyle',
        desc: '曲线区域填充样式',
        type: 'json',
        value: '-'
      },
      {
        name: 'tooltip',
        desc: '鼠标移入是否显示数据提示，可选项：line / shadow / cross / none',
        type: 'string',
        value: 'shadow'
      },
      {
        name: 'tooltipFormatter',
        desc: '自定义鼠标移入数据提示样式',
        type: 'function',
        value: '-'
      },
      {
        name: 'legend',
        desc: '显示标志的内容',
        type: 'array',
        value: '-'
      },
      {
        name: 'theme',
        desc: '主题类型，可选项：default / dark',
        type: 'string',
        value: 'default'
      },
      {
        name: 'barColorList',
        desc: '自定义柱状色值,根据主题自动适配，也可以自己传值',
        type: 'array',
        value: '[#2285FF, #FF7D00, #00CDDC, #FB466C]'
      },
      {
        name: 'dataZoom',
        desc: '是否支持鼠标缩放, 请同axis方向保持一致，可选项：horizontal / vertical',
        type: 'string',
        value: '-'
      },
      {
        name: 'showBarFont',
        desc: '是否显示柱状数据值',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'labelPosition',
        desc: '柱状数据值显示位置，showBarFont为true时有效，可选项：top / left / right / bottom / inside / insideLeft / insideRight / insideTop / insideBottom / insideTopLeft / insideBottomLeft / insideTopRight / insideBottomRight，（基于negative, waterfall类型存在以下特殊配置：both, insideBoth）',
        type: 'string',
        value: 'inside'
      },
      {
        name: 'dynamicAxis',
        desc: '是否动态计算坐标轴数据，支持 simple / multiBar 类型',
        type: 'boolean',
        value: 'false'
      },
      {
        name: 'lineBar',
        desc: '是否支持折线柱状图混合展示',
        type: 'boolean',
        value: 'false'
      }
    ]);
    const tableData2 = ref([
      {
        name: 'axisData',
        desc: '对应axis坐标轴数据，若axis为x，那么该数据展示在x轴上',
        type: 'array',
        value: '-'
      },
      {
        name: 'seriesData',
        desc: '展示区域数据。除了simple是简单数组类型[xxx, xxx]，其余固定模板类型需为数组对象，即[{ name: xxx, data: [] } ]',
        type: 'array',
        value: '-'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_LSChart = resolveComponent('LSChart');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)} data-v-53116b35><h1 id="line-折线图" tabindex="-1" data-v-53116b35>Line 折线图 <a class="header-anchor" href="#line-折线图" aria-label="Permalink to &quot;Line 折线图&quot;" data-v-53116b35>​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block" data-v-53116b35><p class="custom-block-title" data-v-53116b35>快速创建常用类型的折线图。</p></div><h2 id="使用方式" tabindex="-1" data-v-53116b35>使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;" data-v-53116b35>​</a></h2><br data-v-53116b35>`
      );
      _push(
        ssrRenderComponent(
          unref(ElForm),
          {
            inline: true,
            model: formInline.value,
            class: 'demo-form-inline'
          },
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(
                  ssrRenderComponent(
                    unref(ElFormItem),
                    { label: '坐标轴：' },
                    {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(
                            ssrRenderComponent(
                              unref(ElRadioGroup),
                              {
                                modelValue: formInline.value.axis,
                                'onUpdate:modelValue': $event => (formInline.value.axis = $event),
                                onChange: changeChartStyle
                              },
                              {
                                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(
                                      ssrRenderComponent(
                                        unref(ElRadio),
                                        { value: 'x' },
                                        {
                                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                            if (_push5) {
                                              _push5(`x轴`);
                                            } else {
                                              return [createTextVNode('x轴')];
                                            }
                                          }),
                                          _: 1
                                        },
                                        _parent4,
                                        _scopeId3
                                      )
                                    );
                                    _push4(
                                      ssrRenderComponent(
                                        unref(ElRadio),
                                        { value: 'y' },
                                        {
                                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                            if (_push5) {
                                              _push5(`y轴`);
                                            } else {
                                              return [createTextVNode('y轴')];
                                            }
                                          }),
                                          _: 1
                                        },
                                        _parent4,
                                        _scopeId3
                                      )
                                    );
                                  } else {
                                    return [
                                      createVNode(
                                        unref(ElRadio),
                                        { value: 'x' },
                                        {
                                          default: withCtx(() => [createTextVNode('x轴')]),
                                          _: 1
                                        }
                                      ),
                                      createVNode(
                                        unref(ElRadio),
                                        { value: 'y' },
                                        {
                                          default: withCtx(() => [createTextVNode('y轴')]),
                                          _: 1
                                        }
                                      )
                                    ];
                                  }
                                }),
                                _: 1
                              },
                              _parent3,
                              _scopeId2
                            )
                          );
                        } else {
                          return [
                            createVNode(
                              unref(ElRadioGroup),
                              {
                                modelValue: formInline.value.axis,
                                'onUpdate:modelValue': $event => (formInline.value.axis = $event),
                                onChange: changeChartStyle
                              },
                              {
                                default: withCtx(() => [
                                  createVNode(
                                    unref(ElRadio),
                                    { value: 'x' },
                                    {
                                      default: withCtx(() => [createTextVNode('x轴')]),
                                      _: 1
                                    }
                                  ),
                                  createVNode(
                                    unref(ElRadio),
                                    { value: 'y' },
                                    {
                                      default: withCtx(() => [createTextVNode('y轴')]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue', 'onUpdate:modelValue']
                            )
                          ];
                        }
                      }),
                      _: 1
                    },
                    _parent2,
                    _scopeId
                  )
                );
                _push2(
                  ssrRenderComponent(
                    unref(ElFormItem),
                    { label: '数值展示位置：' },
                    {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(
                            ssrRenderComponent(
                              unref(ElRadioGroup),
                              {
                                modelValue: formInline.value.pos,
                                'onUpdate:modelValue': $event => (formInline.value.pos = $event),
                                onChange: changeChartStyle
                              },
                              {
                                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(
                                      ssrRenderComponent(
                                        unref(ElRadio),
                                        { value: 'top' },
                                        {
                                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                            if (_push5) {
                                              _push5(`上`);
                                            } else {
                                              return [createTextVNode('上')];
                                            }
                                          }),
                                          _: 1
                                        },
                                        _parent4,
                                        _scopeId3
                                      )
                                    );
                                    _push4(
                                      ssrRenderComponent(
                                        unref(ElRadio),
                                        { value: 'bottom' },
                                        {
                                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                            if (_push5) {
                                              _push5(`下`);
                                            } else {
                                              return [createTextVNode('下')];
                                            }
                                          }),
                                          _: 1
                                        },
                                        _parent4,
                                        _scopeId3
                                      )
                                    );
                                    _push4(
                                      ssrRenderComponent(
                                        unref(ElRadio),
                                        { value: 'left' },
                                        {
                                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                            if (_push5) {
                                              _push5(`左`);
                                            } else {
                                              return [createTextVNode('左')];
                                            }
                                          }),
                                          _: 1
                                        },
                                        _parent4,
                                        _scopeId3
                                      )
                                    );
                                    _push4(
                                      ssrRenderComponent(
                                        unref(ElRadio),
                                        { value: 'right' },
                                        {
                                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                            if (_push5) {
                                              _push5(`右`);
                                            } else {
                                              return [createTextVNode('右')];
                                            }
                                          }),
                                          _: 1
                                        },
                                        _parent4,
                                        _scopeId3
                                      )
                                    );
                                  } else {
                                    return [
                                      createVNode(
                                        unref(ElRadio),
                                        { value: 'top' },
                                        {
                                          default: withCtx(() => [createTextVNode('上')]),
                                          _: 1
                                        }
                                      ),
                                      createVNode(
                                        unref(ElRadio),
                                        { value: 'bottom' },
                                        {
                                          default: withCtx(() => [createTextVNode('下')]),
                                          _: 1
                                        }
                                      ),
                                      createVNode(
                                        unref(ElRadio),
                                        { value: 'left' },
                                        {
                                          default: withCtx(() => [createTextVNode('左')]),
                                          _: 1
                                        }
                                      ),
                                      createVNode(
                                        unref(ElRadio),
                                        { value: 'right' },
                                        {
                                          default: withCtx(() => [createTextVNode('右')]),
                                          _: 1
                                        }
                                      )
                                    ];
                                  }
                                }),
                                _: 1
                              },
                              _parent3,
                              _scopeId2
                            )
                          );
                        } else {
                          return [
                            createVNode(
                              unref(ElRadioGroup),
                              {
                                modelValue: formInline.value.pos,
                                'onUpdate:modelValue': $event => (formInline.value.pos = $event),
                                onChange: changeChartStyle
                              },
                              {
                                default: withCtx(() => [
                                  createVNode(
                                    unref(ElRadio),
                                    { value: 'top' },
                                    {
                                      default: withCtx(() => [createTextVNode('上')]),
                                      _: 1
                                    }
                                  ),
                                  createVNode(
                                    unref(ElRadio),
                                    { value: 'bottom' },
                                    {
                                      default: withCtx(() => [createTextVNode('下')]),
                                      _: 1
                                    }
                                  ),
                                  createVNode(
                                    unref(ElRadio),
                                    { value: 'left' },
                                    {
                                      default: withCtx(() => [createTextVNode('左')]),
                                      _: 1
                                    }
                                  ),
                                  createVNode(
                                    unref(ElRadio),
                                    { value: 'right' },
                                    {
                                      default: withCtx(() => [createTextVNode('右')]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue', 'onUpdate:modelValue']
                            )
                          ];
                        }
                      }),
                      _: 1
                    },
                    _parent2,
                    _scopeId
                  )
                );
                _push2(
                  ssrRenderComponent(
                    unref(ElFormItem),
                    { label: '主题：' },
                    {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(
                            ssrRenderComponent(
                              unref(ElSelect),
                              {
                                modelValue: formInline.value.themeModel,
                                'onUpdate:modelValue': $event => (formInline.value.themeModel = $event),
                                onChange: changeChartStyle,
                                placeholder: '请选择主题',
                                style: { width: '150px' }
                              },
                              {
                                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(`<!--[-->`);
                                    ssrRenderList(themeOptions.value, item => {
                                      _push4(
                                        ssrRenderComponent(
                                          unref(ElOption),
                                          {
                                            key: item.value,
                                            label: item.label,
                                            value: item.value
                                          },
                                          null,
                                          _parent4,
                                          _scopeId3
                                        )
                                      );
                                    });
                                    _push4(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true),
                                      createBlock(
                                        Fragment,
                                        null,
                                        renderList(themeOptions.value, item => {
                                          return (
                                            openBlock(),
                                            createBlock(
                                              unref(ElOption),
                                              {
                                                key: item.value,
                                                label: item.label,
                                                value: item.value
                                              },
                                              null,
                                              8,
                                              ['label', 'value']
                                            )
                                          );
                                        }),
                                        128
                                      ))
                                    ];
                                  }
                                }),
                                _: 1
                              },
                              _parent3,
                              _scopeId2
                            )
                          );
                        } else {
                          return [
                            createVNode(
                              unref(ElSelect),
                              {
                                modelValue: formInline.value.themeModel,
                                'onUpdate:modelValue': $event => (formInline.value.themeModel = $event),
                                onChange: changeChartStyle,
                                placeholder: '请选择主题',
                                style: { width: '150px' }
                              },
                              {
                                default: withCtx(() => [
                                  (openBlock(true),
                                  createBlock(
                                    Fragment,
                                    null,
                                    renderList(themeOptions.value, item => {
                                      return (
                                        openBlock(),
                                        createBlock(
                                          unref(ElOption),
                                          {
                                            key: item.value,
                                            label: item.label,
                                            value: item.value
                                          },
                                          null,
                                          8,
                                          ['label', 'value']
                                        )
                                      );
                                    }),
                                    128
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue', 'onUpdate:modelValue']
                            )
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
                    { label: '坐标轴：' },
                    {
                      default: withCtx(() => [
                        createVNode(
                          unref(ElRadioGroup),
                          {
                            modelValue: formInline.value.axis,
                            'onUpdate:modelValue': $event => (formInline.value.axis = $event),
                            onChange: changeChartStyle
                          },
                          {
                            default: withCtx(() => [
                              createVNode(
                                unref(ElRadio),
                                { value: 'x' },
                                {
                                  default: withCtx(() => [createTextVNode('x轴')]),
                                  _: 1
                                }
                              ),
                              createVNode(
                                unref(ElRadio),
                                { value: 'y' },
                                {
                                  default: withCtx(() => [createTextVNode('y轴')]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['modelValue', 'onUpdate:modelValue']
                        )
                      ]),
                      _: 1
                    }
                  ),
                  createVNode(
                    unref(ElFormItem),
                    { label: '数值展示位置：' },
                    {
                      default: withCtx(() => [
                        createVNode(
                          unref(ElRadioGroup),
                          {
                            modelValue: formInline.value.pos,
                            'onUpdate:modelValue': $event => (formInline.value.pos = $event),
                            onChange: changeChartStyle
                          },
                          {
                            default: withCtx(() => [
                              createVNode(
                                unref(ElRadio),
                                { value: 'top' },
                                {
                                  default: withCtx(() => [createTextVNode('上')]),
                                  _: 1
                                }
                              ),
                              createVNode(
                                unref(ElRadio),
                                { value: 'bottom' },
                                {
                                  default: withCtx(() => [createTextVNode('下')]),
                                  _: 1
                                }
                              ),
                              createVNode(
                                unref(ElRadio),
                                { value: 'left' },
                                {
                                  default: withCtx(() => [createTextVNode('左')]),
                                  _: 1
                                }
                              ),
                              createVNode(
                                unref(ElRadio),
                                { value: 'right' },
                                {
                                  default: withCtx(() => [createTextVNode('右')]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['modelValue', 'onUpdate:modelValue']
                        )
                      ]),
                      _: 1
                    }
                  ),
                  createVNode(
                    unref(ElFormItem),
                    { label: '主题：' },
                    {
                      default: withCtx(() => [
                        createVNode(
                          unref(ElSelect),
                          {
                            modelValue: formInline.value.themeModel,
                            'onUpdate:modelValue': $event => (formInline.value.themeModel = $event),
                            onChange: changeChartStyle,
                            placeholder: '请选择主题',
                            style: { width: '150px' }
                          },
                          {
                            default: withCtx(() => [
                              (openBlock(true),
                              createBlock(
                                Fragment,
                                null,
                                renderList(themeOptions.value, item => {
                                  return (
                                    openBlock(),
                                    createBlock(
                                      unref(ElOption),
                                      {
                                        key: item.value,
                                        label: item.label,
                                        value: item.value
                                      },
                                      null,
                                      8,
                                      ['label', 'value']
                                    )
                                  );
                                }),
                                128
                              ))
                            ]),
                            _: 1
                          },
                          8,
                          ['modelValue', 'onUpdate:modelValue']
                        )
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
      _push(
        `<h3 id="_1-templatesimpleline" tabindex="-1" data-v-53116b35>1. templateSimpleLine <a class="header-anchor" href="#_1-templatesimpleline" aria-label="Permalink to &quot;1. templateSimpleLine&quot;" data-v-53116b35>​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'line',
            data: dataSimpleLine,
            'template-patch': templateAllLine.value.templateSimpleLine,
            'custom-option': customOption.value
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-53116b35><summary data-v-53116b35>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-53116b35><button title="Copy Code" class="copy" data-v-53116b35></button><span class="lang" data-v-53116b35>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-53116b35><code data-v-53116b35><span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> dataSimpleLine</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  axisData: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;Mon&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;Tue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;Wed&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;Thu&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;Fri&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;Sat&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;Sun&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>],</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  seriesData: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>820</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>932</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>901</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>934</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1290</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1330</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1320</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>]</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>};</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> templateAllLine</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>({</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  templateSimpleLine: {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    labelPosition: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    tooltip: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;cross&#39;</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>});</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> customOption</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>({</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  xAxis: [</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      axisLabel: {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>        rotate: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>45</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>        align: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;center&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>        margin: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>24</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>        interval: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>0</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  ]</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-53116b35><span class="line-number" data-v-53116b35>1</span><br data-v-53116b35><span class="line-number" data-v-53116b35>2</span><br data-v-53116b35><span class="line-number" data-v-53116b35>3</span><br data-v-53116b35><span class="line-number" data-v-53116b35>4</span><br data-v-53116b35><span class="line-number" data-v-53116b35>5</span><br data-v-53116b35><span class="line-number" data-v-53116b35>6</span><br data-v-53116b35><span class="line-number" data-v-53116b35>7</span><br data-v-53116b35><span class="line-number" data-v-53116b35>8</span><br data-v-53116b35><span class="line-number" data-v-53116b35>9</span><br data-v-53116b35><span class="line-number" data-v-53116b35>10</span><br data-v-53116b35><span class="line-number" data-v-53116b35>11</span><br data-v-53116b35><span class="line-number" data-v-53116b35>12</span><br data-v-53116b35><span class="line-number" data-v-53116b35>13</span><br data-v-53116b35><span class="line-number" data-v-53116b35>14</span><br data-v-53116b35><span class="line-number" data-v-53116b35>15</span><br data-v-53116b35><span class="line-number" data-v-53116b35>16</span><br data-v-53116b35><span class="line-number" data-v-53116b35>17</span><br data-v-53116b35><span class="line-number" data-v-53116b35>18</span><br data-v-53116b35><span class="line-number" data-v-53116b35>19</span><br data-v-53116b35><span class="line-number" data-v-53116b35>20</span><br data-v-53116b35><span class="line-number" data-v-53116b35>21</span><br data-v-53116b35><span class="line-number" data-v-53116b35>22</span><br data-v-53116b35></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-53116b35><button title="Copy Code" class="copy" data-v-53116b35></button><span class="lang" data-v-53116b35>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-53116b35><code data-v-53116b35><span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-53116b35>LSChart</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35>  template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;line&quot;</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35>  :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;dataSimpleLine&quot;</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35>  :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;templateAllLine.templateSimpleLine&quot;</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35>  :custom-option</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;customOption&quot;</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-53116b35><span class="line-number" data-v-53116b35>1</span><br data-v-53116b35><span class="line-number" data-v-53116b35>2</span><br data-v-53116b35><span class="line-number" data-v-53116b35>3</span><br data-v-53116b35><span class="line-number" data-v-53116b35>4</span><br data-v-53116b35><span class="line-number" data-v-53116b35>5</span><br data-v-53116b35><span class="line-number" data-v-53116b35>6</span><br data-v-53116b35></div></div></details><h3 id="_2-templatemultipleline" tabindex="-1" data-v-53116b35>2. templateMultipleLine <a class="header-anchor" href="#_2-templatemultipleline" aria-label="Permalink to &quot;2. templateMultipleLine&quot;" data-v-53116b35>​</a></h3>`);
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'line',
            data: dataMultipleLine,
            'template-patch': templateAllLine.value.templateMultipleLine
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-53116b35><summary data-v-53116b35>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-53116b35><button title="Copy Code" class="copy" data-v-53116b35></button><span class="lang" data-v-53116b35>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-53116b35><code data-v-53116b35><span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> dataMultipleLine</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  axisData: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;周一&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;周二&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;周三&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;周四&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;周五&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;周六&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;周日&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>],</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  seriesData: [</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;Email&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;line&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>120</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>132</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>101</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>134</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>90</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>230</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>210</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>]</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;name&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;line&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>220</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>182</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>191</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>234</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>290</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>330</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>310</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>]</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;address&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;line&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>22</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>66</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>99</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>234</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>33</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>56</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>310</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>]</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  ]</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>};</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> templateAllLine</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>({</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  templateMultipleLine: {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    labelPosition: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;multiple&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    smooth: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    areaStyle: {},</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    tooltip: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;cross&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    legend: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;Email&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;name&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;address&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>],</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    dataZoom: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;horizontal&#39;</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-53116b35><span class="line-number" data-v-53116b35>1</span><br data-v-53116b35><span class="line-number" data-v-53116b35>2</span><br data-v-53116b35><span class="line-number" data-v-53116b35>3</span><br data-v-53116b35><span class="line-number" data-v-53116b35>4</span><br data-v-53116b35><span class="line-number" data-v-53116b35>5</span><br data-v-53116b35><span class="line-number" data-v-53116b35>6</span><br data-v-53116b35><span class="line-number" data-v-53116b35>7</span><br data-v-53116b35><span class="line-number" data-v-53116b35>8</span><br data-v-53116b35><span class="line-number" data-v-53116b35>9</span><br data-v-53116b35><span class="line-number" data-v-53116b35>10</span><br data-v-53116b35><span class="line-number" data-v-53116b35>11</span><br data-v-53116b35><span class="line-number" data-v-53116b35>12</span><br data-v-53116b35><span class="line-number" data-v-53116b35>13</span><br data-v-53116b35><span class="line-number" data-v-53116b35>14</span><br data-v-53116b35><span class="line-number" data-v-53116b35>15</span><br data-v-53116b35><span class="line-number" data-v-53116b35>16</span><br data-v-53116b35><span class="line-number" data-v-53116b35>17</span><br data-v-53116b35><span class="line-number" data-v-53116b35>18</span><br data-v-53116b35><span class="line-number" data-v-53116b35>19</span><br data-v-53116b35><span class="line-number" data-v-53116b35>20</span><br data-v-53116b35><span class="line-number" data-v-53116b35>21</span><br data-v-53116b35><span class="line-number" data-v-53116b35>22</span><br data-v-53116b35><span class="line-number" data-v-53116b35>23</span><br data-v-53116b35><span class="line-number" data-v-53116b35>24</span><br data-v-53116b35><span class="line-number" data-v-53116b35>25</span><br data-v-53116b35><span class="line-number" data-v-53116b35>26</span><br data-v-53116b35><span class="line-number" data-v-53116b35>27</span><br data-v-53116b35><span class="line-number" data-v-53116b35>28</span><br data-v-53116b35><span class="line-number" data-v-53116b35>29</span><br data-v-53116b35><span class="line-number" data-v-53116b35>30</span><br data-v-53116b35><span class="line-number" data-v-53116b35>31</span><br data-v-53116b35></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-53116b35><button title="Copy Code" class="copy" data-v-53116b35></button><span class="lang" data-v-53116b35>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-53116b35><code data-v-53116b35><span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-53116b35>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;line&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;dataMultipleLine&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;templateAllLine.templateMultipleLine&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-53116b35><span class="line-number" data-v-53116b35>1</span><br data-v-53116b35></div></div></details><h3 id="_3-templatelinebar" tabindex="-1" data-v-53116b35>3. templateLineBar <a class="header-anchor" href="#_3-templatelinebar" aria-label="Permalink to &quot;3. templateLineBar&quot;" data-v-53116b35>​</a></h3>`);
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'line',
            data: dataLineBarLine,
            'template-patch': templateAllLine.value.templateLineBar
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-53116b35><summary data-v-53116b35>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-53116b35><button title="Copy Code" class="copy" data-v-53116b35></button><span class="lang" data-v-53116b35>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-53116b35><code data-v-53116b35><span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> temperatureData</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> [</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;73.55&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726174800000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;75.72&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726178400000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;76.77&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726182000000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;75.68&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726185600000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;76.13&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726189200000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;74.85&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726192800000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;75.95&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726196400000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;75.80&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726200000000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;74.35&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726203600000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;74.33&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726207200000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;74.02&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726210800000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;76.27&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726214400000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>];</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> humidity</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> [</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;30.67&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726174800000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;28.82&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726178400000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.82&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726182000000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.25&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726185600000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;30.52&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726189200000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.65&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726192800000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.70&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726196400000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;30.18&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726200000000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.47&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726203600000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.33&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726207200000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;30.58&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726210800000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.13&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726214400000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>];</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> humidity</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> [</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;30.67&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726174800000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;28.82&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726178400000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.82&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726182000000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.25&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726185600000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;30.52&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726189200000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.65&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726192800000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.70&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726196400000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;30.18&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726200000000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.47&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726203600000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.33&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726207200000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;30.58&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726210800000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;29.13&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726214400000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>];</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> dataLineBarLine</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  axisData: temperatureData.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35>map</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#E36209', '--shiki-dark': '#FFAB70' })}" data-v-53116b35>item</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =&gt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> item.propertyTime),</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  seriesData: [</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;line&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      data: temperatureData.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35>map</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#E36209', '--shiki-dark': '#FFAB70' })}" data-v-53116b35>item</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =&gt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> item.propertyValue)</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;bar&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      data: humidity.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35>map</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#E36209', '--shiki-dark': '#FFAB70' })}" data-v-53116b35>item</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =&gt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> item.propertyValue)</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  ]</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>};</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> templateAllLine</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>({</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  templateLineBar: {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    labelPosition: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;multiple&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    smooth: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    lineBar: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>true</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-53116b35><span class="line-number" data-v-53116b35>1</span><br data-v-53116b35><span class="line-number" data-v-53116b35>2</span><br data-v-53116b35><span class="line-number" data-v-53116b35>3</span><br data-v-53116b35><span class="line-number" data-v-53116b35>4</span><br data-v-53116b35><span class="line-number" data-v-53116b35>5</span><br data-v-53116b35><span class="line-number" data-v-53116b35>6</span><br data-v-53116b35><span class="line-number" data-v-53116b35>7</span><br data-v-53116b35><span class="line-number" data-v-53116b35>8</span><br data-v-53116b35><span class="line-number" data-v-53116b35>9</span><br data-v-53116b35><span class="line-number" data-v-53116b35>10</span><br data-v-53116b35><span class="line-number" data-v-53116b35>11</span><br data-v-53116b35><span class="line-number" data-v-53116b35>12</span><br data-v-53116b35><span class="line-number" data-v-53116b35>13</span><br data-v-53116b35><span class="line-number" data-v-53116b35>14</span><br data-v-53116b35><span class="line-number" data-v-53116b35>15</span><br data-v-53116b35><span class="line-number" data-v-53116b35>16</span><br data-v-53116b35><span class="line-number" data-v-53116b35>17</span><br data-v-53116b35><span class="line-number" data-v-53116b35>18</span><br data-v-53116b35><span class="line-number" data-v-53116b35>19</span><br data-v-53116b35><span class="line-number" data-v-53116b35>20</span><br data-v-53116b35><span class="line-number" data-v-53116b35>21</span><br data-v-53116b35><span class="line-number" data-v-53116b35>22</span><br data-v-53116b35><span class="line-number" data-v-53116b35>23</span><br data-v-53116b35><span class="line-number" data-v-53116b35>24</span><br data-v-53116b35><span class="line-number" data-v-53116b35>25</span><br data-v-53116b35><span class="line-number" data-v-53116b35>26</span><br data-v-53116b35><span class="line-number" data-v-53116b35>27</span><br data-v-53116b35><span class="line-number" data-v-53116b35>28</span><br data-v-53116b35><span class="line-number" data-v-53116b35>29</span><br data-v-53116b35><span class="line-number" data-v-53116b35>30</span><br data-v-53116b35><span class="line-number" data-v-53116b35>31</span><br data-v-53116b35><span class="line-number" data-v-53116b35>32</span><br data-v-53116b35><span class="line-number" data-v-53116b35>33</span><br data-v-53116b35><span class="line-number" data-v-53116b35>34</span><br data-v-53116b35><span class="line-number" data-v-53116b35>35</span><br data-v-53116b35><span class="line-number" data-v-53116b35>36</span><br data-v-53116b35><span class="line-number" data-v-53116b35>37</span><br data-v-53116b35><span class="line-number" data-v-53116b35>38</span><br data-v-53116b35><span class="line-number" data-v-53116b35>39</span><br data-v-53116b35><span class="line-number" data-v-53116b35>40</span><br data-v-53116b35><span class="line-number" data-v-53116b35>41</span><br data-v-53116b35><span class="line-number" data-v-53116b35>42</span><br data-v-53116b35><span class="line-number" data-v-53116b35>43</span><br data-v-53116b35><span class="line-number" data-v-53116b35>44</span><br data-v-53116b35><span class="line-number" data-v-53116b35>45</span><br data-v-53116b35><span class="line-number" data-v-53116b35>46</span><br data-v-53116b35><span class="line-number" data-v-53116b35>47</span><br data-v-53116b35><span class="line-number" data-v-53116b35>48</span><br data-v-53116b35><span class="line-number" data-v-53116b35>49</span><br data-v-53116b35><span class="line-number" data-v-53116b35>50</span><br data-v-53116b35><span class="line-number" data-v-53116b35>51</span><br data-v-53116b35><span class="line-number" data-v-53116b35>52</span><br data-v-53116b35><span class="line-number" data-v-53116b35>53</span><br data-v-53116b35><span class="line-number" data-v-53116b35>54</span><br data-v-53116b35><span class="line-number" data-v-53116b35>55</span><br data-v-53116b35><span class="line-number" data-v-53116b35>56</span><br data-v-53116b35><span class="line-number" data-v-53116b35>57</span><br data-v-53116b35><span class="line-number" data-v-53116b35>58</span><br data-v-53116b35><span class="line-number" data-v-53116b35>59</span><br data-v-53116b35><span class="line-number" data-v-53116b35>60</span><br data-v-53116b35><span class="line-number" data-v-53116b35>61</span><br data-v-53116b35><span class="line-number" data-v-53116b35>62</span><br data-v-53116b35><span class="line-number" data-v-53116b35>63</span><br data-v-53116b35><span class="line-number" data-v-53116b35>64</span><br data-v-53116b35><span class="line-number" data-v-53116b35>65</span><br data-v-53116b35><span class="line-number" data-v-53116b35>66</span><br data-v-53116b35><span class="line-number" data-v-53116b35>67</span><br data-v-53116b35><span class="line-number" data-v-53116b35>68</span><br data-v-53116b35><span class="line-number" data-v-53116b35>69</span><br data-v-53116b35><span class="line-number" data-v-53116b35>70</span><br data-v-53116b35><span class="line-number" data-v-53116b35>71</span><br data-v-53116b35><span class="line-number" data-v-53116b35>72</span><br data-v-53116b35><span class="line-number" data-v-53116b35>73</span><br data-v-53116b35><span class="line-number" data-v-53116b35>74</span><br data-v-53116b35><span class="line-number" data-v-53116b35>75</span><br data-v-53116b35><span class="line-number" data-v-53116b35>76</span><br data-v-53116b35><span class="line-number" data-v-53116b35>77</span><br data-v-53116b35><span class="line-number" data-v-53116b35>78</span><br data-v-53116b35><span class="line-number" data-v-53116b35>79</span><br data-v-53116b35><span class="line-number" data-v-53116b35>80</span><br data-v-53116b35><span class="line-number" data-v-53116b35>81</span><br data-v-53116b35><span class="line-number" data-v-53116b35>82</span><br data-v-53116b35><span class="line-number" data-v-53116b35>83</span><br data-v-53116b35><span class="line-number" data-v-53116b35>84</span><br data-v-53116b35><span class="line-number" data-v-53116b35>85</span><br data-v-53116b35><span class="line-number" data-v-53116b35>86</span><br data-v-53116b35><span class="line-number" data-v-53116b35>87</span><br data-v-53116b35><span class="line-number" data-v-53116b35>88</span><br data-v-53116b35><span class="line-number" data-v-53116b35>89</span><br data-v-53116b35><span class="line-number" data-v-53116b35>90</span><br data-v-53116b35><span class="line-number" data-v-53116b35>91</span><br data-v-53116b35><span class="line-number" data-v-53116b35>92</span><br data-v-53116b35><span class="line-number" data-v-53116b35>93</span><br data-v-53116b35><span class="line-number" data-v-53116b35>94</span><br data-v-53116b35><span class="line-number" data-v-53116b35>95</span><br data-v-53116b35><span class="line-number" data-v-53116b35>96</span><br data-v-53116b35><span class="line-number" data-v-53116b35>97</span><br data-v-53116b35><span class="line-number" data-v-53116b35>98</span><br data-v-53116b35><span class="line-number" data-v-53116b35>99</span><br data-v-53116b35><span class="line-number" data-v-53116b35>100</span><br data-v-53116b35><span class="line-number" data-v-53116b35>101</span><br data-v-53116b35><span class="line-number" data-v-53116b35>102</span><br data-v-53116b35><span class="line-number" data-v-53116b35>103</span><br data-v-53116b35><span class="line-number" data-v-53116b35>104</span><br data-v-53116b35><span class="line-number" data-v-53116b35>105</span><br data-v-53116b35><span class="line-number" data-v-53116b35>106</span><br data-v-53116b35><span class="line-number" data-v-53116b35>107</span><br data-v-53116b35><span class="line-number" data-v-53116b35>108</span><br data-v-53116b35><span class="line-number" data-v-53116b35>109</span><br data-v-53116b35><span class="line-number" data-v-53116b35>110</span><br data-v-53116b35><span class="line-number" data-v-53116b35>111</span><br data-v-53116b35><span class="line-number" data-v-53116b35>112</span><br data-v-53116b35><span class="line-number" data-v-53116b35>113</span><br data-v-53116b35><span class="line-number" data-v-53116b35>114</span><br data-v-53116b35><span class="line-number" data-v-53116b35>115</span><br data-v-53116b35><span class="line-number" data-v-53116b35>116</span><br data-v-53116b35><span class="line-number" data-v-53116b35>117</span><br data-v-53116b35><span class="line-number" data-v-53116b35>118</span><br data-v-53116b35><span class="line-number" data-v-53116b35>119</span><br data-v-53116b35><span class="line-number" data-v-53116b35>120</span><br data-v-53116b35><span class="line-number" data-v-53116b35>121</span><br data-v-53116b35><span class="line-number" data-v-53116b35>122</span><br data-v-53116b35><span class="line-number" data-v-53116b35>123</span><br data-v-53116b35><span class="line-number" data-v-53116b35>124</span><br data-v-53116b35><span class="line-number" data-v-53116b35>125</span><br data-v-53116b35><span class="line-number" data-v-53116b35>126</span><br data-v-53116b35><span class="line-number" data-v-53116b35>127</span><br data-v-53116b35><span class="line-number" data-v-53116b35>128</span><br data-v-53116b35><span class="line-number" data-v-53116b35>129</span><br data-v-53116b35><span class="line-number" data-v-53116b35>130</span><br data-v-53116b35><span class="line-number" data-v-53116b35>131</span><br data-v-53116b35><span class="line-number" data-v-53116b35>132</span><br data-v-53116b35><span class="line-number" data-v-53116b35>133</span><br data-v-53116b35><span class="line-number" data-v-53116b35>134</span><br data-v-53116b35><span class="line-number" data-v-53116b35>135</span><br data-v-53116b35><span class="line-number" data-v-53116b35>136</span><br data-v-53116b35><span class="line-number" data-v-53116b35>137</span><br data-v-53116b35><span class="line-number" data-v-53116b35>138</span><br data-v-53116b35><span class="line-number" data-v-53116b35>139</span><br data-v-53116b35><span class="line-number" data-v-53116b35>140</span><br data-v-53116b35><span class="line-number" data-v-53116b35>141</span><br data-v-53116b35><span class="line-number" data-v-53116b35>142</span><br data-v-53116b35><span class="line-number" data-v-53116b35>143</span><br data-v-53116b35><span class="line-number" data-v-53116b35>144</span><br data-v-53116b35><span class="line-number" data-v-53116b35>145</span><br data-v-53116b35><span class="line-number" data-v-53116b35>146</span><br data-v-53116b35><span class="line-number" data-v-53116b35>147</span><br data-v-53116b35><span class="line-number" data-v-53116b35>148</span><br data-v-53116b35><span class="line-number" data-v-53116b35>149</span><br data-v-53116b35><span class="line-number" data-v-53116b35>150</span><br data-v-53116b35><span class="line-number" data-v-53116b35>151</span><br data-v-53116b35><span class="line-number" data-v-53116b35>152</span><br data-v-53116b35><span class="line-number" data-v-53116b35>153</span><br data-v-53116b35><span class="line-number" data-v-53116b35>154</span><br data-v-53116b35><span class="line-number" data-v-53116b35>155</span><br data-v-53116b35><span class="line-number" data-v-53116b35>156</span><br data-v-53116b35><span class="line-number" data-v-53116b35>157</span><br data-v-53116b35><span class="line-number" data-v-53116b35>158</span><br data-v-53116b35><span class="line-number" data-v-53116b35>159</span><br data-v-53116b35><span class="line-number" data-v-53116b35>160</span><br data-v-53116b35><span class="line-number" data-v-53116b35>161</span><br data-v-53116b35><span class="line-number" data-v-53116b35>162</span><br data-v-53116b35><span class="line-number" data-v-53116b35>163</span><br data-v-53116b35><span class="line-number" data-v-53116b35>164</span><br data-v-53116b35><span class="line-number" data-v-53116b35>165</span><br data-v-53116b35><span class="line-number" data-v-53116b35>166</span><br data-v-53116b35><span class="line-number" data-v-53116b35>167</span><br data-v-53116b35><span class="line-number" data-v-53116b35>168</span><br data-v-53116b35><span class="line-number" data-v-53116b35>169</span><br data-v-53116b35><span class="line-number" data-v-53116b35>170</span><br data-v-53116b35><span class="line-number" data-v-53116b35>171</span><br data-v-53116b35></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-53116b35><button title="Copy Code" class="copy" data-v-53116b35></button><span class="lang" data-v-53116b35>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-53116b35><code data-v-53116b35><span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-53116b35>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;line&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;dataLineBarLine&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;templateAllLine.templateLineBar&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-53116b35><span class="line-number" data-v-53116b35>1</span><br data-v-53116b35></div></div></details><h3 id="_4-templatedynamicline" tabindex="-1" data-v-53116b35>4. templateDynamicLine <a class="header-anchor" href="#_4-templatedynamicline" aria-label="Permalink to &quot;4. templateDynamicLine&quot;" data-v-53116b35>​</a></h3>`);
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'line',
            data: dynamicLine,
            'template-patch': templateAllLine.value.templateDynamicLine,
            width: '800',
            height: '400'
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-53116b35><summary data-v-53116b35>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-53116b35><button title="Copy Code" class="copy" data-v-53116b35></button><span class="lang" data-v-53116b35>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-53116b35><code data-v-53116b35><span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> temperatureData</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> [</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;73.55&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726174800000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;75.72&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726178400000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;76.77&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726182000000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;75.68&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726185600000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;76.13&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726189200000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;74.85&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726192800000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;75.95&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726196400000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;75.80&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726200000000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;74.35&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726203600000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;74.33&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726207200000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;74.02&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726210800000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  },</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyValue: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;76.27&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    propertyTime: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>1726214400000</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>];</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> dynamicLine</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  axisData: temperatureData.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35>map</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#E36209', '--shiki-dark': '#FFAB70' })}" data-v-53116b35>item</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =&gt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> item.propertyTime),</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  seriesData: [</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;line&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>      data: temperatureData.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35>map</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#E36209', '--shiki-dark': '#FFAB70' })}" data-v-53116b35>item</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =&gt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> item.propertyValue)</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  ]</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>};</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35> templateAllLine</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-53116b35> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>({</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  templateDynamicLine: {</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    labelPosition: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;multiple&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    tooltip: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&#39;cross&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>,</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>    dynamicAxis: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-53116b35>true</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>  }</span></span>
<span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-53116b35><span class="line-number" data-v-53116b35>1</span><br data-v-53116b35><span class="line-number" data-v-53116b35>2</span><br data-v-53116b35><span class="line-number" data-v-53116b35>3</span><br data-v-53116b35><span class="line-number" data-v-53116b35>4</span><br data-v-53116b35><span class="line-number" data-v-53116b35>5</span><br data-v-53116b35><span class="line-number" data-v-53116b35>6</span><br data-v-53116b35><span class="line-number" data-v-53116b35>7</span><br data-v-53116b35><span class="line-number" data-v-53116b35>8</span><br data-v-53116b35><span class="line-number" data-v-53116b35>9</span><br data-v-53116b35><span class="line-number" data-v-53116b35>10</span><br data-v-53116b35><span class="line-number" data-v-53116b35>11</span><br data-v-53116b35><span class="line-number" data-v-53116b35>12</span><br data-v-53116b35><span class="line-number" data-v-53116b35>13</span><br data-v-53116b35><span class="line-number" data-v-53116b35>14</span><br data-v-53116b35><span class="line-number" data-v-53116b35>15</span><br data-v-53116b35><span class="line-number" data-v-53116b35>16</span><br data-v-53116b35><span class="line-number" data-v-53116b35>17</span><br data-v-53116b35><span class="line-number" data-v-53116b35>18</span><br data-v-53116b35><span class="line-number" data-v-53116b35>19</span><br data-v-53116b35><span class="line-number" data-v-53116b35>20</span><br data-v-53116b35><span class="line-number" data-v-53116b35>21</span><br data-v-53116b35><span class="line-number" data-v-53116b35>22</span><br data-v-53116b35><span class="line-number" data-v-53116b35>23</span><br data-v-53116b35><span class="line-number" data-v-53116b35>24</span><br data-v-53116b35><span class="line-number" data-v-53116b35>25</span><br data-v-53116b35><span class="line-number" data-v-53116b35>26</span><br data-v-53116b35><span class="line-number" data-v-53116b35>27</span><br data-v-53116b35><span class="line-number" data-v-53116b35>28</span><br data-v-53116b35><span class="line-number" data-v-53116b35>29</span><br data-v-53116b35><span class="line-number" data-v-53116b35>30</span><br data-v-53116b35><span class="line-number" data-v-53116b35>31</span><br data-v-53116b35><span class="line-number" data-v-53116b35>32</span><br data-v-53116b35><span class="line-number" data-v-53116b35>33</span><br data-v-53116b35><span class="line-number" data-v-53116b35>34</span><br data-v-53116b35><span class="line-number" data-v-53116b35>35</span><br data-v-53116b35><span class="line-number" data-v-53116b35>36</span><br data-v-53116b35><span class="line-number" data-v-53116b35>37</span><br data-v-53116b35><span class="line-number" data-v-53116b35>38</span><br data-v-53116b35><span class="line-number" data-v-53116b35>39</span><br data-v-53116b35><span class="line-number" data-v-53116b35>40</span><br data-v-53116b35><span class="line-number" data-v-53116b35>41</span><br data-v-53116b35><span class="line-number" data-v-53116b35>42</span><br data-v-53116b35><span class="line-number" data-v-53116b35>43</span><br data-v-53116b35><span class="line-number" data-v-53116b35>44</span><br data-v-53116b35><span class="line-number" data-v-53116b35>45</span><br data-v-53116b35><span class="line-number" data-v-53116b35>46</span><br data-v-53116b35><span class="line-number" data-v-53116b35>47</span><br data-v-53116b35><span class="line-number" data-v-53116b35>48</span><br data-v-53116b35><span class="line-number" data-v-53116b35>49</span><br data-v-53116b35><span class="line-number" data-v-53116b35>50</span><br data-v-53116b35><span class="line-number" data-v-53116b35>51</span><br data-v-53116b35><span class="line-number" data-v-53116b35>52</span><br data-v-53116b35><span class="line-number" data-v-53116b35>53</span><br data-v-53116b35><span class="line-number" data-v-53116b35>54</span><br data-v-53116b35><span class="line-number" data-v-53116b35>55</span><br data-v-53116b35><span class="line-number" data-v-53116b35>56</span><br data-v-53116b35><span class="line-number" data-v-53116b35>57</span><br data-v-53116b35><span class="line-number" data-v-53116b35>58</span><br data-v-53116b35><span class="line-number" data-v-53116b35>59</span><br data-v-53116b35><span class="line-number" data-v-53116b35>60</span><br data-v-53116b35><span class="line-number" data-v-53116b35>61</span><br data-v-53116b35><span class="line-number" data-v-53116b35>62</span><br data-v-53116b35><span class="line-number" data-v-53116b35>63</span><br data-v-53116b35><span class="line-number" data-v-53116b35>64</span><br data-v-53116b35><span class="line-number" data-v-53116b35>65</span><br data-v-53116b35><span class="line-number" data-v-53116b35>66</span><br data-v-53116b35><span class="line-number" data-v-53116b35>67</span><br data-v-53116b35></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-53116b35><button title="Copy Code" class="copy" data-v-53116b35></button><span class="lang" data-v-53116b35>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-53116b35><code data-v-53116b35><span class="line" data-v-53116b35><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-53116b35>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;line&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;dynamicLine&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;templateAllLine.templateDynamicLine&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;800&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-53116b35> height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-53116b35>&quot;400&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-53116b35> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-53116b35><span class="line-number" data-v-53116b35>1</span><br data-v-53116b35></div></div></details><h2 id="api" tabindex="-1" data-v-53116b35>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-53116b35>​</a></h2><h3 id="_1-attributes" tabindex="-1" data-v-53116b35>1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;" data-v-53116b35>​</a></h3><h4 id="_1-1-templatepatch-公共参数-templatepatch-对应的配置项" tabindex="-1" data-v-53116b35>1.1 templatePatch 公共参数 templatePatch 对应的配置项 <a class="header-anchor" href="#_1-1-templatepatch-公共参数-templatepatch-对应的配置项" aria-label="Permalink to &quot;1.1 templatePatch 公共参数 templatePatch 对应的配置项&quot;" data-v-53116b35>​</a></h4>`);
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableColumn),
            tableData: tableData.value
          },
          null,
          _parent
        )
      );
      _push(
        `<h4 id="_1-2-data-公共参数-data-对应的配置项" tabindex="-1" data-v-53116b35>1.2 data 公共参数 data 对应的配置项 <a class="header-anchor" href="#_1-2-data-公共参数-data-对应的配置项" aria-label="Permalink to &quot;1.2 data 公共参数 data 对应的配置项&quot;" data-v-53116b35>​</a></h4>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableColumn),
            tableData: tableData2.value
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/charts/line.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const line = /* @__PURE__ */ _export_sfc(_sfc_main, [['__scopeId', 'data-v-53116b35']]);
export { __pageData, line as default };
