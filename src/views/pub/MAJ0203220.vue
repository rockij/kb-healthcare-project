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
        <v-toolbar-title class="modal-title">체성분</v-toolbar-title>
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
              class="input-basic textfield-default select-field type-btn hasData"
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
                ><img src="/assets/images/icon-arrow-down2.svg" alt="검색"
              /></template>
            </v-text-field>

            <v-text-field
              class="input-basic textfield-default suffix"
              :class="name3 ? 'hasData' : ''"
              label="체중"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="체중 입력"
              v-model="name3"
              clearable
            >
              <template v-slot:append-inner>kg</template>
            </v-text-field>

            <v-text-field
              class="input-basic textfield-default suffix"
              :class="name4 ? 'hasData' : ''"
              label="허리둘레"
              required
              persistent-placeholder
              variant="outlined"
              placeholder="허리둘레 입력"
              v-model="name4"
              clearable
            >
              <template v-slot:append-inner>inch</template>
            </v-text-field>

            <v-text-field
              class="input-basic textfield-default suffix input-bg"
              :class="name5 ? 'hasData' : ''"
              label="허리둘레"
              required
              persistent-placeholder
              variant="outlined"
              :placeholder="name5 ? '' : '허리둘레를 입력 시 cm 자동 변환'"
              v-model="name5"
              readonly
            >
              <template v-slot:append-inner v-if="name5"> cm </template>
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
      const name3 = ref('100')
      const name4 = ref('')
      const name5 = ref('')

      function event() {
        console.log('click')
      }
      return {
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
