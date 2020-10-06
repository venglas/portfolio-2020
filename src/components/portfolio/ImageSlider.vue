<template>
    <div class="image-slider">
        <div 
            v-for="(image, i) in images"
            :key="`image${i}`"
            :style="{ 'background-image': `url(${image})` }"
            alt="project image"
            class="image-slider__img"
            :ref="`slide-${i}`"
        ></div>
    </div>
</template>

<script>
export default {
    props: {
        images: { type: Array }
    },
    created() {},
    methods: {
        slider() {
            const sliderLength = this.images.length;
            

        }
    }
}
</script>

<style lang="scss">
.image-slider {
    width: inherit;
    height: inherit;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    
    &__img {
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
    }
}
</style>