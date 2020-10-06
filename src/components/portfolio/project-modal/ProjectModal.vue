<template>
    <div class="project-modal">
        <Image-slider 
            :images="['https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png', 'https://homepages.cae.wisc.edu/~ece533/images/boat.png']"
        />
    </div>
</template>

<script>
import ImageSlider from "./image-slider/ImageSlider";

export default {
    components: {
        'Image-slider': ImageSlider
    }    
}
</script>


<style lang="scss">
.project-modal {
    position: absolute;
    width: 50%;
    height: 80%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: gray;
}    
</style>