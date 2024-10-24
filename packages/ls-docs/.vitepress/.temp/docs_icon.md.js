import { openBlock, createElementBlock, createElementVNode, useSSRContext, ref, resolveComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { t as tableColumn, c as tableSlotColumn } from './index.CZ5Oz5P9.js';
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '37.07',
  height: '36',
  'aria-hidden': 'true',
  class: 'iconify iconify--logos',
  viewBox: '0 0 256 198'
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode(
  'path',
  {
    fill: '#41B883',
    d: 'M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0z'
  },
  null,
  -1
);
const _hoisted_3 = /* @__PURE__ */ createElementVNode(
  'path',
  {
    fill: '#41B883',
    d: 'm0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0z'
  },
  null,
  -1
);
const _hoisted_4 = /* @__PURE__ */ createElementVNode(
  'path',
  {
    fill: '#35495E',
    d: 'M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0z'
  },
  null,
  -1
);
const _hoisted_5 = [_hoisted_2, _hoisted_3, _hoisted_4];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock('svg', _hoisted_1, [..._hoisted_5]);
}
const svgIcon = { render };
const __pageData = JSON.parse(
  '{"title":"Icon 图标","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/icon.md","filePath":"docs/icon.md","lastUpdated":1729674991000}'
);
const __default__ = { name: 'docs/icon.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const tableData = ref([
      {
        name: 'type',
        desc: '图标类型， 默认el-icon，1：iconify，2：svg',
        type: 'string / number',
        value: '-'
      },
      {
        name: 'name',
        desc: '图标名称',
        type: 'string / object',
        value: '-'
      },
      {
        name: 'color',
        desc: '图标颜色',
        type: 'string',
        value: '-'
      },
      {
        name: 'width',
        desc: '图标宽度，适用于iconify和svg',
        type: 'string / number',
        value: 16
      },
      {
        name: 'height',
        desc: '图标高度，适用于iconify和svg',
        type: 'string / number',
        value: 16
      },
      {
        name: 'size',
        desc: '图标大小，适用于el-icon',
        type: 'string / number',
        value: 16
      }
    ]);
    const tableData2 = ref([
      {
        name: 'default',
        desc: '添加默认插槽'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_LSIcon = resolveComponent('LSIcon');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)}><h1 id="icon-图标" tabindex="-1">Icon 图标 <a class="header-anchor" href="#icon-图标" aria-label="Permalink to &quot;Icon 图标&quot;">​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block"><p class="custom-block-title">基于Element Plus Icon、iconify、svg 提供三种图标使用方式。</p></div><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><h3 id="_1-element-plus-icon" tabindex="-1">1. <a href="https://element-plus.org/zh-CN/component/icon.html" target="_blank" rel="noreferrer">Element Plus Icon</a> <a class="header-anchor" href="#_1-element-plus-icon" aria-label="Permalink to &quot;1. [Element Plus Icon](https://element-plus.org/zh-CN/component/icon.html)&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">需安装依赖 <a href="https://element-plus.org/zh-CN/component/icon.html" target="_blank" rel="noreferrer">@element-plus/icons-vue</a>。</p></div>`
      );
      _push(
        ssrRenderComponent(
          _component_LSIcon,
          {
            name: 'Notification',
            color: 'red',
            size: '20'
          },
          null,
          _parent
        )
      );
      _push(
        `<div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSIcon</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> name</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;Notification&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> color</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;red&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> size</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;20&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-iconify" tabindex="-1">2. <a href="https://icon-sets.iconify.design/?category=General" target="_blank" rel="noreferrer">iconify</a> <a class="header-anchor" href="#_2-iconify" aria-label="Permalink to &quot;2. [iconify](https://icon-sets.iconify.design/?category=General)&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">需安装依赖 <a href="https://www.npmjs.com/package/@iconify/vue" target="_blank" rel="noreferrer">@iconify/vue</a>。</p></div>`
      );
      _push(
        ssrRenderComponent(
          _component_LSIcon,
          {
            type: 1,
            name: 'iconoir:fish',
            width: '30',
            height: '30',
            color: 'red'
          },
          null,
          _parent
        )
      );
      _push(
        `<div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSIcon</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> :type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;1&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> name</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;iconoir:fish&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;30&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;30&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> color</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;red&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-svg" tabindex="-1">3. svg <a class="header-anchor" href="#_3-svg" aria-label="Permalink to &quot;3. svg&quot;">​</a></h3><br>`
      );
      _push(
        ssrRenderComponent(
          _component_LSIcon,
          {
            type: 2,
            name: unref(svgIcon),
            width: '30',
            height: '30',
            color: 'yellow'
          },
          null,
          _parent
        )
      );
      _push(
        `<div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> svgIcon </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}"> &#39;/public/vue.svg&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSIcon</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> :type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;2&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> :name</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;svgIcon&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;30&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;30&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> color</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;yellow&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="_1-attributes" tabindex="-1">1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;">​</a></h3>`
      );
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
        `<h3 id="_2-slot" tabindex="-1">2. Slot <a class="header-anchor" href="#_2-slot" aria-label="Permalink to &quot;2. Slot&quot;">​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableSlotColumn),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/icon.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { __pageData, _sfc_main as default };
