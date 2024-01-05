<template>
  <div class="contents">
    <div class="challenge-section-spot">
      <div class="title-area">
        <div class="chip-title-area">
          <p class="subTit-01">
            KB오케어 평일 <br />
            평균만큼 많이 걷기
          </p>
          <!-- 
            과식형 chip-overeating-type
            야식형 chip-nightsnack-type
            잦은음주형 chip-drinking-type
            고객맞춤형 chip-customized-type
          -->
          <!-- <v-chip label class="chip-default chip-overeating-type">
            <span class="text-dot">과식형</span>
          </v-chip> -->
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

      <div ref="progress" class="challenge-completed-area">
        <div class="challenge-completed">
          <div class="challenge-completed-content">
            <img
              src="/assets/images/icon-challenge-completed.svg"
              alt=""
              class=""
            />
            <div class="challenge-completed-info">
              <strong class="challenge-completed-title">D-30</strong>
              <p class="challenge-completed-text">
                달성률이 80%인 경우 챌린지 성공!!
              </p>
            </div>
          </div>
          <div class="progress-bar-area">
            <div class="progress-bar" data-num="90">
              <!-- [D]그래프 툴팁 노출 on -->
              <div class="bar on">
                <span class="tooltip-balloon arrow-bottom num"></span>
              </div>
              <!-- 그래프 라인 left %r값으로 제어 -->
              <span class="bar-line" style="left: 85%"></span>
            </div>
          </div>
        </div>
        <div class="btn-area2">
          <v-btn variant="text" height="40px" class="bdr-8 cancel" block
            >상세보기</v-btn
          >
          <v-btn variant="text" height="40px" class="bdr-8 skip" block
            >완료 리포트 보기</v-btn
          >
        </div>
      </div>
    </div>

    <div class="challenge-section-content no-division auth-section-content">
      <div class="auth-content auth-content-walking">
        <div class="auth-content-top">
          <div class="auth-content-count">
            <strong class="auth-content-title">5,000걸음 걷기</strong>
            <!-- [D] 인증 완료 일때 hide 클래스 추가-->
            <span class="count hide"
              ><span class="point-blue">5,100</span>/5,000걸음</span
            >
            <!-- // [D] 인증 완료 일때 hide 클래스 추가-->
          </div>
          <div class="button-area">
            <!-- 인증 완료 / 비활성 disabled 속성 추가 / 인증 완료 auth-complete 클래스 추가 -->
            <v-btn
              variant="text"
              height="46"
              class="bdr-8 btn-auth auth-complete"
              block
              disabled
              >완료</v-btn
            >
          </div>
        </div>
        <div class="auth-content-bottom">
          <!-- [D] 인증 완료 노출 on 클래스 -->
          <div class="auth-content-complete on">
            <span class="complete-time">09.19 오전 6:25</span>
            <div class="complete-content">
              <v-btn variant="text" height="45" class="bdr-8 cancel" block>
                <template v-slot:prepend>
                  <span class="count btn-text"
                    ><span class="point-blue">5,100</span>/5,000걸음</span
                  >
                  <img src="/assets/images/icon-photo-arrow.svg" alt="" />
                </template>
              </v-btn>
            </div>
          </div>
          <!-- [D] // 인증 완료 노출 on 클래스 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, reactive, onMounted } from 'vue'
  import TestCalendarVue from './TestCalendar.vue'

  export default {
    components: {
      TestCalendarVue
    },

    setup() {
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

      const progress = ref()
      const initialRate = ref(0)

      function numberAnimation() {
        const targetRate = parseInt(
          progress.value.querySelector('.progress-bar').getAttribute('data-num')
        )
        let numAnimation = setInterval(function () {
          const list = progress.value.querySelector('.progress-list')
          const bar = progress.value.querySelector('.progress-bar .bar')
          const num = progress.value.querySelector('.progress-bar .num')
          const buttonArea = progress.value.querySelector(
            '.challenge-completed-area .btn-area2'
          )
          initialRate.value++
          if (initialRate.value == targetRate) {
            clearInterval(numAnimation)
          }
          if (targetRate == 0) {
            initialRate.value--
            clearInterval(numAnimation)
            num.classList.add(`end-${targetRate}`)
          }
          bar.style.width = `${initialRate.value}%`
          num.innerHTML = `달성률 <span>${initialRate.value}%</span>`
          if (targetRate >= 80) {
            buttonArea.classList.add('complete-rate')
            num.classList.add(`end-${targetRate}`)
          }
        }, 20) // 대략 1초
      }

      onMounted(() => {
        numberAnimation()
      })

      return {
        calendarStates,
        calendarAttr,
        progress,
        initialRate,
        numberAnimation
      }
    }
  }
</script>
