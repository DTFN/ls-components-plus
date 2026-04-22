import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    ignorePatterns: ['node_modules/**', 'dist/**'],
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: true,
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: true,
      /**
       * Format JSON files
       * By default uses Prettier
       */
      // json: true,
    },
    rules: {
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      // 添加链式调用的缩进规则
      // 'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
      // 'indent': ['error', 2, {
      //   MemberExpression: 2, // 将链式调用缩进改为 2 个层级（4个空格）
      //   CallExpression: { arguments: 2 }, // 函数调用参数缩进也改为 2 个层级
      //   ChainExpression: { depth: 3 }, // 链式表达式缩进深度
      // }],
      // 换行规则
      'padding-line-between-statements': [
        'error',
        // 在块级语句、函数、return、export前添加空行
        {
          blankLine: 'always',
          prev: '*',
          next: ['block', 'block-like', 'function', 'return', 'export'],
        },
        // import语句之后添加空行
        {
          blankLine: 'always',
          prev: 'import',
          next: '*',
        },
        // import语句之间不需要空行
        {
          blankLine: 'never',
          prev: 'import',
          next: 'import',
        },
        // 变量声明之间可以有空行也可以没有
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        // 变量声明和函数之间需要空行
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: ['function'],
        },
        // 函数之间需要空行
        {
          blankLine: 'always',
          prev: 'function',
          next: 'function',
        },
      ],
      // 禁止未使用的变量 _可以忽略
      'ts/no-unused-vars': ['off'],
      'antfu/if-newline': ['error'],
      'prefer-const': 'off',
      'vue/component-name-in-template-casing': 'off',
      'regexp/no-super-linear-backtracking': 'off',
      'regexp/no-unused-capturing-group': 'off',
      'regexp/no-misleading-capturing-group': 'off',
      'regexp/no-useless-escape': 'off',
      'regexp/no-useless-quantifier': 'off',
      'regexp/no-useless-non-capturing-group': 'off',
      'regexp/no-useless-assertions': 'off',
      'regexp/no-contradiction-with-assertion': 'off',
    },
    vue: {
      overrides: {
        'vue/html-self-closing': 'off',
        'vue/component-name-in-template-casing': 'off',
      },
    },
  },
  {
    files: ['**/*.json'],
    rules: {
      'no-multiple-empty-lines': ['error', { max: 0 }], // 禁止空行
    },
  },
)
