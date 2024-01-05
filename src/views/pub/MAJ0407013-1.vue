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
                <strong class="text-green">체중</strong> 집중 관리 <br />
                1주 챌린지 완료!
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

          <div class="challenge-section-content">
            <h2 class="title-01">챌린지 결과를 간단하게 살펴 볼까요</h2>
            <div class="challenge-result">
              <div class="tooltip-balloon arrow-bottom">
                체중이 <span class="text-yellow">1kg 증가</span> 했어요.
              </div>
              <div class="challenge-result-content">
                <div class="result-box">
                  <!-- 저체중:color-black / 정상:color-green / 과체중:color-orange / 비만:color-red -->
                  <v-chip label size="small" class="chip-default color-green">
                    정상
                  </v-chip>
                  <!-- 텍스트 블랙:text-black / 텍스트 그린:text-green / 텍스트 오렌지:text-orange / 텍스트 레드:text-red -->
                  <strong class="result-figure text-green">80.2kg</strong>
                  <span class="result-text">첫 기록</span>
                </div>
                <img
                  src="/assets/images/icon-result-arrow.svg"
                  class="result-arrow"
                  alt=""
                />
                <div class="result-box">
                  <v-chip label size="small" class="chip-default color-red">
                    주의
                  </v-chip>
                  <strong class="result-figure text-red">81.2kg</strong>
                  <span class="result-text">마지막 기록</span>
                </div>
              </div>
            </div>
            <ul class="result-dot-list">
              <!-- 저체중:color-black / 정상:color-green / 비만전단계:color-yellow / 비만:color-orange / 고도 비만:color-red -->
              <li class="list-item">
                <span class="dot color-black">저체중</span>
              </li>
              <li class="list-item">
                <span class="dot color-green">정상</span>
              </li>
              <li class="list-item">
                <span class="dot color-yellow">비만전단계</span>
              </li>
              <li class="list-item">
                <span class="dot color-orange">비만</span>
              </li>
              <li class="list-item">
                <span class="dot color-red">고도 비만</span>
              </li>
            </ul>
          </div>

          <div class="challenge-section-content">
            <h2 class="title-01">
              <img src="/assets/images/icon-result-emoji1.svg" alt="" />
              참 잘했어요!
            </h2>
            <div class="result-graph-area color-green">
              <div class="graph-bar-content">
                <div class="graph-top">
                  <div class="tooltip-balloon arrow-bottom">90%</div>
                  <div class="graph-bar"></div>
                </div>
                <div class="graph-bottom">
                  <strong class="graph-bottom-title">1위</strong>
                  <p class="graph-bottom-text">
                    오늘 하루 기분<br />
                    체크하기
                  </p>
                </div>
              </div>
              <div class="graph-bar-content">
                <div class="graph-top">
                  <div class="tooltip-balloon arrow-bottom">85%</div>
                  <div class="graph-bar"></div>
                </div>
                <div class="graph-bottom">
                  <strong class="graph-bottom-title">2위</strong>
                  <p class="graph-bottom-text">
                    잠잘 시간 알람<br />
                    맞추기
                  </p>
                </div>
              </div>
              <div class="graph-bar-content">
                <div class="graph-top">
                  <div class="tooltip-balloon arrow-bottom">83%</div>
                  <div class="graph-bar"></div>
                </div>
                <div class="graph-bottom">
                  <strong class="graph-bottom-title">3위</strong>
                  <p class="graph-bottom-text">
                    밥 한 숟가락식<br />
                    남기기
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="challenge-section-content">
            <h2 class="title-01">
              <img src="/assets/images/icon-result-emoji2.svg" alt="" />
              조금 아쉬워요
            </h2>
            <div class="result-graph-area color-red">
              <div class="graph-bar-content">
                <div class="graph-top">
                  <div class="tooltip-balloon arrow-bottom">33%</div>
                  <div class="graph-bar"></div>
                </div>
                <div class="graph-bottom">
                  <strong class="graph-bottom-title">1위</strong>
                  <p class="graph-bottom-text">물 마시기</p>
                </div>
              </div>
              <div class="graph-bar-content">
                <div class="graph-top">
                  <div class="tooltip-balloon arrow-bottom">45%</div>
                  <div class="graph-bar"></div>
                </div>
                <div class="graph-bottom">
                  <strong class="graph-bottom-title">2위</strong>
                  <p class="graph-bottom-text">
                    런지<br />
                    10회x3세트
                  </p>
                </div>
              </div>
              <div class="graph-bar-content">
                <div class="graph-top">
                  <div class="tooltip-balloon arrow-bottom">49%</div>
                  <div class="graph-bar"></div>
                </div>
                <div class="graph-bottom">
                  <strong class="graph-bottom-title">3위</strong>
                  <p class="graph-bottom-text">
                    10,000보<br />
                    이상 걷기
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="challenge-section-content no-division">
            <div class="list-iconbtn">
              <ul>
                <li>
                  <v-btn variant="text" :href="'javsscript:;'">
                    <div class="list-title-content">
                      <img
                        src="/assets/images/icon-challenge-extension1.svg"
                        alt=""
                      />
                      <span class="text">
                        <strong>6주 챌린지로 연장하기</strong>
                      </span>
                    </div>
                    <p class="list-text">
                      챌린지 효과를 느낄 수 있는 기간!<br />
                      <strong
                        >전문적이고 다양한 Todo를 실천할 수 있어요!</strong
                      >
                    </p>
                  </v-btn>
                </li>
                <li>
                  <v-btn variant="text" :href="'javsscript:;'">
                    <div class="list-title-content">
                      <img
                        src="/assets/images/icon-challenge-extension2.svg"
                        alt=""
                      />
                      <span class="text">
                        <strong>12주 챌린지로 연장하기</strong>
                      </span>
                    </div>
                    <p class="list-text">
                      3개월 꾸준히 진행하면, 건강습관을 1년 이상 <br />
                      유지할 수 있는 확률이 매우 높아져요! <br />
                      <strong>고도화된 완성형 챌린지를 경험해 보세요!</strong>
                    </p>
                  </v-btn>
                </li>
              </ul>
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
          >작성한 리뷰 보기</v-btn
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
