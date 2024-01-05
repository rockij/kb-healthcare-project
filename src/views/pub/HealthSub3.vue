<template>
  <div class="contents pt-0">
    <div class="section-page bg pa-4">
      <v-card variant="flat" rounded="xl" class="px-4 py-6 text-center">
        <div class="relative">
          <!-- chart -->
          <img src="/assets/images/graph-sleep.svg" alt="차트 샘플 이미지" />
          <div class="chart-sleep-data fs-18">
            오늘 수면 시간은<br />6시간 50분 이에요
          </div>
        </div>
        <div class="dl-sleep my-4">
          <dl>
            <dt>잠든 시간</dt>
            <dd>오후 11:40</dd>
          </dl>
          <v-divider vertical />
          <dl>
            <dt>일어난 시간</dt>
            <dd>오전 8:30</dd>
          </dl>
        </div>

        <div class="box-rounded-fill">
          <ul class="list-circle text-left">
            <li>
              당일 10시부터 당일 20시까지의 수면데이터는 수면 일정에 포함되지
              않고, 낮잠으로 표기됩니다
            </li>
          </ul>
        </div>
        <div class="btn-double mt-8">
          <v-btn variant="text" height="48" class="btn-summit">
            저장하기
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const modal2 = ref(false)
      const emotionSelect = ref()
      const emotionMsg = ref()
      const emotionClass = ref()
      const emotionTabNum = ref()
      const emotionFunc = () => {
        modal2.value = true
        //console.log(emotionSelect.value)
        if (emotionSelect.value === 'verygood') {
          emotionMsg.value = '매우 좋음'
          emotionTabNum.value = 0
        } else if (emotionSelect.value === 'normal') {
          emotionMsg.value = '보통'
          emotionTabNum.value = 1
        } else if (emotionSelect.value === 'verybad') {
          emotionMsg.value = '매우나쁨'
          emotionTabNum.value = 2
        }
        emotionClass.value = emotionSelect.value
      }
      const emoResultClass = ref()
      const emoBoxClass = ref('mt-5')
      const emoResultTitle = ref('오늘 하루 어떠셨나요?')
      const emoResultMsg = ref('하고 싶은 이야기를 공유해 주세요')
      const emoResultFunc = () => {
        modal2.value = false
        emoResultClass.value = emotionSelect.value
        emoBoxClass.value = ''
        if (emoResultClass.value === 'verygood') {
          emoResultTitle.value = '좋은 일이 당신을 기다리고 있어요'
          emoResultMsg.value = '긍정적인 에너지를 유지하세요'
        } else if (emoResultClass.value === 'normal') {
          emoResultTitle.value = '보통의 날도 소중해요'
          emoResultMsg.value = '작은 기쁨을 찾아보세요'
        } else if (emoResultClass.value === 'verybad') {
          emoResultTitle.value = '조금 더 힘을 내세요'
          emoResultMsg.value = '어려운 시기를 극복하고 나면 더 강해질 거예요'
        }
      }
      return {
        emotionSelect,
        emotionFunc,
        emoResultFunc,
        emoResultClass,
        emoBoxClass,
        modal2,
        emotionMsg,
        emotionClass,
        emotionTabNum,
        emoResultTitle,
        emoResultMsg
      }
    }
  }
</script>
