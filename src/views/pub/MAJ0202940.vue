<template>
  <div class="contents">
    <div class="section-page py-8 bg-2 section-bg">
      <ReportResult
        :bnShow="'self'"
        :videBox="false"
        class="pb-4 calorie-report"
      >
        운동관련 휴레이 메시지 노출 예정
      </ReportResult>
      <v-card variant="flat" rounded="xl" class="calorie-card type-2">
        <v-card-title class="pa-0 d-flex water-card-title">
          <strong class="fs-20 ml-1 calorie-title"
            >오늘 마신 수분량은 <br />
            1,000ml 예요</strong
          >
          <Tooltip
            class="water-tooltip"
            text="일반적으로 체중 1kg당 30ml의 수분을 섭취해야 해요. 날씨가 덥거나, 운동을 많이 하거나 특별한 날에는 이것보다 조금 더 마셔주세요"
          >
          </Tooltip>
        </v-card-title>
        <div class="mt-9 relative">
          <div class="ruler-wrap">
            <img
              src="@/assets/images/img-water-ruler.svg"
              alt=""
              class="ruler-img"
            />
            <div class="ruler-text">{{ waterNum }}</div>
          </div>
          <div class="d-flex wave-wrap">
            <div class="wave">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                style="display: none"
              >
                <symbol id="wave">
                  <path
                    d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
                  ></path>
                  <path
                    d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
                  ></path>
                  <path
                    d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
                  ></path>
                  <path
                    d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
                  ></path>
                </symbol>
              </svg>
              <div class="wave-box" v-if="fillWater">
                <div ref="water" class="water">
                  <svg viewBox="0 0 560 20" class="water_wave water_wave_back">
                    <use xlink:href="#wave"></use>
                  </svg>
                  <svg viewBox="0 0 560 20" class="water_wave water_wave_front">
                    <use xlink:href="#wave"></use>
                  </svg>
                  <div class="bubble_1"></div>
                  <div class="bubble_2"></div>
                  <div class="bubble_3"></div>
                </div>
              </div>
              <div class="wave-box" v-else></div>
            </div>
          </div>
        </div>
        <div class="numcount-area mt-10 px-3">
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
        <div class="text-center mt-6">
          <v-btn
            variant="flat"
            height="32"
            color="#F2F4F6"
            class="text-blue fs-13"
            rounded="lg"
            @click="modal = true"
            aria-selected="true"
          >
            1회 단위 : {{ name4 }}ml
          </v-btn>
        </div>
      </v-card>
    </div>

    <!--수분 기록 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">수분 기록</v-btn>
      </h2>
      <div class="text-info-grey">최근 3개 기록만 표시됩니다</div>

      <!-- 기록 component -->
      <CardReport
        :btn="true"
        v-for="report in reports"
        :key="report.id"
        @handleClick="modal2 = true"
        class="body-report mt-6"
      >
        <template #date>{{ report.date }}</template>
        <!-- card 내용 -->
        <template #content>
          <v-chip label size="small" class="chip-default">
            {{ report.device }}
          </v-chip>
          <dl class="dl pt-2">
            <dt>수분섭취량</dt>
            <dd>
              <strong class="water-record">{{ report.record }}ml</strong>
            </dd>
          </dl>
        </template>
      </CardReport>
    </div>

    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">또래 수분 섭취량</h2>
      <div class="text-info-grey fs-16">
        30대 여성 평균 수분 섭취량 보다 500ml 부족하게 마셨어요
      </div>
      <div
        class="mt-3"
        style="width: 100%; height: 200px; background-color: #999"
      >
        개발적용 예정
      </div>
    </div>

    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">수분 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">기간별 인사이트를 보여드려요</p>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab :ripple="false" class="fs-20">1주일</v-tab>
        <v-tab :ripple="false" class="fs-20">1개월</v-tab>
        <v-tab :ripple="false" class="fs-20">6개월</v-tab>
      </v-tabs>
      <img src="@/assets/images/img-graph-bar2.png" alt="" class="graph-bar2" />
    </div>
  </div>
  <MAJ0202948 v-model="modal" @update="addText" @close="modal = false" />
  <MAJ0202982 v-model="modal3" @update="addText" @close="modal3 = false" />
  <DialogSetting
    :lists="modalList"
    v-model="modal2"
    @close="modal2 = false"
    @modifyClick="modifyFunc"
    @deleteClick="delFunc"
  />
</template>

<script>
  import MAJ0202948 from './MAJ0202948.vue'
  import MAJ0202982 from './MAJ0202982.vue'
  import Tooltip from '@/components/Tooltip.vue'
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import DialogSetting from '@/components/DialogSetting.vue'
  import { ref, onMounted, onUnmounted } from 'vue'

  export default {
    components: {
      DialogSetting,
      Tooltip,
      ReportResult,
      CardReport,
      MAJ0202948,
      MAJ0202982
    },

    setup() {
      const fillWater = true
      const waterNum = ref('1,800')
      const modal = ref(false)
      const modal2 = ref(false)
      const modal3 = ref(false)

      const text1 = ref()
      const text2 = ref()
      const name4 = ref()
      const result = ref([])

      const numcount = ref(0)
      const water = ref()
      const percent = ref(0)
      const waterWave = (e) => {
        const interval = setInterval(function () {
          percent.value++
          water.value.style.transform =
            'translate(0' + ',' + (100 - percent.value) + '%)'
          if (percent.value == e || e == 0) {
            clearInterval(interval)
          }
        }, 40)
      }

      const isActive = ref(false)
      const reports = ref([
        {
          id: 0,
          date: '2023.03.23 오전 6시 35분',
          device: '직접입력',
          record: '700'
        },
        {
          id: 0,
          date: '2023.03.20 오전 4시 35분',
          device: '직접입력',
          record: '105'
        },
        {
          id: 0,
          date: '2023.03.16 오전 8시 35분',
          device: '직접입력',
          record: '60'
        }
      ])

      function addText(val1, val2) {
        text1.value = val1
        name4.value = val2
        modal.value = false
      }

      const modalList = ref([
        {
          value: 0,
          text: '수정'
        },
        {
          value: 1,
          text: '삭제'
        }
      ])

      const modifyFunc = () => {
        modal2.value = false
        modal3.value = true
      }

      const delFunc = () => {
        alert('삭제')
      }

      onMounted(() => {
        waterWave(50)
      })

      function handleClick() {
        console.log('emit')
      }

      return {
        waterNum,
        fillWater,
        text1,
        text2,
        name4,
        result,
        modal,
        modal2,
        modal3,
        modalList,
        isActive,
        reports,
        water,
        numcount,
        waterWave,
        addText,
        handleClick,
        modifyFunc,
        delFunc
      }
    }
  }
</script>
