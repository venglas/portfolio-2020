<template>
    <div>
        <Octagon-wrapper :width="400" :height="400" padding="4rem">
            <Presentation-animation />
        </Octagon-wrapper>
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