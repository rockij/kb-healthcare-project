<template>
  <div class="contents">
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="혈압 측정 방법"
      v-model="documentModal"
      @close="documentModal = false"
      @clickfunction="clickfunction"
    >
      <template #modalBody>
        <h3 class="title-26">올바른 혈압 측정 방법</h3>
        <dl class="bullet-contents">
          <dt class="bullet-contents-title">준비 단계</dt>
          <dd class="bullet-contents-text">
            <ul class="list-circle">
              <li class="fs-16">
                혈압 측정 전 최소 5분 동안 안정하며, 조용한 환경에서 측정한다.
              </li>
              <li class="fs-16">
                측정 30분 전 카페인 섭취, 운동, 흡연, 목욕, 음주를 삼간다.
              </li>
              <li class="fs-16">혈압 측정 중에는 이야기를 하지 않는다.</li>
            </ul>
          </dd>
        </dl>

        <dl class="bullet-contents">
          <dt class="bullet-contents-title">측정자세</dt>
          <dd class="bullet-contents-text">
            <v-img
              aspect-ratio="16/9"
              cover
              src="/assets/images/img-bloodPressure.svg"
            ></v-img>
            <ul class="list-circle mt-4">
              <li class="fs-16">등은 바르게 기대고 앉아서 측정한다.</li>
              <li class="fs-16">
                양발은 팽팽한 평지 위에 내리고, 발을 꼬지 않는다.
              </li>
              <li class="fs-16">
                위팔을 테이블에 높고 와이셔츠 정도의 얇은 옷 위에서 측정한다.
              </li>
            </ul>
          </dd>
        </dl>

        <dl class="bullet-contents">
          <dt class="bullet-contents-title">측정방법</dt>
          <dd class="bullet-contents-text">
            <ul class="list-circle">
              <li class="fs-16">
                측정기기 : 검증된 위판 자동혈압계를 이용한다.
              </li>
              <li class="fs-16">
                커프 선택: 사용 설명서에서 추천하는 크기의 커프를 사용한다.
              </li>
              <li class="fs-16">
                커프 감기 : 심장 높이를 맞추기 위하여 커프의 하단이 사용자의
                팔꿈치에서 2~3cm 위에 위치하도록 커프를 감는다.
              </li>
              <li class="fs-16">
                측정 시각: 아침혈압은 아침 기상 후 1시간 이내에 용변을 본 후
                식사를 하기 전, 그리고 아침 혈압약을 복용하기 전에 측정해야
                한다.
              </li>
              <li class="fs-16">저녁혈압은 취침 1시간 이내에 축정해야 한다.</li>
              <li class="fs-16">
                측정 간격 : 1~2분 간격으로 2번씩 측정해야 한다.
              </li>
              <li class="fs-16">
                측정 주기 : 적어도 5일 이상 측정 특히 처음 고혈압을 진단할 때는
                적어도 1주일 동안 혈압을 측정한다(처음 측정값은 버리고 평균값을
                사용한다). 치료 결과 평가 시에는 가능한 오랜 기간(적어도 외래
                방문 직전 5-7일 동안) 혈압을 측정한다.
              </li>
              <li class="fs-16">
                혈압 값의 기록 : 모든 혈압 값은 정확하게 혈압 수첩에 기록한다.
              </li>
              <li class="fs-16">
                또는 측정값이 자동 저장되는 기기를 이용하여 모든 측정값을
                기록한다.
              </li>
              <li class="fs-16">
                환자에 의해서 선택적으로 혈압 값이 기록되지 않도록 한다.
              </li>
            </ul>
          </dd>
        </dl>
      </template>
      <!-- <template #modalButton>
        <v-btn
          variant="text"
          height="48"
          class="bdr-8 btn-summit"
          @click="documentModal = false"
          >확인</v-btn
        >
      </template> -->
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
      const documentModal = ref(true)
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
