<template>
  <v-dialog
    v-model="dialog"
    class="modal-dialog common-popup"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-spacer></v-spacer>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        >
          <v-icon />
        </v-btn>
      </v-toolbar>
      <div class="modal-body px-6 pb-6 pt-0">
        <div class="cheer-msg-wrap">
          <!-- 최고야 img -->
          <img src="/assets/images/icon-good.png" alt="" />
          <!-- 속상해 img -->
          <!-- <img src="/assets/images/icon-sad.png" alt="" /> -->
          <p>최고야</p>
        </div>
        <div class="cheer-text-wrap mt-4">
          <div class="msg-top">
            <div class="msg-name">
              <span class="text-blue">닉네임은열글자입니다</span>님
            </div>
            <div class="msg-time">15분전</div>
          </div>

          <div class="msg pt-2">메시지 영역의 최대 글자수는 50글자 입니다</div>
        </div>
      </div>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          variant="flat"
          color="#3B4A65"
          class="btn-close"
          @click="dialog = false"
        >
          <img src="/assets/images/icon-close.svg" alt="" />
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const dialog = ref(true)
      return {
        dialog
      }
    }
  }
</script>
