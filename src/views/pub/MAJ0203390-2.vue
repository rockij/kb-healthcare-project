<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar />
    </div>
    <div class="section-page bg pa-4">
      <v-card variant="flat" rounded="xl" class="px-4 py-6">
        <Nodata
          :icon="true"
          :iconSize="'heart'"
          :optionClass="'lifelog'"
          class="pt-8"
        >
          <div class="fs-20">
            주기적으로 심박을 체크하고<br />
            <strong
              >내게 맞는 <span class="text-blue">심박</span>분석을
              받아보세요</strong
            >
          </div>
        </Nodata>
      </v-card>
    </div>

    <div class="section-page brt-0">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">심박 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 1주일의 심박 분석입니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-analysis'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          심장이 쉬고 있어요! <br />
          두근거리는 일을 하며 심박을 기록해 보세요
        </div>
      </Nodata>
    </div>

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">심박 기록</v-btn>
      </h2>
      <p class="text-info-grey fs-16 mb-6">오늘 3개 기록만 표시됩니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-record'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          심장이 쉬고 있어요! <br />
          두근거리는 일을 하며 심박을 기록해 보세요
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

      <div class="section-page">
        <LifelogChallenge />
      </div>

      <div class="section-page pb-0">
        <LifelogHealthnews />
      </div>
    </div>
  </div>
</template>
<script>
  import router from '@/router'
  import { ref } from 'vue'
  import Nodata from '@/components/nodata/Nodata.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import 'vue3-carousel/dist/carousel.css'
  import BanerSimple from '@/components/BanerSimple.vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  export default {
    components: {
      Nodata,
      VCalendar,
      LifelogChallenge,
      LifelogHealthnews,
      BanerSimple,
      Carousel,
      Slide,
      Pagination
    },
    setup() {
      const banerList = ref([
        {
          title: '운동 관리하러 가기',
          text: '심박과 함께 관리해보세요!',
          iconName: 'icon-dumbbell.svg',
          path: '/MAJ0202856'
        },
        {
          title: '혈압 관리하러 가기',
          text: '심박과 함께 관리해보세요!',
          iconName: 'icon-blood.svg',
          path: '/MAJ0202970'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      return {
        banerList,
        goPath
      }
    }
  }
</script>
