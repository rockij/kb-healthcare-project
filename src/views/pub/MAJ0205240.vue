<template>
  <div class="contents">
    <v-tabs fixed-tabs align-tabs="center" class="tab-line" v-model="tab">
      <v-tab v-for="(item, i) in tabItems" :key="i" :ripple="false">
        {{ item.titleTab }}
      </v-tab>
    </v-tabs>

    <div class="active-result-window">
      <div>
        <div class="wrap-active-analysis">
          <div class="title-area">
            <p class="subTit-01">
              오건강님의 <br /><span class="c-blue">이번주</span>를 분석했어요
            </p>
          </div>
          <div class="wrap-swiper-date">
            <button class="swiper-button-prev"></button>
            <swiper
              :modules="modules"
              class="swiper-date"
              @swiper="weekSwiper"
              v-bind="swiperDateOption"
              @slide-change-transition-end="setWeekSwiper"
            >
              <swiper-slide
                v-for="(slideWeekItems, idx) in swiperDateSlideWeek"
                :key="idx"
                >{{ slideWeekItems.date }}</swiper-slide
              >
            </swiper>
            <button class="swiper-button-next"></button>
          </div>
          <div class="list-report-active-result">
            <template v-for="msg in weekValue" :key="msg">
              <v-card class="report-active-result-items">
                <template #prepend>
                  <v-avatar
                    ><v-icon
                      size="40"
                      :icon="
                        msg.state == 'sucess'
                          ? 'icon-active-result sucess'
                          : 'icon-active-result fail'
                      "
                    ></v-icon
                  ></v-avatar>
                </template>
                <template #title>
                  {{
                    msg.state == 'sucess' ? '참 잘했어요!' : '노력이 필요해요!'
                  }}</template
                >
                <template #text>{{ msg.text }}</template>
              </v-card>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- 2차범위 -->
    <!-- <div ref="stickyArea" :style="{ height: navHeight }" class="tab-sticky">
      <div class="sticky">
        <v-tabs class="tabs-simple2">
          <v-btn variant="text" role="tab" aria-selected="true">걸음</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">감정</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">수면</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">식사</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">체성분</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">혈당</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">혈압</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">운동</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">수분</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">음주</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">흡연</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">심박</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">복약</v-btn>
        </v-tabs>
      </div>
    </div> -->
    <!-- //2차범위 -->
    <div class="list-active-report">
      <!-- 걸음 -->
      <v-card
        class="active-report-items"
        ref="activeReportItems"
        elevation="0"
        id="sectionWalk"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog walk" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">걸음</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[orderData.findIndex((obj) => obj.name == 'sectionWalk')]
              .data == false
          "
          state="꾸준히 걷기를"
          value="걸음"
        ></ActiveReportsEmpty>
        <v-card-text v-else>
          <div class="active-report-items-text">
            평균<br />
            <span class="cnt c-blue">2,034</span> 걸음 걸었어요
          </div>
          <p class="active-report-items-result">
            지난주 대비 평균 걸음수가
            <strong class="text-variation decrease red"
              ><span class="cnt">2,874</span>걸음 감소</strong
            >
            했어요
          </p>
          <div class="active-report-items-hint">
            가까운 거리는 걷기를 <strong class="c-blue">생활화</strong> 해보세요
          </div>
          <div class="active-report-items-circle">
            <i class="icon-report-items-circle">
              <img src="/assets/images/icon-active-circle-walk.svg" alt="" />
            </i>
            <p class="tit-report-items-circle">평균 20,345걸음</p>
            <p class="text-report-items-circle">
              <span class="text-variation decrease"
                ><span class="cnt">2,874</span>걸음</span
              >
            </p>
          </div>
          <div class="tit-active-report-items">걸음 수</div>
          <div class="chart">
            <img
              src="/assets/images/img-graph-bar3.png"
              alt=""
              class="graph-bar2"
            />
          </div>
          <div class="d-flex justify-end">
            <v-list class="list-reference">
              <v-list-item class="list-reference-item" min-height="auto"
                >권장 10,000걸음</v-list-item
              >
            </v-list>
          </div>
        </v-card-text>
      </v-card>
      <!-- //걸음 -->

      <!-- 감정 -->
      <v-card
        class="active-report-items"
        ref="activeReportItems"
        elevation="0"
        id="sectionEmotion"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog emotion" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">감정</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[
              orderData.findIndex((obj) => obj.name == 'sectionEmotion')
            ].data == false
          "
          state="매일 감정을"
          value="감정"
        ></ActiveReportsEmpty>

        <v-card-text v-else>
          <div class="active-report-items-text">
            이번주는<br />
            <span class="cnt c-blue">보통</span>인 날이 많았어요
          </div>
          <div class="active-report-items-hint">
            평소에 <strong class="c-blue">관심있던 취미</strong>를 즐겨보세요
          </div>
          <div class="tit-active-report-items">감정기록</div>
          <div class="chart">
            <div class="wrap-active-emotion-chart">
              <div class="active-emotion-chart-container">
                <div
                  v-for="(chartValue, name, index) in emotionChartValue"
                  :key="index"
                  class="emotion-chart-items"
                  :class="chartValue.chartState"
                >
                  <div
                    class="active-emotion-chart"
                    :class="
                      chartValue.chartPercent > 5
                        ? 'active high'
                        : chartValue.chartPercent > 0
                        ? 'active'
                        : ''
                    "
                    :style="{ height: chartValue.chartPercent + '%' }"
                  >
                    <div class="tooltip-balloon arrow-bottom">
                      {{ chartValue.chartDay + '일' }}
                    </div>
                    <div
                      class="icon-emotion"
                      :class="chartValue.chartState"
                    ></div>
                  </div>
                  <div class="active-emotion-chart-label">
                    {{ chartValue.chartText }}
                  </div>
                </div>
              </div>
            </div>
            <div class="active-emotion-chart-top5List mt-7">
              <div
                v-for="(list, i) in top5List"
                :key="i"
                class="list-emotion mt-4"
              >
                <div class="emoji-box">
                  <i :data-emoji="list.stateText"></i>{{ list.stateText }}
                </div>
                <div class="progress-bar mt-12" :data-num="list.gagePercent">
                  <div
                    class="bar on"
                    :style="`width: ${list.gagePercent}%`"
                    :data-bar-color="list.stateText"
                  >
                    <span class="tooltip-balloon arrow-bottom num"
                      >{{ list.gageText }}번</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
      <!-- //감정 -->

      <!-- 수면 -->
      <v-card
        class="active-report-items"
        ref="activeReportItems"
        elevation="0"
        id="sectionSleep"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog sleep" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">수면</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[orderData.findIndex((obj) => obj.name == 'sectionSleep')]
              .data == false
          "
          state="매일 수면을"
          value="수면"
        ></ActiveReportsEmpty>
        <v-card-text v-else>
          <div class="active-report-items-text">
            평균<br />
            <span class="cnt c-blue">9시간 30분</span> 자고있어요
          </div>
          <p class="active-report-items-result">
            지난주 대비 평균 수면시간이
            <strong class="text-variation increase blue"
              ><span class="cnt">20</span>분 증가</strong
            >
            했어요
          </p>
          <div class="active-report-items-hint">
            수면시간은
            <strong class="c-blue">8시간이 넘지 않도록</strong> 유의해주세요
          </div>
          <div class="tit-active-report-items">수면시간</div>
          <div class="chart">
            <img
              src="/assets/images/img-graph-bar3.png"
              alt=""
              class="graph-bar2"
            />
          </div>
        </v-card-text>
      </v-card>
      <!-- //수면 -->

      <!-- 식사 -->
      <v-card
        class="active-report-items"
        ref="activeReportItems"
        elevation="0"
        id="sectionMeal"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog meal" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">식사</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[orderData.findIndex((obj) => obj.name == 'sectionMeal')]
              .data == false
          "
          state="매끼 식사를"
          value="식사"
        ></ActiveReportsEmpty>
        <v-card-text v-else>
          <div class="active-report-items-text">
            평균<br />
            <span class="cnt c-blue">10,000kcal</span>를 섭취했어요
          </div>
          <p class="active-report-items-result">
            지난주 대비 평균 섭취 칼로리가
            <strong class="text-variation decrease blue"
              ><span class="cnt">2,480</span>kcal 감소</strong
            >
            했어요
          </p>
          <div class="tit-active-report-items">섭취 칼로리</div>
          <div class="chart">
            <img
              src="/assets/images/img-graph-bar3.png"
              alt=""
              class="graph-bar2"
            />
          </div>
        </v-card-text>
      </v-card>
      <!-- //식사 -->

      <!-- 체성분 -->
      <v-card
        class="active-report-items"
        elevation="0"
        id="sectionBodyComposition"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog body-composition" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">체성분</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[
              orderData.findIndex((obj) => obj.name == 'sectionBodyComposition')
            ].data == false
          "
          state="주기적으로 체성분을"
          value="체성분"
        ></ActiveReportsEmpty>
        <v-card-text v-else>
          <div class="active-report-items-text">
            체수분<br />
            <span class="cnt c-blue">가장 큰 폭으로 변동</span>되었어요
          </div>
          <p class="active-report-items-result">
            지난주 대비 평균 체수분이 30L로
            <strong class="text-variation decrease blue"
              ><span class="cnt">20</span>L 감소</strong
            >
            했어요
          </p>

          <div class="active-report-items-circle">
            <i class="icon-report-items-circle">
              <img
                src="/assets/images/icon-active-circle-body-composition.svg"
                alt=""
              />
            </i>
            <p class="tit-report-items-circle">평균 체수분 300L</p>
            <p class="text-report-items-circle">
              <span class="text-variation decrease"
                ><span class="cnt">20</span>L</span
              >
            </p>
          </div>
          <div class="tit-active-report-items">체중</div>
          <div class="chart">
            <img
              src="/assets/images/img-graph-active1.png"
              alt=""
              class="graph-bar2"
            />
          </div>
          <div class="tit-active-report-items">허리둘레</div>
          <div class="chart">
            <img
              src="/assets/images/img-graph-active1.png"
              alt=""
              class="graph-bar2"
            />
          </div>
          <div class="tit-active-report-items">평균 체성분</div>
          <div class="wrap-round-cell">
            <div class="round-cell">
              <div class="tit-round-cell">체지방률</div>
              <p class="text-variation increase">10</p>
              <p class="percent-round-cell"><span class="cnt">20.5</span>%</p>
            </div>

            <div class="round-cell">
              <div class="tit-round-cell">기초대사량</div>
              <p class="text-variation decrease">10</p>
              <p class="percent-round-cell">
                <span class="cnt">2,400</span>kcal
              </p>
            </div>

            <div class="round-cell">
              <div class="tit-round-cell">골격근량</div>
              <p class="text-variation increase">10</p>
              <p class="percent-round-cell"><span class="cnt">40.5</span>kg</p>
            </div>

            <div class="round-cell">
              <div class="tit-round-cell">내장지방</div>
              <p class="text-variation increase">10</p>
              <p class="percent-round-cell"><span class="cnt">8</span>Level</p>
            </div>

            <div class="round-cell">
              <div class="tit-round-cell">근육량</div>
              <p class="text-variation increase">10</p>
              <p class="percent-round-cell"><span class="cnt">40</span>kg</p>
            </div>
            <div class="round-cell">
              <div class="tit-round-cell">체수분</div>
              <p class="text-variation increase">10</p>
              <p class="percent-round-cell"><span class="cnt">300</span>L</p>
            </div>
          </div>
        </v-card-text>
      </v-card>
      <!-- //체성분 -->
      <!-- 혈당 -->
      <v-card
        class="active-report-items"
        ref="activeReportItems"
        elevation="0"
        id="sectionBloodSugar"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog blood-sugar" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">혈당</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[
              orderData.findIndex((obj) => obj.name == 'sectionBloodSugar')
            ].data == false
          "
          state="주기적으로 혈당을"
          value="혈당"
        ></ActiveReportsEmpty>
        <v-card-text v-else>
          <div class="active-report-items-text">
            공복, 식전, 식후 혈당의<br />
            <span class="cnt c-red">주의</span>가 필요해요
          </div>
          <div class="active-report-items-result">
            <p>
              지난달 대비 공복 혈당이
              <strong class="text-variation increase blue">3mg/dL 증가</strong>,
            </p>
            <p>
              식후 혈당이
              <strong class="text-variation increase blue">3mg/dL 증가</strong>,
            </p>
            <p>
              식전 혈당이
              <strong class="text-variation increase blue">3mg/dL 증가</strong>,
            </p>
          </div>

          <div class="tit-active-report-items">이번달 평균 혈당</div>
          <div class="wrap-round-cell cell-3">
            <div class="round-cell align-center">
              <div class="tit-round-cell">평균 공복</div>
              <p class="percent-round-cell">
                <span class="cnt">160</span>mg/dL
              </p>
              <p class="text-variation increase">10mg/dL</p>
            </div>

            <div class="round-cell align-center">
              <div class="tit-round-cell">평균 식전</div>
              <p class="percent-round-cell">
                <span class="cnt">160</span>mg/dL
              </p>
              <p class="text-variation decrease">10mg/dL</p>
            </div>

            <div class="round-cell align-center">
              <div class="tit-round-cell">평균 식후</div>
              <p class="percent-round-cell">
                <span class="cnt">160</span>mg/dL
              </p>
              <p class="text-variation increase">10mg/dL</p>
            </div>
          </div>

          <div class="tit-active-report-items">공복혈당</div>
          <div class="wrap-step-range-chart">
            <div class="step-range-chart">
              <div
                class="step-range-chart-items"
                :class="[
                  fastingBloodSugar.name,
                  fastingBloodSugar.time ? 'active' : ''
                ]"
                v-for="fastingBloodSugar in fastingBloodSugar"
                :key="fastingBloodSugar"
                :style="{ width: fastingBloodSugar.range }"
              >
                <span
                  class="icon-range"
                  :class="
                    fastingBloodSugar.time == 'thisWeek'
                      ? 'thisWeek'
                      : 'lastWeek'
                  "
                  v-if="fastingBloodSugar.time"
                ></span>
                <div class="label">{{ fastingBloodSugar.label }}</div>
              </div>
            </div>
            <div class="list-active-report-average">
              <template
                v-for="fastingBloodSugarAverage in fastingBloodSugar"
                :key="fastingBloodSugarAverage"
              >
                <div
                  class="active-report-average-items"
                  v-if="fastingBloodSugarAverage.time"
                >
                  <div class="tit-active-report-average">
                    <i
                      class="icon-range"
                      :class="fastingBloodSugarAverage.time"
                    ></i
                    >{{
                      fastingBloodSugarAverage.time == 'thisWeek'
                        ? '이번주 평균'
                        : '지난주 평균'
                    }}
                  </div>
                  <div class="text-active-report-average">
                    <v-chip
                      label
                      size="small"
                      :color="chipsColorValue(fastingBloodSugarAverage.name)"
                      class="chip-default chip-color"
                    >
                      {{ fastingBloodSugarAverage.label }}
                    </v-chip>
                    <span class="active-report-average-cnt">{{
                      fastingBloodSugarAverage.value + 'mg/dL'
                    }}</span>
                  </div>
                </div>
              </template>
            </div>
          </div>

          <div class="tit-active-report-items">식전혈당</div>
          <div class="wrap-step-range-chart">
            <div class="step-range-chart">
              <div
                class="step-range-chart-items"
                :class="[
                  bloodSugarBeforeMeals.name,
                  bloodSugarBeforeMeals.time ? 'active' : ''
                ]"
                v-for="bloodSugarBeforeMeals in bloodSugarBeforeMeals"
                :key="bloodSugarBeforeMeals"
                :style="{ width: bloodSugarBeforeMeals.range }"
              >
                <span
                  class="icon-range"
                  :class="
                    bloodSugarBeforeMeals.time == 'thisWeek'
                      ? 'thisWeek'
                      : 'lastWeek'
                  "
                  v-if="bloodSugarBeforeMeals.time"
                ></span>
                <div class="label">{{ bloodSugarBeforeMeals.label }}</div>
              </div>
            </div>
            <div class="list-active-report-average">
              <template
                v-for="bloodSugarBeforeMeals in bloodSugarBeforeMeals"
                :key="bloodSugarBeforeMeals"
              >
                <div
                  class="active-report-average-items"
                  v-if="bloodSugarBeforeMeals.time"
                >
                  <div class="tit-active-report-average">
                    <i
                      class="icon-range"
                      :class="bloodSugarBeforeMeals.time"
                    ></i
                    >{{
                      bloodSugarBeforeMeals.time == 'thisWeek'
                        ? '이번주 평균'
                        : '지난주 평균'
                    }}
                  </div>
                  <div class="text-active-report-average">
                    <v-chip
                      label
                      size="small"
                      :color="chipsColorValue(bloodSugarBeforeMeals.name)"
                      class="chip-default chip-color"
                    >
                      {{ bloodSugarBeforeMeals.label }}
                    </v-chip>
                    <span class="active-report-average-cnt">{{
                      bloodSugarBeforeMeals.value + 'mg/dL'
                    }}</span>
                  </div>
                </div>
              </template>
            </div>
          </div>

          <div class="tit-active-report-items">식후혈당</div>
          <div class="wrap-step-range-chart">
            <div class="step-range-chart">
              <div
                class="step-range-chart-items"
                :class="[
                  postprandialBloodSugar.name,
                  postprandialBloodSugar.time ? 'active' : ''
                ]"
                v-for="postprandialBloodSugar in postprandialBloodSugar"
                :key="postprandialBloodSugar"
                :style="{ width: postprandialBloodSugar.range }"
              >
                <span
                  class="icon-range"
                  :class="
                    postprandialBloodSugar.time == 'thisWeek'
                      ? 'thisWeek'
                      : 'lastWeek'
                  "
                  v-if="postprandialBloodSugar.time"
                ></span>
                <div class="label">{{ postprandialBloodSugar.label }}</div>
              </div>
            </div>
            <div class="list-active-report-average">
              <template
                v-for="postprandialBloodSugar in postprandialBloodSugar"
                :key="postprandialBloodSugar"
              >
                <div
                  class="active-report-average-items"
                  v-if="postprandialBloodSugar.time"
                >
                  <div class="tit-active-report-average">
                    <i
                      class="icon-range"
                      :class="postprandialBloodSugar.time"
                    ></i
                    >{{
                      postprandialBloodSugar.time == 'thisWeek'
                        ? '이번주 평균'
                        : '지난주 평균'
                    }}
                  </div>
                  <div class="text-active-report-average">
                    <v-chip
                      label
                      size="small"
                      :color="chipsColorValue(postprandialBloodSugar.name)"
                      class="chip-default chip-color"
                    >
                      {{ postprandialBloodSugar.label }}
                    </v-chip>
                    <span class="active-report-average-cnt">{{
                      postprandialBloodSugar.value + 'mg/dL'
                    }}</span>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </v-card-text>
      </v-card>
      <!-- //혈당 -->
      <!-- 혈압 -->
      <v-card
        class="active-report-items"
        elevation="0"
        id="sectionBloodPressure"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog blood-pressure" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">혈압</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[
              orderData.findIndex((obj) => obj.name == 'sectionBloodPressure')
            ].data == false
          "
          state="주기적으로 혈압을"
          value="혈압"
        ></ActiveReportsEmpty>
        <v-card-text v-else>
          <div class="active-report-items-text">
            <span class="c-blue">고혈압 전단계</span>인 날이 많았어요
          </div>
          <div class="active-report-items-result">
            지난주 대비 평균 수축기 혈압이
            <strong class="text-variation increase blue"
              ><span class="cnt">10</span>mmHg 증가</strong
            >,<br />이완기 혈압이
            <strong class="text-variation increase blue"
              ><span class="cnt">3</span>mmHg 증가</strong
            >
          </div>

          <div class="active-report-items-circle">
            <i class="icon-report-items-circle"
              ><img src="/assets/images/icon-active-blood-pressure.svg" alt=""
            /></i>
            <p class="tit-report-items-circle">평균 158/73mmHg</p>
            <div class="text-report-items-circle">
              <p class="text-variation increase d-flex">
                수축기<span class="cnt">10</span>mmHg
              </p>
              <p class="text-variation increase d-flex">
                이완기<span class="cnt">3</span>mmHg
              </p>
            </div>
          </div>

          <div class="tit-active-report-items">혈압</div>
          <div class="wrap-step-range-chart">
            <div class="step-range-chart active-bloodPressure-chart">
              <div
                class="step-range-chart-items"
                :class="[
                  bloodPressure.name,
                  bloodPressure.time ? 'active' : ''
                ]"
                v-for="bloodPressure in bloodPressure"
                :key="bloodPressure"
                :style="{ width: bloodPressure.range }"
              >
                <span
                  class="icon-range"
                  :class="
                    bloodPressure.time == 'thisWeek' ? 'thisWeek' : 'lastWeek'
                  "
                  v-if="bloodPressure.time"
                ></span>
                <div class="label">{{ bloodPressure.label }}</div>
              </div>
            </div>
            <div class="list-active-report-average">
              <template
                v-for="bloodPressure in bloodPressure"
                :key="bloodPressure"
              >
                <div
                  class="active-report-average-items"
                  v-if="bloodPressure.time"
                >
                  <div class="tit-active-report-average">
                    <i class="icon-range" :class="bloodPressure.time"></i
                    >{{
                      bloodPressure.time == 'thisWeek'
                        ? '이번주 평균'
                        : '지난주 평균'
                    }}
                  </div>
                  <div class="text-active-report-average">
                    <v-chip
                      label
                      size="small"
                      :color="chipsColorValue(bloodPressure.name)"
                      class="chip-default chip-color"
                    >
                      {{ bloodPressure.label }}
                    </v-chip>
                    <span class="active-report-average-cnt">{{
                      bloodPressure.value + 'mmHg'
                    }}</span>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </v-card-text>
      </v-card>
      <!-- //혈압 -->
      <!-- 운동 -->
      <v-card
        class="active-report-items"
        ref="activeReportItems"
        elevation="0"
        id="sectionSports"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog sports" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">운동</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[orderData.findIndex((obj) => obj.name == 'sectionSports')]
              .data == false
          "
          state="꾸준히 운동을"
          value="운동"
        ></ActiveReportsEmpty>
        <v-card-text v-else>
          <div class="active-report-items-text">
            평균<br />
            <span class="cnt c-blue">1,158kcal</span>를 소비했어요
          </div>
          <div class="active-report-items-result">
            지난주 대비 평균 운동시간이
            <strong class="text-variation decrease red"
              ><span class="cnt">6시간 3분</span>감소</strong
            ><br />
            소비칼로리는
            <strong class="text-variation increase green"
              ><span class="cnt">3,075</span>kcal 증가</strong
            >했어요
          </div>

          <div class="active-report-items-circle">
            <i class="icon-report-items-circle"
              ><img src="/assets/images/icon-active-sports.svg" alt=""
            /></i>
            <p class="tit-report-items-circle">평균 15,514kcal</p>
            <p class="text-report-items-circle">
              <span class="text-variation increase">
                <span class="cnt">3,075</span>kcal
              </span>
            </p>
          </div>

          <div class="tit-active-report-items">소비 칼로리</div>
          <div class="chart">
            <img
              src="/assets/images/img-graph-bar2.png"
              alt=""
              class="graph-bar2"
            />
          </div>
        </v-card-text>
      </v-card>
      <!-- //운동 -->

      <!-- 수분 -->
      <v-card
        class="active-report-items"
        ref="activeReportItems"
        elevation="0"
        id="sectionWater"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog water" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">수분</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[orderData.findIndex((obj) => obj.name == 'sectionWater')]
              .data == false
          "
          state="매일 마신 수분을"
          value="수분"
        ></ActiveReportsEmpty>
        <v-card-text v-else>
          <div class="active-report-items-text">
            평균<br />
            <span class="cnt c-blue">21,400ml</span>섭취했어요
          </div>
          <div class="active-report-items-result">
            지난주 대비 평균 수분량이
            <strong class="text-variation increase green"
              ><span class="cnt">200</span>ml 증가</strong
            >했어요
          </div>
          <div class="active-report-items-hint">
            지금처럼 <strong class="c-blue">물 마시는 습관</strong>을
            유지해주세요
          </div>

          <div class="tit-active-report-items">수분 섭취량</div>
          <div class="chart">
            <img
              src="/assets/images/img-graph-bar2.png"
              alt=""
              class="graph-bar2"
            />
          </div>
          <div class="d-flex justify-end">
            <v-list class="list-reference">
              <v-list-item class="list-reference-item" min-height="auto"
                >권장 1,500ml</v-list-item
              >
            </v-list>
          </div>
        </v-card-text>
      </v-card>
      <!-- //수분 -->

      <!-- 음주 -->
      <v-card
        class="active-report-items"
        ref="activeReportItems"
        elevation="0"
        id="sectionDrink"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog drinking" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">음주</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[orderData.findIndex((obj) => obj.name == 'sectionDrink')]
              .data == false
          "
          state="빠짐없이 음주를"
          value="음주"
        ></ActiveReportsEmpty>
        <v-card-text v-else>
          <div class="active-report-items-text">
            알코올<br />
            <span class="cnt c-blue">섭취량이 늘고</span>있어요
          </div>
          <div class="active-report-items-result">
            이번주 <strong>{{ drink() }}</strong
            >를 가장 많이 섭취했고,<br />지난달 대비 평균 알코올 섭취량이
            <strong class="text-variation increase red"
              ><span class="cnt">200</span>g 증가</strong
            >했어요
          </div>

          <div class="active-report-items-circle">
            <i class="icon-report-items-circle"
              ><img
                :src="
                  `/assets/images/icon-active-drinking-` + drinkKind + `.svg`
                "
                alt=""
            /></i>
            <p class="tit-report-items-circle">총 15,000.3g</p>
            <p class="text-report-items-circle">
              <span class="text-variation increase">
                <span class="cnt">3,075.0</span>g
              </span>
            </p>
          </div>

          <div class="tit-active-report-items">금주모드</div>
          <div class="wrap-round-cell">
            <div class="round-cell align-center">
              <div class="tit-round-cell">지난주 성공일</div>
              <div class="chart">
                <img src="/assets/images/img-ring-guage.svg" alt="" />
              </div>
              <p class="percent-round-cell">
                <span class="cnt font-weight-normal">00:00:00:00</span>
              </p>
            </div>
            <div class="round-cell align-center">
              <div class="tit-round-cell">이번주 성공일</div>
              <div class="chart">
                <img src="/assets/images/img-ring-guage.svg" alt="" />
              </div>
              <p class="percent-round-cell">
                <span class="cnt font-weight-normal">00:00:00:00</span>
              </p>
            </div>
          </div>
          <div class="active-report-items-hint gray">
            지난달 대비
            <strong class="text-variation increase blue"
              ><span class="cnt">00:00:00:00</span></strong
            >
          </div>
          <div class="tit-active-report-items">이번주 금주모드 현황</div>
          <div class="chart round">
            <div class="wrap-chart-active-report-range">
              <div class="chart-active-report-range-container">
                <div class="chart-active-report-range">
                  <div
                    class="chart-active-report-range-bar"
                    v-for="activeReportRangeBarValue in activeReportRangeBarValue"
                    :key="activeReportRangeBarValue"
                    :style="
                      activeReportRangeBarRate(
                        activeReportRangeBarValue.activeReportRangePos,
                        activeReportRangeBarValue.activeReportRangeWidth
                      )
                    "
                  ></div>
                  <div class="chart-active-report-range-label">
                    <div
                      class="label"
                      v-for="activeReportRange in activeReportRange"
                      :key="activeReportRange"
                    >
                      {{ activeReportRange.name }}
                    </div>
                  </div>
                </div>
                <div class="chart-active-report-legend">
                  <i class="icon-legend" style="background-color: #ffcc00"></i
                  >금주모드
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
      <!-- //음주 -->

      <!-- 흡연 -->
      <v-card
        class="active-report-items"
        ref="activeReportItems"
        elevation="0"
        id="sectionSmoking"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog smoking" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">흡연</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[
              orderData.findIndex((obj) => obj.name == 'sectionSmoking')
            ].data == false
          "
          state="빠짐없이 흡연을"
          value="흡연"
        ></ActiveReportsEmpty>
        <v-card-text v-else>
          <div class="active-report-items-text">
            흡연량이<br />
            <span class="cnt c-blue">늘고</span> 있어요
          </div>
          <div class="active-report-items-result">
            이번주 <strong>일반담배</strong>를 가장 많이 피웠고,<br />지난달
            대비 총 흡연량이
            <strong class="text-variation increase red"
              ><span class="cnt">2</span>개비 증가, </strong
            ><strong class="text-variation decrease green"
              ><span class="cnt">1</span>ml 감소, </strong
            >했어요
          </div>

          <div class="active-report-items-circle">
            <i class="icon-report-items-circle"
              ><img src="/assets/images/icon-active-smoking.svg" alt=""
            /></i>
            <p class="tit-report-items-circle">총 15개비 / 50ml</p>
            <div class="text-report-items-circle">
              <p class="text-variation increase d-flex">
                <span class="cnt">3</span>개비 증가
              </p>
              <p class="text-variation decrease d-flex">
                <span class="cnt">1</span>ml 감소
              </p>
            </div>
          </div>

          <div class="tit-active-report-items">금연모드</div>
          <div class="wrap-round-cell">
            <div class="round-cell align-center">
              <div class="tit-round-cell">지난주 성공일</div>
              <div class="chart">
                <img src="/assets/images/img-ring-guage.svg" alt="" />
              </div>
              <p class="percent-round-cell">
                <span class="cnt font-weight-normal">00:00:00:00</span>
              </p>
            </div>
            <div class="round-cell align-center">
              <div class="tit-round-cell">이번주 성공일</div>
              <div class="chart">
                <img src="/assets/images/img-ring-guage.svg" alt="" />
              </div>
              <p class="percent-round-cell">
                <span class="cnt font-weight-normal">00:00:00:00</span>
              </p>
            </div>
          </div>
          <div class="active-report-items-hint gray">
            지난달 대비
            <strong class="text-variation increase blue"
              ><span class="cnt">00:00:00:00</span></strong
            >
          </div>
          <div class="tit-active-report-items">이번주 금연모드 현황</div>
          <div class="chart round">
            <div class="wrap-chart-active-report-range">
              <div class="chart-active-report-range-container">
                <div class="chart-active-report-range">
                  <div
                    class="chart-active-report-range-bar"
                    v-for="activeReportSmokingValue in activeReportSmokingValue"
                    :key="activeReportSmokingValue"
                    :style="
                      activeReportRangeBarRate(
                        activeReportSmokingValue.activeReportRangePos,
                        activeReportSmokingValue.activeReportRangeWidth
                      )
                    "
                  ></div>
                  <div class="chart-active-report-range-label">
                    <div
                      class="label"
                      v-for="activeReportSmoking in activeReportSmoking"
                      :key="activeReportSmoking"
                    >
                      {{ activeReportSmoking.name }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="chart-active-report-legend">
                <i class="icon-legend" style="background-color: #ffcc00"></i
                >금연모드
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
      <!-- //흡연 -->

      <!-- 심박 -->
      <v-card
        class="active-report-items"
        ref="activeReportItems"
        elevation="0"
        id="sectionHeartRate"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog heart-rate" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">심박</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[
              orderData.findIndex((obj) => obj.name == 'sectionHeartRate')
            ].data == false
          "
          state="주기적으로 심박을"
          value="심박"
        ></ActiveReportsEmpty>
        <v-card-text v-else>
          <div class="active-report-items-text">
            평균<br />
            <span class="cnt c-blue">78~150bpm</span>이에요
          </div>
          <div class="active-report-items-result">
            지난주 대비 평균 최소 심박수
            <strong class="text-variation increase blue"
              ><span class="cnt">3</span>bmp 증가</strong
            ><br />최대 심박수가
            <strong class="text-variation decrease blue"
              ><span class="cnt">3</span>bmp 감소</strong
            >
            했어요
          </div>
          <div class="active-report-items-hint">
            <strong class="c-blue">주기적으로 심박수를 체크</strong>해주세요
          </div>

          <div class="tit-active-report-items">평균 심박수</div>
          <div class="chart">
            <img
              src="/assets/images/img-heart-rate.png"
              alt=""
              class="graph-bar2"
            />
          </div>
        </v-card-text>
      </v-card>
      <!-- //심박 -->

      <!-- 복약 -->
      <v-card
        class="active-report-items"
        ref="activeReportItems"
        elevation="0"
        id="sectionmeDication"
      >
        <v-card-item>
          <template #prepend>
            <v-icon class="icon-lifelog medication" size="32"></v-icon>
          </template>
          <v-card-title class="tit-icon-button">복약</v-card-title>
          <template #append>
            <v-btn
              variant="flat"
              append-icon="icon-arrow-right"
              class="btn-arrow-right"
            ></v-btn>
          </template>
        </v-card-item>
        <ActiveReportsEmpty
          v-if="
            orderData[
              orderData.findIndex((obj) => obj.name == 'sectionmeDication')
            ].data == false
          "
          state="빠짐없이 복약을"
          value="복약"
        ></ActiveReportsEmpty>
        <v-card-text v-else>
          <div class="active-report-items-text">
            복약 성공률<br />
            <span class="cnt c-blue">80%</span>달성했어요
          </div>
          <div class="active-report-items-result">
            지난달 대비 복약 성공률이
            <strong class="text-variation increase green"
              ><span class="cnt"> 5</span>% 증가</strong
            >
            했어요
          </div>

          <div class="tit-active-report-items">개별 복약 성공률</div>
          <div class="box-rounded pt-0">
            <ProgressBar
              v-for="(item, i) in mediProgressList"
              :key="i"
              :dataNum="item.value"
              :dataName="item.text"
              :stitClass="'fs-14 text-grey font-weight-regular'"
              :barClass="'mx-0'"
              :percentFix="true"
              :ready="true"
              class="mt-12"
              ><template v-slot:numText2
                ><span class="fs-14">%</span></template
              ></ProgressBar
            >
          </div>
        </v-card-text>
      </v-card>
      <!-- //복약 -->
    </div>
  </div>
</template>

<script>
  import ProgressBar from './ProgressBar.vue'
  import { onMounted, ref } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import { Navigation } from 'swiper/modules'
  import ActiveReportsEmpty from '@/components/ActiveReportsEmpty.vue'

  export default {
    components: {
      ProgressBar,
      Swiper,
      SwiperSlide,
      ActiveReportsEmpty
    },
    setup() {
      //sticky
      const stickyArea = ref()
      const navHeight = ref()
      const windowHeight = ref()
      const tabItems = ref([
        { titleTab: '주간 리포트' },
        { titleTab: '월간리포트' }
      ])
      const tab = ref(0)
      const swiperDate = ref()
      const weekSwiper = ref()
      const weekValue = ref()
      const swiperDateSlideWeek = ref([
        {
          date: '23.09.27 ~ 23.10.03',
          data: [
            {
              state: 'sucess',
              text: '인바디 체성분 데이터는 전 세계에서 사용되고 있는 체성분분석기 중 인바디 클라우드 서버에 연결된 장비를 통해 수집되는 데이터로 모든 데이터는 동의를 얻어 수집된다.'
            },
            {
              state: 'fail',
              text: '인바디 체성분 데이터는 전 세계에서 사용되고 있는 체성분분석기 중 인바디 클라우드 서버에 연결된 장비를 통해 수집되는 데이터로 모든 데이터는 동의를 얻어 수집된다.'
            }
          ]
        },
        {
          date: '23.10.04 ~ 23.10.10',
          data: [
            {
              state: 'sucess',
              text: '인바디 체성분 데이터는 전 세계에서 사용되고 있는 체성분분석기 중 인바디 클라우드 서버에 연결된 장비를 통해 수집되는 데이터로 모든 데이터는 동의를 얻어 수집된다.'
            },
            {
              state: 'fail',
              text: '인바디 체성분 데이터는 전 세계에서 사용되고 있는 체성분분석기 중 인바디 클라우드 서버에 연결된 장비를 통해 수집되는 데이터로 모든 데이터는 동의를 얻어 수집된다.'
            }
          ]
        },
        {
          date: '23.10.09 ~ 23.10.15',
          data: [
            {
              state: 'sucess',
              text: '인바디 체성분 데이터는 전 세계에서 사용되고 있는 체성분분석기 중 인바디 클라우드 서버에 연결된 장비를 통해 수집되는 데이터로 모든 데이터는 동의를 얻어 수집된다.'
            },
            {
              state: 'fail',
              text: '인바디 체성분 데이터는 전 세계에서 사용되고 있는 체성분분석기 중 인바디 클라우드 서버에 연결된 장비를 통해 수집되는 데이터로 모든 데이터는 동의를 얻어 수집된다.'
            }
          ]
        }
      ])

      const swiperDateOption = ref({
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: swiperDateSlideWeek.value.length - 1,
        loop: false,
        navigation: {
          nextEl: '.wrap-swiper-date .swiper-button-next',
          prevEl: '.wrap-swiper-date .swiper-button-prev'
        }
      })

      const setWeekSwiper = (swiper) => {
        weekSwiper.value = swiper
        weekValue.value =
          swiperDateSlideWeek.value[weekSwiper.value.activeIndex].data
      }

      const emotionChartValue = ref([
        {
          chartState: 'average',
          chartText: '보통',
          chartPercent: '',
          chartDay: '6'
        },
        {
          chartState: 'positive',
          chartText: '긍정',
          chartPercent: '',
          chartDay: '1'
        },
        {
          chartState: 'negation',
          chartText: '부정',
          chartPercent: '',
          chartDay: '0'
        }
      ])

      const emotionChart = (e) => {
        emotionChartValue.value.map((element) => {
          let emotionChartPercent = (element['chartPercent'] = Math.round(
            (parseInt(element['chartDay']) / e) * 100
          ))
        })
      }

      const top5List = ref([
        {
          stateText: '걱정하다',
          gagePercent: 50,
          gageText: 16
        },
        {
          stateText: '짜증나다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '슬프다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '무섭다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '후회하다',
          gagePercent: 20,
          gageText: 4
        },
        {
          stateText: '우울하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '불안하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '창피하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '외롭다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '심심하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '당황하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '긴장하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '시원섭섭하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '싱숭생숭하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '무덤덤하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '기쁘다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '즐겁다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '편하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '만족하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '상쾌하다',
          gagePercent: 20,
          gageText: 10
        },
        {
          stateText: '자신만만하다',
          gagePercent: 20,
          gageText: 10
        }
      ])
      const fastingBloodSugar = ref([
        {
          name: 'low',
          label: '저혈당'
        },
        {
          name: 'normal',
          label: '정상',
          value: '80',
          time: 'thisWeek'
        },
        {
          name: 'danger',
          label: '고혈당위험',
          value: '80',
          time: 'lastWeek'
        },
        {
          name: 'high',
          label: '고혈당'
        }
      ])
      const bloodSugarBeforeMeals = ref([
        {
          name: 'low',
          label: '저혈당',
          value: '80'
        },
        {
          name: 'normal',
          label: '정상',
          value: '80',
          time: 'lastWeek'
        },
        {
          name: 'danger',
          label: '고혈당위험',
          value: '80'
        },
        {
          name: 'high',
          label: '고혈당',
          time: 'thisWeek',
          value: '80'
        }
      ])
      const postprandialBloodSugar = ref([
        {
          name: 'low',
          label: '저혈당',
          value: '80',
          time: 'thisWeek'
        },
        {
          name: 'normal',
          label: '정상',
          value: '80',
          time: 'lastWeek'
        },
        {
          name: 'danger',
          label: '고혈당위험',
          value: '80'
        },
        {
          name: 'high',
          label: '고혈당',
          value: '80'
        }
      ])
      const bloodPressure = ref([
        {
          name: 'low',
          label: '저혈압',
          value: '80'
        },
        {
          name: 'normal',
          label: '정상',
          value: '80',
          time: 'lastWeek'
        },
        {
          name: 'danger',
          label: '전단계',
          value: '80'
        },
        {
          name: 'high',
          label: '1기',
          value: '80'
        },
        {
          name: 'higher',
          label: '2기',
          value: '80',
          time: 'thisWeek'
        }
      ])
      const activeReportRange = ref([
        { name: '월', state: true },
        { name: '화', state: true },
        { name: '수', state: true },
        { name: '목', state: false },
        { name: '금', state: true },
        { name: '토', state: true },
        { name: '일', state: false }
      ])
      const activeReportRangeBarLimit = ref(true)
      const activeReportRangeBarValue = ref([])
      const activeReportSmokingValue = ref([])
      const activeReportSmoking = ref([
        { name: '월', state: true },
        { name: '화', state: true },
        { name: '수', state: false },
        { name: '목', state: false },
        { name: '금', state: true },
        { name: '토', state: true },
        { name: '일', state: true }
      ])
      const activeReportSmokingLimit = ref(true)

      const chipsColorValue = (e) => {
        switch (e) {
          case 'low':
            return 'orange'
          case 'normal':
            return 'green'

          case 'danger':
            return 'orange'

          case 'high':
            return 'orange'

          case 'higher':
            return 'error'
        }
      }

      const activeReportRangeBar = (e, f, g) => {
        let activeReportRangePos = 0
        let activeReportRangeWidth = 0
        e.value.map((element, index, array) => {
          if (element['state'] == true) {
            if (f.value == true) {
              activeReportRangePos = index
              f.value = false
            }
            activeReportRangeWidth = index
          } else {
            if (f.value == false) {
              g.value.push({
                activeReportRangePos,
                activeReportRangeWidth
              })
              f.value = true
            }
          }

          if (index == e.value.length - 1 && element['state'] == true) {
            g.value.push({
              activeReportRangePos,
              activeReportRangeWidth
            })
          }
        })
      }

      const activeReportRangeBarRate = (pos, width) => {
        let leftPos = null
        if (Math.round((pos / 6) * 100) > 0) {
          leftPos = `left:` + Math.round((pos / 6) * 100 - 3) + '%'
        } else {
          leftPos = `left:` + Math.round((pos / 6) * 100) + '%'
        }

        let rateWidth =
          'width:' + Math.round(((width - pos) / 6) * 100 + 3) + '%'

        return [leftPos, rateWidth]
      }

      const activeReportItems = ref(null)
      const orderData = ref([
        { name: 'sectionWalk', data: false },
        { name: 'sectionEmotion', data: true },
        { name: 'sectionSleep', data: true },
        { name: 'sectionMeal', data: true },
        { name: 'sectionBodyComposition', data: false },
        { name: 'sectionBloodSugar', data: true },
        { name: 'sectionBloodPressure', data: true },
        { name: 'sectionSports', data: true },
        { name: 'sectionWater', data: true },
        { name: 'sectionDrink', data: true },
        { name: 'sectionSmoking', data: true },
        { name: 'sectionHeartRate', data: false },
        { name: 'sectionmeDication', data: false }
      ])
      const orderList = () => {
        const cardSection = document.querySelectorAll('.active-report-items')
        let orderIndex = 0
        let orderEmptyIndex = []
        orderData.value.map((el, key) => {
          if (el['data'] == true) {
            ++orderIndex
          } else {
            orderEmptyIndex.push(cardSection[key])
          }
        })
        orderEmptyIndex.map((element, idx) => {
          element.classList.add('order-empty-item' + (orderIndex + idx + 1))
        })
      }

      const drinkKind = ref('soju')
      const drink = () => {
        switch (drinkKind.value) {
          case 'beer':
            return '맥주'
          case 'soju':
            return '소주'
          case 'cheongju':
            return '청주'
          case 'liquor':
            return '양주'
          case 'makgeolli':
            return '막걸리'
          case 'wine':
            return '와인'
          case 'champagne':
            return '샴페인'
          case 'high-volume':
            return '고량주'
          case 'etc':
            return '기타'
        }
      }
      onMounted(() => {
        orderList()
        if (stickyArea.value) {
          const sticky = document.querySelector('.sticky')
          navHeight.value = sticky.offsetHeight + 'px'
          const stickyObserver = new IntersectionObserver(
            ([e]) => {
              if (
                !e.isIntersecting &&
                sticky !== null &&
                stickyArea.value !== null
              ) {
                if (
                  stickyArea.value.getBoundingClientRect().bottom <=
                  window.outerHeight
                ) {
                  sticky.classList.add('isFixed')
                }
              } else {
                sticky.classList.remove('isFixed')
              }
            },
            {
              root: null,
              threshold: [1]
            }
          )

          stickyObserver.observe(stickyArea.value)
        }
        emotionChart(7)
        activeReportRangeBar(
          activeReportRange,
          activeReportRangeBarLimit,
          activeReportRangeBarValue
        )
        activeReportRangeBar(
          activeReportSmoking,
          activeReportSmokingLimit,
          activeReportSmokingValue
        )
      })

      const mediProgressList = ref([
        {
          text: '알레르기약',
          value: 100
        },
        {
          text: '땡땡병원 독감약',
          value: 45
        },
        {
          text: '오메가-3',
          value: 65
        },
        {
          text: '건강 영양제',
          value: 0
        }
      ])

      return {
        modules: [Navigation],
        tabItems,
        tab,
        emotionChartValue,
        swiperDate,
        swiperDateSlideWeek,
        weekSwiper,
        weekValue,
        setWeekSwiper,
        swiperDateOption,
        navHeight,
        stickyArea,
        windowHeight,
        emotionChart,
        top5List,
        fastingBloodSugar,
        chipsColorValue,
        bloodSugarBeforeMeals,
        postprandialBloodSugar,
        bloodPressure,
        activeReportRange,
        activeReportRangeBar,
        activeReportRangeBarValue,
        activeReportRangeBarLimit,
        activeReportRangeBarRate,
        activeReportSmoking,
        activeReportSmokingLimit,
        activeReportSmokingValue,
        orderData,
        orderList,
        activeReportItems,
        mediProgressList,
        drinkKind,
        drink
      }
    }
  }
</script>
