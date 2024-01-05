<template>
  <div class="contents">
    <!-- 여백 및 bg 수정 -->
    <div class="section-bg">
      <v-card variant="flat" color="#FFD633" class="rounded-xl py-4 px-5">
        <div class="box-reward">
          <div class="d-flex align-center">
            <img src="/assets/images/icon-star2.svg" alt="" />
            <div class="pl-2">리워드 포인트</div>
          </div>
          <div>{{ money(10500) }} P</div>
        </div>
      </v-card>
      <v-card rounded="xl" class="box-rounded pt-8 pb-4 mt-4">
        <v-card-title class="px-4 py-0">
          <div class="child align-center">
            <!-- 카테고리 btn -->
            <v-btn variant="text" class="btn-month px-0" @click="modal = true">
              8월
              <v-icon class="ml-2">
                <img src="/assets/images/icon-arrow-down.svg" alt="" />
              </v-icon>
            </v-btn>
            <div class="text">에</div>
          </div>
          <div class="child">
            <!-- 12/26  클래스 추가 -->
            <div class="text-point">{{ money(10500) }} P</div>
            <div class="font-weight-regular pl-2">모았어요</div>
          </div>

          <div :class="['child mb-8', point > 0 ? 'text-info' : 'fs-16']">
            <template v-if="point > 0"
              >7월보다 {{ money(point) }}P 더 모았어요</template
            >
            <template v-else>이전에 적립된 리워드 포인트가 없어요</template>
          </div>
        </v-card-title>
        <!-- chart -->
        <div
          class="px-2"
          style="min-height: 190px; text-align: center"
          v-if="point > 0"
        >
          line chart
        </div>
        <!-- no data -->
        <Nodata iconType="point" v-else> 포인트 기록을 모으고 있어요 </Nodata>
      </v-card>
    </div>
    <div class="pt-8">
      <div class="tit-03 pb-2">사람들은 6개월동안 얼마나 모았을까요?</div>
      <div class="text-info-grey fs-16 mb-4">
        상위 10% 사용자 리워드포인트 평균
      </div>
      <!-- chart -->
      <div style="min-height: 245px; text-align: center">bar chart</div>
    </div>
    <!--// 여백 및 bg 수정 -->
    <div class="section-page">
      <div class="tit-03 pb-2">사람들은 어디서 모을까요?</div>
      <div class="text-info-grey fs-16 mb-4">
        상위 10% 사용자 리워드포인트 평균
      </div>
      <!-- chart -->
      <div style="min-height: 245px; text-align: center">pie chart</div>
    </div>
    <div class="section-page">
      <div class="tit-03 pb-2">
        최대 {{ money(98650) }}P를 모을 수 있어요<br />혜택을 놓치지 마세요
      </div>
    </div>
  </div>
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: { Nodata },
    setup() {
      const value = ref('8월')
      const option = reactive(['6월', '7월', '8월'])
      const point = ref(0)
      function money(point) {
        return point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
      return {
        value,
        option,
        point,
        money
      }
    }
  }
</script>
