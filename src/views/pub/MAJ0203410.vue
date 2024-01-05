<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
    </div>
    <div class="section-page section-bg pa-4 brt-0">
      <ReportResult :bnShow="'good'" :videBox="false" class="pb-4">
        휴레이 메시지 노출 예정
      </ReportResult>
      <v-card variant="flat" rounded="xl" class="calorie-card">
        <v-card-title class="pa-0 pt-1">
          <div class="body-title-wrap">
            <v-card-title class="pa-0">
              <span class="fs-20"
                ><strong
                  >오늘 100kcal <br />
                  더 많이 먹었어요!</strong
                ></span
              >
            </v-card-title>
            <div class="body-desc pt-1">3일 전 내 몸과의 비교</div>
          </div>
        </v-card-title>
        <div class="rice-area pt-8" v-if="isRice">
          <!-- rice wave -->
          <div class="wrap-rice">
            <div class="rice-box">
              <div class="mask-rice">
                <img src="/assets/images/mask-rice-before.svg" alt="" />
              </div>
              <div class="rice" ref="rice">
                <img src="/assets/images/mask-rice.svg" alt="" />
              </div>
            </div>
            <div class="percent-tip plus">20% 초과</div>
          </div>
          <!-- //rice wave -->
        </div>
        <div class="apple-area pt-8" v-if="isApple">
          <!-- apple wave -->
          <div class="wrap-apple">
            <div class="apple-box">
              <div class="mask-apple">
                <img src="/assets/images/mask-apple-before.svg" alt="" />
              </div>
              <div class="apple" ref="apple">
                <img src="/assets/images/mask-apple.svg" alt="" />
              </div>
            </div>
            <div class="percent-tip plus">20% 초과</div>
          </div>
          <!-- apple wave -->
        </div>
        <div class="chicken-area pt-8" v-if="isChicken">
          <!-- chicken wave -->
          <div class="wrap-chicken">
            <div class="chicken-box">
              <div class="mask-chicken">
                <img src="/assets/images/mask-chicken-before.svg" alt="" />
              </div>
              <div class="chicken" ref="chicken">
                <img src="/assets/images/mask-chicken.svg" alt="" />
              </div>
            </div>
            <div class="percent-tip minus">20% 남음</div>
          </div>
          <!-- chicken wave -->
        </div>
        <div class="btn-double type-2 mt-4">
          <!-- 2차범위 구내식당 버튼 추가 -->
          <!-- <v-btn variant="text" height="46" class="medicard-btn pause"
            >구내식당</v-btn
          > -->
          <v-btn variant="text" height="46" class="btn-summit"
            >직접 입력하기</v-btn
          >
        </div>
      </v-card>
      <v-card variant="flat" rounded="xl" class="calorie-card mt-4">
        <div class="calorie-bar">
          <div class="bar-title"><span>탄수화물</span> 섭취가 많은 날</div>
          <div class="food-wrap pt-4">
            <div class="ring-graph">
              <div class="ring-box 01">
                <img
                  src="/assets/images/icon-food-graph-01.svg"
                  alt=""
                  class="ring-img 01"
                />
                <div class="food-box">
                  <img
                    src="/assets/images/icon-food-01.svg"
                    alt=""
                    class="food-img 01"
                  />
                </div>
              </div>
              <div class="ring-text-wrap pt-2">
                <div class="ring-title">탄수화물</div>
                <div class="ring-num">
                  <span class="ring-strong">61</span>/100g
                </div>
              </div>
            </div>
            <v-divider vertical class="mx-2 my-6"></v-divider>
            <div class="ring-graph">
              <div class="ring-box 02">
                <img
                  src="/assets/images/icon-food-graph-02.svg"
                  alt=""
                  class="ring-img 02"
                />
                <div class="food-box">
                  <img
                    src="/assets/images/icon-food-02.svg"
                    alt=""
                    class="food-img 02"
                  />
                </div>
              </div>
              <div class="ring-text-wrap pt-2">
                <div class="ring-title">탄수화물</div>
                <div class="ring-num">
                  <span class="ring-strong">61</span>/100g
                </div>
              </div>
            </div>
            <v-divider vertical class="mx-2 my-6"></v-divider>
            <div class="ring-graph">
              <div class="ring-box 03">
                <img
                  src="/assets/images/icon-food-graph-03.svg"
                  alt=""
                  class="ring-img 03"
                />
                <div class="food-box">
                  <img
                    src="/assets/images/icon-food-03.svg"
                    alt=""
                    class="food-img 03"
                  />
                </div>
              </div>

              <div class="ring-text-wrap pt-2">
                <div class="ring-title">탄수화물</div>
                <div class="ring-num">
                  <span class="ring-strong">61</span>/100g
                </div>
              </div>
            </div>
          </div>

          <div class="box-rounded mt-6 type-02">
            <v-btn
              block
              variant="text"
              rounded="xl"
              height="24"
              :ripple="false"
              class="btn-search shadow-none"
              @click="isVisible = !isVisible"
            >
              <span class="text">
                영양 분석 보기
                <img
                  src="/assets/images/icon-arrow-up2.svg"
                  alt="검색"
                  v-if="isVisible"
                />
                <img
                  src="/assets/images/icon-arrow-down2.svg"
                  alt="검색"
                  v-else
                />
              </span>
            </v-btn>
            <v-expand-transition>
              <div v-if="isVisible">
                <ul class="list-heart list-food" v-if="list.length > 0">
                  <li v-for="(item, i) in list" :key="i">
                    <div class="tit">
                      {{ item.title }}
                      <div class="text-info-grey">{{ item.text }}g</div>
                    </div>
                    <v-chip
                      label
                      size="small"
                      class="chip-default chip-color"
                      :color="getColor(item.state)"
                    >
                      {{ item.state }}
                    </v-chip>
                  </li>
                </ul>
                <div v-else>
                  <Nodata
                    :icon="true"
                    :iconSize="'big'"
                    :optionClass="'food-nodata'"
                    :icon-type="'lifelog-food'"
                    class="pb-2"
                  >
                    <div class="fs-16">영양 분석 정보가 없어요</div>
                  </Nodata>
                </div>
                <div class="body-desc pt-2">
                  한국 영양학회 및 강북삼성병원의 자문 기준으로 제공하는
                  권장사항입니다
                </div>
              </div>
            </v-expand-transition>
          </div>
        </div>
      </v-card>
    </div>

    <div class="my-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">식사 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 1주일의 식사 분석입니다</p>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab :ripple="false" class="fs-20">1주일</v-tab>
        <v-tab :ripple="false" class="fs-20">1개월</v-tab>
        <v-tab :ripple="false" class="fs-20">6개월</v-tab>
      </v-tabs>
      <div class="mt-6 mb-4 graph-date">23.10.15~23.10.21</div>
      <img src="/assets/images/img-graph-bar2.png" alt="" class="graph-bar2" />
    </div>

    <div class="section-page pb-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">식사 기록</v-btn>
      </h2>
      <div class="text-info-grey text-info-grey3">
        오늘 3일 기록만 표시됩니다
      </div>

      <!-- 기록 component -->
      <CardReport
        :btn="true"
        v-for="report in reports"
        :key="report.id"
        class="report-food"
        @handleClick="modal2 = true"
      >
        <template #date>{{ report.date }}</template>
        <!-- card 내용 -->
        <template #content>
          <div class="content-grid">
            <div class="img-center">
              <img
                :src="`/assets/images/${report.img}`"
                alt=""
                class="img-food img"
              />
            </div>
            <div class="category-list pt-2" role="list">
              <div class="chip-category" role="listitem">
                <div class="category pr-2">측정시기</div>
                {{ getText(report.state) }}
              </div>
              <div class="chip-category" role="listitem">
                <div class="category pr-2">섭취음식</div>
                <div class="food-name text-overflow line1">
                  {{ report.food }}
                </div>
              </div>
              <div class="chip-category" role="listitem">
                <div class="category pr-2">칼로리</div>
                <span class="text-blue">{{ report.calories }}</span>
              </div>
            </div>
          </div>
        </template>
      </CardReport>
    </div>

    <div class="section-page section-calorie">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text" class="no-arrow-type"
          >칼로리 내 먹을 수 있는 음식</v-btn
        >
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
      <template v-for="(item, i) in banerList" :key="i">
        <BanerSimple
          :iconName="item.iconName"
          class="mt-8"
          @update="goPath(item.path)"
        >
          <strong class="title">{{ item.title }}</strong>
          <p class="text">{{ item.text }}</p>
        </BanerSimple>
      </template>
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

    <DialogSetting
      v-model="modal2"
      :btnModify="true"
      @close="modal2 = false"
      @deleteClick="delFunc"
    />
  </div>
