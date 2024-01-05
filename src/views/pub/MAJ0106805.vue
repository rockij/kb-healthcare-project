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
            <v-toolbar-title class="modal-title">검사목록확인</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog = false" class="btn-modal-close">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            </v-toolbar>

            <div class="modal-body">
                <div class="flex-shrink-0 modal-body-container">
                    <div class="per-test-list-chk">
                        <p>누가 나를<br> 검사했는지 볼까요?</p>
                    </div>
                </div>
            </div>

            <v-card-actions class="m-flex">
                <v-btn height="48px" @click="dialog = false" class="bdr-8 btn-cancel common-cancel" block>다음에</v-btn>
                <v-btn height="48px" @click="dialog = false" class="bdr-8 btn-yellow" block>확인</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)

      return { dialog }
    }
  }
</script>

<style lang="scss" scoped></style>
