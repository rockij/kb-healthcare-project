<template>
  <div class="contents">
    <v-btn @click="documentModal = true">full page madal</v-btn>
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="챌린지 인증 퀴즈형"
      v-model="documentModal"
      @close="documentModal = false"
      @clickfunction="clickfunction"
    >
      <template #modalBody>
        <div class="challenge-section-spot">
          <div class="title-area">
            <p class="subTit-01">
              다음 중 당류 함량이 낮은<br />
              영양성분표를 고르세요!
            </p>
          </div>
        </div>

        <div class="challenge-section-content no-division">
          <div class="certification-area">
            <div class="list-thumb">
              <ul class="quiz-list">
                <!-- 버튼 클릭 시 check-button 클래스 추가 -->
                <li class="wrong-list">
                  <v-btn variant="text">
                    <img src="/assets/images/icon-wrong-answer.svg" alt="" />
                  </v-btn>
                </li>
                <!-- 버튼 클릭 시 check-button 클래스 추가 -->
                <li class="correct-list check-button">
                  <v-btn variant="text">
                    <img src="/assets/images/icon-correct-answer.svg" alt="" />
                  </v-btn>
                </li>
              </ul>
            </div>
            <!-- 오답 wrong-answer / 정답 correct-answer 클래스 추가 -->
            <div class="certification-answer-area">
              <img src="/assets/images/icon-answer1.svg" alt="오답 아이콘 이미지" />
              <div class="answer-text-area">
                <strong class="answer-title"> 아쉽지만 오답입니다. </strong>
                <p class="answer-text">다시 한번만 더 생각해 보세요!</p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #modalButton>
        <div class="btn-area d-flex d-flex-wrap">
          <p class="completion-text">
            ‘확인' 버튼을 누르셔야 인증이 정상적으로 완료 됩니다.
          </p>
          <!-- 버튼 비활성 disabled 추가 -->
          <v-btn variant="text" height="56px" class="btn-summit" disabled
            >확인</v-btn
          >
        </div>
      </template>
    </DocumentModal>
    <!-- //TermsModal -->
  </div>
</template>

<script>
  import { ref } from 'vue'
  import DocumentModal from '@/components/DocumentModal.vue'
  export default {
    components: { DocumentModal },
    setup() {
      const documentModal = ref(false)
      const clickfunction = () => {
        console.log('click')
      }

      return {
        documentModal,
        clickfunction
      }
    }
  }
</script>