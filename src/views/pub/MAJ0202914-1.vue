<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar />
    </div>
    <h2 class="fs-20 lh-4 font-weight-bold mt-8">
      수면을 연결하고<br />내게 맞는 분석을 받아보세요
    </h2>
    <v-list lines="1" class="list-simple-description mt-6">
      <v-list-item
        class="simple-description-items"
        v-for="(item, i) in lists"
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
    <v-btn
      variant="flat"
      height="40"
      class="bdr-8 fs-15 mt-7 text-grey2"
      color="#FCEBA6"
      block
      >건강 플랫폼 연결하기</v-btn
    >
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="btn-summit">직접 입력</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import { ref } from 'vue'
  export default {
    components: {
      Nodata,
      VCalendar,
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
      const lists = ref([
        {
          title: '기간 별 분석',
          text: '기간 별 로 나의 수면 정보를 알 수 있어요',
          iname: 'icon-noregi-sleep01.svg'
        },
        {
          title: '수면 상태 분석',
          text: '시간 대비 수면의 질을 분석해 알려 드려요',
          iname: 'icon-noregi-sleep02.svg'
        },
        {
          title: '건강 플랫폼 연동',
          text: '플랫폼을 연동해 간편하게 입력할 수 있어요',
          iname: 'icon-noregi-sleep03.svg'
        }
      ])

      return { reports, lists }
    }
  }
</script>
