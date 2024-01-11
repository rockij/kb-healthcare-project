<template>
  <div class="contents px-4">
    <ManageBaner1 />
    <!-- //배너 -->

    <InsightBaner
      class="mt-4"
      @update:link1="modal = true"
      @update:link2="modal2 = true"
    />
    <!-- //건강인사이트 -->
    <InsightDialog1 v-model="modal" @close="modal = false" />
    <InsightDialog2 v-model="modal2" @close="modal2 = false" />

    <div class="d-flex align-center mt-8">
      <h2 class="tit-03 pb-0">오늘의 건강</h2>
      <div class="tooltip-balloon arrow-left type ml-3">
        운동 입력하고 건강 챙기세요!
      </div>
    </div>
    <div class="baner-thumb-slide media-slide">
      <div class="scroll-container">
        <v-btn
          width="150"
          variant="flat"
          height="147"
          class="btn-flat-thumb"
          rounded="xl"
          v-for="(item, i) in TodayHealthList"
          :key="i"
          @click.stop="goPath(item.link)"
          :ripple="false"
        >
          <img :src="`/assets/images/${item.img}`" alt="" class="icon" />
          <div class="txline1">
            <strong
              v-html="item.text1"
              class="fs-13"
              :class="item.once === true ? 'font-weight-regular' : ''"
            ></strong>
            <v-chip
              label
              size="small"
              :color="getText(item.state)"
              class="chip-default chip-color ml-auto"
              :class="item.stateClass"
              v-if="item.state"
            >
              <span v-html="item.state"></span>
            </v-chip>
          </div>
          <div class="txline2" v-html="item.text2" v-if="item.text2"></div>
        </v-btn>
      </div>
    </div>
    <!-- //오늘의 건강 -->

    <h2 class="tit-03 mt-4">오늘의 챌린지</h2>
    <div class="py-6 px-4 mt-2 card-report3">
      <dl class="list">
        <dd>
          <strong class="fs-14 d-flex align-center mb-2"
            ><v-icon class="icon-calendar mr-1" />D-20</strong
          >
          혈당 개선 전문 챌린지<br />
          <!-- 
								과식형 chip-overeating-type
								야식형 chip-nightsnack-type
								잦은음주형 chip-drinking-type
								고객맞춤형 chip-customized-type
							-->
          <v-chip
            variant="outlined"
            color="#eee"
            rounded="lg"
            class="chip-overeating-type mt-2"
          >
            <span class="text-dot"
              ><span class="ml-2 fs-13 text-black">과식형</span></span
            >
          </v-chip>
        </dd>
        <dt class="mark">
          <v-img src="/assets/images/dummy-thumb2.jpg" cover alt="" />
        </dt>
      </dl>
      <ProgressBar :dataNum="9" :barClass="'mx-0'" class="mt-12">
        <template v-slot:numText1>달성률&nbsp;</template>
        <template v-slot:numText2><span class="text-yellow">%</span></template>
      </ProgressBar>
      <!-- //progress-bar -->
      <v-card
        variant="flat"
        rounded="xl"
        class="box-rounded-fill mt-4 pa-4 overflow-visible"
      >
        <div class="d-flex align-center">
          <strong class="mr-4">혈당 기록하기</strong>
          <div class="ml-auto btn-tooltip-top">
            <div class="tooltip-balloon arrow-bottom">
              <strong>측정시간 제한</strong>
            </div>
            <v-btn
              variant="flat"
              rounded="lg"
              height="46"
              width="66"
              color="#FFD633"
              class="font-weight-bold"
              >인증</v-btn
            >
          </div>
        </div>
        <v-btn variant="text" class="mt-4 d-block pa-0" height="auto" block>
          <span class="text-overflow-roundbox line1">
            <strong>Tip!</strong> 체가 인슐린을 충분히 생산하지 못하거나 체가
            인슐린을 충분히 생산하지 못하거나
          </span>
        </v-btn>
      </v-card>
      <v-card variant="flat" rounded="xl" class="box-rounded-fill mt-4 pa-4">
        <div class="d-flex align-center">
          <v-btn
            variant="text"
            height="auto"
            class="pa-0 pr-4 flex-1 font-weight-bold lh-1 text-left fs-16 text-wrap-normal justify-start"
            ><span
              >국, 탕, 찌개는 건더기 위주로 먹고 국물 꼭 남기기<v-icon
                class="icon-arrow-right ml-1" /></span
          ></v-btn>
          <v-btn
            variant="flat"
            rounded="lg"
            height="46"
            width="66"
            color="#FFD633"
            class="font-weight-bold ml-auto"
            disabled
            ><v-icon class="icon-check-grey" />완료</v-btn
          >
        </div>
        <v-btn variant="text" class="mt-4 d-block pa-0" height="auto" block>
          <div class="text-overflow-roundbox line1">
            <strong>Tip!</strong> 고기(동물성단백질)와 달걀이 좋고
          </div>
        </v-btn>
      </v-card>
      <v-card variant="flat" rounded="xl" class="box-rounded-fill mt-4 pa-4">
        <div class="d-flex align-center">
          <strong class="mr-4">7,000보 이상 걷기</strong>
          <v-btn
            variant="flat"
            rounded="lg"
            height="46"
            width="66"
            color="#FFD633"
            class="font-weight-bold ml-auto"
            >인증</v-btn
          >
        </div>
      </v-card>
    </div>
    <div class="py-6 px-4 mt-2 card-report3">
      <dl class="list">
        <dd>
          <strong class="fs-14 d-flex align-center mb-2"
            ><v-icon class="icon-calendar mr-1" />D-20</strong
          >
          오케어 이용자가 평일 평균걸음수만큼 걸어보기
        </dd>
        <dt>
          <v-img src="/assets/images/dummy-thumb2.jpg" cover alt="" />
        </dt>
      </dl>
      <ProgressBar :dataNum="100" :barClass="'mx-0'" class="mt-12"
        ><template v-slot:numText1>달성률&nbsp;</template>
        <template v-slot:numText2
          ><span class="text-yellow">%</span></template
        ></ProgressBar
      >
      <!-- //progress-bar -->
      <v-card variant="flat" rounded="xl" class="box-rounded-fill mt-4 pa-4">
        <div class="d-flex align-center">
          <v-btn
            variant="text"
            height="auto"
            class="pa-0 pr-4 flex-1 font-weight-bold lh-1 text-left fs-16 text-wrap-normal justify-start"
            ><span
              >매일 오케어 이용자 평일 평균 걸음수 만큼 걷기<v-icon
                class="icon-arrow-right ml-1" /></span
          ></v-btn>
          <v-btn
            variant="flat"
            rounded="lg"
            height="46"
            width="66"
            color="#FFD633"
            class="font-weight-bold ml-auto"
            disabled
            ><v-icon class="icon-check-grey" />완료</v-btn
          >
        </div>
      </v-card>
    </div>
    <!-- //오늘의 챌린지 -->

    <ManageBaner1 class="mt-8" />
    <!-- //배너 -->

    <div class="box-rounded-shadow py-6 px-4 mt-8">
      <LifelogHealthnews :title="'당신을 위한 건강뉴스'" />
      <v-btn
        variant="outlined"
        rounded="lg"
        height="32"
        color="#ccc"
        block
        class="mt-4 fs-13"
        ><span class="text-black">다른 뉴스 더보기</span></v-btn
      >
    </div>
    <!-- //당신을 위한 건강뉴스 -->

    <div class="mt-8">
      <LifelogChallenge :title="true">
        <template v-slot:title>
          <h2 class="tit-03">추천 챌린지</h2>
        </template>
      </LifelogChallenge>
    </div>
    <!-- //추천 챌린지 -->
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, FreeMode]
      }
    }
  }
