
const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'en-US',
  title: 'CC Global Components',
  description: 'Documentation site for the CC Global Components Library.',
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/@creativecommons/vocabulary@2020.11.3/css/vocabulary.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/@creativecommons/fonts@2020.9.4/css/fonts.css"
      }
    ]
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/cc-logo.svg',
    repo: 'https://github.com/creativecommons/cc-global-components',
    navbar: [
        { text: 'Home', link: '/' },
        { text: 'Components', children: [{text: 'CC Explore' ,link: '/components/cc-explore.md'}, {text: 'CC Global Header', link: '/components/cc-global-header.md'}, {text: 'CC Global Footer', link: '/components/cc-global-footer.md'}]}
    ]
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, '../../src/components'),
      },
    ],
  ],
}