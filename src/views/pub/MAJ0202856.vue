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
        <v-card-text class="pa-0 fs-20 font-weight-bold" line="3">
          오늘 운동으로<br />1,532kcal 소모했어요
        </v-card-text>

        <!-- chart -->
        <div class="pt-8">
          <v-sheet class="container-chart"
            ><img src="/src/assets/images/exercise_graph.png" alt=""
          /></v-sheet>
          <div class="btn-area2">
            <v-btn
              variant="flat"
              height="46px"
              class="bdr-8 fs-16 font-weight-bold"
              color="#FCEBA6"
              block
              >직접 입력</v-btn
            >
            <v-btn
              variant="text"
              height="46px"
              class="bdr-8 fs-16 font-weight-bold skip"
              block
              >운동시작</v-btn
            >
          </div>
        </div>
      </v-card>
    </div>

    <!-- 운동기록 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">운동 기록</v-btn>
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
            color="#3F86F1"
            class="chip-default chip-color"
          >
            {{ report.state }}
          </v-chip>
          <v-chip
            label
            size="small"
            v-if="report.device != ''"
            class="chip-default ml-2"
            >{{ report.device }}</v-chip
          >
          <swiper
            class="card-swiper"
            :pagination="true"
            :modules="modules"
            :class="`swiper-` + report.id"
            v-if="report.picture"
          >
            <span class="swiper-counter" v-if="report.picture.length - 1 != 0"
              >+{{ report.picture.length - 1 }}</span
            >
            <swiper-slide v-for="slides in report.picture" :key="slides">
              <v-img
                aspect-ratio="16/9"
                cover
                :src="`/src/assets/images/` + slides"
              ></v-img>
            </swiper-slide>
          </swiper>
          <dl class="dl dl-table">
            <dt>총 운동시간</dt>
            <dd class="font-weight-bold">
              <span>{{ report.recordTime }}</span>
            </dd>
            <dt v-if="report.moving">총 이동거리</dt>
            <dd v-if="report.moving" class="font-weight-bold">
              <span>{{ report.moving }}</span>
            </dd>
            <dt>총 칼로리</dt>
            <dd class="font-weight-bold">
              <span class="color-blue">{{ report.recordCalorie }}</span>
            </dd>
            <dt v-if="report.hasMemo">메모</dt>
            <dd v-if="report.hasMemo">{{ report.hasMemo }}</dd>
          </dl>
        </template>
      </CardReport>
    </div>

    <!-- 운동 분석 -->
    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">운동 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">기간별 인사이트를 보여드려요</p>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab :ripple="false" class="fs-20">1주일</v-tab>
        <v-tab :ripple="false" class="fs-20">1개월</v-tab>
        <v-tab :ripple="false" class="fs-20">6개월</v-tab>
      </v-tabs>
      <div class="d-flex fs-14 mt-6 graph-date">2023.08.14~2023.08.24</div>
      <p class="fs-16 font-weight-bold pb-4">일일 평균 150kcal</p>
      <!-- <div class="fs-16 ml-auto font-weight-bold">일일 평균 2,000kcal</div> -->
      <img src="@/assets/images/img-graph-bar2.png" alt="" class="graph-bar2" />
    </div>
  </div>
</template>

<script>
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { ref } from 'vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import { Pagination } from 'swiper/modules'

  export default {
    components: {
      CardReport,
      ReportResult,
      Swiper,
      SwiperSlide
    },
    setup() {
      const tab = ref(null)
      const Analysis = ref(null)
      const reports = ref([
        {
          id: 0,
          date: '오전 6시 35분',
          device: '',
          state: '걷기',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal'
        },
        {
          id: 1,
          date: '오전 6시 35분',
          device: '',
          state: '달리기',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal'
        },
        {
          id: 2,
          date: '오전 10시 35분',
          device: '',
          state: '근력운동',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal',
          moving: '1.81km',
          hasMemo: '사용자가 입력한 메모가 노출됩니다',
          picture: ['exercise.png', 'exercise.png', 'exercise.png']
        }
      ])

      function handleClick() {
        console.log('emit')
      }
      const loading = ref(true)
      return {
        reports,
        Analysis,
        handleClick,
        tab,
        modules: [Pagination]
      }
    }
  }
</script>
