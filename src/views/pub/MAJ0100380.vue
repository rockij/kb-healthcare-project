<template>
  <div class="contents pt-0">
    <div class="today-wrap section-bg pt-7 pb-6">
      <div class="today-title pb-4">이번주 알림</div>
      <v-card
        v-if="noAlarm"
        class="msg-link today-type no-alarm"
        variant="flat"
        color="#fff"
        rounded="xl"
      >
        <img src="/assets/images/icon-message-noalarm.svg" alt="" />
        <div class="desc pt-3">새로운 알림이 없습니다</div>
      </v-card>
      <v-card
        v-else
        class="msg-link today-type"
        variant="flat"
        color="#fff"
        rounded="xl"
        v-for="(item, index) in todayMessage"
        :key="index"
      >
        <img :src="`/assets/images/${item.icon}`" alt="" />
        <div class="title">{{ item.title }}</div>
        <div class="time">{{ item.time }}</div>
        <div class="subTitle pt-1 text-overflow line1">{{ item.subTitle }}</div>
        <div class="desc text-overflow line3">{{ item.desc }}</div>
      </v-card>
    </div>
    <div class="msg-wrap pt-8">
      <div class="mag-tab-title">이전 알림</div>
      <div class="pt-4">
        <v-tabs
          v-model="tab"
          hide-slider
          class="tabs-round navy tabs-simple2 type-2"
        >
          <v-tab value="value01" class="btn-tab" :ripple="false">전체</v-tab>
          <v-tab value="value02" class="btn-tab" :ripple="false">건강</v-tab>
          <v-tab value="value03" class="btn-tab" :ripple="false">챌린지</v-tab>
          <v-tab value="value04" class="btn-tab" :ripple="false">안내</v-tab>
          <v-tab value="value05" class="btn-tab" :ripple="false">리워드</v-tab>
        </v-tabs>
        <v-window v-model="tab" class="mt-2">
          <v-window-item value="value01">
            <v-card
              v-if="noAlarm2"
              class="msg-link today-type no-alarm mt-6"
              variant="flat"
              color="#fff"
              rounded="xl"
            >
              <img src="/assets/images/icon-message-noalarm.svg" alt="" />
              <div class="desc pt-3">알림 내역이 없습니다</div>
            </v-card>
            <v-card
              v-else
              class="msg-link border-type"
              :class="{ read: item.read }"
              variant="flat"
              color="#fff"
              v-for="(item, index) in message"
              :key="index"
            >
              <img :src="`/assets/images/${item.icon}`" alt="" />
              <div class="title">{{ item.title }}</div>
              <div class="time">{{ item.time }}</div>
              <div class="subTitle pt-1 text-overflow line1">
                {{ item.subTitle }}
              </div>
              <div class="desc text-overflow line3">{{ item.desc }}</div>
            </v-card>
          </v-window-item>

          <v-window-item value="value02"
            ><v-sheet class="container-chart">건강</v-sheet></v-window-item
          >

          <v-window-item value="value03"
            ><v-sheet class="container-chart">챌린지</v-sheet></v-window-item
          >

          <v-window-item value="value04"
            ><v-sheet class="container-chart">안내</v-sheet></v-window-item
          >

          <v-window-item value="value05"
            ><v-sheet class="container-chart">리워드</v-sheet></v-window-item
          >
        </v-window>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    setup() {
      const noAlarm = false
      const noAlarm2 = false

      const tab = ref()
      const todayMessage = reactive([
        {
          title: '챌린지',
          subTitle: ' 제목란 제목란 제목란 제목란 제목란 제목란 제목란 제목란',
          time: '15분 전',
          desc: "오국민님! '\수면시간 기록하기'\ To-do를 성공하셨네요 오국민님! '\수면시간 기록하기'\ To-do를 성공하셨네요 오국민님! '\수면시간 기록하기'\ To-do를 성공하셨네요",
          icon: 'icon-message-today.svg'
        },
        {
          title: '건강',
          subTitle: '제목란',
          time: '23시간 전',
          desc: "오국민님! '\수면시간 기록하기'\ To-do를 성공하셨네요",
          icon: 'icon-message-today2.png'
        },
        {
          title: '안내',
          subTitle: '제목란',
          time: '23시간 전',
          desc: "오국민님! '\수면시간 기록하기'\ To-do를 성공하셨네요",
          icon: 'icon-message-today3.png'
        },
        {
          title: '리워드',
          subTitle: '제목란',
          time: '23시간 전',
          desc: "오국민님! '\수면시간 기록하기'\ To-do를 성공하셨네요",
          icon: 'icon-message-today4.png'
        },
        {
          title: '커머스',
          subTitle: '제목란',
          time: '23시간 전',
          desc: "오국민님! '\수면시간 기록하기'\ To-do를 성공하셨네요",
          icon: 'icon-message-today5.png'
        },
        {
          title: '이벤트 ',
          subTitle: '제목란',
          time: '23시간 전',
          desc: "오국민님! '\수면시간 기록하기'\ To-do를 성공하셨네요",
          icon: 'icon-message-today6.png'
        }
      ])
      const message = reactive([
        {
          title: '건강',
          subTitle:
            '제목노출되는 영역(최대글자수 19글자) 제목노출되는 영역(최대글자수 19글자)',
          time: '8월 14일',
          desc: '축하합니다! 휴레이 만성질환 관리서비스에 당첨되었어요 휴레이 만성질환 관리서비스에 당첨되었어요 휴레이 만성질환 관리서비스에 당첨되었어요',
          icon: 'icon-message-01.svg'
        },
        {
          title: '안내',
          subTitle: '제목노출되는 영역(최대글자수 19글자)',
          time: '8월 14일',
          desc: '안내사항 노출',
          icon: 'icon-message-02.svg'
        },
        {
          title: '리워드',
          subTitle: '제목노출되는 영역(최대글자수 19글자)',
          time: '8월 14일',
          desc: '리워드 포인트 확인하기',
          icon: 'icon-message-03.svg',
          read: true
        },
        {
          title: '커머스',
          subTitle: '제목노출되는 영역(최대글자수 19글자)',
          time: '12월 14일',
          desc: '상품추천',
          icon: 'icon-message-04.svg'
        },
        {
          title: '이벤트',
          subTitle: '제목노출되는 영역(최대글자수 19글자)',
          time: '12월 14일',
          desc: '출석체크',
          icon: 'icon-message-05.svg'
        },
        {
          title: '챌린지',
          subTitle: '제목노출되는 영역(최대글자수 19글자)',
          time: '12월 14일',
          desc: '출석체크',
          icon: 'icon-message-06.png'
        }
      ])
      return {
        noAlarm,
        noAlarm2,
        tab,
        message,
        todayMessage
      }
    }
  }
</script>
