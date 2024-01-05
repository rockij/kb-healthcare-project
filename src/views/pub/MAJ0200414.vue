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
        <v-toolbar-title class="modal-title"
          >건강 기록 관리 현황</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <!-- 12-21 overflow-hidden 삭제 -->
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <HealthReport type="popup" />
        </div>
      </div>

      <v-card-actions>
        <v-btn height="48" class="bdr-8 btn-yellow" block>확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import HealthReport from './HealthReport.vue'

  import { ref } from 'vue'

  export default {
    components: {
      HealthReport
    },
    setup() {
      const dialog = ref(true)
      return {
        dialog
      }
    }
  }
</script>
