import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const require = createRequire(import.meta.url)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Vue 组件 / 常量模块元数据提取脚本
 * 用于生成 MCP 可用的组件文档
 */

const COMPONENTS_DIR = path.join(__dirname, '../components')
const OUTPUT_FILE = path.join(__dirname, '../component-meta.json')
const VUE_EXTENSIONS = ['.vue']
const RELATED_TYPE_FILES = ['types.ts', 'type.ts']
const JSDOC_COMMENT_REGEX = /\/\*\*[\s\S]*?\*\//g
const EXTRA_METADATA_MODULES = [
  {
    name: 'previewType',
    filePath: path.join(COMPONENTS_DIR, '_constants/previewType.ts'),
    description: '通用预览常量与共享 props 配置',
  },
]

/** Element Plus 官方文档根地址（与 web-types 中 doc-url 同源） */
const ELEMENT_PLUS_DOC_ORIGIN = 'https://element-plus.org'

/**
 * 解析已安装的 element-plus `web-types.json`；用于在本地 components 未覆盖时补全属性说明。
 * @returns {string | null}
 */
function resolveElementPlusWebTypesPath() {
  try {
    return require.resolve('element-plus/web-types.json')
  }
  catch {
    return null
  }
}

/**
 * 从项目依赖或 CDN 加载 Element Plus web-types，保证与 https://element-plus.org 文档体系一致
 */
async function loadElementPlusWebTypes() {
  const localPath = resolveElementPlusWebTypesPath()
  if (localPath) {
    const raw = fs.readFileSync(localPath, 'utf-8')
    const data = JSON.parse(raw)

    return {
      data,
      version: data.version,
      source: 'node_modules:element-plus',
      localPath: path.relative(path.join(__dirname, '../..'), localPath).replace(/\\/g, '/'),
    }
  }

  console.warn('⚠️  未在 node_modules 中发现 element-plus/web-types.json，从 unpkg 拉取最新包元数据...')

  const res = await fetch('https://unpkg.com/element-plus@latest/web-types.json', {
    redirect: 'follow',
  })
  if (!res.ok) {
    throw new Error(`拉取 element-plus web-types 失败: HTTP ${res.status}`)
  }

  const data = await res.json()

  return {
    data,
    version: data.version,
    source: 'https://unpkg.com/element-plus@latest/web-types.json',
  }
}

/**
 * 将 Ls* 组件名转为 Element Plus 标签名，用于匹配 web-types 中的 el-* 条目
 * @param {string} componentName
 * @returns {string | null}
 */
function lsNameToElementPlusTag(componentName) {
  if (typeof componentName !== 'string') {
    return null
  }

  let pascal = ''
  if (componentName.startsWith('LS')) {
    pascal = componentName.slice(2)
  }
  else if (componentName.startsWith('Ls')) {
    pascal = componentName.slice(2)
  }
  else {
    return null
  }

  if (!pascal) {
    return null
  }

  const kebab = pascal
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()

  return `el-${kebab}`
}

/**
 * 将 en-US 文档链接替换为 zh-CN（与 element-plus 中文站一致）
 * @param {string | undefined} url
 * @returns {string | undefined}
 */
