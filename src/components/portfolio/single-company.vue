<template>
    <div class="company">
        <header class="company__header">
            {{companyName}}
        </header>
        <octagon-wrapper class="company__octagon">
            <a :href="companyLink" target="_blank" >
                <img :src="img" class="company__img" alt="">
            </a>
        </octagon-wrapper>
    </div>
</template>

<script>
import octagonWrapper from "../about-header/octagon-wrapper";

export default {
    components: {
        "octagon-wrapper": octagonWrapper
    },
    props: {
        image: { type: String },
        companyName: { type: String },
        companyLink: { type: String }
    },
    computed: {
        img() {
            return require(`../../assets/img/companies/${this.image}`);
        }
    }
}
</script>

<style lang="scss">
.company {
    width: 125px;
    height: 125px;
    @include space-h-margin-small;
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