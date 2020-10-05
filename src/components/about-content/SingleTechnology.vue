<template>
    <div class="single-technology" @mouseover="increaseDescriptionShowedCount()">
        <div class="single-technology__proggress">
            <div class="technology-name">
                <span>{{ name }}</span>
            </div>
            <div class="proggress-bar">
                <div class="proggress" :style="{ width: percentageWithSign }"></div>
                <div class="proggress-bar__percentage">{{ percentageWithSign }}</div>
            </div>
        </div>

        <Single-technology-description :description="description"/>
    </div>
</template>

<script>
import { debounce } from "lodash";
import { mapMutations } from "vuex";
import SingleTechnologyDescription from "./SingleTechnologyDescription";

export default {
    props: {
        name: { type: String },
        percentage: { type: Number },
        description: { type: String }
    },
    components: {
        'Single-technology-description': SingleTechnologyDescription
    },
    computed: {
        percentageWithSign() {
            return `${this.percentage}%`;
        }
    },
    methods: {
        ...mapMutations('app', ["increaseShowedDescriptionCount"]),
        increaseDescriptionShowedCount: debounce( function() {
            this.increaseShowedDescriptionCount();
        }, 700)
    }
}
</script>

<style lang="scss">
.single-technology {
    max-height: 35px;
    @media (max-width: 720px) {
        max-height: max-content;
    }
    &__proggress {
        display: flex;
        min-height: 30px;
        background-color: $COLOR_about_proggress_bg-1;
        color: $COLOR_white;
        cursor: pointer;
        transition: background-color ease-in-out $TIME_fast-max;
        
        .technology-name {
            min-width: 155px;
            text-align: end;
            display: flex;
            align-items: center;
            justify-content: center;
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
                animation-name: proggress;
                animation-fill-mode: forwards;
                animation-timing-function: ease-out;
                animation-duration: $time_slow-max;
            }
            @keyframes proggress {
                from { width: 0; }
            }
            &__percentage {
                @include space-h-padding-med;
            }
        }
    }
}
</style>