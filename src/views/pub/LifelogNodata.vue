<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar />
    </div>
    <div class="section-page bg pa-4">
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <Nodata
          :icon="true"
          :iconSize="'moon'"
          :optionClass="'lifelog'"
          class="pt-8"
        >
          <div class="fs-20">
            수면을 입력하고<br /><strong
              >내게 맞는 <span class="text-blue">분석</span>을
              받아보세요</strong
            >
          </div>
        </Nodata>
        <!-- //수면 -->

        <Nodata
          :icon="true"
          :iconSize="'blood'"
          :optionClass="'lifelog'"
          class="pt-8"
        >
          <div class="fs-20">
            별 일 없으신가요?<br />
            <strong
              >편안한 순간에 <span class="text-blue">혈압</span>을 기록해
              보세요</strong
            >
          </div>
        </Nodata>
        <!-- //혈압 -->

        <Nodata
          :icon="true"
          :iconSize="'bloodsugar'"
          :optionClass="'lifelog'"
          class="pt-8"
        >
          <div class="fs-20">
            3개월 동안 꾸준히 기록하고<br />
            <strong
              >예상 <span class="text-blue">당화혈색소</span>를 확인해
              보세요</strong
            >
          </div>
        </Nodata>
        <!-- //혈당 -->

        <Nodata
          :icon="true"
          :iconSize="'heart'"
          :optionClass="'lifelog'"
          class="pt-8"
        >
          <div class="fs-20">
            주기적으로 심박을 체크하고<br />
            <strong
              >내게 맞는 <span class="text-blue">심박</span>분석을
              받아보세요</strong
            >
          </div>
        </Nodata>
        <!-- //심박 -->

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

        <Nodata
          :icon="true"
          :iconSize="'medication'"
          :optionClass="'lifelog'"
          class="pt-8"
        >
          <div class="fs-20">
            바쁜 일상 속에서도,<br />
            <strong>잊지 않게 도와 드릴게요</strong>
          </div>
        </Nodata>
        <!-- //복약 -->

        <div class="btn-area2 mt-7">
          <v-btn
            variant="text"
            height="46px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            >저장하기</v-btn
          >
        </div>
      </v-card>
    </div>

    <div class="section-page brt-0">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">제목 기록</v-btn>
      </h2>
      <p class="text-info-grey fs-16 mb-6">서브텍스트 들어오는 자리 입니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-record'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          아직 흡연 기록이 없어요<br />흡연 기록을 입력하면 확인할 수 있어요
        </div>
      </Nodata>
    </div>
    <!-- //기록 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">제목 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">서브텍스트 들어오는 자리 입니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-analysis'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          아직 흡연 기록이 없어요<br />흡연 기록을 입력하면 확인할 수 있어요
        </div>
      </Nodata>
    </div>
    <!-- //분석 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">식사 기록</v-btn>
      </h2>
      <p class="text-info-grey fs-16 mb-6">서브텍스트 들어오는 자리 입니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-cooking'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          3개월 동안 꾸준히 기록하고<br />예상 당화혈색호를 확인해 보세요
        </div>
      </Nodata>
    </div>
    <!-- //식사 -->
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
