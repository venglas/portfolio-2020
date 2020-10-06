<template>
    <div 
        class="slide-img"
        :style="{ 'background-image': `url(${image})`, 'transform': `translateX(${getSliderPosition}00%)` }"
        alt="project image"
    ></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        image: { type: String }
    },
    computed: {
        ...mapGetters('app', ['getSliderPosition'])
    }
}
</script>

<style lang="scss">
.slide-img {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    transition: transform ease-in-out 400ms;
}   
</style>