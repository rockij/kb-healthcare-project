<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page bg pa-4">
      <ReportResult
        :bnShow="'self'"
        :videBox="false"
        class="pb-4 calorie-report"
      >
        운동관련 휴레이 메시지 노출 예정
      </ReportResult>
      <v-card variant="flat" rounded="xl" class="calorie-card type-2 mb-4">
        <v-card-title class="pa-0 d-flex">
          <div class="body-title-wrap">
            <strong class="fs-20 calorie-title"
              >오늘의 체성분을 <br />
              확인해보세요</strong
            >
            <div class="body-desc pt-1">3일 전 내 몸과의 비교</div>
          </div>
          <v-btn
            variant="text"
            :ripple="false"
            class="pl-0 pr-0 body-tooltip-btn"
            density="compact"
            @click="modal = true"
          >
            <img src="/assets/images/icon-moreinfo.svg" alt="" />
          </v-btn>
        </v-card-title>
        <v-tabs
          align-tabs="start"
          hide-slider
          class="tabs-round tabs-simple2 sm navy mt-8"
        >
          <v-tab class="btn-tab ml-0" :ripple="false">체중</v-tab>
          <v-tab class="btn-tab ml-0" :ripple="false">BMI</v-tab>
          <v-tab class="btn-tab ml-0" :ripple="false">기초대사량</v-tab>
          <v-tab class="btn-tab ml-0" :ripple="false">허리둘레</v-tab>
        </v-tabs>
        <div class="mt-4">
          <!-- chart -->
          <img src="/assets/images/img-bodyGraph.svg" alt="" />
          <!-- //chart -->
        </div>
        <div class="btn-area2 mt-12">
          <v-btn
            variant="flat"
            height="46px"
            class="bdr-8 fs-14 font-weight-bold"
            color="#FCEBA6"
            @click="modal2 = true"
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
        <p class="log-date">마지막 기록 23.08.11 오후 11:20</p>
      </v-card>
      <div class="body-list">
        <v-card
          variant="flat"
          rounded="xl"
          class="d-flex top-list pt-1 calorie-card type-3 pa-0"
        >
          <div class="top-data-area">
            <div class="top-data">
              <span class="data-title">체중</span>
              <div class="calendar-info type-2">
                <div class="state body-state">
                  <div class="body-red mr-1"></div>
                  <div class="text" style="color: #eb5147">표준초과</div>
                </div>
              </div>
            </div>
            <div class="data-cont">100kg</div>
          </div>
          <v-divider vertical class="mx-2 my-4"></v-divider>
          <div class="top-data-area">
            <div class="top-data">
              <span class="data-title">BMI</span>
              <div class="calendar-info type-2">
                <div class="state body-state">
                  <img
                    src="/assets/images/icon-double.svg"
                    alt=""
                    style="width: 16px; height: 16px"
                  />
                </div>
              </div>
            </div>
            <div class="data-cont">30BMI</div>
          </div>
          <v-divider vertical class="mx-2 my-4"></v-divider>
          <div class="top-data-area">
            <div class="top-data">
              <span class="data-title">체지방률</span>
              <div class="calendar-info type-2">
                <div class="state body-state">
                  <img
                    src="/assets/images/icon-double.svg"
                    alt=""
                    style="width: 16px; height: 16px"
                  />
                </div>
              </div>
            </div>
            <div class="data-cont">24%</div>
          </div>
        </v-card>

        <v-expansion-panels class="pt-4">
          <v-expansion-panel title="6개 항목 더보기" class="body-panels">
            <template #text>
              <div class="top-data-area type-2">
                <div class="top-data">
                  <span class="data-title">기초대사량</span>
                  <div class="calendar-info type-2">
                    <div class="state body-state">
                      <div class="body-red mr-1"></div>
                      <div class="text" style="color: #eb5147">표준초과</div>
                    </div>
                  </div>
                </div>
                <div class="data-cont">2,400kcal</div>
              </div>

              <div class="top-data-area type-2">
                <div class="top-data">
                  <span class="data-title">허리둘레</span>
                  <div class="calendar-info type-2">
                    <div class="state body-state">
                      <div class="body-red mr-1"></div>
                      <div class="text" style="color: #eb5147">표준초과</div>
                    </div>
                  </div>
                </div>
                <div class="data-cont">20.5%</div>
              </div>

              <div class="top-data-area type-2">
                <div class="top-data">
                  <span class="data-title">골격근량</span>
                  <div class="calendar-info type-2">
                    <div class="state body-state">
                      <div class="body-green mr-1"></div>
                      <div class="text" style="color: #00c378">표준</div>
                    </div>
                  </div>
                </div>
                <div class="data-cont">40.5kg</div>
              </div>
              <div class="top-data-area type-2">
                <div class="top-data">
                  <span class="data-title">내장지방지수</span>
                  <div class="calendar-info type-2">
                    <div class="state body-state">
                      <div class="body-green mr-1"></div>
                      <div class="text" style="color: #00c378">표준</div>
                    </div>
                  </div>
                </div>
                <div class="data-cont">10 Level</div>
              </div>
              <div class="top-data-area type-2">
                <div class="top-data">
                  <span class="data-title">근육량</span>
                  <div class="calendar-info type-2">
                    <div class="state body-state">
                      <div class="body-increase"></div>
                      <div class="text pl-1" style="color: #888888">10</div>
                    </div>
                  </div>
                </div>
                <div class="data-cont">40kg</div>
              </div>
              <div class="top-data-area type-2">
                <div class="top-data">
                  <span class="data-title">체수분</span>
                  <div class="calendar-info type-2">
                    <div class="state body-state">
                      <div class="body-decrease"></div>
                      <div class="text pl-1" style="color: #888888">10</div>
                    </div>
                  </div>
                </div>
                <div class="data-cont">30L</div>
              </div>
            </template></v-expansion-panel
          >
        </v-expansion-panels>
      </div>
    </div>

    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">체성분 기록</v-btn>
      </h2>
      <div class="text-info-grey">최근 3개 기록만 표시됩니다</div>

      <CardReport
        :btn="true"
        v-for="report in reports"
        :key="report.id"
        @handleClick="handleClick"
        class="body-report"
      >
        <template #date>{{ report.date }}</template>
        <template #content>
          <v-chip
            label
            size="small"
            class="chip-default chip-color"
            :color="getColor(report.stateCd)"
          >
            {{ report.state }}
          </v-chip>
          <v-chip label size="small" class="chip-default ml-2"> 기기 </v-chip>
          <dl class="dl">
            <dt>몸무게</dt>
            <dd>
              <strong>{{ report.record }}kg</strong>
            </dd>
          </dl>
          <dl class="dl">
            <dt>BMI</dt>
            <dd>
              <strong :style="{ color: getColor(report.stateCd) }"
                >{{ report.bmi }}kg/m2</strong
              >
            </dd>
          </dl>
          <v-btn
            variant="text"
            class="btn-gray mt-2"
            height="32"
            @click="modal3 = true"
            >상세보기</v-btn
          >
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

  <!-- 체성분 그래프 안내 바텀 -->
  <MAJ0203121 v-model="modal" @close="modal = false" />
  <!-- 체성분 직접입력 팝업 -->
  <MAJ0203220 v-model="modal2" @close="modal2 = false" />
  <!-- 체성분 상세보기 팝업 -->
  <MAJ0203230 v-model="modal3" @close="modal3 = false" />
