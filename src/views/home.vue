<template>
  <div class="home">
    <animated-background-stars>
      <h1 class="text text--1 slide-from-left">{{$t('home.hello[0]')}}</h1>
      <h2 class="text text--2 slide-from-right">{{$t('home.hello[1]')}}</h2>
      <h3 class="text text--3 slide-from-left">{{$t('home.hello[2]')}}</h3>
      <base-button class="home__button slide-from-bottom" @click.native="$router.push({name: 'portfolio'})">{{$t('home.button')}}</base-button>
    </animated-background-stars>
  </div>
</template>

<script>
import animatedBackgroundStars from '../components/animated-background/animated-background-stars'
import baseButton from '../components/buttons/base-button'

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
  .text {
    animation-delay: 400ms;
    @include space-v-margin-small;
    font-weight: 200;
    letter-spacing: 7px;
    &--1 {
      font-size: 7rem;
    }
    &--2 {
      font-size: 6rem;
    }
    &--3 {
      font-size: 5rem;
    }
    @media (max-width: 1100px) {
      letter-spacing: 5px;
    }
    @media (max-width: 1000px) {
      letter-spacing: 1px;
    }
    @media (max-width: 850px) {
      letter-spacing: 5px;
      &--1 {
        font-size: 5rem;
      }
      &--2 {
        font-size: 4rem;
      }
      &--3 {
        font-size: 3rem;
      }
    }
    @media (max-width: 720px) {
      &--1 {
        font-size: 4rem;
      }
      &--2 {
        font-size: 3rem;
      }
      &--3 {
        font-size: 2rem;
      }
    }
    @media (max-width: 570px) {
      letter-spacing: 1px;
      &--1 {
        font-size: 3.2rem;
      }
      &--2 {
        font-size: 2.8rem;
      }
      &--3 {
        font-size: 2.4rem;
      }
    }
    @media (max-width: 430px) {
      letter-spacing: 2px;
      &--1 {
        font-size: 3rem;
      }
      &--2 {
        font-size: 2.2rem;
      }
      &--3 {
        font-size: 1.8rem;
      }
    }
  }
}
</style>
