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
      '@semantic-release/npm',{
        pkgRoot: './packages/ls-components/package',
      }
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'packages/ls-components', 'packages/ls-components/package.json']
      }
    ]
  ]
}