</template>

<script>
  import router from '@/router'
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import MAJ0203121 from './MAJ0203121.vue'
  import MAJ0203220 from './MAJ0203220.vue'
  import MAJ0203230 from './MAJ0203230.vue'
  import { ref } from 'vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  export default {
    components: {
      VCalendar,
      ReportResult,
      CardReport,
      BanerSimple,
      MAJ0203121,
      MAJ0203220,
      MAJ0203230,
      LifelogChallenge,
      LifelogHealthnews,
      Carousel,
      Slide,
      Pagination
    },

    setup() {
      const tab = ref(null)
      const modal = ref(false)
      const modal2 = ref(false)
      const modal3 = ref(false)
      const isActive = ref(false)
      const reports = ref([
        {
          id: 0,
          date: '03.23 오전 6:35',
          device: '기기',
          stateCd: '3',
          state: '고도비만',
          record: '70',
          bmi: '35'
        },
        {
          id: 1,
          date: '03.20 오전 6:35',
          device: '기기',
          stateCd: '2',
          state: '비만',
          record: '105',
          bmi: '23'
        },
        {
          id: 2,
          date: '03.20 오전 6:35',
          device: '기기',
          stateCd: '1',
          state: '정상',
          record: '60',
          bmi: '23.4'
        }
      ])
      function getColor(props) {
        switch (props) {
          case '3':
            return '#EB5147'
          case '2':
            return '#FF862F'
          case '1':
            return '#00C378'
        }
      }
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
          title: '운동 관리하러 가기',
          text: '체성분과 함께 관리해보세요!',
          iconName: 'icon-dumbbell.svg',
          path: '/MAJ0202856'
        },
        {
          title: '걸음 관리하러 가기',
          text: '체성분과 함께 관리해보세요!',
          iconName: 'icon-shoes.svg',
          path: '/MAJ0202850'
        },
        {
          title: '수분 관리하러 가기',
          text: '체성분과 함께 관리해보세요!',
          iconName: 'icon-water-cup.svg',
          path: '/MAJ0202940'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      return {
        tab,
        modal,
        modal2,
        modal3,
        isActive,
        reports,
        handleClick,
        getColor,
        calendarAttr,
        banerList,
        goPath
      }
    }
  }
</script>
