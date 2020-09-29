<template>
    <Article full-width class="presentation-article">
        <div class="presentation slide-from-left">
            <Octagon-wrapper class="presentation__octagon">
                <Presentation-animation />
            </Octagon-wrapper>

            <About-author/>
        </div>

        <div class="technologies slide-from-right">
            <Single-technology 
                v-for="technology in $t('about.presentation.technologies')"
                :key="technology.name"
                :name="technology.name"
                :percentage="technology.percentage"
                :description="technology.description"
            />
        </div>

    </Article>
</template>

<script>
import Article from "../article/Article";
import OctagonWrapper from "../about-header/OctagonWrapper";
import PresentationAnimation from "./PresentationAnimation";
import AboutAuthor from "./AboutAuthor";
import SingleTechnology from "./SingleTechnology";

export default {
    components: {
        Article,
        'Octagon-wrapper': OctagonWrapper,
        'Presentation-animation': PresentationAnimation,
        'About-author': AboutAuthor,
        'Single-technology': SingleTechnology
    }    
}
</script>

<style lang="scss">
.presentation-article { 
    display: flex;
    @include space-v-margin-huge;
    @media( max-height: 800px ) {
        @include space-v-margin-med;
    }
    .presentation {
        &__octagon {
            width: 400px;
            height: 400px;
            padding: 4rem;
        }
    }
    .technologies {
        width: inherit;
        display: flex;
        flex-direction: column;
        @include space-h-margin-huge;
    }
}
</style>