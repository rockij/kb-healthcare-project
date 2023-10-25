<template>
  <!--contents-->
  <div class="contents">
    <v-dialog
      activator
      v-model="dialog"
      fullscreen
      :scrim="true"
      transition="dialog-bottom-transition"
      class="modal-bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props"> Open Dialog </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="white" height="auto">
          <v-toolbar-title class="modal-title">TITLE</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false" class="btn-modal-close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="modal-body">
          <div class="flex-shrink-0 modal-body-container">내용</div>
        </div>

        <v-card-actions>
          <v-btn height="48px" class="bdr-8 btn-yellow" block>Button</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!--//contents-->
</template>

<script>
  import router from '@/router'
  import { ref, watch } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)
      const notifications = ref(false)
      const sound = ref(true)
      const widgets = ref(false)

      return { dialog, notifications, sound, widgets }
    }
  }
</script>
