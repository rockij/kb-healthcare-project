<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar />
    </div>
    <div class="section-page bg px-4 pt-4 pb-2">
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <Nodata
          :icon="true"
          :iconSize="'weight'"
          :optionClass="'lifelog'"
          class="pt-8"
        >
          <div class="fs-20">
            주기적으로 체성분을 체크하고<br />
            <strong
              ><span class="text-blue">체성분</span> 변화를 확인해
              보세요</strong
            >
          </div>
        </Nodata>
        <!-- //체성분 -->

        <div class="btn-area2 mt-12">
          <v-btn
            variant="flat"
            height="46px"
            class="bdr-8 fs-14 font-weight-bold"
            color="#FCEBA6"
            block
            ><span class="c-darkGray">직접 입력하기</span></v-btn
          >
          <v-btn
            variant="text"
            height="46px"
            class="bdr-8 fs-14 font-weight-bold skip"
            block
          >
            <div class="tooltip-balloon arrow-bottom right green">
              측정 가능
            </div>
            <span class="c-darkGray">기기 측정하기</span>
          </v-btn>
        </div>
      </v-card>
    </div>

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">체성분 기록</v-btn>
      </h2>
      <p class="text-info-grey fs-16 mb-6">최근 3일 기록만 표시됩니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-record'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          체성분을 체크하고 계신가요? <br />
          건강을 위해 최근 체성분을 기록해 보세요
        </div>
      </Nodata>
    </div>
    <!-- //기록 -->
  </div>
</template>
<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import VCalendar from '@/components/VCalendar.vue'
  export default {
    components: {
      Nodata,
      VCalendar
    }
  }
</script>
