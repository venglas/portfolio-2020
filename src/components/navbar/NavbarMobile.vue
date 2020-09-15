<template>
    <nav class="navbar" :class="{ 'navbar--mobile': getIsMobileMenuOpen }">
        <Logo />
        <Navbar-links v-if="getIsMobileMenuOpen"/>
        <Hamburger-menu />
    </nav>
</template>

<script>
import { mapGetters } from "vuex";

import HamburgerMenu from "./HamburgerMobile";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

export default {
    components: {
        "Hamburger-menu": HamburgerMenu,
        Logo,
        "Navbar-links": NavbarLinks
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