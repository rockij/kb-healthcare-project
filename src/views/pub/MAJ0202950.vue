<template>
  <div class="contents pt-0">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page bg px-4 pt-4 pb-2">
      <BanerReport :bnShow="'good'" :videBox="false" class="mb-4">
        휴레이 메시지는 아직 확정되지 않았다
      </BanerReport>
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <div class="d-flex">
          <v-card-title
            v-if="drinkMode === false"
            class="pa-0 fs-20 font-weight-bold"
            >오늘 마신 음주량은<br />총 360g 예요
            <Tooltip
              v-model="toolTip1"
              @close="toolTip1 = false"
              :handleOption="'icon-big'"
            >
              세계보건기구(WHO)에서는 순수 알코올 섭취양으로 환산하였을 때
              남자는 하루 40g 미만, 여자는 하루 20g미만을 섭취하도록 권고하고
              있습니다
            </Tooltip>
          </v-card-title>
          <v-switch
            class="switch-default switch-title flex-0-0 align-self-start ml-auto"
            v-model="drinkMode"
            label="금주모드"
            color="#FFD338"
            hide-details
            @click="drinkModeCheck"
          ></v-switch>
        </div>
        <template v-if="drinkMode === false">
          <Carousel
            :items-to-show="2.1"
            :wrap-around="true"
            class="life-count-swiper type mt-7"
          >
            <Slide v-for="item in alcoholTypeList" :key="item.value">
              <AlcholAmount
                :iconName="alcoholTypeIcon"
                :iconNum="item.value"
                :text="item.text"
                :numcount="item.cup"
                @update:minus="item.cup > 0 ? item.cup-- : 0"
                @update:plus="item.cup++"
              />
            </Slide>
          </Carousel>
        </template>
        <div v-if="drinkMode === true" class="countdown-flip mt-6">
          <div class="clock">
            <div class="digit">
              <div ref="day" class="card">
                <div class="face face-front"></div>
                <div class="face face-back"></div>
              </div>
              <div class="num">{{ d }}</div>
            </div>
            일
          </div>
          <div class="clock">
            <div class="digit">
              <div ref="hour" class="card">
                <div class="face face-front"></div>
                <div class="face face-back"></div>
              </div>
              <div class="num">{{ h }}</div>
            </div>
            시
          </div>
          <div class="clock">
            <div class="digit">
              <div ref="minute" class="card">
                <div class="face face-front"></div>
                <div class="face face-back"></div>
              </div>
              <div class="num">{{ m }}</div>
            </div>
            분
          </div>
          <div class="clock">
            <div class="digit">
              <div ref="second" class="card">
                <div class="face face-front"></div>
                <div class="face face-back"></div>
              </div>
              <div class="num">{{ s }}</div>
            </div>
            초
          </div>
        </div>
        <div class="btn-area2 mt-6">
          <v-btn
            v-if="drinkMode === false"
            variant="text"
            height="46px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            :disabled="disabledCheck"
            >저장하기</v-btn
          >
          <v-btn
            v-if="drinkMode === true && !drinkBtn"
            variant="text"
            height="46px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            @click="watchHandle('start')"
            >금주 시작</v-btn
          >
          <v-btn
            v-if="drinkBtn"
            variant="text"
            height="46px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            @click="watchHandle('end')"
            >금주 종료</v-btn
          >
        </div>
      </v-card>
      <template v-if="drinkMode === false">
        <v-divider
          class="border-opacity-100 divider-dotted mx-4"
          :thickness="1"
        />
        <v-card
          variant="flat"
          rounded="xl"
          class="px-4 pt-3 pb-4 d-flex align-center"
        >
          <ul>
            <li
              class="d-flex mt-1"
              v-for="list in alcoholValList"
              :key="list.id"
            >
              <span class="badge waiting">{{ list.text }}</span>
              <span class="font-weight-bold ml-2">{{ list.count }}</span>
            </li>
          </ul>
        </v-card>
      </template>
    </div>
    <!-- //금주모드선택 -->

    <div v-if="drinkMode === true" class="section-page">
      <h2 class="tit-03">금주하면 생기는 긍정적인 변화</h2>
      <div
        v-for="list in nalcoholList"
        :key="list.id"
        class="list-iconlst2 mt-2"
      >
        <i :class="`icon${list.id}`"></i>
        <p>{{ list.text }}</p>
      </div>
    </div>
    <!-- //금주긍정변화 -->

    <div v-if="drinkMode === false" class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">음주 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">기간별 인사이트를 보여드려요</p>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab :ripple="false" class="fs-20">1주일</v-tab>
        <v-tab :ripple="false" class="fs-20">1개월</v-tab>
        <v-tab :ripple="false" class="fs-20">6개월</v-tab>
      </v-tabs>
      <div class="text-info-grey2 mt-7">
        2023.08.14~2023.08.24
        <p class="fs-16 mt-1 font-weight-bold">평균 10,500ml</p>
      </div>
      <div class="mt-5">
        <img
          src="@/assets/images/img-graph-bar2.png"
          style="width: 100%"
          alt=""
        />
      </div>
    </div>
    <!-- //음주분석 -->

    <div class="section-page">
      <template v-if="drinkMode === false">
        <h2 class="tit-03 tit-link">
          <v-btn block variant="text">음주 기록</v-btn>
        </h2>
        <p class="text-info-grey fs-16 mb-6">최근 3개 기록만 표시됩니다</p>
        <CardReport
          :btn="true"
          v-for="report in reports"
          :key="report.id"
          @handleClick="modal = true"
        >
          <template #date>{{ report.date }}</template>
          <template #content>
            <dl v-if="report.title" class="dl">
              <dt class="fs-14">{{ report.title }}</dt>
              <dd v-html="report.count" class="font-weight-bold"></dd>
            </dl>
            <dl v-if="report.title2" class="dl">
              <dt class="fs-14">{{ report.title2 }}</dt>
              <dd v-html="report.ml" class="font-weight-bold text-blue"></dd>
            </dl>
          </template>
        </CardReport>
      </template>
      <!-- //음주기록 -->

      <template v-if="drinkMode === true">
        <h2 class="tit-03 tit-link">
          <v-btn block variant="text">금주 기록</v-btn>
        </h2>
        <p class="text-info-grey fs-16 mb-6">최근 3개 기록만 표시됩니다</p>
        <CardReport
          :btn="true"
          v-for="report in reports2"
          :key="report.id"
          @handleClick="modal = true"
        >
          <template #date>{{ report.date }}</template>
          <template #content>
            <dl v-if="report.title" class="dl">
              <dt class="fs-14">{{ report.title }}</dt>
              <dd v-html="report.count" class="font-weight-bold"></dd>
            </dl>
            <dl v-if="report.title2" class="dl">
              <dt class="fs-14">{{ report.title2 }}</dt>
              <dd v-html="report.ml" class="font-weight-bold"></dd>
            </dl>
          </template>
        </CardReport>
      </template>
      <!-- //금주시간 -->

      <Carousel
        :items-to-Show="1.1"
        :wrap-around="true"
        :autoplay="3000"
        class="baner-simple-swiper mt-8"
      >
        <Slide v-for="(item, i) in banerList" :key="i">
          <BanerSimple :iconName="item.iconName">
            <strong class="title">{{ item.title }}</strong>
            <p class="text">{{ item.text }}</p>
          </BanerSimple>
        </Slide>
      </Carousel>
      <!-- //배너 -->
    </div>

    <div class="section-page">
      <h2 class="tit-03">챌린지</h2>
      <p class="text-info-grey fs-16">챌린지 관련 서브 텍스트 노출</p>
      <swiper :slides-per-view="1.7" :space-between="16" class="swiper-card">
        <swiper-slide v-for="swiperCard in swiperCard" :key="swiperCard">
          <v-card :line="2" class="swiperCard" elevation="0" color="#F8F8F8">
            <v-img
              :src="`/src/assets/images/` + swiperCard.src"
              cover
              min-height="1"
            >
            </v-img>

            <v-card-text>{{ swiperCard.title }}</v-card-text>
          </v-card>
        </swiper-slide>
      </swiper>
    </div>
    <!-- //챌린지 -->

    <div class="section-page pb-0">
      <h2 class="tit-03">오건강님을 위한 건강뉴스</h2>
      <ul class="news-list type-2">
        <li class="news-item pt-4" v-for="item in healthNews" :key="item.id">
          <div class="news-left">
            <p class="news-title text-overflow line3">{{ item.text }}</p>
          </div>
          <v-img
            :src="`/src/assets/images/${item.img}`"
            alt=""
            class="news-img type-2"
          />
        </li>
      </ul>
    </div>
    <!-- //추천영역 -->

    <DialogSetting
      :lists="modalList"
      v-model="modal"
      @close="modal = false"
      @modifyClick="modifyFunc"
      @deleteClick="delFunc"
    />
    <RecordDrinking
      v-model="modal2"
      @close="modal2 = false"
      @update="modal2 = false"
    />
    <DialogDrinkSuccess
      v-model="modal3"
      @close="modal3 = false"
      @update="modal3 = false"
    />
  </div>
