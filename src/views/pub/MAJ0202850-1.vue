<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar />
    </div>
    <h2 class="fs-20 lh-4 font-weight-bold mt-9">
      걸음을 연결하고<br />
      내게 맞는 분석을 받아보세요
    </h2>
    <v-list lines="1" class="list-simple-description mt-7">
      <v-list-item
        class="simple-description-items"
        v-for="(item, i) in StepList"
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
  </div>
</template>

<script>
  import VCalendar from '@/components/VCalendar.vue'
  import { ref } from 'vue'

  export default {
    components: {
      VCalendar
    },
    setup() {
      const StepList = ref([
        {
          title: '시간대별 분석',
          text: '시간대별로 나의 걸음 정보를 알 수 있어요',
          iname: 'icon-noregi-bloodpressure01.svg'
        },
        {
          title: '연령별 분석',
          text: '나의 또래 걸음수를 비교분석해드려요',
          iname: 'icon-noregi-step01.svg'
        },
        {
          title: '성별 분석',
          text: '내 성별에 따른 걸음수 비교를 할 수 있어요',
          iname: 'icon-noregi-step02.svg'
        }
      ])
      return {
        StepList
      }
    }
  }
</script>
