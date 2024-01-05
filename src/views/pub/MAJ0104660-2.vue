<template>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct img-popup"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-spacer></v-spacer>
        <v-btn icon dark class="btn-modal-close" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-0">
        <div class="img-full">
          <img src="/assets/images/img-food.png" alt="" />
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
      const dialog = ref(true)

      return {
        dialog
      }
    }
  }
</script>
