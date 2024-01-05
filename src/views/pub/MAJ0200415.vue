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
        <v-toolbar-title class="modal-title">건강검진결과 연결</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark class="btn-modal-close" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-0 pt-8">
        <div class="flex-shrink-0 modal-body-container px-6 link-bottom">
          <img src="/assets/images/icon-check-link.svg" alt="" />
          <div class="link-title pt-4">건강검진결과를 연결해보세요</div>
          <div class="link-desc pt-1">
            간편하게 건강검진 이력을 불러와서 <br />
            맞춤 건강관리 하세요
          </div>
          <v-btn variant="flat" density="compact" class="btn-small-gray mt-8"
            >건강설문으로 대신하기</v-btn
          >
        </div>
      </div>

      <v-card-actions class="link-btn-wrap pt-0">
        <div class="text-right w-100">
          <div class="tooltip-balloon arrow-bottom icon-walk">1,000p</div>
        </div>
        <v-btn
          height="48"
          class="bdr-8 btn-yellow d-flex"
          block
          @click="onClicked"
          >건강검진결과 연결하기</v-btn
        >
      </v-card-actions>
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
