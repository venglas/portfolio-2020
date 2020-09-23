<template>
    <div class="presentation">
        <Octagon-wrapper :width="400" :height="400" padding="4rem">
            <Presentation-animation />
        </Octagon-wrapper>
        <div class="about-author">
            <h2>Kim jestem?</h2>
            <p>
                Jestem Front-End developerem mieszkającym w Krakowie.
                Moją pasją jest JavaScript, sport, muzyka i technologie.
                Z chęcią podejmę z Tobą współpracę, mozemy zbudować ciekawy projekt!
            </p>
        </div>
    </div>
</template>

<script>
import OctagonWrapper from "../about-header/OctagonWrapper";
import PresentationAnimation from "./PresentationAnimation";

export default {
    components: {
        'Octagon-wrapper': OctagonWrapper,
        'Presentation-animation': PresentationAnimation
    }    
}
</script>

<style lang="scss">
    .presentation {
        width: 30%;
    }
</style>