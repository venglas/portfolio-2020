<template>
    <div class="image-slider">
        <Slide 
            v-for="(image, i) in images"
            :key="`${image}${i}`" 
            :image="image"
            :ref="`slide_${i}`"
        />
        <Controls :slidesCount="slidesCount"/>
    </div>
</template>

<script>
import Slide from "./Slide";
import Controls from "./Controls";

export default {
    components: {
        Slide,
        Controls
    },
    props: {
        images: { type: Array }
    },
    computed: {
        slidesCount() {
            return this.images.length
        }
    }
}
</script>

<style lang="scss">
.image-slider {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 500px;
    border-bottom: solid 2px $COLOR_slider_bottom_border;
    @media (max-height: 825px) {
        height: 400px;
    }
    @media (max-height: 750px) {
        height: 300px;
    }
    @media (max-width: 600px) {
        height: 40vh;
    }
}
</style>