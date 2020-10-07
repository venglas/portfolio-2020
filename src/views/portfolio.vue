<template>
    <Article class="article--projects">
        <div class="projects">
            <Single-project 
                v-for="{name, image, technologies, fullInfo} in $t('portfolio.projects')"
                :key="name"
                :image="image"
                :projectName="name"
                :projectTechnologies="technologies"
                :fullInfo="{ name, technologies, ...fullInfo }"
                :class="getRandomStartAnimation()"
            />
        </div>
        <Project-modal />
    </Article>
</template>

<script>
import Article from "../components/article/Article";
import SingleProject from "../components/portfolio/SingleProject";
import ProjectModal from "../components/portfolio/project-modal/ProjectModal";

export default {
    components: {
        Article,
        'Single-project': SingleProject,
        'Project-modal': ProjectModal
    },
    data() {
        return {
            animationNames: [
                "slide-from-left", "slide-from-top", "slide-from-right", "slide-from-bottom", "slide-from-leftTop",
                "slide-from-rightTop", "slide-from-leftBottom", "slide-from-rightBottom" 
            ] // transitions.scss
        }
    },
    methods: {
        randomNumberFromRange(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        getRandomStartAnimation() {
            const animationName = this.animationNames[this.randomNumberFromRange(0, this.animationNames.length-1)];
            return animationName;
        }
    }
}
</script>

<style lang="scss" scoped>
.article--projects {
    position: relative;
}
.projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>