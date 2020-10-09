<template>
    <transition name="bottom-slide">
        <div class="project-modal" v-if="getModalShowState">
            <button class="project-modal__button-close" @click="closeModal()">
                <span>X</span>
            </button>
            <Image-slider :images="getModalFullInfo.images" />
            <section class="project-modal__content">
                <header class="header">
                    <h3>{{getModalFullInfo.name}}</h3>
                    <p class="header__technologies">
                        <span 
                            v-for="technology in getModalFullInfo.technologies"
                            :key="technology"
                        >
                            {{technology}}
                        </span>
                    </p>
                </header>
            
                <p class="description">
                    {{getModalFullInfo.description}}
                    <a :href="getModalFullInfo.descriptionLink.link" target="_blank">{{getModalFullInfo.descriptionLink.name}}</a>
                </p>

                <Base-button class="base-button">{{$t('portfolio.project.modalButtonText')}}</Base-button>
            </section>
        </div>
    </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ImageSlider from "./image-slider/ImageSlider";
import BaseButton from "../../buttons/BaseButton";

export default {
    components: {
        'Image-slider': ImageSlider,
        'Base-button': BaseButton
    },
    computed: {
        ...mapGetters('app', ['getModalShowState', 'getModalFullInfo'])
    },
    methods: {
        ...mapMutations('app', ['hideProjectModal', 'hideOverlay', 'setSliderPosition']),
        closeModal() {
            this.hideProjectModal();
            this.hideOverlay();
            this.setSliderPosition(0);
        }
    }
}
</script>

<style lang="scss">
.project-modal {
    position: absolute;
    width: 40%;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: $SIZE_z-max;
    @media(max-width: 1500px) {
        width: 50%;
    }
    @media (max-width: $BP_first) {
        width: 60%;
    }
    @media (max-width: $BP_second) {
        width: 70%;
    }
    @media (max-width: 800px) {
        width: 80%;
    }
    @media (max-width: 425px) {
        width: 100%;
    }
    &__button-close {
        position: absolute;
        right: 0;
        top: 0;
        z-index: $SIZE_z-max;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        background-color: $COLOR_portfolio_modal_controls_bg;
        border: none;
        outline: none;
        @include space-padding-big;
        cursor: pointer;
        transition: all ease-in-out $TIME_fast-max;
        span {
            transition: all ease-in-out $TIME_fast-max;
        }
        &:hover {
            background-color: $COLOR_portfolio_modal_controls_bg_hover;
            span {
                filter: invert(1);
            }
        }
        &:active {
            background-color: $COLOR_portfolio_modal_controls_bg_hover;
        }
    }
    &__content {
        @include space-padding-big;
        .header {
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba($COLOR_project_technologies, .4);
            h3 {
                font-size: 3rem;
                font-weight: 400;
            }
            &__technologies {
                font-size: 1.5rem;
                color: $COLOR_project_technologies;
            }
        }
        
        .description {
            @include space-v-padding-big;
            color: $COLOR_project_description;
            a {
                display: block;
            }
        }
        .base-button {
            transition: all ease-in-out $TIME_fast;
        }
    }
}
</style>