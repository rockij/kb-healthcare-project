<template>
  <div class="contents pt-0">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page bg pa-4">
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <v-card-title class="pa-0 fs-20 font-weight-bold"
          >오건강님<br />오늘 하루 어떠셨나요?
        </v-card-title>
        <p class="text-info-grey2 fs-16 mt-2">
          토닥토닥 마음관리가 필요한<br />오늘 기분 기록을 해보세요
        </p>

        <v-btn-toggle
          class="emoji-bigselct mt-8"
          :class="emojiResultClass"
          v-model="emotionSelect"
          @click="emotionFunc"
        >
          <div class="d-flex justify-center gap-34 emoji-anim-frame">
            <v-btn variant="text" value="verygood" class="radio-imoji">
              <div class="emoji-anim verygood">
                <figure class="face">
                  <span class="eye"></span>
                  <span class="eye last"></span>
                  <span class="mouth"></span>
                  <span class="heart1"></span>
                  <span class="heart2"></span>
                  <span class="heart3"></span>
                </figure>
              </div>
              매우좋음
            </v-btn>
            <v-btn variant="text" value="good" class="radio-imoji">
              <div class="emoji-anim good">
                <figure class="face">
                  <span class="eye"></span>
                  <span class="eye last"></span>
                  <span class="mouth"></span>
                </figure>
              </div>
              좋음
            </v-btn>
          </div>
          <div
            class="d-flex justify-space-around emoji-anim-frame"
            :class="emostateClass"
          >
            <v-btn
              ref="emojiNormal"
              variant="text"
              value="normal"
              class="radio-imoji"
            >
              <div class="emoji-anim normal">
                <figure class="face">
                  <span class="eye"></span>
                  <span class="eye last"></span>
                  <span class="mouth"></span>
                </figure>
              </div>
              보통
            </v-btn>
            <v-btn variant="text" value="bad" class="radio-imoji">
              <div class="emoji-anim bad">
                <figure class="face">
                  <span class="eye"></span>
                  <span class="eye last"></span>
                  <span class="mouth"></span>
                </figure>
              </div>
              나쁨
            </v-btn>
            <v-btn variant="text" value="verybad" class="radio-imoji">
              <div class="emoji-anim verybad">
                <figure class="face">
                  <span class="eye"></span>
                  <span class="eye last"></span>
                </figure>
              </div>
              매우나쁨
            </v-btn>
          </div>
        </v-btn-toggle>
      </v-card>
    </div>
    <!-- //오늘상태선택 -->

    <div class="py-8">
      <h2 class="tit-03 tit-link pb-6">
        <v-btn block variant="text">이달의 감정 랭킹 Top5</v-btn>
      </h2>
      <div v-for="list in top5List" :key="list.id" class="list-emotion">
        <div class="emoji-box">
          <i :data-emoji="list.stateText"></i>{{ list.stateText }}
        </div>
        <div class="progress-bar mt-12" :data-num="list.gagePercent">
          <div class="bar" :style="`width: ${list.gagePercent}%`">
            <span class="tooltip-balloon arrow-bottom icon-walk num"
              >{{ list.gageText }}번</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- //이달의 감정 랭킹 Top5 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">기분 기록</v-btn>
      </h2>
      <div class="text-info-grey fs-16">최근 3개 기록만 표시됩니다</div>
      <CardReport
        :btn="true"
        v-for="report in reports"
        :key="report.id"
        @handleClick="modal = true"
      >
        <template #date>{{ report.date }}</template>
        <template #content>
          <v-chip
            label
            size="small"
            :color="report.state"
            class="chip-default chip-color"
          >
            {{ getText(report.state) }}
          </v-chip>
          <dl class="dl">
            <dt class="fs-14 align-self-start">{{ report.title }}</dt>
            <dd>
              {{ report.text }}
              <div class="font-weight-bold d-flex align-center mt-2">
                {{ report.statetext }}
                <i class="icon-state" :data-emoji="report.statetext"></i>
              </div>
            </dd>
          </dl>
        </template>
      </CardReport>
    </div>
    <!-- //기분다이어리 -->

    <DialogSetting
      :lists="modalList"
      v-model="modal"
      :btnModify="false"
      @close="modal = false"
      @deleteClick="delFunc"
    />
    <DialogEmotionInput
      :message="emotionMsg"
      :classOption="emotionClass"
      :tabNum="emotionTabNum"
      v-model="modal2"
      @close="emostateFunc"
    />
  </div>
