<template>
  <div class="contents">
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
      <template #addons="{ currentSlide, slidesCount }">
        <Pagination />
        {{ currentSlide + 1 }}
        {{ slidesCount }}
      </template>
    </Carousel>
    <!-- //배너 -->

    <br />

    <Carousel
      :items-to-Show="1"
      :touchDrag="false"
      class="baner-simple-swiper mx-0"
    >
      <Slide v-for="(item, i) in banerList" :key="i">
        <BanerSimple :iconName="item.iconName" @update="goPath(item.path)">
          <strong class="title">{{ item.title }}</strong>
          <p class="text">{{ item.text }}</p>
        </BanerSimple>
      </Slide>
    </Carousel>
    <!-- //배너(1) -->

    <h2 class="tit-02 pb-0 mt-6">배너 케이스</h2>
    <BanerSimple
      :iconName="item.iconName"
      v-for="(item, i) in banerList"
      :key="i"
      class="mt-4"
      @update="goPath(item.path)"
    >
      <strong class="title">{{ item.title }}</strong>
      <p class="text">{{ item.text }}</p>
    </BanerSimple>
  </div>
</template>
<script>
  import router from '@/router'
  import { ref } from 'vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import BanerSimple from '@/components/BanerSimple.vue'
  export default {
    components: { Carousel, Slide, BanerSimple, Pagination },
    setup() {
      const banerList = ref([
        {
          title: '걸음 관리하러 가기',
          text: '걸음과 함께 관리해보세요!',
          iconName: 'icon-shoes.svg',
          path: '/MAJ0202850'
        },
        {
          title: '수면 관리하러 가기',
          text: '수면과 함께 관리해보세요!',
          iconName: 'icon-moon.svg',
          path: '/MAJ0202914'
        },
        {
          title: '수분 관리하러 가기',
          text: '수분과 함께 관리해보세요!',
          iconName: 'icon-water-cup.svg',
          path: '/MAJ0202940'
        },
        {
          title: '기분 관리하러 가기',
          text: '기분과 함께 관리해보세요!',
          iconName: 'icon-circle-count3.svg',
          path: '/MAJ0202920'
        },
        {
          title: '식사 관리하러 가기',
          text: '식사와 함께 관리해보세요!',
          iconName: 'icon-cooking.svg',
          path: '/MAJ0203410'
        },
        {
          title: '심박 관리하러 가기',
          text: '심박과 함께 관리해보세요!',
          iconName: 'icon-heart-03.svg',
          path: '/MAJ0203390'
        },
        {
          title: '여성건강 관리하러 가기',
          text: '여성건강과 함께 관리해보세요!',
          iconName: 'icon-calendar2.svg',
          path: '/MAB3500'
        },
        {
          title: '운동 관리하러 가기',
          text: '운동과 함께 관리해보세요!',
          iconName: 'icon-dumbbell.svg',
          path: '/MAJ0202856'
        },
        {
          title: '음주 관리하러 가기',
          text: '음주와 함께 관리해보세요!',
          iconName: 'icon-beercup.svg',
          path: '/MAJ0202950'
        },
        {
          title: '체성분 관리하러 가기',
          text: '체성분과 함께 관리해보세요!',
          iconName: 'icon-weight.svg',
          path: '/MAJ0203120'
        },
        {
          title: '혈압 관리하러 가기',
          text: '혈압과 함께 관리해보세요!',
          iconName: 'icon-blood.svg',
          path: '/MAJ0202970'
        },
        {
          title: '혈당 관리하러 가기',
          text: '혈당과 함께 관리해보세요!',
          iconName: 'icon-blood-sugar.svg',
          path: '/MAJ0203020'
        },
        {
          title: '흡연 관리하러 가기',
          text: '흡연과 함께 관리해보세요!',
          iconName: 'icon-cigapack.svg',
          path: '/MAJ0202960'
        },
        {
          title: '복약 관리하러 가기',
          text: '복약과 함께 관리해보세요!',
          iconName: 'icon-medication.svg',
          path: '/MAJ0203420'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      return { banerList, goPath }
    }
  }
</script>
