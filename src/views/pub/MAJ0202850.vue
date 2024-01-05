<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page bg pa-4" style="z-index: 5">
      <BanerReport :bnShow="'good'" :videBox="false" class="mb-4">
        자리에서 일어나 조금 더 걸어볼까요?
      </BanerReport>
      <v-card
        rounded="xl"
        class="px-4 py-6 overflow-visible"
        style="z-index: 1"
      >
        <v-card-title class="pa-0">
          <span class="fs-20"
            ><strong>4,000</strong>걸어서<br /><strong>1510kcal</strong>
            소모했어요</span
          >
        </v-card-title>
        <!-- chart -->
        <v-btn @click="CircleProgressTestFunc">값변화</v-btn>
        <div class="mt-8 walking-chart">
          <CircleProgress
            :size="CircleProgressSize"
            :percent="CircleProgressPersent"
            :transition="CircleProgressSpeed"
            :fill-color="'#FFC423'"
            :borderWidth="27"
            :borderBgWidth="27"
            :empty-color="'#eee'"
            :style="{ margin: '0 auto' }"
          />
          <figure
            class="circle-icon-shoes"
            :style="`--circle-size:${CircleProgressSize}px; --circle-percent:${CircleProgressPersent};--circle-speed:${CircleProgressSpeed}ms`"
          ></figure>
          <div class="txbox">
            목표 걸음
            <span class="numberCounter">1,000</span>
          </div>
        </div>
        <ul class="list-xbase mt-4">
          <li v-for="item in goalsList" :key="item.id">
            <strong class="title">{{ item.value }}</strong
            >{{ item.text }}
            <Tooltip
              v-if="item.tooltip === true"
              v-model="toolTip1"
              @close="toolTip1 = false"
              title="보폭안내"
            >
              케어님의 권장 보폭은 64cm에요!
            </Tooltip>
          </li>
        </ul>
      </v-card>
    </div>
    <!-- //차트 -->

    <div class="section-page pos-reset brt-0">
      <div class="d-flex align-center">
        <h2 class="tit-03 pb-0">나의 걸음 3대</h2>
        <v-btn variant="text" class="ml-auto" color="#888" @click="modal = true"
          >기준 안내</v-btn
        >
        <!-- 기준안내 팝업 -->
        <DialogStepInfo v-model="modal" @close="modal = false" />
        <!-- //기준안내 팝업 -->
      </div>
      <ProgressBar
        :dataNum="86"
        :countValueOn="false"
        :noCount="false"
        :minMax="true"
        :barClass="'opacity'"
        class="mt-12 px-2"
      >
        <template v-slot:numText1
          ><v-icon class="icon-walk mr-1"></v-icon>걸음중급자&nbsp;</template
        >
        <template v-slot:numText2
          ><span class="text-yellow">3점</span></template
        >
      </ProgressBar>
      <ul class="progress-list mt-1">
        <li v-for="item in mystepList" :key="item.id">
          {{ item.name }}<span class="num">{{ item.text }}</span>
        </li>
      </ul>
      <div class="d-flex mt-4 gap-8">
        <div
          v-for="item in mystepResult"
          :key="item.id"
          class="list-smcard flex-1-1-100"
        >
          <img :src="`/assets/images/${item.iname}`" class="icon" alt="" />
          <strong class="num">{{ item.num }}</strong>
          <span class="text">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <!-- //나의 걸음 3대 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">비교 데이터</h2>
      <p class="text-info-grey fs-16">
        다양한 비교군 걸음 데이터를 분석해드려요
      </p>
      <div class="d-flex mt-5 gap-8">
        <template v-for="item in compareList" :key="item.id">
          <div class="list-smcard flex-1-1-100">
            <img :src="`/assets/images/${item.iname}`" class="icon" alt="" />
            <strong class="num">{{ item.num }}</strong>
            <span class="text">{{ item.text }}</span>
          </div>
        </template>
      </div>
    </div>
    <!-- //비교 데이터 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">걸음 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 1주일의 걸음 분석입니다</p>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab :ripple="false" class="fs-20">1주일</v-tab>
        <v-tab :ripple="false" class="fs-20">1개월</v-tab>
        <v-tab :ripple="false" class="fs-20">6개월</v-tab>
      </v-tabs>
      <div class="list-bside mt-6">
        <ul class="list">
          <li class="fs-14">2023.08.14~2023.08.24</li>
          <li class="mt-0 align-center">
            <span class="fs-16 mt-1 font-weight-bold"
              >일일 평균 20,500걸음</span
            >
            <span class="tagbox ml-auto">1,800kcal 소모</span>
          </li>
        </ul>
      </div>
      <div class="mt-5">
        <img
          src="/assets/images/img-graph-bar2.png"
          style="width: 100%"
          alt=""
        />
      </div>
    </div>
    <!-- //걸음분석 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">걸음 기록</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 3개 기록만 표시됩니다</p>
      <CardReport
        class="mt-6"
        v-for="report in reports"
        :key="report.id"
        @handleClick="handleClick"
      >
        <template #date>{{ report.date }}</template>
        <template #content>
          <v-chip label size="small" class="chip-default">
            {{ report.tag }}
          </v-chip>
          <dl v-if="report.title" class="dl">
            <dt class="fs-14">{{ report.title }}</dt>
            <dd class="point font-weight-bold">{{ report.steps }} 걸음</dd>
          </dl>
          <dl v-if="report.title2" class="dl">
            <dt class="fs-14">{{ report.title2 }}</dt>
            <dd class="font-weight-bold">{{ report.record }} 걸음</dd>
          </dl>
        </template>
      </CardReport>
      <!-- //기록 component -->

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
    <!-- //걸음기록 -->

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
  import NumberCounter from '@/components/NumberCounter.vue'
  import ProgressBar from './ProgressBar.vue'
  import Tooltip from '@/components/Tooltip2.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import BanerReport from '@/components/BanerReport.vue'
  import CardReport from '@/components/CardReport.vue'
  import DialogStepInfo from '@/views/pub/MAJ0202851.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import CircleProgress from 'vue3-circle-progress'
  import { ref, reactive, onMounted } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import 'swiper/css'
  import 'vue3-carousel/dist/carousel.css'
  export default {
    components: {
      Tooltip,
      ProgressBar,
      BanerSimple,
      VCalendar,
      BanerReport,
      CardReport,
      DialogStepInfo,
      Swiper,
      SwiperSlide,
      Carousel,
      Slide,
      Pagination,
      LifelogChallenge,
      LifelogHealthnews,
      NumberCounter,
      CircleProgress
    },
    setup() {
      const date = ref(new Date())
      const weekday = reactive(['일', '월', '화', '수', '목', '금', '토'])
      const calendarWeek = ref(true)
      const calendarMonth = ref(false)
      const goalsList = reactive([
        {
          id: 1,
          value: '2.7km',
          text: '이동거리'
        },
        {
          id: 2,
          value: '12’59”',
          text: '소모시간'
        },
        {
          id: 3,
          value: '85cm',
          text: '보폭',
          tooltip: true
        }
      ])
      const reports = ref([
        {
          id: 1,
          date: '오전 6:00',
          tag: '플랫폼',
          title: '걸음수',
          steps: '15,000',
          title2: '칼로리',
          record: '2,000'
        },
        {
          id: 2,
          date: '오전 6:00',
          tag: '플랫폼',
          title: '걸음수',
          steps: '15,000',
          title2: '총 칼로리',
          record: '2,000'
        },
        {
          id: 3,
          date: '오전 6:00',
          tag: '플랫폼',
          title: '걸음수',
          steps: '15,000',
          title2: '총 칼로리',
          record: '2,000'
        }
      ])
      function getText(props) {
        switch (props) {
          case 'primary':
            return '증가'
          case 'success':
            return '안정'
          case 'error':
            return '부족'
        }
      }
      const mystepList = reactive([
        {
          id: 1,
          name: '입문자',
          text: '0~119'
        },
        {
          id: 2,
          name: '중급',
          text: '120~249'
        },
        {
          id: 3,
          name: '고급',
          text: '250~449'
        },
        {
          id: 4,
          name: '선수급',
          text: '450~'
        }
      ])
      const mystepResult = reactive([
        {
          id: 1,
          num: '120점',
          text: '최고걸음',
          iname: 'icon-star-award.svg'
        },
        {
          id: 2,
          num: '120점',
          text: '누적 걸음',
          iname: 'icon-shoes-plus.svg'
        },
        {
          id: 3,
          num: '100점',
          text: '목표 달성일',
          iname: 'icon-target.svg'
        }
      ])
      const compareList = reactive([
        {
          id: 1,
          num: '20%',
          text: '여성상위 기준',
          iname: 'icon-person-red.svg'
        },
        {
          id: 2,
          num: '20%',
          text: '또래상위 기준',
          iname: 'icon-person-orange.svg'
        },
        {
          id: 3,
          num: '20%',
          text: '동일 BMI 기준',
          iname: 'icon-bmi.svg'
        }
      ])

      function handleClick() {
        console.log('emit')
      }

      const modal = ref(false)

      const toolTip1 = ref(false)

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
          text: '걸음과 함께 관리해보세요!',
          iconName: 'icon-dumbbell.svg',
          path: '/MAJ0202856'
        },
        {
          title: '체성분 관리하러 가기',
          text: '걸음과 함께 관리해보세요!',
          iconName: 'icon-weight.svg',
          path: '/MAJ0203120'
        }
      ])
      function goPath(val) {
        router.push(val)
      }

      const CircleProgressSize = ref(204)
      const CircleProgressPersent = ref(0)
      const CircleProgressSpeed = ref(3000)

      const CircleProgressTestFunc = () => {
        CircleProgressPersent.value = 0
        CircleProgressSpeed.value = 0
        setTimeout(() => {
          alert('값불러오기')
          CircleProgressSpeed.value = 3000
          CircleProgressPersent.value = 20
        }, 500)
      }

      onMounted(() => {
        setTimeout(() => {
          CircleProgressPersent.value = 40
        }, 1000)
      })

      return {
        date,
        weekday,
        calendarWeek,
        calendarMonth,
        goalsList,
        reports,
        getText,

        mystepList,
        mystepResult,
        compareList,

        handleClick,

        modal,
        toolTip1,
        calendarAttr,
        banerList,
        goPath,

        CircleProgressSize,
        CircleProgressPersent,
        CircleProgressSpeed,
        CircleProgressTestFunc
      }
    }
  }
</script>
