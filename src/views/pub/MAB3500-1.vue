<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" />
      <div class="vc-dots-info">
        <div class="state" v-for="(state, i) in calendarStates" :key="i">
          <i class="icon" :class="state.icon" />
          <div class="text">{{ state.text }}</div>
        </div>
      </div>
    </div>
    <div class="section-bg">
      <!-- 몸상태 단계별 상태 -->
      <ReportResult :bnShow="'now'" :videBox="false">
        D-18 슬슬 입터짐이 찾아올 시기에요
      </ReportResult>
      <!-- 배란상태 -->
      <v-card rounded="xl" class="card-rounded">
        <div class="tit-02 pb-0">월경체크</div>
        <!-- 20231103 버튼스타일 수정 -->
        <div class="btn-double type-2 mt-4">
          <v-btn
            v-for="item in condition"
            :key="item.value"
            variant="text"
            height="46"
            :value="item.value"
            :class="[item.value === 2 ? 'btn-summit' : 'medicard-btn pause']"
            :disabled="selected === item.value"
            @click="selected = item.value"
            >{{ item.text }}
          </v-btn>
        </div>
      </v-card>
      <v-card rounded="xl" class="card-rounded py-0">
        <div class="card-item">
          <div class="d-flex justify-space-between">
            <div class="tit-02 pb-0">사랑일</div>
            <v-btn
              v-if="!text1"
              icon
              variant="flat"
              density="compact"
              @click="modal = true"
              class="btn-icon-plus"
            >
              <img src="/assets/images/icon-plus.svg" alt="사랑일 선택" />
            </v-btn>
            <v-btn icon variant="flat" density="compact" v-else>
              <img src="/assets/images/icon-more.svg" alt="" />
            </v-btn>
          </div>
          <!-- 결과 -->
          <div class="tabs-simple2 gap mt-2" v-if="text1">
            <v-btn variant="text" class="fs-16" aria-selected="true">
              {{ text1 }}
            </v-btn>
            <v-btn
              v-if="text2"
              variant="text"
              class="fs-16"
              aria-selected="true"
            >
              {{ text2 }}
            </v-btn>
          </div>
        </div>
        <div class="card-item">
          <div class="d-flex justify-space-between">
            <div class="tit-02 pb-0">몸 상태</div>
            <v-btn
              v-if="result.length === 0"
              icon
              variant="flat"
              density="compact"
              @click="modal2 = true"
              class="btn-icon-plus"
            >
              <img src="/assets/images/icon-plus.svg" alt="몸 상태 선택" />
            </v-btn>
            <v-btn icon variant="flat" density="compact" v-else>
              <img src="/assets/images/icon-more.svg" alt="" />
            </v-btn>
          </div>
          <!-- 결과 -->
          <!-- 2023-12-20 class수정 -->
          <div class="tabs-simple2 gap mt-2">
            <v-btn
              variant="text"
              class="fs-16"
              v-for="item in result"
              :key="item"
              aria-selected="true"
            >
              {{ item }}
            </v-btn>
          </div>
        </div>
        <div class="card-item">
          <div class="d-flex justify-space-between">
            <div class="tit-02 pb-0">피임약 복용 여부</div>
            <v-btn
              v-if="!text3"
              icon
              variant="flat"
              density="compact"
              @click="modal3 = true"
              class="btn-icon-plus"
            >
              <img
                src="/assets/images/icon-plus.svg"
                alt="피임약 복용 여부 선택"
              />
            </v-btn>
            <v-btn icon variant="flat" density="compact" v-else>
              <img src="/assets/images/icon-more.svg" alt="" />
            </v-btn>
          </div>
          <!-- 결과 -->
          <!-- 2023-12-20 class수정 -->
          <div class="tabs-simple2 gap mt-2" v-if="text3">
            <v-btn variant="text" class="fs-16" aria-selected="true">
              {{ text3 }}
            </v-btn>
            <v-btn
              v-if="text4"
              variant="text"
              class="fs-16"
              aria-selected="true"
            >
              {{ text4 }}
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>

    <div class="section-page brt-0">
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

  <!-- 사랑일 팝업 -->
  <MAJ0202944 v-model="modal" @update="addText" @close="modal = false" />
  <!-- 몸상태 팝업 -->
  <MAJ0202945 v-model="modal2" @update="addText2" @close="modal2 = false" />
  <!-- 피임약 팝업 -->
  <MAJ0202946 v-model="modal3" @update="addText" @close="modal3 = false" />
</template>

