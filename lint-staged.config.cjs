module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': [],
  '*.vue': ['eslint', 'stylelint'],
  '*.{scss,less,styl,html}': ['stylelint'],
  '*.md': []
};
