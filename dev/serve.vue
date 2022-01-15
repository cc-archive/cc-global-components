<script>
import { defineComponent } from "vue";
import CcExplore from "../src/components/cc-explore.vue";
import CcGlobalFooter from "../src/components/cc-global-footer.vue";
import CcGlobalHeader from "../src/components/cc-global-header.vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { CcGlobalsSample } from '@/entry.esm';

export default defineComponent({
  components: { CcExplore, CcGlobalHeader, CcGlobalFooter },
  name: "ServeDev",
  // components: {
  //  CcGlobalsSample,
  // }
});
</script>

<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/@creativecommons/vocabulary@2020.11.3/css/vocabulary.css"
    />
    <div class="container">
      <cc-explore
        donation-url="https://www.classy.org/give/313412/#!/donation/checkout?c_src=website&c_src2=top-of-page-banner"
        logo-path=""
      />
      <cc-global-header
        base-url="http://127.0.0.1:8000"
        donation-url="https://www.classy.org/give/313412/#!/donation/checkout?c_src=website&amp;c_src2=NavBar"
        use-menu-placeholders
        logo-path=""
      />
    </div>
    <cc-global-footer
      donation-url="https://www.classy.org/give/313412/#!/donation/checkout?c_src=website&c_src2=top-of-page-banner"
      logo-path=""
    />
  </div>
</template>
