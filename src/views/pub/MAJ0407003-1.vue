<template>
  <div class="contents">
    <v-btn @click="documentModal = true">full page madal</v-btn>
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="챌린지 인증 답변형"
      v-model="documentModal"
      @close="documentModal = false"
      @clickfunction="clickfunction"
    >
      <template #modalBody>
        <div class="challenge-section-spot answer-spot">
          <div class="title-area">
            <p class="subTit-01">
              술 자리에서 물 많이 마시기<br />
              실천 하셨나요?
            </p>
            <p class="desc text-grey">
              답변을 하시면 인증이 완료됩니다.<br />
              솔직하게 답해 볼까요?
            </p>
          </div>
        </div>

        <div class="challenge-section-content no-division">
          <div class="certification-area">
            <div class="list-thumb">
              <ul class="answer-list">
                <!-- 답변 선택하면 li에 클래스 select / 답변 미선택 not-select 추가 -->
                <li class="select">
                  <v-btn variant="text">
                    <!--  -->
                    <img
                      src="/assets/images/img-auth-answer1.png"
                      class="select-img"
                      alt="아니오 이미지"
                    />
                    <img
                      src="/assets/images/img-auth-answer1_type2.png"
                      class="select-img not-img"
                      alt="아니오 이미지"
                    />
                    <strong>아니오</strong>
                  </v-btn>
                </li>
                <!-- 답변 선택하면 li에 클래스 select / 답변 미선택 not-select 추가 -->
                <li class="not-select">
                  <v-btn variant="text">
                    <!-- 선택 안되었을때 이미지명에 _type2 추가 -->
                    <img
                      src="/assets/images/img-auth-answer2.png"
                      class="select-img"
                      alt="네 이미지"
                    />
                    <img
                      src="/assets/images/img-auth-answer2_type2.png"
                      class="select-img not-img"
                      alt="네 이미지"
                    />
                    <strong>네</strong>
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