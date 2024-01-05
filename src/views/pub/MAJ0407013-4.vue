<template>
  <div class="contents">
    <v-btn color="primary" @click="dialog = true"> 챌린지 연장 </v-btn>
    <v-dialog v-model="dialog" class="modal-dialog common-popup">
      <v-card>
        <div class="modal-body">
          챌린지를 연장 하시겠어요?
        </div>
        <v-card-actions class="d-flex">
          <v-btn
            variant="outlined"
            height="46"
            class="btn-cancel common-cancel"
            @click="dialog = false"
            >취소</v-btn
          >
          <v-btn height="46" class="bdr-8 btn-yellow" @click="dialog = false"
            >확인</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const dialog = ref(false)
      return { dialog }
    }
  }
</script>
