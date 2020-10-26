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
    @include space-v-padding-big;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;

    .companies {
        display: flex;
    }
}
</style>