<template>
    <article class="article" :style="{ width: articleWidth }">
        <slot />
    </article>
</template>

<script>
export default {
    props: {
        fullWidth: { type: Boolean, default: false}
    },
    computed: {
        articleWidth() {
            return this.fullWidth ? "100%" : ''
        }
    }
}
</script>

<style lang="scss">
.article {
    width: 75%;
    margin: 5rem auto;
}
</style>