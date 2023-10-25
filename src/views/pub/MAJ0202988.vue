<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    persistent
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-spacer></v-spacer>
        <v-btn
          icon
          dark
          class="btn-modal-close"
          title="팝업닫기"
          @click="$emit('close')"
        />
      </v-toolbar>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container text-center">
          <v-img
            src="/src/assets/images/icon-success.svg"
            width="60"
            height="60"
            alt=""
            class="d-inline-block"
          />
          <h4 class="fs-26 font-weight-700 mt-6">축하합니다</h4>
          <div class="countdown-flip type mt-4">
            <div class="clock">
              <div class="digit">
                <div class="num">45</div>
              </div>
              일
            </div>
            <div class="clock">
              <div class="digit">
                <div class="num">24</div>
              </div>
              시
            </div>
            <div class="clock">
              <div class="digit">
                <div class="num">00</div>
              </div>
              분
            </div>
            <div class="clock">
              <div class="digit">
                <div class="num">00</div>
              </div>
              초
            </div>
          </div>
          <p class="mt-5 text-grey fs-18">
            2023.08.25부터 09.25 까지<br />
            금주에 성공하셨어요!
          </p>
          <div class="btn-bottom">
            <div class="btn-area d-flex">
              <v-btn
                variant="text"
                height="56"
                class="btn-summit"
                @click="$emit('close')"
                >확인</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import { ref } from 'vue'
  export default {
    emits: ['close', 'update'],
    setup(props, context) {
      const { emit } = context
      const dialog = ref(false)
      function onClicked(btn) {
        emit('update', btn)
      }
      return {
        dialog,
        onClicked
      }
    }
  }
</script>
