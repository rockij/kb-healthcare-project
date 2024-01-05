<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page bg pa-4">
      <ReportResult :bnShow="'now'" :videBox="false" class="mb-4">
        휴레이 메시지는 아직 확정되지 않았다
      </ReportResult>

      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <!-- 2차 범위 -->
        <v-card-title class="pa-0">
          <p class="d-flex align-center">
            <span class="blood-sugar-max c-blue">오늘 소모 칼로리</span>
            <span class="ml-4 font-weight-bold c-blue">200kcal</span>
          </p>
        </v-card-title>
        <v-card-text class="pa-0">
          <div class="list-vertical pt-4">
            <div class="list-vertical-items">
              <div class="title-list-vertical">이번주</div>
              <div class="text-list-vertical">3,000kcal</div>
            </div>
            <div class="list-vertical-items last">
              <div class="title-list-vertical">지난주</div>
              <div class="text-list-vertical">2,000kcal</div>
            </div>
          </div>

          <v-tabs align-tabs="start" hide-slider class="tabs-round navy mt-4">
            <v-tab class="btn-tab" :ripple="false">칼로리</v-tab>
            <v-tab class="btn-tab" :ripple="false">시간</v-tab>
            <v-tab class="btn-tab" :ripple="false">거리</v-tab>
          </v-tabs>
          <div class="container-chart reverse">
            <!-- chart -->
            <img src="/assets/images/garph-sports.png" alt="" />
            <!-- //chart -->
          </div>
        </v-card-text>
        <!-- //2차 범위 -->

        <v-card-text class="pa-0 fs-20 font-weight-bold lh-4" line="3">
          최근 1주일의 총 소모칼로리는<br />
          <NumberCounter :numberSetFrom="0" :numberSetTo="1532" />kcal 입니다.
          <p class="fs-13 font-weight-normal lh-default">
            건강한 운동습관을 유지해주세요
          </p>
        </v-card-text>

        <!-- chart -->
        <div>
          <v-sheet class="container-chart"
            ><div class="walking-chart">
              <CircleProgress
                :size="CircleProgressSize"
                :percent="CircleProgressPersent"
                :transition="CircleProgressSpeed"
                :fill-color="'#3F86F1'"
                :borderWidth="27"
                :borderBgWidth="27"
                :empty-color="'#eee'"
                :style="{ margin: '0 auto' }"
              />
              <figure
                class="circle-icon-flame"
                :style="`--circle-size:${CircleProgressSize}px; --circle-percent:${CircleProgressPersent};--circle-speed:${CircleProgressSpeed}ms`"
              ></figure>
              <div class="txbox">
                오늘
                <NumberCounter
                  :numberSetFrom="0"
                  :numberSetTo="1000"
                ></NumberCounter>
                <p>/ <span class="cnt">1,532</span></p>
              </div>
            </div></v-sheet
          >
          <div class="btn-area-middle">
            <v-btn
              variant="flat"
              height="46px"
              class="bdr-8 fs-14 font-weight-bold"
              color="#FCEBA6"
              ><span class="c-darkGray">직접 입력하기</span></v-btn
            >
            <v-btn
              variant="flat"
              height="46px"
              class="bdr-8 fs-14 font-weight-bold"
              color="#FCEBA6"
            >
              <div class="tooltip-balloon arrow-bottom right green">
                측정 가능
              </div>
              <span class="c-darkGray">스마트로프 측정하기</span>
            </v-btn>
            <v-btn
              variant="flat"
              height="46px"
              class="bdr-8 fs-14 font-weight-bold"
              color="#FFD633"
              block
              ><span class="c-darkGray">운동 시작하기</span></v-btn
            >
          </div>
        </div>
      </v-card>
    </div>
    <!-- 운동 분석 -->
    <div class="py-8">
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
      <img src="/assets/images/img-graph-bar2.png" alt="" class="graph-bar2" />

      <LiflogSlideBn />
      <!-- //배너 -->
    </div>

    <!-- 운동기록 -->
    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">운동 기록</v-btn>
      </h2>
      <div class="text-info-grey fs-16">최근 3개 기록만 표시됩니다</div>

      <!-- 기록 component -->
      <CardReport
        :btn="true"
        v-for="(report, index) in reports"
        :key="index"
        @handleClick="handleClick"
      >
        <template #date>{{ report.date }}</template>
        <!-- card 내용 -->
        <template #content>
          <span class="record-card-name">
            <i class="icon-sports small" :class="exerciseName[index]"></i
            ><span class="text">{{ report.state }}</span>
          </span>
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
            v-if="report.picture"
            virtual
          >
            <span class="swiper-counter" v-if="report.picture.length - 1 != 0"
              >+{{ report.picture.length - 1 }}</span
            >
            <swiper-slide v-for="slides in report.picture" :key="slides">
              <v-img
                aspect-ratio="16/9"
                cover
                min-height="1"
                :src="`/assets/images/` + slides"
                :virtualIndex="index"
              ></v-img>
            </swiper-slide>
          </swiper>
          <dl class="dl dl-table">
            <dt>총 운동시간</dt>
            <dd class="font-weight-bold">
              <span>{{ report.recordTime }}</span>
            </dd>
            <dt v-if="report.moving">
              {{
                exerciseName[index] == 'jumpRope' ? '총 점프수' : '총 이동거리'
              }}
            </dt>
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

    <div class="section-page">
      <LifelogChallenge />
    </div>
    <!-- //챌린지 -->

    <div class="section-page pb-0">
      <LifelogHealthnews />
    </div>
    <!-- //건강뉴스 -->
  </div>
