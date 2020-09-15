<template>
    <ul class="navbar__menu">
        <router-link 
            v-for="item in $router.options.routes" 
            :key="item.name" 
            :to="item.path" 
            tag="li" 
            class="item"
        >
            {{item.name}}
        </router-link>
    </ul>
</template>