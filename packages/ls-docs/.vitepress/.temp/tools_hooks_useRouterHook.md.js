import { useSSRContext, ref, resolveComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { t as tableColumn, a as tableMethodColumn } from './index.CZ5Oz5P9.js';
const __pageData = JSON.parse(
  '{"title":"useRouterHook","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"tools/hooks/useRouterHook.md","filePath":"tools/hooks/useRouterHook.md","lastUpdated":1729051222000}'
);
const __default__ = { name: 'tools/hooks/useRouterHook.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const tableData = ref([
      {
        name: 'route',
        desc: 'vue-router中的route对象',
        type: 'object',
        value: '-'
      },
      {
        name: 'router',
        desc: 'vue-router中的router对象',
        type: 'object',
        value: '-'
      }
    ]);
    const tableData2 = ref([
      {
        name: 'jumpRouteCom',
        desc: '通用路由跳转，参数：1.routeData 路由跳转参数 2.type 跳转类型 默认为name， 1：path',
        type: 'function',
        value: '-'
      },
      {
        name: 'getRouteQuery',
        desc: '获取路由query参数',
        type: 'function',
        value: 'query'
      },
      {
        name: 'getMenusByAuth',
        desc: '根据权限返回菜单列表，  menuConfigList: 菜单配置列表, routesModule: 路由模块, routePath: 路由路径, permissionList: 权限列表，内部存放code码',
        type: 'function',
        value: 'menus'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)}><h1 id="userouterhook" tabindex="-1">useRouterHook <a class="header-anchor" href="#userouterhook" aria-label="Permalink to &quot;useRouterHook&quot;">​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(`<div class="warning custom-block"><p class="custom-block-title">vue-router相关公共方法，按各自需求使用。</p></div><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> { useRouterHook } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}"> &#39;@lingshugroup/web-plus&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> { </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">route</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">router</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">jumpRouteCom</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">getRouteQuery</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">, </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">getMenusByAuth</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> useRouterHook</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="_1-attributes" tabindex="-1">1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;">​</a></h3>`);
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
        `<h3 id="_2-methods" tabindex="-1">2. Methods <a class="header-anchor" href="#_2-methods" aria-label="Permalink to &quot;2. Methods&quot;">​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableMethodColumn),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('tools/hooks/useRouterHook.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { __pageData, _sfc_main as default };
