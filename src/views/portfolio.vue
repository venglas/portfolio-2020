<template>
    <Article>
        <div class="projects">
            <Single-project 
                image="https://picsum.photos/400/400"
                projectName="Test project"
                projectTechnologies="Nuxt/node"
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

</style>