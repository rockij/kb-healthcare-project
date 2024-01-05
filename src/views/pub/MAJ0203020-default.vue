<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <h2 class="fs-20 lh-4 font-weight-bold mt-9">
      혈당을 연결하고<br />
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

    <div class="btn-area2 mt-7">
      <v-btn
        variant="flat"
        height="46px"
        class="bdr-8 fs-15 text-grey2"
        color="#F3F7FF"
        block
        >기기 연결하기</v-btn
      >
      <v-btn
        variant="flat"
        height="46px"
        class="bdr-8 fs-15 text-grey2"
        color="#FCEBA6"
        block
        >건강 플랫폼 연결하기</v-btn
      >
    </div>

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="btn-summit"
          >직접 입력하기</v-btn
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
          title: '시간대별 분석',
          text: '시간대별로 나의 혈당 정보를 알 수 있어요',
          iname: 'icon-noregi-bloodpressure01.svg'
        },
        {
          title: '예상 당화혈색소 분석',
          text: '입력한 정보로 예상 당화 혈색소를 알 수 있어요',
          iname: 'icon-noregi-bloodsugar02.svg'
        },
        {
          title: '혈당 스파이크 분석',
          text: '섭취음식의 당류를 분석해 관리 할 수 있어 ',
          iname: 'icon-noregi-bloodsugar03.svg'
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
