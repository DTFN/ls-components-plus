import { useSSRContext, ref, resolveComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { t as tableColumn } from './index.CZ5Oz5P9.js';
import { _ as _export_sfc } from './plugin-vue_export-helper.1tPrXgE0.js';
const __pageData = JSON.parse(
  '{"title":"Backtop 描述","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/backtop.md","filePath":"docs/backtop.md","lastUpdated":1728983795000}'
);
const __default__ = { name: 'docs/backtop.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const tableData = ref([
      {
        name: 'aniSwitch',
        desc: '是否开启动画',
        type: 'boolean',
        value: 'true'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_LSBackTop = resolveComponent('LSBackTop');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)} data-v-7be67e0a><h1 id="backtop-描述" tabindex="-1" data-v-7be67e0a>Backtop 描述 <a class="header-anchor" href="#backtop-描述" aria-label="Permalink to &quot;Backtop 描述&quot;" data-v-7be67e0a>​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block" data-v-7be67e0a><p class="custom-block-title" data-v-7be67e0a>基于el-backtop二次封装，保留原属性和方法。</p></div><h2 id="使用方式" tabindex="-1" data-v-7be67e0a>使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;" data-v-7be67e0a>​</a></h2><h3 id="往下滚动查看效果" tabindex="-1" data-v-7be67e0a>往下滚动查看效果 <a class="header-anchor" href="#往下滚动查看效果" aria-label="Permalink to &quot;往下滚动查看效果&quot;" data-v-7be67e0a>​</a></h3><div id="backtopContainer" class="backtop-container" data-v-7be67e0a><div class="backtop-scroll" data-v-7be67e0a> 往下滚动展示置顶按钮 </div>`
      );
      _push(
        ssrRenderComponent(
          _component_LSBackTop,
          {
            target: '#backtopContainer',
            right: 600,
            bottom: 300
          },
          null,
          _parent
        )
      );
      _push(`</div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-7be67e0a><button title="Copy Code" class="copy" data-v-7be67e0a></button><span class="lang" data-v-7be67e0a>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-7be67e0a><code data-v-7be67e0a><span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-7be67e0a>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-7be67e0a> id</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-7be67e0a>&quot;backtopContainer&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-7be67e0a> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-7be67e0a>&quot;backtop-container&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>&gt;</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>  &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-7be67e0a>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-7be67e0a> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-7be67e0a>&quot;backtop-scroll&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>&gt;往下滚动展示置顶按钮&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-7be67e0a>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>&gt;</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>  &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-7be67e0a>LSBackTop</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-7be67e0a> :target</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-7be67e0a>&quot;&#39;#backtopContainer&#39;&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-7be67e0a> :right</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-7be67e0a>&quot;600&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-7be67e0a> :bottom</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-7be67e0a>&quot;300&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>&gt; &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-7be67e0a>LSBackTop</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>&gt;</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-7be67e0a>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-7be67e0a><span class="line-number" data-v-7be67e0a>1</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>2</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>3</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>4</span><br data-v-7be67e0a></div></div><div class="language-scss vp-adaptive-theme line-numbers-mode" data-v-7be67e0a><button title="Copy Code" class="copy" data-v-7be67e0a></button><span class="lang" data-v-7be67e0a>scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-7be67e0a><code data-v-7be67e0a><span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-7be67e0a>.backtop-container</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a> {</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>  position</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>relative</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>;</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>  width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>100</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-7be67e0a>%</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>;</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>  height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>300</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-7be67e0a>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>;</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>  overflow</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>auto</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>;</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-7be67e0a>  .backtop-scroll</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a> {</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>    position</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>relative</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>;</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>    width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>100</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-7be67e0a>%</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>;</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>    height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>2000</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-7be67e0a>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>;</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>    text-align</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-7be67e0a>center</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>;</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>  }</span></span>
<span class="line" data-v-7be67e0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-7be67e0a>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-7be67e0a><span class="line-number" data-v-7be67e0a>1</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>2</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>3</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>4</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>5</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>6</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>7</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>8</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>9</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>10</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>11</span><br data-v-7be67e0a><span class="line-number" data-v-7be67e0a>12</span><br data-v-7be67e0a></div></div><h2 id="api" tabindex="-1" data-v-7be67e0a>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-7be67e0a>​</a></h2><h3 id="_1-attributes" tabindex="-1" data-v-7be67e0a>1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;" data-v-7be67e0a>​</a></h3>`);
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/backtop.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const backtop = /* @__PURE__ */ _export_sfc(_sfc_main, [['__scopeId', 'data-v-7be67e0a']]);
export { __pageData, backtop as default };