function toZhElementPlusDocUrl(url) {
  if (!url || typeof url !== 'string') {
    return url
  }

  return url.replace(/\/en-US\//g, '/zh-CN/')
}

/**
 * @param {unknown} t
 * @returns {string}
 */
function formatElementPlusPropType(t) {
  if (t == null) {
    return 'any'
  }

  if (Array.isArray(t)) {
    return t
      .map((x) => {
        if (typeof x === 'string') {
          return x
        }

        return JSON.stringify(x)
      })
      .join(' | ')
  }

  if (typeof t === 'string') {
    return t
  }

  return String(t)
}

/**
 * 构建 el-* -> { props, docUrl, description }
 * @param {object} webTypes
 * @returns {Map<string, { name: string, description?: string, docUrl?: string, props: object[] }>}
 */
function buildElementPlusComponentIndex(webTypes) {
  const list = webTypes?.contributions?.html?.['vue-components'] || []
  const index = new Map()

  for (const comp of list) {
    if (!comp?.name) {
      continue
    }

    index.set(comp.name, {
      name: comp.name,
      description: comp.description,
      docUrl: comp['doc-url'],
      props: comp.props || [],
    })
  }

  return index
}

/**
 * 表单/输入相关：元数据与模板中应使用 HTML 标准属性名 maxlength / minlength，禁止驼峰 maxLength / minLength
 * @param {string} name
 * @returns {string}
 */
function normalizeLengthAttrName(name) {
  if (name === 'maxLength') {
    return 'maxlength'
  }

  if (name === 'minLength') {
    return 'minlength'
  }

  return name
}

/**
 * @param {Array<{ name: string } & Record<string, unknown>>} props
 * @returns {typeof props}
 */
function normalizeMinMaxLengthPropNames(props) {
  if (!Array.isArray(props)) {
    return props
  }

  return props.map((prop) => {
    const next = normalizeLengthAttrName(prop.name)
    if (next === prop.name) {
      return prop
    }

    return { ...prop, name: next }
  })
}

/** 与表单控件相关的 Element Plus 标签，用于在匹配主标签后再合并一层（如 form-item 内常渲染 el-input） */
const ELEMENT_PLUS_FORM_CONTROL_TAGS = ['el-input']

/**
 * 将单份 EP 组件的 props 合入（跳过已有同名；长度类属性名归一为 maxlength / minlength）
 * @param {Array<object>} merged
 * @param {Set<string>} seen
 * @param {object[] | undefined} epProps
 * @param {string} [fromTag]  web-types 中的来源标签，如 el-input
 */
function appendElementPlusProps(merged, seen, epProps, fromTag) {
  if (!epProps?.length) {
    return
  }

  for (const p of epProps) {
    const name = normalizeLengthAttrName(p.name)
    if (seen.has(name)) {
      continue
    }

    seen.add(name)
    const row = {
      name,
      type: formatElementPlusPropType(p.type),
      description: (p.description || '').trim(),
      required: false,
      default: p.default,
      from: 'element-plus',
      docUrl: toZhElementPlusDocUrl(p['doc-url'] || p.docUrl),
    }

    if (fromTag) {
      row.fromTag = fromTag
    }

    merged.push(row)
  }
}

/**
 * 本地 `components` 中解析到的 props 优先生效；仅当不存在同名属性时，从 Element Plus web-types 补全
 * @param {Array<object>} localProps
 * @param {string | null} elTag
 * @param {Map} epIndex
 * @returns {Array<object>}
 */
function mergePropsWithElementPlus(localProps, elTag, epIndex) {
  const withNorm = normalizeMinMaxLengthPropNames(localProps)
  if (!elTag || !epIndex) {
    return withNorm
  }

  const ep = epIndex.get(elTag)
  if (!ep || !ep.props?.length) {
    return withNorm
  }

  const seen = new Set(withNorm.map(p => p.name))
  const merged = [...withNorm]

  appendElementPlusProps(merged, seen, ep.props, elTag)

  if (elTag === 'el-form-item') {
    for (const subTag of ELEMENT_PLUS_FORM_CONTROL_TAGS) {
      const sub = epIndex.get(subTag)
      if (sub?.props?.length) {
        appendElementPlusProps(merged, seen, sub.props, subTag)
      }
    }
  }

  return uniqueBy(merged, item => item.name)
}

function normalizeText(text = '') {
  return text.replace(/\s+/g, ' ').trim()
}

function uniqueBy(items, getKey) {
  const seen = new Set()

  return items.filter((item) => {
    const key = getKey(item)
    if (!key || seen.has(key))
      return false
    seen.add(key)

    return true
  })
}

function stripCommentDecorators(line) {
  return line
    .replace(/^\s*\/\*\*?/, '')
    .replace(/\*\/\s*$/, '')
    .replace(/^\s*\*\s?/, '')
    .trim()
}

function extractPlainCommentText(comment) {
  return normalizeText(
    comment
      .split('\n')
      .map(stripCommentDecorators)
      .filter(line => line && !line.startsWith('@'))
      .join(' '),
  )
}

function parseDocAttrLine(line) {
  const match = line.match(/@(?:attr|property)\s*\{([^}]+)\}\s*([^\s-]+)\s*(?:-\s*)?(.*)$/)
  if (!match)
    return null

  const rawName = match[2].trim()
  const name = rawName.split('=')[0].replace(/[?:]$/, '').trim()
  if (!name)
    return null

  return {
    type: normalizeText(match[1]),
    name,
    description: normalizeText(match[3] || ''),
  }
}

