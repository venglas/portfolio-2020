<template>
  <component :is="getMobileView ? 'Navbar-mobile' : 'Navbar-web'"/>
</template>

<script>
import { mapGetters } from "vuex";

import NavbarWeb from "./NavbarWeb";
import NavbarMobile from "./NavbarMobile";

export default {
    components: {
        "Navbar-web": NavbarWeb,
        "Navbar-mobile": NavbarMobile
    },
    
    computed: {
        ...mapGetters('app', ['getMobileView'])
    }
}
</script>

<style lang="scss">
.navbar {
    width: 100%;
    height: $SIZE_navbar;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: $SIZE_header-index;
    @include light-box-shadow();

    &__menu {
        display: flex;
        width: fit-content;
        height: 100%;
        list-style-type: none;
        margin: 0 1rem;
        @media (max-width: $MAX_mobile) {
            font-size: 1.7rem;
        }
        @media (max-width: $MEDIUM_mobile) {
            flex-direction: column;
            align-items: center;
        }

        .item {
            padding: 0 2rem;
            line-height: $SIZE_navbar;
            height: 100%;
            cursor: pointer;
            transition: text-shadow ease-in-out $TIME_fast-max;
            transition: transform ease-in-out 100ms;
            outline: none;
            text-transform: capitalize;
            @include light-text-shadow();
            &:hover {
                @include light-text-shadow(2.1);
            }
            &:active {
                transform: scale(.85);
            }
        }
    }
}
.router-active-link {
    &::after {
        content: '';
        display: block;
        margin: -2.5px 0 0 -1rem;
        height: 2.5px;
        background: #000;
        transition: width .3s;
        animation-name: active-link;
        animation-duration: $TIME_fast-max;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
    }
    @keyframes active-link {
        from { width: 0%; }
        to { width: calc(100% + 2rem); }
    }
}
</style>