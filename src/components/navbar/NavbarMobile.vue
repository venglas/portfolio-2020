<template>
    <nav class="navbar" :class="{ 'navbar--mobile': getIsMobileMenuOpen }">
        <logo />
        <navbar-links v-if="getIsMobileMenuOpen"/>
        <hamburger-menu />
    </nav>
</template>

<script>
import { mapGetters } from "vuex";

import HamburgerMenu from "./HamburgerMobile";
import logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

export default {
    components: {
        "hamburger-menu": HamburgerMenu,
        logo,
        "navbar-links": NavbarLinks
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

        &--mobile {
            flex-direction: column;
        }
    }
</style>