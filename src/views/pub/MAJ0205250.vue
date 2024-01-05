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
              오건강님의 <br /><span class="c-blue">이번달</span>를 분석했어요
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
      <v-card class="active-report-items" elevation="0" id="sectionWalk">
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
            지난달 대비 평균 걸음수가
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
              <span class="text">걸음기록 10일</span>
            </i>
            <p class="tit-report-items-circle">평균 20,345걸음</p>
            <p class="text-report-items-circle">
              평균 <span class="cnt">2,034</span>걸음
            </p>
          </div>
          <div class="tit-active-report-items">이번달 평균 걸음 수</div>
          <div class="chart">
            <img
              src="/assets/images/img-active-reports2.png"
              alt=""
              class="graph-bar2"
            />
          </div>
          <div class="tit-active-report-items">걸음 분석</div>
          <div class="wrap-round-cell">
            <div class="round-cell">
              <div class="tit-round-cell">총 이동거리</div>
              <p class="percent-round-cell"><span class="cnt">20.0</span>km</p>
            </div>

            <div class="round-cell">
              <div class="tit-round-cell">총 소요시간</div>
              <p class="percent-round-cell"><span class="cnt">3,600</span>분</p>
            </div>

            <div class="round-cell">
              <div class="tit-round-cell">평균 보폭</div>
              <p class="percent-round-cell"><span class="cnt">85</span>cm</p>
            </div>

            <div class="round-cell">
              <div class="tit-round-cell">걸음점수</div>
              <p class="percent-round-cell"><span class="cnt">340</span>점</p>
            </div>
          </div>
        </v-card-text>
      </v-card>
      <!-- //걸음 -->

      <!-- 감정 -->
      <v-card class="active-report-items" elevation="0" id="sectionEmotion">
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
            이번달은<br />
            <span class="cnt c-blue">보통</span>인 날이 많았어요
          </div>
          <div class="active-report-items-hint">
            평소에 <strong class="c-blue">관심있던 취미</strong>를 즐겨보세요
          </div>
          <div class="tit-active-report-items">
            제일 많았던 감정<small>감정기록 {{ emotionDay }}일</small>
          </div>
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
          </div>
          <div class="tit-active-report-items">감정 변화 흐름</div>
          <div class="chart">chart</div>
        </v-card-text>
      </v-card>
      <!-- //감정 -->

      <!-- 수면 -->
      <v-card class="active-report-items" elevation="0" id="sectionSleep">
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
          <div class="wrap-round-cell mt-6">
            <div class="round-cell align-center">
              <div class="tit-round-cell">평균 잠든 시간</div>
              <p class="percent-round-cell">
                <span class="cnt">오후 11:40</span>
              </p>
            </div>

            <div class="round-cell align-center">
              <div class="tit-round-cell">평균 일어난 시간</div>
              <p class="percent-round-cell">
                <span class="cnt">오전 8:30</span>
              </p>
            </div>
          </div>
          <div class="active-report-items-hint">
            수면시간은
            <strong class="c-blue">8시간이 넘지 않도록</strong> 유의해주세요
          </div>
          <div class="tit-active-report-items">
            평균 수면 시간<small>수면기록 5일</small>
          </div>
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
      <v-card class="active-report-items" elevation="0" id="sectionMeal">
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
            지난달 대비 평균 섭취 칼로리가
            <strong class="text-variation increase blue"
              ><span class="cnt">2,480</span>kcal 증가</strong
            >
            했어요
          </p>
          <div class="active-report-items-hint">
            수면시간은
            <strong class="c-blue">8시간이 넘지 않도록</strong> 유의해주세요
          </div>
          <div class="tit-active-report-items">
            평균 칼로리 비교차트<small>식사기록 10일</small>
          </div>
          <div class="chart">chart</div>
          <div class="tit-active-report-items">3대 영양소 평균 섭취량</div>
          <div class="wrap-round-cell cell-3">
            <div class="round-cell align-center">
              <v-img width="40" src="/assets/images/icon-food-01.svg"></v-img>
              <div class="tit-round-cell">탄수화물</div>
              <p class="percent-round-cell">
                <span class="cnt c-red">과다</span>
              </p>
            </div>

            <div class="round-cell align-center">
              <v-img width="40" src="/assets/images/icon-food-02.svg"></v-img>
              <div class="tit-round-cell">단백질</div>
              <p class="percent-round-cell">
                <span class="cnt c-green">충분</span>
              </p>
            </div>

            <div class="round-cell align-center">
              <v-img width="40" src="/assets/images/icon-food-03.svg"></v-img>
              <div class="tit-round-cell">지방</div>
              <p class="percent-round-cell">
                <span class="cnt c-orange">부족</span>
              </p>
            </div>
          </div>
          <ul class="list-circle mt-4">
            <li>탄수화물, 지방 섭취 조절이 필요해요</li>
            <li>영양소 권장 섭취량에 맞춰 조절해보세요</li>
          </ul>
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
            지난달 대비 평균 체수분이 30L로
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
              <span class="text">체성분기록 10회</span>
            </i>
            <p class="tit-report-items-circle">평균 체수분 300L</p>
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
      <v-card class="active-report-items" elevation="0" id="sectionBloodSugar">
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

          <div class="tit-active-report-items">
            이번달 평균 혈당<small>혈당 기록 20회</small>
          </div>
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

          <div role="tablist" class="tabs-simple2 mt-8 mb-4">
            <v-btn variant="text" role="tab" aria-selected="true">공복</v-btn>
            <v-btn variant="text" role="tab" aria-selected="false">식전</v-btn>
            <v-btn variant="text" role="tab" aria-selected="false">식후</v-btn>
          </div>
          <div class="chart">
            <img src="/assets/images/img-graph-blood-sugar.png" alt="" />
            <img src="/assets/images/img-graph-blood-sugar-legend.png" alt="" />
          </div>

          <div class="tit-active-report-items">혈당 기록</div>
          <div class="wrap-step-range-chart">
            <div class="list-active-report-average mt-0">
              <template
                v-for="fastingBloodSugarAverage in fastingBloodSugar"
                :key="fastingBloodSugarAverage"
              >
                <div
                  class="active-report-average-items justify-start align-start"
                >
                  <div class="tit-active-report-average">
                    {{ fastingBloodSugarAverage.title }}
                  </div>
                  <div class="wrap-active-report-average">
                    <div
                      class="text-active-report-average"
                      v-for="itemsBloodSugar in fastingBloodSugarAverage.contents"
                      :key="itemsBloodSugar"
                    >
                      <v-chip
                        label
                        size="small"
                        :color="chipsColorValue(itemsBloodSugar.name)"
                        class="chip-default chip-color"
                      >
                        {{ itemsBloodSugar.label }}
                      </v-chip>
                      <span class="active-report-average-cnt">{{
                        itemsBloodSugar.value
                      }}</span>
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <div class="d-flex mt-2">
              <v-list class="list-reference">
                <v-list-item class="list-reference-item" min-height="auto"
                  >공복/ 식전 70~100mg/dL, 식후(2시간) 90~140mg/dL 보다 낮은경우
                  저혈당, 높은 경우 고혈당에 해당</v-list-item
                >
              </v-list>
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
            지난달 대비 평균 수축기 혈압이
            <strong class="text-variation increase blue"
              ><span class="cnt">10</span>mmHg 증가</strong
            >,<br />이완기 혈압이
            <strong class="text-variation increase blue"
              ><span class="cnt">3</span>mmHg 증가</strong
            >
          </div>

          <div class="active-report-items-circle">
            <i class="icon-report-items-circle"
              ><img
                src="/assets/images/icon-active-blood-pressure.svg"
                alt=""
              />
              <span class="text">혈압기록 20회</span>
            </i>
            <p class="tit-report-items-circle">평균 158/73mmHg</p>
          </div>

          <div class="tit-active-report-items">혈압</div>
          <div class="chart">
            <img src="/assets/images/img-graph-blood-pressure.png" alt="" />
          </div>

          <div class="tit-active-report-items">혈압 기록</div>
          <div class="chart round chart-bubble">
            <div id="chartBubble" ref="chartBubble"></div>
          </div>
          <div class="d-flex mt-2">
            <v-list class="list-reference">
              <v-list-item class="list-reference-item" min-height="auto"
                >수축기 90~119mmHg, 이완기 60~79mmHg 보다 낮은경우 저혈당, 높은
                경우 고혈당에 해당</v-list-item
              >
            </v-list>
          </div>
        </v-card-text>
      </v-card>
      <!-- //혈압 -->
      <!-- 운동 -->
      <v-card class="active-report-items" elevation="0" id="sectionSports">
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
            지난달 대비 평균 운동시간이
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
              ><img src="/assets/images/icon-active-sports.svg" alt="" />
              <span class="text">운동기록 10회</span>
            </i>
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

          <div class="tit-active-report-items">가장 불탔던 날</div>
          <div class="wrap-active-report-sports-list">
            <div
              class="active-report-sports-list-items"
              v-for="(activeReportSportsList, key) in activeReportSportsList"
              :key="key"
            >
              <div class="active-report-sports-list-title">
                <p class="date">
                  <strong class="list-number">{{ key + 1 }}</strong>
                  {{ activeReportSportsList.day }}
                </p>
                <p class="text c-blue">
                  <strong>{{ activeReportSportsList.value }}</strong>
                </p>
              </div>
              <div class="active-report-sports-list-contents">
                <div
                  class="active-report-sports-list-text"
                  v-for="activeReportSportsItem in activeReportSportsList.items"
                  :key="activeReportSportsItem"
                >
                  <div class="active-report-sports-list-text-items">
                    <div class="title">
                      <i
                        class="icon-sports small"
                        :class="activeReportSportsItem.class"
                      ></i
                      >{{ activeReportSportsItem.name }}
                    </div>
                    <div class="text">
                      {{ activeReportSportsItem.state }}(<span class="time">{{
                        activeReportSportsItem.time
                      }}</span
                      >)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
      <!-- //운동 -->

      <!-- 수분 -->
      <v-card class="active-report-items" elevation="0" id="sectionWater">
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
            지난달 대비 평균 수분량이
            <strong class="text-variation increase green"
              ><span class="cnt">200</span>ml 증가</strong
            >했어요
          </div>
          <div class="active-report-items-hint">
            지금처럼 <strong class="c-blue">물 마시는 습관</strong>을
            유지해주세요
          </div>

          <div class="tit-active-report-items">
            평균 수분 섭취량<small>수분기록 10회</small>
          </div>
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
      <v-card class="active-report-items" elevation="0" id="sectionDrink">
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
            이번달 <strong>{{ drink() }}</strong
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
              />
              <span class="text">음주기록 10회</span>
            </i>
            <p class="tit-report-items-circle">총 15,000.3g</p>
          </div>

          <div class="tit-active-report-items">평균 알코올 섭취량</div>
          <div class="chart">
            <img
              src="/assets/images/img-graph-bar2.png"
              alt=""
              class="graph-bar2"
            />
          </div>

          <div class="tit-active-report-items">금주모드</div>
          <div class="wrap-round-cell">
            <div class="round-cell align-center">
              <div class="tit-round-cell">지난달 성공일</div>
              <div class="chart">
                <img src="/assets/images/img-ring-guage.svg" alt="" />
              </div>
              <p class="percent-round-cell">
                <span class="cnt font-weight-normal">00:00:00:00</span>
              </p>
            </div>
            <div class="round-cell align-center">
              <div class="tit-round-cell">이번달 성공일</div>
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
        </v-card-text>
      </v-card>
      <!-- //음주 -->

      <!-- 흡연 -->
      <v-card class="active-report-items" elevation="0" id="sectionSmoking">
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
            이번달 <strong>일반담배</strong>를 가장 많이 피웠고,<br />지난달
            대비 총 흡연량이
            <strong class="text-variation increase red"
              ><span class="cnt">2</span>개비 증가, </strong
            ><strong class="text-variation decrease green"
              ><span class="cnt">1</span>ml 감소, </strong
            >했어요
          </div>

          <div class="active-report-items-circle">
            <i class="icon-report-items-circle"
              ><img src="/assets/images/icon-active-smoking.svg" alt="" />
              <span class="text">흡연기록 10일</span>
            </i>
            <p class="tit-report-items-circle">총 15개비 / 50ml</p>
          </div>

          <div class="tit-active-report-items">1일 흡연량</div>
          <div class="wrap-round-cell">
            <div class="round-cell">
              <div class="tit-round-cell">1일 평균</div>
              <p class="percent-round-cell">
                <span class="cnt">0.7개비 / 1ml</span>
              </p>
            </div>
            <div class="round-cell">
              <div class="tit-round-cell">1일 최대</div>
              <p class="percent-round-cell">
                <span class="cnt">3개비 / 1ml</span>
              </p>
            </div>
          </div>

          <div class="tit-active-report-items">금연모드</div>
          <div class="wrap-round-cell">
            <div class="round-cell align-center">
              <div class="tit-round-cell">지난달 성공일</div>
              <div class="chart">
                <img src="/assets/images/img-ring-guage.svg" alt="" />
              </div>
              <p class="percent-round-cell">
                <span class="cnt font-weight-normal">00:00:00:00</span>
              </p>
            </div>
            <div class="round-cell align-center">
              <div class="tit-round-cell">이번달 성공일</div>
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
        </v-card-text>
      </v-card>
      <!-- //흡연 -->

      <!-- 심박 -->
      <v-card class="active-report-items" elevation="0" id="sectionHeartRate">
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
            지난달 대비 평균 최소 심박수
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
      <v-card class="active-report-items" elevation="0" id="sectionmeDication">
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
  import * as d3 from 'd3'
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
      const tab = ref(1)
      const swiperDate = ref()
      const weekSwiper = ref()
      const weekValue = ref()
      const emotionDay = ref()
      const swiperDateSlideWeek = ref([
        {
          date: '23년 8월',
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
          date: '23년 9월',
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
          date: '23년 10월',
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
          chartDay: '15'
        },
        {
          chartState: 'positive',
          chartText: '긍정',
          chartPercent: '',
          chartDay: '5'
        },
        {
          chartState: 'negation',
          chartText: '부정',
          chartPercent: '',
          chartDay: '0'
        }
      ])

      const emotionChart = (e) => {
        emotionDay.value = e
        emotionChartValue.value.map((element) => {
          let emotionChartPercent = (element['chartPercent'] = Math.round(
            (parseInt(element['chartDay']) / e) * 100
          ))
        })
      }

      const fastingBloodSugar = ref([
        {
          title: '공복혈당',
          contents: [{ name: 'low', label: '저혈당', value: '2회' }]
        },
        {
          title: '식전혈당',
          contents: [
            { name: 'low', label: '저혈당', value: '2회' },
            { name: 'normal', label: '정상', value: '1회' }
          ]
        },
        {
          title: '식후혈당',
          contents: [
            { name: 'danger', label: '고혈당위험', value: '1회' },
            { name: 'low', label: '저혈당', value: '8회' },
            { name: 'high', label: '고혈당', value: '10회' }
          ]
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
          value: '80'
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
            return 'error'

          case 'normal':
            return 'green'

          case 'danger':
            return 'orange'

          case 'high':
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

      const drinkKind = ref('beer')
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

      // bubble
      const defaultLimit = 5
      function render() {
        let idx = 0
        document.querySelector('#chartBubble').innerHTML = ''

        var json = {
          children: [
            { name: '혈압낮음', value: 10, class: 'low' },
            { name: '정상', value: 4, class: 'normal' },
            {
              name: '고혈압전단계',
              value: 1,
              class: 'danger'
            }
            // {
            //   name: '고혈압1단계',
            //   value: 3,
            //   class: 'high'
            // },
            // {
            //   name: '고혈압2단계',
            //   value: 10,
            //   class: 'higher'
            // }
          ].slice(0, defaultLimit)
        }
        const values = json.children.map((d) => d.value)
        const min = Math.min.apply(null, values)
        const max = Math.max.apply(null, values)
        const total = json.children.length

        var diameter = 290,
          color = d3.scaleOrdinal(d3.schemeCategory10)

        var bubble = d3.pack().size([diameter, diameter]).padding(5)

        var margin = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 10
        }

        var svg = d3
          .select('#chartBubble')
          .append('svg')
          .attr('viewBox', '0 0 ' + diameter + ' ' + diameter)
          .attr('width', diameter)
          .attr('height', diameter + 40)
          .attr('class', 'chart-svg')
          .attr('preserveAspectRatio', 'xMidYMin meet')

        var root = d3.hierarchy(json).sum(function (d) {
          return d.value
        })
        bubble(root)

        const legend = svg
          .append('g')
          .attr('class', 'lengend')
          .attr(
            'transform',
            'translate(' + margin.left + ',' + (diameter + 15) + ')'
          )
          .selectAll('g')
          .data(root.children)
          .enter()
          .append('g')

        legend
          .append('circle')
          .attr('class', getValueClass)
          .attr('r', '4')
          .attr('cx', '0.8em')
          .attr('cy', '-.1em')

        legend
          .append('text')
          .attr('x', 18)
          .attr('y', 0)
          .attr('dy', '.15em')
          .text(getLabel)
          .style('text-anchor', 'start')
          .style('font-size', 12)
          .style('fill', '#666')
        // Now space the groups out after they have been appended:
        const padding = 6

        legend.attr('transform', function (d, i) {
          if (i >= 4) {
            return 'translate(0, 15)'
          } else {
            return (
              'translate(' +
              (d3.sum(root.children, function (e, j) {
                if (j < i) {
                  return legend.nodes()[j].getBBox().width
                } else {
                  return 0
                }
              }) +
                padding * i) +
              ', 0)'
            )
          }
        })

        var node = svg
          .selectAll('.node')
          .data(root.children)
          .enter()
          .append('g')
          .attr('class', 'node')
          .attr('transform', function (d) {
            return 'translate(' + d.x + ' ' + d.y + ')'
          })
          .append('g')
          .attr('class', 'bubbleGraph')

        node
          .append('circle')
          .attr('r', function (d) {
            return d.r
          })
          .attr('class', getValueClass)

        node
          .append('text')
          .attr('dy', '.5em')
          .style('text-anchor', 'middle')
          .style('font-size', getFontSizeForItem)
          .style('font-weight', '600')
          .html(getValueText)
          .style('fill', '#ffffff')
          .style('pointer-events', 'none')
        function getValueClass(item) {
          return item.data.class
        }

        function getLabel(item) {
          return item.data.name
        }
        function getValueText(item) {
          return item.data.value
        }
        function truncate(label) {
          const max = 11
          return label
        }
        function getFontSizeForItem(item) {
          return getFontSize(item.data.value, min, max, total)
        }

        function getFontSizeForItemSmall(item) {
          return getFontSizeSmall(item.data.value, min, max, total)
        }
        function getFontSize(value, min, max, total) {
          const minPx = 12
          const maxPx = 14
          const pxRange = maxPx - minPx
          const dataRange = max - min
          const ratio = pxRange / dataRange
          const size = Math.min(maxPx, Math.round(value * ratio) + minPx)
          return `${size}`
        }

        function getFontSizeSmall(value, min, max, total) {
          const minPx = 8
          const maxPx = 13
          const pxRange = maxPx - minPx
          const dataRange = max - min
          const ratio = pxRange / dataRange
          const size = Math.min(maxPx, Math.round(value * ratio) + minPx)
          return `${size}`
        }
      }

      const activeReportSportsList = ref([
        {
          day: '10월 23일',
          value: '6,610kcal',
          items: [
            {
              class: 'bicycle',
              name: '자전거',
              state: '6,000kcal',
              time: '1:20:30'
            },
            {
              class: 'ping-pong',
              name: '탁구',
              state: '6,000kcal',
              time: '1:20:30'
            }
          ]
        },

        {
          day: '10월 23일',
          value: '6,610kcal',
          items: [
            {
              class: 'baseball',
              name: '야구',
              state: '6,000kcal',
              time: '1:20:30'
            },
            {
              class: 'golf',
              name: '골프',
              state: '6,000kcal',
              time: '1:20:30'
            }
          ]
        },

        {
          day: '10월 23일',
          value: '6,610kcal',
          items: [
            {
              class: 'muscular',
              name: '근력운동',
              state: '6,000kcal',
              time: '1:20:30'
            },
            {
              class: 'running',
              name: '달리기',
              state: '6,000kcal',
              time: '1:20:30'
            }
          ]
        }
      ])

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
        { name: 'sectionmeDication', data: true }
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

      const chartBubble = ref()
      const chartBubbleInterection = ref(true)
      onMounted(() => {
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

        if (chartBubble.value) {
          const bubbleChartRun = new IntersectionObserver(
            ([e]) => {
              if (e.isIntersecting) {
                if (
                  chartBubble.value.getBoundingClientRect().bottom <=
                    window.outerHeight &&
                  chartBubbleInterection.value == true
                ) {
                  render()
                  chartBubbleInterection.value = false
                }
              }
            },
            {
              root: null,
              threshold: [1]
            }
          )
          bubbleChartRun.observe(chartBubble.value)
        }

        emotionChart(20)
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
        orderList()
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
        emotionDay,
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
        mediProgressList,
        orderData,
        orderList,
        activeReportSportsList,
        chartBubble,
        chartBubbleInterection,
        drinkKind,
        drink
      }
    }
  }
</script>
