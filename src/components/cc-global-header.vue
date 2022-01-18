<template>
  <header class="vocab header">
    <nav class="navbar is-default">
      <div class="navbar-brand"></div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <!-- Donate button -->
          <a class="button donate" :href="donationUrl" target="_blank">
            <i class="icon heart"></i>
            Donate
          </a>
        </div>
      </div>
    </nav>
    <nav class="navbar" :aria-label="ariaPrimaryLabel">
      <div class="navbar-brand column is-one-fifth">
        <a class="main-logo" href="/" target="_blank">
          <div class="has-text-black">
            <img :src="logoUrl" alt="Logo" />
          </div>
        </a>
      </div>
      <div
        :class="{ ['navbar-menu']: true, ['is-active']: isBurgerMenuActive }"
      >
        <div class="navbar-end">
          <p v-if="menuLoading" class="navbar-item navbar-link is-arrowless">
            Loading menu.
          </p>
          <p v-if="errorMessage" class="navbar-item navbar-link is-arrowless">
            We are having trouble loading the menu
            <br />
            Error Message: {{ errorMessage }}.
          </p>
          <div class="" v-for="menu in menus" :key="menu.ID">
            <a
              v-if="!menu.child_items"
              class="navbar-item navbar-link is-arrowless"
              tabindex="0"
              :href="menu.url"
            >
              {{ menu.title }}
              <!--  <span class="icon"><ExternalLink /></span>-->
              <i class="icon external-link" v-if="isExternal" />
            </a>
            <div
              v-else
              class="navbar-item has-dropdown is-hoverable"
              ref="outerDiv"
              @mouseenter="openMenu"
              @mouseleave="closeMenu"
            >
              <div>
                <button
                  class="navbar-link is-arrowless"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  ref="opener"
                  @click="toggleMenu"
                >
                  {{ menu.title }}
                  <!--  <span class="icon"><CaretDown /></span>-->
                  <i class="icon caret-down" />
                </button>
                <div class="navbar-dropdown">
                  <a
                    v-for="child_menu in menu.child_items"
                    :key="child_menu.ID"
                    :href="child_menu.url"
                    class="navbar-item navbar-link"
                    >{{ child_menu.title }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { defineComponent } from "vue";
if (process.env.NODE_ENV === "development") {
  var axios = require("axios");
} else {
  var axios = window.axios;
}
function retryApiRequest(error) {
  let config = error.config;
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(error);

  // Set the variable for keeping track of the retry count
  config.retryCount = config.retryCount || 0;

  // Check if we've maxed out the total number of retries
  if (config.retryCount >= config.retry) {
    // Reject with the errors
    return Promise.reject(error);
  }

  // Set the default retry delay in milliseconds
  const defaultRetryDelay = 1000;

  // Increase the retry count
  config.retryCount += 1;

  // Create new promise to resolve the request
  const requestResolver = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, config.retryDelay || defaultRetryDelay);
  });

  // Return the promise which recalls axios to retry the request
  return requestResolver.then(function () {
    return axios(config);
  });
}
export default defineComponent({
  name: "cc-golbal-header",
  created() {
    var vm = this;
    var requestPath = "/?rest_route=/ccnavigation-header/menu";
    var requestUrl = vm.baseUrl.replace(/\/$/, "") + requestPath;
    if (vm.useMenuPlaceholders) {
      vm.menus = [
        {
          ID: 1,
          url: "#",
          title: "Menu 1",
          child_items: [
            { ID: 1, url: "#", title: "Item 1" },
            { ID: 2, url: "#", title: "Item 2" },
            { ID: 3, url: "#", title: "Item 3" },
          ],
        },
        { ID: 2, url: "#", title: "Menu 2" },
        {
          ID: 3,
          url: "#",
          title: "Menu 3",
          child_items: [
            { ID: 1, url: "#", title: "Item 1" },
            { ID: 2, url: "#", title: "Item 2" },
          ],
        },
        { ID: 4, url: "#", title: "Menu 4" },
      ];
    } else {
      vm.menuLoading = true;
      axios.interceptors.response.use(undefined, (error) =>
        retryApiRequest(error)
      );
      axios
        .get(requestUrl, { retry: 5, retryDelay: 3000 })
        .then((response) => {
          vm.menuLoading = false;
          vm.menus = response.data;
        })
        .catch((error) => {
          vm.menuLoading = false;
          vm.errorMessage = error.message;
        });
    }
  },
  props: {
    ariaPrimaryLabel: {
      type: String,
      default: "Main",
    },
    ariaMenuLabel: {
      type: String,
      default: "Menu",
    },
    baseUrl: {
      type: String,
      required: true,
    },
    donationUrl: {
      type: String,
      required: true,
    },
    useMenuPlaceholders: {
      type: Boolean,
    },
    logoUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isBurgerMenuActive: false,
      menus: {},
      errorMessage: undefined,
      menuLoading: false,
    };
  },
  methods: {
    toggleBurgerActive() {
      this.isBurgerMenuActive = !this.isBurgerMenuActive;
    },
    openMenu() {
      this.isOpen = true;
      this.$refs.opener.setAttribute("aria-expanded", "true");
    },
    closeMenu() {
      this.isOpen = false;
      this.$refs.opener.setAttribute("aria-expanded", "false");
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
      const ariaExpanded = this.$refs.opener.getAttribute("aria-expanded");
      this.$refs.opener.setAttribute("aria-expanded", `${!ariaExpanded}`);
    },
  },
});
</script>
<style scoped>
.navbar-link {
  background: transparent;
  border: none;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.5;
}
.navbar-item {
  cursor: pointer;
}
.navbar-link {
  color: #767676;
}
svg {
  height: 73px;
}
.navbar {
  padding: 0;
}
.navbar.is-default {
  grid-template-columns: auto 1fr;
  padding: 0 5rem 1.5rem 5.25rem;
}

@media screen and (min-width: 769px), print {
  .navbar.is-default .navbar-menu .navbar-start {
    top: -3.8rem;
  }
}
@media screen and (min-width: 1024px) {
  .navbar.is-default {
    display: flex;
  }
}
</style>
