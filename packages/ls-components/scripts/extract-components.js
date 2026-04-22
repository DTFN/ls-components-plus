import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

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
            props: extractPropsFromBuildProps(content, attrDocMap, exportName),
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

function main() {
  console.log('🔍 扫描 Vue 组件...')
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

      const props = propsFromTypes.length
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

      components.push({
        name,
        file: relativePath,
        description: mergedDoc.summary,
        props: uniqueBy(props, item => item.name),
        events: emits.length > 0 ? emits : mergedDoc.events,
        slots: [...new Set(slots.filter(Boolean))],
      })

      console.log(`✅ 解析: ${name} (${relativePath})`)
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
    components,
    constants,
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf-8')
  console.log(`\n✨ 完成！生成文件: ${OUTPUT_FILE}`)
  console.log(`📊 共提取 ${components.length} 个组件与 ${constants.length} 个常量模块的元数据`)
}

main()
