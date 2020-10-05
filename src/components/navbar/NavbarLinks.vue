<template>
    <ul class="navbar__menu">
        <router-link
            v-for="item in $router.options.routes[1].children" 
            :key="item.name" 
            :to="{name: item.name, params: {lang: locale}}"
            tag="li" 
            class="item"
        >
            {{item.name}}
        </router-link>
    </ul>
</template>

<script>
import i18n from "../../i18n";

export default {
    computed: {
        locale: () => `${i18n.locale}`
    }
}
</script>