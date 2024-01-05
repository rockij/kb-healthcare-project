<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar />
    </div>

    <div class="section-page">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">식사 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">최근 1주일 식사를 분석입니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-analysis'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          아직 식사 기록이 없어요 <br />식사 인증을 하면 확인할 수 있어요
        </div>
      </Nodata>
    </div>

    <div class="section-page pb-0">
      <h2 class="tit-03 tit-link">
        <v-btn block variant="text">식사 기록</v-btn>
      </h2>
      <p class="text-info-grey fs-16 mb-6">오늘 3일 기록만 표시됩니다</p>
      <Nodata
        :icon="true"
        :iconSize="'big-record'"
        :optionClass="'type'"
        class="mt-13"
      >
        <div class="fs-16">
          아직 식사 기록이 없어요 <br />
          식사 인증을 하면 확인할 수 있어요
        </div>
      </Nodata>
    </div>

    <div class="section-page section-calorie mt-8">
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
            <div>{{ item.food }}</div>
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
  </div>
</template>
<script>
  import router from '@/router'
  import { ref } from 'vue'
  import Nodata from '@/components/nodata/Nodata.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import BanerSimple from '@/components/BanerSimple.vue'
  import { Carousel, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import LifelogChallenge from '@/views/pub/LifelogChallenge.vue' // 챌린지
  import LifelogHealthnews from '@/views/pub/LifelogHealthnews.vue' // 건강뉴스
  export default {
    components: {
      BanerSimple,
      Nodata,
      VCalendar,
      LifelogChallenge,
      LifelogHealthnews,
      Carousel,
      Slide
    },
    setup() {
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
        },
        {
          id: 4,
          food: '야채쌈밥 & 제육볶음',
          img: 'img-food.png',
          calories: '485kcal'
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
      return {
        banerList,
        recommand,
        goPath
      }
    }
  }
</script>
