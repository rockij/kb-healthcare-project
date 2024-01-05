<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    persistent
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">길 찾기</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        >
          <v-icon />
        </v-btn>
      </v-toolbar>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="d-flex justify-center gap-44">
            <v-btn
              variant="text"
              @click="$emit('kakao')"
              class="btn-cmm-sns kakao-road"
              >카카오 길찾기</v-btn
            >
            <v-btn
              variant="text"
              @click="$emit('naver')"
              class="btn-cmm-sns nv-road"
              >네이버 길찾기</v-btn
            >
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import { ref } from 'vue'
  export default {
    emits: ['close', 'update', 'kakao', 'naver'],
    setup() {
      const dialog = ref(false)
      return {
        dialog
      }
    }
  }
</script>
