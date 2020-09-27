<template>
    <article class="article" :style="{ width: articleWidth, margin: space }" >
        <slot />
    </article>
</template>

<script>
export default {
    props: {
        fullWidth: { type: Boolean, default: false },
        verticalSpace: { type: String, default: "" }
    },
    computed: {
        articleWidth() {
            return this.fullWidth ? "100%" : ''
        },
        space() {
            return this.verticalSpace ? `${this.verticalSpace} auto` : ''
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