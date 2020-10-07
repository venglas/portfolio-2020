<template>
    <div class="project-modal" v-if="getModalShowState">
        <button class="project-modal__button-close" @click="closeModal()">
            <span>X</span>
        </button>
        <Image-slider 
            :images="getModalFullInfo.images"
        />
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
            </p>

            <Base-button >Zobacz stronę</Base-button>
        </section>
    </div>
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
        ...mapMutations('app', ['hideProjectModal', 'hideOverlay']),
        closeModal() {
            this.hideProjectModal();
            this.hideOverlay();
        }
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
    background-color: #fff;
    z-index: $SIZE_z-max;
    &__button-close {
        position: absolute;
        right: 0;
        top: 0;
        z-index: $SIZE_z-max;
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
        }
    }
}    
</style>