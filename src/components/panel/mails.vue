<template>
  <ul>
    <li></li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('api', ['getLoginInfo'])
  }
}
</script>

<style lang="scss" scoped>
</style>
