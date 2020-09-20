<template>
  <div class="wrapper">
    <div class="wrapper__slot">
      <slot />
    </div>

    <div class="wave-wrapper wave-animation">
      <div class="wave-wrapper__inner bgTop">
        <div
          class="wave waveTop"
          style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"
        ></div>
      </div>

      <div class="wave-wrapper__inner bgMiddle">
        <div
          class="wave waveMiddle"
          style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
        ></div>
      </div>

      <div class="wave-wrapper__inner bgBottom">
        <div
          class="wave waveBottom"
          style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
        ></div>
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
      background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);

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
}
.wave-animation .waveTop {
  animation: move-wave 3s;
  -webkit-animation: move-wave 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.waveMiddle { background-size: 50% 120px; }
.wave-animation .waveMiddle { animation: move_wave 10s linear infinite; }
.waveBottom { background-size: 50% 100px; }
.wave-animation .waveBottom { animation: move_wave 15s linear infinite; }

.bgTop {
  z-index: 15;
  opacity: 0.5;
}
.bgMiddle {
  z-index: 10;
  opacity: 0.75;
}
.bgBottom { z-index: 5; }
.waveTop { background-size: 50% 100px; }

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