function parseJSDocBlock(block) {
  const comment = {
    summary: '',
    attrs: [],
    slots: [],
    events: [],
  }

  block.split('\n').forEach((rawLine) => {
    const line = stripCommentDecorators(rawLine)
    if (!line)
      return

    if (line.startsWith('@summary')) {
      comment.summary = normalizeText(line.replace('@summary', ''))
    }
    else if (/^@(attr|property)\b/.test(line)) {
      const attr = parseDocAttrLine(line)
      if (attr)
        comment.attrs.push(attr)
    }
    else if (line.startsWith('@slot')) {
      comment.slots.push(normalizeText(line.replace('@slot', '')))
    }
    else if (line.startsWith('@event')) {
      comment.events.push(normalizeText(line.replace('@event', '')))
    }
  })

  return comment
}

function extractJSDocBlocks(content) {
  const matches = content.match(JSDOC_COMMENT_REGEX) || []

  return matches.map(parseJSDocBlock)
}

function mergeDocComments(comments) {
  const merged = {
    summary: '',
    attrs: [],
    slots: [],
    events: [],
  }

  for (const comment of comments) {
    if (!merged.summary && comment.summary) {
      merged.summary = comment.summary
    }
    merged.attrs.push(...comment.attrs)
    merged.slots.push(...comment.slots)
    merged.events.push(...comment.events)
  }

  merged.attrs = uniqueBy(merged.attrs, item => item.name)
  merged.slots = [...new Set(merged.slots.filter(Boolean))]
  merged.events = [...new Set(merged.events.filter(Boolean))]

  return merged
}

function getAttrDocMap(comments) {
  const merged = mergeDocComments(comments)

  return new Map(merged.attrs.map(attr => [attr.name, attr]))
}

function extractPropsFromDefineProps(content) {
  const props = []
  const propsMatch = content.match(/defineProps\(([^)]*)\)/)
  if (!propsMatch)
    return props

  const interfaceMatch = content.match(/interface\s+\w+\s*\{([\s\S]*?)\}\s*defineProps/)
  if (!interfaceMatch)
    return props

  const interfaceContent = interfaceMatch[1]
  const propLines = interfaceContent.split('\n')

  propLines.forEach((line) => {
    const propMatch = line.match(/(\w+)\??\s*:\s*([^;]+)/)

    if (propMatch) {
      props.push({
        name: propMatch[1].trim(),
        type: normalizeText(propMatch[2]),
        required: !line.includes('?'),
      })
    }
  })

  return props
}

function extractEmits(content) {
  const emits = []
  const interfaceMatch = content.match(/defineEmits\s*<\s*\{([\s\S]*?)\}\s*>\s*\(/)
  if (!interfaceMatch)
    return emits

  const emitLines = interfaceMatch[1].split('\n')
  emitLines.forEach((line) => {
    const emitMatch = line.match(/(\w+)\s*:\s*\[([^\]]+)\]/)

    if (emitMatch) {
      emits.push({
        name: emitMatch[1].trim(),
        params: normalizeText(emitMatch[2]),
      })
    }
  })

  return emits
}

