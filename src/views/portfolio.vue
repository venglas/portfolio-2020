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