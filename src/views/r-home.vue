<template>
  <div class="home">
    <animated-background-gradient> 
      <div v-for="(text, i) in $t('home.hello')" v-html="text" :key="i"/>
    </animated-background-gradient>
  </div>
</template>

<script>
// import animatedBackground from "../components/animated-background/animated-background";
import animatedBackgroundGradient from "../components/animated-background/animated-background-gradient";

export default {
  name: 'Home',
  components: {
    // "animated-background": animatedBackground,
    'animated-background-gradient': animatedBackgroundGradient
  }
}
</script>

<style lang="scss">
.home {
  color: #fff;
  @include med-text-shadow(4);
}
</style>
