import { useSSRContext, ref, resolveComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { t as tableColumn } from './index.CZ5Oz5P9.js';
const __pageData = JSON.parse(
  '{"title":"Descriptions 描述","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/descriptions.md","filePath":"docs/descriptions.md","lastUpdated":1728983795000}'
);
const __default__ = { name: 'docs/descriptions.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const iconColor = ref('red');
    const list1 = ref([
      {
        iconConfig: { type: 1, name: 'iconoir:fish', color: iconColor },
        label: '养殖品种',
        value: '舟山鲈鱼'
      },
      {
        iconConfig: { type: 1, name: 'game-icons:whale-tail' },
        label: '尾数范围',
        value: '56024 - 93366 尾'
      },
      {
        iconConfig: { name: 'Edit' },
        label: '批次数量',
        value: '5'
      }
    ]);
    const list2 = ref([
      {
        label: '捕捞编号',
        value: 'F20240613003'
      },
      {
        label: '销售订单号',
        value: 'XSDD00000001010'
      },
      {
        label: '鱼种',
        value: '舟山鲈鱼'
      },
      {
        label: '捕捞规格',
        value: '--'
      },
      {
        label: '责任人',
        value: null
      },
      {
        label: '捕捞量(斤)',
        value: 12
      },
      {
        label: '桶数量',
        value: 1
      },
      {
        label: '我方人员',
        value: ''
      },
      {
        label: '客户人员',
        value: ''
      },
      {
        label: '司机姓名',
        value: ''
      },
      {
        label: '车牌号',
        value: ''
      },
      {
        label: '备注',
        value: ''
      }
    ]);
    const tableData = ref([
      {
        name: 'labelColor',
        desc: 'label字体颜色',
        type: 'string',
        value: '-'
      },
      {
        name: 'labelBgColor',
        desc: 'label背景颜色',
        type: 'string',
        value: '#e2edff'
      },
      {
        name: 'list',
        desc: '数据列表',
        type: 'array',
        value: '-'
      }
    ]);
    const tableData1 = ref([
      {
        name: 'type',
        desc: '数据类型，默认文本格式，支持 date：日期格式，select：单复选，slot：自定义例如table',
        type: 'string',
        value: '-'
      },
      {
        name: 'iconConfig',
        desc: '图标配置，具体配置参考LSIcon',
        type: 'json',
        value: '{}'
      },
      {
        name: 'label',
        desc: '左侧label名称',
        type: 'string',
        value: '-'
      },
      {
        name: 'value',
        desc: '右侧内容值',
        type: 'string / number',
        value: '-'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_LSDescriptions = resolveComponent('LSDescriptions');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)}><h1 id="descriptions-描述" tabindex="-1">Descriptions 描述 <a class="header-anchor" href="#descriptions-描述" aria-label="Permalink to &quot;Descriptions 描述&quot;">​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block"><p class="custom-block-title">基于el-descriptions二次封装，保留原属性和方法。</p></div><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><h3 id="_1-两栏模式" tabindex="-1">1. 两栏模式 <a class="header-anchor" href="#_1-两栏模式" aria-label="Permalink to &quot;1. 两栏模式&quot;">​</a></h3><br>`
      );
      _push(
        ssrRenderComponent(
          _component_LSDescriptions,
          {
            'label-bg-color': 'blue',
            'label-color': '#fff',
            list: list1.value
          },
          null,
          _parent
        )
      );
      _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> { ref } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}"> &#39;vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> iconColor</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;red&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> list1</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">([</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    iconConfig: { type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">1</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;iconoir:fish&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">, color: iconColor },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;养殖品种&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;舟山鲈鱼&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    iconConfig: { type: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">1</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">, name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;game-icons:whale-tail&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;尾数范围&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;56024 - 93366 尾&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    iconConfig: { name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;Edit&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;批次数量&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;5&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSDescriptions</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> label-bg-color</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;blue&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> label-color</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;#fff&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> :list</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;list1&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSDescriptions</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-四栏模式" tabindex="-1">2. 四栏模式 <a class="header-anchor" href="#_2-四栏模式" aria-label="Permalink to &quot;2. 四栏模式&quot;">​</a></h3><br>`);
      _push(
        ssrRenderComponent(
          _component_LSDescriptions,
          {
            list: list2.value,
            column: 2
          },
          null,
          _parent
        )
      );
      _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> list2</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">([</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;捕捞编号&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;F20240613003&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;销售订单号&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;XSDD00000001010&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;鱼种&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;舟山鲈鱼&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;捕捞规格&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;--&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;责任人&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">null</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;捕捞量(斤)&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">12</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;桶数量&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;我方人员&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;客户人员&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;司机姓名&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;车牌号&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    label: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;备注&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    value: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSDescriptions</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> :list</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;list2&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> :column</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;2&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSDescriptions</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="_1-attributes" tabindex="-1">1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;">​</a></h3>`);
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
        `<h4 id="_1-1-list-配置项" tabindex="-1">1.1 list 配置项 <a class="header-anchor" href="#_1-1-list-配置项" aria-label="Permalink to &quot;1.1 list 配置项&quot;">​</a></h4>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableColumn),
            tableData: tableData1.value
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/descriptions.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { __pageData, _sfc_main as default };
