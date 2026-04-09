import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Vue组件元数据提取脚本
 * 用于生成MCP可用的组件文档
 */

// 组件目录
const COMPONENTS_DIR = path.join(__dirname, '../components');
const OUTPUT_FILE = path.join(__dirname, '../component-meta.json');

// 支持的文件类型
const VUE_EXTENSIONS = ['.vue'];

// 匹配注释正则
const JSDOC_COMMENT_REGEX = /\/\*\*[\s\S]*?\*\//g;
const PROPS_DEFINE_REGEX = /defineProps\s*\(\s*([\s\S]*?)\s*\)/g;
const EMITS_DEFINE_REGEX = /defineEmits\s*\(\s*([\s\S]*?)\s*\)/g;

/**
 * 提取JSDoc注释
 */
function extractJSDoc(content) {
  const comments = [];
  const matches = content.match(JSDOC_COMMENT_REGEX);

  if (matches) {
    matches.forEach(match => {
      const lines = match.split('\n');
      const comment = {
        summary: '',
        attrs: [],
        slots: [],
        events: []
      };

      lines.forEach(line => {
        line = line.replace(/^\s*\*\s?/, '').trim();

        if (line.startsWith('@summary')) {
          comment.summary = line.replace('@summary', '').trim();
        } else if (line.startsWith('@attr')) {
          const attrMatch = line.match(/@attr\s*\{([^}]+)\}\s*(\w+)\s*-\s*(.+)/);
          if (attrMatch) {
            comment.attrs.push({
              type: attrMatch[1].trim(),
              name: attrMatch[2].trim(),
              description: attrMatch[3].trim()
            });
          }
        } else if (line.startsWith('@slot')) {
          comment.slots.push(line.replace('@slot', '').trim());
        } else if (line.startsWith('@event')) {
          comment.events.push(line.replace('@event', '').trim());
        }
      });

      comments.push(comment);
    });
  }

  return comments[0] || { summary: '', attrs: [], slots: [], events: [] };
}

/**
 * 提取props定义
 */
function extractProps(content) {
  const props = [];

  // 查找defineProps调用
  const propsMatch = content.match(/defineProps\(([\s\S]*?)\)/);
  if (propsMatch) {
    const propsContent = propsMatch[1];

    // 尝试提取接口定义
    const interfaceMatch = content.match(/interface\s+\w+\s*{([\s\S]*?)}\s*defineProps/);
    if (interfaceMatch) {
      const interfaceContent = interfaceMatch[1];
      const propLines = interfaceContent.split('\n');

      propLines.forEach(line => {
        const propMatch = line.match(/(\w+)\??\s*:\s*([^;]+)/);
        if (propMatch) {
          props.push({
            name: propMatch[1].trim(),
            type: propMatch[2].trim(),
            required: !line.includes('?')
          });
        }
      });
    }
  }

  return props;
}

/**
 * 提取emits定义
 */
function extractEmits(content) {
  const emits = [];

  // 查找defineEmits调用
  const emitsMatch = content.match(/defineEmits\(([\s\S]*?)\)/);
  if (emitsMatch) {
    const emitsContent = emitsMatch[1];

    // 尝试提取接口定义
    const interfaceMatch = content.match(/interface\s+\w+\s*{([\s\S]*?)}\s*defineEmits/);
    if (interfaceMatch) {
      const interfaceContent = interfaceMatch[1];
      const emitLines = interfaceContent.split('\n');

      emitLines.forEach(line => {
        const emitMatch = line.match(/(\w+)\s*:\s*\[([^\]]+)\]/);
        if (emitMatch) {
          emits.push({
            name: emitMatch[1].trim(),
            params: emitMatch[2].trim()
          });
        }
      });
    }
  }

  return emits;
}

/**
 * 扫描目录获取所有Vue组件
 */
function scanComponents(dir, components = []) {
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // 排除特定目录
      const excludeDirs = ['preview', 'jsonEditor', '_*'];
      const shouldExclude = excludeDirs.some(exclude => {
        if (exclude.endsWith('*')) {
          return item.startsWith(exclude.replace('*', ''));
        }
        return item === exclude;
      });

      if (!shouldExclude) {
        scanComponents(fullPath, components);
      }
    } else if (stat.isFile()) {
      const ext = path.extname(item);
      if (VUE_EXTENSIONS.includes(ext)) {
        components.push(fullPath);
      }
    }
  });

  return components;
}

/**
 * 提取组件名称
 */
function extractComponentName(filePath, content) {
  // 从文件名
  const fileName = path.basename(filePath, '.vue');
  const dirName = path.basename(path.dirname(filePath));

  // 从name属性
  const nameMatch = content.match(/name\s*:\s*["']([^"']+)["']/);
  if (nameMatch) {
    return nameMatch[1];
  }

  // 返回组合名称
  return `Ls${fileName.charAt(0).toUpperCase()}${fileName.slice(1)}`;
}

/**
 * 主函数
 */
function main() {
  console.log('🔍 扫描Vue组件...');
  const componentFiles = scanComponents(COMPONENTS_DIR);
  console.log(`✅ 找到 ${componentFiles.length} 个组件`);

  const components = [];

  componentFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const relativePath = path.relative(path.dirname(COMPONENTS_DIR), filePath);
      const jsDoc = extractJSDoc(content);
      const props = extractProps(content);
      const emits = extractEmits(content);
      const name = extractComponentName(filePath, content);

      // 提取模板中的slots
      const templateMatch = content.match(/<template>[\s\S]*?<\/template>/);
      let slots = jsDoc.slots;

      if (templateMatch) {
        const template = templateMatch[0];
        // 查找<slot>标签
        const slotMatches = template.matchAll(/<slot[^>]*name=["']([^"']+)["'][^>]*>/g);
        for (const match of slotMatches) {
          if (!slots.includes(match[1])) {
            slots.push(match[1]);
          }
        }
      }

      components.push({
        name,
        file: relativePath.replace(/\\/g, '/'),
        description: jsDoc.summary,
        props:
          props.length > 0
            ? props
            : jsDoc.attrs.map(attr => ({
                name: attr.name,
                type: attr.type,
                description: attr.description,
                required: false
              })),
        events: emits.length > 0 ? emits : jsDoc.events,
        slots: slots
      });

      console.log(`✅ 解析: ${name} (${relativePath})`);
    } catch (error) {
      console.error(`❌ 解析失败: ${filePath}`, error.message);
    }
  });

  // 生成输出
  const output = {
    version: '1.0.0',
    generated: new Date().toISOString(),
    totalComponents: components.length,
    components: components
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf-8');
  console.log(`\n✨ 完成！生成文件: ${OUTPUT_FILE}`);
  console.log(`📊 共提取 ${components.length} 个组件的元数据`);
}

// 运行
main();
