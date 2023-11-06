<template>
  <v-dialog
    activator
    :v-model="`v-model`"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
    @click:outside="$emit('close')"
  >
    <v-card>
      <slot name="modalHeader">
        <v-toolbar dark color="white" height="auto">
          <v-toolbar-title class="modal-title">{{
            modalTitle
          }}</v-toolbar-title>
          <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </slot>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <slot name="modalBody"></slot>
          <!-- btn-bottom -->
          <div class="btn-bottom" v-if="!bottomBtn">
            <div class="btn-area d-flex">
              <slot name="modalButton"></slot>
            </div>
          </div>
          <!-- //btn-bottom -->
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    props: ['modalTitle', 'bottomBtn'],
    emits: ['update', 'close', 'clickfunction'],
    setup() {
      return {}
    }
  }
</script>
