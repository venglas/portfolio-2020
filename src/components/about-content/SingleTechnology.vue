<template>
    <div class="single-technology">
        <div class="single-technology__proggress">
            <div class="technology-name">
                <span>javascript</span>
            </div>
            <div class="proggress-bar">
                <div class="proggress" :style="{ width: `${percentage}%` }"></div>
                <div class="proggress-bar__percentage">{{percentage}}%</div>
            </div>
        </div>

        <Single-technology-description />
    </div>
</template>

<script>
import SingleTechnologyDescription from "./SingleTechnologyDescription";

export default {
    props: {
        percentage: { type: Number }
    },
    components: {
        'Single-technology-description': SingleTechnologyDescription
    }
}
</script>

<style lang="scss">
.single-technology {
    &__proggress {
        display: flex;
        min-height: 25px;
        background-color: $COLOR_about_proggress_bg-1;
        color: $COLOR_white;
        cursor: pointer;
        transition: background-color ease-in-out $TIME_fast-max;
        
        .technology-name {
            display: flex;
            align-items: center;
            @include space-h-padding-med;
            border: solid black;
            border-width: 0 1px 0 0;
            font-weight: 600;
            letter-spacing: 1px;
            background-color: $COLOR_about_proggress_bg-2;
        }
        .proggress-bar {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .proggress {
                height: 100%;
                background-color: $COLOR_about-proggress_bg-3;
            }
            &__percentage {
                @include space-h-padding-med;
            }
        }
    }
}
</style>