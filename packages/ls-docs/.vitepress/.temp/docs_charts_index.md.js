import { useSSRContext, ref, resolveComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { t as tableColumn, b as tableExposesColumn } from './index.CZ5Oz5P9.js';
const __pageData = JSON.parse(
  '{"title":"Chart 图表","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/charts/index.md","filePath":"docs/charts/index.md","lastUpdated":1729674991000}'
);
const __default__ = { name: 'docs/charts/index.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const tableData = ref([
      {
        name: 'template',
        desc: '模板类型，可选项：bar / line / pie，不传则完全自定义',
        type: 'string',
        value: '-'
      },
      {
        name: 'width',
        desc: '图表宽度',
        type: 'number',
        value: '-'
      },
      {
        name: 'height',
        desc: '图表高度',
        type: 'number',
        value: '-'
      },
      {
        name: 'templatePatch',
        desc: '模板配置项，需template已配置',
        type: 'json',
        value: '{}'
      },
      {
        name: 'data',
        desc: '图表数据',
        type: 'json',
        value: '{}'
      },
      {
        name: 'customOption',
        desc: '自定义配置项，完全参照echarts配置项',
        type: 'json',
        value: '{}'
      }
    ]);
    const tableData2 = ref([
      {
        name: 'echartObj',
        desc: 'echarts对象',
        type: 'object',
        value: '-'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)}><h1 id="chart-图表" tabindex="-1">Chart 图表 <a class="header-anchor" href="#chart-图表" aria-label="Permalink to &quot;Chart 图表&quot;">​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block"><p class="custom-block-title">基于<a href="https://echarts.apache.org/zh/option.html#title" target="_blank" rel="noreferrer">echarts</a>二次封装， 目前支持bar、line、pie部分类型快速创建。</p></div><div class="tip custom-block"><p class="custom-block-title">需安装依赖 <a href="https://www.npmjs.com/package/echarts" target="_blank" rel="noreferrer">echarts</a></p></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="_1-attributes-公共参数" tabindex="-1">1 Attributes 公共参数 <a class="header-anchor" href="#_1-attributes-公共参数" aria-label="Permalink to &quot;1 Attributes 公共参数&quot;">​</a></h3>`
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
        `<h3 id="_2-exposes" tabindex="-1">2 Exposes <a class="header-anchor" href="#_2-exposes" aria-label="Permalink to &quot;2 Exposes&quot;">​</a></h3>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableExposesColumn),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/charts/index.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { __pageData, _sfc_main as default };
