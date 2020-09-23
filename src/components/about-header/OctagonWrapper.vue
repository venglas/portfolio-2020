<template>
    <div class="octagon" :style="{ width: width+'px', height: height+'px', padding: padding}">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        width: { type: Number, default: 100 },
        height: { type: Number, default: 100 },
        padding: { type: String }
    }
}
</script>

<style lang="scss">
.octagon {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    background-color: $COLOR_about-header-skill-bg;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>