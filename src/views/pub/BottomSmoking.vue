<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">흡연</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <CountList v-for="list in lists" :key="list.id" :text="list.text" />
        </div>
      </div>

      <v-card-actions>
        <v-btn height="48" class="bdr-8 btn-yellow" block>저장하기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import CountList from '@/views/pub/MAJ0202963-1.vue'
  import { ref, reactive, computed } from 'vue'

  export default {
    components: {
      CountList
    },
    setup() {
      const dialog = ref(true)
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
        lists
      }
    }
  }
</script>