</script>
<script setup> 
  import router from '@/router'
  import ProgressBar from './ProgressBar.vue'
  import InsightBaner from './MAJ0100013.vue' // 인사이트배너
  import InsightDialog1 from './MAJ0100016.vue' // 건강날씨 팝업
  import InsightDialog2 from './MAJ0100017.vue' // 질환주의보 팝업
  import ManageBaner1 from './MainBaner1.vue' // 전시관리배너
  import LifelogHealthnews from './LifelogHealthnews.vue' // 건강뉴스
  import LifelogChallenge from './LifelogChallenge.vue' // 챌린지
  import { ref } from 'vue'
  const TodayHealthList = ref([
    {
      img: 'icon-circle-count3.svg',
      text1: '감정',
      text2: `<strong class="fs-20">보통</strong
      ><small class="fs-13 ml-1">심숭샘숭</small>`,
      link: '/MAJ0202920'
    },
    {
      img: 'icon-cooking.svg',
      text1: '식사',
      text2: `<strong class="fs-20">2,000</strong
      ><small class="fs-14 text-grey2">kcal</small>`,
      state: '20%',
      stateClass: 'chip-graph up',
      link: '/MAJ0203410'
    },
    {
      img: 'icon-moon.svg',
      text1: '수면',
      text2: `<strong class="fs-20">6</strong
      ><small class="fs-14 text-grey2">시간</small><strong class="fs-20">50</strong
      ><small class="fs-14 text-grey2">분</small>`,
      link: '/MAJ0202914'
    },
    {
      img: 'icon-shoes.svg',
      text1: '걸음',
      text2: `<strong class="fs-20">11,800</strong
      ><small class="fs-14 text-grey2">걸음</small>`,
      link: '/MAJ0202850'
    },
    {
      img: 'icon-blood-sugar.svg',
      text1: '혈당',
      text2: `<strong class="fs-20">90</strong
      ><small class="fs-14 text-grey2">mg/dl</small>`,
      chip: '20%',
      state: '주의',
      link: '/MAJ0203020'
    },
    {
      img: 'icon-blood.svg',
      text1: '혈압',
      text2: `<strong class="fs-20">128/81</strong
      ><small class="fs-14 text-grey2">mmHg</small>`,
      state: '주의',
      link: '/MAJ0202970'
    },
    {
      img: 'icon-weight.svg',
      text1: '체성분',
      text2: `<strong class="fs-20">55.2</strong
      ><small class="fs-14 text-grey2">kg</small>`,
      state: '정상',
      link: '/MAJ0202970'
    },
    {
      img: 'icon-dumbbell.svg',
      text1: '운동',
      text2: `<strong class="fs-20">1</strong
      ><small class="fs-14 text-grey2">시간</small><strong class="fs-20">20</strong
      ><small class="fs-14 text-grey2">분</small>`,
      link: '/MAJ0202856'
    },
    {
      img: 'icon-calendar2.svg',
      text1: '여성건강',
      text2: `<strong class="fs-20">1</strong
      ><small class="fs-14 text-grey2">일째</small>`,
      link: '/MAB3500'
    },
    {
      img: 'icon-water-cup.svg',
      text1: '수분',
      text2: `<strong class="fs-20">5,000</strong
      ><small class="fs-14 text-grey2">ml</small>`,
      link: '/MAJ0202940'
    },
    {
      img: 'icon-beercup.svg',
      text1: '금주',
      text2: `<strong class="fs-20">23</strong
      ><small class="fs-14 text-grey2">시간째</small>`,
      link: '/MAJ0202950'
    },
    {
      img: 'icon-cigarette04.svg',
      text1: '금연',
      text2: `<strong class="fs-20">56</strong
      ><small class="fs-14 text-grey2">분째</small>`,
      link: '/MAJ0202960'
    },
    {
      img: 'icon-heart-03.svg',
      text1: '심박',
      text2: `<strong class="fs-20">50</strong
      ><small class="fs-14 text-grey2">bpm</small>`,
      link: '/MAJ0203390'
    },
    {
      img: 'icon-medication.svg',
      text1: '복약',
      text2: `<strong class="fs-20">9</strong
      ><small class="fs-14 text-grey2">건 복용완료</small>`,
      link: '/MAJ0203420'
    },
    {
      img: 'icon-today-plus00.svg',
      //text1: '한번에<br/>입력해보세요',
      once: true
    }
  ])
  function goPath(val) {
    router.push(val)
  }
  function getText(props) {
    switch (props) {
      case '정상':
        return 'success'
      case '주의':
        return 'orange'
    }
  }
  const modal = ref(false)
  const modal2 = ref(false)
</script>
