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
        <v-toolbar-title class="modal-title">알림 설정</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="text-info-grey my-4">
            예정일이 다가오면 알려드릴게요.<br />
            언제부터 알려드릴까요?
          </div>
          <div class="tabs-simple2 gap">
            <v-btn
              variant="text"
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

      <v-card-actions>
        <v-btn height="48px" class="bdr-8 btn-yellow" block>확인</v-btn>
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
          text: '1일 전'
        },
        {
          value: 2,
          text: '3일 전'
        },
        {
          value: 3,
          text: '7일전'
        },
        {
          value: 4,
          text: '알림없음'
        }
      ])

      return {
        dialog,
        selBtn,
        btns
      }
    }
  }
</script>
