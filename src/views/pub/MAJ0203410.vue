<template>
  <div class="contents">
    <div class="report-title mb-4">
      <!-- picker -->
      <v-btn variant="text" class="fs-24 pa-0">
        <span class="pr-2">2023.08.03</span>
        <img src="@/assets/images/icon-arrow-down.svg" alt="" />
      </v-btn>
    </div>

    <div class="section-page py-8 bg-2 section-bg">
      <ReportResult
        :bnShow="'self'"
        :videBox="false"
        class="pb-4 calorie-report"
      >
        운동관련 휴레이 메시지 노출 예정
      </ReportResult>
      <v-card variant="flat" rounded="xl" class="calorie-card">
        <div class="top-info">
          <v-chip
            label
            size="small"
            variant="outlined"
            color="primary"
            class="chip-default chip-white"
            >체중유지</v-chip
          >
          <div class="calorie-desc">일 권장 칼로리 1500kcal</div>
        </div>
        <v-card-title class="pa-0 pt-1">
          <strong class="fs-20 calorie-title"
            >아직 900kcal <br />
            더 먹을수 있어요!</strong
          >
        </v-card-title>
        <div class="morning-wrap" v-if="morning">
          <img
            src="@/assets/images/img-morning-02.svg"
            alt=""
            class="calorie-img calorie-mask"
          />
        </div>
        <div class="lunch-wrap" v-if="lunch">
          <img
            src="@/assets/images/img-lunch-01.svg"
            alt=""
            class="calorie-img pt-8"
          />
        </div>
        <div class="dinner-wrap" v-if="dinner">
          <img
            src="@/assets/images/img-dinner-01.svg"
            alt=""
            class="calorie-img pt-8"
          />
        </div>
        <!-- chart -->
        <div class="btn-double d-flex pt-3">
          <v-btn variant="text" height="46" class="btn-summit"
            >식사 인증하기</v-btn
          >
        </div>
      </v-card>
    </div>

    <div class="calorie-bar">
      <div class="bar-title py-8">탄수화물 섭취가 많은 날</div>
      <div class="bar-area mt-10">
        <div :style="{ width: barType.bar1 + '%' }" class="bar bar-1">
          <div class="bar-info info1">{{ barType.bar1 + '%' }}</div>
        </div>

        <div :style="{ width: barType.bar2 + '%' }" class="bar bar-2">
          <div class="bar-info info2">{{ barType.bar2 + '%' }}</div>
        </div>

        <div :style="{ width: barType.bar3 + '%' }" class="bar bar-3">
          <div class="bar-info info3">{{ barType.bar3 + '%' }}</div>
        </div>
      </div>

      <div class="calendar-info type-2">
        <div class="state" v-for="(state, i) in states" :key="i">
          <v-avatar :color="state.color" size="8" />
          <div class="text">{{ state.text }}</div>
        </div>
      </div>

      <v-btn
        block
        variant="outlined"
        rounded="xl"
        height="48"
        :ripple="false"
        class="btn-search mt-5"
        color="#eee"
      >
        <span class="text type-4">
          영양 분석 보기
          <img src="@/assets/images/icon-arrow-down2.svg" alt="검색" />
        </span>
      </v-btn>
    </div>
    <div class="section-page pb-8 mt-8 pt-0"></div>

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
        v-for="report in reports"
        :key="report.id"
        class="report-food"
        @handleClick="modal2 = true"
      >
        <template #date>{{ report.date }}</template>
        <!-- card 내용 -->
        <template #content>
          <div class="content-grid">
            <!-- <v-chip
              label
              size="small"
              variant="flat"
              color="#F8F8F8"
              class="chip-default"
            >
              {{ report.device }}
            </v-chip> -->
            <img
              :src="`/src/assets/images/${report.img}`"
              alt=""
              class="img-food mb-4"
            />
            <div class="category-list" role="list">
              <div class="chip-category" role="listitem">
                <div class="category pr-2">측정시기</div>
                {{ getText(report.state) }}
              </div>
              <div class="chip-category" role="listitem">
                <div class="category pr-2">섭취음식</div>
                {{ report.food }}
              </div>
              <div class="chip-category" role="listitem">
                <div class="category pr-2">총 칼로리</div>
                <span class="text-blue">{{ report.calories }}</span>
              </div>
            </div>
          </div>
        </template>
      </CardReport>
    </div>
    <div class="section-page section-calorie">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">칼로리 내 먹을 수 있는 음식</v-btn>
      </h2>
      <div class="text-info-grey text-info-grey3">
        GI지수가 낮은 건강한 음식을 알려드릴께요
      </div>
      <div class="recommand-report pt-4">
        <div class="recommand-card" v-for="item in recommand" :key="item.id">
          <img :src="`/src/assets/images/${item.img}`" alt="" />
          <div class="text-area">
            <div>{{ item.food }}</div>
            <div class="text-calories">{{ item.calories }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">식사 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">기간별 인사이트를 보여드려요</p>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab :ripple="false" class="fs-20">1주일</v-tab>
        <v-tab :ripple="false" class="fs-20">1개월</v-tab>
        <v-tab :ripple="false" class="fs-20">6개월</v-tab>
      </v-tabs>
      <div class="d-flex fs-14 mt-6 mb-4 graph-date">2023.08.14~2023.08.24</div>
      <!-- <div class="fs-16 ml-auto font-weight-bold">일일 평균 2,000kcal</div> -->
      <img src="@/assets/images/img-graph-bar2.png" alt="" class="graph-bar2" />
    </div>
    <DialogSetting
      v-model="modal2"
      :btnModify="true"
      @close="modal2 = false"
      @deleteClick="delFunc"
    />
  </div>
</template>

<script>
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import DialogSetting from '@/components/DialogSetting.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: { ReportResult, CardReport, DialogSetting },
    setup() {
      const morning = true
      const lunch = false
      const dinner = false
      const isAlert = true
      const states = reactive([
        {
          color: '#FFCC00',
          text: '탄수화물'
        },
        {
          color: '#3F86F1',
          text: '단백질'
        },
        {
          color: '#687893',
          text: '지방'
        }
      ])
      const barType = ref({
        bar1: 65,
        bar2: 25,
        bar3: 10
      })
      const reports = ref([
        {
          id: 0,
          date: '오전 6시 45분',
          food: '계란, 사과, 바나나, 귤, 수박화채, 밤, 프렌치 토스트',
          device: '직접입력',
          state: 'morning',
          img: 'img-food.png',
          calories: '200kcal'
        },
        {
          id: 2,
          date: '오전 10시 45분',
          food: '마카롱, 반숙란',
          device: '직접입력',
          state: 'morningS',
          img: 'img-food.png',
          calories: '300kcal'
        },
        {
          id: 3,
          date: '오후 11시 45분',
          food: '양념치킨',
          device: '직접입력',
          state: 'lunch',
          img: 'img-food.png',
          calories: '100kcal'
        }
      ])
      const recommand = ref([
        {
          id: 0,
          food: '쌈밥 한정식',
          img: 'img-food.png',
          calories: '200kcal'
        },
        {
          id: 1,
          food: '들깨 칼국수',
          img: 'img-food.png',
          calories: '300kcal'
        },
        {
          id: 2,
          food: '쌈밥 한정식',
          img: 'img-food.png',
          calories: '100kcal'
        },
        {
          id: 3,
          food: '들깨 칼국수',
          img: 'img-food.png',
          calories: '300kcal'
        }
      ])
      const modal2 = ref(false)
      const modal2Title = ref('설정')
      const modal2List = ref([
        {
          value: 0,
          text: '수정'
        },
        {
          value: 1,
          text: '삭제'
        }
      ])
      const delFunc = () => {
        alert('삭제')
      }
      function getText(props) {
        switch (props) {
          case 'morning':
            return '아침'
          case 'morningS':
            return '아침간식'
          case 'lunch':
            return '점심'
          case 'dinner':
            return '저녁'
        }
      }
      return {
        modal2,
        modal2Title,
        modal2List,
        morning,
        lunch,
        dinner,
        states,
        barType,
        isAlert,
        reports,
        recommand,
        getText,
        delFunc
      }
    }
  }
</script>
