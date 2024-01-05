<template>
  <div class="contents pt-0">
    <div class="section-page bg pa-4">
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
        <div class="btn-area mt-7">
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
    </div>
  </div>
</template>

<script>
  import 'vue3-carousel/dist/carousel.css'
  import AlcholAmount from '@/views/pub/MAJ0202950-2.vue'
  import CardReport from '@/components/CardReport.vue'
  import Tooltip from '@/components/Tooltip2.vue'

  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import { ref, reactive, computed } from 'vue'

  export default {
    components: {
      Tooltip,
      AlcholAmount,
      CardReport,
      Carousel,
      Slide,
      Pagination
    },
    setup() {
      const dialog = ref(true)
      const toolTip1 = ref(false)
      const drinkMode = ref(false)

      const alcoholTypeIcon = ref()
      const alcoholTypeBtn = ref()
      const alcoholTypeList = reactive([
        {
          value: 1,
          text: '맥주',
          cup: 0,
          iconType: 'alcon'
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
          title: '흡연 관리하러 가기',
          text: '흡연과 함께 관리해보세요!',
          iconName: 'icon-cigapack.svg',
          path: '/MAJ0202960'
        },
        {
          title: '기분 관리하러 가기',
          text: '기분과 함께 관리해보세요!',
          iconName: 'icon-circle-count3.svg',
          path: '/MAJ0202920'
        },
        {
          title: '혈압 관리하러 가기',
          text: '혈압과 함께 관리해보세요!',
          iconName: 'icon-blood.svg',
          path: '/MAJ0202970'
        },
        {
          title: '혈당 관리하러 가기',
          text: '혈당과 함께 관리해보세요!',
          iconName: 'icon-blood-sugar.svg',
          path: '/MAJ0203020'
        }
      ])
      function goPath(val) {
        router.push(val)
      }

      return {
        dialog,
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
        goPath
      }
    }
  }
</script>
