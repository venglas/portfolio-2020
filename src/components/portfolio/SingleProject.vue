<template>
    <div class="project">
        <div class="project__background" :style="backgroundImage"></div>
        <div class="project__inner">
            <header class="header">
                <h3 class="header__title">{{projectName}}</h3>
                <h4 class="header__technologies">
                    <span v-for="technology in projectTechnologies" :key="technology">{{technology}}</span>
                </h4>
            </header>
            <Base-button
                class="button"
                @click.native="openModal()"
            > Pokaz projekt 
            </Base-button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import BaseButton from "../buttons/BaseButton";

export default {
    components: {
        'Base-button': BaseButton
    },
    props: {
        image: { type: String },
        projectName: { type: String },
        projectTechnologies: { type: Array },
        fullInfo: { type: Object }
    },
    computed: {
        backgroundImage() {
            return { 'background-image': `url(${this.image})` };
        }
    },
    methods: {
        ...mapMutations('app', ['showProjectModal', 'setProjectModalInfo', 'showOverlay']),
        openModal() {
            this.showProjectModal();
            this.showOverlay();
            this.setProjectModalInfo(this.fullInfo);
        }
    }
}
</script>

<style lang="scss">
.project {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 375px;
    height: 300px;
    color: #000;
    overflow: hidden;
    z-index: $SIZE_z-min;
    &__background {
        z-index: $SIZE_z-min-max;
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        transition: opacity ease-in-out 700ms;
    }
    &:hover {
        border: 1px solid rgba(0, 0, 0, .1);
        .project__background {
            opacity: 0;
        }
        .project__inner {
            .header {
                transform: translateY(0);
                opacity: 1;
            }
            .button {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }

    &__inner {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        .header {
            transform: translateY(-250%);
            opacity: 0;
            transition: opacity ease-in-out 350ms, transform ease-in-out 400ms;

            &__title {
                font-size: 25px;
                font-weight: 600;
                text-align: center;
                @include light-text-shadow;
            }
            &__technologies {
                @include space-v-padding-small;
                text-align: center;
                font-weight: 300;
                font-size: 1.8rem;
                color: $COLOR_project_technologies;
                span {
                    &:after {
                        content: " / ";
                    }
                    &:last-child{
                        &:after {
                            content: "";
                        }
                    }
                }
            }
        }
        .button {
            transform: translateY(250%);
            opacity: 0;
            
            transition: 
                opacity ease-in-out 350ms,
                transform ease-in-out 400ms,
                background-color ease-in-out 400ms,
                color ease-in-out 200ms;
        }
    }
}
</style>