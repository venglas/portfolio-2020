<template>
    <div class="skill">
        <div class="skill__img-wrapper">
            <slot name="skillImg"/>
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

<style lang="scss">
.skill {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__img-wrapper {
        clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
        background-color: $COLOR_about-header-skill-bg;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

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
    }
    
}
</style>