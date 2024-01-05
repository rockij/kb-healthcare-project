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
            >즐겨먹는 음식 영양성분 확인하기</v-toolbar-title
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
            <div class="challenge-section-spot">
              <div class="title-area">
                <p class="subTit-01">
                  다음 중 당류 함량이 낮은<br />
                  영양성분표를 고르세요!
                </p>
              </div>
            </div>
            <div class="challenge-section-content no-division">
              <div class="certification-area performance-status">
                <div class="list-thumb">
                  <ul class="quiz-list">
                    <!-- X 답안 영역 -->
                    <!-- <li class="wrong-list">
                      <v-btn variant="text" :href="'javsscript:;'">
                        <img src="/assets/images/icon-wrong-answer.svg" alt="" />
                      </v-btn>
                    </li> -->
                    <!-- // X 답안 영역 -->

                    <!-- O 답안 영역 -->
                    <li class="correct-list">
                      <v-btn variant="text">
                        <img
                          src="/assets/images/icon-correct-answer.svg"
                          alt=""
                        />
                      </v-btn>
                    </li>
                    <!-- // O 답안 영역 -->
                  </ul>
                </div>
                <div class="certification-answer-area correct-answer">
                  <img
                    src="/assets/images/icon-answer2_type2.svg"
                    alt="정답 아이콘 이미지"
                  />
                  <div class="answer-text-area">
                    <strong class="answer-title"> 짝짝짝, 정답입니다. </strong>
                    <p class="answer-text">
                      단백질 섭취가 부족하면 근육이 감소하여 요요의 원인이
                      됩니다. 따라서 근육의 유지 및 증가를 위해서는 단백질을
                      필수로 섭취해야 합니다.!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
