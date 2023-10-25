<template>
  <div class="contents">
    <LifeCalendar :classOption="'life-calendar'" />
    <div class="section-page bg px-4 pt-4 pb-2">
      <BanerReport :bnShow="'good'" :videBox="false" class="mb-4">
        휴레이 메시지는 아직 확정되지 않았다
      </BanerReport>
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <div class="d-flex">
          <v-card-title
            v-if="drinkMode === false"
            class="pa-0 fs-20 font-weight-bold"
            >오늘 마신 음주량은<br />총 3,600ml 예요
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
          <div class="tabs-target media-slide alcohols mt-6">
            <v-btn
              variant="text"
              v-for="btn in alcoholTypeBtns"
              :key="btn.value"
              :class="`target${btn.value} ${
                alcoholTypeBtn === btn.value ? 'selected' : ''
              }`"
              @click="alcoholTypeSelected(btn.value)"
              ><span v-html="btn.text"></span
            ></v-btn>
          </div>
          <div class="text-center mt-6">
            <v-btn
              variant="flat"
              height="32"
              color="#F2F4F6"
              class="text-blue fs-13"
              rounded="lg"
              @click="modal4 = true"
              >단위 : 잔 (500ml)</v-btn
            >
          </div>
          <div class="numcount-area mt-4 px-3">
            <v-btn
              variant="text"
              class="handle decrease"
              title="감소"
              @click="numcount > 0 ? numcount-- : ''"
            ></v-btn>
            <strong class="number">{{ numcount }}</strong>
            <v-btn
              variant="text"
              class="handle increase"
              title="증가"
              @click="numcount++"
            ></v-btn>
          </div>
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
          <div class="fs-13 text-grey miws-132">
            오늘 총 음주량<span class="d-block font-weight-bold text-blue fs-18"
              >3,600ml</span
            >
          </div>
          <ul class="ml-4">
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

    <!-- 흡연결과 -->
    <template v-if="drinkMode === false">
      <div class="section-page">
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
      </div>
      <!-- //음주기록 -->
      <div class="section-page">
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
      <!-- //흡연분석 -->
    </template>
    <!-- //흡연결과 -->

    <!-- 금주모드 시작전 -->
    <template v-if="drinkMode === true">
      <div class="section-page">
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
      <div class="section-page">
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
      </div>
      <!-- //금주기록 -->

      <div class="section-page">
        <h2 class="tit-03">챌린지</h2>
        <p class="text-info-grey fs-16">챌린지 관련 서브 텍스트 노출</p>
      </div>
      <!-- //챌린지 -->

      <div class="section-page">
        <h2 class="tit-03">추천영역</h2>
        <p class="text-info-grey fs-16">추천영역 관련 서브 텍스트 노출</p>
      </div>
      <!-- //추천영역 -->
    </template>
    <!-- //금주모드 시작전 -->

    <DialogSetting
      :lists="modalList"
      v-model="modal"
      @close="modal = false"
      @modifyClick="modifyFunc"
      @deleteClick="delFunc"
    />
    <DialogUnitSelect
      :lists="unitList"
      :title="unitTitle"
      v-model="modal4"
      @close="modal4 = false"
      @update="changeCategory"
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
  import LifeCalendar from '@/views/pub/LifeCalendar.vue'
  import BanerReport from '@/components/BanerReport.vue'
  import CardReport from '@/components/CardReport.vue'
  import DialogSetting from '@/components/DialogSetting.vue' // 설정
  import DialogUnitSelect from '@/components/DialogSelectList.vue' // 조회기간
  import RecordDrinking from '@/views/pub/MAJ0202986.vue' // 단위
  import DialogDrinkSuccess from '@/views/pub/MAJ0202988.vue'
  import { ref, computed } from 'vue'
  export default {
    components: {
      LifeCalendar,
      BanerReport,
      CardReport,
      DialogSetting,
      DialogUnitSelect,
      RecordDrinking,
      DialogDrinkSuccess
    },
    setup() {
      const drinkMode = ref(false)

      const alcoholTypeBtn = ref()
      const alcoholTypeBtns = ref([
        {
          value: 1,
          text: '맥주'
        },
        {
          value: 2,
          text: '소주'
        },
        {
          value: 3,
          text: '청주'
        },
        {
          value: 4,
          text: '막걸리'
        },
        {
          value: 5,
          text: '와인'
        },
        {
          value: 6,
          text: '양주'
        },
        {
          value: 7,
          text: '샴페인'
        },
        {
          value: 0,
          text: '기타'
        }
      ])
      function alcoholTypeSelected(val) {
        alcoholTypeBtn.value = val
      }

      const numcount = ref(0)

      const disabledCheck = computed(() => {
        return numcount.value > 0 ? false : true
      })

      const alcoholValBtn = ref(false)
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
          ml: '3,600ml'
        },
        {
          id: 2,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '주종',
          count: '맥주, 소주, 청주',
          title2: '음주섭취량',
          ml: '3,600ml'
        },
        {
          id: 3,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '주종',
          count: '맥주, 소주, 청주, 기타',
          title2: '음주섭취량',
          ml: '103,600ml'
        }
      ])
      const reports2 = ref([
        {
          id: 1,
          date: '2023.03. 23 ~ 2023.03. 24',
          title: '금주성공',
          count: '<span class="text-blue">00:06:12:30</span>'
        },
        {
          id: 2,
          date: '2023.03. 23 ~ 2023.03. 24',
          title2: '금주성공',
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

      const modal4 = ref(false)
      const unitTitle = ref('음주 단위')
      const unitList = ref([
        {
          value: 0,
          text: '잔(500ml)'
        },
        {
          value: 1,
          text: '캔(330ml)'
        },
        {
          value: 2,
          text: '병(640ml)'
        }
      ])
      function changeCategory(val) {
        modal.value = false
        return (modalListBtn.value = val.text)
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

      return {
        drinkMode,
        drinkModeCheck,

        alcoholTypeBtn,
        alcoholTypeBtns,
        alcoholTypeSelected,

        numcount,

        disabledCheck,

        alcoholValBtn,
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

        modal4,
        unitTitle,
        unitList,
        changeCategory,

        watchHandle,
        d,
        h,
        m,
        s,
        second,
        minute,
        hour,
        day
      }
    }
  }
</script>
