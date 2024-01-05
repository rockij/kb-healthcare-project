<template>
  <!--contents-->
  <div class="contents">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="true"
      transition="dialog-bottom-transition"
      class="modal-bottom modal-body-check"
    >
      <v-card>
        <v-toolbar dark color="white" height="auto">
          <v-toolbar-title class="modal-title"
            >응원 메시지 남기기</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false" class="btn-modal-close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="modal-body">
          <div class="flex-shrink-0 modal-body-container">
            <div class="cheer-btn-wrap pt-2">
              <v-btn variant="flat" :ripple="false" class="btn-good">
                <img src="/assets/images/icon-good.png" alt="" />
                <p>최고야!</p>
              </v-btn>
              <v-btn variant="flat" :ripple="false" class="btn-sad" disabled>
                <img src="/assets/images/icon-sad.png" alt="" />
                <p>속상해~</p>
              </v-btn>
            </div>
            <div class="cheer-textarea-wrap pt-8">
              <div class="cheer-text">
                응원 메시지를 입력하세요
                <span class="cheer-text-s">(선택)</span>
              </div>
              <v-textarea
                class="textarea-basic textfield-default pt-2 mb-n6"
                persistent-counter
                :maxlength="50"
                counter
                variant="outlined"
                no-resize
                :placeholder="textareaValue"
              >
                <template v-slot:counter="{ value, max }">
                  <span class="current-value">{{ value }}</span> /
                  <span class="max-length">{{ max }}</span>
                </template>
              </v-textarea>
            </div>
          </div>
        </div>

        <v-card-actions>
          <v-btn
            height="48px"
            class="bdr-8 btn-yellow"
            block
            @click="dialog = false"
            >작성하기</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!--//contents-->
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const dialog = ref(true)
      const textareaValue = ref('오늘부턴 잘 챙겨먹어!')
      return {
        dialog,
        textareaValue
      }
    }
  }
</script>
