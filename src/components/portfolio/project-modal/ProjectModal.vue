<template>
    <div class="project-modal" v-if="getModalShowStae">
        <button class="project-modal__button-close" @click="hideProjectModal()">
            <span>X</span>
        </button>
        <Image-slider 
            :images="['https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png', 'https://homepages.cae.wisc.edu/~ece533/images/boat.png']"
        />
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ImageSlider from "./image-slider/ImageSlider";

export default {
    components: {
        'Image-slider': ImageSlider
    },
    computed: {
        ...mapGetters('app', ['getModalShowStae'])
    },
    methods: {
        ...mapMutations('app', ['hideProjectModal'])
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
    &__button-close {
        position: absolute;
        right: 0;
        top: 0;
        z-index: $size_z-max;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, .15);
        border: none;
        outline: none;
        @include space-padding-med;
        cursor: pointer;
        transition: all ease-in-out $TIME_fast-max;
        span {
            transition: all ease-in-out $TIME_fast-max;
        }
        &:hover {
            background-color: rgba(0, 0, 0, .5);
            span {
                filter: invert(1);
            }
        }
        &:active {
            background-color: rgba(0, 0, 0, 1);
        }
    }
}    
</style>