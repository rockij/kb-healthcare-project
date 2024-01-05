<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">음주</v-toolbar-title>
        <v-btn
          icon
          dark
          @click="$emit('close')"
          class="btn-modal-close"
          title="팝업닫기"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container pt-7">
          <!-- 맥주 -->
          <div class="d-flex align-center justify-space-between">
            <h4 class="fs-20 font-weight-bold">맥주</h4>
            <strong>총 7,580ml</strong>
          </div>
          <v-divider
            class="border-opacity-100 mt-2"
            :thickness="1"
            color="#666"
          />
          <div class="d-flex align-center mt-4">
            <span class="text-grey fs-14">잔 (500ml)</span>
            <CountList class="ml-auto" style="flex: 0 0 9.125rem" />
          </div>
          <div class="d-flex align-center mt-4">
            <span class="text-grey fs-14">캔 (330ml)</span>
            <CountList class="ml-auto" style="flex: 0 0 9.125rem" />
          </div>
          <div class="d-flex align-center mt-4">
            <span class="text-grey fs-14">병 (640ml)</span>
            <CountList class="ml-auto" style="flex: 0 0 9.125rem" />
          </div>
          <!-- //맥주 -->

          <!-- 소주 -->
          <div class="d-flex align-center justify-space-between mt-8">
            <h4 class="fs-20 font-weight-bold">소주</h4>
            <strong>총 7,580ml</strong>
          </div>
          <v-divider
            class="border-opacity-100 mt-2"
            :thickness="1"
            color="#666"
          />
          <div class="d-flex align-center mt-4">
            <span class="text-grey fs-14">잔 (500ml)</span>
            <CountList class="ml-auto" style="flex: 0 0 9.125rem" />
          </div>
          <div class="d-flex align-center mt-4">
            <span class="text-grey fs-14">병 (640ml)</span>
            <CountList class="ml-auto" style="flex: 0 0 9.125rem" />
          </div>
          <!-- //소주 -->

          <!-- 청주 -->
          <div class="d-flex align-center justify-space-between mt-8">
            <h4 class="fs-20 font-weight-bold">청주</h4>
            <v-btn
              variant="flat"
              rounded="lg"
              height="32"
              color="#F2F4F6"
              class="text-primary px-3 ml-2 fs-13"
              >추가하기</v-btn
            >
          </div>
          <v-divider
            class="border-opacity-100 mt-2"
            :thickness="1"
            color="#666"
          />
          <!-- //청주 -->

          <!-- 양주 -->
          <div class="d-flex align-center justify-space-between mt-8">
            <h4 class="fs-20 font-weight-bold">양주</h4>
            <v-btn
              variant="flat"
              rounded="lg"
              height="32"
              color="#F2F4F6"
              class="text-primary px-3 ml-2 fs-13"
              >추가하기</v-btn
            >
          </div>
          <v-divider
            class="border-opacity-100 mt-2"
            :thickness="1"
            color="#666"
          />
          <!-- //양주 -->

          <!-- 샴페인 -->
          <div class="d-flex align-center justify-space-between mt-8">
            <h4 class="fs-20 font-weight-bold">샴페인</h4>
            <v-btn
              variant="flat"
              rounded="lg"
              height="32"
              color="#F2F4F6"
              class="text-primary px-3 ml-2 fs-13"
              >추가하기</v-btn
            >
          </div>
          <v-divider
            class="border-opacity-100 mt-2"
            :thickness="1"
            color="#666"
          />
          <!-- //샴페인 -->

          <!-- 고량주 -->
          <div class="d-flex align-center justify-space-between mt-8">
            <h4 class="fs-20 font-weight-bold">고량주</h4>
            <v-btn
              variant="flat"
              rounded="lg"
              height="32"
              color="#F2F4F6"
              class="text-primary px-3 ml-2 fs-13"
              >추가하기</v-btn
            >
          </div>
          <v-divider
            class="border-opacity-100 mt-2"
            :thickness="1"
            color="#666"
          />
          <!-- //고량주 -->

          <!-- 기타 -->
          <div class="d-flex align-center justify-space-between mt-8">
            <h4 class="fs-20 font-weight-bold">기타</h4>
            <v-btn
              variant="flat"
              rounded="lg"
              height="32"
              color="#F2F4F6"
              class="text-primary px-3 ml-2 fs-13"
              >추가하기</v-btn
            >
          </div>
          <v-divider
            class="border-opacity-100 mt-2"
            :thickness="1"
            color="#666"
          />
          <!-- //기타 -->

          <div class="btn-bottom">
            <div class="btn-area d-flex">
              <v-btn
                variant="text"
                height="48"
                class="bdr-8 btn-summit"
                @click="$emit('close')"
                >저장하기</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import CountList from '@/views/pub/MAJ0202986-1.vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import { ref } from 'vue'
  export default {
    components: {
      CountList,
      DialogSelectList
    },
    emits: ['close'],
    setup(props, context) {
      const { emit } = context
      const dialog = ref(false)
      return {
        dialog
      }
    }
  }
</script>
