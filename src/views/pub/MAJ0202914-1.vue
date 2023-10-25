<template>
  <div class="contents">
    <LifeCalendar :classOption="'life-calendar'" />
    <div class="section-page bg pa-4">
      <v-card variant="flat" rounded="xl" class="pt-4 pr-6 pb-4 pl-6">
        <Nodata
          :icon="true"
          :iconSize="'big'"
          :optionClass="'type'"
          class="pt-4"
        >
          <div class="fs-16">
            아직 흡연 기록이 없어요<br />흡연 기록을 입력하면 확인할 수 있어요
          </div>
        </Nodata>
        <div class="btn-area2 mt-8">
          <v-btn
            variant="flat"
            height="48px"
            class="bdr-8 fs-16 font-weight-bold"
            color="#FCEBA6"
            block
            >직접 입력</v-btn
          >
          <v-btn
            variant="text"
            height="48px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            >건강 플랫폼 연결하기</v-btn
          >
        </div>
      </v-card>
    </div>
    <v-list lines="1" class="list-simple-description py-8">
      <v-list-item class="simple-description-items">
        <template v-slot:prepend>
          <v-icon size="40"></v-icon>
        </template>
        <template v-slot:title>기간 별 분석</template>
        <template v-slot:subtitle
          >기간 별 로 나의 수면 정보를 알 수 있어요</template
        >
      </v-list-item>

      <v-list-item class="simple-description-items">
        <template v-slot:prepend>
          <v-icon size="40"></v-icon>
        </template>
        <template v-slot:title>수면 상태 분석</template>
        <template v-slot:subtitle
          >시간 대비 수면의 질을 분석해 알려 드려요
        </template>
      </v-list-item>

      <v-list-item class="simple-description-items">
        <template v-slot:prepend>
          <v-icon size="40"></v-icon>
        </template>
        <template v-slot:title>건강 플랫폼 연동</template>
        <template v-slot:subtitle
          >플랫폼을 연동해 간편하게 입력할 수 있어요</template
        >
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import LifeCalendar from '@/views/pub/LifeCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import { ref } from 'vue'
  export default {
    components: {
      Nodata,
      LifeCalendar,
      CardReport
    },
    setup() {
      const reports = ref([
        {
          id: 1,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'primary',
          title: '수면시간',
          time: '7시간 1분',
          title2: '수면점수',
          record: '82'
        },
        {
          id: 2,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'success',
          title: '수면시간',
          time: '7시간 1분',
          title2: '수면점수',
          record: '82-105'
        },
        {
          id: 3,
          date: '오전 6:00',
          device: '플랫폼',
          state: 'error',
          title: '수면시간',
          time: '7시간 1분',
          title2: '수면점수',
          record: '20'
        }
      ])
      function getText(props) {
        switch (props) {
          case 'primary':
            return '과다'
          case 'success':
            return '적정'
          case 'error':
            return '부족'
        }
      }
      function handleClick() {
        console.log('emit')
      }

      return { reports, getText, handleClick }
    }
  }
</script>
