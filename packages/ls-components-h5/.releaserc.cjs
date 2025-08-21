module.exports = {
  defaultBranch: 'main-h5',
  branches: ['main-h5'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: './CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: '.'
      },
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['./CHANGELOG.md', './package.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]'
      }
    ]
  ]
}
