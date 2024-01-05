<template>
  <div class="contents pt-0">
    <div class="section-page bg pa-4">
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <div class="d-flex">
          <v-card-title
            v-if="smokeMode === false"
            class="pa-0 fs-20 font-weight-bold"
            >오늘 피운 담배는<br />총 25개피, 5ml 예요
          </v-card-title>
          <v-switch
            class="switch-default switch-title flex-0-0 align-self-start ml-auto"
            v-model="smokeMode"
            label="금연모드"
            color="#FFD338"
            hide-details
            @click="smokeModeCheck"
          ></v-switch>
        </div>
        <template v-if="smokeMode === false">
          <Carousel
            :items-to-show="2.1"
            :wrap-around="true"
            class="life-count-swiper mt-7"
          >
            <Slide v-for="item in smokeTypeList" :key="item.value">
              <SmokeAmount
                :iconNum="item.value"
                :text="item.text"
                :numcount="item.count"
                @update:minus="item.count > 0 ? item.count-- : 0"
                @update:plus="item.count++"
              />
            </Slide>
          </Carousel>
        </template>
        <div v-if="smokeMode === true" class="countdown-flip mt-6">
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
        <div class="btn-area mt-7">
          <v-btn
            v-if="smokeMode === false"
            variant="text"
            height="46px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            :disabled="disabledCheck"
            >저장하기</v-btn
          >
          <v-btn
            v-if="smokeMode === true && !smokeBtn"
            variant="text"
            height="46px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            @click="watchHandle('start')"
            >금연 시작</v-btn
          >
          <v-btn
            v-if="smokeBtn"
            variant="text"
            height="46px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            @click="watchHandle('end')"
            >금연 종료</v-btn
          >
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
  import 'vue3-carousel/dist/carousel.css'

  import CardReport from '@/components/CardReport.vue'
  import Tooltip from '@/components/Tooltip2.vue'
  import RecordSmoking from '@/views/pub/MAJ0202963.vue'
  import SmokeAmount from '@/views/pub/MAJ0202960-2.vue'

  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import { ref, reactive, computed } from 'vue'

  export default {
    components: {
      SmokeAmount,
      RecordSmoking,
      Tooltip,
      CardReport,
      Carousel,
      Slide,
      Pagination
    },
    setup() {
      const smokeMode = ref(false)
      const reports = ref([
        {
          id: 1,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '종류/수량',
          count: '권련형 전자 담배/<span class="text-blue">15개비</span>',
          title2: '종류/수량',
          ml: '액상형 전자 담배/<span class="text-blue">15ml</span>'
        },
        {
          id: 2,
          date: '2023.03. 23 ~ 2023.03. 24',
          title2: '종류/수량',
          ml: '액상형 전자 담배/<span class="text-blue">15ml</span>'
        },
        {
          id: 3,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '종류/수량',
          count: '권련형 전자 담배/<span class="text-blue">15개비</span>'
        }
      ])
      const reports2 = ref([
        {
          id: 1,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '금연시간',
          count: '<span class="text-blue">00:06:12:30</span>'
        },
        {
          id: 2,
          date: '2023.03. 23 ~ 2023.03. 24',
          title2: '금연시간',
          ml: '<span class="text-blue">10:20:30:00</span>'
        }
      ])
      function handleClick() {
        console.log('emit')
      }

      const numcount = ref(0)

      const disabledCheck = computed(() => {
        return numcount.value > 0 ? false : true
      })

      const smokeBtn = ref(false)
      const smokelist = ref([
        {
          id: 1,
          text: '궐련형 전자담배',
          count: '150개비'
        },
        {
          id: 2,
          text: '일반담배',
          count: '100개비'
        },
        {
          id: 3,
          text: '액상형 전자담배',
          count: '15ml'
        }
      ])

      const nsmokeList = ref([
        {
          id: 1,
          text: '담배를 만들기 위한 6억그루의 나무를 살릴수 있어요'
        },
        {
          id: 2,
          text: '8400만톤의 이산화탄소 발생을 막을 수 있어요'
        },
        {
          id: 3,
          text: '180억만 톤의 폐기물 발생을 줄일 수 있어요'
        }
      ])

      const modal = ref(false)
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

      const smokeModeCheck = () => {
        if (smokeMode.value === true) {
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
          smokeBtn.value = true
          watchStart = setInterval(watch, 1000)
          console.log('시간시작')
        } else if (handle == 'end') {
          clearTimeout(watchStart)
          smokeBtn.value = false
          modal3.value = true
          console.log('시간종료')
        }
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
          dates: [new Date(2023, 9, 1)]
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 9, 5)]
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 9, 15)]
        }
      ])

      const smokeTypeList = ref([
        {
          value: 1,
          text: '일반담배',
          count: 0
        },
        {
          value: 2,
          text: '권련형 전자담배',
          count: 0
        },
        {
          value: 3,
          text: '액상형 전자담배',
          count: 0
        }
      ])
      const modal4 = ref(false)
      const modal4ListBtn = ref('일반담배')
      const modal4Title = ref('담배종류선택')
      const modal4List = ref([
        {
          value: 1,
          text: '일반담배'
        },
        {
          value: 2,
          text: '권련형'
        },
        {
          value: 2,
          text: '액상형'
        }
      ])
      function changeCategory(val) {
        modal4.value = false
        return (modal4ListBtn.value = val.text)
      }
      const banerList = ref([
        {
          title: '음주 관리하러 가기',
          text: '음주와 함께 관리해보세요!',
          iconName: 'icon-beercup.svg',
          path: '/MAJ0202950'
        },
        {
          title: '기분 관리하러 가기',
          text: '기분과 함께 관리해보세요!',
          iconName: 'icon-circle-count3.svg',
          path: '/MAJ0202920'
        },
        {
          title: '식사 관리하러 가기',
          text: '식사와 함께 관리해보세요!',
          iconName: 'icon-cooking.svg',
          path: '/MAJ0203410'
        },
        {
          title: '운동 관리하러 가기',
          text: '운동과 함께 관리해보세요!',
          iconName: 'icon-dumbbell.svg',
          path: '/MAJ0202856'
        },
        {
          title: '혈압 관리하러 가기',
          text: '혈압과 함께 관리해보세요!',
          iconName: 'icon-blood.svg',
          path: '/MAJ0202970'
        },
        {
          title: '심박 관리하러 가기',
          text: '심박과 함께 관리해보세요!',
          iconName: 'icon-heart-03.svg',
          path: '/MAJ0203390'
        }
      ])
      function goPath(val) {
        router.push(val)
      }

      return {
        smokeMode,
        smokeModeCheck,

        reports,
        reports2,
        handleClick,

        numcount,

        disabledCheck,

        smokeBtn,
        smokelist,
        nsmokeList,

        modal,
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
        smokeTypeList,
        modal4,
        modal4ListBtn,
        modal4Title,
        modal4List,
        changeCategory,
        banerList,
        goPath
      }
    }
  }
</script>
