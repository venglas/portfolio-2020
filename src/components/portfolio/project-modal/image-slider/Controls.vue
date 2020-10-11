<template>
    <div class="slider-controls">
        <button class="slider-controls__prev" @click="prevSlide()">
            <img src="../../../../assets/img/icons/double-arrow.png" alt="prev">
        </button>
        <button class="slider-controls__next" @click="nextSlide()">
            <img src="../../../../assets/img/icons/double-arrow.png" alt="next">
        </button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { debounce } from "lodash";

export default {
    props: {
        slidesCount: { type: Number }
    },
    computed: {
        ...mapGetters('app', ['getSliderPosition']),
        negativeSlidesCount() {
            return -Math.abs(this.slidesCount - 1);
        }
    },
    methods: {
        ...mapMutations('app', ['setSliderPosition']),
        nextSlide: debounce( function() {
            if (this.getSliderPosition > this.negativeSlidesCount) this.setSliderPosition(this.getSliderPosition - 1);
            else this.setSliderPosition(0);
        }, 200),
        prevSlide: debounce( function() {
            if (this.getSliderPosition < 0) this.setSliderPosition(this.getSliderPosition + 1);
            else this.setSliderPosition(this.negativeSlidesCount);
        }, 200)
    }
}
</script>

<style lang="scss">
.slider-controls {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    &__prev {
        transform: rotate(180deg);
    }
    &__prev, &__next {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $COLOR_portfolio_modal_controls_bg;
        border: none;
        outline: none;
        @include space-padding-big;
        cursor: pointer;
        transition: all ease-in-out $TIME_fast-max;
        
        &:hover {
            background-color:$COLOR_portfolio_modal_controls_bg_hover;
            img {
                filter: invert(1);
            }
        }
        &:active {
            background-color: rgba(0, 0, 0, 1);
        }
        img {
            width: 24px;
        }
    }
}
</style>