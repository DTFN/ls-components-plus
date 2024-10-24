import {
  useSSRContext,
  ref,
  resolveComponent,
  createSlots,
  renderList,
  withCtx,
  openBlock,
  createBlock,
  toDisplayString,
  createVNode,
  unref
} from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { t as tableColumn, c as tableSlotColumn } from './index.CZ5Oz5P9.js';
import { _ as _export_sfc } from './plugin-vue_export-helper.1tPrXgE0.js';
const __pageData = JSON.parse(
  '{"title":"FlowBox 流式盒子","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/flowBox.md","filePath":"docs/flowBox.md","lastUpdated":1728983795000}'
);
const __default__ = { name: 'docs/flowBox.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const list = ref([
      {
        slotName: 'slot1'
      },
      {
        slotName: 'slot2',
        boxPos: 'left',
        boxPosVal: 220,
        linePos: 'left',
        lineLength: 60,
        arrowPos: 'left',
        boxBgColor: 'green'
      },
      {
        slotName: 'slot3',
        boxPos: 'top',
        boxPosVal: 140,
        linePos: 'top',
        lineLength: 60,
        lineColor: 'red',
        arrowPos: 'top'
      },
      {
        slotName: 'slot4',
        boxPos: 'top',
        boxPosVal: 280,
        linePos: 'top',
        lineLength: 60,
        lineColor: 'red'
      }
    ]);
    const tableData = ref([
      {
        name: 'width',
        desc: '外层区域宽度，带单位',
        type: 'string',
        value: '100%'
      },
      {
        name: 'height',
        desc: '外层区域高度，带单位',
        type: 'string',
        value: '100%'
      },
      {
        name: 'list',
        desc: '数据列表，用户展示盒子内容、线路、箭头',
        type: 'array',
        value: '[]'
      }
    ]);
    const tableData2 = ref([
      {
        name: 'slotName',
        desc: '插槽名称， 用于盒区域展示内容',
        type: 'string',
        value: '-'
      },
      {
        name: 'boxBgColor',
        desc: '盒子背景色',
        type: 'string',
        value: '-'
      },
      {
        name: 'arrowPos',
        desc: '箭头位置方向, 支持 left / top / right / bottom',
        type: 'string',
        value: '-'
      },
      {
        name: 'linePos',
        desc: '线位置, 支持 top left',
        type: 'string',
        value: '-'
      },
      {
        name: 'lineColor',
        desc: '线颜色',
        type: 'string',
        value: '-'
      },
      {
        name: 'lineLength',
        desc: '线长度',
        type: 'number',
        value: '-'
      },
      {
        name: 'lineWidth',
        desc: '线宽度',
        type: 'number',
        value: '-'
      },
      {
        name: 'boxPos',
        desc: '盒子位置方向, 支持 left / top / right / bottom',
        type: 'string',
        value: '-'
      },
      {
        name: 'boxPosVal',
        desc: '盒子位置值',
        type: 'number',
        value: '-'
      }
    ]);
    const tableData3 = ref([
      {
        name: '-',
        desc: '通过slotName自定义插槽名'
      },
      {
        name: 'default',
        desc: '默认插槽， 适用自定义展示内容'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_LSFlowBox = resolveComponent('LSFlowBox');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)} data-v-fc95e7eb><h1 id="flowbox-流式盒子" tabindex="-1" data-v-fc95e7eb>FlowBox 流式盒子 <a class="header-anchor" href="#flowbox-流式盒子" aria-label="Permalink to &quot;FlowBox 流式盒子&quot;" data-v-fc95e7eb>​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block" data-v-fc95e7eb><p class="custom-block-title" data-v-fc95e7eb>用于简单流程模式的数据展示。</p></div><h2 id="使用方式" tabindex="-1" data-v-fc95e7eb>使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;" data-v-fc95e7eb>​</a></h2><h3 id="_1-基础类型" tabindex="-1" data-v-fc95e7eb>1. 基础类型 <a class="header-anchor" href="#_1-基础类型" aria-label="Permalink to &quot;1. 基础类型&quot;" data-v-fc95e7eb>​</a></h3><br data-v-fc95e7eb>`
      );
      _push(
        ssrRenderComponent(
          _component_LSFlowBox,
          {
            list: list.value,
            width: '380px',
            height: '360px'
          },
          createSlots({ _: 2 }, [
            renderList(list.value, item => {
              return {
                name: item.slotName,
                fn: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="flow-box-item" data-v-fc95e7eb${_scopeId}>${ssrInterpolate(item.slotName)}</div>`);
                  } else {
                    return [(openBlock(), createBlock('div', { class: 'flow-box-item' }, toDisplayString(item.slotName), 1))];
                  }
                })
              };
            })
          ]),
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-fc95e7eb><summary data-v-fc95e7eb>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-fc95e7eb><button title="Copy Code" class="copy" data-v-fc95e7eb></button><span class="lang" data-v-fc95e7eb>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-fc95e7eb><code data-v-fc95e7eb><span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb> { ref } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb> &#39;vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb> list</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>([</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    slotName: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;slot1&#39;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  },</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    slotName: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;slot2&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxPos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;left&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxPosVal: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>220</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    linePos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;left&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    lineLength: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>60</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    arrowPos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;left&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxBgColor: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;green&#39;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  },</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    slotName: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;slot3&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxPos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxPosVal: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>140</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    linePos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    lineLength: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>60</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    lineColor: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;red&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    arrowPos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;top&#39;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  },</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    slotName: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;slot4&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxPos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxPosVal: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>280</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    linePos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    lineLength: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>60</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    lineColor: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;red&#39;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  }</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>1</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>2</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>3</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>4</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>5</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>6</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>7</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>8</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>9</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>10</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>11</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>12</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>13</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>14</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>15</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>16</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>17</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>18</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>19</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>20</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>21</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>22</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>23</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>24</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>25</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>26</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>27</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>28</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>29</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>30</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>31</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>32</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>33</span><br data-v-fc95e7eb></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-fc95e7eb><button title="Copy Code" class="copy" data-v-fc95e7eb></button><span class="lang" data-v-fc95e7eb>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-fc95e7eb><code data-v-fc95e7eb><span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-fc95e7eb>LSFlowBox</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> :list</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;list&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;380px&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;360px&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>template</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> v-for</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;item in list&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> #[item.slotName]</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> :key</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;item.slotName&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;flow-box-item&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;{{ item.slotName }}&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-fc95e7eb>LSFlowBox</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>1</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>2</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>3</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>4</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>5</span><br data-v-fc95e7eb></div></div><div class="language-scss vp-adaptive-theme line-numbers-mode" data-v-fc95e7eb><button title="Copy Code" class="copy" data-v-fc95e7eb></button><span class="lang" data-v-fc95e7eb>scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-fc95e7eb><code data-v-fc95e7eb><span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb>.flow-box-item</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb> {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>  width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>160</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>  height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>80</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>  line-height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>80</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>  text-align</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>center</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>1</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>2</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>3</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>4</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>5</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>6</span><br data-v-fc95e7eb></div></div></details><h3 id="_2-自定义类型" tabindex="-1" data-v-fc95e7eb>2. 自定义类型 <a class="header-anchor" href="#_2-自定义类型" aria-label="Permalink to &quot;2. 自定义类型&quot;" data-v-fc95e7eb>​</a></h3><br data-v-fc95e7eb>`);
      _push(
        ssrRenderComponent(
          _component_LSFlowBox,
          {
            list: list.value,
            width: '380px',
            height: '360px'
          },
          createSlots(
            {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(
                    `<div class="merge-line" data-v-fc95e7eb${_scopeId}><div class="line" data-v-fc95e7eb${_scopeId}></div><div class="line" data-v-fc95e7eb${_scopeId}></div><div class="line" data-v-fc95e7eb${_scopeId}></div><div class="line" data-v-fc95e7eb${_scopeId}></div></div>`
                  );
                } else {
                  return [
                    createVNode('div', { class: 'merge-line' }, [
                      createVNode('div', { class: 'line' }),
                      createVNode('div', { class: 'line' }),
                      createVNode('div', { class: 'line' }),
                      createVNode('div', { class: 'line' })
                    ])
                  ];
                }
              }),
              _: 2
            },
            [
              renderList(list.value, item => {
                return {
                  name: item.slotName,
                  fn: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`<div class="flow-box-item" data-v-fc95e7eb${_scopeId}>${ssrInterpolate(item.slotName)}</div>`);
                    } else {
                      return [(openBlock(), createBlock('div', { class: 'flow-box-item' }, toDisplayString(item.slotName), 1))];
                    }
                  })
                };
              })
            ]
          ),
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-fc95e7eb><summary data-v-fc95e7eb>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-fc95e7eb><button title="Copy Code" class="copy" data-v-fc95e7eb></button><span class="lang" data-v-fc95e7eb>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-fc95e7eb><code data-v-fc95e7eb><span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb> { ref } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb> &#39;vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb> list</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>([</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    slotName: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;slot1&#39;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  },</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    slotName: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;slot2&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxPos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;left&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxPosVal: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>220</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    linePos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;left&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    lineLength: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>60</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    arrowPos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;left&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxBgColor: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;green&#39;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  },</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    slotName: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;slot3&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxPos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxPosVal: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>140</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    linePos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    lineLength: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>60</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    lineColor: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;red&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    arrowPos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;top&#39;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  },</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    slotName: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;slot4&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxPos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    boxPosVal: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>280</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    linePos: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;top&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    lineLength: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>60</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>,</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    lineColor: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&#39;red&#39;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  }</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>1</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>2</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>3</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>4</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>5</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>6</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>7</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>8</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>9</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>10</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>11</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>12</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>13</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>14</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>15</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>16</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>17</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>18</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>19</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>20</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>21</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>22</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>23</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>24</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>25</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>26</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>27</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>28</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>29</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>30</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>31</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>32</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>33</span><br data-v-fc95e7eb></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-fc95e7eb><button title="Copy Code" class="copy" data-v-fc95e7eb></button><span class="lang" data-v-fc95e7eb>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-fc95e7eb><code data-v-fc95e7eb><span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-fc95e7eb>LSFlowBox</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> :list</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;list&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;380px&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;360px&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>template</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> v-for</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;item in list&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> #[item.slotName]</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> :key</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;item.slotName&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;flow-box-item&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;{{ item.slotName }}&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>template</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;merge-line&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;line&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;line&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;line&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-fc95e7eb>&quot;line&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-fc95e7eb>LSFlowBox</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>1</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>2</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>3</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>4</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>5</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>6</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>7</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>8</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>9</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>10</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>11</span><br data-v-fc95e7eb></div></div><div class="language-scss vp-adaptive-theme line-numbers-mode" data-v-fc95e7eb><button title="Copy Code" class="copy" data-v-fc95e7eb></button><span class="lang" data-v-fc95e7eb>scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-fc95e7eb><code data-v-fc95e7eb><span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb>.flow-box-item</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb> {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>  width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>160</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>  height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>80</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>  line-height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>80</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>  text-align</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>center</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>}</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb>.merge-line</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb> {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb>  .line</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb> {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>    position</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>absolute</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>    background-color</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>orange</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>    &amp;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb>:nth-of-type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>1</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>) {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      top</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>180</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      left</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>160</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>60</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>2</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    }</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>    &amp;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb>:nth-of-type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>2</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>) {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      top</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>320</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      left</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>160</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>60</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>2</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    }</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>    &amp;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb>:nth-of-type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>3</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>) {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      top</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>180</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      left</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>220</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>2</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>70</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    }</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-fc95e7eb>    &amp;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-fc95e7eb>:nth-of-type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>4</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>) {</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      top</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>250</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      left</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>220</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>2</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>      height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-fc95e7eb>72</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-fc95e7eb>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>;</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>    }</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>  }</span></span>
<span class="line" data-v-fc95e7eb><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-fc95e7eb>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>1</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>2</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>3</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>4</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>5</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>6</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>7</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>8</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>9</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>10</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>11</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>12</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>13</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>14</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>15</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>16</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>17</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>18</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>19</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>20</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>21</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>22</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>23</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>24</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>25</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>26</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>27</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>28</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>29</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>30</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>31</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>32</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>33</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>34</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>35</span><br data-v-fc95e7eb><span class="line-number" data-v-fc95e7eb>36</span><br data-v-fc95e7eb></div></div></details><h2 id="api" tabindex="-1" data-v-fc95e7eb>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-fc95e7eb>​</a></h2><h3 id="_1-attributes" tabindex="-1" data-v-fc95e7eb>1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;" data-v-fc95e7eb>​</a></h3>`);
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
        `<h4 id="_1-1-list" tabindex="-1" data-v-fc95e7eb>1.1 list <a class="header-anchor" href="#_1-1-list" aria-label="Permalink to &quot;1.1 list&quot;" data-v-fc95e7eb>​</a></h4>`
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
      _push(
        `<h3 id="_2-slot" tabindex="-1" data-v-fc95e7eb>2. Slot <a class="header-anchor" href="#_2-slot" aria-label="Permalink to &quot;2. Slot&quot;" data-v-fc95e7eb>​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableSlotColumn),
            tableData: tableData3.value
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/flowBox.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const flowBox = /* @__PURE__ */ _export_sfc(_sfc_main, [['__scopeId', 'data-v-fc95e7eb']]);
export { __pageData, flowBox as default };
