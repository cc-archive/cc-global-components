<script>
import { defineComponent } from "vue";
import CcDonate from "../src/components/cc-donate.vue";
import CcExplore from "../src/components/cc-explore.vue";
import CcGlobalFooter from "../src/components/cc-global-footer.vue";
import CcGlobalHeader from "../src/components/cc-global-header.vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { CcGlobalsSample } from '@/entry.esm';

export default defineComponent({
  components: { CcExplore, CcGlobalHeader, CcGlobalFooter, CcDonate },
  name: "ServeDev",
  // components: {
  //  CcGlobalsSample,
  // }
});
</script>

<template>
  <div id="app">
    <cc-explore />
    <cc-donate />
    <cc-global-header />
    <cc-global-footer />
  </div>
</template>
