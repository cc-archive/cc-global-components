export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Documentation | CC Global Components",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "Documentation | CC Global Components",
    "lang": "en-US",
    "footer": "Copyright (c) 2022 Creative Commons",
    "lastUpdated": true,
    "actions": [
      {
        "text": "Get Started",
        "link": "/guide/getting-started.html",
        "type": "primary"
      },
      {
        "text": "Introduction",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "CC Explore",
        "details": "This is an expandable banner which contains links to other CC platforms."
      },
      {
        "title": "CC Global Header",
        "details": "This is a dynamic component which renders the logo and navigation menu for the platform it is initialized on."
      },
      {
        "title": "CC Global Footer",
        "details": "This is the general footer layout for the Creative Commons Web platforms."
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1641394407000,
    "contributors": [
      {
        "name": "Muluh MG Godson",
        "email": "godsonmuluh@gmail.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
