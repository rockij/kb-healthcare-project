<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar />
    </div>
    <h2 class="fs-20 lh-4 font-weight-bold mt-9">
      아직 식사 기록이 없어요 <br />식사 인증을 하면 확인할 수 있어요
    </h2>
    <v-list lines="1" class="list-simple-description mt-7">
      <v-list-item
        class="simple-description-items"
        v-for="(item, i) in MealList"
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
      const MealList = ref([
        {
          title: '권장 칼로리 안내',
          text: '키/몸무게 정보로 권장 칼로리를 알 수 있어요',
          iname: 'icon-noregi-meal01.svg'
        },
        {
          title: '섭취 영양소 안내',
          text: '오늘 먹은 칼로리와 상세 정보를 알 수 있어요',
          iname: 'icon-noregi-meal02.svg'
        },
        {
          title: '건강한 음식 추천',
          text: 'GI지수 별 건강한 음식 추천을 받을 수 있어요',
          iname: 'icon-noregi-meal03.svg'
        }
      ])
      return { MealList }
    }
  }
</script>
