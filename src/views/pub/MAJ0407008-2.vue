<template>
  <div class="contents">
    <div class="challenge-section-spot">
      <div class="title-area">
        <div class="button-title-area">
          <p class="subTit-01">혈당개선 전문 챌린지 <br />(과식형)</p>
          <v-btn
            variant="flat"
            rounded="lg"
            height="32"
            color="#F2F4F6"
            class="text-primary px-3 ml-2"
            >상세보기</v-btn
          >
        </div>
        <span class="tags">
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            #혈당관리
          </v-chip>
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            #잦은과식
          </v-chip>
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            #운동초보
          </v-chip>
        </span>
      </div>

      <div class="challenge-completed-area">
        <div class="challenge-completed">
          <div class="challenge-completed-content">
            <img src="@/assets/images/icon-challenge-completed.svg" alt="" class="" />
            <div class="challenge-completed-info">
              <strong class="challenge-completed-title">D-30</strong>
              <p class="challenge-completed-text">달성률이 80%인 경우 챌린지 성공!!</p>
            </div>
          </div>
          <div ref="progress" class="progress-bar-area">
            <div class="progress-bar" data-num="30">
              <div class="bar">
                <span class="tooltip-balloon arrow-bottom num">0</span>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-area2">
          <v-btn
            variant="text"
            height="40px"
            class="bdr-8 cancel"
            block
            >상세보기</v-btn
          >
          <v-btn
            variant="text"
            height="40px"
            class="bdr-8 skip"
            block
            >완료 리포트 보기</v-btn
          >
        </div>
      </div>
    </div>

    <div class="challenge-section-content no-division calendar-content">
      <div class="perfomance-calendar">
        <VCalendar
          :view="monthly"
          :attributesValue="calendarAttr">
        </vCalendar>

        <div class="vc-dots-info">
          <div class="state" v-for="(state, i) in calendarStates" :key="i">
            <i class="icon" :class="state.icon" />
            <div class="text">{{ state.text }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="challenge-section-content no-division">
      <h2 class="title-01">어떤 챌린지를 잘 실천했을까?</h2>
      <div class="challenge-chart">
        <img src="@/assets/images/img-challenge-chart.png" alt="" />
      </div>
      <div class="giveup-button">
          <v-btn
            variant="text"
            height="40px"
            class="bdr-8 giveup"
            block
            >챌린지 포기하기</v-btn
          >
      </div>
    </div>

  </div>
</template>

<script>
  import { ref, reactive, onMounted, onUnmounted } from 'vue'
  import VCalendar from '@/components/VCalendar.vue'

  export default {
    components: {
      VCalendar
    },

    setup() {
      const views = ref('monthly')
      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-circle-complete' },
          dates: [new Date(2023, 9, 27)]
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-circle-incomplete' },
          dates: [new Date(2023, 9, 27)]
        },
        {
          content: { class: 'vc-dots-info' },
          dot: { class: 'icon-circle-incomplete' },
          dates: [new Date(2023, 9, 27)]
        }
      ])
      const calendarStates = reactive([
        {
          icon: 'complete',
          text: '완료'
        },
        {
          icon: 'incomplete',
          text: '미인증'
        }
      ])
      const changeDate = () => {
        views.value = 'monthly'
      }
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
          const tooltip = progress.value.querySelector('.progress-bar .tooltip-balloon')
          initialRate.value++
          if (initialRate.value == targetRate) {
            clearInterval(numAnimation)
          }
          bar.style.width = `${initialRate.value}%`
          num.innerHTML = `달성률 <span>${initialRate.value}%</span>`

          if (targetRate >= 0 && targetRate <= 34) {
            tooltip.classList.add('step1')
          } else if (targetRate > -35 && targetRate <= 69) {
            tooltip.classList.add('step2')
          } else if (targetRate >= 70 && targetRate <= 99) {
            tooltip.classList.add('step3')
          } else {
            tooltip.classList.add('step4')
          }
          if (targetRate > 82) {
            num.classList.add(`end-${targetRate}`)
          }


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

      return { 
      views,
      calendarStates,
      calendarAttr,
      progress,
      initialRate,
      scroll,
      excuted,
      numberAnimation
      }
    }
  }
</script>