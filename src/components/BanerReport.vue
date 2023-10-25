<template>
  <div class="baner-report">
    <div class="statelst" :data-case="bnShow">
      <slot></slot>
    </div>
    <div class="video mt-6" v-if="videBox">
      <video autoplay muted controls>
        <source src="/src/assets/images/dummy-video.mp4" type="video/mp4" />
      </video>
      <p class="caution">가까운 안과에 가서 진료를 받으세요</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      videBox: {
        default: false
      },
      bnShow: {
        default: ''
      }
    }
  }
</script>
