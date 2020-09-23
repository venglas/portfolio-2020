<template>
    <div class="hexagen">
        <slot />
    </div>
</template>

<style lang="scss">
.hexagen {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    background-color: $COLOR_about-header-skill-bg;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>