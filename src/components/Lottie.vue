<template>
  <v-btn
    :variant="variant ? variant : 'text'"
    density="compact"
    :class="lottieButton"
    @click.stop="lottiePlay(), $emit('snackbarToggle', true)"
    :disabled="disabled"
    :ripple="ripple"
  >
    <slot name="LottieButton">
      {{ disabled ? '완료' : '먹음' }}
    </slot>
  </v-btn>
  <!-- Firecracker
  buttonLottie
  buttonLottie2 -->
  <Vue3Lottie
    ref="lottieAnimation"
    :animationLink="`/assets/images/` + animationLinkSrc + `.json`"
    :loop="false"
    :auto-play="false"
    class="lottieTest"
    :class="[lottieAnimationHide, animationLinkSrc]"
    @on-complete="completed"
    :speed="1.5"
  />
</template>
<script>
  import { Vue3Lottie } from 'vue3-lottie'

  import { onMounted, ref } from 'vue'
  export default {
    components: [Vue3Lottie],
    props: [
      'disabled',
      'snackbar',
      'lottieButton',
      'variant',
      'ripple',
      'animationLinkSrc'
    ],
    emits: ['snackbarToggle'],
    setup(props) {
      const lottieAnimation = ref()
      const lottieAnimationHide = ref('hide')
      const lottiePlay = () => {
        lottieAnimationHide.value = ''
        lottieAnimation.value.goToAndPlay(0, true)
      }

      const completed = () => {
        lottieAnimationHide.value = 'hide'
      }

      return {
        lottieAnimation,
        lottiePlay,
        lottieAnimationHide,
        completed
      }
    }
  }
</script>
<style lang="scss" scoped>
  .timeline-panel {
    .v-btn.medi-check-btn {
      position: relative;
    }
  }
  .medi-card {
    position: relative;
  }
  .lottieTest {
    position: absolute;
    right: -30px;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    height: 190px;
    z-index: 1;
    pointer-events: none;
    &.buttonLottie {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: auto;
      height: 130%;
    }
    &.buttonLottie2 {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: auto;
      height: 130%;
    }
  }
  // fire
  // right: -30px;
  //   top: 50%;
  //   transform: translateY(-50%);
  //   width: auto;
  //   height: 190px;
  // other
  // right: 0;
  //   top: 50%;
  //   transform: translateY(-50%);
  //   width: auto;
  //   height: 130%;
  .lottieTest.hide {
    display: none;
  }

  .nth-item2 + .lottieTest,
  .nth-item4 + .lottieTest,
  .nth-item6 + .lottieTest {
    z-index: -1;
  }
</style>
