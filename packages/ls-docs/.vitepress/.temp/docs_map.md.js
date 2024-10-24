import { useSSRContext, ref, resolveComponent, withCtx, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { t as tableColumn } from './index.CZ5Oz5P9.js';
import { _ as _export_sfc } from './plugin-vue_export-helper.1tPrXgE0.js';
const __pageData = JSON.parse(
  '{"title":"Map 地图","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/map.md","filePath":"docs/map.md","lastUpdated":1729506689000}'
);
const __default__ = { name: 'docs/map.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const markerList = ref([
      {
        lnglat: ['121.922823', '30.898127']
      }
    ]);
    const markerDialogContent = ref(`<div class='point-wrap'>
  <div class='title'>已生产区块数</div>
  <div class='value'>100</div>
  <div class='title'>已存证Hash</div>
  <div class='value'>200</div>
  <div class='title'>地点</div>
  <div class='value'>上海</div>
</div>`);
    const tableData = ref([
      {
        name: 'securityCode',
        desc: '你申请的安全密钥',
        type: 'string',
        value: '-'
      },
      {
        name: 'mapKey',
        desc: '申请好的Web端开发者Key，首次调用 load 时必填',
        type: 'string',
        value: '-'
      },
      {
        name: 'width',
        desc: '地图宽度, 需带单位',
        type: 'string',
        value: '100%'
      },
      {
        name: 'height',
        desc: '地图高度, 需带单位',
        type: 'string',
        value: '300px'
      },
      {
        name: 'searchWord',
        desc: '搜索关键字, 只展示搜索结果的区域，其他区域覆盖不展示',
        type: 'string',
        value: '-'
      },
      {
        name: 'center',
        desc: '初始展示地图区域的中心点',
        type: 'array',
        value: '-'
      },
      {
        name: 'zoom',
        desc: '初始展示地图区域的缩放级别',
        type: 'number',
        value: '14'
      },
      {
        name: 'zooms',
        desc: '地图缩放范围',
        type: 'array',
        value: '[10, 20]'
      },
      {
        name: 'areaColor',
        desc: '地图覆盖区域的颜色',
        type: 'string',
        value: '#9BCFFA'
      },
      {
        name: 'showMarker',
        desc: '是否展示标记点',
        type: 'boolean',
        value: 'false'
      },
      {
        name: 'markerList',
        desc: `标记点经纬度列表, 支持多个标记点, 格式为:[{ lnglat: ['121.922823', '30.898127'] }]`,
        type: 'array',
        value: '[]'
      },
      {
        name: 'markerIcon',
        desc: '标记图标',
        type: 'object',
        value: '蓝色小图标'
      },
      {
        name: 'markerIconSize',
        desc: '标记图标大小, 数组形式为[宽度, 高度]',
        type: 'array',
        value: '[19, 32]'
      },
      {
        name: 'showMarkerDialog',
        desc: '鼠标移入标记是否显示弹窗数据',
        type: 'boolean',
        value: 'false'
      },
      {
        name: 'markerDialogContent',
        desc: '标记弹窗内容, html格式的字符串',
        type: 'string',
        value: '-'
      },
      {
        name: 'markerDialogAnchor',
        desc: `标记弹窗展示位置， 可选值为: 'top-left'
  / 'top-center'
  / 'top-right'
  / 'middle-left'
  / 'center'
  / 'middle-right'
  / 'bottom-left'
  / 'bottom-center'
  / 'bottom-right'`,
        type: 'string',
        value: 'middle-left'
      },
      {
        name: 'markerDialogOffset',
        desc: '标记弹窗偏移量， 数组形式为[水平偏移量, 垂直偏移量]',
        type: 'array',
        value: '[30, 0]'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_ClientOnly = resolveComponent('ClientOnly');
      const _component_LSMap = resolveComponent('LSMap');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)} data-v-02d6a844><h1 id="map-地图" tabindex="-1" data-v-02d6a844>Map 地图 <a class="header-anchor" href="#map-地图" aria-label="Permalink to &quot;Map 地图&quot;" data-v-02d6a844>​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block" data-v-02d6a844><p class="custom-block-title" data-v-02d6a844>基于<a href="https://www.npmjs.com/package/@amap/amap-jsapi-loader" target="_blank" rel="noreferrer" data-v-02d6a844>高德地图</a>二次封装。</p></div><h2 id="使用方式" tabindex="-1" data-v-02d6a844>使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;" data-v-02d6a844>​</a></h2>`
      );
      _push(
        ssrRenderComponent(
          _component_ClientOnly,
          null,
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(
                  ssrRenderComponent(
                    _component_LSMap,
                    {
                      'security-code': '847006cb1fd3e4d32dd34094f8b95f24',
                      'map-key': 'ae35d805016e3178c4a68e8bd616bfb8',
                      center: ['121.923553', '30.893751'],
                      'show-marker': true,
                      'marker-list': markerList.value,
                      'show-marker-dialog': true,
                      'marker-dialog-content': markerDialogContent.value,
                      'marker-dialog-anchor': 'top-right',
                      'marker-dialog-offset': [0, 20],
                      height: '360px'
                    },
                    null,
                    _parent2,
                    _scopeId
                  )
                );
              } else {
                return [
                  createVNode(
                    _component_LSMap,
                    {
                      'security-code': '847006cb1fd3e4d32dd34094f8b95f24',
                      'map-key': 'ae35d805016e3178c4a68e8bd616bfb8',
                      center: ['121.923553', '30.893751'],
                      'show-marker': true,
                      'marker-list': markerList.value,
                      'show-marker-dialog': true,
                      'marker-dialog-content': markerDialogContent.value,
                      'marker-dialog-anchor': 'top-right',
                      'marker-dialog-offset': [0, 20],
                      height: '360px'
                    },
                    null,
                    8,
                    ['marker-list', 'marker-dialog-content']
                  )
                ];
              }
            }),
            _: 1
          },
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-02d6a844><summary data-v-02d6a844>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-02d6a844><button title="Copy Code" class="copy" data-v-02d6a844></button><span class="lang" data-v-02d6a844>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-02d6a844><code data-v-02d6a844><span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844> { ref } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844> &#39;vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844> markerList</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>([</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>  {</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>    lnglat: [</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&#39;121.922823&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&#39;30.898127&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>]</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>  }</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>]);</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844> markerDialogContent</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>\`&lt;div class=&#39;point-wrap&#39;&gt;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>  &lt;div class=&#39;title&#39;&gt;已生产区块数&lt;/div&gt;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>  &lt;div class=&#39;value&#39;&gt;100&lt;/div&gt;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>  &lt;div class=&#39;title&#39;&gt;已存证Hash&lt;/div&gt;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>  &lt;div class=&#39;value&#39;&gt;200&lt;/div&gt;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>  &lt;div class=&#39;title&#39;&gt;地点&lt;/div&gt;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>  &lt;div class=&#39;value&#39;&gt;上海&lt;/div&gt;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&lt;/div&gt;\`</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-02d6a844><span class="line-number" data-v-02d6a844>1</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>2</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>3</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>4</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>5</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>6</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>7</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>8</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>9</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>10</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>11</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>12</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>13</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>14</span><br data-v-02d6a844></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-02d6a844><button title="Copy Code" class="copy" data-v-02d6a844></button><span class="lang" data-v-02d6a844>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-02d6a844><code data-v-02d6a844><span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-02d6a844>LSMap</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>  security-code</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&quot;847006cb1fd3e4d32dd34094f8b95f24&quot;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>  map-key</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&quot;ae35d805016e3178c4a68e8bd616bfb8&quot;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>  :center</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&quot;[&#39;121.923553&#39;, &#39;30.893751&#39;]&quot;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>  :show-marker</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&quot;true&quot;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>  :marker-list</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&quot;markerList&quot;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>  :show-marker-dialog</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&quot;true&quot;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>  :marker-dialog-content</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&quot;markerDialogContent&quot;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>  marker-dialog-anchor</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&quot;top-right&quot;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>  :marker-dialog-offset</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&quot;[0, 20]&quot;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>  height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-02d6a844>&quot;360px&quot;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-02d6a844><span class="line-number" data-v-02d6a844>1</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>2</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>3</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>4</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>5</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>6</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>7</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>8</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>9</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>10</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>11</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>12</span><br data-v-02d6a844></div></div><div class="language-scss vp-adaptive-theme line-numbers-mode" data-v-02d6a844><button title="Copy Code" class="copy" data-v-02d6a844></button><span class="lang" data-v-02d6a844>scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-02d6a844><code data-v-02d6a844><span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>:deep(</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>.point-wrap</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>) {</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>  position</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>relative</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>  box-sizing</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>border-box</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>  min-width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>129</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>  padding</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>24</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844> 16</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>  background-color</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>#ffffff</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>  border</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>1</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844> solid</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>  border-color</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>#3d3d3d</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>  .title</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844> {</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>    margin-bottom</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>8</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>    font-size</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>14</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>    font-weight</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>400</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>    line-height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>16</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>    color</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>#3d3d3d</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>  }</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>  .value</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844> {</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>    margin-bottom</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>16</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>    font-size</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>24</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>    font-weight</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>700</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>    line-height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>26</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-02d6a844>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>    color</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>#3d3d3d</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}" data-v-02d6a844>    &amp;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-02d6a844>:last-child</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844> {</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>      margin-bottom</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-02d6a844>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>;</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>    }</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>  }</span></span>
<span class="line" data-v-02d6a844><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-02d6a844>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-02d6a844><span class="line-number" data-v-02d6a844>1</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>2</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>3</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>4</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>5</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>6</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>7</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>8</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>9</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>10</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>11</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>12</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>13</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>14</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>15</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>16</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>17</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>18</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>19</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>20</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>21</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>22</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>23</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>24</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>25</span><br data-v-02d6a844><span class="line-number" data-v-02d6a844>26</span><br data-v-02d6a844></div></div></details><h2 id="api" tabindex="-1" data-v-02d6a844>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-02d6a844>​</a></h2><h3 id="_1-attributes" tabindex="-1" data-v-02d6a844>1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;" data-v-02d6a844>​</a></h3>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/map.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const map = /* @__PURE__ */ _export_sfc(_sfc_main, [['__scopeId', 'data-v-02d6a844']]);
export { __pageData, map as default };
