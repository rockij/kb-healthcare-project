<template>
  <div class="contents">
    <div class="exercise-start" v-if="!modeMap">
      <div class="time-spinner" v-if="!timerCountStart">
        <!-- 3초카운트 다운 -->
        <div class="count-down">
          {{ countDownCount }}
        </div>
      </div>
      <!-- 운동 타이머 -->
      <div class="wrap-timer" v-if="timerCountStart">
        <div class="timer-container">
          <div class="spinner" :class="{ paused: paused }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="#fff"
              color="#3F86F1"
              ref="spinner"
            >
              <defs>
                <linearGradient id="spinner-secondHalf">
                  <stop
                    offset="0%"
                    stop-opacity="0"
                    stop-color="currentColor"
                  />
                  <stop
                    offset="100%"
                    stop-opacity="0.5"
                    stop-color="currentColor"
                  />
                </linearGradient>
                <linearGradient id="spinner-firstHalf">
                  <stop
                    offset="0%"
                    stop-opacity="1"
                    stop-color="currentColor"
                  />
                  <stop
                    offset="100%"
                    stop-opacity="0.5"
                    stop-color="currentColor"
                  />
                </linearGradient>
              </defs>
              <g stroke-width="4">
                <path
                  stroke="url(#spinner-secondHalf)"
                  d="M 4 100 A 96 96 0 0 1 196 100"
                >
                  <animateTransform
                    from="0 100 100"
                    to="360 100 100"
                    attributeName="transform"
                    attribute-type="XML"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="3000ms"
                  />
                </path>
                <path
                  stroke="url(#spinner-firstHalf)"
                  d="M 196 100 A 96 96 0 0 1 4 100"
                >
                  <animateTransform
                    from="0 100 100"
                    to="360 100 100"
                    attributeName="transform"
                    attribute-type="XML"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="3000ms"
                  />
                </path>
              </g>
            </svg>
          </div>
          <div class="timer">
            <p class="icon-sports" :class="exerciseName"></p>
            <div class="timer-time">
              <span>{{ hoursCount }}</span
              ><span class="addon">:</span><span>{{ minutesCount }}</span
              ><span class="addon">:</span><span> {{ secondsCount }} </span>
            </div>
            <p class="name" :class="{ nameStop: paused }">
              {{ stateName.name }}
            </p>
          </div>
        </div>
        <div class="change-mode-button">
          <v-btn
            variant="flat"
            @click="changeMode"
            prepend-icon="icon-location-black"
            color="#FFD633"
            class="btn-changeMode"
            >지도보기</v-btn
          >
        </div>
      </div>
      <div
        class="box-rounded timer-info"
        v-if="
          paused &&
          (hoursCount != '00' || minutesCount != '00' || secondsCount != '00')
        "
      >
        <dl class="dl dl-table">
          <dt>총 운동시간</dt>
          <dd class="font-weight-bold">
            <span v-if="hoursCount != '00'">{{ hoursCount }}시간</span>
            <span v-if="minutesCount != '00'">{{ minutesCount }}분</span>
            <span v-if="secondsCount != '00'">{{ secondsCount }}초</span>
          </dd>
          <dt v-if="report.distance">
            {{ exerciseName.value == 'jumpRope' ? '총 점프수' : '총 이동거리' }}
          </dt>
          <dd v-if="report.distance" class="font-weight-bold">
            <span>{{ report.distance }}</span>
          </dd>
          <dt>총 칼로리</dt>
          <dd class="font-weight-bold">
            <span>{{ report.recordCalorie }}</span>
          </dd>
        </dl>
      </div>
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
        class="modal-bottom modal-timer"
      >
        <div class="change-mode-button">
          <v-btn
            variant="flat"
            @click="changeMode"
            prepend-icon="icon-timer"
            color="#FFD633"
            class="btn-changeMode"
            >타이머보기</v-btn
          >
        </div>
        <v-card>
          <div class="modal-body">
            <div class="flex-shrink-0 modal-body-container">
              <div class="mode-map-timer">
                <p class="name" :class="{ nameStop: paused }">
                  {{ stateName.name }}
                </p>
                <div class="timer-time">
                  <span>{{ hoursCount }}</span
                  ><span class="addon">:</span><span>{{ minutesCount }}</span
                  ><span class="addon">:</span><span> {{ secondsCount }} </span>
                </div>
              </div>
              <div
                class="box-rounded timer-info"
                v-if="
                  paused &&
                  (hoursCount != '00' ||
                    minutesCount != '00' ||
                    secondsCount != '00')
                "
              >
                <dl class="dl dl-table">
                  <dt>총 운동시간</dt>
                  <dd class="font-weight-bold">
                    <span v-if="hoursCount != '00'">{{ hoursCount }}시간</span>
                    <span v-if="minutesCount != '00'"
                      >{{ minutesCount }}분</span
                    >
                    <span v-if="secondsCount != '00'"
                      >{{ secondsCount }}초</span
                    >
                  </dd>
                  <dt v-if="report.distance">
                    {{
                      exerciseName.value == 'jumpRope'
                        ? '총 점프수'
                        : '총 이동거리'
                    }}
                  </dt>
                  <dd v-if="report.distance" class="font-weight-bold">
                    <span>{{ report.distance }}</span>
                  </dd>
                  <dt>총 칼로리</dt>
                  <dd class="font-weight-bold">
                    <span>{{ report.recordCalorie }}</span>
                  </dd>
                </dl>
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
    <MAJ0202849
      v-model="documentModal"
      @close="documentModal = false"
      :sportsName="report.name"
      :sportsClass="exerciseName"
      :sportsTimeHours="sportsTime.hours"
      :sportsTimeMinutes="sportsTime.minutes"
      :sportsTimeSeconds="sportsTime.seconds"
      :recordCalorie="report.recordCalorie"
      :sportsDistance="report.distance"
      :paused="paused"
    />
  </div>
