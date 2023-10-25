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
          <div class="d-flex tabs-target cigarette mt-6">
            <v-btn
              variant="text"
              v-for="btn in cigaBtns"
              :key="btn.value"
              :class="`target${btn.value} ${
                cigaBtn === btn.value ? 'selected' : ''
              }`"
              @click="cigaSelected(btn.value)"
              ><span v-html="btn.text"></span
            ></v-btn>
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
        <div class="btn-area2 mt-7">
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
      <template v-if="smokeMode === false">
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
            오늘 총 흡연량<span class="d-block font-weight-bold text-blue fs-18"
              >250개비, 500ml</span
            >
          </div>
          <ul class="ml-4">
            <li class="d-flex mt-1" v-for="list in smokelist" :key="list.id">
              <span class="badge waiting">{{ list.text }}</span>
              <span class="font-weight-bold ml-2">{{ list.count }}</span>
            </li>
          </ul>
        </v-card>
      </template>
    </div>
    <!-- //금연모드선택 -->

    <!-- 흡연결과 -->
    <template v-if="smokeMode === false">
      <div class="section-page">
        <h2 class="tit-03 tit-link">
          <v-btn block variant="text">흡연 기록</v-btn>
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
              <dd v-html="report.ml" class="font-weight-bold"></dd>
            </dl>
          </template>
        </CardReport>
      </div>
      <!-- //흡연기록 -->

      <div class="section-page">
        <h2 class="tit-03 tit-link">
          <v-btn block variant="text">흡연 분석</v-btn>
        </h2>
        <p class="text-info-grey fs-16">기간별 인사이트를 보여드려요</p>
        <v-tabs align-tabs="start" class="tab-line mt-4">
          <v-tab :ripple="false" class="fs-20">1주일</v-tab>
          <v-tab :ripple="false" class="fs-20">1개월</v-tab>
          <v-tab :ripple="false" class="fs-20">6개월</v-tab>
        </v-tabs>
        <div class="text-info-grey2 mt-7">2023.08.14~2023.08.24</div>
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

    <!-- 금연모드 시작전 -->
    <template v-if="smokeMode === true">
      <div class="section-page">
        <h2 class="tit-03">금연하면 생기는 긍정적인 변화</h2>
        <div
          v-for="list in nsmokeList"
          :key="list.id"
          class="list-iconlst2 mt-2"
        >
          <i :class="`icon${list.id}`"></i>
          <p>{{ list.text }}</p>
        </div>
      </div>
      <!-- //금연긍정변화 -->

      <div class="section-page">
        <h2 class="tit-03 tit-link">
          <v-btn block variant="text">금연 기록</v-btn>
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
      <!-- //금연기록 -->

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
    <!-- //금연모드 시작전 -->

    <DialogSetting
      :lists="modalList"
      v-model="modal"
      @close="modal = false"
      @modifyClick="modifyFunc"
      @deleteClick="delFunc"
    />
    <RecordSmoking
      v-model="modal2"
      @close="modal2 = false"
      @update="modal2 = false"
    />
    <DialogSmokeSuccess
      v-model="modal3"
      @close="modal3 = false"
      @update="modal3 = false"
    />
  </div>
</template>
<script>
  import LifeCalendar from '@/views/pub/LifeCalendar.vue' // 달력
  import BanerReport from '@/components/BanerReport.vue'
  import CardReport from '@/components/CardReport.vue'
  import DialogSetting from '@/components/DialogSetting.vue'
  import RecordSmoking from '@/views/pub/MAJ0202963.vue'
  import DialogSmokeSuccess from '@/views/pub/MAJ0203677.vue'
  import { ref, computed } from 'vue'
  export default {
    components: {
      LifeCalendar,
      BanerReport,
      CardReport,
      DialogSetting,
      RecordSmoking,
      DialogSmokeSuccess
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
          title: '금연기록',
          count: '<span class="text-blue">00:06:12:30</span>'
        },
        {
          id: 2,
          date: '2023.03. 23 ~ 2023.03. 24',
          title2: '금연기록',
          ml: '<span class="text-blue">10:20:30:00</span>'
        }
      ])
      function handleClick() {
        console.log('emit')
      }

      const cigaBtn = ref()
      const cigaBtns = ref([
        {
          value: 1,
          text: '궐련형<br/>전자담배'
        },
        {
          value: 2,
          text: '일반담배'
        },
        {
          value: 3,
          text: '액상형<br/>전자담배'
        }
      ])
      function cigaSelected(val) {
        cigaBtn.value = val
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

      return {
        smokeMode,
        smokeModeCheck,

        reports,
        reports2,
        handleClick,

        cigaBtn,
        cigaBtns,
        cigaSelected,

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
        day
      }
    }
  }
</script>
