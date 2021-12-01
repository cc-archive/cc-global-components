<template>
    <header class="vocab header">
        <nav class="navbar is-default is-active">
            <div class="navbar-brand">
                
            </div>
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <!-- Locale options 
                    <div class="locale">
                        <div class="select">
                            <select>
                                <option disabled="">Select</option>
                                <option selected="">English</option>
                                <option>le Français</option>
                                <option>日本語</option>
                                <option>Русский</option>
                                <option>Español</option>
                            </select>
                        </div>
                        <span class="icon caret-down is-small is-right">
                            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M7.45896 11.25H22.5351c1.043 0 1.5645 1.2598.8262 1.998l-7.5352 7.5411c-.457.457-1.2011.457-1.6582 0L6.63279 13.248c-.73828-.7382-.2168-1.998.82617-1.998z" fill="currentColor"></path></svg>
                        </span>
                    </div>-->
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
                    <!-- Use this Div for dropdown menu items -->
                    <div class="navbar-item has-dropdown is-hoverable" ref="outerDiv" @mouseenter="openMenu" @mouseleave="closeMenu">
                        <button class="navbar-link is-arrowless" aria-haspopup="menu" aria-expanded="false" ref="opener" @click="toggleMenu">
                            Who we are
                            <!--  <span class="icon"><CaretDown /></span>-->
                            <i class="icon caret-down" />
                        </button>
                        <div class="navbar-dropdown">
                            <a href="#" class="navbar-item navbar-link">Item 2-1</a>
                            <a href="#" class="navbar-item navbar-link">Item 2-2</a>
                            <a href="#" class="navbar-item navbar-link">Item 2-3</a>
                            <a href="#" class="navbar-item navbar-link">Item 2-4</a>
                        </div>
                    </div>

                    <div class="navbar-item has-dropdown is-hoverable" ref="outerDiv" @mouseenter="openMenu" @mouseleave="closeMenu">
                        <button class="navbar-link is-arrowless" aria-haspopup="menu" aria-expanded="false" ref="opener" @click="toggleMenu">
                            What we do
                            <!--  <span class="icon"><CaretDown /></span>-->
                            <i class="icon caret-down" />
                        </button>
                        <div class="navbar-dropdown">
                            <a href="#" class="navbar-item navbar-link">Item 3-1</a>
                            <a href="#" class="navbar-item navbar-link">Item 3-2</a>
                        </div>
                    </div>

                    <div class="navbar-item has-dropdown is-hoverable" ref="outerDiv" @mouseenter="openMenu" @mouseleave="closeMenu">
                        <button class="navbar-link is-arrowless" aria-haspopup="menu" aria-expanded="false" ref="opener" @click="toggleMenu">
                            Licenses and tools
                            <!--  <span class="icon"><CaretDown /></span>-->
                            <i class="icon caret-down" />
                        </button>
                        <div class="navbar-dropdown">
                            <a href="#" class="navbar-item navbar-link">Item 3-1</a>
                            <a href="#" class="navbar-item navbar-link">Item 3-2</a>
                        </div>
                    </div>
                     
                    <!--Single Menu items-->
                    <a class="navbar-item navbar-link is-arrowless" tabindex="0" href="#">
                        News
                        <!--  <span class="icon"><ExternalLink /></span>-->
                        <i class="icon external-link" v-if="isExternal" />
                    </a>

                     <!--Single Menu items-->
                    <a class="navbar-item navbar-link is-arrowless" tabindex="0" href="#">
                        Support us
                        <!--  <span class="icon"><ExternalLink /></span>-->
                        <i class="icon external-link" v-if="isExternal" />
                    </a>
                </div>
            </div>
        </nav>
  </header>
</template>
<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'cc-golbal-header',
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
        data: () => ({ isBurgerMenuActive: false }),
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