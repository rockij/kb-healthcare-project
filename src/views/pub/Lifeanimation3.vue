<template>
  <div class="contents">
    <!-- wrap-beer -->
    <div class="wrap-beer">
      <div ref="glass" class="glass">
        <div ref="beer" class="beer" :style="{ height: beerFill + '%' }"></div>
        <!-- <div class="bubble_1"></div> -->
        <!-- <div class="bubble_2"></div> -->
        <!-- <div class="bubble_3"></div> -->
        <div class="bubble_4"></div>
        <div class="bubble_5"></div>
        <div class="bubble_6"></div>
      </div>
      <div ref="head" class="cup-head" :style="{ bottom: headPos + '%' }"></div>
    </div>
    <!-- wrap-beer -->
  </div>
</template>

<script>
  import { onMounted, onUnmounted, ref } from 'vue'
  export default {
    setup() {
      const glass = ref()
      const beer = ref()
      const head = ref()
      const pour = ref()
      const beerFill = ref()
      const headPos = ref()

      onMounted(() => {
        const beerRise = (e) => {
          beer.value.classList.add('fill')
          head.value.classList.add('active')
          beerFill.value = e
          headPos.value = beerFill.value - 10
        }

        setTimeout(() => {
          beerRise(70) //input graph value
        })
      })
      onUnmounted(() => {
        clearTimeout(beerRise)
        console.log('onUnmounted')
      })

      return { glass, beer, head, pour, beerFill, headPos }
    }
  }
</script>

<style lang="scss" scoped>
  //beer
  .wrap-beer {
    width: 145px;
    position: relative;
    margin: 100px auto 0;
  }

  .beer {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(#79d1ff, #36b5f6);
    bottom: 0;
    height: 0;
    transition: 1500ms ease-in;
    &.fill {
      height: 100%;
      bottom: 0;
    }
  }

  .glass {
    position: relative;
    width: 145px;
    height: 192px;
    // clip-path: polygon(0 0, 100% 0, 88% 100%, 12% 100%);
    background: url('../../assets/images/img-beer.svg') no-repeat;
    -webkit-mask: url('../../assets/images/img-beer.svg');
    mask: url('../../assets/images/img-beer.svg');
    z-index: 5;
  }

  @keyframes moving {
    50% {
      transform: rotate(90deg);
    }
  }
  @keyframes moving2 {
    50% {
      transform: rotate(120deg);
      background-color: #79d1ff;
    }
  }
  .cup-head {
    position: absolute;
    top: 0;
    z-index: 100;
    width: 145px;
    height: 193px;
    -webkit-mask: url('../../assets/images/img-beer.svg');
    mask: url('../../assets/images/img-beer.svg');
    opacity: 0;
    transition: all 1000ms ease-in;
    &.active {
      opacity: 1;
      &::before {
        content: '';
        position: absolute;
        width: 170%;
        height: 162%;
        top: -95%;
        left: -22%;
        background-color: #36b5f6;
        border-radius: 40%;
        animation: moving2 8s linear infinite;
        animation-delay: 1.5s;
        transform: rotate(40deg);
        // #F3FAFF, #E0F2FF, #B9DFFA
      }
      &::after {
        content: '';
        position: absolute;
        width: 170%;
        height: 162%;
        top: -95%;
        left: -22%;
        background-color: #f1f9ff;
        border-radius: 40%;
        animation: moving 8s linear infinite;
        animation-delay: 1.5s;
        transform: rotate(40deg);
      }
      // background-color: #97d9fb;
    }
  }

  .head {
    position: absolute;
    padding-bottom: 60px;
    background: transparent;
    bottom: 61%;
    left: 0;
    right: 0;
    border-radius: 50%;
    z-index: 10;
    transition: 2000ms ease-in;

    &.active {
      bottom: 82%;
      background-color: #97d9fb;
    }
  }

  .bubble {
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: white;
    border-radius: 10px;
    opacity: 0.5;
    bottom: -15px;
    z-index: 5;
  }

  .bubble_4 {
    @extend .bubble;
    width: 5px;
    height: 5px;
    left: 90px;
    opacity: 1 !important;
    animation: bubble 2s infinite linear 0s;
  }
  .bubble_5 {
    @extend .bubble;
    left: 100px;
    animation: bubble 3.5s infinite linear 0.1s;
  }
  .bubble_6 {
    @extend .bubble;
    width: 4px;
    height: 4px;
    left: 110px;
    opacity: 0.8 !important;
    animation: bubble 2.5s infinite linear 0s;
  }

  @keyframes bubble {
    0% {
      bottom: 0;
      opacity: 0.5;
    }
    50% {
      bottom: 100px;
    }
    100% {
      opacity: 0.1;
      bottom: 260px;
    }
  }
</style>
