<template>
    <nav class="navbar">
        <logo />
        <navbar-links />
    </nav>
</template>

<script>
import logo from './logo'
import navbarLinks from './navbar-links'

export default {
  components: {
    logo,
    'navbar-links': navbarLinks
  }
}
</script>

<style lang="scss">
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
    }
</style>
