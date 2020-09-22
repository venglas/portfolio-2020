<template>
    <header class="header">
        <Skill>
            <img src="../../assets/img/icons/responsive.png" class="img img--skill">
        </Skill>

        <Skill>
            <img src="../../assets/img/icons/dynamic.png" class="img img--skill">
        </Skill>

        <Skill>
            <img src="../../assets/img/icons/clear.png" class="img img--skill">
        </Skill>

        <Skill>
            <img src="../../assets/img/icons/precise.png" class="img img--skill">
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