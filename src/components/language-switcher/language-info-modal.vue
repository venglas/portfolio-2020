<template>
  <div class="language-info-modal" v-if="showInfo">
    <p class="language-info-modal__info-text">
        {{$t('home.languageModalInfo')}}
    </p>
    <img src="../../assets/img/icons/arrow.png" alt="jumping arrow" class="img img--arrow">
    <base-button
        class="language-info-modal__button"
        @click.native="closeModal()"
    >
        OK
    </base-button>
  </div>
</template>

<script>
import { getCookieValue, setCookie } from '../helpers/cookies'
import baseButton from '../buttons/base-button'

export default {
  components: {
    'base-button': baseButton
  },
  data () {
    return {
      showInfo: true
    }
  },
  created () {
    this.showInfo = getCookieValue('showLanguageInfo')
  },
  methods: {
    closeModal () {
      setCookie('showLanguageInfo', false, 10)
      this.showInfo = false
    }
  }
}
</script>

<style lang="scss">
.language-info-modal {
    position: absolute;
    z-index: $SIZE_z-max;
    right: 0;
    max-width: $SIZE_language-selector-width;
    font-size: 1.1rem;
    padding: 10px;
    bottom: 25px;
    background: $COLOR_language-info-modal;
    clip-path: polygon(0% 85%, 38% 90%, 50% 100%, 66% 90%, 100% 85%, 100% 0%, 0% 0%);
    color: $COLOR_white;

    animation: jump;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    transition: opacity ease-in-out $TIME_fast-max;
    &:hover {
        .language-info-modal__button {
            opacity: 1;
        }
    }
    &__info-text {
        text-align: center;
    }
    &__button {
        transition: all ease-in-out $TIME_fast;
        opacity: 0;
        padding: .7rem 2.2rem;
        @include center(-50%, -65%);
    }
    .img {
        height: 15px;
        width: auto;
        display: block;
        &--arrow {
            transform: rotate(90deg);
            margin: .5rem auto 0 auto;
        }
    }
}

@keyframes jump {
    0% {transform: translateY(0);}
    50% {transform: translateY(-5px);}
    100% {transform: translateY(0);}
}
</style>
