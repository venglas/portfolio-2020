<template>
    <section class="single-technology-description">
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. 
            Accusantium fugiat rem aut culpa modi aperiam asperiores tempora repellendus soluta?
            Reiciendis at quia hic rem.
        </p>
    </section>
</template>

<script>
export default {}
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
    background-color: $COLOR_about_proggress_bg-3;
    color: $COLOR_white;
    border-top: 5px solid white;
    text-align: justify;
    transform: scaleY(0);
    transition: transform ease-in-out $TIME_fast-max;
}
</style>