<script>
  import router from '@/router'
  import ReportResult from '@/components/BanerReport.vue'
  import MAJ0202944 from './MAJ0202944.vue'
  import MAJ0202945 from './MAJ0202945.vue'
  import MAJ0202946 from './MAJ0202946.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스

  import { ref, reactive } from 'vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  export default {
    components: {
      MAJ0202944,
      MAJ0202945,
      MAJ0202946,
      ReportResult,
      VCalendar,
      BanerSimple,
      Carousel,
      Slide,
      Pagination,
      LifelogChallenge,
      LifelogHealthnews
    },
    setup() {
      const text1 = ref()
      const text2 = ref()
      const text3 = ref()
      const text4 = ref()
      const result = ref([])
      const list = ref([])
      const selected = ref()
      const modal = ref(false)
      const modal2 = ref(false)
      const modal3 = ref(false)
      const weekday = reactive(['일', '월', '화', '수', '목', '금', '토'])
      const states = reactive([
        {
          color: '#907776',
          text: '몸상태'
        },
        {
          color: '#E02A61',
          text: '사랑'
        },
        {
          color: '#B171F7',
          text: '피임약'
        }
      ])
      const condition = reactive([
        { value: 1, text: '월경종료' },
        { value: 2, text: '월경시작' }
      ])
      function getCondition(val) {
        selected.includes(val)
          ? selected.splice(selected.indexOf(val), 1)
          : selected.push(val)
      }
      function addText(val1, val2, data) {
        if (data === 1) {
          text1.value = val1
          text2.value = val2
          modal.value = false
        } else if (data === 2) {
          text3.value = val1
          text4.value = val2
          modal3.value = false
        }
      }
      function addText2(val1, val2, val3) {
        result.value = [...val1, ...val2, ...val3].map((i) => i.text)
        // list.value = result.value.slice(0, 8)
        modal2.value = false
      }
      function moreText() {
        list.value = result.value
      }
      // 여성건강
      const calendarAttr = ref([
        // 오늘
        {
          key: 'today',
          dates: [new Date()],
          dot: { class: 'icon-love' },
          content: { class: 'vc-today' }
        },
        // 주차표시
        {
          content: { class: 'vc-pregnancy-37' },
          dates: [new Date(2023, 11, 4)]
        },
        {
          content: { class: 'vc-pregnancy-38' },
          dates: [new Date(2023, 11, 11)]
        },
        {
          content: { class: 'vc-pregnancy-39' },
          dates: [new Date(2023, 11, 18)]
        },
        {
          content: { class: 'vc-pregnancy-40' },
          dot: { class: 'icon-circle' },
          dates: [new Date(2023, 11, 25)]
        },
        {
          dot: { class: 'icon-medicine' },
          dates: [new Date(2023, 11, 6)]
        },
        {
          dot: { class: 'icon-medicine' },
          dates: [new Date(2023, 11, 25)]
        },
        {
          dot: { class: 'icon-love' },
          dates: [new Date(2023, 11, 25)]
        },
        // 출산예정
        {
          content: { class: 'vc-pregnancy-day' },
          dates: [new Date(2023, 11, 29)]
        }
      ])
      const calendarStates = reactive([
        {
          icon: 'circle',
          text: '몸상태'
        },
        {
          icon: 'love',
          text: '사랑일'
        },
        {
          icon: 'circle2',
          text: '검진일'
        }
      ])
      const banerList = ref([
        {
          title: '기분 관리하러 가기',
          text: '여성건강과 함께 관리해보세요!',
          iconName: 'icon-circle-count3.svg',
          path: '/MAJ0202920'
        },
        {
          title: '식사 관리하러 가기',
          text: '여성건강과 함께 관리해보세요!',
          iconName: 'icon-cooking.svg',
          path: '/MAJ0203410'
        },
        {
          title: '걸음 관리하러 가기',
          text: '여성건강과 함께 관리해보세요!',
          iconName: 'icon-shoes.svg',
          path: '/MAJ0202850'
        },
        {
          title: '운동 관리하러 가기',
          text: '여성건강과 함께 관리해보세요!',
          iconName: 'icon-dumbbell.svg',
          path: '/MAJ0202856'
        },
        {
          title: '체성분 관리하러 가기',
          text: '여성건강과 함께 관리해보세요!',
          iconName: 'icon-weight.svg',
          path: '/MAJ0203120'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      return {
        text1,
        text2,
        text3,
        text4,
        result,
        list,
        selected,
        modal,
        modal2,
        modal3,
        weekday,
        states,
        condition,
        addText,
        addText2,
        moreText,
        getCondition,
        calendarAttr,
        calendarStates,
        banerList,
        goPath
      }
    }
  }
</script>
