<template>
  <div class="contents">
    <v-card
      class="msg-link alert-card mb-8 alert-setting type-2"
      variant="flat"
      color="#EEF6FF"
      rounded="lg"
      v-if="isAlert"
    >
      <div class="text-area" v-if="isAlert">
        <div class="alert-title">알림이 꺼져 있어요!</div>
        <div class="alert-desc pt-1">
          알림이 꺼져 있으면 알림을 받을 수 없어요. 기기 설정에서 알림을 허용해
          주세요.
        </div>
      </div>
      <img src="/assets/images/icon-alert.svg" alt="" class="alert-icon" />
    </v-card>

    <div class="alarm-title">
      <div class="title">개별 맞춤 알림</div>
      <!-- 2차 -->
      <!-- <div class="alarm-desc pt-2">
        <span class="text-blue font-weight-bold">오건강</span>님이 선택한 알림을
        보내 드려요!
      </div> -->
      <!-- // 2차 -->
    </div>
    <div class="alarm-area">
      <ul>
        <li v-for="item in selectedAlarm" :key="item.id" class="alarm-item">
          <div class="top-text">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>

          <v-switch
            class="switch-default"
            v-model="switchOff1"
            color="#FFD338"
            hide-details
            @click=";(snackbar = true), (alarm = !alarm)"
            :model-value="alarm"
          ></v-switch>

          <v-snackbar
            v-model="snackbar"
            :timeout="2000"
            class="toast-basic not-button"
            >{{ alarm ? 'on' : 'off' }}
          </v-snackbar>
        </li>
      </ul>
    </div>
    <div class="alarm-title pt-8">
      <div class="title">이벤트 혜택 알림</div>
      <div class="desc">
        특별한 혜택과 이벤트 정보를 실시간으로 받아 볼 수 있는 알림으로 개별
        맞춤 알림 수신과 무관해요
      </div>
    </div>
    <div class="alarm-area">
      <ul>
        <li v-for="item in eventAlarm" :key="item.id" class="alarm-item type-2">
          <div class="title align-self-center">{{ item.title }}</div>

          <v-switch
            v-if="item.switch"
            class="switch-default"
            v-model="switchOff2"
            color="#FFD338"
            value="on"
            hide-details
          ></v-switch>
          <div class="text-btn" v-if="!item.switch">
            <v-btn variant="text"
              >{{ item.btn }}<v-icon>mdi-chevron-right</v-icon></v-btn
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    setup() {
      const alarm = ref(true)
      const snackbar = ref(false)
      const isAlert = true
      const alarmGuide = true
      const switchOff1 = ref('on')
      const switchOff2 = ref('off')
      const selectedAlarm = reactive([
        {
          id: 0,
          title: '챌린지 알림',
          desc: '챌린지 수행, 랭킹 등에 대한 알림 받기'
        },
        {
          id: 1,
          title: '복약 알림',
          desc: '설정한 약 복용 시간에 알림 받기'
        },
        {
          id: 2,
          title: '프로그램 알림',
          desc: '예약 변경, 취소 등 구매한 프로그램에 대한 알림 받기'
        },
        {
          id: 3,
          title: '건강검진 알림',
          desc: '건강검진 결과 분석 도착 알림 받기'
        },
        {
          id: 4,
          title: '커뮤니티 알림',
          desc: '작성한 게시글에 대한 댓글, 좋아요, 신고 등 활동에 대한 알림 받기'
        }
      ])
      const eventAlarm = reactive([
        {
          id: 0,
          title: '개인정보 마케팅 및 활용 동의',
          switch: false,
          btn: '동의안함'
        },
        {
          id: 1,
          title: '앱 푸시',
          switch: true
        },
        {
          id: 2,
          title: '문자메세지',
          switch: true
        },
        {
          id: 3,
          title: '이메일',
          switch: true
        }
      ])

      return {
        alarm,
        snackbar,
        isAlert,
        switchOff1,
        switchOff2,
        selectedAlarm,
        eventAlarm,
        alarmGuide
      }
    }
  }
</script>
