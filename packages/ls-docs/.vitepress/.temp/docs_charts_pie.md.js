import {
  useSSRContext,
  ref,
  resolveComponent,
  unref,
  withCtx,
  openBlock,
  createBlock,
  Fragment,
  renderList,
  createVNode
} from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { t as tableColumn } from './index.CZ5Oz5P9.js';
import { ElForm, ElFormItem, ElSelect, ElOption } from 'element-plus';
import { _ as _export_sfc } from './plugin-vue_export-helper.1tPrXgE0.js';
const __pageData = JSON.parse(
  '{"title":"Pie 饼图","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/charts/pie.md","filePath":"docs/charts/pie.md","lastUpdated":1728983795000}'
);
const __default__ = { name: 'docs/charts/pie.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const formInline = ref({
      themeModel: 'default'
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
    const customOptionPie = ref({
      series: [
        {
          roseType: 'area'
        }
      ]
    });
    const customOptionPie2 = ref({
      graphic: [
        {
          type: 'text',
          left: 'center',
          // 水平居中
          // top: 'center', // 垂直居中
          top: '40%',
          style: {
            text: '中心内容',
            // 显示的文本
            textAlign: 'center',
            fill: '#000',
            // 文本颜色
            fontSize: 20
          }
        },
        {
          type: 'text',
          left: 'center',
          // 水平居中
          // top: 'center', // 垂直居中
          top: '50%',
          style: {
            text: '100%',
            // 显示的文本
            textAlign: 'center',
            fill: '#000',
            // 文本颜色
            fontSize: 20
          }
        }
      ]
    });
    const templateAllPie = ref({
      template1: {},
      template2: {
        radius: ['45%', '60%']
      },
      template3: {
        radius: ['10%', '60%'],
        roseType: 'radius'
      },
      template4: {
        radius: ['45%', '60%'],
        innerRadius: [0, '35%']
      }
    });
    const seriesDataPie = [
      { value: 1048, name: '图例 A' },
      { value: 735, name: '图例 B' },
      { value: 580, name: '图例 C' },
      { value: 484, name: '图例 D' },
      { value: 300, name: '图例 E' }
    ];
    const innerDataPie = [
      { value: 1548, name: '图例 1' },
      { value: 775, name: '图例 2' },
      { value: 679, name: '图例 3' }
    ];
    function changeChartStyle() {
      ['template1', 'template2', 'template3', 'template4'].forEach(item => {
        templateAllPie.value[item].theme = formInline.value.themeModel;
      });
    }
    const tableData = ref([
      {
        name: 'color',
        desc: '调色盘颜色列表。会依次循环从该列表中取颜色作为系列颜色',
        type: 'array',
        value: '[#2285FF, #FF7D00, #00CDDC, #FB466C, #FFC917, #8CEAFF, #A16FFD, #FD8BFF]'
      },
      {
        name: 'backgroundColor',
        desc: '背景颜色',
        type: 'string',
        value: '-'
      },
      {
        name: 'showTooltip',
        desc: '鼠标移入是否显示数据提示',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'tooltipTrigger',
        desc: '提示框组件触发类型, 可选项：item / axis / none ；item： 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用；axis：坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用；none：不触发',
        type: 'string',
        value: 'item'
      },
      {
        name: 'tooltipFormatter',
        desc: '提示框浮层内容格式器，支持字符串模板和回调函数两种形式',
        type: 'string / function',
        value: '-'
      },
      {
        name: 'legendType',
        desc: `图例组件的类型, 可选项：plain / scroll', plain：普通图例，缺省就是普通图例。 scroll：可滚动翻页的图例，当图例数量较多时可以使用`,
        type: 'string',
        value: 'plain'
      },
      {
        name: 'legendShow',
        desc: '是否显示图例',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'legendOrient',
        desc: '图例的布局朝向, 可选项：horizontal / vertical',
        type: 'string',
        value: 'horizontal'
      },
      {
        name: 'legendLeft',
        desc: '图例组件离容器左侧的距离，默认居中，可选项：auto / left / right / center',
        type: 'string / number',
        value: 'center'
      },
      {
        name: 'legendRight',
        desc: '图例组件离容器右侧的距离，默认自适应, 可选项：auto / number',
        type: 'string / number',
        value: 'auto'
      },
      {
        name: 'legendTop',
        desc: '图例组件离容器上侧的距离，默认自适应, 可选项：auto / number',
        type: 'string / number',
        value: 'auto'
      },
      {
        name: 'legendBottom',
        desc: '图例组件离容器下侧的距离，默认自适应, 可选项：auto / number',
        type: 'string / number',
        value: 'auto'
      },
      {
        name: 'legendTextColor',
        desc: '图例组件的公用文本颜色',
        type: 'string',
        value: '#2C2C2C'
      },
      {
        name: 'radius',
        desc: '饼图的半径，数组的第一项是内半径，第二项是外半径',
        type: 'array',
        value: '[0%, 60%]'
      },
      {
        name: 'roseType',
        desc: '是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：radius：扇区圆心角展现数据的百分比，半径展现数据的大小；area：所有扇区圆心角相同，仅通过半径展现数据大小',
        type: 'string / boolean',
        value: 'false'
      },
      {
        name: 'percentPrecision',
        desc: '饼图百分比数值的精度，默认保留小数点后两位',
        type: 'number',
        value: '2'
      },
      {
        name: 'lineShow',
        desc: '是否显示视觉引导线',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'lineColor',
        desc: '视觉引导线的颜色',
        type: 'string',
        value: 'rgba(0, 0, 0, 0.2)'
      },
      {
        name: 'length',
        desc: '视觉引导线第一段的长度',
        type: 'number',
        value: '40'
      },
      {
        name: 'length2',
        desc: '视觉引导项第二段的长度',
        type: 'number',
        value: '30'
      },
      {
        name: 'labelShow',
        desc: '饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'labelColor',
        desc: '饼图图形上的文本标签颜色',
        type: 'string',
        value: '#2C2C2C'
      },
      {
        name: 'labelShowPercent',
        desc: '饼图图形上的文本标签，是否展示百分比数据信息',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'labelShowItem',
        desc: '饼图图形上的文本标签，是否展示图例对应颜色块',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'labelFormatter',
        desc: '标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 换行',
        type: 'string / function',
        value: '-'
      },
      {
        name: 'innerRadius',
        desc: '嵌套环形内饼图的半径',
        type: 'number / string / array',
        value: `[0%, '30%']`
      },
      {
        name: 'innerLabelColor',
        desc: '嵌套环形内饼图图形上的文本标签颜色',
        type: 'string',
        value: '#FFF'
      }
    ]);
    const tableData2 = ref([
      {
        name: 'seriesData',
        desc: `饼图数据内容数组，value：数据项值；name：数据项的名称；color：图形的颜色`,
        type: 'array',
        value: '-'
      },
      {
        name: 'innerData',
        desc: `嵌套环形内饼图数据内容数组，value：数据项值；name：数据项的名称；color：图形的颜色`,
        type: 'array',
        value: '-'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_LSChart = resolveComponent('LSChart');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)} data-v-b7bc93de><h1 id="pie-饼图" tabindex="-1" data-v-b7bc93de>Pie 饼图 <a class="header-anchor" href="#pie-饼图" aria-label="Permalink to &quot;Pie 饼图&quot;" data-v-b7bc93de>​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block" data-v-b7bc93de><p class="custom-block-title" data-v-b7bc93de>快速创建常用类型的饼图。</p></div><h2 id="使用方式" tabindex="-1" data-v-b7bc93de>使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;" data-v-b7bc93de>​</a></h2><br data-v-b7bc93de>`
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
        `<h3 id="_1-案例一" tabindex="-1" data-v-b7bc93de>1. 案例一 <a class="header-anchor" href="#_1-案例一" aria-label="Permalink to &quot;1. 案例一&quot;" data-v-b7bc93de>​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'pie',
            data: { seriesData: seriesDataPie },
            'template-patch': templateAllPie.value.template1,
            width: '800',
            height: '400',
            'custom-option': customOptionPie.value
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-b7bc93de><summary data-v-b7bc93de>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-b7bc93de><button title="Copy Code" class="copy" data-v-b7bc93de></button><span class="lang" data-v-b7bc93de>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-b7bc93de><code data-v-b7bc93de><span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de> seriesDataPie</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> [</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>1048</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 A&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>735</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 B&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>580</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 C&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>484</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 D&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>300</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 E&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> }</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>];</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de> templateAllPie</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>({</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  template1: {}</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>});</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de> customOptionPie</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>({</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  series: [</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>    {</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>      roseType: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;area&#39;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>    }</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  ]</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-b7bc93de><span class="line-number" data-v-b7bc93de>1</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>2</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>3</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>4</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>5</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>6</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>7</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>8</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>9</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>10</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>11</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>12</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>13</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>14</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>15</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>16</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>17</span><br data-v-b7bc93de></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-b7bc93de><button title="Copy Code" class="copy" data-v-b7bc93de></button><span class="lang" data-v-b7bc93de>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-b7bc93de><code data-v-b7bc93de><span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-b7bc93de>LSChart</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;pie&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;{ seriesData: seriesDataPie }&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;templateAllPie.template1&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;800&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;400&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  :custom-option</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;customOptionPie&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>&gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-b7bc93de>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-b7bc93de><span class="line-number" data-v-b7bc93de>1</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>2</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>3</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>4</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>5</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>6</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>7</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>8</span><br data-v-b7bc93de></div></div></details><h3 id="_2-案例二" tabindex="-1" data-v-b7bc93de>2. 案例二 <a class="header-anchor" href="#_2-案例二" aria-label="Permalink to &quot;2. 案例二&quot;" data-v-b7bc93de>​</a></h3>`);
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'pie',
            data: { seriesData: seriesDataPie },
            'template-patch': templateAllPie.value.template2,
            'custom-option': customOptionPie2.value,
            height: '400'
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-b7bc93de><summary data-v-b7bc93de>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-b7bc93de><button title="Copy Code" class="copy" data-v-b7bc93de></button><span class="lang" data-v-b7bc93de>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-b7bc93de><code data-v-b7bc93de><span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de> seriesDataPie</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> [</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>1048</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 A&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>735</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 B&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>580</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 C&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>484</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 D&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>300</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 E&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> }</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>];</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de> templateAllPie</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>({</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  template2: {</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>    radius: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;45%&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;60%&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>]</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  }</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>});</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de> customOptionPie2</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>({</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  graphic: [</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>    {</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>      type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;text&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>,</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>      left: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;center&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}" data-v-b7bc93de>// 水平居中</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}" data-v-b7bc93de>      // top: &#39;center&#39;, // 垂直居中</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>      top: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;40%&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>,</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>      style: {</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>        text: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;中心内容&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}" data-v-b7bc93de>// 显示的文本</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>        textAlign: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;center&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>,</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>        fill: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;#000&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}" data-v-b7bc93de>// 文本颜色</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>        fontSize: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>20</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>      }</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>    },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>    {</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>      type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;text&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>,</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>      left: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;center&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}" data-v-b7bc93de>// 水平居中</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}" data-v-b7bc93de>      // top: &#39;center&#39;, // 垂直居中</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>      top: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;50%&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>,</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>      style: {</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>        text: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;100%&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}" data-v-b7bc93de>// 显示的文本</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>        textAlign: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;center&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>,</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>        fill: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;#000&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}" data-v-b7bc93de>// 文本颜色</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>        fontSize: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>20</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>      }</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>    }</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  ]</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-b7bc93de><span class="line-number" data-v-b7bc93de>1</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>2</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>3</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>4</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>5</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>6</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>7</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>8</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>9</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>10</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>11</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>12</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>13</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>14</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>15</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>16</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>17</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>18</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>19</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>20</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>21</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>22</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>23</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>24</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>25</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>26</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>27</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>28</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>29</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>30</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>31</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>32</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>33</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>34</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>35</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>36</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>37</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>38</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>39</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>40</span><br data-v-b7bc93de></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-b7bc93de><button title="Copy Code" class="copy" data-v-b7bc93de></button><span class="lang" data-v-b7bc93de>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-b7bc93de><code data-v-b7bc93de><span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-b7bc93de>LSChart</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;pie&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;{ seriesData: seriesDataPie }&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;templateAllPie.template2&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  :custom-option</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;customOptionPie2&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;400&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>&gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-b7bc93de>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-b7bc93de><span class="line-number" data-v-b7bc93de>1</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>2</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>3</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>4</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>5</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>6</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>7</span><br data-v-b7bc93de></div></div></details><h3 id="_3-案例三" tabindex="-1" data-v-b7bc93de>3. 案例三 <a class="header-anchor" href="#_3-案例三" aria-label="Permalink to &quot;3. 案例三&quot;" data-v-b7bc93de>​</a></h3>`);
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'pie',
            data: { seriesData: seriesDataPie },
            'template-patch': templateAllPie.value.template3,
            height: '400'
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-b7bc93de><summary data-v-b7bc93de>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-b7bc93de><button title="Copy Code" class="copy" data-v-b7bc93de></button><span class="lang" data-v-b7bc93de>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-b7bc93de><code data-v-b7bc93de><span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de> seriesDataPie</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> [</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>1048</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 A&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>735</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 B&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>580</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 C&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>484</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 D&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>300</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 E&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> }</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>];</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de> templateAllPie</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>({</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  template3: {</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>    radius: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;10%&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;60%&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>],</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>    roseType: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;radius&#39;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  }</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-b7bc93de><span class="line-number" data-v-b7bc93de>1</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>2</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>3</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>4</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>5</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>6</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>7</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>8</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>9</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>10</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>11</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>12</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>13</span><br data-v-b7bc93de></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-b7bc93de><button title="Copy Code" class="copy" data-v-b7bc93de></button><span class="lang" data-v-b7bc93de>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-b7bc93de><code data-v-b7bc93de><span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-b7bc93de>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de> template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;pie&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de> :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;{ seriesData: seriesDataPie }&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de> :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;templateAllPie.template3&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de> height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;400&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>&gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-b7bc93de>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-b7bc93de><span class="line-number" data-v-b7bc93de>1</span><br data-v-b7bc93de></div></div></details><h3 id="_4-案例四" tabindex="-1" data-v-b7bc93de>4. 案例四 <a class="header-anchor" href="#_4-案例四" aria-label="Permalink to &quot;4. 案例四&quot;" data-v-b7bc93de>​</a></h3>`);
      _push(
        ssrRenderComponent(
          _component_LSChart,
          {
            template: 'pie',
            data: { seriesData: seriesDataPie, innerData: innerDataPie },
            'template-patch': templateAllPie.value.template4,
            'custom-option': { series: [{ cursor: 'move' }] },
            height: '400'
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-b7bc93de><summary data-v-b7bc93de>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-b7bc93de><button title="Copy Code" class="copy" data-v-b7bc93de></button><span class="lang" data-v-b7bc93de>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-b7bc93de><code data-v-b7bc93de><span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de> seriesDataPie</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> [</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>1048</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 A&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>735</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 B&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>580</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 C&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>484</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 D&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>300</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 E&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> }</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>];</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de> templateAllPie</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>({</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  template4: {</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>    radius: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;10%&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;60%&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>],</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>    roseType: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;radius&#39;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  }</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>});</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de> innerDataPie</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-b7bc93de> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> [</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>1548</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 1&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>775</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 2&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> },</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>  { value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-b7bc93de>679</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&#39;图例 3&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de> }</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-b7bc93de><span class="line-number" data-v-b7bc93de>1</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>2</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>3</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>4</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>5</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>6</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>7</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>8</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>9</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>10</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>11</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>12</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>13</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>14</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>15</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>16</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>17</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>18</span><br data-v-b7bc93de></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-b7bc93de><button title="Copy Code" class="copy" data-v-b7bc93de></button><span class="lang" data-v-b7bc93de>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-b7bc93de><code data-v-b7bc93de><span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-b7bc93de>LSChart</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;pie&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  :data</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;{ seriesData: seriesDataPie, innerData: innerDataPie }&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  :template-patch</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;templateAllPie.template4&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  :custom-option</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;{ series: [ { cursor: &#39;move&#39; } ] }&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b7bc93de>  height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b7bc93de>&quot;400&quot;</span></span>
<span class="line" data-v-b7bc93de><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>&gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-b7bc93de>LSChart</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b7bc93de>&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-b7bc93de><span class="line-number" data-v-b7bc93de>1</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>2</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>3</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>4</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>5</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>6</span><br data-v-b7bc93de><span class="line-number" data-v-b7bc93de>7</span><br data-v-b7bc93de></div></div></details><h2 id="api" tabindex="-1" data-v-b7bc93de>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-b7bc93de>​</a></h2><h3 id="_1-attributes" tabindex="-1" data-v-b7bc93de>1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;" data-v-b7bc93de>​</a></h3><h4 id="_1-1-templatepatch-公共参数-templatepatch-对应的配置项" tabindex="-1" data-v-b7bc93de>1.1 templatePatch 公共参数 templatePatch 对应的配置项 <a class="header-anchor" href="#_1-1-templatepatch-公共参数-templatepatch-对应的配置项" aria-label="Permalink to &quot;1.1 templatePatch 公共参数 templatePatch 对应的配置项&quot;" data-v-b7bc93de>​</a></h4>`);
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
        `<h4 id="_1-2-data-公共参数-data-对应的配置项" tabindex="-1" data-v-b7bc93de>1.2 data 公共参数 data 对应的配置项 <a class="header-anchor" href="#_1-2-data-公共参数-data-对应的配置项" aria-label="Permalink to &quot;1.2 data 公共参数 data 对应的配置项&quot;" data-v-b7bc93de>​</a></h4>`
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/charts/pie.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pie = /* @__PURE__ */ _export_sfc(_sfc_main, [['__scopeId', 'data-v-b7bc93de']]);
export { __pageData, pie as default };
