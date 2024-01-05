<template>
  <swiper
    :pagination="true"
    :autoplay="{
      delay: 2500
    }"
    :loop="true"
    :modules="modules"
    class="baner-img-slide"
  >
    <swiper-slide v-for="(item, i) in BanerList" :key="i">
      <v-btn variant="text" @click.stop="goPath(item.link)">
        <v-img :src="`/assets/images/${item.img}`" :alt="item.alt" />
      </v-btn>
    </swiper-slide>
  </swiper>
</template>
<script>
  import router from '@/router'
  import { ref } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      const BanerList = ref([
        {
          img: 'dummy-main-baner.png',
          alt: '내 맘대로 암보험, KB다이렉트 필요 보장 골라 담는 암보험',
          link: '/MAJ0100010'
        },
        {
          img: 'dummy-main-baner.png',
          alt: '내 맘대로 암보험, KB다이렉트 필요 보장 골라 담는 암보험',
          link: '/MAJ0100010'
        },
        {
          img: 'dummy-main-baner2.png',
          alt: '내 맘대로 암보험, KB다이렉트 필요 보장 골라 담는 암보험',
          link: '/MAJ0100010'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      return { BanerList, goPath, modules: [Autoplay, Pagination] }
    }
  }
</script>
