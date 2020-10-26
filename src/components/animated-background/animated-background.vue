<template>
  <div class="wrapper">
    <div class="wrapper__slot">
      <slot />
    </div>

    <div class="wave-wrapper wave-animation">
      <div class="wave-wrapper__inner wave-wrapper__inner--top">
        <div class="wave wave-top"></div>
      </div>
      <div class="wave-wrapper__inner wave-wrapper__inner--middle">
        <div class="wave wave-middle"></div>
      </div>
      <div class="wave-wrapper__inner wave-wrapper__inner--bottom">
        <div class="wave wave-bottom"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &__slot {
    z-index: 999;
    position: absolute;
    text-align: center;
    font-size: 2rem;
  }
  .wave-wrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: $SIZE_navbar;
    margin: auto;
    &__inner {
      position: absolute;
      width: 100%;
      overflow: hidden;
      height: 100%;
      bottom: -1px;
      background-image: linear-gradient(to top, $COLOR_animated-bg-1 20%, $COLOR_animated-bg-2 80%);
      &--top {
        z-index: 15;
        opacity: 0.5;
      }
      &--middle {
        z-index: 10;
        opacity: 0.75;
      }
      &--bottom { z-index: 5; }
      .wave {
        position: absolute;
        left: 0;
        width: 200%;
        height: 100%;
        background-repeat: repeat no-repeat;
        background-position: 0 bottom;
        transform-origin: center bottom;
      }
    }
  }
  .wave-animation {
    .wave-top {
      animation: move-wave 3s;
      background-size: 50% 100px;
      animation-delay: 1s;
      background-image: url('../../assets/img/background/wave-top.png');
    }
    .wave-middle {
      animation: move_wave 10s linear infinite;
      background-size: 50% 120px;
      background-image: url('../../assets/img/background/wave-mid.png');
    }
    .wave-bottom {
      animation: move_wave 15s linear infinite;
      background-size: 50% 100px;
      background-image: url('../../assets/img/background/wave-bot.png');
    }
  }
}

@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}
</style>
