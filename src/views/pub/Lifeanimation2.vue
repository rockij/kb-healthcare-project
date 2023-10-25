<template>
  <div class="contents">
    <!-- wrap-beer -->
    <div class="wrap-beer">
      <div ref="glass" class="glass">
        <div ref="beer" class="beer" :style="{ height: beerFill + '%' }"></div>
        <div class="bubble_1"></div>
        <div class="bubble_2"></div>
        <div class="bubble_3"></div>
        <div class="bubble_4"></div>
        <div class="bubble_5"></div>
        <div class="bubble_6"></div>
      </div>
      <div ref="head" class="head" :style="{ bottom: headPos + '%' }"></div>
    </div>
    <!-- wrap-beer -->
    <div class="water"></div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue'
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

      return { glass, beer, head, pour, beerFill, headPos }
    }
  }
</script>

<style lang="scss" scoped>
  .water {
    width: 200px;
    height: 200px;
    margin: 200px auto;
    position: relative;
    background-color: #8ddbf5;
    //box-shadow: inset 0 0 50px #1c637a;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
    &::before {
      content: '';
      position: absolute;
      width: 200%;
      height: 200%;
      top: -150%;
      left: -50%;
      background-color: #ececec;
      border-radius: 40%;
      animation: moving 12s linear infinite;
    }
    &::after {
      content: '';
      position: absolute;
      width: 200%;
      height: 204%;
      top: -150%;
      left: -52%;
      background-color: #ececec80;
      border-radius: 40%;
      animation: moving 12s linear infinite;
      animation-delay: 0.5s;
    }
  }
  @keyframes moving {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  //beer
  .wrap-beer {
    width: 200px;
    position: relative;
    margin-top: 100px;
  }

  .beer {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #70cbf9;
    bottom: 0;
    height: 0;
    transition: 1500ms ease-in;

    &.fill {
      height: 100%;
    }

    // &:after {
    //   content: '';
    //   position: absolute;
    //   width: 50%;
    //   height: 100%;
    //   background: #97d9fb;
    //   right: 0;
    // }
  }

  .glass {
    position: relative;
    width: 200px;
    height: 300px;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);

    // Defining border properties
    border-style: none solid solid solid;
    //border-width: 0px 16px 16px 16px;
    border-color: #ecf0f1;
    //border-radius: 20px;
    box-shadow: 1px 1px 15px -5px black;
    z-index: 5;

    // &:before,
    // &:after {
    //   content: '';
    //   position: absolute;
    //   border-radius: 10px;
    //   background: #fff;
    //   width: 10px;
    //   opacity: 0.4;
    // }

    // &:before {
    //   height: 70%;
    //   left: 60px;
    //   top: 5%;
    //   z-index: 1;
    // }

    // &:after {
    //   height: 70%;
    //   right: 44px;
    //   top: 5%;
    // }
  }

  .head {
    position: absolute;
    width: 182px;
    padding-bottom: 60px;
    background: #fff;
    bottom: 61%;
    left: 9px;
    border-radius: 50%;
    z-index: 10;
    transition: 2000ms ease-in;

    &.active {
      bottom: 82%;
      background-color: #97d9fb;
      //   &:before,
      //   &:after {
      //     content: '';
      //     position: absolute;
      //     background: #97D9FB;
      //     border-radius: 50%;
      //   }
    }

    // &:before {
    //   width: 60px;
    //   height: 60px;
    //   left: 78px;
    //   top: 18px;
    // }

    // &:after {
    //   width: 60px;
    //   height: 60px;
    //   left: 108px;
    //   top: 18px;
    // }
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

  .bubble_1 {
    @extend .bubble;
    left: 20px;
    animation: bubble 1.5s infinite linear 0s;
  }
  .bubble_2 {
    @extend .bubble;
    left: 50px;
    animation: bubble 3s infinite linear 0s;
  }
  .bubble_3 {
    @extend .bubble;
    left: 70px;
    animation: bubble 1s infinite linear 0.1s;
  }
  .bubble_4 {
    @extend .bubble;
    left: 90px;
    animation: bubble 2s infinite linear 0s;
  }
  .bubble_5 {
    @extend .bubble;
    left: 110px;
    animation: bubble 3.5s infinite linear 0.1s;
  }
  .bubble_6 {
    @extend .bubble;
    left: 140px;
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
