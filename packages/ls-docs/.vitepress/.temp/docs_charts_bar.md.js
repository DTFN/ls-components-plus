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
  '{"title":"Bar 柱状图","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/charts/bar.md","filePath":"docs/charts/bar.md","lastUpdated":1728983795000}'
);
const __default__ = { name: 'docs/charts/bar.md' };
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
    const templateAll = ref({
      templatePatchSimple: {
        labelPosition: 'top',
        showBackground: true,
        showBarFont: false
      },
      templatePatchNegative: {
        labelPosition: 'both',
        type: 'negative',
        tooltip: 'shadow',
        legend: ['收入', '支出']
      },
      templatePatchWaterfall: {
        type: 'waterfall',
        tooltip: 'shadow',
        labelPosition: 'both',
        legend: ['收入', '支出']
      },
      templatePatchCategory: {
        type: 'categoryStack',
        tooltip: 'shadow',
        legend: ['直接访问', '邮件营销', '联盟广告', '视频广告']
      },
      templatePatchMultiBar: {
        type: 'multiBar',
        tooltip: 'cross',
        dataZoom: 'horizontal',
        labelPosition: 'top',
        legend: ['Forest', 'Steppe', 'Desert', 'Wetland']
      }
    });
    const dataSimple = {
      axisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      // seriesData: [120, 200, 150, 80, 70, 110, 0]
      seriesData: [120.1, 120.1, 120.1, 120.1, 120.1, 120.1, 120.2]
    };
    const dataNegative = {
      axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      seriesData: [
        { name: '收入', data: [320, 302, 341, 374, 390, 450, 420] },
        { name: '支出', data: [-120, -132, -101, -134, -190, -230, 0] }
      ]
    };
    const dataWaterfall = {
      axisData: (function () {
        let list = [];
        for (let i = 1; i <= 11; i++) {
          list.push('11月' + i + '日');
        }
        return list;
      })(),
      seriesData: [
        {
          name: 'temp',
          data: [0, 900, 1245, 1530, 1376, 1376, 0, 1689, 1856, 1495, 1292]
        },
        {
          name: '收入',
          data: [900, 345, 393, '-', '-', 0, 178, 286, '-', '-', '-']
        },
        {
          name: '支出',
          data: ['-', '-', '-', 108, 0, '-', '-', '-', 119, 361, 203]
        }
      ]
    };
    const dataCategory = {
      axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      seriesData: [
        {
          name: '直接访问',
          data: [320, 302, 301, 334, 0, 330, 320]
        },
        {
          name: '邮件营销',
          data: [120, 132, 101, 0, 90, 230, 210]
        },
        {
          name: '联盟广告',
          data: [220, 182, 191, 234, 290, 0, 310]
        },
        {
          name: '视频广告',
          data: [150, 212, 201, 0, 190, 330, 410]
        }
      ]
    };
    const dataMultiBar = {
      axisData: ['2012', '2013', '2014', '2015', '2016'],
      seriesData: [
        {
          name: 'Forest',
          data: [320, 332, 301, 0, 390]
        },
        {
          name: 'Steppe',
          data: [220, 182, 0, 234, 290]
        },
        {
          name: 'Desert',
          data: [150, 232, 201, 154, 0]
        },
        {
          name: 'Wetland',
          data: [98, 0, 101, 99, 40]
        }
      ]
    };
    function changeChartStyle() {
      [
        'templatePatchSimple',
        'templatePatchNegative',
        'templatePatchWaterfall',
        'templatePatchCategory',
        'templatePatchMultiBar'
      ].forEach(item => {
        templateAll.value[item].theme = formInline.value.themeModel;
        templateAll.value[item].axis = formInline.value.axis;
        templateAll.value[item].labelPosition = formInline.value.pos;
      });
    }
    const tableData = ref([
      {
        name: 'type',
        desc: '模板类型，可选项：simple / multiBar / negative / waterfall / categoryStack',
        type: 'string',
        value: 'simple'
      },
      {
        name: 'axis',
        desc: '基于x或y展示数据, 可选项：x / y',
        type: 'string',
        value: 'x'
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
        `<div${ssrRenderAttrs(_attrs)} data-v-0dd20773><h1 id="bar-柱状图" tabindex="-1" data-v-0dd20773>Bar 柱状图 <a class="header-anchor" href="#bar-柱状图" aria-label="Permalink to &quot;Bar 柱状图&quot;" data-v-0dd20773>​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block" data-v-0dd20773><p class="custom-block-title" data-v-0dd20773>快速创建常用类型的柱状图。</p></div><h2 id="使用方式" tabindex="-1" data-v-0dd20773>使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;" data-v-0dd20773>​</a></h2><br data-v-0dd20773>`
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
        `<h3 id="_1-templatepatchsimple" tabindex="-1" data-v-0dd20773>1. templatePatchSimple <a class="header-anchor" href="#_1-templatepatchsimple" aria-label="Permalink to &quot;1. templatePatchSimple&quot;" data-v-0dd20773>​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'bar',
            data: dataSimple,
            'template-patch': templateAll.value.templatePatchSimple,
            'custom-option': customOption.value
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-0dd20773><summary data-v-0dd20773>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-0dd20773><button title="Copy Code" class="copy" data-v-0dd20773></button><span class="lang" data-v-0dd20773>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-0dd20773><code data-v-0dd20773><span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> dataSimple</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  axisData: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Mon&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Tue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Wed&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Thu&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Fri&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Sat&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Sun&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>],</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  seriesData: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>120.1</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>200</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>150</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>80</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>70</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>110</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>}</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> templateAll</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>:</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> any</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>({</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  templatePatchSimple: {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    labelPosition: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    showBackground: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    showBarFont: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>false</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  }</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>})</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> customOption</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>({</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  xAxis: [</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      axisLabel: {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>        rotate: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>45</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>        align: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;center&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>        margin: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>24</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      }</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    }</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  ]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-0dd20773><span class="line-number" data-v-0dd20773>1</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>2</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>3</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>4</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>5</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>6</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>7</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>8</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>9</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>10</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>11</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>12</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>13</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>14</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>15</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>16</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>17</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>18</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>19</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>20</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>21</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>22</span><br data-v-0dd20773></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-0dd20773><button title="Copy Code" class="copy" data-v-0dd20773></button><span class="lang" data-v-0dd20773>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-0dd20773><code data-v-0dd20773><span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-0dd20773>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;bar&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;dataSimple&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;templateAll.templatePatchSimple&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> :custom-option</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;customOption&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-0dd20773><span class="line-number" data-v-0dd20773>1</span><br data-v-0dd20773></div></div></details><h3 id="_2-templatepatchnegative" tabindex="-1" data-v-0dd20773>2. templatePatchNegative <a class="header-anchor" href="#_2-templatepatchnegative" aria-label="Permalink to &quot;2. templatePatchNegative&quot;" data-v-0dd20773>​</a></h3>`);
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'bar',
            data: dataNegative,
            'template-patch': templateAll.value.templatePatchNegative
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-0dd20773><summary data-v-0dd20773>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-0dd20773><button title="Copy Code" class="copy" data-v-0dd20773></button><span class="lang" data-v-0dd20773>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-0dd20773><code data-v-0dd20773><span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> dataNegative</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  axisData: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周一&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周二&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周三&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周四&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周五&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周六&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周日&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>],</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  seriesData: [</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    { name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;收入&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>320</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>302</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>341</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>374</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>390</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>450</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>420</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>] },</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    { name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;支出&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>-</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>120</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>-</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>132</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>-</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>101</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>-</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>134</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>-</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>190</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>-</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>230</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>] }</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  ]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>};</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> templateAll</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>({</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  templatePatchNegative: {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    labelPosition: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;both&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;negative&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    tooltip: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;shadow&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    legend: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;收入&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;支出&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  }</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-0dd20773><span class="line-number" data-v-0dd20773>1</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>2</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>3</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>4</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>5</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>6</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>7</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>8</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>9</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>10</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>11</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>12</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>13</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>14</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>15</span><br data-v-0dd20773></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-0dd20773><button title="Copy Code" class="copy" data-v-0dd20773></button><span class="lang" data-v-0dd20773>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-0dd20773><code data-v-0dd20773><span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-0dd20773>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;bar&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;dataNegative&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;templateAll.templatePatchNegative&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-0dd20773><span class="line-number" data-v-0dd20773>1</span><br data-v-0dd20773></div></div></details><h3 id="_3-templatepatchwaterfall" tabindex="-1" data-v-0dd20773>3. templatePatchWaterfall <a class="header-anchor" href="#_3-templatepatchwaterfall" aria-label="Permalink to &quot;3. templatePatchWaterfall&quot;" data-v-0dd20773>​</a></h3>`);
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'bar',
            data: dataWaterfall,
            'template-patch': templateAll.value.templatePatchWaterfall
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-0dd20773><summary data-v-0dd20773>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-0dd20773><button title="Copy Code" class="copy" data-v-0dd20773></button><span class="lang" data-v-0dd20773>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-0dd20773><code data-v-0dd20773><span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> dataWaterfall</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  axisData: (</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>function</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> () {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>    let</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> list </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> [];</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>    for</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> (</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>let</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> i </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> 1</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>; i </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>&lt;=</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> 11</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>; i</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>++</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>) {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      list.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773>push</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;11月&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773> +</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> i </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>+</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773> &#39;日&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>);</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    }</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>    return</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> list;</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  })(),</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  seriesData: [</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;temp&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>900</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>1245</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>1530</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>1376</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>1376</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>1689</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>1856</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>1495</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>1292</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    },</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;收入&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>900</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>345</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>393</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;-&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;-&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>178</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>286</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;-&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;-&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;-&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    },</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;支出&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;-&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;-&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;-&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>108</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;-&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;-&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;-&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>119</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>361</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>203</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    }</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  ]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>};</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> templateAll</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>({</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  templatePatchWaterfall: {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;waterfall&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    tooltip: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;shadow&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    labelPosition: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;both&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    legend: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;收入&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;支出&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  }</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-0dd20773><span class="line-number" data-v-0dd20773>1</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>2</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>3</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>4</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>5</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>6</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>7</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>8</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>9</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>10</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>11</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>12</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>13</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>14</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>15</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>16</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>17</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>18</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>19</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>20</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>21</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>22</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>23</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>24</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>25</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>26</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>27</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>28</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>29</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>30</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>31</span><br data-v-0dd20773></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-0dd20773><button title="Copy Code" class="copy" data-v-0dd20773></button><span class="lang" data-v-0dd20773>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-0dd20773><code data-v-0dd20773><span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-0dd20773>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;bar&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;dataWaterfall&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;templateAll.templatePatchWaterfall&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-0dd20773><span class="line-number" data-v-0dd20773>1</span><br data-v-0dd20773></div></div></details><h3 id="_4-templatepatchcategory" tabindex="-1" data-v-0dd20773>4. templatePatchCategory <a class="header-anchor" href="#_4-templatepatchcategory" aria-label="Permalink to &quot;4. templatePatchCategory&quot;" data-v-0dd20773>​</a></h3>`);
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'bar',
            data: dataCategory,
            'template-patch': templateAll.value.templatePatchCategory
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-0dd20773><summary data-v-0dd20773>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-0dd20773><button title="Copy Code" class="copy" data-v-0dd20773></button><span class="lang" data-v-0dd20773>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-0dd20773><code data-v-0dd20773><span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> dataCategory</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  axisData: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周一&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周二&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周三&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周四&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周五&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周六&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;周日&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>],</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  seriesData: [</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;直接访问&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>320</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>302</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>301</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>334</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>330</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>320</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    },</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;邮件营销&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>120</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>132</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>101</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>90</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>230</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>210</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    },</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;联盟广告&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>220</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>182</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>191</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>234</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>290</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>310</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    },</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;视频广告&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>150</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>212</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>201</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>190</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>330</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>410</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    }</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  ]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>};</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> templateAll</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>({</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  templatePatchCategory: {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;categoryStack&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    tooltip: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;shadow&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    legend: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;直接访问&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;邮件营销&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;联盟广告&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;视频广告&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  }</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-0dd20773><span class="line-number" data-v-0dd20773>1</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>2</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>3</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>4</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>5</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>6</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>7</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>8</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>9</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>10</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>11</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>12</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>13</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>14</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>15</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>16</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>17</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>18</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>19</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>20</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>21</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>22</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>23</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>24</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>25</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>26</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>27</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>28</span><br data-v-0dd20773></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-0dd20773><button title="Copy Code" class="copy" data-v-0dd20773></button><span class="lang" data-v-0dd20773>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-0dd20773><code data-v-0dd20773><span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-0dd20773>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;bar&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;dataCategory&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;templateAll.templatePatchCategory&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-0dd20773><span class="line-number" data-v-0dd20773>1</span><br data-v-0dd20773></div></div></details><h3 id="_5-templatepatchmultibar" tabindex="-1" data-v-0dd20773>5. templatePatchMultiBar <a class="header-anchor" href="#_5-templatepatchmultibar" aria-label="Permalink to &quot;5. templatePatchMultiBar&quot;" data-v-0dd20773>​</a></h3>`);
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'bar',
            data: dataMultiBar,
            'template-patch': templateAll.value.templatePatchMultiBar
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-0dd20773><summary data-v-0dd20773>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-0dd20773><button title="Copy Code" class="copy" data-v-0dd20773></button><span class="lang" data-v-0dd20773>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-0dd20773><code data-v-0dd20773><span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> dataMultiBar</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  axisData: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;2012&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;2013&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;2014&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;2015&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;2016&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>],</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  seriesData: [</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Forest&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>320</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>332</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>301</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>390</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    },</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Steppe&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>220</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>182</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>234</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>290</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    },</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Desert&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>150</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>232</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>201</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>154</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    },</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Wetland&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>      data: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>98</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>101</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>99</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773>40</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    }</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  ]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>};</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-0dd20773> templateAll</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-0dd20773> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>({</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  templatePatchMultiBar: {</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;multiBar&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    tooltip: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;cross&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    dataZoom: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;horizontal&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    labelPosition: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>,</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>    legend: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Forest&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Steppe&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Desert&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&#39;Wetland&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>]</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>  }</span></span>
<span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-0dd20773><span class="line-number" data-v-0dd20773>1</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>2</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>3</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>4</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>5</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>6</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>7</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>8</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>9</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>10</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>11</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>12</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>13</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>14</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>15</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>16</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>17</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>18</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>19</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>20</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>21</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>22</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>23</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>24</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>25</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>26</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>27</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>28</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>29</span><br data-v-0dd20773><span class="line-number" data-v-0dd20773>30</span><br data-v-0dd20773></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-0dd20773><button title="Copy Code" class="copy" data-v-0dd20773></button><span class="lang" data-v-0dd20773>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-0dd20773><code data-v-0dd20773><span class="line" data-v-0dd20773><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-0dd20773>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;bar&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;dataMultiBar&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-0dd20773> :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-0dd20773>&quot;templateAll.templatePatchMultiBar&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-0dd20773> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-0dd20773><span class="line-number" data-v-0dd20773>1</span><br data-v-0dd20773></div></div></details><h2 id="api" tabindex="-1" data-v-0dd20773>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-0dd20773>​</a></h2><h3 id="_1-attributes" tabindex="-1" data-v-0dd20773>1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;" data-v-0dd20773>​</a></h3><h4 id="_1-1-templatepatch-公共参数-templatepatch-对应的配置项" tabindex="-1" data-v-0dd20773>1.1 templatePatch 公共参数 templatePatch 对应的配置项 <a class="header-anchor" href="#_1-1-templatepatch-公共参数-templatepatch-对应的配置项" aria-label="Permalink to &quot;1.1 templatePatch 公共参数 templatePatch 对应的配置项&quot;" data-v-0dd20773>​</a></h4>`);
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
        `<h4 id="_1-2-data-公共参数-data-对应的配置项" tabindex="-1" data-v-0dd20773>1.2 data 公共参数 data 对应的配置项 <a class="header-anchor" href="#_1-2-data-公共参数-data-对应的配置项" aria-label="Permalink to &quot;1.2 data 公共参数 data 对应的配置项&quot;" data-v-0dd20773>​</a></h4>`
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/charts/bar.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bar = /* @__PURE__ */ _export_sfc(_sfc_main, [['__scopeId', 'data-v-0dd20773']]);
export { __pageData, bar as default };
