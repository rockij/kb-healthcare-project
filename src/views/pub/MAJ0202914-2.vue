<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar />
    </div>
    <div class="section-page bg pa-4">
      <v-card variant="flat" rounded="xl" class="pt-4 pr-6 pb-4 pl-6">
        <Nodata
          :icon="true"
          :iconSize="'moon'"
          :optionClass="'lifelog'"
          class="pt-8"
        >
          <div class="fs-20">
            수면을 입력하고<br /><strong
              >내게 맞는 <span class="text-blue">분석</span>을
              받아보세요</strong
            >
          </div>
        </Nodata>
        <div class="btn-area2 mt-8">
          <v-btn
            variant="flat"
            height="48px"
            class="bdr-8 fs-14 font-weight-bold"
            color="#FCEBA6"
            block
            ><span class="c-darkGray">직접 입력</span></v-btn
          >
          <v-btn
            variant="text"
            height="48px"
            class="bdr-8 fs-14 font-weight-bold skip"
            block
            ><span class="c-darkGray">건강 플랫폼 연결하기</span></v-btn
          >
        </div>
      </v-card>
    </div>

    <div class="section-page brt-0">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">수면 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 1주일의 수면 분석입니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-analysis'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          잘 주무셨나요?<br />
          건강 수면 습관을 위해 기록해 보세요
        </div>
      </Nodata>
    </div>
    <!-- //수면분석 -->

    <div class="section-page pb-0">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">수면 기록</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 3개 기록만 표시됩니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-record'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          잘 주무셨나요?<br />
          건강 수면 습관을 위해 기록해 보세요
        </div>
      </Nodata>
    </div>
    <!-- //수면기록 -->
  </div>
</template>
<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import BanerReport from '@/components/BanerReport.vue'
  import CardReport from '@/components/CardReport.vue'
  import { ref } from 'vue'
  export default {
    components: {
      Nodata,
      VCalendar,
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
