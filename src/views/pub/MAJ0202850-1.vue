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
      <v-list-subheader class="fs-20 lh-4 font-weight-bold mb-7"
        >걸음을 연결하고<br />
        내게 맞는 분석을 받아보세요</v-list-subheader
      >
      <v-list-item class="simple-description-items">
        <template v-slot:prepend>
          <v-icon size="40"></v-icon>
        </template>
        <template v-slot:title>시간대별 분석</template>
        <template v-slot:subtitle
          >시간대별 로 나의 걸음 정보를 알 수 있어요</template
        >
      </v-list-item>

      <v-list-item class="simple-description-items">
        <template v-slot:prepend>
          <v-icon size="40"></v-icon>
        </template>
        <template v-slot:title>연령별 분석</template>
        <template v-slot:subtitle
          >나의 또래 걸음수를 비교 분석 해 드려요
        </template>
      </v-list-item>

      <v-list-item class="simple-description-items">
        <template v-slot:prepend>
          <v-icon size="40"></v-icon>
        </template>
        <template v-slot:title>성별 분석</template>
        <template v-slot:subtitle
          >내 성별에 따른 걸음수 비교를 할 수 있어요</template
        >
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
  </div>
</template>

<script>
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import MAJ0202862 from './MAJ0202862.vue'
  import { ref } from 'vue'

  export default {
    components: { CardReport, ReportResult, MAJ0202862 },
    setup() {
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
        reports,
        getText,
        Analysis,
        handleClick,
        tab
      }
    }
  }
</script>
