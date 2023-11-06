<template>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">리뷰 작성</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="challenge-section-content review-content">
            <div class="review-write-point">
              <span class="review-point">
                <button type="button" class="button-point on">
                  <span class="blind">별점 1개 선택</span>
                </button>
                <button type="button" class="button-point on">
                  <span class="blind">별점 2개 선택</span>
                </button>
                <button type="button" class="button-point">
                  <span class="blind">별점 3개 선택</span>
                </button>
                <button type="button" class="button-point">
                  <span class="blind">별점 4개 선택</span>
                </button>
                <button type="button" class="button-point">
                  <span class="blind">별점 5개 선택</span>
                </button>
              </span>
              <!-- 리뷰 작성 활성화 시 hidden-text 클래스 추가 --> 
              <p class="review-point-text ">별점을 선택해주세요</p>
            </div>
            <!-- 텍스트 입력 시 v-counter 내부 span에 input-counter 클래스 추가 -->
            <v-textarea
              class="textarea-basic textfield-default "
              persistent-counter
              v-model="textValue"
              placeholder="챌린지를 하면서 좋았던 점과 아쉬웠던 점을 적어 주세요."
              :maxlength="2000"
              :counter="20"
              variant="outlined"
              no-resize
            ></v-textarea>
            <div class="list-circle">
              <ul>
                <li>음란/욕설/비방 또는 개인정보가 포함된 글은 관리자에 의해 임의 삭제될 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <v-card-actions class="review-v-card">
        <!-- 별점과 리뷰 작성 여부로 disabled 처리 -->
        <v-btn height="48px" class="bdr-16 btn-yellow" block disabled>등록하기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)
      const textValue = ref('')
      
      return {
        dialog,
        textValue
      }
    }
  }
</script>