// TODO: fix routing
<template>
    <ul class="navbar__menu">
        <router-link 
            v-for="item in $router.options.routes[0].children" 
            :key="item.name" 
            :to="item.path" 
            tag="li" 
            class="item"
        >
            {{item.name}}
        </router-link>
    </ul>
</template>

<script>
export default {
    created() {
        console.log(this.$router.options.routes);
    }
}
</script>