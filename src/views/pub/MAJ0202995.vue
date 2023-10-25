<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">혈압</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="textfield-area body-calendar pt-4 d-flex">
            <v-text-field
              class="input-basic textfield-default input-calendar"
              v-model="name"
              label="측정 날짜"
              required
              persistent-placeholder
              variant="outlined"
              append-inner-icon="mdi-calendar"
              @click="event"
            >
            </v-text-field>

            <v-text-field
              class="input-basic textfield-default select-field"
              :class="name2 ? 'hasData' : ''"
              label="운동 시간"
              required
              persistent-placeholder
              variant="outlined"
              v-model="name2"
              readonly
              clearable
              @click="event"
            >
              <template v-slot:append-inner
                ><img src="@/assets/images/icon-arrow-down2.svg" alt="검색"
              /></template>
            </v-text-field>

            <v-text-field
              class="input-basic textfield-default suffix"
              :class="name3 ? 'hasData' : ''"
              label="수축기"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="120"
              v-model="name3"
              clearable
            >
              <template v-slot:append-inner>mmHg</template>
            </v-text-field>

            <v-text-field
              class="input-basic textfield-default suffix"
              :class="name4 ? 'hasData' : ''"
              label="이완기"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="120"
              v-model="name4"
              clearable
            >
              <template v-slot:append-inner>mmHg</template>
            </v-text-field>

            <v-text-field
              class="input-basic textfield-default suffix"
              :class="name5 ? 'hasData' : ''"
              label="맥박 (선택)"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="120"
              v-model="name5"
              clearable
            >
              <template v-slot:append-inner>bpm</template>
            </v-text-field>
          </div>
        </div>
      </div>

      <div class="btn-bottom">
        <div class="btn-area d-flex">
          <v-btn
            variant="text"
            height="56"
            class="btn-summit"
            @click="$emit('close')"
            >저장하기</v-btn
          >
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    props: ['modal'],
    emits: ['update', 'close'],
    setup() {
      const dialog = false
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