</template>
<script>
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import DialogSetting from '@/components/DialogSetting.vue' // 설정
  import DialogEmotionInput from '@/views/pub/MAJ0202971.vue'
  import { ref, reactive, computed, onMounted } from 'vue'
  export default {
    components: { VCalendar, CardReport, DialogSetting, DialogEmotionInput },
    setup() {
      const weekday = reactive(['일', '월', '화', '수', '목', '금', '토'])
      const calendarWeek = ref(true)
      const calendarMonth = ref(false)
      const reports = ref([
        {
          id: 1,
          date: '오전 6시 35분',
          state: 'error',
          title: '메모',
          text: '사용자가 입력한 메모가 노출됩니다',
          statetext: '화남'
        },
        {
          id: 2,
          date: '오전 6시 35분',
          state: 'yellow',
          title: '메모',
          text: '사용자가 입력한 메모가 노출됩니다',
          statetext: '신이남'
        },
        {
          id: 3,
          date: '오전 6시 35분',
          state: 'success',
          title: '메모',
          text: '사용자가 입력한 메모가 노출됩니다 사용자가 입력한 메모가 노출됩니다',
          statetext: '슬픔'
        }
      ])
      const top5List = ref([
        {
          id: 1,
          stateText: '화남',
          gagePercent: 50,
          gageText: 16
        },
        {
          id: 2,
          stateText: '신이남',
          gagePercent: 20,
          gageText: 10
        },
        {
          id: 3,
          stateText: '슬픔',
          gagePercent: 20,
          gageText: 10
        },
        {
          id: 4,
          stateText: '우울한',
          gagePercent: 20,
          gageText: 10
        },
        {
          id: 5,
          stateText: '짜증난',
          gagePercent: 20,
          gageText: 4
        },
        {
          id: 6,
          stateText: '행복한',
          gagePercent: 20,
          gageText: 10
        },
        {
          id: 6,
          stateText: '감사한',
          gagePercent: 20,
          gageText: 10
        },
        {
          id: 7,
          stateText: '만족한',
          gagePercent: 20,
          gageText: 10
        }
      ])
      function getText(props) {
        switch (props) {
          case 'success':
            return '매우좋음'
          case 'yellow':
            return '보통'
          case 'error':
            return '매누나쁨'
        }
      }

      const modal = ref(false)
      const modalTitle = ref('설정')
      const modalList = ref([
        {
          value: 1,
          text: '삭제'
        }
      ])
      const delFunc = () => {
        alert('삭제')
      }

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
        } else if (emotionSelect.value === 'good') {
          emotionMsg.value = '좋음'
          emotionTabNum.value = 0
        } else if (emotionSelect.value === 'normal') {
          emotionMsg.value = '보통'
          emotionTabNum.value = 1
        } else if (emotionSelect.value === 'bad') {
          emotionMsg.value = '나쁨'
          emotionTabNum.value = 2
        } else if (emotionSelect.value === 'verybad') {
          emotionMsg.value = '매우나쁨'
          emotionTabNum.value = 2
        }
        emotionClass.value = emotionSelect.value
      }
      const emojiResultClass = ref()
      const emostateClass = ref('mt-5')
      const emostateFunc = () => {
        modal2.value = false
        emojiResultClass.value = emotionSelect.value
        emostateClass.value = ''
      }

      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          dot: { class: 'emoji-verygood' },
          dates: [new Date(2023, 9, 29)]
        },
        {
          dot: { class: 'emoji-good' },
          dates: [new Date(2023, 9, 10)]
        },
        {
          dot: { class: 'emoji-normal' },
          dates: [new Date(2023, 9, 20)]
        },
        {
          dot: { class: 'emoji-bad' },
          dates: [new Date(2023, 9, 13)]
        },
        {
          dot: { class: 'emoji-verybad' },
          dates: [new Date(2023, 9, 7)]
        }
      ])

      const emojiVerygood = ref()

      onMounted(() => {
        setTimeout(() => {
          emojiVerygood.value = 'play'
        }, 300)
      })

      return {
        weekday,
        calendarWeek,
        calendarMonth,
        reports,
        getText,
        top5List,
        modal,
        modalTitle,
        modalList,
        delFunc,
        emotionSelect,
        emotionFunc,
        emostateFunc,
        emojiResultClass,
        emostateClass,
        modal2,
        emotionMsg,
        emotionClass,
        emotionTabNum,
        calendarAttr,
        emojiVerygood
      }
    }
  }
</script>
