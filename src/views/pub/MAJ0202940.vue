<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page section-bg pt-4 brt-0">
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
              src="/assets/images/img-water-ruler.svg"
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
            class="handle decrease type-yellow"
            :class="{ disabled: numcount === 0 }"
            title="감소"
            :disabled="numcount === 0"
            @click="numcount > 0 ? numcount-- : ''"
          ></v-btn>
          <strong class="number">{{ numcount }}</strong>
          <v-btn
            variant="text"
            class="handle increase type-yellow"
            title="증가"
            @click="numcount++"
          ></v-btn>
        </div>
        <div class="text-center mt-6">
          <v-btn
            variant="flat"
            height="32"
            color="#F2F4F6"
            class="text-blue fs-13 unit-text"
            rounded="lg"
            @click="modal = true"
            aria-selected="true"
          >
            1회 단위 : {{ name4 }}ml
          </v-btn>
        </div>
      </v-card>
    </div>

    <!-- 또래 수분 섭취량 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link">또래 수분 섭취량</h2>
      <div class="text-info-grey fs-16 mb-8 word-type">
        지난달 30대 여성 평균 수분 섭취량 보다 500ml 부족하게 마셨어요
      </div>
      <div class="water-graph-wrap">
        <div>
          <div class="graph-height-wrap" style="height: 168px">
            <div class="graph-height" style="height: 100%">
              <div class="text-ml">3,000ml</div>
            </div>
          </div>
          <div class="text-me">또래</div>
        </div>

        <div>
          <div class="graph-height-wrap" style="height: 168px">
            <div class="graph-height active" style="height: 70%">
              <div class="text-ml type-02">2,500ml</div>
            </div>
          </div>
          <div class="text-me">나</div>
        </div>
      </div>
    </div>

    <!-- 수분 분석 -->
    <div class="section-page">
      <h2 class="tit-03 tit-link nodata">
        <v-btn block variant="text">수분 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 1주일의 수분 분석입니다</p>
      <div class="tab-line pt-4">
        <v-tabs align-tabs="start">
          <v-tab v-for="(item, i) in tabItems" :key="i" :ripple="false">
            {{ item.titleTab }}
          </v-tab>
        </v-tabs>
        <div class="mt-6">
          <div class="water-period">23.10.15~23.10.21</div>
          <div class="water-average pt-1">평균 3,500ml</div>
          <div class="mt-4">
            <!-- chart -->
            <img
              src="/assets/images/img-graph-bar2.png"
              alt=""
              style="max-width: 100%"
            />
            <!-- //chart -->
          </div>
        </div>
      </div>
    </div>

    <!--수분 기록 -->
    <div class="section-page py-8">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">수분 기록</v-btn>
      </h2>
      <div class="text-info-grey fs-16">최근 3일 기록만 표시됩니다</div>

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
          <dl class="dl">
            <dt>수분섭취량</dt>
            <dd>
              <strong class="water-record">{{ report.record }}ml</strong>
            </dd>
          </dl>
        </template>
      </CardReport>

      <Carousel
        :items-to-Show="1"
        :wrap-around="true"
        :autoplay="3000"
        class="baner-simple-swiper mt-8"
      >
        <Slide v-for="(item, i) in banerList" :key="i">
          <BanerSimple :iconName="item.iconName" @update="goPath(item.path)">
            <strong class="title">{{ item.title }}</strong>
            <p class="text">{{ item.text }}</p>
          </BanerSimple>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
      <!-- //배너 -->
    </div>

    <div class="section-page">
      <LifelogChallenge />
    </div>
    <!-- //챌린지 -->

    <div class="section-page pb-0">
      <LifelogHealthnews />
    </div>
    <!-- //건강뉴스 -->
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
  import router from '@/router'
  import VCalendar from '@/components/VCalendar.vue'
  import MAJ0202948 from './MAJ0202948.vue'
  import MAJ0202982 from './MAJ0202982.vue'
  import Tooltip from '@/components/Tooltip.vue'
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import DialogSetting from '@/components/DialogSetting.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import { ref, onMounted } from 'vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'

  export default {
    components: {
      VCalendar,
      DialogSetting,
      Tooltip,
      ReportResult,
      CardReport,
      BanerSimple,
      MAJ0202948,
      MAJ0202982,
      LifelogChallenge,
      LifelogHealthnews,
      Carousel,
      Slide,
      Pagination
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

      const tabInit = ref(null)
      const tabItems = ref([
        { titleTab: '1주일' },
        { titleTab: '1개월' },
        { titleTab: '6개월' }
      ])
      const water = ref()
      const waterClass = document.querySelector('waterwave')
      const percent = ref(0)
      const waterWave = (e) => {
        if (waterWave !== null) {
          const interval = setInterval(function () {
            percent.value++
            water.value.style.transform =
              'translate(0' + ',' + (100 - percent.value) + '%)'
            if (percent.value == e || e == 0) {
              clearInterval(interval)
            }
          }, 40)
        }
      }

      const isActive = ref(false)
      const reports = ref([
        {
          id: 0,
          date: '03.23 오전 6시 35분',
          record: '700'
        },
        {
          id: 1,
          date: '03.20 오전 4시 35분',
          record: '105'
        },
        {
          id: 3,
          date: '03.16 오전 8시 35분',
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

      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 10, 1)]
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 9, 10)]
        }
      ])

      const banerList = ref([
        {
          title: '식사 관리해 보러 가기',
          text: '수분과 함께 관리해보세요',
          iconName: 'icon-cooking.svg',
          path: '/MAJ0203410'
        },
        {
          title: '체성분 관리하러 가기',
          text: '수분과 함께 관리해보세요!',
          iconName: 'icon-weight.svg',
          path: '/MAJ0203120'
        }
      ])
      function goPath(val) {
        router.push(val)
      }

      return {
        waterClass,
        tabInit,
        tabItems,
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
        delFunc,
        calendarAttr,
        banerList,
        goPath
      }
    }
  }
</script>
