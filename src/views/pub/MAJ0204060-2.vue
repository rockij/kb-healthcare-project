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
        <v-toolbar-title class="modal-title">플랫폼 연결 안내</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body platform-modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="platform-content">
            <strong class="platform-content-title">서비스 이용에 불편을 드려 죄송합니다.</strong>
            <p class="platform-content-text">연결하시겠어요?</p>
          </div>
        </div>
      </div>

      <v-card-actions class="review-v-card">
        <v-btn height="48px" class="bdr-8 btn-yellow" block>연결하기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)
      const selBtn = ref()
      const btns = reactive([
        {
          value: 1,
          text: '하루'
        },
        {
          value: 2,
          text: '2주'
        },
        {
          value: 3,
          text: '4주'
        }
      ])
      return {
        dialog,
        btns,
        selBtn
      }
    }
  }
</script>