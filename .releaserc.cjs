module.exports = {
  defaultBranch: 'main',
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/npm'
    ],
    [
      '@semantic-release/github',
      {
        assets: ['CHANGELOG.md', './packages/ls-components/package.json']
      }
    ]
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', './packages/ls-components/package.json']
      }
    ]
  ]
}
