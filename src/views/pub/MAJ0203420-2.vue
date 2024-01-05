<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar />
    </div>
    <h2 class="fs-20 lh-4 font-weight-bold mt-9">
      먹어야 할 약/영양제 추가하고 <br />
      내게 맞는 분석을 받아보세요
    </h2>
    <v-list lines="1" class="list-simple-description mt-7">
      <v-list-item
        class="simple-description-items"
        v-for="(item, i) in MedicationList"
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
    <!-- 2차 -->
    <!-- <div class="btn-area2 mt-7 middle-type">
      <v-btn variant="flat" height="40px" class="bdr-8 cancel" block
        >과거 처방내역 불러오기</v-btn
      >
      <v-btn variant="flat" height="40px" class="bdr-8 skip" block>
        돌봄친구 초대하기
      </v-btn>
    </div> -->

    <div class="btn-bottom mt-8">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="bdr-16 btn-summit attach-btn"
          >알림 추가하기</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: {
      VCalendar,
      CardReport
    },
    setup() {
      const MedicationList = ref([
        {
          title: '복용약 알림',
          text: '설정한 시간에 푸시 알림을 받을 수 있어요',
          iname: 'icon-noregi-medication01.svg'
        },
        {
          title: '복용약 상세 정보',
          text: '효능 및 성분, 주의사항을 알 수 있어요',
          iname: 'icon-noregi-medication02.svg'
        },
        {
          title: '타임라인으로 관리',
          text: '시간대별 복용 여부를 쉽게 확인할 수 있어요',
          iname: 'icon-noregi-medication04.svg'
        }
      ])
      const condition = reactive([
        { value: 1, text: '과거 처방내역 불러오기' },
        { value: 2, text: '돌봄친구 초대하기' }
      ])
      return {
        MedicationList,
        condition
      }
    }
  }
</script>
