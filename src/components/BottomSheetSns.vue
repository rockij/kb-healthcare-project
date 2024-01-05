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
        <v-toolbar-title class="modal-title">공유하기</v-toolbar-title>
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
          <div class="d-grid g-tcol-3 gap-21">
            <v-btn
              variant="text"
              @click="$emit('kakao')"
              class="btn-cmm-sns kakao"
              >카카오톡</v-btn
            >
            <v-btn
              variant="text"
              @click="$emit('facebook')"
              class="btn-cmm-sns fb"
              >페이스북</v-btn
            >
            <v-btn
              variant="text"
              class="btn-cmm-sns ins"
              @click="$emit('Instagram')"
              >인스타</v-btn
            >
            <v-btn variant="text" class="btn-cmm-sns url" @click="$emit('url')"
              >URL</v-btn
            >
            <v-btn variant="text" class="btn-cmm-sns etc" @click="$emit('more')"
              >더보기</v-btn
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
    emits: ['close', 'update', 'kakao', 'facebook', 'Instagram', 'url', 'more'],
    setup() {
      const dialog = ref(false)
      return {
        dialog
      }
    }
  }
</script>
