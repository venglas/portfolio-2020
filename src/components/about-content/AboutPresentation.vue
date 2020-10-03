<template>
    <Article full-width class="presentation-article" :style="{ 'margin-top': presentationSpaceTop }">
        <div class="presentation slide-from-left">
            <Octagon-wrapper class="presentation__octagon">
                <Presentation-animation />
            </Octagon-wrapper>

            <About-author/>
        </div>

        <div class="technologies slide-from-right" >
            <Technologies-hover-info />
            <Single-technology 
                v-for="technology in $t('about.presentation.technologies')"
                :key="technology.name"
                :name="technology.name"
                :percentage="technology.percentage"
                :description="technology.description"
            />
            <!-- :class="{'show-above': showAboveIfisLastTwo(technology)}" -->
        </div>

    </Article>
</template>

<script>
import Article from "../article/Article";
import OctagonWrapper from "../about-header/OctagonWrapper";
import PresentationAnimation from "./PresentationAnimation";
import AboutAuthor from "./AboutAuthor";
import SingleTechnology from "./SingleTechnology";
import TechnologiesHoverInfo from "./TechnologiesHoverInfo";
import { mapGetters } from 'vuex';

export default {
    components: {
        Article,
        'Octagon-wrapper': OctagonWrapper,
        'Presentation-animation': PresentationAnimation,
        'About-author': AboutAuthor,
        'Single-technology': SingleTechnology,
        "Technologies-hover-info": TechnologiesHoverInfo
    },
    computed: {
        ...mapGetters('app', ['getInfoAboutDescriptionOnHover']),
        presentationSpaceTop() {
            if (this.getInfoAboutDescriptionOnHover) {
                return '30px'
            }
            return '20px'
        }
        // technologies(){ return this.$t('about.presentation.technologies') },    
        // lastTwoTechnologies() { return this.technologies.slice(this.technologies.length - 2, this.technologies.length) }
    },
    methods: {
        // showAboveIfisLastTwo(technology) {
        //     if (this.lastTwoTechnologies.includes(technology)) return true;
        // }
    }
}
</script>

<style lang="scss">
//to fix - last 2 elements shoul have description above the bar
// .show-above {
//     @media (max-height: 880px) {
//         margin-bottom: 26px;
//         .single-technology-description {
//             margin-top: -110px;
//         }
//     } 
// }
.presentation-article {
    display: flex;
    @include space-v-margin-huge;
    @media (max-width: $BP_second) {
        flex-wrap: wrap;
        justify-content: center;
        @include space-v-margin-med;
    }
    @media( max-height: 800px ) {
        @include space-v-margin-med;
    }
    .presentation {
        @media (max-width: $BP_second) {
            @include space-v-margin-big;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__octagon {
            width: 400px;
            height: 400px;
            padding: 4rem;
            @media (max-width: $SMALL_mobile2) {
                width: 250px;
                height: 250px;
            }
        }
    }
    .technologies {
        width: inherit;
        display: flex;
        flex-direction: column;
        @include space-h-margin-huge;
        @media( max-height: $BP_second ) {
            margin: 0;
        }
    }
}
</style>