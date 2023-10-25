<template>
  <div class="contents">
    <!-- wrap-beer -->
    <!-- <div class="wrap-beer">
      <div ref="glass" class="glass">
        <div class="bottle_handle"></div>
        <div ref="beer" class="beer" :style="{ height: beerFill + '%' }"></div>
        <div class="bubble_1"></div>
        <div class="bubble_2"></div>
        <div class="bubble_3"></div>
        <div class="bubble_4"></div>
        <div class="bubble_5"></div>
        <div class="bubble_6"></div>
      </div>
      <div ref="head" class="head" :style="{ bottom: headPos + '%' }"></div>
    </div> -->
    <!-- //wrap-beer -->

    <!-- <div class="wrap-beer2" style="margin: 50px 0">
      <div class="glass2" ref="glass2" style="margin: 0 auto">
        <div style="height: calc(162px / 3); background-color: #ffdf68"></div>
        <div style="height: calc(162px / 3); background-color: #ffc431"></div>
        <div style="height: calc(162px / 3); background-color: #feab21"></div>
        <div
          class="beer2"
          ref="beer2"
          :style="{ height: beerHeight + '%' }"
        ></div>
      </div>
    </div> -->

    <!-- water wave -->
    <div class="wave">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        style="display: none"
      >
        <symbol id="wave">
          <path
            d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
          ></path>
          <path
            d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
          ></path>
          <path
            d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
          ></path>
          <path
            d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
          ></path>
        </symbol>
      </svg>
      <div class="wave-box">
        <div ref="water" class="water">
          <svg viewBox="0 0 560 20" class="water_wave water_wave_back">
            <use xlink:href="#wave"></use>
          </svg>
          <svg viewBox="0 0 560 20" class="water_wave water_wave_front">
            <use xlink:href="#wave"></use>
          </svg>
          <div class="bubble_1"></div>
          <div class="bubble_2"></div>
          <div class="bubble_3"></div>
        </div>
      </div>
    </div>
    <!-- water wave -->
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'

  // waterwave
  const water = ref()
  const percent = ref(0)
  const waterWave = (e) => {
    const interval = setInterval(function () {
      percent.value++
      water.value.style.transform =
        'translate(0' + ',' + (100 - percent.value) + '%)'
      if (percent.value == e || e == 0) {
        clearInterval(interval)
      }
    }, 40)
  }
  // waterwave

  // wrap-beer
  const glass = ref()
  const beer = ref()
  const head = ref()
  const beerFill = ref(0)
  const headPos = ref(0)

  // wrap-beer2
  const glass2 = ref()
  const beer2 = ref()
  const beerHeight = ref(0)
  const beerRise = (e) => {
    beer.value.classList.add('fill')
    head.value.classList.add('active')
    beerFill.value = e
    headPos.value = beerFill.value - 14
  }

  const beerRise2 = (e) => {
    beer2.value.classList.add('fill')
    beerHeight.value = 100 - e
  }
  onMounted(() => {
    waterWave(100)
    // beerRise(100)
    // beerRise2(72)
  })