</template>
<script>
  import Tooltip from '@/components/Tooltip2.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import BanerReport from '@/components/BanerReport.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import CardReport from '@/components/CardReport.vue'
  import DialogSetting from '@/components/DialogSetting.vue' // 설정
  import DialogUnitSelect from '@/components/DialogSelectList.vue' // 조회기간
  import RecordDrinking from '@/views/pub/MAJ0202986.vue' // 단위
  import DialogDrinkSuccess from '@/views/pub/MAJ0202988.vue'
  import AlcholAmount from '@/views/pub/MAJ0202950-2.vue'
  import { ref, computed, onMounted, reactive } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Carousel, Slide } from 'vue3-carousel'
  import 'swiper/css'
  import 'vue3-carousel/dist/carousel.css'
  export default {
    components: {
      Tooltip,
      VCalendar,
      BanerReport,
      BanerSimple,
      CardReport,
      DialogSetting,
      DialogUnitSelect,
      RecordDrinking,
      DialogDrinkSuccess,
      AlcholAmount,
      Swiper,
      SwiperSlide,
      Carousel,
      Slide
    },
    setup() {
      const toolTip1 = ref(false)
      const drinkMode = ref(false)

      const alcoholTypeIcon = ref('alcup')
      const alcoholTypeBtn = ref()
      const alcoholTypeList = reactive([
        {
          value: 1,
          text: '맥주',
          cup: 0
        },
        {
          value: 2,
          text: '소주',
          cup: 0
        },
        {
          value: 3,
          text: '청주',
          cup: 0
        },
        {
          value: 4,
          text: '양주',
          cup: 0
        },
        {
          value: 5,
          text: '막걸리',
          cup: 0
        },
        {
          value: 6,
          text: '와인',
          cup: 0
        },
        {
          value: 7,
          text: '샴페인',
          cup: 0
        },
        {
          value: 8,
          text: '고량주',
          cup: 0
        },
        {
          value: 0,
          text: '기타',
          cup: 0
        }
      ])
      function alcoholTypeSelected(val) {
        alcoholTypeBtn.value = val
      }

      const newArr = alcoholTypeList.map((item, index) => {
        return item.cup
      })
      const newArrResult = newArr.reduce(function add(sum, currValue) {
        return sum + currValue
      }, 0)
      const numcount = ref(0)
      const disabledCheck = computed(() => {
        return newArrResult > 0 ? false : true
      })

      onMounted(() => {
        console.log(newArrResult)
      })

      const alcoholValList = ref([
        {
          id: 1,
          text: '맥주',
          count: '5,200ml'
        },
        {
          id: 2,
          text: '소주',
          count: '90,500ml'
        },
        {
          id: 3,
          text: '청주',
          count: '1,500ml'
        }
      ])

      const drinkBtn = ref(false)
      const nalcoholList = ref([
        {
          id: 1,
          text: '지방간 수치가 떨어저요'
        },
        {
          id: 2,
          text: '피부 혈색이 좋아져요'
        },
        {
          id: 3,
          text: '몸무게가 줄어요'
        }
      ])

      const reports = ref([
        {
          id: 1,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '주종',
          count: '맥주, 소주',
          title2: '음주섭취량',
          ml: '360g'
        },
        {
          id: 2,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '주종',
          count: '맥주, 소주, 청주',
          title2: '음주섭취량',
          ml: '10g'
        },
        {
          id: 3,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '주종',
          count: '맥주, 소주, 청주, 기타',
          title2: '음주섭취량',
          ml: '460g'
        }
      ])
      const reports2 = ref([
        {
          id: 1,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '금주시간',
          count: '<span class="text-blue">00:06:12:30</span>'
        },
        {
          id: 2,
          date: '2023.03. 23 ~ 2023.03. 24',
          title2: '금주시간',
          ml: '<span class="text-blue">10:20:30:00</span>'
        }
      ])

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
      const modalListBtn = ref('')
      const modal2 = ref(false)
      const modal3 = ref(false)

      const modifyFunc = () => {
        modal.value = false
        modal2.value = true
      }
      const delFunc = () => {
        alert('삭제')
      }

      const drinkModeCheck = () => {
        if (drinkMode.value === true) {
          watchHandle('end')
        }
      }

      const d = ref('00')
      const h = ref('00')
      const m = ref('00')
      const s = ref('00')
      const second = ref()
      const minute = ref()
      const hour = ref()
      const day = ref()

      function watch() {
        s.value++
        second.value.classList.add('flipped')
        if (s.value < 10) {
          s.value = '0' + s.value
        }
        if (s.value === 61) {
          m.value++
          minute.value.classList.add('flipped')
          if (m.value < 10) {
            m.value = '0' + m.value
          }
          s.value = 0
        } else if (m.value === 61) {
          h.value++
          hour.value.classList.add('flipped')
          if (h.value < 10) {
            h.value = '0' + h.value
          }
          m.value = 0
        } else if (h.value === 25) {
          d.value++
          day.value.classList.add('flipped')
          if (d.value < 10) {
            d.value = '0' + d.value
          }
          h.value = 0
        }

        second.value.addEventListener(
          'transitionend',
          function () {
            second.value.classList.remove('flipped')
            minute.value.classList.remove('flipped')
            hour.value.classList.remove('flipped')
            day.value.classList.remove('flipped')
          },
          { once: true }
        )
      }
      let watchStart = ref('')
      const watchHandle = (handle) => {
        d.value = '00'
        h.value = '00'
        m.value = '00'
        s.value = '00'
        if (handle == 'start') {
          drinkBtn.value = true
          watchStart = setInterval(watch, 1000)
          console.log('시간시작')
        } else if (handle == 'end') {
          clearTimeout(watchStart)
          drinkBtn.value = false
          modal3.value = true
          console.log('시간종료')
        }
      }

      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        }
      ])

      const banerList = ref([
        {
          title: '기분 관리해 보러 가기',
          text: '흡연과 함께 관리해보세요',
          iconName: 'icon-circle-count3.svg'
        },
        {
          title: '올바른 가정혈압 측정 방법 안내',
          text: '올바른 측정 준비단계와 방법을 알려드려요',
          iconName: 'icon-meal.svg'
        }
      ])
      const swiperCard = ref([
        { title: '챌린지영역이 노출될 예정입니다.', src: 'img-challenge.png' },
        { title: '챌린지영역이 노출될 예정입니다.', src: 'exercise.png' },
        { title: '챌린지영역이 노출될 예정입니다.', src: 'img-challenge.png' }
      ])
      const healthNews = ref([
        {
          text: '면연력이 떨어지면 찾아오는 불청객 독감',
          img: 'img-news-thumb.png'
        },
        {
          text: '운동이 정신건강에 미치는 5가지 장점은?',
          img: 'img-news-thumb.png'
        }
      ])

      return {
        toolTip1,
        drinkMode,
        drinkModeCheck,

        alcoholTypeBtn,
        alcoholTypeList,
        alcoholTypeIcon,
        alcoholTypeSelected,

        numcount,

        disabledCheck,

        alcoholValList,

        drinkBtn,
        nalcoholList,
        reports,
        reports2,

        modal,
        modalTitle,
        modalList,
        modalListBtn,
        modal2,
        modal3,

        modifyFunc,
        delFunc,

        watchHandle,
        d,
        h,
        m,
        s,
        second,
        minute,
        hour,
        day,

        calendarAttr,
        newArrResult,
        banerList,
        swiperCard,
        healthNews
      }
    }
  }
</script>
