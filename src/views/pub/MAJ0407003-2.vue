<template>
  <div class="contents">
    <div>수행캘린더(홈)</div>
    <!-- toast 팝업 -->
    <v-snackbar v-model="snackbar"  class="toast-basic"> 인증이 완료 되었습니다. </v-snackbar>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup(props) {
      const snackbar = ref(true)
      return { 
        snackbar
      }
    }
  }
</script>