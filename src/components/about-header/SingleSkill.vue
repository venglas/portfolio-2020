<template>
    <div class="skill">
        <div class="skill__img-wrapper">
            <Octagon-wrapper>
                <slot name="skillImg"/>
            </Octagon-wrapper>
        </div>
        <div class="skill__description">
            <header class="header">
                <slot name="skillTitle" />
            </header>
            <p class="description">
                <slot name="skillDescription" />
            </p>
        </div>
        
    </div>
</template>

<script>
import OctagonWrapper from "./OctagonWrapper";

export default {
    components: {
        "Octagon-wrapper": OctagonWrapper
    }
}
</script>

<style lang="scss">
.skill {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: $BP_second) {
        @include space-v-margin-small;
    }

    &__img-wrapper {
        .img {
            &--skill {
                filter: invert(.7);
                animation-name: skill;
                animation-duration: 6s;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }

            @keyframes skill {
                0% { filter: invert(0); }
                40% { filter: invert(1); }
                80% { filter: invert(1); }
                100% { filter: invert(0); }
            }
        }
    }
    &__description {
        @include space-v-margin-small;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: $SIZE_small-font;
        text-align: center;
        .description {
            @include space-h-padding-small;
        }
    }
    
}
</style>