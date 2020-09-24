<template>
    <Article full-width>
        <div class="presentation">
            <Octagon-wrapper style="width: 400px; height: 400px; padding: 4rem">
                <Presentation-animation />
            </Octagon-wrapper>

            <About-author />
        </div>

        <div class="technologies">

        </div>
    </Article>
</template>

<script>
import Article from "../article/Article";
import OctagonWrapper from "../about-header/OctagonWrapper";
import PresentationAnimation from "./PresentationAnimation";
import AboutAuthor from "./AboutAuthor";

export default {
    components: {
        Article,
        'Octagon-wrapper': OctagonWrapper,
        'Presentation-animation': PresentationAnimation,
        'About-author': AboutAuthor
    }    
}
</script>

<style lang="scss"></style>