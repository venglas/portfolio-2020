<template>
    <header class="header">
        <single-skill v-for="skill in $t('about.header.skills')" :key="skill.title">
            <template v-slot:skillImg>
                <img :src="img(skill.img)" class="img img--skill">
            </template>

            <template v-slot:skillTitle>
                <h2>{{skill.title}}</h2>
            </template>

            <template v-slot:skillDescription>
                {{skill.description}}
            </template>
        </single-skill>
    </header>
</template>

<script>
import singleSkill from './single-skill'

export default {
  components: {
    'single-skill': singleSkill
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
    @media (max-width: $BP_second) {
        flex-wrap: wrap;
    }
}
</style>
