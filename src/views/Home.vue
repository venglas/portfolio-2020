<template>
  <div class="home">
    <Animated-background> 
      <h1>Elo</h1>
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
