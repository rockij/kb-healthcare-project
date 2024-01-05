<template>
  <div class="contents">
    <div class="d-flex fs-13">
      <span class="flex-1-1-100 d-flex flex-column align-center"
        >잠든 시간<strong class="fs-20">오후 {{ sleepStart }}</strong></span
      >
      <v-divider
        class="border-opacity-100 align-self-center"
        :thickness="1"
        color="#eee"
        style="height: 24px"
        vertical
      />
      <span class="flex-1-1-100 d-flex flex-column align-center"
        >일어난 시간<strong class="fs-20">오전 {{ wakeStart }}</strong></span
      >
    </div>
    <div class="d-flex justify-center mt-8">
      <div class="knob-container">
        <div class="knobcontainer"></div>
        <div class="knob-text">오늘 수면 시간은 {{ duration }}입니다</div>
      </div>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56"
          class="btn-cancel"
          @click="$emit('close')"
          >취소</v-btn
        >
        <v-btn
          variant="text"
          height="56"
          class="btn-summit"
          @click="snackbar = true"
          >저장</v-btn
        >
      </div>
      <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        class="toast-basic"
        @update:modelValue="$emit('close')"
      >
        저장되었습니다
      </v-snackbar>
    </div>
  </div>
</template>
<script>
  import { ref, onMounted } from 'vue'
  export default {
    emits: ['close'],
    setup() {
      const dialog = ref(true)
      const snackbar = ref(false)
      const sleepStart = ref('')
      const wakeStart = ref('')
      const duration = ref('')

      const setTimeWheel = () => {
        $('.knobcontainer').timerangewheel({
          width: 240,
          height: 240,
          offset: 0,
          indicatorWidth: 38, // 휠 너비
          handleRadius: 19, // 핸들반경(픽셀)
          handleStrokeWidth: 0, // 핸들링 획 너비
          accentColor: '#FFD633', // 라인바 컬러
          indicatorBackgroundColor: '#eee',
          handleFillColorStart: '#FFBC00', // 시작아이콘
          handleFillColorEnd: '#FFBC00', // 종료아이콘
          data: { start: '19:10', end: '02:00' },
          onChange: function (timeObj) {
            console.log(timeObj)
            sleepStart.value = timeObj.start
            wakeStart.value = timeObj.end
            duration.value = timeObj.duration
          }
        })
      }

      onMounted(() => {
        setTimeWheel()
      })

      return { dialog, snackbar, sleepStart, wakeStart, duration, setTimeWheel }
    }
  }
</script>
