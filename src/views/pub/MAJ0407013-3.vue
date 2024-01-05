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
                <strong class="text-red">혈당</strong> 집중 관리 <br />
                1주 챌린지 완료!
              </p>
              <p class="desc">
                챌린지 완주 기념으로 <strong class="text-red">180P</strong>가
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
                <!-- <div class="complet-chart-content">
                  <img src="/assets/images/icon-progress-rate3.svg" alt="" />
                  <strong class="complet-chart-text">
                    <span class="text-green">90%</span> 달성
                  </strong>
                </div> -->
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
                <div class="complet-chart-content">
                  <img src="/assets/images/icon-progress-rate1.svg" alt="" />
                  <strong class="complet-chart-text">
                    <span class="text-red">15%</span> 달성
                  </strong>
                </div>
                <!-- // 레드 영역 -->
              </div>
            </div>
            <!-- // 도넛 차트 영역 -->
          </div>

          <div class="challenge-section-content">
            <h2 class="title-01">챌린지 결과를 간단하게 살펴 볼까요</h2>
            <div class="tab-line challenge-result-tab">
              <v-tabs v-model="tabInit" align-tabs="start">
                <v-tab
                  v-for="(item, i) in tabItems"
                  :key="item"
                  :value="i"
                  :ripple="false"
                >
                  {{ item.title }}
                </v-tab>
              </v-tabs>
              <v-window v-model="tabInit" class="challenge-result-tab-content">
                <v-window-item>
                  <!-- 입력 데이터 있는 경우 -->
                  <div class="challenge-result" style="display: block">
                    <div class="tooltip-balloon arrow-bottom">
                      평균 식후 혈당이
                      <span class="text-yellow">40mg/dL 감소</span> 했어요.
                    </div>
                    <div class="challenge-result-content">
                      <div class="result-box">
                        <!-- 낮음:color-black / 정상:color-green / 주의:color-orange / 높음:color-red -->
                        <v-chip
                          label
                          size="small"
                          class="chip-default color-green"
                        >
                          정상
                        </v-chip>
                        <strong class="result-figure text-green"
                          >120mg/dL</strong
                        >
                        <span class="result-text">첫 기록</span>
                      </div>
                      <img
                        src="/assets/images/icon-result-arrow.svg"
                        class="result-arrow"
                        alt=""
                      />
                      <div class="result-box">
                        <v-chip
                          label
                          size="small"
                          class="chip-default color-orange"
                        >
                          고혈당 위험
                        </v-chip>
                        <strong class="result-figure text-orange"
                          >160mg/dL</strong
                        >
                        <span class="result-text">최근 7일 평균 기록</span>
                      </div>
                    </div>
                  </div>
                  <!-- // 입력 데이터 있는 경우 -->

                  <!-- 입력 데이터가 없을 경우 -->
                  <div class="challenge-result" style="display: none">
                    <div class="tooltip-balloon arrow-bottom">
                      첫 기록 이후 입력된 혈당이 없어요.
                    </div>
                    <div class="challenge-result-content">
                      <div class="result-box">
                        <!-- 낮음:color-black / 정상:color-green / 주의:color-orange / 높음:color-red -->
                        <v-chip
                          label
                          size="small"
                          class="chip-default color-green"
                        >
                          정상
                        </v-chip>
                        <strong class="result-figure text-green"
                          >120mg/dL</strong
                        >
                        <span class="result-text">첫 기록</span>
                      </div>
                    </div>
                  </div>
                  <!-- // 입력 데이터가 없을 경우 -->
                </v-window-item>
                <v-window-item>
                  <!-- 입력 데이터 있는 경우 -->
                  <div class="challenge-result" style="display: block">
                    <div class="tooltip-balloon arrow-bottom">
                      평균 공복 혈당이
                      <span class="text-yellow">40mg/dL 감소</span>했어요.
                    </div>
                    <div class="challenge-result-content">
                      <div class="result-box">
                        <!-- 낮음:color-black / 정상:color-green / 주의:color-orange / 높음:color-red -->
                        <v-chip
                          label
                          size="small"
                          class="chip-default color-green"
                        >
                          정상
                        </v-chip>
                        <strong class="result-figure text-green"
                          >120mg/dL</strong
                        >
                        <span class="result-text">첫 기록</span>
                      </div>
                      <img
                        src="/assets/images/icon-result-arrow.svg"
                        class="result-arrow"
                        alt=""
                      />
                      <div class="result-box">
                        <v-chip
                          label
                          size="small"
                          class="chip-default color-red"
                        >
                          고혈당
                        </v-chip>
                        <strong class="result-figure text-red">160mg/dL</strong>
                        <span class="result-text">최근 7일 평균 기록</span>
                      </div>
                    </div>
                  </div>
                  <!-- // 입력 데이터 있는 경우 -->

                  <!-- 입력 데이터 없 경우 -->
                  <div class="challenge-result" style="display: none">
                    <div class="tooltip-balloon arrow-bottom">
                      첫 기록 이후 입력된 혈당이 없어요.
                    </div>
                    <div class="challenge-result-content">
                      <div class="result-box">
                        <!-- 낮음:color-black / 정상:color-green / 주의:color-orange / 높음:color-red -->
                        <v-chip
                          label
                          size="small"
                          class="chip-default color-green"
                        >
                          정상
                        </v-chip>
                        <strong class="result-figure text-green"
                          >120mg/dL</strong
                        >
                        <span class="result-text">첫 기록</span>
                      </div>
                    </div>
                  </div>
                  <!-- // 입력 데이터 없는 경우 -->
                </v-window-item>
              </v-window>
            </div>
            <ul class="result-dot-list">
              <!-- 저혈당:color-black / 정상:color-green / 고혈당 위험:color-orange / 고혈당:color-red -->
              <li class="list-item">
                <span class="dot color-black">저혈당</span>
              </li>
              <li class="list-item">
                <span class="dot color-green">정상</span>
              </li>
              <li class="list-item">
                <span class="dot color-orange">고혈당 위험</span>
              </li>
              <li class="list-item">
                <span class="dot color-red">고혈당</span>
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
      const tabItems = ref([{ title: '식후혈당' }, { title: '공복혈당' }])
      const documentModal = ref(true)
      const tabInit = ref(0)

      return {
        documentModal,
        tabInit,
        tabItems
      }
    }
  }
</script>
