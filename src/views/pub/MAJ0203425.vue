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
        <v-toolbar-title class="modal-title">알림삭제</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark class="btn-modal-close" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-0">
        <div class="flex-shrink-0 modal-body-container pt-14 medi-del">
          <img src="@/assets/images/icon-medi-delete.svg" alt="" />
          <div>
            일시적인 중단이라면 <br />
            알림 중단 기능을 활용해 보세요
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn
          height="48"
          class="bdr-8 btn-yellow mt-6"
          block
          @click="onClicked"
          >삭제</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup(props, context) {
      const dialog = ref(false)
      const btns = reactive([
        {
          value: 1,
          text: '전체'
        },
        {
          value: 2,
          text: '의약폼'
        },
        {
          value: 2,
          text: '영양제'
        }
      ])
      function onClicked() {
        console.log('삭제')
      }

      return {
        btns,
        dialog,
        onClicked
      }
    }
  }
</script>
