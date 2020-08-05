<template>
    <nav class="navbar">
        <ul class="navbar__menu">
            <li class="item" v-for="item in menu" :key="item">{{item}}</li>
        </ul>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            menu: ["About", "Portfolio", "Contact", "Sociales"]       
        }
    }
}
</script>

<style lang="scss" scoped>
    .navbar {
        width: 100%;
        height: $SIZE_navbar;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        @include light-box-shadow();

        &__menu {
            display: flex;
            width: fit-content;
            height: 100%;
            list-style-type: none;
            margin: 0 1rem;
            .item {
                margin: 0 1rem;
                padding: 0 1rem;
                line-height: $SIZE_navbar;
                height: 100%;
                cursor: pointer;
                transition: text-shadow ease-in-out $TIME_fast;
                transition: transform ease-in-out 100ms;
                outline: none;
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