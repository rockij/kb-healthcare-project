<template>
  <v-dialog v-model="dialog" class="modal-dialog common-popup">
    <v-card>
      <div class="modal-body pa-6">
        <div class="medi-subtit">찾으시는 영양제가 맞나요?</div>
        <div class="medi-img-bg mt-6">
          <img src="@/assets/images/icon-medi-searched.svg" alt="" />
        </div>
        <div class="pt-6">
          <div class="medi-co">(주) 텔콘알에프제약</div>
          <div class="medi-name">경방이진탕정</div>
        </div>
      </div>
      <v-card-actions class="d-flex">
        <v-btn
          variant="outlined"
          height="46"
          class="btn-cancel common-cancel"
          @click="$emit('close')"
          >취소</v-btn
        >
        <v-btn height="46" class="bdr-8 btn-yellow" @click="$emit('close')"
          >확인</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'
  export default {
    emits: ['close'],
    setup(context) {
      const { emit } = context
      const dialog = ref(false)
      return {
        dialog
      }
    }
  }
</script>
