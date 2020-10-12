<template>
    <nav class="navbar navbar--mobile" :class="{ 'navbar--mobile-open': getIsMobileMenuOpen }">
        <logo />
        <navbar-links v-if="getIsMobileMenuOpen"/>
        <hamburger-mobile-menu />
    </nav>
</template>

<script>
import { mapGetters } from "vuex";

import hamburgerMobileMenu from "./hamburger-mobile-menu";
import logo from "./logo";
import navbarLinks from "./navbar-links";

export default {
    components: {
        "hamburger-mobile-menu": hamburgerMobileMenu,
        logo,
        "navbar-links": navbarLinks
    },

    computed: {
        ...mapGetters('app', ['getIsMobileMenuOpen'])
    }
}
</script>

<style lang="scss" scoped>
    .navbar {
        display: flex;
        height: auto;
        max-height: 442.5px;
        transition: all ease-in-out $TIME_fast;
        z-index: 999;
        position: relative;
        &--mobile {
            position: sticky;
            top: 0;
        }

        &--mobile-open {
            flex-direction: column;
        }
    }
</style>