</template>

<script>
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import NumberCounter from '@/components/NumberCounter.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import LiflogSlideBn from '@/views/pub/MAJ0202856_bn.vue' // 슬라이드배너
  import CircleProgress from 'vue3-circle-progress'
  import { onMounted, ref } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination } from 'swiper/modules'
  import { Virtual } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  export default {
    components: {
      VCalendar,
      CardReport,
      ReportResult,
      LifelogChallenge,
      LifelogHealthnews,
      Swiper,
      SwiperSlide,
      LiflogSlideBn,
      NumberCounter,
      CircleProgress
    },
    setup() {
      const tab = ref(null)
      const Analysis = ref(null)
      const exerciseName = ref([])
      const reports = ref([
        {
          id: 0,
          date: '03.23 오전 6:35',
          device: '플랫폼',
          state: '야구',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal'
        },
        {
          id: 1,
          date: '03.23 오전 6:35',
          device: '',
          state: '자전거',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal'
        },
        {
          id: 2,
          date: '03.23 오전 6:35',
          device: '',
          state: '탁구',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal',
          moving: '1.81km',
          hasMemo: '사용자가 입력한 메모가 노출됩니다',
          picture: ['bigfood.jpg']
        },
        {
          id: 3,
          date: '03.23 오전 6:35',
          device: '',
          state: '골프',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal',
          moving: '1.81km',
          hasMemo: '사용자가 입력한 메모가 노출됩니다',
          picture: ['bigimage.jpg', 'exercise.png', 'exercise.png']
        },
        {
          id: 4,
          date: '03.23 오전 6:35',
          device: '기기',
          state: '줄넘기',
          recordTime: '1시간 13분',
          recordCalorie: '208kcal',
          moving: '300점프',
          hasMemo: '사용자가 입력한 메모가 노출됩니다',
          picture: ['exercise.png', 'exercise.png', 'exercise.png']
        }
      ])

      const exerciseNameIcon = () => {
        reports.value.forEach((number, index) => {
          switch (reports.value[index].state) {
            case '야구':
              exerciseName.value.push('baseball')
              break
            case '자전거':
              exerciseName.value.push('bicycle')
              break
            case '탁구':
              exerciseName.value.push('ping-pong')
              break
            case '골프':
              exerciseName.value.push('golf')
              break
            case '근력운동':
              exerciseName.value.push('muscular')
              break
            case '달리기':
              exerciseName.value.push('running')
              break
            case '하이킹':
              exerciseName.value.push('hiking')
              break
            case '농구':
              exerciseName.value.push('basketball')
              break
            case '당구':
              exerciseName.value.push('billiards')
              break
            case '등산':
              exerciseName.value.push('climb')
              break
            case '런닝머신(걷기)':
              exerciseName.value.push('runningMachine')
              break
            case '런닝머신(달리기)':
              exerciseName.value.push('runningMachine')
              break
            case '배드민턴':
              exerciseName.value.push('badminton')
              break
            case '복싱':
              exerciseName.value.push('boxing')
              break
            case '볼링':
              exerciseName.value.push('bowling')
              break
            case '수영':
              exerciseName.value.push('swim')
              break
            case '스쿼시':
              exerciseName.value.push('squash')
              break
            case '스피닝':
              exerciseName.value.push('spinning')
              break
            case '에어로빅':
              exerciseName.value.push('aerobic')
              break
            case '요가':
              exerciseName.value.push('yoga')
              break
            case '족구':
              exerciseName.value.push('footVolleyball')
              break
            case '줄넘기':
              exerciseName.value.push('jumpRope')
              break
            case '축구':
              exerciseName.value.push('footVolleyball')
              break
            case '테니스':
              exerciseName.value.push('tennis')
              break
            case '필라테스':
              exerciseName.value.push('yoga')
              break
            case '주짓수':
              exerciseName.value.push('jiuJitsu')
              break
            case '태권도':
              exerciseName.value.push('taekwondo')
              break
            case '유도':
              exerciseName.value.push('judo')
              break
            case '배구':
              exerciseName.value.push('volleyball')
              break
            case '클라이밍':
              exerciseName.value.push('climbing')
              break
          }
        })
      }

      onMounted(() => {
        exerciseNameIcon()

        setTimeout(() => {
          CircleProgressPersent.value = 50
        }, 1000)
      })

      function handleClick() {
        console.log('emit')
      }

      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 10, 1)]
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 9, 10)]
        }
      ])

      const CircleProgressSize = ref(204)
      const CircleProgressPersent = ref(0)
      const CircleProgressSpeed = ref(3000)

      return {
        reports,
        Analysis,
        handleClick,
        tab,
        exerciseName,
        exerciseNameIcon,
        calendarAttr,
        CircleProgressSize,
        CircleProgressPersent,
        CircleProgressSpeed,
        modules: [Pagination, Virtual]
      }
    }
  }
</script>
