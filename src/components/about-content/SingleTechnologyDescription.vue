<template>
    <section class="single-technology-description">
        <p>{{description}}</p>
    </section>
</template>

<script>
export default {
    props: {
        description: { type: String }
    }
}
</script>

<style lang="scss">
.single-technology {
    &:hover {
        .single-technology-description {
            @include space-padding-med;
            transform: scaleY(1);
        }
    }
}

.single-technology-description {
    pointer-events: none; //remove hover
    background-color: $COLOR_about_proggress_bg-3;
    color: $COLOR_white;
    border-top: 5px solid white;
    text-align: justify;
    transform: scaleY(0);
    transition: transform ease-in-out $TIME_fast-max;
}
</style>