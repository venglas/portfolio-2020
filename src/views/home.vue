<template>
  <div class="home">
    <animated-background-stars>
      <div class="text slide-from-left" v-html="$t('home.hello[0]')"></div>
      <div class="text slide-from-right" v-html="$t('home.hello[1]')"></div>
      <div class="text slide-from-left" v-html="$t('home.hello[2]')"></div>
      <base-button class="home__button slide-from-bottom" @click.native="$router.push('portfolio')">Zobacz projekty</base-button>
    </animated-background-stars>
  </div>
</template>

<script>
import animatedBackgroundStars from "../components/animated-background/animated-background-stars";
import baseButton from "../components/buttons/base-button";

export default {
  name: 'Home',
  components: {
    'animated-background-stars': animatedBackgroundStars,
    'base-button': baseButton
  }
}
</script>

<style lang="scss">
.home {
  color: #fff;
  @include med-text-shadow(4);
  .text {
    animation-delay: 400ms;
  }
  &__button {
    background-color: $COLOR_base_button_border;
    color: #fff;
    transition: all ease-in-out $TIME_fast-max;
    @include space-v-margin-big;

    &:hover {
      color: $COLOR_base_button_border;
      border: 2px solid $COLOR_base_button_border;
      background-color: #fff;
    }
  }
}
</style>
