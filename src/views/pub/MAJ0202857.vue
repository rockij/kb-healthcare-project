<template>
  <div class="contents">
    <div class="report-title mb-4">
      <!-- picker -->
      <v-btn variant="text" class="fs-24 pa-0">
        <span class="pr-2">2023.08.03</span>
        <img src="@/assets/images/icon-arrow-down.svg" alt="" />
      </v-btn>
      <v-chip label size="small" class="chip-default"
        ><span class="text-dot">미연결</span></v-chip
      >
    </div>
    <v-list lines="1" class="list-simple-description">
      <v-list-subheader class="fs-20 font-weight-bold mb-7"
        >운동을 연결하고<br />
        내게 맞는 분석을 받아보세요</v-list-subheader
      >
      <v-list-item class="simple-description-items">
        <template v-slot:prepend>
          <v-icon size="40"></v-icon>
        </template>
        <template v-slot:title>소모칼로리 분석</template>
        <template v-slot:subtitle
          >기간 별로 나의 운동 정보를 알 수 있어요</template
        >
      </v-list-item>

      <v-list-item class="simple-description-items">
        <template v-slot:prepend>
          <v-icon size="40"></v-icon>
        </template>
        <template v-slot:title>운동 측정</template>
        <template v-slot:subtitle
          >수행한 운동의 칼로리와 시간을 알 수 있어요
        </template>
      </v-list-item>

      <v-list-item class="simple-description-items">
        <template v-slot:prepend>
          <v-icon size="40"></v-icon>
        </template>
        <template v-slot:title>운동기록</template>
        <template v-slot:subtitle> 좋아하는 운동을 기록할 수 있어요 </template>
      </v-list-item>
    </v-list>

    <div class="btn-area2">
      <v-btn
        variant="flat"
        height="46px"
        class="bdr-8 fs-15"
        color="#FCEBA6"
        block
        >건강 플랫폼 연결하기</v-btn
      >
    </div>

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
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import MAJ0202862 from './MAJ0202862.vue'
  import { ref } from 'vue'

  export default {
    components: { CardReport, ReportResult, MAJ0202862 },
    setup() {
      const modal = ref(false)
      const tab = ref(null)
      const Analysis = ref(null)
      const reports = ref([
        {
          id: 0,
          date: '오전 10시 35분',
          device: '기기',
          state: 'success',
          recordBloodPressure: '100',
          recordPulse: '120/80',
          hasMemo: '사용자가 입력한 메모가 노출됩니다'
        },
        {
          id: 1,
          date: '오전 6시 35분',
          device: '플랫폼',
          state: 'error',
          recordBloodPressure: '100',
          recordPulse: '132/32'
        },
        {
          id: 2,
          date: '오전 6시 35분',
          device: '',
          state: 'error',
          recordBloodPressure: '100',
          recordPulse: '132/32'
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
      return {
        modal,
        reports,
        getText,
        Analysis,
        handleClick,
        tab
      }
    }
  }
</script>
