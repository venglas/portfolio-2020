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
    @include space-padding-med;

    @media (max-width: 720px) {
        transform: scaleY(1);
        border-bottom: 5px solid white;
    }
}
</style>
