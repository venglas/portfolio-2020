<template>
<div class="about-author">
    <h2 class="about-author__header">{{$t('about.presentation.title')}}</h2>
    <p class="about-author__content">{{$t('about.presentation.content')}}</p>
</div>
</template>

<style lang="scss">
.about-author {
    width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media( max-height: $BP_second ) {
        width: 75%;
    }
    &__header {
        @include space-v-margin-small;
    }
    &__content {
        text-align: justify;
    }
}
</style>