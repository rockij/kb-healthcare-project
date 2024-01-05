<template>
  <div class="contents pt-0">
    <div class="life-calendar">
      <VCalendar />
    </div>
    <h2 class="fs-20 lh-4 font-weight-bold mt-8">
      심박을 연결하고<br />내게 맞는 분석을 받아보세요
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
          title: '시간대별 분석',
          text: '시간대별로 나의 심박 정보를 알 수 있어요',
          iname: 'icon-noregi-bloodpressure01.svg'
        },
        {
          title: '심박수 별 운동강도 분석',
          text: '심박수에 따라 운동강도 및 효과를 알 수 있어요',
          iname: 'icon-noregi-heart01.svg'
        }
      ])
      return { lists }
    }
  }
</script>
