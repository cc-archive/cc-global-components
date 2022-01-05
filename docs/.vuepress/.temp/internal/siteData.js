export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "CC Global Components",
  "description": "Documentation site for the CC Global Components Library.",
  "head": [
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://unpkg.com/@creativecommons/vocabulary@2020.11.3/css/vocabulary.css"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://unpkg.com/@creativecommons/fonts@2020.9.4/css/fonts.css"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
