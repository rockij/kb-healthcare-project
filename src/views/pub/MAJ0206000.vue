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
        <v-toolbar-title class="modal-title">기기연결 안내</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark class="btn-modal-close" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-0">
        <div class="flex-shrink-0 modal-body-container px-6">
          <div class="device-nodata">
            <img src="/assets/images/icon-nodata-lifelog.svg" alt="" />
            <div class="device-title pt-4">기기 등록이 필요합니다</div>
            <div class="device-desc pt-1">
              바로 연결해서 간편하게 측정하세요
            </div>
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn
          height="48"
          class="bdr-8 btn-yellow"
          block
          @click="$emit('close')"
          >연결하기</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const dialog = ref(false)

      return {
        dialog
      }
    }
  }
</script>
