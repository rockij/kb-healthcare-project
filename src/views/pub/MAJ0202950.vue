<template>
  <div class="contents pt-0">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page bg pa-4">
      <BanerReport :bnShow="'good'" :videBox="false" class="mb-4">
        휴레이 메시지는 아직 확정되지 않았다
      </BanerReport>
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <div class="d-flex">
          <h2 v-if="drinkMode === false" class="tit-03 pb-0">
            알코올 섭취량은<br />9,999g
            <Tooltip
              v-model="toolTip1"
              @close="toolTip1 = false"
              :handleOption="'icon-big'"
            >
              세계보건기구(WHO)에서는 순수 알코올 섭취양으로 환산하였을 때
              남자는 하루 40g 미만, 여자는 하루 20g미만을 섭취하도록 권고하고
              있습니다
            </Tooltip>
          </h2>
          <v-btn
            variant="text"
            class="v-switch switch-default switch-default-btn switch-btn flex-0-0 align-self-start ml-auto px-0"
            :class="swichToggle"
            @click="drinkModeCheck"
          >
            <label class="v-label fs-14">금주모드</label>
            <div class="v-selection-control__wrapper">
              <div class="v-switch__track"></div>
              <div class="v-selection-control__input">
                <div class="v-switch__thumb"></div>
              </div>
            </div>
          </v-btn>
        </div>
        <p
          v-if="drinkMode === false"
          class="d-flex align-center fs-13 text-grey mt-1"
        >
          <v-icon class="icon-dsc mr-1" />이미지 선택 시 잔/캔/병 단위 변경 가능
        </p>
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
            class="bdr-8 fs-14 font-weight-bold skip"
            block
            :disabled="disabledCheck"
            ><span class="c-darkGray">저장하기</span></v-btn
          >
          <v-btn
            v-if="drinkMode === true && !drinkBtn"
            variant="text"
            height="46px"
            class="bdr-8 fs-14 font-weight-bold skip"
            block
            @click="watchHandle('start')"
            ><span class="c-darkGray">금주 시작</span></v-btn
          >
          <v-btn
            v-if="drinkBtn"
            variant="text"
            height="46px"
            class="bdr-8 fs-14 font-weight-bold skip"
            block
            @click="watchHandle('end')"
            ><span class="c-darkGray">금주 종료</span></v-btn
          >
        </div>
      </v-card>
      <template v-if="drinkMode === false">
        <div class="divider-dotted-bg mx-3 px-3">
          <v-divider class="border-opacity-100 divider-dotted" :thickness="1" />
        </div>
        <v-card variant="flat" rounded="xl" class="px-4 pt-3 pb-4">
          <ul class="d-grid g-tcol-2">
            <li
              class="d-flex mt-1"
              v-for="(list, i) in alcoholValList"
              :key="i"
            >
              <span class="badge waiting align-self-start">{{
                list.text
              }}</span>
              <span class="font-weight-bold ml-2">{{ list.count }}</span>
            </li>
          </ul>
        </v-card>
      </template>
    </div>
    <!-- //금주모드선택 -->

    <div v-if="drinkMode === true" class="section-page brt-0">
      <h2 class="tit-03">금주하면 생기는 긍정적인 변화</h2>
      <div
        v-for="(list, i) in nalcoholList"
        :key="i"
        class="list-iconlst2 mt-2"
      >
        <v-img class="icon" :src="`/assets/images/${list.icon}`" alt="" />
        <p>{{ list.text }}</p>
      </div>
    </div>
    <!-- //금주긍정변화(3개만 노출) -->

    <div v-if="drinkMode === false" class="section-page brt-0">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">음주 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 1주일의 음주를 분석입니다</p>
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
          src="/assets/images/img-graph-bar2.png"
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
  import router from '@/router'
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
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import { ref, computed, reactive } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
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
      LifelogChallenge,
      LifelogHealthnews,
      Swiper,
      SwiperSlide,
      Carousel,
      Slide,
      Pagination
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

      const alcoholValList = ref([
        {
          text: '맥주',
          count: '99잔 99캔 99병'
        },
        {
          text: '막걸리',
          count: '1잔 1병'
        },
        {
          text: '소주',
          count: '1잔 1병'
        },
        {
          text: '샴페인',
          count: '1잔 1병'
        },
        {
          text: '청주',
          count: '1잔 1병'
        },
        {
          text: '와인',
          count: '1잔 1병'
        },
        {
          text: '양주',
          count: '1잔 1병'
        },
        {
          text: '고량주',
          count: '1잔 1병'
        },
        {
          text: '기타',
          count: '1잔'
        }
      ])

      const drinkBtn = ref(false)
      const nalcoholList = ref([
        {
          text: '지방간 수치가 떨어저요',
          icon: 'icon-heart-04.svg'
        },
        {
          text: '피부 혈색이 좋아져요',
          icon: 'icon-face.svg'
        },
        {
          text: '몸무게가 줄어요',
          icon: 'icon-weight2.svg'
        },
        {
          text: '암 발병률이 떨어져요',
          icon: 'icon-cancer.svg'
        },
        {
          text: '일의 효율성이 증가하고 있어요',
          icon: 'icon-chart.svg'
        },
        {
          text: '깊은 수면이 가능해요',
          icon: 'icon-moon2.svg'
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

      const swichToggle = ref()
      const drinkModeCheck = () => {
        if (drinkMode.value === true) {
          drinkMode.value = false
          drinkBtn.value = false
          swichToggle.value = ''
          watchHandle('end')
        } else {
          drinkMode.value = true
          drinkBtn.value = true
          swichToggle.value = 'on'
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
          text: '음주와 함께 관리해보세요!',
          iconName: 'icon-cigapack.svg',
          path: '/MAJ0202960'
        },
        {
          title: '기분 관리하러 가기',
          text: '음주와 함께 관리해보세요!',
          iconName: 'icon-circle-count3.svg',
          path: '/MAJ0202920'
        },
        {
          title: '혈압 관리하러 가기',
          text: '음주와 함께 관리해보세요!',
          iconName: 'icon-blood.svg',
          path: '/MAJ0202970'
        },
        {
          title: '혈당 관리하러 가기',
          text: '음주와 함께 관리해보세요!',
          iconName: 'icon-blood-sugar.svg',
          path: '/MAJ0203020'
        }
      ])
      function goPath(val) {
        router.push(val)
      }

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
        goPath,

        swichToggle
      }
    }
  }
</script>
