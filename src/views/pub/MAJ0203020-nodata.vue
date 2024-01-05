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
            <Nodata
              :icon="true"
              :iconSize="'bloodsugar'"
              :optionClass="'lifelog'"
              class="pb-4"
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
          </v-sheet>
          <div class="btn-area2 mt-9">
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
        </div>
      </v-card>
    </div>

    <!-- 혈당 기록 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">혈당 기록</v-btn>
      </h2>
      <div class="text-info-grey">최근 3개 기록만 표시됩니다</div>
      <div class="pt-6">
        <v-btn variant="flat" color="#F8F8F8" class="link-icon">
          <template #prepend>
            <v-img
              :width="20"
              :height="20"
              src="/assets/images/icon-megaphone.svg"
              cover
            ></v-img>
          </template>
          <span class="text"
            >측정 시점이 <strong>미입력</strong> 된 기록이 있어요</span
          >
          <v-icon icon="ico-link-arrow" size="15" class="ml-1"></v-icon>
        </v-btn>
      </div>

      <!-- 기록 component -->
      <Nodata
        :icon="true"
        :iconSize="'big-record'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          3개월 동안 꾸준히 기록하고<br />예상 당화혈색소를 확인해 보세요
        </div>
      </Nodata>
    </div>

    <!-- 식사 기록 -->
    <div class="section-page py-8 pb-0">
      <div class="pb-8">
        <h2 class="tit-03 tit-link pb-2">
          <v-btn block variant="text">식사 기록</v-btn>
        </h2>
        <div class="text-info-grey text-info-grey3">
          최근 3개 기록만 표시됩니다
        </div>

        <!-- 기록 component -->
        <Nodata
          :icon="true"
          :iconSize="'big-cooking'"
          :optionClass="'type'"
          class="mt-13"
        >
          <div class="fs-16">
            오늘 먹은 식사를 기록하고<br />건강한 음식 추천을 받아 보세요
          </div>
        </Nodata>
      </div>
    </div>

    <!-- 혈당 분석 -->
    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">혈당 분석</v-btn>
      </h2>
      <div class="text-info-grey">
        측정 데이터를 기준으로 한 혈압 분석입니다
      </div>
      <v-sheet class="pt-4">
        <Nodata
          :icon="true"
          :iconSize="'big-analysis'"
          :optionClass="'type'"
          class="mt-7 pb-11"
        >
          <div class="fs-16">
            3개월 동안 꾸준히 기록하고<br />예상 당화혈색호를 확인해 보세요
          </div>
        </Nodata>
      </v-sheet>

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

    <div class="section-page">
      <LifelogChallenge />
    </div>
    <!-- //챌린지 -->

    <div class="section-page pb-0">
      <LifelogHealthnews />
    </div>
    <!-- //건강뉴스 -->
  </div>
  <MAJ0203112 v-model="modal1" @close="modal1 = false"></MAJ0203112>
  <MAJ0203106 v-model="modal2" @close="modal2 = false"></MAJ0203106>
</template>

<script>
  import router from '@/router'
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import MAJ0203112 from './MAJ0203112.vue'
  import MAJ0203106 from './MAJ0203106.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import Nodata from '@/components/nodata/Nodata.vue' //nodata
  import { ref } from 'vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  export default {
    components: {
      VCalendar,
      CardReport,
      ReportResult,
      BanerSimple,
      MAJ0203112,
      MAJ0203106,
      LifelogChallenge,
      LifelogHealthnews,
      Carousel,
      Slide,
      Pagination,
      Nodata
    },
    setup() {
      const modal1 = ref(false)
      const modal2 = ref(false)
      const tab = ref(null)
      const Analysis = ref(null)
      const reports = ref([
        {
          id: 0,
          date: '오전 10시 35분',
          device: '기기',
          state: 'success',
          recordPeriod: '공복',
          bloodSugar: '64',
          hasMemo: '사용자가 입력한 메모가 노출됩니다'
        },
        {
          id: 1,
          date: '오전 6시 35분',
          device: '플랫폼',
          state: 'errorLow',
          recordPeriod: '식전',
          bloodSugar: '90'
        },
        {
          id: 2,
          date: '오전 6시 35분',
          state: 'errorHigh',
          recordPeriod: '식후',
          bloodSugar: '64'
        },
        {
          id: 3,
          date: '오전 6시 35분',
          state: 'errorHighWarning',
          recordPeriod: '식후',
          bloodSugar: '64'
        }
      ])

      const reportsMeal = ref([
        {
          id: '당류',
          weigh: '200g',
          date: '오전 6:35',
          food: '양념치킨',
          device: '직접입력',
          recordPeriod: '아침',
          state: 'errorHigh',
          img: 'img-food.png',
          calories: '200kcal'
        },
        {
          id: '당류',
          weigh: '100g',
          date: '오전 6:35',
          food: '양념치킨',
          device: '직접입력',
          recordPeriod: '아침간식',
          state: 'errorHigh',
          img: 'img-food.png',
          calories: '300kcal'
        },
        {
          id: '당류',
          weigh: '60g',
          date: '오전 6:35',
          food: '양념치킨',
          device: '직접입력',
          recordPeriod: '저녁',
          state: 'errorHigh',
          img: 'img-food.png',
          calories: '100kcal'
        },
        {
          id: '당류',
          weigh: '50g',
          date: '오전 6:35',
          food: '계란, 사과, 바나나, 귤, 프렌치 토스트, 오렌지 주스',
          device: '직접입력',
          recordPeriod: '저녁',
          state: 'errorHigh',
          img: 'img-food.png',
          calories: '100kcal'
        },
        {
          id: '당류',
          weigh: '1g',
          date: '오전 6:35',
          food: '계란',
          device: '직접입력',
          recordPeriod: '저녁',
          state: 'errorHigh',
          img: 'img-food.png',
          calories: '100kcal'
        }
      ])

      function getText(props) {
        switch (props) {
          case 'errorLow':
            return '저혈당'
          case 'success':
            return '정상'
          case 'errorHigh':
            return '고혈당'
          case 'errorHighWarning':
            return '고혈당 위험'
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
          title: '식사 관리하러 가기',
          text: '혈당과 함께 관리해보세요!',
          iconName: 'icon-cooking.svg',
          path: '/MAJ0203410'
        },
        {
          title: '복약 관리하러 가기',
          text: '혈당과 함께 관리해보세요!',
          iconName: 'icon-medication.svg',
          path: '/MAJ0203420'
        },
        {
          title: '운동 관리하러 가기',
          text: '혈당과 함께 관리해보세요!',
          iconName: 'icon-dumbbell.svg',
          path: '/MAJ0202856'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      const recommand = ref([
        {
          id: 0,
          food: '쌈밥 한정식',
          img: 'img-food.png',
          calories: '200kcal'
        },
        {
          id: 1,
          food: '들깨 칼국수',
          img: 'img-food.png',
          calories: '300kcal'
        },
        {
          id: 2,
          food: '쌈밥 한정식',
          img: 'img-food.png',
          calories: '100kcal'
        },
        {
          id: 3,
          food: '들깨 칼국수',
          img: 'img-food.png',
          calories: '300kcal'
        }
      ])

      return {
        reports,
        getText,
        Analysis,
        handleClick,
        reportsMeal,
        modal1,
        modal2,
        tab,
        calendarAttr,
        banerList,
        goPath,
        recommand
      }
    }
  }
</script>
