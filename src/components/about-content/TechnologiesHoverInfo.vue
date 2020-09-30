<template>
    <p class="technologies-hover-info">
        <img :src="arrow" alt="jumping arrow" class="arrow">
        <span>Hover over bars to get description about skills</span>
        <img :src="arrow" alt="jumping arrow" class="arrow">
    </p>
</template>

<script>
export default {
    data() {
        return {
            arrow: require("../../assets/img/icons/arrow.png")
        }
    },
}
</script>

<style lang="scss" scoped>
.technologies-hover-info {
    position: absolute;
    width: 100%;
    text-align: center;
    margin-top: -2.5rem;
    font-weight: 600;
    
    .arrow {
        @include space-h-margin-small;
        width: 15px;
        transform: rotate(90deg) translateX(3px);
        animation-name: jumping-arrow;
        animation-iteration-count: infinite;
        animation-duration: 1s;
    }
    @keyframes jumping-arrow {
        0% {transform: translateY(3px) rotate(90deg);}
        50% {transform: translateY(-3px) rotate(90deg);}
        100% {transform: translateY(3px) rotate(90deg);}
    }
}
</style>