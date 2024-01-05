<template>
  <div class="contents">
    <v-btn @click="documentModal = true">full page madal</v-btn>
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="챌린지 완료"
      v-model="documentModal"
      @close="documentModal = false"
    >
      <template #modalBody>
        <div class="contents complete-report">
          <div class="challenge-section-spot">
            <div class="title-area">
              <p class="subTit-01">
                <strong class="text-green">지난주보다 많이 걷기</strong> <br />
                2주 챌린지 완료!
              </p>
              <p class="desc">
                챌린지 완주 기념으로 <strong class="text-green">180P</strong>가
                지급됩니다.
              </p>
            </div>

            <!-- 도넛 차트 영역 -->
            <div style="position: relative">
              <div class="complet-chart">
                <div
                  style="
                    background-color: #d9d9d9;
                    width: 12rem;
                    height: 12rem;
                    margin: 0 auto;
                    border-radius: 50%;
                  "
                ></div>
                <!-- 그린 영역 -->
                <div class="complet-chart-content">
                  <img src="/assets/images/icon-progress-rate3.svg" alt="" />
                  <strong class="complet-chart-text">
                    <span class="text-green">90%</span> 달성
                  </strong>
                </div>
                <!-- // 그린 영역 -->

                <!-- 오렌지 영역 -->
                <!-- <div class="complet-chart-content">
                  <img src="/assets/images/icon-progress-rate2.svg" alt="" />
                  <strong class="complet-chart-text">
                    <span class="text-orange">65%</span> 달성
                  </strong>
                </div> -->
                <!-- // 오렌지 영역 -->

                <!-- 레드 영역 -->
                <!-- <div class="complet-chart-content">
                  <img src="/assets/images/icon-progress-rate1.svg" alt="" />
                  <strong class="complet-chart-text">
                    <span class="text-red">15%</span> 달성
                  </strong>
                </div> -->
                <!-- // 레드 영역 -->
              </div>
            </div>
            <!-- // 도넛 차트 영역 -->
          </div>

          <div class="challenge-section-content no-division">
            <h2 class="title-01">챌린지 결과를 간단하게 살펴 볼까요</h2>
            <div class="challenge-result">
              <div class="tooltip-balloon arrow-bottom">
                첫 기록보다
                <span class="text-yellow">1,000걸음</span> 증가했어요. 대단해요!
              </div>
              <div class="challenge-result-content">
                <div class="result-box result-box-type2">
                  <strong class="result-figure">10,000걸음</strong>
                  <span class="result-text">첫 기록</span>
                </div>
                <img
                  src="/assets/images/icon-result-arrow.svg"
                  class="result-arrow"
                  alt=""
                />
                <div class="result-box">
                  <strong class="result-figure">12,000걸음</strong>
                  <span class="result-text">
                    최근 7일 평균 기록 <br />
                    (10.03 ~ 10.09)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #modalButton>
        <v-btn
          variant="text"
          height="56"
          class="bdr-16 btn-summit"
          @click="documentModal = false"
          >리뷰 작성하기</v-btn
        >
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
      const documentModal = ref(true)

      return {
        documentModal
      }
    }
  }
</script>
