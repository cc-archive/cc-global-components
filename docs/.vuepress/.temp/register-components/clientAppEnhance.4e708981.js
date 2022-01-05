import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("cc-explore", defineAsyncComponent(() => import("/var/www/creative_commons/cc-global/my-cc/cc-global-components/src/components/cc-explore.vue"))),
  app.component("cc-global-footer", defineAsyncComponent(() => import("/var/www/creative_commons/cc-global/my-cc/cc-global-components/src/components/cc-global-footer.vue"))),
  app.component("cc-global-header", defineAsyncComponent(() => import("/var/www/creative_commons/cc-global/my-cc/cc-global-components/src/components/cc-global-header.vue")))
}
