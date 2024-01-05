<template>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">탈퇴하기</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark class="btn-modal-close" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-0">
        <div class="flex-shrink-0 modal-body-container px-6 bt-desc-wrap">
          <div class="bt-desc1">오케어를 이용하면서 불편한 점이 있었나요?</div>
          <div class="bt-desc2 pt-4">
            문의를 남겨주시면 빠른 시일내에 도와 드리겠습니다.
          </div>
        </div>
      </div>

      <v-card-actions>
        <div class="btn-area2 type-bt d-flex">
          <v-btn variant="text" height="48px" class="bdr-8 cancel" block
            >탈퇴하기</v-btn
          >
          <v-btn height="48" class="bdr-8 btn-yellow" block @click="onClicked"
            >문의 남기기</v-btn
          >
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    emits: ['update', 'close'],
    setup(props, context) {
      const { emit } = context
      const dialog = ref(true)

      return {
        dialog
      }
    }
  }
</script>
