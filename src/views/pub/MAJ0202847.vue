<template>
  <div class="contents">
    <div class="exercise-start" v-if="!modeMap">
      <div class="time-spinner">
        <!-- 3초카운트 다운 -->
        <div class="count-down" v-if="!timerCountStart">
          {{ countDownCount }}
        </div>
        <!-- 운동 타이머 -->
        <div class="wrap-timer" v-if="timerCountStart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="#fff"
            color="#FC0"
            ref="spinner"
          >
            <defs>
              <linearGradient id="spinner-firstHalf">
                <stop offset="0%" stop-opacity="1" stop-color="currentColor" />
                <stop
                  offset="100%"
                  stop-opacity="0"
                  stop-color="currentColor"
                />
              </linearGradient>
            </defs>
            <g stroke-width="4">
              <path
                stroke="url(#spinner-secondHalf)"
                d="M 4 100 A 96 96 0 0 1 196 100"
              />
              <path
                stroke="url(#spinner-firstHalf)"
                d="M 196 100 A 96 96 0 0 1 4 100"
              />
            </g>
            <animateTransform
              from="0 0 0"
              to="360 0 0"
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="3000ms"
            />
          </svg>
          <div class="timer">
            <span>{{ hoursCount }}</span
            ><span class="addon">:</span><span>{{ minutesCount }}</span
            ><span class="addon">:</span><span> {{ secondsCount }} </span>
          </div>
        </div>
      </div>
      <div class="d-flex justify-end">
        <v-btn variant="flat" @click="changeMode">지도보기</v-btn>
      </div>
      <dl class="dl dl-table" v-for="report in report" :key="report">
        <dt>총 운동시간</dt>
        <dd class="font-weight-bold">
          <span>{{ hoursCount }}</span
          >시간 <span>{{ minutesCount }}</span
          >분 <span>{{ secondsCount }}</span
          >초
        </dd>
        <dt v-if="report.moving">총 이동거리</dt>
        <dd v-if="report.moving" class="font-weight-bold">
          <span>{{ report.moving }}</span>
        </dd>
        <dt>총 칼로리</dt>
        <dd class="font-weight-bold">
          <span class="color-blue">{{ report.recordCalorie }}</span>
        </dd>
      </dl>
      <div class="btn-bottom" v-if="timerCountStart">
        <div class="btn-area d-flex">
          <v-btn
            variant="text"
            height="56"
            class="btn-cancel"
            @click="timerReset(), (documentModal = true)"
            v-if="paused"
            :ripple="false"
            >종료</v-btn
          >
          <v-btn
            variant="text"
            height="56"
            class="btn-summit"
            @click="svgController()"
            :ripple="false"
            >{{ buttonText }}</v-btn
          >
        </div>
      </div>
    </div>
    <div class="exercise-start-map" v-if="modeMap">
      <!-- 지도모드 -->
      <gpsMap @changeMode="changeMode" :map="gpsMap" />
      <v-dialog
        v-model="modeMap"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
        class="modal-bottom"
      >
        <v-card>
          <div class="modal-body">
            <div class="flex-shrink-0 modal-body-container">
              <div class="mode-map-timer">
                <span>{{ hoursCount }}</span
                ><span class="addon">:</span><span>{{ minutesCount }}</span
                ><span class="addon">:</span><span> {{ secondsCount }} </span>
              </div>
            </div>
          </div>
          <v-card-actions>
            <div class="btn-bottom">
              <div class="btn-area d-flex">
                <v-btn
                  variant="text"
                  height="56"
                  class="btn-cancel"
                  @click="timerReset(), (documentModal = true)"
                  v-if="paused"
                  :ripple="false"
                  >종료</v-btn
                >
                <v-btn
                  variant="text"
                  height="56"
                  class="btn-summit"
                  @click="svgController()"
                  :ripple="false"
                  >{{ buttonText }}</v-btn
                >
              </div>
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <!-- MAJ0202849	 운동 측정 종료 -->
    <MAJ0202849 v-model="documentModal" @close="documentModal = false" />
  </div>
</template>

<script>
  import gpsMap from '@/components/MAJ0202848.vue'
  import MAJ0202849 from './MAJ0202849.vue'
  import { onMounted, ref } from 'vue'
  export default {
    components: { gpsMap, MAJ0202849 },
    setup() {
      const documentModal = ref(false)
      let spinner = ref(null)
      let buttonText = ref('일시정지')
      let paused = ref(false)
      let hours = ref(0)
      let hoursCount = ref('00')
      const minutes = ref(0)
      let minutesCount = ref('00')
      let seconds = ref(0)
      let secondsCount = ref('00')
      let interval = ref()
      let countDownCount = ref(3)
      const countDown = ref()
      const timerCountStart = ref(false)
      const report = ref([{ moving: '1.4km', recordCalorie: '1,600kcal' }])
      const modeMap = ref(false)
      const gpsMap = ref('map-dummy.png')

      const changeMode = () => {
        modeMap.value = !modeMap.value
        setTimeout(function () {
          if (spinner.value) {
            if (paused.value) {
              spinner.value.pauseAnimations()
            } else {
              spinner.value.unpauseAnimations()
            }
          }
        })
      }
      const timerStart = () => {
        interval = setInterval(incrementTimer, 1000)
      } //운동 타이머 시작

      const timerStop = () => {
        clearInterval(interval)
      } //운동 타이머 정지

      const timerReset = () => {
        hoursCount.value = '00'
        minutesCount.value = '00'
        secondsCount.value = '00'
        hours.value = 0
        minutes.value = 0
        seconds.value = 0
        clearInterval(interval)
        if (spinner.value) {
          spinner.value.pauseAnimations()
        }
      } //운동 타이머 리셋

      const pad = (number) => {
        return number < 10 ? '0' + number : number
      }
      const incrementTimer = () => {
        seconds.value++
        if (seconds.value > 59) {
          seconds.value = 0
          minutes.value++
          if (minutes.value > 59) {
            minutes.value = 0
            hours.value++
          }
        }

        if (hoursCount.value == 24) {
          timerReset()
        }

        secondsCount.value = pad(seconds.value)
        minutesCount.value = pad(minutes.value)
        hoursCount.value = pad(hours.value)
      }

      const decreaseTimer = () => {
        countDownCount.value--
        if (countDownCount.value == -1) {
          clearInterval(countDown.value)
          timerCountStart.value = true
          timerStart() //운동타이머시작
        }
      } //카운트다운계산

      const countDownStart = () => {
        countDown.value = setInterval(decreaseTimer, 1000)
      }

      const svgController = () => {
        if (paused.value) {
          buttonText.value = '일시정지'
          if (spinner.value) {
            spinner.value.unpauseAnimations()
          }
          timerStart()
        } else {
          buttonText.value = '계속하기'
          if (spinner.value) {
            spinner.value.pauseAnimations()
          }
          timerStop()
        }
        paused.value = !paused.value
      } //운동타이머 circle

      onMounted(() => {
        countDownStart() //카운트다운시작
      })
      return {
        spinner,
        buttonText,
        paused,
        svgController,
        hours,
        minutes,
        seconds,
        hoursCount,
        minutesCount,
        secondsCount,
        interval,
        timerStart,
        timerStop,
        timerReset,
        countDownStart,
        countDownCount,
        timerCountStart,
        report,
        gpsMap,
        changeMode,
        modeMap,
        documentModal
      }
    }
  }
</script>
