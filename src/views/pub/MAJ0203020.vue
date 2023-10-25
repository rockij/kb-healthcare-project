<template>
  <div class="contents">
    <div class="report-title mb-4">
      <!-- picker -->
      <v-btn variant="text" class="fs-24 pa-0">
        <span class="pr-2">2023.08.03</span>
        <img src="@/assets/images/icon-arrow-down.svg" alt="" />
      </v-btn>
      <v-chip label size="small" class="chip-default"
        ><span class="text-dot">미연결</span></v-chip
      >
    </div>
    <div class="section-page bg py-8">
      <ReportResult :bnShow="'now'" :videBox="false" class="mb-4">
        휴레이 메시지는 아직 확정되지 않았다
      </ReportResult>

      <v-card variant="flat" rounded="xl" class="pa-4">
        <v-card-title class="pa-0">
          <p class="d-flex align-center">
            <span class="blood-sugar-max"><i class="icon"></i>최대</span>
            <span class="ml-2">110mg/dL</span>
          </p>
          <p class="d-flex align-center">
            <span class="blood-sugar-min"><i class="icon"></i>최소</span>
            <span class="ml-2">50mg/dL</span>
          </p>
        </v-card-title>

        <!-- chart -->
        <div class="pt-8">
          <v-sheet>
            <v-tabs v-model="tab" hide-slider class="tabs-round navy">
              <v-tab value="bloodSugarAll" class="btn-tab" :ripple="false"
                >전체</v-tab
              >
              <v-tab value="bloodSugarempty" class="btn-tab" :ripple="false"
                >혈당 기록하기</v-tab
              >
              <v-tab
                value="bloodSugarBeforeMeal"
                class="btn-tab"
                :ripple="false"
                >식전</v-tab
              >
              <v-tab value="bloodSugarAfterMeal" class="btn-tab" :ripple="false"
                >식후</v-tab
              >
            </v-tabs>
            <v-sheet>
              <v-window v-model="tab">
                <v-window-item value="bloodSugarAll">
                  <v-sheet class="container-chart"
                    ><img src="/src/assets/images/bloodsugarGraph.svg" alt=""
                  /></v-sheet>
                </v-window-item>

                <v-window-item value="bloodSugarempty"
                  ><v-sheet class="container-chart"
                    >공복</v-sheet
                  ></v-window-item
                >

                <v-window-item value="bloodSugarBeforeMeal"
                  ><v-sheet class="container-chart"
                    >식전</v-sheet
                  ></v-window-item
                >

                <v-window-item value="bloodSugarAfterMeal"
                  ><v-sheet class="container-chart"
                    >식후</v-sheet
                  ></v-window-item
                >
              </v-window>
            </v-sheet>
          </v-sheet>
          <div class="btn-area2">
            <v-btn
              variant="text"
              height="46px"
              class="bdr-8 fs-16 font-weight-bold skip"
              block
              >혈당 기록하기</v-btn
            >
          </div>
        </div>
      </v-card>
    </div>

    <!-- 혈당 기록 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">혈당 기록</v-btn>
      </h2>
      <div class="text-info-grey">최근 3개 기록만 표시됩니다</div>

      <!-- 기록 component -->
      <CardReport
        :btn="true"
        v-for="report in reports"
        :key="report.id"
        @handleClick="handleClick"
      >
        <template #date>{{ report.date }}</template>
        <!-- card 내용 -->
        <template #content>
          <v-chip
            label
            size="small"
            :color="
              report.state == 'errorLow' || report.state == 'errorHigh'
                ? '#EB5147'
                : report.state
            "
            class="chip-default chip-color"
          >
            {{ getText(report.state) }}
          </v-chip>
          <v-chip label size="small" class="chip-default ml-2">
            {{ report.device }}
          </v-chip>
          <dl class="dl dl-table">
            <dt>측정시기</dt>
            <dd class="font-weight-bold">
              <span>{{ report.recordPeriod }}</span>
            </dd>
            <dt>혈당</dt>
            <dd class="font-weight-bold" :class="report.state">
              <span>{{ report.bloodSugar }}</span
              >mmHg
            </dd>
            <dt v-if="report.hasMemo">메모</dt>
            <dd v-if="report.hasMemo">{{ report.hasMemo }}</dd>
          </dl>
        </template>
      </CardReport>
    </div>

    <!-- 식사 기록 -->
    <div class="section-page py-8 pb-0">
      <div class="pb-8">
        <h2 class="tit-03 tit-link pb-2">
          <v-btn block variant="text">식사 기록</v-btn>
        </h2>
        <div class="text-info-grey text-info-grey3">
          최근 3개 기록만 표시됩니다
        </div>

        <!-- 기록 component -->
        <CardReport
          :btn="true"
          v-for="reportsMeal in reportsMeal"
          :key="reportsMeal.id"
          class="report-food"
        >
          <template #date>{{ reportsMeal.date }}</template>
          <!-- card 내용 -->
          <template #content>
            <div class="content-grid">
              <v-chip
                label
                size="small"
                variant="flat"
                color="#F8F8F8"
                class="chip-default"
              >
                {{ reportsMeal.device }}
              </v-chip>
              <img
                :src="`/src/assets/images/${reportsMeal.img}`"
                alt=""
                class="img-food my-4"
              />
              <div class="category-list" role="list">
                <div class="chip-category" role="listitem">
                  <div class="category pr-2">측정시기</div>
                  <span>{{ reportsMeal.recordPeriod }}</span>
                </div>
                <div class="chip-category" role="listitem">
                  <div class="category pr-2">섭취음식</div>
                  <span>{{ reportsMeal.food }}</span>
                </div>
                <div class="chip-category" role="listitem">
                  <div class="category pr-2">총 칼로리</div>
                  <span>{{ reportsMeal.calories }}</span>
                </div>
                <div class="chip-category" role="listitem">
                  <div class="category pr-2">혈당</div>
                  <span :class="reportsMeal.state">{{
                    reportsMeal.calories
                  }}</span>
                </div>
              </div>
            </div>
          </template>
        </CardReport>

        <v-card class="mt-6 bdr-16 result-bloodSugar" variant="flat">
          <v-list class="py-4" bg-color="#F8F8F8">
            <v-list-subheader class="fs-18 font-weight-bold">
              <span>
                <span class="color-red">혈당 스파이크</span>가<br />
                걱정되는 음식은?
              </span>
              <v-avatar
                size="40"
                image="/src/assets/images/icon-bloodSugar.svg"
              ></v-avatar>
            </v-list-subheader>
            <template v-for="(item, i) in reportsMeal" :key="i">
              <v-list-item v-if="item.state == 'errorHigh'" lines="3">
                <template v-slot:prepend>
                  <v-avatar
                    size="28"
                    image="/src/assets/images/icon-dislike-red.svg"
                  ></v-avatar>
                </template>

                <v-list-item-title>{{ item.food }}</v-list-item-title>
              </v-list-item>
            </template>
            <p class="result-bloodSugar-msg bullet-circle-items">
              권장 칼로리 1,600kcal의 220kcal를 초과했어요 (기초대사량 포함)
            </p>
          </v-list>
        </v-card>
      </div>
    </div>

    <!-- 혈압 분석 -->
    <div class="section-page pt-8 pb-0">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">혈당 분석</v-btn>
      </h2>
      <div class="text-info-grey">기간별 인사이트를 보여드려요</div>
      <v-sheet class="pt-4">
        <v-tabs v-model="Analysis" class="tabs-sliding">
          <v-tab value="one" :ripple="false" class="btn-tab">전체</v-tab>
          <v-tab value="two" :ripple="false" class="btn-tab">공복</v-tab>
          <v-tab value="three" :ripple="false" class="btn-tab">식전</v-tab>
          <v-tab value="four" :ripple="false" class="btn-tab">식후</v-tab>
        </v-tabs>
        <v-sheet>
          <v-window v-model="Analysis">
            <v-window-item value="one"
              ><v-sheet class="container-chart reverse custom-padding">
                <div class="d-flex fs-16 font-weight-bold graph-date">
                  일평균 120mg/dL
                </div>
                <p class="fs-14 pb-4">
                  <span>최대 120mg/dL</span
                  ><span class="ml-3">최소 90mg/dL</span>
                </p>
                <div class="chart">
                  <img
                    src="@/assets/images/img-graph-bar2.png"
                    alt=""
                    class="graph-bar2"
                  />
                </div>
              </v-sheet>
            </v-window-item>

            <v-window-item value="two"
              ><v-sheet class="container-chart reverse"
                >공복</v-sheet
              ></v-window-item
            >

            <v-window-item value="three"
              ><v-sheet class="container-chart reverse"
                >식전</v-sheet
              ></v-window-item
            >

            <v-window-item value="four"
              ><v-sheet class="container-chart reverse"
                >식후</v-sheet
              ></v-window-item
            >
          </v-window>
        </v-sheet>
      </v-sheet>
    </div>
  </div>
