<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page bg pa-4">
      <ReportResult :bnShow="'now'" :videBox="false" class="mb-4">
        휴레이 메시지는 아직 확정되지 않았다
      </ReportResult>

      <v-card variant="flat" rounded="xl" class="pa-4">
        <!-- chart -->
        <div class="pt-8">
          <v-sheet>
            <v-sheet>
              <Nodata
                :icon="true"
                :iconSize="'blood'"
                :optionClass="'lifelog'"
                class="pb-4"
              >
                <div class="fs-20">
                  별 일 없으신가요?<br />
                  <strong
                    >편안한 순간에 <span class="text-blue">혈압</span>을 기록해
                    보세요</strong
                  >
                </div>
              </Nodata>
            </v-sheet>
          </v-sheet>
          <div class="btn-area2 mt-9">
            <v-btn
              variant="flat"
              height="46px"
              class="bdr-8 fs-14 font-weight-bold"
              color="#FCEBA6"
              block
              ><span class="c-darkGray">직접 입력</span></v-btn
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
              <span class="c-darkGray">기기 측정</span>
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>

    <!-- 혈압기록 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">혈압 기록</v-btn>
      </h2>
      <div class="text-info-grey">최근 3개 기록만 표시됩니다</div>
      <Nodata
        :icon="true"
        :iconSize="'big-record'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          오늘 혈압 기록이 없어요<br />내 혈압을 기록해보세요
        </div>
      </Nodata>
    </div>

    <!-- 혈압 분석 -->
    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">혈압 분석</v-btn>
      </h2>
      <div class="text-info-grey">최근 일주일의 혈압 분석입니다</div>
      <v-sheet class="pt-4">
        <v-tabs v-model="Analysis" class="tabs-sliding">
          <v-tab value="one" :ripple="false" class="btn-tab">혈압</v-tab>
          <v-tab value="two" :ripple="false" class="btn-tab">맥박</v-tab>
        </v-tabs>
        <v-sheet>
          <v-window v-model="Analysis">
            <v-window-item value="one"
              ><v-sheet class="container-chart reverse custom-padding">
                <Nodata
                  :icon="true"
                  :iconSize="'big-analysis'"
                  :optionClass="'type'"
                  class="mt-13"
                >
                  <div class="fs-16">
                    별 일 없으신가요?<br />편안한 순간에 혈압을 기록해 보세요
                  </div>
                </Nodata>
              </v-sheet>
            </v-window-item>

            <v-window-item value="two"
              ><v-sheet class="container-chart reverse"
                ><Nodata
                  :icon="true"
                  :iconSize="'big-analysis'"
                  :optionClass="'type'"
                  class="mt-13"
                >
                  <div class="fs-16">
                    별 일 없으신가요?<br />편안한 순간에 혈압을 기록해 보세요
                  </div>
                </Nodata></v-sheet
              ></v-window-item
            >
          </v-window>
        </v-sheet>
      </v-sheet>
      <div class="banner-area">
        <v-btn
          variant="flat"
          color="transparent"
          class="btn-banner"
          append-icon="mdi-chevron-right"
          href="#none"
          height="auto"
          block
          :ripple="false"
        >
          <template #prepend>
            <v-icon icon="icon-prev-blood" size="32"></v-icon>
          </template>
          <div class="text">
            <p class="title">올바른 가정혈압 측정 방법 안내</p>
            <p class="small">올바른 측정 준비단계와 방법을 알려드려요</p>
          </div>
        </v-btn>
      </div>

      <Carousel
        :items-to-Show="1"
        :wrap-around="true"
        :autoplay="3000"
        class="baner-simple-swiper"
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
    <!-- //협압분석 -->

    <div class="section-page">
      <LifelogChallenge />
    </div>
    <!-- //챌린지 -->

    <div class="section-page pb-0">
      <LifelogHealthnews />
    </div>
    <!-- //건강뉴스 -->
  </div>
</template>

<script>
  import router from '@/router'
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import Nodata from '@/components/nodata/Nodata.vue' //nodata
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { ref } from 'vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import 'swiper/css'

  export default {
    components: {
      VCalendar,
      CardReport,
      ReportResult,
      BanerSimple,
      Swiper,
      SwiperSlide,
      LifelogChallenge,
      LifelogHealthnews,
      Carousel,
      Slide,
      Pagination,
      Nodata
    },

    setup() {
      const tab = ref(null)
      const Analysis = ref(null)
      const reports = ref([])
      function getText(props) {
        switch (props) {
          case 'primary':
            return '증가'
          case 'success':
            return '안정'
          case 'error':
            return '위험(고혈압 2단계)'
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
          title: '혈당 관리하러 가기',
          text: '혈압과 함께 관리해보세요!',
          iconName: 'icon-blood-sugar.svg',
          path: '/MAJ0203020'
        },
        {
          title: '심박 관리하러 가기',
          text: '혈압과 함께 관리해보세요!',
          iconName: 'icon-heart-03.svg',
          path: '/MAJ0203390'
        }
      ])
      function goPath(val) {
        router.push(val)
      }

      return {
        reports,
        getText,
        Analysis,
        handleClick,
        tab,
        calendarAttr,
        banerList,
        goPath
      }
    }
  }
</script>
