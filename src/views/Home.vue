<template>
  <div class="home">
    <animated-background> 
      <div v-for="(text, i) in $t('home.hello')" v-html="text" :key="i"/>
    </animated-background>
  </div>
</template>

<script>
import animatedBackground from "../components/animated-background/animated-background";

export default {
  name: 'Home',
  components: {
    "animated-background": animatedBackground
  }
}
</script>

<style lang="scss">
.home {
  color: #fff;
  @include med-text-shadow(4);
}
</style>
