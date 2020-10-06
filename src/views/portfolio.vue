<template>
    <Article>
        <div class="projects">
            <Single-project 
                v-for="{name, image, technologies, fullInfo} in $t('portfolio.projects')"
                :key="name"
                :image="image"
                :projectName="name"
                :projectTechnologies="technologies"
                :fullInfo="fullInfo"
            />
        </div>
    </Article>
</template>

<script>
import Article from "../components/article/Article";
import SingleProject from "../components/portfolio/SingleProject";

export default {
    components: {
        Article,
        'Single-project': SingleProject
    }
}
</script>

<style lang="scss" scoped>
.projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>