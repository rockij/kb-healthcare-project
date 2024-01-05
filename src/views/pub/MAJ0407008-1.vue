<template>
  <div class="contents">
    <div class="challenge-section-spot">
      <div class="title-area">
        <div class="chip-title-area">
          <p class="subTit-01">혈당개선 전문 챌린지</p>
          <!-- 
            과식형 chip-overeating-type
            야식형 chip-nightsnack-type
            잦은음주형 chip-drinking-type
            고객맞춤형 chip-customized-type
          -->
          <v-chip label class="chip-default chip-overeating-type">
            <span class="text-dot">과식형</span>
          </v-chip>
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
            <div class="progress-bar" data-num="70">
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

    <div class="challenge-section-content no-division calendar-content">
      <div class="perfomance-calendar">
        <TestCalendarVue :attributesValue="calendarAttr"> </TestCalendarVue>

        <div class="vc-dots-info">
          <div class="state" v-for="(state, i) in calendarStates" :key="i">
            <i class="icon" :class="state.icon" />
            <div class="text">{{ state.text }}</div>
          </div>
        </div>

        <!-- [D]연속 성공 영역 노출 on 클래스 -->
        <div class="calendar-chip">
          <v-chip label color="primary" class="chip-default">
            <strong class="point-blue">4일</strong> 동안 연속 성공중!
          </v-chip>
        </div>
      </div>
    </div>

    <div class="challenge-section-content no-division auth-section-content">
      <div class="auth-content">
        <div class="auth-content-top">
          <strong class="auth-content-title">혈당 기록하기</strong>
          <div class="button-area">
            <!-- [D]측정시간 제한 툴팁 노출 on 클래스 -->
            <div class="tooltip-balloon arrow-bottom on">측정시간 제한</div>
            <!-- // [D]측정시간 제한 툴팁 노출 on 클래스 -->

            <!-- 인증 완료 / 비활성 disabled 속성 추가 / 인증 완료 auth-complete 클래스 추가 -->
            <v-btn variant="text" height="46" class="bdr-8 btn-auth" block
              >인증</v-btn
            >
          </div>
        </div>
        <div class="auth-content-bottom">
          <!-- [D] 인증 완료 노출 on 클래스 -->
          <div class="auth-content-complete">
            <span class="complete-time">09.19 오전 6:25</span>
            <div class="complete-content">
              <v-btn variant="text" height="45" class="bdr-8 cancel" block>
                <template v-slot:prepend>
                  <span class="btn-text">식전 64 mg/dL</span>
                  <img src="/assets/images/icon-photo-arrow.svg" alt="" />
                </template>
              </v-btn>
            </div>
          </div>
          <!-- [D] // 인증 완료 노출 on 클래스 -->
          <div class="auth-content-area">
            <p class="auth-content-text">
              <a href="javascript:;">
                <strong>Tip!</strong> 신체가 인슐린을 충분히 생산하지
                못하거나못하거나못하거나못하거나
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="auth-content">
        <div class="auth-content-top">
          <strong class="auth-content-title">감정 기록하기</strong>
          <div class="button-area">
            <!-- 인증 완료 / 비활성 disabled 속성 추가 / 인증 완료 auth-complete 클래스 추가 -->
            <v-btn variant="text" height="46" class="bdr-8 btn-auth" block
              >인증</v-btn
            >
          </div>
        </div>
        <div class="auth-content-bottom">
          <!-- [D] 인증 완료 노출 on 클래스 -->
          <div class="auth-content-complete">
            <span class="complete-time">09.19 오전 6:25</span>
            <div class="complete-content">
              <v-btn variant="text" height="45" class="bdr-8 cancel" block>
                <template v-slot:prepend>
                  <div class="emoji-box">
                    <i data-emoji="기쁘다"></i>
                  </div>
                  <span class="btn-text">기쁘다</span>
                  <img src="/assets/images/icon-photo-arrow.svg" alt="" />
                </template>
              </v-btn>
            </div>
          </div>
          <!-- [D] // 인증 완료 노출 on 클래스 -->
          <div class="auth-content-area">
            <p class="auth-content-text">
              <a href="javascript:;">
                <strong>Tip!</strong> 신체가 인슐린을 충분히 생산하지
                못하거나못하거나못하거나못하거나
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="auth-content">
        <div class="auth-content-top">
          <strong class="auth-content-title"
            >국, 탕, 찌개는 건더기 위주로 먹고<br />
            국물 꼭 남기기</strong
          >
          <div class="button-area">
            <!-- 인증 완료 / 비활성 disabled 속성 추가 / 인증 완료 auth-complete 클래스 추가 -->
            <v-btn variant="text" height="46" class="bdr-8 btn-auth" block
              >인증</v-btn
            >
          </div>
        </div>
        <div class="auth-content-bottom">
          <!-- [D] 인증 완료 노출 on 클래스 -->
          <div class="auth-content-complete">
            <span class="complete-time">09.19 오전 6:25</span>
            <div class="img-box">
              <img
                src="/assets/images/img-sample-photo.png"
                alt="챌린지 인증 사진형 샘플"
              />
            </div>
            <div class="complete-content">
              <v-btn variant="text" height="45" class="bdr-8 cancel" block>
                <template v-slot:prepend>
                  <img
                    src="/assets/images/icon-challenge-photo.svg"
                    alt=""
                    class="ico-photo"
                  />
                  <span class="btn-text">인증 사진 확인하기</span>
                  <img src="/assets/images/icon-photo-arrow.svg" alt="" />
                </template>
              </v-btn>
            </div>
          </div>
          <!-- [D] // 인증 완료 노출 on 클래스 -->
          <div class="auth-content-area">
            <p class="auth-content-text">
              <a href="javascript:;">
                <strong>Tip!</strong> 고기(동물성단백질)와 달걀이
                좋고좋고좋고좋고좋고좋고좋고좋고좋고
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="auth-content">
        <div class="auth-content-top">
          <strong class="auth-content-title"
            >매일매일 꾸준히 헬스장 가기</strong
          >
          <div class="button-area">
            <!-- 인증 완료 / 비활성 disabled 속성 추가 / 인증 완료 auth-complete 클래스 추가 -->
            <v-btn variant="text" height="46" class="bdr-8 btn-auth" block
              >인증</v-btn
            >
          </div>
        </div>
        <div class="auth-content-bottom">
          <!-- [D] 인증 완료 노출 on 클래스 -->
          <div class="auth-content-complete">
            <span class="complete-time">09.19 오전 6:25</span>
            <div class="complete-content">
              <v-btn variant="text" height="45" class="bdr-8 cancel" block>
                <template v-slot:prepend>
                  <img
                    src="/assets/images/icon-challenge-yes.svg"
                    class="ico-yes"
                    alt=""
                  />
                  <span class="btn-text">YES</span>
                  <img src="/assets/images/icon-photo-arrow.svg" alt="" />
                </template>
                <!-- <template v-slot:prepend>
                    <img src="/assets/images/icon-challenge-no.svg" class="ico-no" alt="" />
                    <span class="btn-text">NO</span>
                    <img src="/assets/images/icon-photo-arrow.svg" alt="" />
                  </template> -->
              </v-btn>
            </div>
          </div>
          <!-- [D] // 인증 완료 노출 on 클래스 -->
          <div class="auth-content-area">
            <p class="auth-content-text">
              <a href="javascript:;">
                <strong>Tip!</strong> 고기(동물성단백질)와 달걀이
                좋고좋고좋고좋고좋고좋고좋고좋고좋고
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="challenge-section-content no-division giveup-content">
      <h2 class="title-01">
        어떤 챌린지를 잘 실천했을까?
        <a href="javascript:;" class="btn-challenge-move">
          <span class="blind">건강 행동별 챌린지 수행률 이동 버튼</span>
        </a>
      </h2>
      <!-- 챌린지 수행 차트 영역 -->
      <!-- 그래프 영역 -->
      <div class="challenge-chart">
        <img src="/assets/images/img-challenge-chart.png" alt="" />
      </div>
      <!-- // 그래프 영역 -->

      <ul class="chart-dot-info">
        <li class="list-item good">양호(80% 이상)</li>
        <li class="list-item normal">보통(50% 이상)</li>
        <li class="list-item bad">부족(50% 이하)</li>
      </ul>
      <!-- // 챌린지 수행 차트 영역 -->
      <div class="giveup-button">
        <v-btn variant="text" height="40px" class="bdr-8 giveup" block
          >챌린지 포기하기</v-btn
        >
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
      const toolTip3 = ref(false)
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
        },
        {
          highlight: { class: 'vc-menses-plan' },
          content: { class: 'vc-menses-plan' },
          dates: [{ start: new Date(2023, 11, 9), span: 3 }]
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
