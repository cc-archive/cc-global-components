<template>
    <header class="vocab header">
        <nav class="navbar is-default is-active">
            <div class="navbar-brand">
                
            </div>
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <!-- Donate button -->
                    <a class="button donate" href="https://creativecommons.org/donate?c_src=website&amp;c_src2=NavBar">
                        <i class="icon heart"></i>
                        Donate
                    </a>
                </div>
            </div>
        </nav>
        <nav class="navbar" :aria-label="ariaPrimaryLabel">
             <div class="navbar-brand column is-one-fifth">
                <a class="main-logo" href="/" target="_blank">
                    <img src="../../assets/cc_logo_black.png" class="w-full" alt="Creative Commons Logo">
                </a>
            </div>
            <div :class="{ ['navbar-menu']: true, ['is-active']: isBurgerMenuActive }">
                <div class="navbar-end">
                     <div class="" v-for="menu in menus" :key="menu.ID">
                        <a v-if="!menu.child_items" class="navbar_item navbar-link is-arrowless" tabindex="0" :href="menu.url">
                            {{ menu.title }}
                            <!--  <span class="icon"><ExternalLink /></span>-->
                            <i class="icon external-link" v-if="isExternal" />
                        </a>
                        <div v-else class="navbar-item has-dropdown is-hoverable" ref="outerDiv" @mouseenter="openMenu" @mouseleave="closeMenu">
                            <div>
                                <button class="navbar-link is-arrowless" aria-haspopup="menu" aria-expanded="false" ref="opener" @click="toggleMenu">
                                    {{ menu.title }}
                                    <!--  <span class="icon"><CaretDown /></span>-->
                                    <i class="icon caret-down" />
                                </button>
                                <div class="navbar-dropdown">
                                    <a v-for="child_menu in menu.child_items" :key="child_menu.ID" :href="child_menu.url" class="navbar-item navbar-link">{{child_menu.title}}</a>
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
    import { defineComponent } from 'vue';
    const axios = require('axios');
    export default defineComponent({
        name: 'cc-golbal-header',
        beforeCreate() {
             axios.get("http://localhost:8000/wp-json/ccnavigation-header/menu")
                .then(response => this.menus = response.data)
                .then(menus => console.log(menus));
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
        },
        data() { 
            return {
                isBurgerMenuActive: false,
                menus: {} 
            }
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
    })
</script>
<style scoped>
    @import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);
    @import url(https://unpkg.com/@creativecommons/vocabulary@2020.11.3/css/vocabulary.css);
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
</style>