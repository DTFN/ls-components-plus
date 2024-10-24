import { useSSRContext, ref, resolveComponent, withCtx, createTextVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { t as tableColumn, b as tableExposesColumn } from './index.CZ5Oz5P9.js';
const __pageData = JSON.parse(
  '{"title":"Editor 富文本","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/editor.md","filePath":"docs/editor.md","lastUpdated":1729733572000}'
);
const __default__ = { name: 'docs/editor.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const lsEditorRef = ref();
    const uploadServer = ref('http://192.168.1.161:8080/fss/upload');
    const uploadToken =
      'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi57O757uf566h55CG5ZGYIiwiZW5jcnlwdGVkUHdkIjoiJDJhJDEwJGIzYXZkYk9OWkdreElPUWF6by9GNHVzUk1pNEZ4QjlwT3lzNWJNaW8yMmdvNVNyMDNaRElPIiwidXNlclR5cGUiOiJST0xFX0FETUlOIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlBFUl9VU0VSX01HVCJ9LHsiYXV0aG9yaXR5IjoiUEVSX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfRVFVSVBfTUdUIn0seyJhdXRob3JpdHkiOiJQRVJfT1ZFUl9WSUVXIn0seyJhdXRob3JpdHkiOiJQRVJfUkVNT1RFX0dVSURBTkNFIn0seyJhdXRob3JpdHkiOiJQRVJfT05MSU5FX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfSU5GT19WSUVXIn1dLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcyODg3MDU4MiwiZXhwIjoxNzMxNDYyNTgyfQ.oflBeBsWuCLifqP9u43eRducrJeQz7JR0IVjTITqTwM';
    const valueHtml = ref(`<div>测试内容</div>`);
    const content = ref('');
    const contentHtml = ref('');
    function getContent() {
      const editor = lsEditorRef.value.editorRef;
      content.value = editor.getText();
      contentHtml.value = editor.getHtml();
    }
    const tableData = ref([
      {
        name: 'valueHtml',
        desc: '富文本内容，用于回显',
        type: 'string',
        value: '-'
      },
      {
        name: 'height',
        desc: '富文本编辑区域高度',
        type: 'string',
        value: '300px'
      },
      {
        name: 'mode',
        desc: '富文本展示模式',
        type: 'string',
        value: 'default'
      },
      {
        name: 'toolbarConfig',
        desc: '富文本工具栏配置，同wangeditor一致',
        type: 'json',
        value: '{}'
      },
      {
        name: 'editorConfig',
        desc: '富文本编辑器配置，同wangeditor一致',
        type: 'json',
        value: '{}'
      },
      {
        name: 'uploadServer',
        desc: '上传图片服务器地址',
        type: 'string',
        value: '-'
      },
      {
        name: 'uploadToken',
        desc: '上传图片所需token，如接口不需要则不传',
        type: 'string',
        value: '-'
      },
      {
        name: 'uploadFieldName',
        desc: '上传图片所需参数名',
        type: 'string',
        value: 'file'
      }
    ]);
    const tableData2 = ref([
      {
        name: 'editorRef',
        desc: '富文本实例对象',
        type: 'ref',
        value: '-'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_LSEditor = resolveComponent('LSEditor');
      const _component_LSButton = resolveComponent('LSButton');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)}><h1 id="editor-富文本" tabindex="-1">Editor 富文本 <a class="header-anchor" href="#editor-富文本" aria-label="Permalink to &quot;Editor 富文本&quot;">​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block"><p class="custom-block-title">基于<a href="https://www.wangeditor.com/" target="_blank" rel="noreferrer">wangeditor</a>二次封装。</p></div><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">需安装依赖 <a href="https://www.npmjs.com/package/@wangeditor/editor" target="_blank" rel="noreferrer">@wangeditor/editor</a> 和 <a href="https://www.npmjs.com/package/@wangeditor/editor-for-vue" target="_blank" rel="noreferrer">@wangeditor/editor-for-vue(5.1.12)</a>。</p></div><h3 id="_1-基础用法" tabindex="-1">1. 基础用法 <a class="header-anchor" href="#_1-基础用法" aria-label="Permalink to &quot;1. 基础用法&quot;">​</a></h3><br>`
      );
      _push(
        ssrRenderComponent(
          _component_LSEditor,
          {
            ref_key: 'lsEditorRef',
            ref: lsEditorRef,
            valueHtml: valueHtml.value,
            'upload-server': uploadServer.value,
            'upload-token': uploadToken,
            height: '400px'
          },
          null,
          _parent
        )
      );
      _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> { ref } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}"> &#39;vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> uploadServer</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;http://192.168.1.161:8080/fss/upload&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> uploadToken</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">  &#39;eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi57O757uf566h55CG5ZGYIiwiZW5jcnlwdGVkUHdkIjoiJDJhJDEwJGIzYXZkYk9OWkdreElPUWF6by9GNHVzUk1pNEZ4QjlwT3lzNWJNaW8yMmdvNVNyMDNaRElPIiwidXNlclR5cGUiOiJST0xFX0FETUlOIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlBFUl9VU0VSX01HVCJ9LHsiYXV0aG9yaXR5IjoiUEVSX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfRVFVSVBfTUdUIn0seyJhdXRob3JpdHkiOiJQRVJfT1ZFUl9WSUVXIn0seyJhdXRob3JpdHkiOiJQRVJfUkVNT1RFX0dVSURBTkNFIn0seyJhdXRob3JpdHkiOiJQRVJfT05MSU5FX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfSU5GT19WSUVXIn1dLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcyODg3MDU4MiwiZXhwIjoxNzMxNDYyNTgyfQ.oflBeBsWuCLifqP9u43eRducrJeQz7JR0IVjTITqTwM&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> valueHtml</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">\`&lt;div&gt;测试内容&lt;/div&gt;\`</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSEditor</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;lsEditorRef&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> :upload-server</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;uploadServer&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> :upload-token</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;uploadToken&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> height</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;400px&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-自定义配置-以下例子为上传图片-更多自定义配置参考wangeditor" tabindex="-1">2. 自定义配置，以下例子为上传图片，更多自定义配置参考<a href="https://www.wangeditor.com/" target="_blank" rel="noreferrer">wangeditor</a> <a class="header-anchor" href="#_2-自定义配置-以下例子为上传图片-更多自定义配置参考wangeditor" aria-label="Permalink to &quot;2. 自定义配置，以下例子为上传图片，更多自定义配置参考[wangeditor](https://www.wangeditor.com/)&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}">// 如上传接口返回格式如下，则无需配置：</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}">// {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}">//     &quot;data&quot;: 图片 src ，必须</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}">// }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}">// 否则需单独配置插入图片</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> editorConfig</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  MENU_CONF: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    uploadImage: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}">      // 自定义插入图片</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">      customInsert</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(</span><span style="${ssrRenderStyle({ '--shiki-light': '#E36209', '--shiki-dark': '#FFAB70' })}">res</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">, </span><span style="${ssrRenderStyle({ '--shiki-light': '#E36209', '--shiki-dark': '#FFAB70' })}">insertFn</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6A737D', '--shiki-dark': '#6A737D' })}">        // res 即服务端的返回结果 从 res 中找到 url alt href ，然后插入图片</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">        insertFn</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(url, alt, href);</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">      }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_3-内容获取-判断是否为空-isempty-方法" tabindex="-1">3. 内容获取， 判断是否为空 <a href="https://www.wangeditor.com/v5/API.html#isempty" target="_blank" rel="noreferrer">isEmpty</a> 方法 <a class="header-anchor" href="#_3-内容获取-判断是否为空-isempty-方法" aria-label="Permalink to &quot;3. 内容获取， 判断是否为空 [isEmpty](https://www.wangeditor.com/v5/API.html#isempty) 方法&quot;">​</a></h3><br>`);
      _push(
        ssrRenderComponent(
          _component_LSButton,
          {
            type: 'primary',
            onClick: getContent
          },
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` 内容获取 `);
              } else {
                return [createTextVNode(' 内容获取 ')];
              }
            }),
            _: 1
          },
          _parent
        )
      );
      _push(`<div>文本： ${ssrInterpolate(content.value)}</div><div>HTML: ${ssrInterpolate(contentHtml.value)}</div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> { ref } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}"> &#39;vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> lsEditorRef</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">();</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> content</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> contentHtml</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> ref</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&#39;&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">);</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">function</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> getContent</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">  const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}"> editor</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}"> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> lsEditorRef.value.editorRef;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  content.value </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> editor.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">getText</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">();</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">  contentHtml.value </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}"> editor.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}">getHtml</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">();</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSButton</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> type</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;primary&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}"> @click</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}">&quot;getContent&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt; 内容获取 &lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}">LSButton</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;文本： {{ content }}&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;HTML: {{ contentHtml }}&lt;/</span><span style="${ssrRenderStyle({ '--shiki-light': '#22863A', '--shiki-dark': '#85E89D' })}">div</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="_1-attributes" tabindex="-1">1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;">​</a></h3>`);
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
        `<h3 id="_2-exposes" tabindex="-1">2. Exposes <a class="header-anchor" href="#_2-exposes" aria-label="Permalink to &quot;2. Exposes&quot;">​</a></h3>`
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/editor.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { __pageData, _sfc_main as default };
