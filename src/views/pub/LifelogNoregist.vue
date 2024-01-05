<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar />
    </div>

    <h2 class="fs-20 lh-4 font-weight-bold mt-9">
      혈압을 연결하고<br />
      내게 맞는 분석을 받아보세요
    </h2>
    <v-list lines="1" class="list-simple-description mt-7">
      <v-list-item
        class="simple-description-items"
        v-for="(item, i) in BloodPressureList"
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
    <!-- //혈압 -->

    <h2 class="fs-20 lh-4 font-weight-bold mt-9">
      수면을 연결하고<br />내게 맞는 분석을 받아보세요
    </h2>
    <v-list lines="1" class="list-simple-description mt-7">
      <v-list-item
        class="simple-description-items"
        v-for="(item, i) in SleepList"
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
    <!-- //수면 -->

    <h2 class="fs-20 lh-4 font-weight-bold mt-9">
      식사를 연결하고<br />
      내게 맞는 분석을 받아보세요
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
    <!-- //식사 -->

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
    <!-- //걸음 -->

    <h2 class="fs-20 lh-4 font-weight-bold mt-9">
      복약을 연결하고<br />
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
    <!-- //걸음 -->

    <v-btn
      variant="flat"
      height="40"
      class="bdr-8 fs-15 mt-7 text-grey2"
      color="#FCEBA6"
      block
      >건강 플랫폼 연결하기</v-btn
    >

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
    <!-- //btn -->

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="btn-cancel">직접입력</v-btn>
        <v-btn variant="text" height="56" class="btn-summit"
          >운동 시작하기</v-btn
        >
      </div>
    </div>
    <!-- //bottom-btn -->
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
      //혈압
      const BloodPressureList = ref([
        {
          title: '시간대별 분석',
          text: '기간별로 나의 혈압 정보를 알 수 있어요',
          iname: 'icon-noregi-bloodpressure01.svg'
        },
        {
          title: '혈압, 맥박기록 확인',
          text: '혈압과 맥박기록을 쉽게 확인할 수 있어요',
          iname: 'icon-noregi-bloodpressure02.svg'
        },
        {
          title: '기간별 분석',
          text: '기간별 혈압, 맥박 분석 정보를 제공해 드려요',
          iname: 'icon-noregi-bloodpressure03.svg'
        }
      ])

      //수면
      const SleepList = ref([
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

      //식사
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

      //걸음
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

      //복약
      const MedicationList = ref([
        {
          title: '약/영양제 알림',
          text: '설정한 시간에 푸시 알림을 받을 수 있어요',
          iname: 'icon-noregi-medication01.svg'
        },
        {
          title: '약/영양제 분석',
          text: '효능 및 성분, 주의사항을 알 수있어요',
          iname: 'icon-noregi-medication02.svg'
        },
        {
          title: '약 봉투 스캔',
          text: '사진 촬영만하면 간편하게 등록 할 수 있어요',
          iname: 'icon-noregi-medication03.svg'
        }
      ])

      return {
        BloodPressureList,
        SleepList,
        MealList,
        StepList,
        MedicationList
      }
    }
  }
</script>
