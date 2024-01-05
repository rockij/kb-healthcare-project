<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar />
    </div>

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">수분 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 1주일의 수분 분석입니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-analysis'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          수분 섭취를 하여 <br />
          피부를 촉촉하게 만들어봐요
        </div>
      </Nodata>
    </div>

    <div class="section-page pb-0">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">수분 기록</v-btn>
      </h2>
      <p class="text-info-grey fs-16 mb-6">최근 3일 기록만 표시됩니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-record'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          수분 섭취를 하여 <br />
          피부를 촉촉하게 만들어봐요
        </div>
      </Nodata>

      <Carousel
        :items-to-Show="1"
        :wrap-around="true"
        :autoplay="3000"
        class="baner-simple-swiper my-8"
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
</template>
<script>
  import router from '@/router'
  import { ref } from 'vue'
  import Nodata from '@/components/nodata/Nodata.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  export default {
    components: {
      BanerSimple,
      Nodata,
      VCalendar,
      LifelogChallenge,
      LifelogHealthnews,
      Carousel,
      Slide,
      Pagination
    },
    setup() {
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
        banerList,
        LifelogChallenge,
        LifelogHealthnews,
        goPath
      }
    }
  }
</script>
