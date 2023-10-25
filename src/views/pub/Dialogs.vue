<template>
  <div class="contents">
    <v-btn color="primary" @click="dialog = true"> Open Dialog </v-btn>
    <v-dialog v-model="dialog" class="modal-dialog">
      <v-card>
        <div class="modal-body">{contents}</div>
        <v-card-actions class="d-flex">
          <v-btn variant="outlined" height="46" class="btn-cancel"
            >Button</v-btn
          >
          <v-btn height="46" class="bdr-8 btn-yellow">Button</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const dialog = ref(false)
      return { dialog }
    }
  }
</script>
