<template>
  <!--contents-->
  <div class="contents">
    <v-dialog
      activator
      v-model="dialog"
      fullscreen
      :scrim="true"
      transition="dialog-bottom-transition"
      class="modal-bottom modal-body-check"
    >
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props"> Open Dialog </v-btn>
      </template>

      <v-card>
        <v-toolbar dark color="white" height="auto">
          <v-toolbar-title class="modal-title"
            >점심 식후 10분간 산책하기</v-toolbar-title
          >
          <v-btn icon dark @click="dialog = false" class="btn-modal-close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="modal-body">
          <div class="flex-shrink-0 modal-body-container">
            <div class="auth-info">
              <span class="auth-info-time">09.19 오전 6:25</span>
              <v-chip label class="chip-default auth-info-chip">
                <span class="text-dot">완료</span>
              </v-chip>
            </div>
            <div class="img-box">
              <img
                src="/assets/images/img-sample-photo.png"
                alt=""
                class="bdr-8"
              />
            </div>
            <div class="delete-button-area">
              <v-btn
                variant="outlined"
                height="40"
                rounded="lg"
                class="btn-delete"
              >
                <template v-slot:prepend>
                  <img src="/assets/images/icon-delete2.svg" alt="" />
                </template>
                삭제하기
              </v-btn>
            </div>
          </div>
        </div>

        <v-card-actions>
          <v-btn
            height="48px"
            class="bdr-8 btn-yellow"
            block
            @click="dialog = false"
            >사진변경하기</v-btn
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
      const dialog = ref(false)
      return {
        dialog
      }
    }
  }
</script>
