<template>
    <header class="header">
        <Skill>
            <template v-slot:skillImg>
                <img src="../../assets/img/icons/responsive.png" class="img img--skill">
            </template>

            <template v-slot:skillTitle>
                <h2>Responsywność</h2>
            </template>

            <template v-slot:skillDescription>
                Projekty dopasowywuje do wszystkich rozmiarów urządzeń.
            </template>
        </Skill>

        <Skill>
            <template v-slot:skillImg>
                <img src="../../assets/img/icons/dynamic.png" class="img img--skill">
            </template>

            <template v-slot:skillTitle>
                <h2>Dynamiczność</h2>
            </template>

            <template v-slot:skillDescription>
                Strony nie muszą być statyczne! Reaktywne aplikacje webowe to jest to co lubię
            </template>
        </Skill>

        <Skill>
            <template v-slot:skillImg>
                <img src="../../assets/img/icons/clear.png" class="img img--skill">
            </template>

            <template v-slot:skillTitle>
                <h2>Czystość</h2>
            </template>

            <template v-slot:skillDescription>
                Kod który wychodzi spod moich rąk jest czysty, pozbawiony bałaganu.
            </template>
        </Skill>

        <Skill>
            <template v-slot:skillImg>
                <img src="../../assets/img/icons/precise.png" class="img img--skill">
            </template>

            <template v-slot:skillTitle>
                <h2>Precyzyjność</h2>
            </template>

            <template v-slot:skillDescription>
                Kazde stosowane przeze mnie rozwiązanie staram się wdrazać z pieczołowitością i precyzją.
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