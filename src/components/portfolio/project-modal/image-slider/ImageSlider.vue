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
    mounted() {},
    computed: {
        slidesCount() {
            return this.images.length
        }
    },
    methods: {}
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
    height: 70%;
    border-bottom: solid 2px $COLOR_slider_bottom_border;
}
</style>