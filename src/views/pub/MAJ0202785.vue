<template>
  <!-- 퀴즈 축하 팝업 -->
  <v-dialog v-model="dialog" class="modal-dialog common-popup">
    <v-card>
      <div class="modal-body">
        <div class="answer-items">
          <v-avatar size="100" color="#F8F8F8">
            <template v-if="answer">정답 이미지</template>
            <template v-else>오답 이미지</template>
          </v-avatar>
          <template v-if="answer">
            <div class="text-point type-1 my-4">정답입니다</div>
            <div>1,000P가 지급되었습니다</div>
          </template>
          <template v-else>
            <div class="text-point type-1 my-4">오답입니다</div>
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
          <img src="@/assets/images/icon-close.svg" alt="" />
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
