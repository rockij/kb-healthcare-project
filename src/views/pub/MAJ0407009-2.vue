<template>
  <div class="contents">
    <div>홈(투데이)</div>
    <!-- toast 팝업 -->
    <v-snackbar v-model="snackbar" :timeout="2000" class="toast-basic"> 챌린지 포기 처리가 완료 되었습니다. </v-snackbar>
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