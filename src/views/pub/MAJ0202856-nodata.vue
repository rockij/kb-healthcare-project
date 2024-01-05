<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page bg pa-4">
      <ReportResult :bnShow="'now'" :videBox="false" class="mb-4">
        휴레이 메시지는 아직 확정되지 않았다
      </ReportResult>

      <v-card variant="flat" rounded="xl" class="pa-4">
        <v-card-text class="pa-0 fs-20 font-weight-bold" line="3">
          오늘 운동으로<br />
          <NumberCounter :numberSetFrom="0" :numberSetTo="1532"></NumberCounter
          >kcal 소모했어요
        </v-card-text>

        <!-- chart -->
        <div class="pt-8">
          <v-sheet class="container-chart"
            ><img src="/assets/images/exercise_graph.png" alt=""
          /></v-sheet>
          <div class="btn-area2">
            <v-btn
              variant="flat"
              height="46px"
              class="bdr-8 fs-14 font-weight-bold"
              color="#FCEBA6"
              block
              ><span class="c-darkGray">직접 입력</span></v-btn
            >
            <v-btn
              variant="text"
              height="46px"
              class="bdr-8 fs-14 font-weight-bold skip"
              block
              ><span class="c-darkGray">운동시작</span></v-btn
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
      <Nodata
        :icon="true"
        :iconSize="'big-record'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          즐겨하는 운동이 있으신가요?<br />꾸준히 운동을 실천하고 기록해 보세요
        </div>
      </Nodata>
    </div>

    <!-- 운동 분석 -->
    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">운동 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 3개 기록만 표시됩니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-analysis'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          즐겨하는 운동이 있으신가요?<br />꾸준히 운동을 실천하고 기록해 보세요
        </div>
      </Nodata>

      <LiflogSlideBn />
      <!-- //배너 -->
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
  import { onMounted, ref } from 'vue'
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import NumberCounter from '@/components/NumberCounter.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import LiflogSlideBn from '@/views/pub/MAJ0202856_bn.vue' // 슬라이드배너
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination } from 'swiper/modules'
  import { Virtual } from 'swiper/modules'
  import Nodata from '@/components/nodata/Nodata.vue'
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
      Nodata
    },
    setup() {
      const tab = ref(null)
      const Analysis = ref(null)
      const exerciseName = ref([])
      const reports = ref([
        {
          id: 0,
          date: '03.23 오전 6:35',
          device: '',
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
          picture: ['exercise.png', 'exercise.png', 'exercise.png']
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
          }
        })
      }

      onMounted(() => {
        exerciseNameIcon()
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

      return {
        reports,
        Analysis,
        handleClick,
        tab,
        exerciseName,
        exerciseNameIcon,
        calendarAttr,

        modules: [Pagination, Virtual]
      }
    }
  }
</script>
