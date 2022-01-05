import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/var/www/creative_commons/cc-global/my-cc/cc-global-components/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/var/www/creative_commons/cc-global/my-cc/cc-global-components/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
