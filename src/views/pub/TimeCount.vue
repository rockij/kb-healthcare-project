<template>
  <div class="contents">
    <div class="spinner">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        color="#3f51b5"
        ref="spinner"
      >
        <defs>
          <linearGradient id="spinner-secondHalf">
            <stop offset="0%" stop-opacity="0" stop-color="currentColor" />
            <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
          </linearGradient>
          <linearGradient id="spinner-firstHalf">
            <stop offset="0%" stop-opacity="1" stop-color="currentColor" />
            <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
          </linearGradient>
        </defs>
        <g stroke-width="8">
          <path
            stroke="url(#spinner-secondHalf)"
            d="M 4 100 A 96 96 0 0 1 196 100"
          />
          <path
            stroke="url(#spinner-firstHalf)"
            d="M 196 100 A 96 96 0 0 1 4 100"
          />
          <!-- 1deg extra path to have the round end cap -->
          <path
            stroke="currentColor"
            stroke-linecap="round"
            d="M 4 100 A 96 96 0 0 1 4 98"
          />
        </g>
        <animateTransform
          from="0 0 0"
          to="360 0 0"
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1300ms"
        />
      </svg>
    </div>

    <div class="timer">
      <span> {{ hoursCount }} </span>
      :
      <span> {{ minutesCount }} </span>
      :
      <span> {{ secondsCount }} </span>
    </div>

    <button @click="svgController()">{{ buttonText }}</button>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue'
  export default {
    setup() {
      let spinner = ref(null)
      let buttonText = ref('Stop')
      let paused = ref(false)
      let hours = ref(0)
      let hoursCount = ref('00')
      const minutes = ref(0)
      let minutesCount = ref('00')
      let seconds = ref(0)
      let secondsCount = ref('00')
      let interval = ref()

      const timerStart = () => {
        // isRunning = true
        interval = setInterval(incrementTimer, 10)
      }

      const timerStop = () => {
        // isRunning = false
        clearInterval(interval)
      }

      const timerReset = () => {
        hoursCount.value = '00'
        minutesCount.value = '00'
        secondsCount.value = '00'
      }

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

        secondsCount.value = pad(seconds.value)
        minutesCount.value = pad(minutes.value)
        hoursCount.value = pad(hours.value)

        // pad(seconds.value)
        // pad(minutes.value)
        // pad(hours.value)
      }

      const svgController = () => {
        if (paused.value) {
          buttonText.value = 'Stop'
          spinner.value.unpauseAnimations()
          timerStart()
        } else {
          buttonText.value = 'Play'
          spinner.value.pauseAnimations()
          timerStop()
        }
        paused.value = !paused.value
      }

      onMounted(() => {
        timerStart()
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
        timerReset
      }
    }
  }
</script>