</template>

<script>
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import { ref } from 'vue'

  export default {
    components: { CardReport, ReportResult },
    setup() {
      const tab = ref(null)
      const Analysis = ref(null)
      const reports = ref([
        {
          id: 0,
          date: '오전 10시 35분',
          device: '직접입력',
          state: 'success',
          recordPeriod: '공복',
          bloodSugar: '64',
          hasMemo: '사용자가 입력한 메모가 노출됩니다'
        },
        {
          id: 1,
          date: '오전 6시 35분',
          device: '직접입력',
          state: 'errorLow',
          recordPeriod: '식전',
          bloodSugar: '90'
        },
        {
          id: 2,
          date: '오전 6시 35분',
          device: '직접입력',
          state: 'errorHigh',
          recordPeriod: '식후',
          bloodSugar: '64'
        }
      ])

      const reportsMeal = ref([
        {
          id: 0,
          date: '오전 6시 45분',
          food: '계란, 사과, 바나나, 귤',
          device: '직접입력',
          recordPeriod: '아침',
          state: 'errorHigh',
          img: 'img-food.png',
          calories: '200kcal'
        },
        {
          id: 2,
          date: '오전 10시 45분',
          food: '마카롱, 반숙란',
          device: '직접입력',
          recordPeriod: '아침간식',
          state: 'errorHigh',
          img: 'img-food.png',
          calories: '300kcal'
        },
        {
          id: 3,
          date: '오후 11시 45분',
          food: '양념치킨',
          device: '직접입력',
          recordPeriod: '저녁',
          state: 'success',
          img: 'img-food.png',
          calories: '100kcal'
        }
      ])

      function getText(props) {
        switch (props) {
          case 'errorLow':
            return '저혈당'
          case 'success':
            return '정상'
          case 'errorHigh':
            return '고혈당'
        }
      }

      function handleClick() {
        console.log('emit')
      }
      return {
        reports,
        getText,
        Analysis,
        handleClick,
        reportsMeal,
        tab
      }
    }
  }
</script>
