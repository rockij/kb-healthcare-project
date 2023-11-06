<template>
    <v-dialog
        activator
        v-model="dialogCode"
        fullscreen
        :scrim="true"
        transition="dialog-bottom-transition"
        class="modal-bottom"
    >
        <v-card>
            <v-toolbar dark color="white" height="auto">
            <v-toolbar-title class="modal-title">초대코드입력</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="dialogCode = false" class="btn-modal-close">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            </v-toolbar>

            <div class="modal-body">
                <div class="flex-shrink-0 modal-body-container">
                    <v-text-field
                        class="input-hint textfield-default"
                        v-model="caption"
                        label="초대 코드 입력"
                        required
                        persistent-placeholder
                        variant="outlined"
                        placeholder="초대코드를 입력해주세요"
                        clearable
                        ></v-text-field>
                </div>
            </div>

            <v-card-actions>
                <v-btn height="48px" @click="dialogCode = false" class="bdr-8 btn-yellow" block>확인</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const dialogCode = ref(true)

      return { dialogCode }
    }
  }
</script>

<style lang="scss" scoped></style>
