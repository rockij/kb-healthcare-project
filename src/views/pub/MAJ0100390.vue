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
        <v-toolbar-title class="modal-title">챌린지</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark class="btn-modal-close" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-0">
        <div class="modal-body-container">
          <div class="chal-top-area">
            <div class="chal-title">
              오국민님! ‘수면시간 기록하기' To-do를 성공하셨네요
            </div>
            <div class="chal-date">2023년 10월 20일</div>
          </div>
          <div class="link-desc pt-4 pb-10">
            오국민 님! ‘수면시간 기록하기' To-do를 성공하셨네요. 지난주 오국민
            님의 취침 시간을 확인할 수 있어 반가웠어요. 평소 4시간 정도 수면을
            취하고 계신 것 같아요. 연구자들에 따르면 하루 6~8시간의 수면이
            필요하다고 해요. 수면시간 동안 우리 몸은 에너지를 비축하고, 두뇌는
            필요 없는 정보를 제거함으로써 새로운 공간을 만들기 때문이죠
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    emits: ['update', 'close'],
    setup(props, context) {
      const { emit } = context
      const dialog = ref(false)

      function onClicked() {
        emit('update')
      }

      return {
        dialog,
        onClicked
      }
    }
  }
</script>
