## CC Explore Banner
This is an expandable component which contains links to other CC Web Properties. This component renders as a button on the top-right corner of the page. It should be placed above other components (navigation etc) so that it maintains this position. When this button is clicked, the component is expanded to reveal the different links.

---
### Attributes
#### Donation URL
This component accepts one attribute `donation-url` which is used for the Donation button contained in the component. This URL is what is redirected to when the donation button is clicked. 

### Usage
To use this component, import the CDN version of the CC Global components libary and initialize it. 
Then render it as:

```html
<cc-explore
    donation-url="http://example.com"
/>
```

This will render as shown below (the black button on the right).

---

<cc-explore />

### Code
```vue
<template>
  <header
    id="cc-explore"
    :class="{ 'is-active': isActive }"
    class="cc-global-header"
  >
    <div>
      <a
        class="open-tab"
        @click="toggleCCExplore"
        @keypress="toggleCCExplore"
        aria-label="Explore CC"
        href="#"
      >
        Explore CC
      </a>
      <div class="global-header-content">
        <div class="columns padding-bottom-normal">
          <div class="column is-one-quarter">
            <header class="global-header-header">
              <a class="main-logo" href="/" target="_blank">
                <div class="column">
                  <div class="has-text-white">
                        <!-- Logo goes here -->
                  </div>
                </div>
              </a>
            </header>
            <aside class="donate-section">
              <h5 class="has-text-white">Our work relies on you!</h5>
              <p class="">Help us keep the internet free and open.</p>
              <a
                class="button small donate"
                target="_blank"
                :href="donationUrl"
              >
                <i
                  class="icon cc-letterheart margin-right-small is-size-5 padding-top-smaller"
                ></i>
                <!-- The donation button is here -->
              </a>
            </aside>
          </div>
          <div class="column">
            <nav
              class="products"
              role="navigation"
              aria-label="global navigation"
            >
              <div class="product-list">
                <!-- The different links are here -->
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "cc-explore",
  props: {
    donationUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleCCExplore() {
      this.isActive = !this.isActive;
    },
  },
});
</script>
<style scoped>
.cc-global-header .open-tab {
  display: block;
  bottom: -2rem;
}
</style>
```