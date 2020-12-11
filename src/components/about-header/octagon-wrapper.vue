<template>
    <div class="octagon">
        <slot />
    </div>
</template>

<style lang="scss">
.octagon {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    background-color: $COLOR_about-header-skill-bg;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    min-height: 100px;
}
</style>
