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
            <div class="certification-area">
              <strong class="title-02"
                >술자리에서 물 많이 마시기 실천하셨나요?</strong
              >
              <div class="list-thumb">
                <ul class="answer-list">
                  <!-- 답변 선택하면 li에 클래스 select -->
                  <li class="">
                    <v-btn variant="text">
                      <img
                        src="/assets/images/img-auth-answer1.png"
                        class="select-img"
                        alt="아니오 이미지"
                      />
                      <strong>아니오</strong>
                    </v-btn>
                  </li>
                  <!-- 답변 선택하면 li에 클래스 select -->
                  <li class="select">
                    <v-btn variant="text">
                      <img
                        src="/assets/images/img-auth-answer2.png"
                        class="select-img"
                        alt="네 이미지"
                      />
                      <strong>네</strong>
                    </v-btn>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <v-card-actions>
          <v-btn
            height="48px"
            class="bdr-8 btn-yellow"
            block
            @click="dialog = false"
            >수정하기</v-btn
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
