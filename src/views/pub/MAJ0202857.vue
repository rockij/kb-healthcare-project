<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <h2 class="fs-20 lh-4 font-weight-bold mt-9">
      운동을 연결하고<br />
      내게 맞는 분석을 받아보세요
    </h2>
    <v-list lines="1" class="list-simple-description mt-7">
      <v-list-item
        class="simple-description-items"
        v-for="(item, i) in SportsList"
        :key="i"
      >
        <template v-slot:prepend>
          <v-icon size="40"
            ><img :src="`/assets/images/${item.iname}`" alt=""
          /></v-icon>
        </template>
        <template v-slot:title>{{ item.title }}</template>
        <template v-slot:subtitle>{{ item.text }}</template>
      </v-list-item>
    </v-list>

    <!-- 2차 -->
    <div class="btn-area-middle mt-7">
      <v-btn
        variant="flat"
        height="40px"
        class="bdr-8 fs-15 text-grey2 btn-option"
        color="#F3F7FF"
        >스마트로프 연결하기</v-btn
      >
      <v-btn
        variant="flat"
        height="40px"
        class="bdr-8 fs-15 text-grey2 btn-option"
        color="#FCEBA6"
        >건강 플랫폼 연결하기</v-btn
      >
    </div>
    <!-- //2차 -->

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56"
          class="btn-cancel"
          @click="modal = true"
          >직접 입력</v-btn
        >
        <v-btn variant="text" height="56" class="btn-summit"
          >운동 시작하기</v-btn
        >
      </div>
    </div>
  </div>
  <MAJ0202862 v-model="modal" @close="modal = false" />
</template>

<script>
  import VCalendar from '@/components/VCalendar.vue' // 달력
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import MAJ0202862 from './MAJ0202862.vue'
  import { ref } from 'vue'

  export default {
    components: { VCalendar, CardReport, ReportResult, MAJ0202862 },
    setup() {
      const modal = ref(false)
      const tab = ref(null)
      const Analysis = ref(null)
      const SportsList = ref([
        {
          iname: 'icon-noregi-sports1.svg',
          title: '소모칼로리 분석,',
          text: '기간 별로 나의 운동 정보를 알 수 있어요'
        },
        {
          iname: 'icon-noregi-sports2.svg',
          title: '운동 측정,',
          text: '수행한 운동의 칼로리와 시간을 알 수 있어요'
        },
        {
          iname: 'icon-noregi-sports3.svg',
          title: '운동기록,',
          text: '좋아하는 운동을 기록할 수 있어요'
        }
      ])
      function getText(props) {
        switch (props) {
          case 'primary':
            return '증가'
          case 'success':
            return '안정'
          case 'error':
            return '위험(고혈압 2단계)'
        }
      }

      function handleClick() {
        console.log('emit')
      }

      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 10, 1)]
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 9, 1)]
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 9, 5)]
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 9, 15)]
        }
      ])

      return {
        modal,
        SportsList,
        getText,
        Analysis,
        handleClick,
        tab,
        calendarAttr
      }
    }
  }
</script>
