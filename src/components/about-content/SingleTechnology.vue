<template>
    <div class="single-technology">
        <div class="single-technology__proggress">
            <div class="technology-name">
                <span>javascript</span>
            </div>
            <div class="proggress-bar">
                <div class="proggress"></div>
                <div class="proggress-bar__percentage">70%</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.single-technology {
    &__proggress {
        display: flex;
        // justify-content: space-between;
        min-height: 25px;
        background-color: $COLOR_about_proggress_bg-1;
        color: $COLOR_white;
        cursor: pointer;
        transition: background-color ease-in-out $TIME_fast-max;
        &:hover {
            background-color: $COLOR_about_proggress_bg-2;
        }
        .technology-name {
            display: flex;
            align-items: center;
            @include space-h-padding-med;
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
                width: 30%; //simulation of proggress
                background-color: red;
            }
            &__percentage {
                @include space-h-padding-med;
            }
        }
    }
}
</style>