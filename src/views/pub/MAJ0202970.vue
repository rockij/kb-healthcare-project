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
        <v-card-title class="pa-0">
          <p class="d-flex align-center">
            <span class="blood-pressure-shrink"
              ><i class="icon"></i>수축기</span
            >
            <span class="ml-2">132-140mmHg</span>
          </p>
          <p class="d-flex align-center">
            <span class="blood-pressure-relaxation"
              ><i class="icon"></i>이완기</span
            >
            <span class="ml-2">30-32mmHg</span>
          </p>
        </v-card-title>
        <v-tabs align-tabs="start" class="tab-line mt-4">
          <v-tab class="btn-tab" :ripple="false">혈압</v-tab>
          <v-tab class="btn-tab" :ripple="false">맥박</v-tab>
        </v-tabs>
        <v-tabs align-tabs="start" hide-slider class="tabs-round navy mt-6">
          <v-tab class="btn-tab" :ripple="false"
            ><v-icon class="i-cal" />일별 조회</v-tab
          >
          <v-tab class="btn-tab" :ripple="false"
            ><v-icon class="i-time" />시간별 조회</v-tab
          >
        </v-tabs>
        <div class="mt-4">
          <!-- chart -->
          <img src="/assets/images/graph.svg" alt="" />
          <!-- //chart -->
        </div>
        <div class="btn-area2 mt-12">
          <v-btn
            variant="flat"
            height="46px"
            class="bdr-8 fs-14 font-weight-bold"
            color="#FCEBA6"
            block
            ><span class="c-darkGray">직접 입력하기</span></v-btn
          >
          <v-btn
            variant="text"
            height="46px"
            class="bdr-8 fs-14 font-weight-bold skip"
            block
          >
            <div class="tooltip-balloon arrow-bottom right green">
              측정 가능
            </div>
            <span class="c-darkGray">기기 측정하기</span>
          </v-btn>
        </div>
        <p class="mt-4 text-right text-grey3 fs-13">
          마지막 기록 23.11.01 오후 11:20
        </p>
      </v-card>
    </div>

    <!-- 혈압기록 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">혈압 기록</v-btn>
      </h2>
      <div class="text-info-grey fs-16">최근 3개 기록만 표시됩니다</div>

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
            :color="report.state"
            class="chip-default chip-color"
          >
            {{ getText(report.state) }}
          </v-chip>
          <v-chip
            label
            size="small"
            v-if="report.device != ''"
            class="chip-default ml-2"
            >{{ report.device }}</v-chip
          >
          <dl class="dl dl-table">
            <dt>맥박</dt>
            <dd class="font-weight-bold">
              <span>{{ report.recordPulse }}</span
              >bpm
            </dd>
            <dt>혈압</dt>
            <dd class="font-weight-bold" :class="report.state">
              <span>{{ report.recordBloodPressure }}</span
              >mmHg
            </dd>
            <dt v-if="report.hasMemo">메모</dt>
            <dd v-if="report.hasMemo">{{ report.hasMemo }}</dd>
          </dl>
        </template>
      </CardReport>
    </div>

    <!-- 혈압 분석 -->
    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">혈압 분석</v-btn>
      </h2>
      <div class="text-info-grey fs-16">최근 일주일의 혈압 분석입니다</div>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab :ripple="false" class="btn-tab">혈압</v-tab>
        <v-tab :ripple="false" class="btn-tab">맥박</v-tab>
      </v-tabs>
      <p class="fs-16 font-weight-bold mt-6">혈압 평균</p>
      <div class="d-flex fs-14 gap-13">
        <span>수축기 120mmHg</span><span>이완기 120mmHg</span>
      </div>
      <div class="mt-4">
        <!-- chart -->
        <img
          src="/assets/images/img-graph-bar2.png"
          alt=""
          style="max-width: 100%"
        />
        <!-- //chart -->
      </div>
      <div class="banner-area">
        <v-btn
          variant="flat"
          color="transparent"
          class="btn-banner"
          append-icon="mdi-chevron-right"
          height="auto"
          block
          :ripple="false"
        >
          <template #prepend>
            <v-icon icon="icon-prev-blood" size="32"></v-icon>
          </template>
          <div class="text">
            <p class="title">올바른 가정혈압 측정 방법 안내</p>
            <p class="small">올바른 측정 준비단계와 방법을 알려드려요</p>
          </div>
        </v-btn>
      </div>

      <Carousel
        :items-to-Show="1"
        :wrap-around="true"
        :autoplay="3000"
        class="baner-simple-swiper"
      >
        <Slide v-for="(item, i) in banerList" :key="i">
          <BanerSimple :iconName="item.iconName" @update="goPath(item.path)">
            <strong class="title">{{ item.title }}</strong>
            <p class="text">{{ item.text }}</p>
          </BanerSimple>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
      <!-- //배너 -->
    </div>
    <!-- //협압분석 -->

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
  import router from '@/router'
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { ref } from 'vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import 'swiper/css'

  export default {
    components: {
      VCalendar,
      CardReport,
      ReportResult,
      BanerSimple,
      Swiper,
      SwiperSlide,
      LifelogChallenge,
      LifelogHealthnews,
      Carousel,
      Slide,
      Pagination
    },

    setup() {
      const tab = ref(null)
      const Analysis = ref(null)
      const reports = ref([
        {
          id: 0,
          date: '오전 10시 35분',
          device: '기기',
          state: 'success',
          recordBloodPressure: '100',
          recordPulse: '120/80',
          hasMemo: '사용자가 입력한 메모가 노출됩니다'
        },
        {
          id: 1,
          date: '오전 6시 35분',
          device: '플랫폼',
          state: 'error',
          recordBloodPressure: '100',
          recordPulse: '132/32'
        },
        {
          id: 2,
          date: '오전 6시 35분',
          device: '',
          state: 'error',
          recordBloodPressure: '100',
          recordPulse: '132/32'
        }
      ])
      function getText(props) {
        switch (props) {
          case 'primary':
            return '증가'
          case 'success':
            return '안정'
          case 'error':
            return '위험(고혈압 2단계)'
        }
      }
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
      const banerList = ref([
        {
          title: '혈당 관리하러 가기',
          text: '혈압과 함께 관리해보세요!',
          iconName: 'icon-blood-sugar.svg',
          path: '/MAJ0203020'
        },
        {
          title: '심박 관리하러 가기',
          text: '혈압과 함께 관리해보세요!',
          iconName: 'icon-heart-03.svg',
          path: '/MAJ0203390'
        }
      ])
      function goPath(val) {
        router.push(val)
      }

      return {
        reports,
        getText,
        Analysis,
        handleClick,
        tab,
        calendarAttr,
        banerList,
        goPath
      }
    }
  }
</script>
