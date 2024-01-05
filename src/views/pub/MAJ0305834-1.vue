<template>
  <div class="contents">
    <v-btn class="px-3" @click="dialog = true"> 기기연결 안내 열기 </v-btn>
  </div>
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
        <v-toolbar-title class="modal-title"
          >검진결과 연동 안내</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn
          icon
          dark
          class="btn-modal-close"
          @click="dialog = false"
          title="팝업닫기"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-0">
        <div class="flex-shrink-0 modal-body-container px-6">
          <div class="device-nodata mb-6">
            <img src="/assets/images/icon-nodata-lifelog.svg" alt="" />
            <div class="device-title pt-4">시간이 다소 걸릴 수 있어요</div>
            <div class="device-desc pt-1">조금만 기다려주세요</div>
          </div>
          <Vue3Lottie animationLink="/assets/images/DeviceConnection.json" />
        </div>
      </div>

      <v-card-actions>
        <v-btn height="48" class="bdr-8 btn-yellow" block>취소</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)

      return {
        dialog
      }
    }
  }
</script>
