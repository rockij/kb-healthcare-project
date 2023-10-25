<template>
  <div class="contents">
    <v-btn @click="snackbar = true">토스트팝업보기 </v-btn>
    <v-snackbar v-model="snackbar" :timeout="2000" class="toast-basic">
      토스트 팝업 문구 입력
    </v-snackbar>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const snackbar = ref(false)
      return {
        snackbar
      }
    }
  }
</script>
