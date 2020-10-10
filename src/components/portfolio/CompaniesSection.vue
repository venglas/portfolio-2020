<template>
    <section class="companies-section">
        <h2>Pracowałem równiez dla</h2>
        <div class="companies">
            <Single-company image="lim-logo.png"/>
        </div>
    </section>
</template>

<script>
import SingleCompany from "./SingleCompany";

export default {
    components: {
        'Single-company': SingleCompany
    },
    props: {

    },
    computed: {

    },
    methods: {

    }
}
</script>

<style lang="scss">
.companies-section {
    color: #000;
}
</style>