function scanComponents(dir, components = []) {
  const items = fs.readdirSync(dir)

  items.forEach((item) => {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      const excludeDirs = ['preview', 'jsonEditor', '_*']
      const shouldExclude = excludeDirs.some((exclude) => {
        if (exclude.endsWith('*')) {
          return item.startsWith(exclude.replace('*', ''))
        }

        return item === exclude
      })

      if (!shouldExclude) {
        scanComponents(fullPath, components)
      }
    }
    else if (stat.isFile()) {
      const ext = path.extname(item)

      if (VUE_EXTENSIONS.includes(ext)) {
        components.push(fullPath)
      }
    }
  })

  return components
}

function unwrapObjectLiteral(node) {
  if (!node)
    return null
  if (ts.isObjectLiteralExpression(node))
    return node

  if (ts.isAsExpression(node) || ts.isTypeAssertionExpression(node) || ts.isParenthesizedExpression(node)) {
    return unwrapObjectLiteral(node.expression)
  }

  return null
}

function normalizePropType(typeText = '') {
  const text = normalizeText(typeText)
  if (!text)
    return 'any'

  const propTypeMatch = text.match(/PropType<(.+)>/)

  if (propTypeMatch) {
    return normalizeText(propTypeMatch[1])
  }

  if (text.startsWith('[') && text.endsWith(']')) {
    return text
      .slice(1, -1)
      .split(',')
      .map(item => normalizePropType(item.trim()))
      .join('|')
  }

  return text
    .replace(/\bas\s+const\b/g, '')
    .replace(/\bString\b/g, 'string')
    .replace(/\bNumber\b/g, 'number')
    .replace(/\bBoolean\b/g, 'boolean')
    .replace(/\bObject\b/g, 'object')
    .replace(/\bArray<any>\b/g, 'Array<any>')
    .replace(/\bArray\b/g, 'Array<any>')
    .replace(/\bFunction\b/g, 'Function')
    .trim()
}

function getLeadingJsDocBlock(content, node) {
  const ranges = ts.getLeadingCommentRanges(content, node.getFullStart()) || []
  const jsDocRange = [...ranges].reverse().find(range => content.slice(range.pos, range.end).startsWith('/**'))
  if (!jsDocRange)
    return ''

  return content.slice(jsDocRange.pos, jsDocRange.end)
}

function getLeadingJsDocText(content, node) {
  const block = getLeadingJsDocBlock(content, node)

  return block ? extractPlainCommentText(block) : ''
}

function getLeadingJsDocInfo(content, node) {
  const block = getLeadingJsDocBlock(content, node)

  if (!block) {
    return {
      raw: '',
      text: '',
      parsed: { summary: '', attrs: [], slots: [], events: [] },
    }
  }

  return {
    raw: block,
    text: extractPlainCommentText(block),
    parsed: parseJSDocBlock(block),
  }
}

