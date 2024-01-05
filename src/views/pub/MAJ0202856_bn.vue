<template>
  <Carousel
    :items-to-Show="1"
    :wrap-around="true"
    :autoplay="3000"
    class="baner-simple-swiper mt-8"
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
</template>
<script>
  import BanerSimple from '@/components/BanerSimple.vue'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'
  import { ref } from 'vue'
  import 'vue3-carousel/dist/carousel.css'
  export default {
    components: {
      BanerSimple,
      Carousel,
      Slide,
      Pagination
    },
    setup() {
      const banerList = ref([
        {
          title: '심박 관리하러 가기',
          text: '운동과 함께 관리해보세요!',
          iconName: 'icon-heart-03.svg',
          path: '/MAJ0203390'
        },
        {
          title: '식사 관리하러 가기',
          text: '운동과 함께 관리해보세요!',
          iconName: 'icon-cooking.svg',
          path: '/MAJ0203410'
        },
        {
          title: '걸음 관리하러 가기',
          text: '운동과 함께 관리해보세요!',
          iconName: 'icon-shoes.svg',
          path: '/MAJ0202850'
        },
        {
          title: '체성분 관리하러 가기',
          text: '운동과 함께 관리해보세요!',
          iconName: 'icon-weight.svg',
          path: '/MAJ0203120'
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
