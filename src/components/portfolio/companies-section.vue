<template>
    <section class="companies-section" :style="{ opacity: showElement ? 1 : 0 }" ref="companies">
        <h2 :class="{'slide-from-right': showElement}">{{$t('portfolio.companiesHeader')}}</h2>
        <div class="companies">
            <single-company
                image="lim-logo.png"
                companyName="Life In Mobile"
                companyLink="https://lifeinmobile.com/"
                :class="{'slide-from-top': showElement}"
            />
            <single-company
                image="discover-krakow-logo.png"
                companyName="Discover Kraków"
                companyLink="https://discovercracow.com/"
                :class="{'slide-from-top': showElement}"
            />
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import singleCompany from './single-company'
import { showElementOnScroll } from '../utils'

export default {
  components: {
    'single-company': singleCompany
  },
  data () {
    return {
      scrollLimit: 0,
      elementHeight: 0,
      showElement: false
    }
  },
  computed: {
    ...mapGetters('app', ['getScrollPosition', 'getMobileView'])
  },
  watch: {
    getScrollPosition () {
      showElementOnScroll(this, +270)
    }
  },
  mounted () {
    this.scrollLimit = this.$refs.companies.offsetTop
    this.elementHeight = this.$refs.companies.offsetHeight
    if (!this.getMobileView) {
      this.showElement = true
    }
  }
}
</script>

<style lang="scss">
.companies-section {
    @include space-v-padding-big;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;

    .companies {
        display: flex;
    }
}
</style>
