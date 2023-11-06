<template>
  <div class="contents pt-0">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page bg pa-4 pb-2" style="z-index: 5">
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
            ><strong>4,000</strong>걸어서<br /><strong>1,510kcal</strong>
            소모했어요</span
          >
        </v-card-title>
        <!-- chart -->
        <div class="mt-8 d-flex justify-center">
          <img src="@/assets/images/dummy-chart-step.svg" alt="" />
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

    <div ref="progress" class="section-page">
      <div class="d-flex align-center">
        <h2 class="tit-03 pb-0">나의 걸음 3대</h2>
        <v-btn variant="text" class="ml-auto" color="#888" @click="modal = true"
          >기준 안내</v-btn
        >
        <!-- 기준안내 팝업 -->
        <DialogStepInfo v-model="modal" @close="modal = false" />
        <!-- //기준안내 팝업 -->
      </div>
      <div class="progress-bar mt-12" data-num="50">
        <div class="bar">
          <span class="tooltip-balloon arrow-bottom icon-walk num">0</span>
        </div>
      </div>
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
          <img src="@/assets/images/icon-map4.svg" class="icon" alt="" />
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
          <v-btn
            v-if="item.button === true"
            variant="text"
            class="list-smcard btn-plus flex-1-1-100"
            @click="modal2 = true"
            >{{ item.text }}</v-btn
          >
          <div v-else class="list-smcard flex-1-1-100">
            <img src="@/assets/images/icon-map4.svg" class="icon" alt="" />
            <strong class="num">{{ item.num }}</strong>
            <span class="text">{{ item.text }}</span>
          </div>
        </template>
        <!-- 비교군추가 팝업 -->
        <DialogCompare v-model="modal2" @close="modal2 = false" />
        <!-- //비교군추가 팝업 -->
      </div>
    </div>
    <!-- //비교 데이터 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">걸음 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">기간별 인사이트를 보여드려요</p>
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
          src="@/assets/images/img-graph-bar2.png"
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
    </div>
    <!-- //걸음기록 -->
  </div>
</template>
<script>
  import Tooltip from '@/components/Tooltip2.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import BanerReport from '@/components/BanerReport.vue'
  import CardReport from '@/components/CardReport.vue'
  import DialogStepInfo from '@/views/pub/MAJ0202851.vue'
  import DialogCompare from '@/views/pub/MAJ0202876.vue'
  import { ref, reactive, onMounted, onUnmounted } from 'vue'
  export default {
    components: {
      Tooltip,
      VCalendar,
      BanerReport,
      CardReport,
      DialogStepInfo,
      DialogCompare
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
          text: '최고걸음'
        },
        {
          id: 2,
          num: '120점',
          text: '누적 걸음'
        },
        {
          id: 3,
          num: '100점',
          text: '목표 달성일'
        }
      ])
      const compareList = reactive([
        {
          id: 1,
          num: '20%',
          text: '여성상위'
        },
        {
          id: 2,
          num: '20%',
          text: '또래상위'
        },
        {
          id: 3,
          button: true,
          text: '추가하기'
        }
      ])
      const progress = ref()
      const excuted = ref(false)
      const initialRate = ref(0)
      function numberAnimation() {
        const targetRate = parseInt(
          progress.value.querySelector('.progress-bar').getAttribute('data-num')
        )
        let numAnimation = setInterval(function () {
          const list = progress.value.querySelector('.progress-list')
          const bar = progress.value.querySelector('.progress-bar .bar')
          const num = progress.value.querySelector('.progress-bar .num')
          initialRate.value++
          if (initialRate.value == targetRate) {
            clearInterval(numAnimation)
          }
          //bar.style.width = `${targetRate}%`
          bar.style.width = `${initialRate.value}%`
          if (targetRate >= 0 && targetRate <= 34) {
            num.innerHTML = `걸음 입문자 <span>${initialRate.value}점</span>`
            list.classList.add('step1')
          } else if (targetRate > -35 && targetRate <= 69) {
            num.innerHTML = `걸음 중급자 <span>${initialRate.value}점</span>`
            list.classList.add('step2')
          } else if (targetRate >= 70 && targetRate <= 99) {
            num.innerHTML = `걸음 고급자 <span>${initialRate.value}점</span>`
            list.classList.add('step3')
          } else {
            num.innerHTML = `걸음 선수급 <span>${initialRate.value}점</span>`
            list.classList.add('step4')
          }
          if (targetRate > 82) {
            num.classList.add(`end-${targetRate}`)
          }
          //console.log(targetRate)
        }, 20) // 대략 1초
      }
      function scroll() {
        if (this.scrollTop > progress.value.offsetTop - 200) {
          if (!excuted.value) {
            console.log('progress start')
            numberAnimation()
            excuted.value = true
          }
        }
        if (
          Math.ceil(this.scrollTop) + this.clientHeight >=
          this.scrollHeight
        ) {
          console.log('스크롤 끝')
          if (!excuted.value) {
            numberAnimation()
            excuted.value = true
          }
        }
      }
      onMounted(() => {
        document.querySelector('#mainWrap').addEventListener('scroll', scroll)
      })
      onUnmounted(() => {
        document
          .querySelector('#mainWrap')
          .removeEventListener('scroll', scroll)
      })

      function handleClick() {
        console.log('emit')
      }

      const modal = ref(false)
      const modal2 = ref(false)

      const toolTip1 = ref(false)

      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        }
      ])

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
        progress,
        initialRate,
        scroll,
        excuted,
        numberAnimation,

        handleClick,

        modal,
        modal2,
        toolTip1,
        calendarAttr
      }
    }
  }
</script>
