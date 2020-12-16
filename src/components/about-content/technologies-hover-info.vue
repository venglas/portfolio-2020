<template>
  <p class="technologies-hover-info" v-if="!getMobileView && getInfoAboutDescriptionOnHover">
    <img :src="arrow" alt="jumping arrow" class="arrow">
    <span>{{$t('about.presentation.infoAboutHover')}}</span>
    <img :src="arrow" alt="jumping arrow" class="arrow">
  </p>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { getCookieValue, setCookie } from '../helpers/cookies'

export default {
  data () {
    return {
      arrow: require('../../assets/img/icons/arrow.png')
    }
  },
  created () {
    if (getCookieValue('showTechnologiesInfo') === false) this.turnOffInfoAboutDescriptionOnHover()
  },
  watch: {
    getAboutShowedDescriptions () {
      if (this.getAboutShowedDescriptions > 2) {
        this.turnOffInfoAboutDescriptionOnHover()
        setCookie('showTechnologiesInfo', false, 10)
      }
    }
  },
  methods: {
    ...mapMutations('app', ['turnOffInfoAboutDescriptionOnHover'])
  },
  computed: {
    ...mapGetters('app', ['getAboutShowedDescriptions', 'getMobileView', 'getInfoAboutDescriptionOnHover'])
  }
}
</script>

<style lang="scss" scoped>
.technologies-hover-info {
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: -2.5rem;
  font-weight: 600;
  @media(max-width: 820px) and (orientation: landscape) {
    visibility: hidden;
  }

  .arrow {
    @include space-h-margin-small;
    width: 15px;
    transform: rotate(90deg) translateX(3px);
    animation-name: jumping-arrow;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  @keyframes jumping-arrow {
    0% {transform: translateY(3px) rotate(90deg);}
    50% {transform: translateY(-3px) rotate(90deg);}
    100% {transform: translateY(3px) rotate(90deg);}
  }
}
</style>