function extractPropsFromBuildProps(content, attrDocMap, targetVarName) {
  const sourceFile = ts.createSourceFile('types.ts', content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const props = []

  function visit(node) {
    if (ts.isVariableDeclaration(node) && node.initializer && ts.isCallExpression(node.initializer)) {
      const declarationName = node.name.getText(sourceFile)

      if (targetVarName && declarationName !== targetVarName) {
        ts.forEachChild(node, visit)

        return
      }

      const callExpression = node.initializer
      const expressionText = callExpression.expression.getText(sourceFile)

      if (expressionText === 'buildProps' && callExpression.arguments.length > 0) {
        const propsObject = unwrapObjectLiteral(callExpression.arguments[0])

        if (propsObject) {
          props.push(...extractPropsFromObjectLiteral(propsObject))
        }
      }
    }

    ts.forEachChild(node, visit)
  }

  function extractPropsFromObjectLiteral(objectLiteral) {
    return objectLiteral.properties
      .filter(property => ts.isPropertyAssignment(property) || ts.isShorthandPropertyAssignment(property))
      .map((property) => {
        const name = property.name?.getText(sourceFile).replace(/['"`]/g, '').trim()
        if (!name)
          return null

        const docInfo = attrDocMap.get(name)
        const description = getLeadingJsDocText(content, property) || docInfo?.description || ''
        const result = {
          name,
          type: docInfo?.type || 'any',
          description,
          required: false,
        }

        if (ts.isPropertyAssignment(property)) {
          const optionsObject = unwrapObjectLiteral(property.initializer)

          if (optionsObject) {
            optionsObject.properties.forEach((option) => {
              if (!ts.isPropertyAssignment(option))
                return
              const optionName = option.name?.getText(sourceFile).replace(/['"`]/g, '').trim()
              if (!optionName)
                return

              if (optionName === 'type' && !docInfo?.type) {
                result.type = normalizePropType(option.initializer.getText(sourceFile))
              }

              if (optionName === 'required') {
                result.required = option.initializer.getText(sourceFile) === 'true'
              }
            })
          }
        }

        return result
      })
      .filter(Boolean)
  }

  visit(sourceFile)

  return uniqueBy(props, item => item.name)
}

function getRelatedTypeSources(vueFilePath) {
  const dir = path.dirname(vueFilePath)

  return RELATED_TYPE_FILES.map(fileName => path.join(dir, fileName))
    .filter(filePath => fs.existsSync(filePath))
    .map(filePath => ({
      filePath,
      content: fs.readFileSync(filePath, 'utf-8'),
    }))
}

function extractComponentName(filePath, content) {
  const scriptSetupNameMatch = content.match(/<script[^>]*\bname=["']([^"']+)["'][^>]*>/)

  if (scriptSetupNameMatch) {
    return scriptSetupNameMatch[1]
  }

  const defineOptionsNameMatch = content.match(/defineOptions\s*\(\s*\{[\s\S]*?name\s*:\s*["']([^"']+)["']/)

  if (defineOptionsNameMatch) {
    return defineOptionsNameMatch[1]
  }

  const exportDefaultNameMatch = content.match(/export\s+default\s*\{[\s\S]*?name\s*:\s*["']([^"']+)["']/)

  if (exportDefaultNameMatch) {
    return exportDefaultNameMatch[1]
  }

  const fileName = path.basename(filePath, '.vue')

  return `Ls${fileName.charAt(0).toUpperCase()}${fileName.slice(1)}`
}

function isExported(node) {
  return Boolean(node.modifiers?.some(modifier => modifier.kind === ts.SyntaxKind.ExportKeyword))
}

function inferInitializerType(initializer, sourceFile) {
  if (!initializer)
    return 'unknown'
  if (ts.isStringLiteral(initializer) || ts.isNoSubstitutionTemplateLiteral(initializer))
    return 'string'
  if (ts.isNumericLiteral(initializer))
    return 'number'
  if (initializer.kind === ts.SyntaxKind.TrueKeyword || initializer.kind === ts.SyntaxKind.FalseKeyword)
    return 'boolean'
  if (ts.isArrayLiteralExpression(initializer))
    return 'array'
  if (ts.isObjectLiteralExpression(initializer))
    return 'object'

  if (ts.isCallExpression(initializer)) {
    const expressionText = initializer.expression.getText(sourceFile)

    return expressionText === 'buildProps' ? 'buildProps' : normalizeText(expressionText)
  }

  return normalizeText(initializer.getText(sourceFile))
}

function extractLiteralArrayValue(initializer) {
  if (!ts.isArrayLiteralExpression(initializer))
    return undefined

  const values = []

  for (const element of initializer.elements) {
    if (ts.isStringLiteral(element) || ts.isNoSubstitutionTemplateLiteral(element)) {
      values.push(element.text)
    }
    else if (ts.isNumericLiteral(element)) {
      values.push(Number(element.text))
    }
    else if (element.kind === ts.SyntaxKind.TrueKeyword) {
      values.push(true)
    }
    else if (element.kind === ts.SyntaxKind.FalseKeyword) {
      values.push(false)
    }
    else {
      return undefined
    }
  }

  return values
}

function extractConstantModuleMetadata(moduleConfig) {
  if (!fs.existsSync(moduleConfig.filePath)) {
    return null
  }

  const content = fs.readFileSync(moduleConfig.filePath, 'utf-8')
  const sourceFile = ts.createSourceFile(moduleConfig.filePath, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const comments = extractJSDocBlocks(content)
  const attrDocMap = getAttrDocMap(comments)
  const exports = []

  sourceFile.statements.forEach((statement) => {
    if (ts.isVariableStatement(statement) && isExported(statement)) {
      statement.declarationList.declarations.forEach((declaration) => {
        const exportName = declaration.name.getText(sourceFile).trim()
        const jsDoc = getLeadingJsDocInfo(content, statement)
        const description = jsDoc.parsed.summary || jsDoc.text
        const initializer = declaration.initializer
        if (!initializer)
          return

        const inferredType = inferInitializerType(initializer, sourceFile)

        if (inferredType === 'buildProps') {
          exports.push({
            name: exportName,
            kind: 'props',
            description,
            props: normalizeMinMaxLengthPropNames(
              uniqueBy(extractPropsFromBuildProps(content, attrDocMap, exportName), item => item.name),
            ),
          })

          return
        }

        const item = {
          name: exportName,
          kind: 'const',
          type: inferredType,
          description,
        }

        const arrayValue = extractLiteralArrayValue(initializer)

        if (arrayValue) {
          item.value = arrayValue
        }
        else if (ts.isStringLiteral(initializer) || ts.isNoSubstitutionTemplateLiteral(initializer)) {
          item.value = initializer.text
        }

        if (jsDoc.parsed.events.length) {
          item.events = jsDoc.parsed.events
        }

        if (jsDoc.parsed.attrs.length) {
          item.attrs = jsDoc.parsed.attrs
        }

        exports.push(item)
      })
    }

    if (ts.isTypeAliasDeclaration(statement) && isExported(statement)) {
      const jsDoc = getLeadingJsDocInfo(content, statement)
      exports.push({
        name: statement.name.getText(sourceFile),
        kind: 'type',
        type: normalizeText(statement.type.getText(sourceFile)),
        description: jsDoc.parsed.summary || jsDoc.text,
      })
    }
  })

  return {
    name: moduleConfig.name,
    file: path.relative(path.dirname(COMPONENTS_DIR), moduleConfig.filePath).replace(/\\/g, '/'),
    description: moduleConfig.description,
    exports: uniqueBy(exports, item => item.name),
  }
}

/**
 * 属性提取策略（写入 component-meta 注释）：
 * 1) 以 `../components` 下 Vue 与本地 types 解析结果为准；
 * 2) 无同名项时，合并 node_modules/element-plus/web-types（与 https://element-plus.org 一致），缺失时从 unpkg 拉取。
 */
async function main() {
  console.log('🔍 扫描 Vue 组件...')

  let elementPlusInfo = {
    version: null,
    source: 'none',
    docOrigin: ELEMENT_PLUS_DOC_ORIGIN,
  }
  let epIndex = new Map()

  try {
    const ep = await loadElementPlusWebTypes()
    elementPlusInfo = {
      version: ep.version,
      source: ep.source,
      localPath: ep.localPath,
      docOrigin: ELEMENT_PLUS_DOC_ORIGIN,
    }
    epIndex = buildElementPlusComponentIndex(ep.data)
    console.log(`✅ 已加载 Element Plus web-types v${ep.version}（${ep.source}）← ${ELEMENT_PLUS_DOC_ORIGIN}`)
  }
  catch (e) {
    console.warn('⚠️  无法加载 Element Plus web-types，将仅使用 components 本地解析：', e.message)
  }

  const componentFiles = scanComponents(COMPONENTS_DIR)
  console.log(`✅ 找到 ${componentFiles.length} 个组件`)

  const components = []

  componentFiles.forEach((filePath) => {
    try {
      const vueContent = fs.readFileSync(filePath, 'utf-8')
      const relatedTypeSources = getRelatedTypeSources(filePath)
      const relatedComments = relatedTypeSources.flatMap(source => extractJSDocBlocks(source.content))
      const vueComments = extractJSDocBlocks(vueContent)
      const mergedDoc = mergeDocComments([...vueComments, ...relatedComments])
      const attrDocMap = getAttrDocMap([...vueComments, ...relatedComments])
      const propsFromDefineProps = extractPropsFromDefineProps(vueContent)
      const propsFromTypes = relatedTypeSources.flatMap(source => extractPropsFromBuildProps(source.content, attrDocMap))
      const emits = extractEmits(vueContent)
      const name = extractComponentName(filePath, vueContent)
      const relativePath = path.relative(path.dirname(COMPONENTS_DIR), filePath).replace(/\\/g, '/')

      const templateMatch = vueContent.match(/<template>[\s\S]*?<\/template>/)
      const slots = [...mergedDoc.slots]

      if (templateMatch) {
        const slotMatches = templateMatch[0].matchAll(/<slot[^>]*name=["']([^"']+)["'][^>]*>/g)

        for (const match of slotMatches) {
          if (!slots.includes(match[1])) {
            slots.push(match[1])
          }
        }
      }

      const baseProps = propsFromTypes.length
        ? propsFromTypes
        : propsFromDefineProps.length
          ? propsFromDefineProps.map(prop => ({
              ...prop,
              description: attrDocMap.get(prop.name)?.description || '',
              type: attrDocMap.get(prop.name)?.type || prop.type,
            }))
          : mergedDoc.attrs.map(attr => ({
              name: attr.name,
              type: attr.type || 'any',
              description: attr.description,
              required: false,
            }))

      const rawProps = uniqueBy(baseProps, item => item.name)
      const elTag = lsNameToElementPlusTag(name)
      const hasEpMatch = Boolean(elTag && epIndex && epIndex.size && epIndex.has(elTag))
      const props = mergePropsWithElementPlus(rawProps, elTag, epIndex)

      components.push({
        name,
        file: relativePath,
        description: mergedDoc.summary,
        props,
        events: emits.length > 0 ? emits : mergedDoc.events,
        slots: [...new Set(slots.filter(Boolean))],
        ...(hasEpMatch
          ? {
              elementPlusTag: elTag,
            }
          : {}),
      })

      console.log(`✅ 解析: ${name} (${relativePath})${hasEpMatch ? ` [${elTag}]` : ''}`)
    }
    catch (error) {
      console.error(`❌ 解析失败: ${filePath}`, error.message)
    }
  })

  console.log('🔍 扫描额外常量模块...')
  const constants = EXTRA_METADATA_MODULES.map(extractConstantModuleMetadata).filter(Boolean)
  constants.forEach((moduleMeta) => {
    console.log(`✅ 解析: ${moduleMeta.name} (${moduleMeta.file})`)
  })

  const output = {
    version: '1.0.0',
    generated: new Date().toISOString(),
    totalComponents: components.length,
    totalConstants: constants.length,
    elementPlus: {
      version: elementPlusInfo.version,
      source: elementPlusInfo.source,
      localPath: elementPlusInfo.localPath,
      doc: ELEMENT_PLUS_DOC_ORIGIN,
      note: 'Props 以 components 为主；无同名项时自 Element Plus web-types 补全（与官网属性表一致；输入长度用 maxlength / minlength）',
    },
    components,
    constants,
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf-8')
  console.log(`\n✨ 完成！生成文件: ${OUTPUT_FILE}`)
  console.log(`📊 共提取 ${components.length} 个组件与 ${constants.length} 个常量模块的元数据`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