</template>

<script>
  import router from '@/router'
  import Nodata from '@/components/nodata/Nodata.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import DialogSetting from '@/components/DialogSetting.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import { ref, reactive, onMounted } from 'vue'
  import { onBeforeRouteLeave } from 'vue-router'
  import { Carousel, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  export default {
    components: {
      Nodata,
      VCalendar,
      ReportResult,
      CardReport,
      BanerSimple,
      DialogSetting,
      LifelogChallenge,
      LifelogHealthnews,
      Carousel,
      Slide
    },
    setup() {
      const isVisible = ref(false)
      const isRice = true
      const isApple = false
      const isChicken = false
      const isAlert = true
      const list = ref([
        {
          title: '탄수화물',
          text: '61',
          state: '과다'
        },
        {
          title: '단백질',
          text: '61',
          state: '부족'
        },
        {
          title: '지방',
          text: '61',
          state: '과다'
        },
        {
          title: '당분',
          text: '61',
          state: '과다'
        },
        {
          title: '나트륨',
          text: '61',
          state: '적정'
        },
        {
          title: '콜레스테롤',
          text: '61',
          state: '적정'
        },
        {
          title: '칼슘',
          text: '61',
          state: '부족'
        }
      ])
      const reports = ref([
        {
          id: 0,
          date: '오전 6:35',
          food: '계란, 사과, 바나나, 귤, 수박화채, 밤, 프렌치 토스트',
          state: 'morning',
          img: 'bigfood.jpg',
          calories: '200kcal'
        },
        {
          id: 1,
          date: '오후 2:35',
          food: '마카롱, 반숙란',
          state: 'morningS',
          img: 'img-food.png',
          calories: '300kcal'
        },
        {
          id: 2,
          date: '오후 8:35',
          food: '양념치킨',
          state: 'lunch',
          img: 'img-food.png',
          calories: '100kcal'
        }
      ])
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
        },
        {
          id: 4,
          food: '야채쌈밥 & 제육볶음',
          img: 'img-food-N05.png',
          calories: '485kcal'
        }
      ])
      const modal2 = ref(false)
      const modal2Title = ref('설정')
      const modal2List = ref([
        {
          value: 0,
          text: '수정'
        },
        {
          value: 1,
          text: '삭제'
        }
      ])
      const delFunc = () => {
        alert('삭제')
      }
      function getColor(props) {
        switch (props) {
          case '과다':
            return '#EB5147'
          case '부족':
            return '#EB5147'
          case '적정':
            return '#00C378'
        }
      }
      function getText(props) {
        switch (props) {
          case 'morning':
            return '아침'
          case 'morningS':
            return '아침간식'
          case 'lunch':
            return '점심'
          case 'dinner':
            return '저녁'
        }
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
          title: '혈당 관리해 보러 가기',
          text: '식사과 함께 관리해보세요',
          iconName: 'icon-blood-sugar.svg',
          path: '/MAJ0203020'
        }
      ])
      function goPath(val) {
        router.push(val)
      }

      // rice
      const rice = ref()
      const riceClass = document.querySelector('.rice')
      const ricePercentValue = ref(0)
      const interval = ref()

      const riceWave = (e) => {
        if (isRice) {
          interval.value = setInterval(function () {
            ricePercentValue.value++

            e == 100
              ? (rice.value.style =
                  '-webkit-mask-position: 50% calc(-' +
                  (100 - ricePercentValue.value) +
                  '% - 17px)')
              : (rice.value.style =
                  '-webkit-mask-position: 50% -' +
                  (100 - ricePercentValue.value) +
                  '%')
            if (ricePercentValue.value == e || e == 0) {
              clearInterval(interval.value)
            }
          }, 40)
        }
      }
      // rice

      // apple
      const apple = ref()
      const appleClass = document.querySelector('.apple')
      const applePercentValue = ref(0)
      const appleWave = (e) => {
        if (isApple) {
          interval.value = setInterval(function () {
            applePercentValue.value++
            e == 100
              ? (apple.value.style =
                  '-webkit-mask-position: 50% calc(-' +
                  (100 - applePercentValue.value) +
                  '% - 20px)')
              : (apple.value.style =
                  '-webkit-mask-position: 50% -' +
                  (100 - applePercentValue.value) +
                  '%')
            if (applePercentValue.value == e || e == 0) {
              clearInterval(interval.value)
            }
          }, 40)
        }
      }
      // apple

      // chicken
      const chicken = ref()
      const chickenClass = document.querySelector('.chicken')
      const chickenPercentValue = ref(0)
      const chickenWave = (e) => {
        if (isChicken) {
          interval.value = setInterval(function () {
            chickenPercentValue.value++
            e == 100
              ? (chicken.value.style =
                  '-webkit-mask-position: 50% calc(-' +
                  (100 - chickenPercentValue.value) +
                  '% - 17px)')
              : (chicken.value.style =
                  '-webkit-mask-position: 50% -' +
                  (100 - chickenPercentValue.value) +
                  '%')
            if (chickenPercentValue.value == e || e == 0) {
              clearInterval(interval.value)
            }
          }, 40)
        }
      }
      // chicken

      onMounted(() => {
        riceWave(80)
        appleWave(80)
        chickenWave(30)
      })

      onBeforeRouteLeave(() => {
        clearInterval(interval.value)
      })

      return {
        list,
        isVisible,
        isChicken,
        isApple,
        isRice,
        modal2,
        modal2Title,
        modal2List,
        rice,
        riceClass,
        apple,
        appleClass,
        chicken,
        chickenClass,
        isAlert,
        reports,
        recommand,
        calendarAttr,
        banerList,
        getColor,
        getText,
        delFunc,
        goPath,
        interval
      }
    }
  }
</script>
