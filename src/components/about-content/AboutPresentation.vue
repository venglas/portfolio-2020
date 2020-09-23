<template>
    <div>
        <Octagon-wrapper>
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