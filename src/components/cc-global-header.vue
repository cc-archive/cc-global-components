<template>
  <header class="vocab header">
    <div class="is-flex is-justify-content-flex-end">
      <a class="button donate" :href="donationUrl" target="_blank">
        <i class="icon heart"></i>
        Donate
      </a>
    </div>
    <nav class="navbar" :aria-label="ariaPrimaryLabel">
      <div class="navbar-brand">
        <a class="main-logo navbar-item" href="/" target="_blank">
          <div class="has-text-black">
            <img :src="logoUrl" alt="Logo" />
          </div>
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleBurgerActive()"
          :class="{['active']: navBarOpen}"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
      </a>
      </div>
      <div
        :class="{ ['navbar-menu']: true, ['is-active']: isBurgerMenuActive, ['active']: navBarOpen }"
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
      navBarOpen: false,
    };
  },
  methods: {
    toggleBurgerActive() {
      this.isBurgerMenuActive = !this.isBurgerMenuActive;
      this.navBarOpen = !this.navBarOpen;
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
a.donate {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: none;
  color: #d14500;
  background-color: #feede9;
  border-color: #feede9;
  line-height: 19px;
  font-size: 0.75rem;
  padding: calc(0.25rem - 0.7px) 0.5rem calc(0.25rem - 0.7px) 0.25rem;
  height: unset;
  margin-right: 8em;
}

i.icon,
.button.icon {
  height: unset;
}
.navbar-link,
.navbar-item,
.navbar-burger {
  color: #767676;
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.5;
}

.button .icon:first-child:last-child {
  margin-right: 1px;
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
    top: -4.5rem;
  }
}
@media screen and (min-width: 1024px) {
  .navbar.is-default {
    display: flex;
  }
}

.active span:nth-of-type(1) {
  -webkit-transform: translateY(5px) rotate(-40deg);
  -ms-transform: translateY(5px) rotate(-40deg);
  transform: translateY(5px) rotate(-40deg);
  background-color: #000000;
}

.active span:nth-of-type(2) {
  opacity: 0;
  background-color: #000000;
}

.active span:nth-of-type(3) {
  -webkit-transform: translateY(-5px) rotate(40deg);
  -ms-transform: translateY(-5px) rotate(40deg);
  transform: translateY(-5px) rotate(40deg);
  background-color: #000000;
}

.navbar-burger span {
  background-color: currentColor;
  display: block;
  height: 1px;
  position: absolute;
  transform-origin: center;
  left: calc(10% - 10px);
  transition-duration: 86ms;
  transition-property: background-color, opacity, transform;
  transition-timing-function: ease-out;
}

</style>
