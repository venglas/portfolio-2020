<template>
    <div class="skill">
        <slot />
    </div>
</template>

<style lang="scss">
.skill {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    background-color: $COLOR_animated-bg-2; //set another variable for this color
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
            0% {filter: invert(0);}
            40% { filter: invert(1);}
            80% { filter: invert(1);}
            100% { filter: invert(0);}
        }
    }
}
</style>