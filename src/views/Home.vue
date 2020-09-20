<template>
  <div class="home">
    <Animated-background> 
      <div v-for="(text, i) in $t('home.hello')" v-html="text" :key="i"/>
    </Animated-background>
  </div>
</template>

<script>
import AnimatedBackground from "../components/animated-background/AnimatedBackground";

export default {
  name: 'Home',
  components: {
    "Animated-background": AnimatedBackground
  }
}
</script>
