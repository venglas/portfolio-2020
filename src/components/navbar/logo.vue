<template>
    <div class="logo">
        <svg viewBox="0 0 960 300" :class="{ 'mobile-menu-open': getIsMobileMenuOpen }">
            <symbol id="s-text">
                <text text-anchor="middle" x="50%" y="50%">{{text}}</text>
            </symbol>

            <g class = "g-ants">
                <use xlink:href="#s-text" class="text-copy"></use>
                <use xlink:href="#s-text" class="text-copy"></use>
                <use xlink:href="#s-text" class="text-copy"></use>
                <use xlink:href="#s-text" class="text-copy"></use>
                <use xlink:href="#s-text" class="text-copy"></use>
            </g>
        </svg>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            text: "Bartek dev"
        }
    },
    computed: {
        ...mapGetters('app', ['getIsMobileMenuOpen'])
    },
    watch: {
        '$route'() {
            this.text = this.$route.name.toUpperCase()
        }
    }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);

.logo {
    margin-top: 2rem;
    @media (max-width: $MEDIUM_mobile2) {
        align-self: flex-start;
    }
}

svg {
    display: block;
    font: 17rem 'Montserrat';
    padding: 0 2.5rem;
    height: $SIZE_navbar;
    @media (max-width: $MAX_mobile) and (min-width: $MEDIUM_mobile2) {
        height: $SIZE_navbar * 1.1;
    }
}

.mobile-menu-open {
    height: $SIZE_navbar * 1.5;
}

.text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1){
	stroke: #4D163D;
	animation-delay: -1;
}

.text-copy:nth-child(2){
	stroke: #840037;
	animation-delay: -2s;
}

.text-copy:nth-child(3){
	stroke: #BD0034;
	animation-delay: -3s;
}

.text-copy:nth-child(4){
	stroke: #BD0034;
	animation-delay: -4s;
}

.text-copy:nth-child(5){
	stroke: #FDB731;
	animation-delay: -5s;
}

@keyframes stroke-offset{
	100% {stroke-dashoffset: -35%;}
}
</style>