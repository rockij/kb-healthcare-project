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
        <v-toolbar-title class="modal-title">조회기간 설정</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark class="btn-modal-close" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-0">
        <div class="flex-shrink-0 modal-body-container px-6">
          <div class="period-title">기간선택</div>

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
      const btns = reactive([
        {
          value: 1,
          text: '오늘'
        },
        {
          value: 2,
          text: '1주일'
        },
        {
          value: 2,
          text: '1개월'
        },
        {
          value: 2,
          text: '6개월'
        }
      ])
      function onClicked() {
        emit('update', selBtn.value.text)
        console.log('selBtn', selBtn.value.text)
      }

      return {
        selBtn,
        btns,
        dialog,
        onClicked
      }
    }
  }
</script>
