<template>
  <div class="contents">
    <div class="section-bg">
      <div class="box-rounded-fill bg-white bdr-16 pa-6">
        <div class="d-flex justify-space-between">
          <div class="flex-1">
            <h2 class="tit-01 pb-0">
              <img
                src="/assets/images/icon-title-badge6.svg"
                alt=""
                class="valign-middle"
              />
              내 신체 건강
            </h2>
            <div class="mt-6 fs-18" v-if="platform">
              오건강님<br />
              라이프로그와 함께 한 지<br />
              <div class="font-secondary mt-2">
                <p class="date-range text-primary">{{ date }}일째</p>
                <p class="text-black fs-20 lh-4">앞으로도 파이팅!</p>
              </div>
            </div>
            <div class="mt-6" v-else>
              삼성헬스 연동하면 쉽게 건강기록 할 수 있어요
            </div>
          </div>
          <div class="text-right">
            <v-chip label size="small" class="chip-default">
              <span class="text-dot success" v-if="platform"
                >삼성헬스 연결</span
              >
              <span class="text-dot grey" v-else>플랫폼 미연결</span>
            </v-chip>
            <div class="mt-6">
              <!-- 12-20 이미지 이슈로 인한 클래스 수정 -->
              <div class="img-calendar" v-if="platform">
                <img
                  src="/assets/images/img-health-check06.png"
                  alt=""
                  class="valign-top"
                />
              </div>
              <!--// 12-20 이미지 이슈로 인한 수정 -->
              <!-- 12-26 이미지 이슈로 인한 클래스 수정 -->
              <!-- <img
                src="/assets/images/img-health-check11.png"
                alt="애플 연결"
                class="valign-top icon-platform"
              />
              <img
                src="/assets/images/img-health-check12.png"
                alt="구글헬스 연결"
                class="valign-top icon-platform"
              /> -->
              <!--// 12-26 이미지 이슈로 인한 클래스 수정 -->
              <img
                src="/assets/images/img-health-check04.svg"
                alt=""
                class="valign-top"
                v-else
              />
            </div>
          </div>
        </div>
        <div class="btn-double mt-6">
          <v-btn variant="text" height="48" class="btn-summit">
            삼성헬스 연결하기
          </v-btn>
        </div>
      </div>
    </div>
    <template v-if="platform">
      <!-- 건강기록 기록 현황-->
      <HealthReport />
      <!-- 건강검진 결과 -->
      <HealthResult @goPath="goPath" />
      <!--  건강검진결과 비교 -->
      <div class="section-page">
        <h2 class="tit-03 tit-link pb-2">검진결과 비교</h2>
        <div class="text-grey">연도별 변화</div>
        <div role="tablist" class="tabs-simple2 my-4">
          <v-btn variant="text" role="tab" aria-selected="true">주의</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">정상</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">의심</v-btn>
        </div>
        <div class="mx-n6">
          <img src="/assets/images/graph-area2.png" alt="" class="w-100" />
        </div>
      </div>
      <!-- 또래그룹 비교 -->
      <div class="section-page pb-0">
        <h2 class="tit-03 relative pb-2">
          또래그룹 비교
          <Tooltip
            class="tooltip-type2 d-inline-flex"
            :btnText="null"
            text="건강과 관련된 생활습관, 가족력, 환경요인 등을 고려해 개인의 건강위험요인을 평가한 나이를 말해요. 음주, 흡연, 혈당, 혈압 등 건강검진자료와 문진을 토대로 주요 사망원인 질환을 분석해 건강나이와 질병 위험도를 산출해요. "
          />
        </h2>
        <div class="text-grey relative">
          <span>또래 (40대 초반, 여성)보다 취약항목이</span>
          <span class="text-primary pl-2">2개</span> 더 적어요
        </div>
        <div class="mx-n6">
          <img src="/assets/images/graph-area.png" alt="" class="w-100" />
        </div>
      </div>
    </template>
    <!-- no data -->
    <Nodata :icon="true" iconSize="xl" iconType="thumb-health" v-else>
      데이터가 없습니다
    </Nodata>
  </div>
</template>
<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import Tooltip from '@/components/Tooltip.vue'
  import HealthReport from './HealthReport.vue'
  import HealthResult from './HealthResult_new.vue'

  import { ref } from 'vue'
  import router from '@/router'

  export default {
    components: {
      Nodata,
      Tooltip,
      HealthReport,
      HealthResult
    },
    setup() {
      const platform = ref(true)
      const date = ref(60)
      function goPath(val) {
        router.push(val)
      }

      return {
        platform,
        date,
        goPath
      }
    }
  }
</script>
