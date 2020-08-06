<template>
    <nav class="navbar">
        <Logo />
        <ul class="navbar__menu">
            <router-link v-for="item in $router.options.routes" :key="item.name" :to="item.path" tag="li" class="item">{{item.name}}</router-link>
        </ul>
    </nav>
</template>

<script>
import Logo from "./Logo";

export default {
    data(){
        return {}
    },
    components: {
        Logo
    },
    created(){
        console.log(this.$router);
        
        
    }
}
</script>

<style lang="scss" scoped>
    .router-active-link {
        &::after {
            content: '';
            display: block;
            margin: -2.5px 0 0 -1rem;
            height: 2.5px;
            background: #000;
            transition: width .3s;
            animation-name: activeLink;
            animation-duration: $TIME_fast;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
        }
        @keyframes activeLink {
            from {
                width: 0%;
            }
            to {
                width: calc(100% + 2rem);
            }
        }
    }
    .navbar {
        width: 100%;
        height: $SIZE_navbar;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include light-box-shadow();

        &__menu {
            display: flex;
            width: fit-content;
            height: 100%;
            list-style-type: none;
            margin: 0 1rem;
            .item {
                padding: 0 2rem;
                line-height: $SIZE_navbar;
                height: 100%;
                cursor: pointer;
                transition: text-shadow ease-in-out $TIME_fast;
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
</style>