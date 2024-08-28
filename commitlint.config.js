// commitlint.config.js
// 检查type类型
function checkType(header) {
  header = `${header}`
  // type 类型
  const enumType = [
    'init',
    'feat',
    'fix',
    'docs',
    'style',
    'wip',
    'types',
    'workflow',
    'refactor',
    'perf',
    'test',
    'build',
    'ci',
    'chore',
    'revert',
    '🎉 init',
    '✨ feat',
    '🐞 fix',
    '📃 docs',
    '🌈 style',
    '🕔 wip',
    '🏷️ types',
    '📋 workflow',
    '🦄 refactor',
    '🎈 perf',
    '🧪 test',
    '🔧 build',
    '🐎 ci',
    '🐳 chore',
    '⏪️ revert',
  ]
  let realType = header.split(':')[0]
  const isScope = realType.includes('(')

  if (isScope)
    realType = realType.split('(')[0]

  return enumType.includes(realType)
}

function checkSubject(header) {
  header = `${header}`
  const realSubject = header.split(':')[1]

  if (!realSubject)
    return false

  return realSubject.length > 0
}

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum-rule': [2, 'never'],
    'subject-enum-rule': [2, 'never'],
    'type-enum': [0, 'never'],
    'type-empty': [0, 'always'],
    'subject-empty': [0, 'always'],
  },
  plugins: [
    {
      rules: {
        'type-enum-rule': ({ header }) => {
          return [
            checkType(header),
            '需要包含提交类型，格式如: "feat: 开发新功能" 中的feat, '
            + '可选值有: feat/fix/style/test/chore/ci/..., 类型后面紧跟英文冒号分隔主题信息',
          ]
        },
        'subject-enum-rule': ({ header }) => {
          return [checkSubject(header), '需要包含提交主题, 格式如: "feat: 开发新功能" 中的 开发新功能']
        },
      },
    },
  ],
}
