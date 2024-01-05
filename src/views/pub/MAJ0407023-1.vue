<template>
  <div class="contents">
    <v-btn @click="documentModal = true">full page madal</v-btn>
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="챌린지 인증 건강정보 열람 인증형"
      v-model="documentModal"
      @close="documentModal = false"
      @clickfunction="clickfunction"
    >
      <template #modalBody>
        <div class="health-info full-health-info">
          <div class="challenge-section-spot">
            <div class="title-area">
              <p class="subTit-01">
                생활습관만 바꿔도 위험 ↓<br />
                지켜야 할 9가지 수칙
              </p>
            </div>
          </div>

          <div class="challenge-section-content no-division">
            <div class="certification-area">
              <div class="img-box">
                <img
                  src="/assets/images/img-sample-photo.png"
                  alt="챌린지 인증 사진형 샘플"
                />
              </div>
              <!-- CMS로 등록되는 텍스트 영역 문장의 구분을 p태그로 정의 등록되는 구조에 따라 변경 가능성 있음 -->
              <div class="content-text">
                <p>
                  비만은 몸이 활동하면서 사용한 열량보다 음식으로 섭취한 열량이 더
                  많기 때문에 발생합니다. 그러면 비만은 왜 생길까요? ① 현대인은 대부분
                  앉아서 공부하거나 일을 해요. 활동이 줄어 소비하는 칼로리가
                  줄어들었지만 음식 섭취는 줄지 않았기 때문이지요. ② 스트레스로
                  자극적이고 열량이 높은 음식을 찾아요. 많은 사람들이 폭식증으로
                  비만이 되고 있습니다. ③ 가족 구성원 중 비만이 있으면 생활습관도
                  비슷해 비만이 될 수 있어요. ④ 갑상선기능저하증, 쿠싱증후군, 우울증을
                  앓고 있거나 스테로이드, 항우울제를 복용 중이면 비만이 발생할
                  가능성이 높아요.
                </p>
                <p>
                  비만은 고지혈증, 고혈압, 심근경색 등 심혈관계 질환과 당뇨병,
                  뇌졸중의 원인이 되며 과체중으로 관절에 부담이 가서 관절염 발생
                  위험도 높아요. 또한 수면 무호흡증이 발생할 수 있습니다.
                </p>
              </div>
              <!-- //CMS로 등록되는 텍스트 영역 -->
              <p class="completion-text">
                ‘확인' 버튼을 누르셔야 인증이 정상적으로 완료 됩니다.<br />
                스크롤 하여 정보를 모두 확인하시면 누를 수 있어요!
              </p>
            </div>
          </div>
        </div>
      </template>
      <template #modalButton>
        <div class="btn-area d-flex">
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
