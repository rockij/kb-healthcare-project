<template>
  <div class="contents pt-0">
    <div class="life-calendar">
      <VCalendar />
    </div>
    <div class="section-page bg px-4 pt-4 pb-2">
      <BanerReport :videBox="false" class="mb-4">
        아직 음주 기록이 없어요<br />음주 기록을 입력하면 확인할 수 있어요
      </BanerReport>
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <div class="d-flex">
          <v-card-title class="pa-0 fs-20 font-weight-bold"
            >오늘의 기록
          </v-card-title>
          <v-switch
            class="switch-default switch-title flex-0-0 align-self-start ml-auto"
            label="음주모드"
            color="#FFD338"
            hide-details
          ></v-switch>
        </div>
        <div class="tabs-target media-slide alcohols mt-6">
          <v-btn
            variant="text"
            v-for="btn in alcoholTypeBtns"
            :key="btn.value"
            :class="`target${btn.value} ${
              alcoholTypeBtn === btn.value ? 'selected' : ''
            }`"
            @click="alcoholTypeSelected(btn.value)"
            ><span v-html="btn.text"></span
          ></v-btn>
        </div>
        <div class="text-center mt-6">
          <v-btn
            variant="flat"
            height="32"
            color="#F2F4F6"
            class="text-blue fs-13"
            rounded="lg"
            >단위 : 잔 (500ml)</v-btn
          >
        </div>
        <div class="numcount-area mt-4 px-3">
          <v-btn
            variant="text"
            class="handle decrease"
            title="감소"
            @click="numcount > 0 ? numcount-- : ''"
          ></v-btn>
          <strong class="number">{{ numcount }}</strong>
          <v-btn
            variant="text"
            class="handle increase"
            title="증가"
            @click="numcount++"
          ></v-btn>
        </div>
        <div class="btn-area2 mt-6">
          <v-btn
            variant="text"
            height="46px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            :disabled="disabledCheck"
            >저장하기</v-btn
          >
        </div>
      </v-card>
    </div>
    <!-- //금주모드선택 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">음주 기록</v-btn>
      </h2>
      <p class="text-info-grey fs-16 mb-6">최근 3개 기록만 표시됩니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          아직 음주 기록이 없어요<br />음주 기록을 하면 확인할 수 있어요
        </div>
      </Nodata>
    </div>
    <!-- //음주기록 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">음주 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">기간별 인사이트를 보여드려요</p>
      <Nodata
        :icon="true"
        :iconSize="'big'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          아직 음주 기록이 없어요<br />음주 기록을 하면 확인할 수 있어요
        </div>
      </Nodata>
    </div>
    <!-- //음주분석 -->
  </div>
</template>
<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import BanerReport from '@/components/BanerReport.vue'
  import { ref, computed } from 'vue'
  export default {
    components: {
      Nodata,
      VCalendar,
      BanerReport
    },
    setup() {
      const alcoholTypeBtn = ref()
      const alcoholTypeBtns = ref([
        {
          value: 1,
          text: '맥주'
        },
        {
          value: 2,
          text: '소주'
        },
        {
          value: 3,
          text: '청주'
        },
        {
          value: 4,
          text: '막걸리'
        },
        {
          value: 5,
          text: '와인'
        },
        {
          value: 6,
          text: '양주'
        },
        {
          value: 7,
          text: '샴페인'
        },
        {
          value: 0,
          text: '기타'
        }
      ])
      function alcoholTypeSelected(val) {
        alcoholTypeBtn.value = val
      }

      const numcount = ref(0)

      const disabledCheck = computed(() => {
        return numcount.value > 0 ? false : true
      })

      return {
        alcoholTypeBtn,
        alcoholTypeBtns,
        alcoholTypeSelected,

        numcount,

        disabledCheck
      }
    }
  }
</script>
