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
        <v-toolbar-title class="modal-title">조회 설정</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark class="btn-modal-close" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-0">
        <div class="flex-shrink-0 modal-body-container px-6">
          <div class="period-title">챌린지 종류</div>

          <div class="tabs-simple2 pt-2">
            <v-btn
              variant="text"
              class="fs-16"
              v-for="btn in btns"
              :key="btn.value"
              :aria-selected="selBtn === btn"
              @click="selBtn = btn"
              >{{ btn.text }}</v-btn
            >
          </div>

          <div class="period-title pt-6">기간 선택</div>
          <div class="tabs-simple2 pt-2">
            <v-btn
              variant="text"
              class="fs-16"
              v-for="btn2 in btns2"
              :key="btn2.value"
              :aria-selected="selBtn2 === btn2"
              @click="selBtn2 = btn2"
              >{{ btn2.text }}</v-btn
            >
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn height="48" class="bdr-8 btn-yellow" block @click="onClicked"
          >확인</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    emits: ['update', 'close'],
    setup(props, context) {
      const { emit } = context
      const dialog = ref(false)
      const selBtn = ref({})
      const selBtn2 = ref({})
      const btns = reactive([
        {
          value: 1,
          text: '전체'
        },
        {
          value: 2,
          text: '일반'
        },
        {
          value: 3,
          text: '전문가'
        }
      ])
      const btns2 = reactive([
        {
          value: 1,
          text: '하루'
        },
        {
          value: 2,
          text: '1주'
        },
        {
          value: 3,
          text: '2주'
        },
        {
          value: 4,
          text: '4주'
        },
        {
          value: 5,
          text: '6주'
        },
        {
          value: 6,
          text: '12주'
        }
      ])
      function onClicked() {
        emit('update', selBtn.value.text, selBtn2.value.text)
        console.log('selBtn', selBtn.value.text, selBtn2.value.text)
      }

      return {
        selBtn,
        selBtn2,
        btns,
        btns2,
        dialog,
        onClicked
      }
    }
  }
</script>
