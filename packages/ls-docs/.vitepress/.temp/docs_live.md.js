import { useSSRContext, ref, onMounted, resolveComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { t as tableColumn, b as tableExposesColumn } from './index.CZ5Oz5P9.js';
import { _ as _export_sfc } from './plugin-vue_export-helper.1tPrXgE0.js';
const __pageData = JSON.parse(
  '{"title":"Live 直播 / 视频","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/live.md","filePath":"docs/live.md","lastUpdated":1728983795000}'
);
const __default__ = { name: 'docs/live.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const liveRef = ref();
    const liveUrl = ref('http://192.168.2.144:10086/flv/live/9G3D6xLIg.flv');
    const liveRef2 = ref();
    const liveUrl2 = ref('https://video.shipin520.com/video_listen/588ku_video/21/03/15/12/06/22/video604edd3ee67a6.mp4');
    onMounted(() => {
      liveRef.value && liveRef.value.createPlayer(liveUrl);
      liveRef2.value && liveRef2.value.createPlayer(liveUrl2);
    });
    const tableData = ref([
      {
        name: 'type',
        desc: '类型：flv / mp4',
        type: 'string',
        value: 'flv'
      },
      {
        name: 'isLive',
        desc: '是否是直播',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'hasAudio',
        desc: '是否有音频',
        type: 'boolean',
        value: 'true'
      },
      {
        name: 'hasVideo',
        desc: '是否是视频',
        type: 'boolean',
        value: 'false'
      }
    ]);
    const tableData2 = ref([
      {
        name: 'createPlayer',
        desc: '创建播放器方法，参数为播放地址',
        type: 'function',
        value: 'string'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_LSLive = resolveComponent('LSLive');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)} data-v-1029ff0a><h1 id="live-直播-视频" tabindex="-1" data-v-1029ff0a>Live 直播 / 视频 <a class="header-anchor" href="#live-直播-视频" aria-label="Permalink to &quot;Live 直播 / 视频&quot;" data-v-1029ff0a>​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block" data-v-1029ff0a><p class="custom-block-title" data-v-1029ff0a>基于<a href="https://www.npmjs.com/package/flv.js" target="_blank" rel="noreferrer" data-v-1029ff0a>flv.js</a>二次封装。</p></div><h2 id="使用方式" tabindex="-1" data-v-1029ff0a>使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;" data-v-1029ff0a>​</a></h2><h3 id="_1-直播类型" tabindex="-1" data-v-1029ff0a>1. 直播类型 <a class="header-anchor" href="#_1-直播类型" aria-label="Permalink to &quot;1. 直播类型&quot;" data-v-1029ff0a>​</a></h3><br data-v-1029ff0a>`
      );
      _push(
        ssrRenderComponent(
          _component_LSLive,
          {
            ref_key: 'liveRef',
            ref: liveRef,
            class: 'live-wrap'
          },
          null,
          _parent
        )
      );
      _push(`<div class="language-js vp-adaptive-theme line-numbers-mode" data-v-1029ff0a><button title="Copy Code" class="copy" data-v-1029ff0a></button><span class="lang" data-v-1029ff0a>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-1029ff0a><code data-v-1029ff0a><span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a> { ref, onMounted } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-1029ff0a> &#39;vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>;</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-1029ff0a> liveRef</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>();</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-1029ff0a> liveUrl</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-1029ff0a>&#39;http://192.168.2.144:10086/flv/live/9G3D6xLIg.flv&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>);</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a>onMounted</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>(() </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>=&gt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a> {</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>  liveRef.value </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>&amp;&amp;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a> liveRef.value.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a>createPlayer</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>(liveUrl);</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-1029ff0a><span class="line-number" data-v-1029ff0a>1</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>2</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>3</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>4</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>5</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>6</span><br data-v-1029ff0a></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-1029ff0a><button title="Copy Code" class="copy" data-v-1029ff0a></button><span class="lang" data-v-1029ff0a>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-1029ff0a><code data-v-1029ff0a><span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-1029ff0a>LSLive</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-1029ff0a>&quot;liveRef&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-1029ff0a>&quot;live-wrap&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-1029ff0a><span class="line-number" data-v-1029ff0a>1</span><br data-v-1029ff0a></div></div><div class="language-scss vp-adaptive-theme line-numbers-mode" data-v-1029ff0a><button title="Copy Code" class="copy" data-v-1029ff0a></button><span class="lang" data-v-1029ff0a>scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-1029ff0a><code data-v-1029ff0a><span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a>.live-wrap</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a> {</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-1029ff0a>  width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-1029ff0a>320</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>;</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-1029ff0a>  height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-1029ff0a>180</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>;</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-1029ff0a><span class="line-number" data-v-1029ff0a>1</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>2</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>3</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>4</span><br data-v-1029ff0a></div></div><h3 id="_2-视频类型" tabindex="-1" data-v-1029ff0a>2. 视频类型 <a class="header-anchor" href="#_2-视频类型" aria-label="Permalink to &quot;2. 视频类型&quot;" data-v-1029ff0a>​</a></h3><br data-v-1029ff0a>`);
      _push(
        ssrRenderComponent(
          _component_LSLive,
          {
            ref_key: 'liveRef2',
            ref: liveRef2,
            class: 'live-wrap',
            type: 'mp4',
            'is-live': false,
            loop: false
          },
          null,
          _parent
        )
      );
      _push(`<div class="language-js vp-adaptive-theme line-numbers-mode" data-v-1029ff0a><button title="Copy Code" class="copy" data-v-1029ff0a></button><span class="lang" data-v-1029ff0a>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-1029ff0a><code data-v-1029ff0a><span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a> { ref, onMounted } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-1029ff0a> &#39;vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>;</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-1029ff0a> liveRef2</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>();</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-1029ff0a> liveUrl2</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-1029ff0a>&#39;https://video.shipin520.com/video_listen/588ku_video/21/03/15/12/06/22/video604edd3ee67a6.mp4&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>);</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a>onMounted</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>(() </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>=&gt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a> {</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>  liveRef2.value </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>&amp;&amp;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a> liveRef2.value.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a>createPlayer</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>(liveUrl2);</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-1029ff0a><span class="line-number" data-v-1029ff0a>1</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>2</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>3</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>4</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>5</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>6</span><br data-v-1029ff0a></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-1029ff0a><button title="Copy Code" class="copy" data-v-1029ff0a></button><span class="lang" data-v-1029ff0a>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-1029ff0a><code data-v-1029ff0a><span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-1029ff0a>LSLive</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-1029ff0a>&quot;liveRef2&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-1029ff0a>&quot;live-wrap&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a> type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-1029ff0a>&quot;mp4&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a> :is-live</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-1029ff0a>&quot;false&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a> :loop</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-1029ff0a>&quot;false&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-1029ff0a><span class="line-number" data-v-1029ff0a>1</span><br data-v-1029ff0a></div></div><div class="language-scss vp-adaptive-theme line-numbers-mode" data-v-1029ff0a><button title="Copy Code" class="copy" data-v-1029ff0a></button><span class="lang" data-v-1029ff0a>scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-1029ff0a><code data-v-1029ff0a><span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-1029ff0a>.live-wrap</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a> {</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-1029ff0a>  width</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-1029ff0a>320</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>;</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-1029ff0a>  height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-1029ff0a>180</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-1029ff0a>px</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>;</span></span>
<span class="line" data-v-1029ff0a><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-1029ff0a>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-1029ff0a><span class="line-number" data-v-1029ff0a>1</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>2</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>3</span><br data-v-1029ff0a><span class="line-number" data-v-1029ff0a>4</span><br data-v-1029ff0a></div></div><h2 id="api" tabindex="-1" data-v-1029ff0a>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-1029ff0a>​</a></h2><h3 id="_1-attributes" tabindex="-1" data-v-1029ff0a>1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;" data-v-1029ff0a>​</a></h3>`);
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
        `<h3 id="_2-exposes" tabindex="-1" data-v-1029ff0a>2. Exposes <a class="header-anchor" href="#_2-exposes" aria-label="Permalink to &quot;2. Exposes&quot;" data-v-1029ff0a>​</a></h3>`
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/live.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const live = /* @__PURE__ */ _export_sfc(_sfc_main, [['__scopeId', 'data-v-1029ff0a']]);
export { __pageData, live as default };
