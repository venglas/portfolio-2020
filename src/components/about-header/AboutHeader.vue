<template>
    <header class="header">
        <Skill v-for="(skill, i) in $t('about.header.skills')" :key="i">
            <template v-slot:skillImg>
                <img :src="require(`../../assets/img/icons/${skill.img}.png`)" class="img img--skill">
            </template>

            <template v-slot:skillTitle>
                <h2>{{skill.title}}</h2>
            </template>

            <template v-slot:skillDescription>
                {{skill.description}}
            </template>
        </Skill>
    </header>
</template>

<script>
import Skill from "./SingleSkill";

export default {
    components: {
        Skill
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-around;
}
</style>