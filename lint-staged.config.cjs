module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': [],
  '*.vue': ['eslint', 'stylelint'],
  '*.{scss,less,styl,html}': ['stylelint'],
  '*.md': [],
  '**/*': filenames => {
    // 过滤掉被 `.gitignore` 忽略的文件
    const filteredFiles = filenames.filter(file => !file.includes('packages/ls-components/lib/'));
    return [`eslint ${filteredFiles.join(' ')}`, 'git add'];
  }
};
