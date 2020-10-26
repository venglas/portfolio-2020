<template>
  <component :is="getMobileView ? 'navbar-mobile' : 'navbar-web'"/>
</template>

<script>
import { mapGetters } from 'vuex'

import navbarWeb from './navbar-web'
import navbarMobile from './navbar-mobile'

export default {
  components: {
    'navbar-web': navbarWeb,
    'navbar-mobile': navbarMobile
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
    background-color: $COLOR_bg_navbar;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: $SIZE_header-index;
    @include light-box-shadow();
}
</style>