</script>
<style lang="scss">
  // waterwave
  $waterFColor: #79d1ff;
  $waterBColor: #ade3ff;
  .wave {
    position: relative;
    width: 145px;
    height: 192px;
    background: url(../../../src/assets/images/img-beer.svg) no-repeat 0 0;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 50px;
      border-radius: 100%;
      border: 3px solid #fff;
      opacity: 0.5;
      z-index: 1;
    }
  }
  .wave-box {
    width: 129px;
    height: 174px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mask-image: url('../../../src/assets/images/img-water-mask.svg');
    -webkit-mask-image: url('../../../src/assets/images/img-water-mask.svg');
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    overflow: hidden;

    .water {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      transform: translate(0, 100%);
      background: linear-gradient(
        180deg,
        rgba(121, 209, 255, 1) 35%,
        rgba(54, 181, 247, 1) 100%
      );
      transition: all 0.3s;
      &_wave {
        width: 200%;
        position: absolute;
        bottom: 100%;
        &_back {
          right: 0;
          fill: $waterBColor;
          animation: wave-back 2.8s infinite linear;
        }
        &_front {
          border-bottom: 1px solid $waterFColor;
          left: 0;
          fill: $waterFColor;
          margin-bottom: -1px;
          animation: wave-front 1.8s infinite linear;
        }
      }
    }
  }
  @keyframes wave-front {
    100% {
      transform: translate(-50%, 0);
    }
  }

  @keyframes wave-back {
    100% {
      transform: translate(50%, 0);
    }
  }
  .bubble {
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: white;
    border-radius: 10px;
    opacity: 0.2;
    bottom: -15px;
    z-index: 5;
  }

  .bubble_1 {
    @extend .bubble;
    right: 15px;
    animation: bubble 1.5s infinite linear 0s;
  }
  .bubble_2 {
    @extend .bubble;
    right: 35px;
    animation: bubble 3s infinite linear 0s;
  }
  .bubble_3 {
    @extend .bubble;
    right: 45px;
    animation: bubble 1s infinite linear 0.1s;
  }

  @keyframes bubble {
    0% {
      bottom: 0;
      opacity: 0.2;
    }
    20% {
      bottom: 40%;
      opacity: 0.5;
    }
    100% {
      opacity: 0.1;
      bottom: 80%;
    }
  }
  // waterwave

  // .glass2 {
  //   position: relative;
  //   width: 118px;
  //   height: 162px;
  //   border: 8px solid #d9d9d9;
  //   border-top: none;
  //   background-color: #d9d9d9;
  //   overflow: hidden;
  // }
  // .beer2 {
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: #fff;
  //   animation: beerFillReverse 1.5s;
  //   &:not(.fill) {
  //     height: 100% !important;
  //   }
  // }

  // .wrap-beer {
  //   position: relative;
  //   margin-top: 100px;
  // }
  // .bottle_handle {
  //   height: 140px;
  //   width: 45px;
  //   position: absolute;
  //   border-radius: 0 34px 34px 0;
  //   top: 55px;
  //   left: 188px;
  //   box-shadow: 0 0 0 20px #ecf0f1;
  //   &:after {
  //     content: '';
  //     position: absolute;
  //     width: 15px;
  //     height: 20px;
  //     background-color: black;
  //     opacity: 0.1;
  //     top: -20px;
  //     left: 0px;
  //   }
  //   &:before {
  //     content: '';
  //     position: absolute;
  //     width: 15px;
  //     height: 20px;
  //     background-color: black;
  //     opacity: 0.1;
  //     top: 140px;
  //     left: 0px;
  //   }
  // }

  // @keyframes beerFill {
  //   0% {
  //     height: 0;
  //   }
  // }

  // @keyframes beerFillReverse {
  //   0% {
  //     height: 100%;
  //   }
  // }

  // @keyframes foam {
  //   0% {
  //     bottom: 0;
  //     opacity: 0;
  //   }
  // }
  // .beer {
  //   width: 100%;
  //   height: 100%;
  //   position: absolute;
  //   background: #fac92c;
  //   bottom: 0;
  //   height: 0;
  //   border-radius: 0 0 27px 27px;
  //   animation: beerFill 1500ms ease-in;
  // }

  // .glass {
  //   position: relative;
  //   width: 200px;
  //   height: 300px;

  //   // Defining border properties
  //   border-style: none solid solid solid;
  //   border-width: 0px 16px 26px 16px;
  //   border-color: #ecf0f1;
  //   border-radius: 16px 16px 50px 50px;
  //   box-shadow: 1px 1px 15px -5px black;
  //   z-index: 5;

  //   &:before,
  //   &:after {
  //     content: '';
  //     position: absolute;
  //     border-radius: 10px;
  //     background: #fff;
  //     width: 10px;
  //     opacity: 0.4;
  //   }

  //   &:before {
  //     height: 70%;
  //     left: 60px;
  //     top: 5%;
  //     z-index: 1;
  //   }

  //   &:after {
  //     height: 70%;
  //     right: 44px;
  //     top: 5%;
  //   }
  // }

  // .head {
  //   position: absolute;
  //   width: 100px;
  //   padding-bottom: 100px;
  //   background: #fff;
  //   bottom: 0;
  //   left: 16px;
  //   border-radius: 50%;
  //   z-index: -1;
  //   animation: foam 1600ms ease-in;
  //   &:before,
  //   &:after {
  //     content: '';
  //     position: absolute;
  //     background: #fff;
  //     border-radius: 50%;
  //     animation: form 1600ms ease-in;
  //   }

  //   &.active {
  //     // bottom: 82%;
  //     background-color: #fcf5d7;
  //     &:before,
  //     &:after {
  //       content: '';
  //       position: absolute;
  //       background: #fcf5d7;
  //       border-radius: 50%;
  //     }
  //   }

  //   &:before {
  //     width: 60px;
  //     height: 60px;
  //     left: 78px;
  //     top: 18px;
  //   }

  //   &:after {
  //     width: 60px;
  //     height: 60px;
  //     left: 108px;
  //     top: 18px;
  //   }
  // }

  // .bubble {
  //   position: absolute;
  //   height: 10px;
  //   width: 10px;
  //   background-color: white;
  //   border-radius: 10px;
  //   opacity: 0.5;
  //   bottom: -15px;
  //   z-index: 5;
  // }

  // .bubble_1 {
  //   @extend .bubble;
  //   left: 20px;
  //   animation: bubble 1.5s infinite linear 0s;
  // }
  // .bubble_2 {
  //   @extend .bubble;
  //   left: 50px;
  //   animation: bubble 3s infinite linear 0s;
  // }
  // .bubble_3 {
  //   @extend .bubble;
  //   left: 70px;
  //   animation: bubble 1s infinite linear 0.1s;
  // }
  // .bubble_4 {
  //   @extend .bubble;
  //   left: 90px;
  //   animation: bubble 2s infinite linear 0s;
  // }
  // .bubble_5 {
  //   @extend .bubble;
  //   left: 110px;
  //   animation: bubble 3.5s infinite linear 0.1s;
  // }
  // .bubble_6 {
  //   @extend .bubble;
  //   left: 140px;
  //   animation: bubble 2.5s infinite linear 0s;
  // }

  // @keyframes bubble {
  //   0% {
  //     bottom: 0;
  //     opacity: 0.5;
  //   }
  //   50% {
  //     bottom: 100px;
  //   }
  //   100% {
  //     opacity: 0.1;
  //     bottom: 260px;
  //   }
  // }
</style>
