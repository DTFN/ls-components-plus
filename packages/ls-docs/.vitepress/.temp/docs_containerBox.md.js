import { useSSRContext, ref, resolveComponent, withCtx, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { t as tableColumn } from './index.CZ5Oz5P9.js';
import { _ as _export_sfc } from './plugin-vue_export-helper.1tPrXgE0.js';
const __pageData = JSON.parse(
  '{"title":"ContainerBox 适配容器","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/containerBox.md","filePath":"docs/containerBox.md","lastUpdated":1728983795000}'
);
const __default__ = { name: 'docs/containerBox.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const tableData = ref([
      {
        name: 'width',
        desc: '容器初始分辨率宽度',
        type: 'number',
        value: 1920
      },
      {
        name: 'height',
        desc: '容器初始分辨率高度',
        type: 'number',
        value: 1080
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_LSContainerBox = resolveComponent('LSContainerBox');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)} data-v-b3372625><h1 id="containerbox-适配容器" tabindex="-1" data-v-b3372625>ContainerBox 适配容器 <a class="header-anchor" href="#containerbox-适配容器" aria-label="Permalink to &quot;ContainerBox 适配容器&quot;" data-v-b3372625>​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block" data-v-b3372625><p class="custom-block-title" data-v-b3372625>根据分辨率适配，适用于大屏。</p></div><h2 id="使用方式" tabindex="-1" data-v-b3372625>使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;" data-v-b3372625>​</a></h2>`
      );
      _push(
        ssrRenderComponent(
          _component_LSContainerBox,
          {
            width: 320,
            height: 750
          },
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="content" data-v-b3372625${_scopeId}>容器测试</div>`);
              } else {
                return [createVNode('div', { class: 'content' }, '容器测试')];
              }
            }),
            _: 1
          },
          _parent
        )
      );
      _push(
        `<p data-v-b3372625><br data-v-b3372625> <br data-v-b3372625></p><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-b3372625><button title="Copy Code" class="copy" data-v-b3372625></button><span class="lang" data-v-b3372625>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-b3372625><code data-v-b3372625><span class="line" data-v-b3372625><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b3372625>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-b3372625>LSContainerBox</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b3372625> :width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b3372625>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b3372625>&quot;320&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b3372625> :height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b3372625>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b3372625>&quot;750&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b3372625>&gt;&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-b3372625>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-b3372625> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b3372625>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-b3372625>&quot;content&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b3372625>&gt;容器测试&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-b3372625>div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b3372625>&gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-b3372625>LSContainerBox</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-b3372625>&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-b3372625><span class="line-number" data-v-b3372625>1</span><br data-v-b3372625></div></div><h2 id="api" tabindex="-1" data-v-b3372625>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-b3372625>​</a></h2><h3 id="_1-attributes" tabindex="-1" data-v-b3372625>1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;" data-v-b3372625>​</a></h3>`
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/containerBox.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const containerBox = /* @__PURE__ */ _export_sfc(_sfc_main, [['__scopeId', 'data-v-b3372625']]);
export { __pageData, containerBox as default };