</template>

<script>
  import gpsMap from '@/components/MAJ0202848.vue'
  import MAJ0202849 from './MAJ0202849.vue'
  import { onMounted, reactive, ref } from 'vue'
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
      const exerciseName = ref()
      const sportsTime = reactive({
        hours: '00',
        minutes: '00',
        seconds: '00'
      })
      const report = reactive({
        name: '줄넘기',
        recordCalorie: '1,600kcal',
        distance: '300점프'
      })
      const stateName = reactive({ name: '지속 시간' })
      const modeMap = ref(false)
      const gpsMap = ref('map-dummy.png')
      const exerciseNameIcon = () => {
        switch (report.name) {
          case '야구':
            exerciseName.value = 'baseball'
            break
          case '자전거':
            exerciseName.value = 'bicycle'
            break
          case '탁구':
            exerciseName.value = 'ping-pong'
            break
          case '골프':
            exerciseName.value = 'golf'
            break
          case '근력운동':
            exerciseName.value = 'muscular'
            break
          case '달리기':
            exerciseName.value = 'running'
            break
          case '하이킹':
            exerciseName.value = 'hiking'
            break
          case '농구':
            exerciseName.value = 'basketball'
            break
          case '당구':
            exerciseName.value = 'billiards'
            break
          case '등산':
            exerciseName.value = 'climb'
            break
          case '런닝머신(걷기)':
            exerciseName.value = 'runningMachine'
            break
          case '런닝머신(달리기)':
            exerciseName.value = 'runningMachine'
            break
          case '배드민턴':
            exerciseName.value = 'badminton'
            break
          case '복싱':
            exerciseName.value = 'boxing'
            break
          case '볼링':
            exerciseName.value = 'bowling'
            break
          case '수영':
            exerciseName.value = 'swim'
            break
          case '스쿼시':
            exerciseName.value = 'squash'
            break
          case '스피닝':
            exerciseName.value = 'spinning'
            break
          case '에어로빅':
            exerciseName.value = 'aerobic'
            break
          case '요가':
            exerciseName.value = 'yoga'
            break
          case '족구':
            exerciseName.value = 'footVolleyball'
            break
          case '줄넘기':
            exerciseName.value = 'jumpRope'
            break
          case '축구':
            exerciseName.value = 'footVolleyball'
            break
          case '테니스':
            exerciseName.value = 'tennis'
            break
          case '필라테스':
            exerciseName.value = 'yoga'
            break
          case '주짓수':
            exerciseName.value = 'jiuJitsu'
            break
          case '태권도':
            exerciseName.value = 'taekwondo'
            break
          case '유도':
            exerciseName.value = 'judo'
            break
          case '배구':
            exerciseName.value = 'volleyball'
            break
          case '클라이밍':
            exerciseName.value = 'climbing'
            break
        }
      }
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
        sportsTime.hours = hoursCount.value
        sportsTime.minutes = minutesCount.value
        sportsTime.seconds = secondsCount.value

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
          stateName.name = '지속 시간'
          if (spinner.value) {
            spinner.value.unpauseAnimations()
          }
          timerStart()
        } else {
          buttonText.value = '계속하기'
          stateName.name = '일시 정지'
          if (spinner.value) {
            spinner.value.pauseAnimations()
          }
          timerStop()
        }
        paused.value = !paused.value
      } //운동타이머 circle

      onMounted(() => {
        countDownStart() //카운트다운시작
        exerciseNameIcon()
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
        exerciseName,
        exerciseNameIcon,
        stateName,
        sportsTime,
        documentModal
      }
    }
  }
</script>
