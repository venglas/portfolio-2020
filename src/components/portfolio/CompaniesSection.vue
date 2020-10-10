<template>
    <section class="companies-section">
        <h2>Pracowałem równiez dla</h2>
        <div class="companies">
            <Single-company
                image="lim-logo.png"
                companyName="Life In Mobile"
                companyLink="https://lifeinmobile.com/"
            />
            <Single-company
                image="discover-krakow-logo.png"
                companyName="Discover Kraków"
                companyLink="https://discovercracow.com/"
            />
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
    @media (max-height: 900px)  and (min-width: 1250px) {
        position: absolute;
        bottom: 25rem;
    }
    @media (max-width: 1250px ) {
        display: flex;
        flex-direction: column;
        align-items: center;
        @include space-v-margin-med;
    }
    @media (max-height: 840px) and (max-width: 1250px) {
        display: none;
    }
    @media (max-width: 1025px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        @include space-v-padding-big;
    }
    .companies {
        display: flex;
    }
}
</style>