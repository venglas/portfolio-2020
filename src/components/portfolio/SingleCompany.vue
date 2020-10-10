<template>
    <div class="company">
        <header class="company__header">
            Life In Mobile
        </header>
        <Octagon-wrapper class="company__octagon">
            <a href="https://lifeinmobile.com/" target="_blank" title="life in mobile">
                <img :src="img" class="company__img" alt="">
            </a>
        </Octagon-wrapper>
    </div>
</template>

<script>
import OctagonWrapper from "../about-header/OctagonWrapper";

export default {
    components: {
        "Octagon-wrapper": OctagonWrapper
    },
    props: {
        image: { type: String }
    },
    computed: {
        img() {
            return require(`../../assets/img/companies/${this.image}`);
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
.company {
    width: 125px;
    height: 125px;
    &__header {
        text-align: center;
        font-weight: 500;
        color: $COLOR_portfolio_company_name;
        @include space-padding-small;
    }
    &__octagon {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    &__img {
        width: 100px;
        height: 100px;
    }
}
</style>