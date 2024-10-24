import { useSSRContext, ref, resolveComponent, withCtx, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { t as tableColumn, c as tableSlotColumn } from './index.CZ5Oz5P9.js';
const __pageData = JSON.parse(
  '{"title":"Print 打印","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/print.md","filePath":"docs/print.md","lastUpdated":1729674991000}'
);
const __default__ = { name: 'docs/print.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const canPrint = ref(true);
    const tableData = ref([
      {
        name: 'printObj',
        desc: '打印对象参数配置',
        type: 'object',
        value: '{}'
      },
      {
        name: 'iconConfig',
        desc: '按钮文案前图标配置，具体配置参考LSIcon',
        type: 'json',
        value: '{}'
      },
      {
        name: 'btnTxt',
        desc: '按钮文案',
        type: 'string',
        value: '打印'
      },
      {
        name: 'content',
        desc: '打印按钮禁止使用时，鼠标移入提示文案',
        type: 'string',
        value: ''
      },
      {
        name: 'canPrint',
        desc: '是否允许打印',
        type: 'boolean',
        value: 'true'
      }
    ]);
    const tableData2 = ref([
      {
        name: 'id',
        desc: '打印区域id，适用普通打印',
        type: 'string',
        value: ''
      }
    ]);
    const tableData3 = ref([
      {
        name: 'default',
        desc: '添加默认插槽'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_LSPrint = resolveComponent('LSPrint');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)}><h1 id="print-打印" tabindex="-1">Print 打印 <a class="header-anchor" href="#print-打印" aria-label="Permalink to &quot;Print 打印&quot;">​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block"><p class="custom-block-title">基于<a href="https://www.npmjs.com/package/vue3-print-nb" target="_blank" rel="noreferrer">vue3-print-nb</a>二次封装。</p></div><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">下载依赖 <a href="https://www.npmjs.com/package/vue3-print-nb" target="_blank" rel="noreferrer">vue3-print-nb</a>, 并注册依赖指令 app.directive(&#39;print&#39;, print);</p></div><h3 id="_1-普通打印" tabindex="-1">1. 普通打印 <a class="header-anchor" href="#_1-普通打印" aria-label="Permalink to &quot;1. 普通打印&quot;">​</a></h3><br><div id="printDom">普通打印内容</div>`
      );
      _push(
        ssrRenderComponent(
          _component_LSPrint,
          {
            content: '禁止普通打印内容',
            'btn-txt': '普通打印',
            'can-print': canPrint.value,
            'icon-config': { name: 'Printer' },
            type: 'primary',
            'print-obj': { id: '#printDom' }
          },
          null,
          _parent
        )
      );
      _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> { ref } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}"> &#39;vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> canPrint</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> id</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;printDom&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;普通打印内容&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSPrint</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">  content</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;禁止普通打印内容&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">  btn-txt</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;普通打印&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">  :can-print</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;canPrint&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">  :icon-config</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;{ name: &#39;Printer&#39; }&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">  type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;primary&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">  :print-obj</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;{ id: &#39;#printDom&#39;, }&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_2-内嵌打印" tabindex="-1">2. 内嵌打印 <a class="header-anchor" href="#_2-内嵌打印" aria-label="Permalink to &quot;2. 内嵌打印&quot;">​</a></h3><br>`);
      _push(
        ssrRenderComponent(
          _component_LSPrint,
          {
            content: '禁止内嵌打印内容',
            'btn-txt': '内嵌打印',
            'can-print': canPrint.value,
            'icon-config': { name: 'Printer', color: 'red' },
            type: 'primary'
          },
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}> 内嵌打印内容 </div>`);
              } else {
                return [createVNode('div', null, ' 内嵌打印内容 ')];
              }
            }),
            _: 1
          },
          _parent
        )
      );
      _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> { ref } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}"> &#39;vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> canPrint</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSPrint</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">  content</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;禁止内嵌打印内容&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">  btn-txt</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;内嵌打印&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">  :can-print</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;canPrint&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">  :icon-config</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;{ name: &#39;Printer&#39;, color: &#39;red&#39; }&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">  type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;primary&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  &lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;内嵌打印内容&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSPrint</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="_1-attributes" tabindex="-1">1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;">​</a></h3>`);
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
        `<h4 id="_1-1-printobj-常用参数为id-其他参数请参考官网api" tabindex="-1">1.1 printObj 常用参数为id，其他参数请参考<a href="https://www.npmjs.com/package/vue3-print-nb" target="_blank" rel="noreferrer">官网api</a> <a class="header-anchor" href="#_1-1-printobj-常用参数为id-其他参数请参考官网api" aria-label="Permalink to &quot;1.1 printObj 常用参数为id，其他参数请参考[官网api](https://www.npmjs.com/package/vue3-print-nb)&quot;">​</a></h4>`
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
        `<h3 id="_2-slot" tabindex="-1">2. Slot <a class="header-anchor" href="#_2-slot" aria-label="Permalink to &quot;2. Slot&quot;">​</a></h3>`
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/print.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { __pageData, _sfc_main as default };
