<template>
  <select name="language" id="language-switcher" class="language-switcher" v-model="$i18n.locale">
    <option value="pl">PL🇵🇱</option>
    <option value="en">EN🇺🇸</option>
  </select>
</template>

<style lang="scss">
.language-switcher {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: $size_z-max;
}
</style>