<template>
    <div class="presentation">
        <Octagon-wrapper :width="400" :height="400" padding="4rem">
            <Presentation-animation />
        </Octagon-wrapper>

        <About-author />
    </div>
</template>

<script>
import OctagonWrapper from "../about-header/OctagonWrapper";
import PresentationAnimation from "./PresentationAnimation";
import AboutAuthor from "./AboutAuthor";

export default {
    components: {
        'Octagon-wrapper': OctagonWrapper,
        'Presentation-animation': PresentationAnimation,
        'About-author': AboutAuthor
    }    
}
</script>

<style lang="scss"></style>