<template>
  <div class="contents">
    <div>투데이 투두 리스트 유플리트 진행</div>
    <!-- toast 팝업 -->
    <v-snackbar v-model="snackbar" :timeout="2000" class="toast-basic not-button"> 인증이 완료 되었습니다. </v-snackbar>
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