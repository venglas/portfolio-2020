<template>
    <base-article
        full-width
        class="presentation-article"
        :style="{ 'margin-top': presentationSpaceTop }"
    >
        <div
            :class="['presentation', {'slide-from-left': showElement}]"
            :style="{ opacity: showElement ? 1 : 0 }"
            ref="aboutAuthor"
        >
            <octagon-wrapper class="presentation__octagon">
                <presentation-animation />
            </octagon-wrapper>

            <about-author />
        </div>

        <div class="technologies slide-from-right" ref="technologies">
            <technologies-hover-info v-if="!getMobileView"/>
            <single-technology
                v-for="technology in $t('about.presentation.technologies')"
                :key="technology.name"
                :name="technology.name"
                :percentage="technology.percentage"
                :description="technology.description"
            />
        </div>

    </base-article>
</template>

<script>
import baseArticle from '../article/base-article'
import octagonWrapper from '../about-header/octagon-wrapper'
import presentationAnimation from './presentation-animation'
import aboutAuthor from './about-author'
import singleTechnology from './single-technology'
import technologiesHoverInfo from './technologies-hover-info'
import { showElementOnScroll } from '../utils'
import { mapGetters } from 'vuex'

export default {
  components: {
    'base-article': baseArticle,
    'octagon-wrapper': octagonWrapper,
    'presentation-animation': presentationAnimation,
    'about-author': aboutAuthor,
    'single-technology': singleTechnology,
    'technologies-hover-info': technologiesHoverInfo
  },
  data () {
    return {
      scrollLimit: 0,
      elementHeight: 0,
      showElement: false
    }
  },
  computed: {
    ...mapGetters('app', ['getInfoAboutDescriptionOnHover', 'getMobileView', 'getScrollPosition']),
    presentationSpaceTop () {
      if (this.getInfoAboutDescriptionOnHover) return '30px'
      return ''
    }
  },
  watch: {
    getScrollPosition () {
      showElementOnScroll(this, +50)
    }
  },
  methods: {
  },
  mounted () {
    this.scrollLimit = this.$refs.aboutAuthor.offsetTop
    this.elementHeight = this.$refs.aboutAuthor.offsetHeight
    if (!this.getMobileView) {
      this.showElement = true
    }
  }
}
</script>

<style lang="scss">
.presentation-article {
    display: flex;
    @include space-v-margin-huge;
    @media (max-width: $BP_second) {
        flex-wrap: wrap;
        justify-content: center;
        @include space-v-margin-med;
    }
    @media( max-height: 800px ) {
        @include space-v-margin-med;
    }
    .presentation {
        width: min-content;
        margin-right: 5rem;
        @media (max-width: $BP_second) {
            @include space-v-margin-big;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        @media(max-width: 820px) and (orientation: landscape) {
            width: 100%;
        }
        &__octagon {
            width: 400px;
            height: 400px;
            padding: 4rem;
            @media (max-width: $SMALL_mobile2) {
                width: 250px;
                height: 250px;
            }
            @media(max-width: 820px) and (orientation: landscape) {
                width: 230px;
                height: auto;
            }
        }
    }
    .technologies {
        width: inherit;
        display: flex;
        flex-direction: column;
        @media (max-height: 890px) and (min-width: 1024px) {
            overflow-y: scroll;
            max-height: 450px;
            padding-bottom: 50px;
        }
        @media (max-width: 1024px) and (min-width: 720px) {
            padding-bottom: 4.5rem;
        }
        @include space-h-margin-huge;
        @media( max-height: $BP_second ) {
            margin: 0;
        }
    }
}
</style>
