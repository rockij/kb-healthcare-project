<template>
  <div class="servey-wrap type-2">
    <!-- paging -->
    <SurveyPaging
      type="range"
      :page="page + 1"
      :pageLengh="pageLengh()"
      :pageList="pageList"
      :progress="progress"
      @update:prev="page--"
      @update:next="page++"
      :setPageSwiper="setPageSwiper"
    />

    <!-- 설문 페이지 -->

    <swiper
      :modules="modules"
      @swiper="page"
      v-bind="swiperOption"
      @slide-change-transition-end="setPageSwiper"
      class="swiper-wrap"
    >
      <swiper-slide v-for="item in pageList" :key="item.id">
        <v-card variant="flat" rounded="xl" class="survey-content">
          <component :is="item.path" />
        </v-card>
      </swiper-slide>
    </swiper>

    <!-- <v-window v-model="page">
      <v-window-item v-for="item in pageList" :key="item.id">
        <v-card variant="flat" rounded="xl" class="survey-content">
          <component :is="item.path" />
        </v-card>
      </v-window-item>
    </v-window> -->
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import { Navigation } from 'swiper/modules'

  import SurveyPaging from './SurveyPaging.vue'
  import SurveyPage6 from './SurveyPage6.vue'
  import SurveyPage7 from './SurveyPage7.vue'
  import SurveyPage8 from './SurveyPage8.vue'
  import { ref } from 'vue'
  export default {
    components: {
      Swiper,
      SwiperSlide,
      SurveyPaging,
      SurveyPage6,
      SurveyPage7,
      SurveyPage8
    },
    setup() {
      const page = ref(0)
      const pageLengh = () => {
        return pageList.value.length
      }
      const pageList = ref([
        {
          id: 1,
          path: 'SurveyPage6'
        },
        {
          id: 2,
          path: 'SurveyPage7'
        },
        {
          id: 3,
          path: 'SurveyPage8'
        }
      ])
      function progress() {
        return ((page.value + 1) / pageLengh()) * 100
      }
      function getPage() {
        if (page.value === pageList.value.length)
          return (page.value = page.value)
        else page.value++
      }

      const swiperOption = ref({
        spaceBetween: 16,
        initialSlide: page.value,
        navigation: {
          nextEl: '.servey-wrap .swiper-button-next',
          prevEl: '.servey-wrap .swiper-button-prev'
        }
      })

      const setPageSwiper = (swiper) => {
        page.value = swiper.activeIndex
      }

      return {
        page,
        pageLengh,
        pageList,
        progress,
        getPage,
        setPageSwiper,
        swiperOption,
        modules: [Navigation]
      }
    }
  }
</script>
