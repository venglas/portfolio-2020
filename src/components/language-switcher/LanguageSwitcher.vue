<template>
  <select 
    name="language" 
    id="language-switcher" 
    class="language-switcher" 
    v-model="$i18n.locale"
    @change="changeRouterParam()"
  >
    <option value="pl">PL🇵🇱</option>
    <option value="en">EN🇺🇸</option>
  </select>
</template>

<script>
export default {
    methods: {
        changeRouterParam() {
            this.$router.push({params: {lang: this.$i18n.locale}})
        }
    }
}
</script>

<style lang="scss">
.language-switcher {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: $size_z-max;
}
</style>