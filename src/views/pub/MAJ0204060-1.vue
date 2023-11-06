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
        <v-toolbar-title class="modal-title">기간선택</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body period-modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="tabs-simple period-select-tab">
            <v-btn
              variant="text"
              height="56px"
              class="fs-16"
              v-for="btn in btns"
              :key="btn.value"
              :aria-selected="selBtn === btn.value"
              @click="selBtn = btn.value"
              >{{ btn.text }}</v-btn
            >
          </div>
        </div>
      </div>

      <v-card-actions class="review-v-card">
        <!-- 기간 선택 여부로 disabled 처리 -->
        <v-btn height="48px" class="bdr-16 btn-yellow" block disabled>확인</v-btn>
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