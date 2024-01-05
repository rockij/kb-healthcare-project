<template>
  <div class="contents px-4">
    <ManageBaner1 />
    <!-- //배너 -->

    <InsightBaner class="mt-8" />
    <!-- //건강인사이트 -->

    <h2 class="tit-03 mt-8 pb-0">오늘의 건강</h2>
    <div class="baner-thumb-slide media-slide">
      <div class="scroll-container">
        <v-btn
          v-for="(item, i) in TodayHealthList"
          :key="i"
          width="150"
          variant="flat"
          height="147"
          class="btn-flat-thumb"
          rounded="xl"
          @click.stop="goPath(item.link)"
        >
          <img :src="`/assets/images/${item.img}`" alt="" class="icon" />
          <div class="txline1">
            <strong
              v-html="item.text1"
              class="fs-13"
              :class="item.once === true ? 'stxt' : ''"
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

    <div class="mt-4">
      <LifelogChallenge :title="'추천 챌린지'" />
    </div>
    <!-- //추천 챌린지 -->

    <BanerSimple
      :iconName="'icon-trophy.svg'"
      :color="'rgba(255, 214, 51, 0.10)'"
      classOption="type"
      class="mt-8"
      @update="goPath('/')"
    >
      <strong class="title">모든 챌린지</strong>
      <p class="text">일상을 더 특별하게 보내는 방법!</p>
      <span class="skip">챌린지 보러가기</span>
    </BanerSimple>
    <!-- //모든 챌린지 -->

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
  </div>
</template>
<script>
  import router from '@/router'
  import ProgressBar from './ProgressBar.vue'
  import ManageBaner1 from '@/views/pub/MainBaner1.vue' // 전시관리배너
  import InsightBaner from '@/views/pub/MAJ0100013.vue' // 인사이트배너
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import BanerSimple from '@/components/BanerSimple.vue'
  import { ref } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'
  export default {
    components: {
      ProgressBar,
      ManageBaner1,
      InsightBaner,
      LifelogHealthnews,
      LifelogChallenge,
      BanerSimple,
      Swiper,
      SwiperSlide
    },
    setup() {
      const TodayHealthList = ref([
        {
          img: 'icon-today-plus01.svg',
          text1: '오늘<br/>감정은 어때요?',
          once: true,
          link: '/MAJ0202920'
        },
        {
          img: 'icon-today-plus02.svg',
          text1: '수면 시간은<br/>어땠나요?',
          once: true,
          link: '/MAJ0202914'
        },
        {
          img: 'icon-today-plus03.svg',
          text1: '오늘 무엇을<br/>드셨나요?',
          once: true,
          link: '/MAJ0203410'
        },
        {
          img: 'icon-today-plus04.svg',
          text1: '오늘 얼마나<br/>운동했나요?',
          once: true,
          link: '/MAJ0202856'
        },
        {
          img: 'icon-today-plus05.svg',
          text1: '체중<br/>측정하셨나요?',
          once: true,
          link: '/MAJ0203120'
        },
        {
          img: 'icon-today-plus06.svg',
          text1: '월경일이<br/>얼마나 남았을까요?',
          once: true,
          link: '/MAB3500'
        },
        {
          img: 'icon-today-plus07.svg',
          text1: '오늘<br/>수분 섭취했나요?',
          once: true,
          link: '/MAJ0202940'
        },
        {
          img: 'icon-today-plus08.svg',
          text1: '오늘<br/>두근거리나요?',
          once: true,
          link: '/MAJ0203390'
        },
        {
          img: 'icon-today-plus09.svg',
          text1: '오늘<br/>얼마나 걸었나요?',
          once: true,
          link: '/MAJ0202850'
        },
        {
          img: 'icon-today-plus10.svg',
          text1: '혈압<br/>재셨나요?',
          once: true,
          link: '/MAJ0202970'
        },
        {
          img: 'icon-today-plus11.svg',
          text1: '혈당<br/>측정하셨나요? ',
          once: true,
          link: '/MAJ0203020'
        },
        {
          img: 'icon-today-plus12.svg',
          text1: '오늘<br/>음주 했나요?',
          once: true,
          link: '/MAJ0202950'
        },
        {
          img: 'icon-today-plus13.svg',
          text1: '오늘<br/>흡연 했나요?',
          once: true,
          link: '/MAJ0202960'
        },
        {
          img: 'icon-today-plus14.svg',
          text1: '오늘 약 또는 영양제<br/>복용했나요?',
          once: true,
          link: '/MAJ0203420'
        },
        {
          img: 'icon-today-plus00.svg',
          text1: '항목을 추가하고<br/>관리해 보세요',
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
      return {
        TodayHealthList,
        goPath,
        getText,
        modules: [Autoplay, Pagination]
      }
    }
  }
</script>
