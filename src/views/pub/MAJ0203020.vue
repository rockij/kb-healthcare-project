<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page bg pa-4">
      <ReportResult :bnShow="'now'" :videBox="false" class="mb-4">
        휴레이 메시지는 아직 확정되지 않았다
      </ReportResult>

      <v-card variant="flat" rounded="xl" class="py-6 px-4">
        <v-card-title class="pa-0">
          <p class="d-flex align-center">
            <span class="blood-sugar-max">최대</span>
            <span class="ml-4 font-weight-bold">110mg/dL</span>
          </p>
          <p class="d-flex align-center">
            <span class="blood-sugar-min">최소</span>
            <span class="ml-4 font-weight-bold">50mg/dL</span>
          </p>
          <v-btn
            variant="flat"
            color="transparent"
            class="btn-question btn-title-absolute"
            @click="modal3 = true"
            ><v-icon icon="mdi-help-circle-outline ml-2" color="#888"></v-icon
          ></v-btn>
        </v-card-title>
        <v-tabs align-tabs="start" hide-slider class="tabs-round navy mt-8">
          <v-tab class="btn-tab" :ripple="false">전체</v-tab>
          <v-tab class="btn-tab" :ripple="false">혈당 기록하기</v-tab>
          <v-tab class="btn-tab" :ripple="false">식전</v-tab>
          <v-tab class="btn-tab" :ripple="false">식후</v-tab>
        </v-tabs>
        <div class="mt-4">
          <!-- chart -->
          <img src="/assets/images/bloodsugarGraph.svg" alt="" />
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
      <h3 class="tit-02 pt-4 pb-1 d-flex align-center">
        예상 당화혈색소
        <v-btn
          variant="flat"
          color="transparent"
          class="btn-question"
          @click="modal1 = true"
          ><v-icon icon="mdi-help-circle-outline ml-2" color="#888"></v-icon
        ></v-btn>
      </h3>
      <v-sheet class="bdr-16 pa-4 d-flex align-center" color="#fff">
        <v-chip
          label
          size="small"
          color="#00C378"
          class="chip-default chip-color"
          >안정</v-chip
        >
        <span class="fs-20 font-weight-bold ml-2"
          ><span class="cnt">5.9</span>%</span
        >
      </v-sheet>
      <h3 class="tit-02 pt-4 pb-1 d-flex align-center">
        예상 당화혈색소
        <v-btn
          variant="flat"
          color="transparent"
          class="btn-question"
          @click="modal1 = true"
          ><v-icon icon="mdi-help-circle-outline ml-2" color="#888"></v-icon
        ></v-btn>
      </h3>
      <!-- no data -->
      <v-sheet class="bdr-16 pa-4 d-flex align-center" color="#fff">
        <ul class="list-circle">
          <li>3개월 동안 꾸준히 측정하면 확인할 수 있어요</li>
        </ul>
      </v-sheet>
      <!-- //no data -->
    </div>

    <!-- 혈당 기록 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">혈당 기록</v-btn>
      </h2>
      <div class="text-info-grey fs-16">최근 3개 기록만 표시됩니다</div>
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
      <CardReport
        :btn="true"
        v-for="report in reports"
        :key="report.id"
        @handleClick="handleClick"
      >
        <template #date>{{ report.date }}</template>
        <!-- card 내용 -->
        <template #content>
          <v-chip
            label
            size="small"
            :color="
              report.state == 'errorLow' || report.state == 'errorHigh'
                ? '#EB5147'
                : report.state == 'errorHighWarning'
                ? '#FF862F'
                : report.state
            "
            class="chip-default chip-color"
          >
            {{ getText(report.state) }}
          </v-chip>
          <v-chip
            label
            size="small"
            class="chip-default ml-2"
            v-if="report.device"
          >
            {{ report.device }}
          </v-chip>
          <dl class="dl dl-table">
            <dt>측정시기</dt>
            <dd class="font-weight-bold">
              <span>{{ report.recordPeriod }}</span>
            </dd>
            <dt>혈당</dt>
            <dd class="font-weight-bold" :class="report.state">
              <span>{{ report.bloodSugar }}</span
              >mmHg
            </dd>
            <dt v-if="report.hasMemo">메모</dt>
            <dd v-if="report.hasMemo">{{ report.hasMemo }}</dd>
          </dl>
        </template>
      </CardReport>
    </div>

    <!-- 식사 기록 -->
    <div class="section-page py-8 pb-0">
      <div class="pb-8">
        <h2 class="tit-03 tit-link">
          <v-btn block variant="text">식사 기록</v-btn>
        </h2>
        <div class="text-info-grey text-info-grey3">
          최근 3개 기록만 표시됩니다
        </div>

        <!-- 기록 component -->
        <CardReport
          :btn="true"
          v-for="reportsMeal in reportsMeal"
          :key="reportsMeal"
          class="report-food"
        >
          <template #date>{{ reportsMeal.date }}</template>
          <!-- card 내용 -->
          <template #content>
            <div class="content-grid">
              <div class="img-center">
                <img
                  :src="`/assets/images/${reportsMeal.img}`"
                  alt=""
                  class="img-food img"
                />
              </div>
              <div class="category-list pt-2" role="list">
                <div class="chip-category" role="listitem">
                  <div class="category pr-2">측정시기</div>
                  <span>{{ reportsMeal.recordPeriod }}</span>
                </div>
                <div class="chip-category" role="listitem">
                  <div class="category pr-2">섭취음식</div>
                  <span>{{ reportsMeal.food }}</span>
                </div>
                <div class="chip-category" role="listitem">
                  <div class="category pr-2">총 칼로리</div>
                  <span>{{ reportsMeal.calories }}</span>
                </div>
                <div class="chip-category" role="listitem">
                  <div class="category pr-2">당류</div>
                  <span>{{ reportsMeal.weigh }}</span>
                </div>
              </div>
            </div>
          </template>
        </CardReport>

        <v-card class="mt-6 bdr-16 result-bloodSugar" variant="flat">
          <v-list class="py-4" bg-color="#F8F8F8">
            <v-list-subheader class="fs-18 font-weight-bold">
              <span>
                <span class="color-red">혈당 스파이크</span>가<br />
                걱정되는 음식은?
              </span>
              <v-img
                width="40"
                height="40"
                src="/assets/images/icon-blood-sugar.svg"
                class="icon"
              ></v-img>
            </v-list-subheader>
            <template v-for="(item, i) in reportsMeal" :key="i">
              <v-list-item v-if="item.state == 'errorHigh'">
                <div class="items">
                  <span class="bullet-count">{{ i + 1 }}</span>
                  <div class="info">
                    <p class="title">
                      <span class="name">{{ item.id }}</span
                      ><span class="weigth">{{ item.weigh }}</span>
                    </p>
                    <p class="text">{{ item.food }}</p>
                  </div>
                </div>
              </v-list-item>
            </template>
            <p class="result-bloodSugar-msg bullet-circle-items">
              권장 칼로리 1,600kcal의 220kcal를 초과했어요 (기초대사량 포함)
            </p>
          </v-list>
        </v-card>
      </div>
    </div>

    <div class="section-page section-calorie">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">칼로리 내 먹을 수 있는 음식</v-btn>
      </h2>
      <div class="text-info-grey text-info-grey3">
        GI지수가 낮은 건강한 음식을 알려드릴께요
      </div>
      <div class="recommand-report pt-4">
        <div class="recommand-card" v-for="item in recommand" :key="item.id">
          <img :src="`/assets/images/${item.img}`" alt="" />
          <div class="text-area">
            <div class="text-overflow line1">{{ item.food }}</div>
            <div class="text-calories">{{ item.calories }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- //칼로리 내 먹을 수 있는 음식 -->

    <!-- 혈압 분석 -->
    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">혈당 분석</v-btn>
      </h2>
      <div class="text-info-grey fs-16">최근 1주일의 혈당 분석입니다</div>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab :ripple="false" class="btn-tab">전체</v-tab>
        <v-tab :ripple="false" class="btn-tab">공복</v-tab>
        <v-tab :ripple="false" class="btn-tab">식전</v-tab>
        <v-tab :ripple="false" class="btn-tab">식후</v-tab>
      </v-tabs>
      <p class="fs-14 mt-6">09.11 ~ 09.17</p>
      <div class="fs-16 font-weight-bold">일평균 120mg/dL</div>
      <p class="fs-14 pb-4">
        <span>최대 120mg/dL</span><span class="ml-3">최소 90mg/dL</span>
      </p>
      <div class="mt-4">
        <!-- chart -->
        <img
          src="/assets/images/img-graph-bar2.png"
          style="max-width: 100%"
          alt=""
        />
        <!-- //chart -->
      </div>

      <Carousel
        :items-to-Show="1"
        :wrap-around="true"
        :autoplay="3000"
        class="baner-simple-swiper mt-4"
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
  <MAJ0203109 v-model="modal3" @close="modal3 = false"></MAJ0203109>
</template>

<script>
  import router from '@/router'
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import MAJ0203112 from './MAJ0203112.vue'
  import MAJ0203106 from './MAJ0203106.vue'
  import MAJ0203109 from './MAJ0203109.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
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
      MAJ0203109,
      LifelogChallenge,
      LifelogHealthnews,
      Carousel,
      Slide,
      Pagination
    },
    setup() {
      const modal1 = ref(false)
      const modal2 = ref(false)
      const modal3 = ref(false)
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
          img: 'bigfood.jpg',
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
          food: '쌈밥 한정식 쌈밥 한정식',
          img: 'img-food-N01.png',
          calories: '200kcal'
        },
        {
          id: 1,
          food: '들깨 칼국수',
          img: 'img-food-N02.png',
          calories: '300kcal'
        },
        {
          id: 2,
          food: '쌈밥 한정식',
          img: 'img-food-N03.png',
          calories: '100kcal'
        },
        {
          id: 3,
          food: '들깨 칼국수',
          img: 'img-food-N04.png',
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
        modal3,
        tab,
        calendarAttr,
        banerList,
        goPath,
        recommand
      }
    }
  }
</script>
