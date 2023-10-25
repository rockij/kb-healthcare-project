<template>
  <div class="contents">
    <LifeCalendar :classOption="'life-calendar'" />
    <div class="section-page bg pa-4">
      <BanerReport :bnShow="'good'" :videBox="false" class="mb-4">
        휴레이 메시지 영역
      </BanerReport>
      <v-card variant="flat" rounded="xl" class="pt-4 pr-6 pb-4 pl-6">
        <Nodata
          :icon="true"
          :iconSize="'big'"
          :optionClass="'type'"
          class="pt-4"
        >
          <div class="fs-16">
            수면을 입력하고<br />내게 맞는 분석을 받아보세요
          </div>
        </Nodata>
        <div class="btn-area2 mt-8">
          <v-btn
            variant="text"
            height="48px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            >직접 입력</v-btn
          >
        </div>
      </v-card>
    </div>

    <div class="py-8">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">수면 기록</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 3개 기록만 표시됩니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          오늘 수면 기록이 없어요<br />내 수면을 기록해보세요
        </div>
      </Nodata>
    </div>
    <!-- //수면기록 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">수면 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 1주일의 수면 분석입니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          아직 수면 기록이 없어요<br />수면 인증을 하면 확인할 수 있어요
        </div>
      </Nodata>
    </div>
    <!-- //수면분석 -->
  </div>
</template>
<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import LifeCalendar from '@/views/pub/LifeCalendar.vue'
  import BanerReport from '@/components/BanerReport.vue'
  import CardReport from '@/components/CardReport.vue'
  import { ref } from 'vue'
  export default {
    components: {
      Nodata,
      LifeCalendar,
      BanerReport,
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
