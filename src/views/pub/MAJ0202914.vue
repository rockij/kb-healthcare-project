<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page bg pa-4">
      <BanerReport :bnShow="'bad'" :videBox="false" class="mb-4">
        수면부족은 혈압을 높일 수 있어요
      </BanerReport>
      <v-card variant="flat" rounded="xl" class="pa-6">
        <v-card-title class="pa-0">
          <strong class="fs-20"
            >오늘 수면 시간은<br />{{ duration }} 이에요</strong
          >
        </v-card-title>
        <div class="mt-8 d-flex justify-center">
          <div class="knob-container disabled">
            <div class="knobcontainer"></div>
            <div class="knob-text2">
              <span class="stxt">
                오후<br /><strong>{{ sleepStart }}</strong></span
              >
              <span class="bar">~</span>
              <span class="stxt">
                오전<br /><strong>{{ wakeStart }}</strong></span
              >
            </div>
          </div>
        </div>
        <div class="btn-area2 mt-6">
          <v-btn
            variant="flat"
            height="48px"
            class="bdr-8 fs-14 font-weight-bold"
            color="#FFD633"
            block
            ><span class="c-darkGray">직접 입력하기</span></v-btn
          >
        </div>
      </v-card>
      <!-- //차트 -->
    </div>

    <div class="section-page brt-0">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">수면 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 1주일의 수면 분석입니다</p>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab :ripple="false" class="fs-20">1주일</v-tab>
        <v-tab :ripple="false" class="fs-20">1개월</v-tab>
        <v-tab :ripple="false" class="fs-20">6개월</v-tab>
      </v-tabs>
      <div class="text-info-grey2 mt-7">
        2023.08.14~2023.08.24
        <p class="fs-16 mt-1 font-weight-bold">일일 평균 6시간 30분</p>
      </div>
      <div class="mt-5">
        <img
          src="/assets/images/img-graph-bar2.png"
          style="width: 100%"
          alt=""
        />
      </div>
    </div>
    <!-- //수면분석 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">수면 기록</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 3개 기록만 표시됩니다</p>
      <CardReport
        :btn="true"
        v-for="report in reports"
        :key="report.id"
        @handleClick="modal = true"
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
            v-if="report.device"
            label
            size="small"
            class="chip-default ml-2"
          >
            {{ report.device }}
          </v-chip>
          <dl class="dl">
            <dt class="fs-14">{{ report.title }}</dt>
            <dd class="font-weight-bold">{{ report.time }}</dd>
          </dl>
        </template>
      </CardReport>

      <Carousel
        :items-to-Show="1"
        :wrap-around="true"
        :autoplay="3000"
        class="baner-simple-swiper mt-8"
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
    <!-- //수면기록 -->

    <div class="section-page">
      <LifelogChallenge />
    </div>
    <!-- //챌린지 -->

    <div class="section-page pb-0">
      <LifelogHealthnews />
    </div>
    <!-- //건강뉴스 -->

    <DialogSetting
      :lists="modalList"
      v-model="modal"
      @close="modal = false"
      @modifyClick="modifyFunc"
      @deleteClick="delFunc"
    />
  </div>
</template>
<script>
  import router from '@/router'
  import VCalendar from '@/components/VCalendar.vue'
  import BanerReport from '@/components/BanerReport.vue'
  import CardReport from '@/components/CardReport.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import DialogSetting from '@/components/DialogSetting.vue' // 설정
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import { ref, onMounted } from 'vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  export default {
    components: {
      VCalendar,
      BanerReport,
      CardReport,
      BanerSimple,
      DialogSetting,
      LifelogChallenge,
      LifelogHealthnews,
      Carousel,
      Slide,
      Pagination
    },
    setup() {
      const reports = ref([
        {
          id: 1,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'primary',
          title: '수면시간',
          time: '7시간 1분'
        },
        {
          id: 2,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'success',
          title: '수면시간',
          time: '7시간 1분'
        },
        {
          id: 3,
          date: '오전 6:00',
          state: 'error',
          title: '수면시간',
          time: '7시간 1분'
        }
      ])
      function getText(props) {
        switch (props) {
          case 'primary':
            return '과다'
          case 'success':
            return '적정'
          case 'error':
            return '부족'
        }
      }

      const modal = ref(false)
      const modalTitle = ref('설정')
      const modalList = ref([
        {
          value: 0,
          text: '수정'
        },
        {
          value: 1,
          text: '삭제'
        }
      ])

      const modifyFunc = () => {
        modal.value = false
        alert('MAJ0202912 이동')
      }
      const delFunc = () => {
        alert('삭제')
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
          title: '운동 관리하러 가기',
          text: '수면과 함께 관리해보세요!',
          iconName: 'icon-dumbbell.svg',
          path: '/MAJ0202856'
        },
        {
          title: '기분 관리하러 가기',
          text: '수면과 함께 관리해보세요!',
          iconName: 'icon-circle-count3.svg',
          path: '/MAJ0202920'
        },
        {
          title: '혈당 관리하러 가기',
          text: '수면과 함께 관리해보세요!',
          iconName: 'icon-blood-sugar.svg',
          path: '/MAJ0203020'
        }
      ])
      function goPath(val) {
        router.push(val)
      }

      const modal2 = ref(false)

      const sleepStart = ref('')
      const wakeStart = ref('')
      const duration = ref('')
      const setTimeWheel = () => {
        $('.knobcontainer').timerangewheel({
          width: 214,
          height: 214,
          offset: 0,
          indicatorWidth: 32, // 휠 너비
          handleRadius: 16, // 핸들반경(픽셀)
          handleStrokeWidth: 0, // 핸들링 획 너비
          accentColor: '#00C378', // 라인바 컬러
          indicatorBackgroundColor: '#eee',
          handleFillColorStart: '#009C60', // 시작아이콘
          handleFillColorEnd: '#009C60', // 종료아이콘
          data: { start: '22:30', end: '07:00' },
          onChange: function (timeObj) {
            console.log(timeObj)
            sleepStart.value = timeObj.start
            wakeStart.value = timeObj.end
            duration.value = timeObj.duration
          }
        })
      }

      onMounted(() => {
        setTimeWheel()
      })

      return {
        reports,
        getText,
        modal,
        modalTitle,
        modalList,
        modifyFunc,
        delFunc,
        calendarAttr,
        banerList,
        goPath,
        modal2,
        sleepStart,
        wakeStart,
        duration,
        setTimeWheel
      }
    }
  }
</script>
