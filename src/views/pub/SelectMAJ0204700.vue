<template>
  <v-dialog
    activator
    :v-model="`v-model`"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">프로필 선택</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        />
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <v-btn variant="text" block class="btn-list-block">사진 촬영</v-btn>
          <v-btn variant="text" block class="btn-list-block"
            >앨범에서 선택</v-btn
          >
          <v-btn
            variant="text"
            block
            class="btn-list-block"
            @click="$emit('showProfile'), $emit('close')"
            >프로필 이미지 선택</v-btn
          >
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    props: ['title'],
    emits: ['close', 'showProfile'],

    setup() {
      return {}
    }
  }
</script>
