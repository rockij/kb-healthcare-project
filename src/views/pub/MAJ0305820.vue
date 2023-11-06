<template>
  <div class="contents pb-0">
    <div class="pb-10">
      <h2 class="fs-24 font-weight-bold">2022.12.30</h2>
      <p class="mt-2">일반검진</p>
      <!-- //title -->

      <BanerReport :bnShow="'verybad'" :videBox="false" class="mt-6">
        당뇨 검사결과 의심이에요
      </BanerReport>
      <!-- //baner -->

      <h3 class="tit-03 pb-1 mt-4">꼭 관리를 시작해야만 해요</h3>
      <p class="fs-18">생활습관 개선과 함께 전문적인 관리를 추천드려요</p>
      <v-card
        variant="flat"
        rounded="xl"
        class="box-rounded-fill fill-red pa-4 mt-8 d-flex align-start"
      >
        <img
          src="@/assets/images/icon-caption4.svg"
          alt=""
          width="20"
          class="mr-2"
        />
        <div class="flex-1">
          <strong class="fs-18 font-weight-bold">당뇨 취약항목이에요</strong>
          <ul class="font-weight-bold">
            <li
              v-for="(list, i) in categoryList"
              :key="i"
              class="mt-2"
              :data-category="list.category"
            >
              <span class="mr-2" :class="getText(list.category)">{{
                list.category
              }}</span
              >{{ list.text }}
            </li>
          </ul>
        </div>
      </v-card>
      <!-- //취약항목 -->

      <h4 class="fs-20 font-weight-bold d-flex align-center mt-7">
        <v-chip
          variant="outlined"
          label
          size="small"
          color="error"
          class="chip-default mr-2"
        >
          의심
        </v-chip>
        공복혈당(mg/dL)
      </h4>
      <!-- [D] 개발시 style 삭제 -->
      <div class="mt-4" style="height: 150px; background-color: #eaeaea">
        그래프영역
      </div>
      <!-- //판정값 -->

      <h5 class="list-disease-item type icon-1 mt-6">혈당이</h5>
      <ul class="list-updown-text mt-3 ml-8" :class="updwCount">
        <li v-for="(list, i) in updwList" :key="i">
          <span class="area"
            >{{ list.year }}전보다
            <strong :class="`icon-${list.curve}`">{{ list.volume }}</strong
            >mg/dL</span
          >
          {{ list.text }}
        </li>
      </ul>
      <!-- [D] 개발시 style 삭제 -->
      <div class="mt-2" style="height: 150px; background-color: #eaeaea">
        그래프영역
      </div>
    </div>
    <!-- //데이터변화정보 -->
  </div>
</template>
<script>
  import BanerReport from '@/components/BanerReport.vue'
  import { ref, computed } from 'vue'
  export default {
    components: {
      BanerReport
    },
    setup() {
      const categoryList = ref([
        {
          category: '의심',
          text: '공복혈당'
        }
      ])
      function getText(props) {
        switch (props) {
          case '의심':
            return 'text-red'
          case '주의':
            return 'text-orange'
        }
      }
      const updwList = ref([
        {
          year: '4년',
          volume: '10',
          text: '올라갔어요',
          curve: 'up'
        },
        {
          year: '9년',
          volume: '10',
          text: '내려갔어요',
          curve: 'down'
        }
      ])
      const updwCount = computed(() => {
        if (updwList.value.length === 1) {
          return 'list-count1'
        }
      })

      return {
        categoryList,
        updwList,
        getText,
        updwCount
      }
    }
  }
</script>
