<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar />
    </div>
    <h2 class="fs-20 lh-4 font-weight-bold mt-8">
      체성분을 연결하고<br />내게 맞는 분석을 받아보세요
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
    <div class="btn-area2 mt-7">
      <v-btn
        variant="flat"
        height="40"
        class="bdr-8 fs-15 text-grey2"
        color="#F3F7FF"
        block
        >기기 연결하기</v-btn
      >
      <v-btn
        variant="flat"
        height="40"
        class="bdr-8 fs-15 text-grey2"
        color="#FCEBA6"
        block
        >건강 플랫폼 연결하기</v-btn
      >
    </div>
    <div class="btn-bottom mt-8">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="bdr-16 btn-summit attach-btn"
          >직접 입력하기</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import { ref } from 'vue'
  export default {
    components: {
      VCalendar,
      CardReport
    },
    setup() {
      const lists = ref([
        {
          title: '항목별 기록 확인',
          text: '다양한 체성분 요소를 쉽게 확인할 수 있어요',
          iname: 'icon-noregi-body01.svg'
        },
        {
          title: '기간 별 분석',
          text: '기간별 체성분 분석 정보를 제공해 드려요',
          iname: 'icon-noregi-body02.svg'
        }
      ])
      return { lists }
    }
  }
</script>
