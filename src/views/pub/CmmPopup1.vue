<template>
  <div class="contents">
    <v-btn color="primary" @click="dialog = true"> 알림팝업_기본타입1 </v-btn>
    <v-dialog v-model="dialog" class="modal-dialog common-popup">
      <v-card>
        <div class="modal-body">
          홍길동님 정보가 정확하지 않아요 <br />
          맞게 썼는지 다시 확인해 주세요
        </div>
        <v-card-actions class="d-flex">
          <!-- <v-btn variant="outlined" height="46" class="btn-cancel"
            >Button</v-btn
          > -->
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
