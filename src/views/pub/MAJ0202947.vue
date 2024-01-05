<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">검진일 입력</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="textfield-area body-calendar pt-0 d-flex">
            <v-text-field
              class="input-basic textfield-default suffix"
              :class="name3 ? 'hasData' : ''"
              label="병원명"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="병원 입력"
              v-model="name3"
              clearable
            ></v-text-field>

            <v-text-field
              class="input-basic textfield-default select-field"
              :class="name2 ? 'hasData' : ''"
              label="검진시간"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="검진 시간 입력"
              v-model="name2"
              readonly
              clearable
              @click="event"
            >
              <template v-slot:append-inner
                ><img src="/assets/images/icon-arrow-down2.svg" alt="검색"
              /></template>
            </v-text-field>

            <v-textarea
              class="textarea-basic textfield-default pb-0"
              persistent-counter
              :maxlength="5000"
              counter
              variant="outlined"
              no-resize
              placeholder="메모 입력"
            >
              <template v-slot:counter="{ value, max }">
                <span class="current-value">{{ value }}</span> /
                <span class="max-length">{{ max }}</span>
              </template>
            </v-textarea>
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn height="48" class="bdr-8 btn-yellow" block>확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, reactive, computed } from 'vue'

  export default {
    emits: ['close'],
    setup() {
      const dialog = true
      const name = ref('2023.06.21')
      const name2 = ref('오전 9시 30분')
      const name3 = ref('88')
      const name4 = ref('')
      const name5 = ref('')
      const modalListBtn = ref('')

      function event() {
        console.log('click')
      }
      return {
        modalListBtn,
        dialog,
        name,
        name2,
        name3,
        name4,
        name5,
        event
      }
    }
  }
</script>
