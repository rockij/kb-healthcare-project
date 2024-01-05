<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">기록수정</v-toolbar-title>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <CountList
            v-for="list in lists"
            :key="list.id"
            :text="list.text"
            class="mb-4"
          />
          <div class="btn-bottom">
            <div class="btn-area d-flex">
              <v-btn
                variant="text"
                height="48"
                class="bdr-8 btn-summit"
                @click="$emit('close')"
                >저장하기</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import CountList from '@/views/pub/MAJ0202963-1.vue'
  import { ref } from 'vue'
  export default {
    components: {
      CountList
    },
    emits: ['close', 'update'],
    setup(props, context) {
      const { emit } = context
      const dialog = ref(false)
      function onClicked(btn) {
        emit('update', btn)
      }

      const lists = ref([
        {
          id: 1,
          text: '일반담배'
        },
        {
          id: 2,
          text: '권련형 전자담배'
        },
        {
          id: 3,
          text: '액상형 전자담배'
        }
      ])

      return {
        dialog,
        onClicked,
        lists
      }
    }
  }
</script>
