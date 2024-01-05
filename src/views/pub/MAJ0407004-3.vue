<template>
  <div class="contents">
    <v-btn @click="documentModal = true">full page madal</v-btn>
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="챌린지 인증 퀴즈형 - 정답"
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
            <div class="certification-answer-area correct-answer">
              <img src="/assets/images/icon-answer2_type2.svg" alt="정답 아이콘 이미지" />
              <div class="answer-text-area">
                <strong class="answer-title"> 짝짝짝, 정답입니다. </strong>
                <p class="answer-text">
                  단백질 섭취가 부족하면 근육이 감소하여 요요의 원인이 됩니다.
                  따라서 근육의 유지 및 증가를 위해서는 단백질을 필수로 섭취해야
                  합니다.!
                </p>
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
          <v-btn variant="text" height="56px" class="btn-summit">확인</v-btn>
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
