<template>
  <div class="contents">
    <v-dialog v-model="dialog" class="modal-dialog common-popup">
      <v-card>
        <div class="modal-body">
          <div class="answer-items">
            <v-avatar size="100" color="#F8F8F8">
              <template v-if="isWin">축하</template>
              <template v-else>아쉬움</template>
            </v-avatar>
            <template v-if="isWin">
              <div class="text-point type-1 my-4">축하합니다</div>
              <div v-html="evtCase"></div>
              <div class="">
                지급된 선물은 선물함에서<br />
                확인 할 수 있습니다.
              </div>
            </template>
            <template v-else>
              <div class="text-point type-1 my-4">아쉬워요</div>
              <div>선착순 인원이 다 찼어요</div>
              <div class="">다음 이벤트를 기대해주세요</div>
            </template>
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
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const isWin = ref(true)
      const dialog = ref(true)
      return {
        isWin,
        dialog
      }
    }
  }
</script>
