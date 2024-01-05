<template>
  <div class="contents pt-4">
    <div class="section-page2">
      <ManageBaner1 />
    </div>
    <!-- //배너 -->

    <h2 class="tit-03 tit-link mt-4 pb-0">
      <v-btn block variant="text">참여중 챌린지</v-btn>
    </h2>
    <swiper
      :spaceBetween="16"
      :pagination="true"
      :loop="true"
      :modules="modules"
      class="article-slide"
    >
      <swiper-slide
        v-for="(item, i) in JoinChallengeList"
        :key="i"
        v-slot="{ isActive }"
      >
        <v-card class="card-report4 pa-4" rounded="xl">
          <v-btn
            variant="text"
            height="auto"
            block
            class="btn-stit text-wrap-normal"
            :ripple="false"
          >
            <div class="flex-1">
              <h3 class="fs-16 font-weight-bold">{{ item.title }}</h3>
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
            </div>
            <img
              src="/assets/images/icon-authmark.png"
              alt=""
              width="48"
              class="flex-0-0"
              v-if="item.badge === true"
            />
          </v-btn>
          <v-img
            :src="`/assets/images/${item.img}`"
            alt=""
            transition="none"
            cover
            class="imgview mt-4"
          />
          <div class="progress-area mt-12">
            <ProgressBar
              :dataNum="item.number"
              :dataName="'달성률'"
              :barClass="'mx-0 type'"
              :percentFix="true"
              :ready="true"
              v-if="isActive"
              ><template v-slot:numText2
                ><span class="fs-14">%</span></template
              ></ProgressBar
            >
          </div>
          <v-card
            variant="flat"
            color="#F8F8F8"
            rounded="xl"
            class="d-flex justify-center mt-3 pa-2 fs-14"
          >
            <img src="/assets/images/icon-flame.svg" alt="" />달성률이&nbsp;
            <strong class="text-blue">80%</strong>인 경우 챌린지 성공!!
          </v-card>
        </v-card>
      </swiper-slide>
    </swiper>
    <!-- //참여중 챌린지 -->

    <div class="mt-6">
      <LifelogChallenge :title="true" :cardClass="'tags-type'">
        <template v-slot:title>
          <h2 class="tit-03 tit-link">
            <v-btn block variant="text">전문가가 직접 설계한 챌린지</v-btn>
          </h2>
          <p class="mb-6 text-grey">임상시험까지 완료한 건강 챌린지에요</p>
        </template>
      </LifelogChallenge>
    </div>
    <!-- //추천 챌린지 -->

    <ManageBaner1 class="mt-8" />
    <!-- //배너 -->

    <h2 class="tit-03 mt-8">걷기 챌린지</h2>
    <p class="text-grey">건강 관리의 기본! 걷기 챌린지를 준비했어요</p>
    <div class="list-thumb5 mt-6">
      <ul class="list">
        <li v-for="(item, i) in WalkingList" :key="i">
          <v-btn variant="text" height="auto" block @click="goPath(item.link)">
            <dl>
              <dt>
                <v-img :src="`/assets/images/${item.img}`" cover alt="" />
              </dt>
              <dd>
                <strong class="tit">{{ item.title }}</strong>
                <div class="tags" v-html="item.tags"></div>
              </dd>
            </dl>
          </v-btn>
        </li>
      </ul>
    </div>
    <!-- //걷기 챌린지 -->

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
  </div>
</template>
<script>
  import router from '@/router'
  import ProgressBar from './ProgressBar.vue'
  import ManageBaner1 from '@/views/pub/MainBaner1.vue' // 전시관리배너
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
      LifelogChallenge,
      BanerSimple,
      Swiper,
      SwiperSlide
    },
    setup() {
      const JoinChallengeList = ref([
        {
          title: '혈당개선 전문 챌린지',
          tag: '과식형',
          img: 'dummy-thumb8.jpg',
          number: 80,
          badge: true
        },
        {
          title: 'KB오케어 주말 평균만큼 많이 걷기',
          tag: '과식형',
          img: 'dummy-thumb8.jpg',
          number: 30
        }
      ])
      const WalkingList = ref([
        {
          title: '지난주 걸음수만큼 걸어보기',
          img: 'dummy-thumb9.jpg ',
          tags: '<span>#지난주만큼 걷기</span>',
          link: '/'
        },
        {
          title: '지난달 주말 걸음수만큼 걸어보기',
          img: 'dummy-thumb8.jpg ',
          tags: '<span>#지난주만큼 걷기</span>',
          link: '/'
        },
        {
          title: '지난달 평일 걸음수만큼 걸어보기',
          img: 'dummy-thumb7.png ',
          tags: '<span>#지난주만큼 걷기</span>',
          link: '/'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      return {
        JoinChallengeList,
        WalkingList,
        goPath,
        modules: [Autoplay, Pagination]
      }
    }
  }
</script>
