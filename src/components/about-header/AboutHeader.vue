<template>
    <header class="header">
        <Single-skill v-for="(skill, i) in skills" :key="i">
            <template v-slot:skillImg>
                <img :src="img(skill.img)" class="img img--skill">
            </template>

            <template v-slot:skillTitle>
                <h2>{{skill.title}}</h2>
            </template>

            <template v-slot:skillDescription>
                {{skill.description}}
            </template>
        </Single-skill>
    </header>
</template>

<script>
import SingleSkill from "./SingleSkill";

export default {
    data() {
        return {
            skills: null
        }
    },
    components: {
        'Single-skill': SingleSkill
    },
    created() {
        this.skills = this.$t('about.header.skills')
    },
    methods: {
        img: (name) => require(`../../assets/img/icons/${name}.png`)
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-around;
}
</style>