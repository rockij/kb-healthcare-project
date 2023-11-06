<template>
  <div class="contents">
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
    <!-- //water wave -->

    <!-- rice -->
    <div class="wrap-rice">
      <div class="mask-rice">
        <img src="../../../src/assets/images/mask-rice-before.svg" alt="" />
      </div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        style="display: none"
      >
        <symbol id="rice">
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
      <div class="rice-box">
        <div ref="rice" class="rice">
          <svg class="rice-wave rice-wave-back">
            <defs>
              <mask id="mask">
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
              </mask>
            </defs>
            <image
              xlink:href="../../../src/assets/images/mask-rice.svg"
              mask="url(#mask)"
              style="width: 123px; height: 110px"
            ></image>
          </svg>
          <svg viewBox="0 0 560 20" class="rice-wave rice-wave-front">
            <use xlink:href="#rice"></use>
          </svg>
        </div>
      </div>
    </div>
    <!-- //rice -->
    <svg viewBox="0 0 560 110">
      <g id="mask-img">
        <defs>
          <clipPath id="text">
            <path
              d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v110H420z"
            ></path>
            <path
              d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v110H420z"
            ></path>
            <path
              d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v110H140z"
            ></path>
            <path
              d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,110H140z"
            ></path>
          </clipPath>
          <mask id="mask-image">
            <rect clip-path="url(#text)" width="560" height="110">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from="-280 0"
                to="0 0"
                repeatCount="indefinite"
                dur="2.8s"
              ></animateTransform>
            </rect>
          </mask>
        </defs>
        <use xlink:href="#eff" opacity="0.9"></use>
        <image
          xlink:href="../../../src/assets/images/mask-rice.svg"
          width="123px"
          height="110px"
          mask="url(#mask-image)"
        ></image>
      </g>
    </svg>
  </div>
</template>

<script setup>
  import { mapKeys } from 'lodash'
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

  onMounted(() => {
    waterWave(80)
  })
</script>
<style lang="scss">
  // rice
  .wrap-rice {
    position: relative;
    width: 123px;
    height: 110px;
    .mask-rice {
      line-height: 0;
    }
    .rice-box {
      width: 123px;
      height: 110px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      mask-image: url('../../../src/assets/images/mask-rice.svg');
      -webkit-mask-image: url('../../../src/assets/images/mask-rice.svg');
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      overflow: hidden;
      .rice {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transform: translate(0, 50%);
        transition: all 0.3s;
        &-wave {
          width: 200%;
          position: absolute;
          bottom: 100%;
          &-back {
            right: 0;
            // animation: wave-back 2.8s infinite linear;
          }
          &-front {
            border-bottom: 1px solid #000;
            left: 0;
            margin-bottom: -1px;
            animation: wave-front 1.8s infinite linear;
          }
        }
      }
    }
  }
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
</style>
