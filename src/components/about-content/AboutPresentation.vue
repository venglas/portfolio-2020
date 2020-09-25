<template>
    <Article full-width class="presentation-article">
        <div class="presentation">
            <Octagon-wrapper style="width: 400px; height: 400px; padding: 4rem">
                <Presentation-animation />
            </Octagon-wrapper>

            <About-author />
        </div>

        <div class="technologies">
            <Single-technology :percentage="70"/>
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
    .technologies {
        width: inherit;
    }
}
</style>