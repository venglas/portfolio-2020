<template>
    <base-article class="article--projects">
        <div class="projects">
            <single-project
                v-for="{name, image, technologies, fullInfo} in $t('portfolio.projects')"
                :key="name"
                :image="image"
                :projectName="name"
                :projectTechnologies="technologies"
                :fullInfo="{ name, technologies, ...fullInfo }"
                :class="getRandomStartAnimation()"
            />
        </div>
        <companies-section />
    </base-article>
</template>

<script>
import baseArticle from '../components/article/base-article'
import singleProject from '../components/portfolio/single-project'
import companiesSection from '../components/portfolio/companies-section'

export default {
  components: {
    'base-article': baseArticle,
    'single-project': singleProject,
    'companies-section': companiesSection
  },
  data () {
    return {
      animationNames: [
        'slide-from-left', 'slide-from-top', 'slide-from-right', 'slide-from-bottom', 'slide-from-leftTop',
        'slide-from-rightTop', 'slide-from-leftBottom', 'slide-from-rightBottom'
      ] // transitions.scss
    }
  },
  methods: {
    randomNumberFromRange (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    getRandomStartAnimation () {
      const animationName = this.animationNames[this.randomNumberFromRange(0, this.animationNames.length - 1)]
      return animationName
    }
  }
}
</script>

<style lang="scss" scoped>
.article--projects {
  position: relative;
  margin: 0 auto;
  @media ( max-width:  720px) {
    margin: 2rem auto;
  }
  @media (max-width: 1500px) {
    width: 80%;
  }
  @media (max-width: 1400px) {
    width: 90%;
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
