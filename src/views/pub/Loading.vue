<template>
  <v-overlay v-model="overlay" class="loading-progress">
    <div class="loading-bar">
      <Vue3Lottie
        ref="lottieAnimation"
        animationLink="/assets/images/loading-circulator.json"
        :loop="true"
        :auto-play="true"
        class="lottieTest"
        :speed="1.5"
      />
    </div>
    <div class="text">
      로딩 안내문구 노출<br />
      잠시만 기다려 주십시오.
    </div>
  </v-overlay>
</template>

<script>
  import { Vue3Lottie } from 'vue3-lottie'
  import { ref } from 'vue'

  export default {
    components: [Vue3Lottie],
    setup() {
      const overlay = ref(true)
      return {
        overlay
      }
    }
  }
</script>
