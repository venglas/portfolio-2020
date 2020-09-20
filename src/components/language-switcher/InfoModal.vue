<template>
  <div class="language-info-modal" v-if="showInfo">
    <p class="language-info-modal__info-text">
        {{$t('home.languageModalInfo')}}
    </p>
    <img src="../../assets/img/icons/arrow.png" alt="jumping arrow" class="img img--arrow">
    <button class="button language-info-modal__button" @click="closeModal()">
        OK
    </button>
  </div>
</template>

<script>
export default {
data() {
    return {
        showInfo: true
    }
},
created() {
    this.checkShowInfo();  
},
methods: {
    checkShowInfo() {
        const cookie = document.cookie.includes("showLanguageInfo=false");
        if (cookie) this.showInfo = false;
    },
    createCookieTime(days) {
        const day = 1000*36000;
        const now = new Date();
        const time = now.getTime();
        const expireTime = time + day * days;
        now.setTime(expireTime)
        return now;
    },
    closeModal() {
        //create cooki expires time for 30 days
        document.cookie = `showLanguageInfo = false; expires='${this.createCookieTime(30).toGMTString()}'`;
        this.showInfo = false;
    }
}
}
</script>

<style lang="scss">
.language-info-modal {
    position: absolute;
    z-index: $size_z-max;
    right: 0;
    max-width: $SIZE_language-selector-width;
    font-size: 1.1rem;
    padding: 10px;
    bottom: 25px;
    background: $COLOR_language-info-modal;
    clip-path: polygon(0% 85%, 38% 90%, 50% 100%, 66% 90%, 100% 85%, 100% 0%, 0% 0%);
    color: $COLOR_white;
    
    animation: jump;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;

    &:hover {
        .language-info-modal__button {
            display: block;
        }
    }

    &__info-text {
        text-align: center;
    }

    &__button {
        display: none;
        padding: 3px 5px;
        color: $COLOR_button-blue-light;
        border-color: $COLOR_button-blue-light;
        @include center(-50%, -65%);

        &:hover {
            color: $COLOR_white;
            background-color: $COLOR_button-blue-light;
        }
    }

    .img {
        height: 15px;
        width: auto;
        display: block;

        &--arrow {
            transform: rotate(90deg);
            margin: .5rem auto 0 auto;
        }
    }
}

@keyframes jump {
    0% {transform: translateY(0);}
    50% {transform: translateY(-5px);}
    100% {transform: translateY(0);}
}
</style>