<template>
  <!-- 퀴즈 축하 팝업 -->
  <v-dialog v-model="dialog" class="modal-dialog common-popup">
    <v-card>
      <div class="modal-body pb-6">
        <div class="answer-items">
          <v-avatar size="100" color="transparent">
            <img src="/assets/images/img-correct.svg" v-if="answer" />
            <img src="/assets/images/img-wrong.svg" v-else />
          </v-avatar>
          <template v-if="answer">
            <div class="text-point type-1 my-4">정답입니다</div>
            <!-- <div>1,000P가 지급되었습니다</div> -->
          </template>
          <template v-else>
            <div class="text-point type-1">정답이 아닙니다</div>
            <div class="fs-18">
              1번의 기회가 더 있으니<br />바로 도전해 보세요
            </div>
          </template>
        </div>
      </div>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          variant="flat"
          color="#3B4A65"
          class="btn-close"
          @click="$emit('update')"
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
    emits: ['update', 'close'],
    props: ['answer'],
    setup(props, context) {
      const { emit } = context
      const dialog = ref(true)
      return {
        dialog
      }
    }
  }
</script>
