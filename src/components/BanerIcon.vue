<template>
  <div class="banner-coding">
    <v-btn variant="text" :href="linkUrl" :data-case="caseName">
      <span class="txbox">
        <slot>텍스트를 입력하세요</slot>
      </span>
      <figure />
    </v-btn>
  </div>
</template>
<script>
  export default {
    props: {
      linkUrl: {
        type: String,
        default: null
      },
      caseName: {
        type: String,
        default: null
      }
    }
  }
</script>
