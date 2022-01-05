import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Documentation | CC Global Components"},["/index.html","/README.md"]],
  ["v-5d7259d4","/guide.html",{"title":"Getting Started"},["/guide","/guide.md"]],
  ["v-2bd62f33","/components/cc-explore.html",{"title":""},["/components/cc-explore","/components/cc-explore.md"]],
  ["v-f83fd77e","/components/cc-global-footer.html",{"title":""},["/components/cc-global-footer","/components/cc-global-footer.md"]],
  ["v-ee0ba2e2","/components/cc-global-header.html",{"title":""},["/components/cc-global-header","/components/cc-global-header.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
