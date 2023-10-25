<template>
  <div class="contents">
    <div class="report-title mb-4">
      <!-- picker -->
      <v-btn
        variant="text"
        class="fs-24 pa-0"
        @click="
          ;(calendarMonth = !calendarMonth), (calendarWeek = !calendarWeek)
        "
      >
        <span class="pr-2">2023.08.03</span>
        <img src="@/assets/images/icon-arrow-down.svg" alt="" />
      </v-btn>
    </div>
    <div v-if="calendarMonth" class="calendar-body">
      <div v-for="(week, i) in weekday" :key="i" class="weekday">
        {{ week }}
      </div>
      <div v-for="n in 31" :key="n" class="days">
        <div class="text">{{ n }}</div>
      </div>
    </div>
    <v-btn
      v-if="calendarMonth"
      variant="text"
      class="btn-native-bar"
      title="달력"
      @click=";(calendarMonth = !calendarMonth), (calendarWeek = !calendarWeek)"
    ></v-btn>
    <!-- //달력 -->

    <div class="section-page bg pa-4">
      <v-card variant="flat" rounded="xl" class="pa-4">
        <v-card-title class="pa-0 fs-20 font-weight-bold"
          >오건강님<br />오늘 하루 어떠셨나요?
        </v-card-title>
        <p class="text-info-grey2 fs-16 mt-2">
          토닥토닥 마음관리가 필요한<br />오늘 기분 기록을 해보세요
        </p>
        <div class="imoji-bigselct mt-7">
          <v-radio-group v-model="emotionSelect" @change="emotionFunc">
            <div class="d-flex justify-center">
              <v-radio value="verygood" class="radio-imoji">
                <template v-slot:label
                  ><i data-emoji="매우좋음"></i>매우좋음</template
                >
              </v-radio>
              <v-radio value="good" class="radio-imoji ml-7">
                <template v-slot:label><i data-emoji="좋음"></i>좋음</template>
              </v-radio>
            </div>
            <div class="d-flex justify-center mt-4">
              <v-radio value="normal" class="radio-imoji">
                <template v-slot:label><i data-emoji="보통"></i>보통</template>
              </v-radio>
              <v-radio value="bad" class="radio-imoji ml-7">
                <template v-slot:label><i data-emoji="나쁨"></i>나쁨</template>
              </v-radio>
              <v-radio value="verybad" class="radio-imoji ml-7">
                <template v-slot:label
                  ><i data-emoji="매우나쁨"></i>매우나쁨</template
                >
              </v-radio>
            </div>
          </v-radio-group>
        </div>
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
            <span class="num">{{ list.gageText }}번</span>
          </div>
        </div>
      </div>
    </div>
    <!-- //이달의 감정 랭킹 Top5 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">기분 다이어리</v-btn>
      </h2>
      <div class="text-info-grey fs-16">전체 일기를 한번에 확인해보세요</div>
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
          <v-chip label size="small" class="chip-default ml-2">직접입력</v-chip>
          <dl class="dl">
            <dt class="fs-14">{{ report.title }}</dt>
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
      @close="modal2 = false"
    />
  </div>
</template>
<script>
  import CardReport from '@/components/CardReport.vue'
  import DialogSetting from '@/components/DialogSetting.vue' // 설정
  import DialogEmotionInput from '@/views/pub/MAJ0202971.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: { CardReport, DialogSetting, DialogEmotionInput },
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

      const emotionSelect = ref()
      const emotionFunc = () => {
        modal2.value = true
        console.log(emotionSelect.value)
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
      const modal2 = ref(false)
      const emotionMsg = ref()
      const emotionClass = ref()
      const emotionTabNum = ref()

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
        modal2,
        emotionMsg,
        emotionClass,
        emotionTabNum
      }
    }
  }
</script>
