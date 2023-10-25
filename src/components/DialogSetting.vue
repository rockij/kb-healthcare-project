<template>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">설정</v-toolbar-title>
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
          <v-btn
            variant="text"
            block
            class="btn-list-block"
            @click="$emit('modifyClick')"
            v-if="btnModify"
          >
            수정
          </v-btn>
          <v-btn
            variant="text"
            block
            class="btn-list-block"
            @click="$emit('deleteClick')"
            v-if="btnDelete"
          >
            삭제
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'
  export default {
    props: {
      btnModify: {
        default: true,
        type: Boolean
      },
      btnDelete: {
        default: true,
        type: Boolean
      }
    },
    emits: ['close', 'modifyClick', 'deleteClick'],
    setup(props, context) {
      const { emit } = context
      const dialog = ref(false)
      return {
        dialog
      }
    }
  }
</script>
