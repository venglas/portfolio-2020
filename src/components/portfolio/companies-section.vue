<template>
    <section class="companies-section">
        <h2 class="slide-from-right">{{$t('portfolio.companiesHeader')}}</h2>
        <div class="companies">
            <single-company
                image="lim-logo.png"
                companyName="Life In Mobile"
                companyLink="https://lifeinmobile.com/"
                class="slide-from-top"
            />
            <single-company
                image="discover-krakow-logo.png"
                companyName="Discover Kraków"
                companyLink="https://discovercracow.com/"
                class="slide-from-top"
            />
        </div>
    </section>
</template>

<script>
import singleCompany from "./single-company";

export default {
    components: {
        'single-company': singleCompany
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