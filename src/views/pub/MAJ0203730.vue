dt
<template>
  <div class="contents">
    <div class="life-calendar">
      <VCalendar :attributesValue="calendarAttr" :selectToday="null" />
    </div>
    <div class="py-6">
      <v-btn
        block
        variant="outlined"
        rounded="lg"
        :ripple="false"
        class="btn-select-arrow"
        color="#26282C"
        height="48"
      >
        <span class="text fs-16 font-weight-bold">
          KB손해보험 본사
          <img src="/assets/images/icon-arrow-down2.svg" alt="검색" />
        </span>
      </v-btn>
    </div>
    <div class="total">총 {{ menuList.length }} 메뉴</div>

    <h2 class="tit-03 pb-0 lh-4 mt-6">2024.01.03(목)</h2>
    <div class="food-menu-list">
      <div
        class="box-rounded card-food"
        v-for="item in menuList"
        :key="item.id"
      >
        <div class="chip-area mb-2">
          <v-chip
            label
            size="small"
            color="primary"
            class="chip-default chip-color"
          >
            <template v-if="item.type === 1">조식</template>
            <template v-if="item.type === 2">중식</template>
            <template v-if="item.type === 3">석식</template>
          </v-chip>
          <div class="tit">{{ item.corner }}</div>
        </div>

        <swiper
          class="card-swiper"
          :pagination="true"
          :modules="modules"
          v-if="item.img"
          virtual
        >
          <span class="swiper-counter" v-if="item.img.length > 1"
            >+{{ item.img.length - 1 }}</span
          >
          <swiper-slide v-for="(img, i) in item.img" :key="i">
            <v-img
              aspect-ratio="16/9"
              cover
              min-height="1"
              :src="`/assets/images/${img}`"
              :virtualIndex="i"
              alt=""
            ></v-img>
          </swiper-slide>
        </swiper>
        <dl :class="['dl dl-table', { 'mt-4': item.img?.length > 1 }]">
          <dt>메인메뉴</dt>
          <dd class="tit-01 pb-0">{{ item.foodNm }}</dd>
          <dt>서브메뉴</dt>
          <dd class="content">{{ item.text }}</dd>
          <dt>총 칼로리</dt>
          <dd class="calories">{{ item.calories }}kcal</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router'
  import Nodata from '@/components/nodata/Nodata.vue'
  import VCalendar from '@/components/VCalendar.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination } from 'swiper/modules'
  import { Virtual } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  import { ref } from 'vue'
  export default {
    components: {
      Nodata,
      VCalendar,
      Swiper,
      SwiperSlide
    },
    setup() {
      const menuList = ref([
        {
          id: 0,
          type: 1,
          corner: 'A코너',
          foodNm: '산채고추장볶음밥&후라이',
          text: '쌀밥, 떡갈비구이, 베이비채소, 토마토 연두부카프레제, 콩나물파프리카냉채, 두부동그랑땡&케찹',
          calories: 933
        },
        {
          id: 1,
          type: 2,
          corner: '샐러드바',
          foodNm: '들깨 칼국수',
          text: '쌀밥, 떡갈비구이, 베이비채소, 토마토 연두부카프레제, 콩나물파프리카냉채, 두부동그랑땡&케찹',
          img: [
            'bigimage.jpg',
            'dummy-thumb2.jpg',
            'img-food.png',
            'dummy-food.png'
          ],
          calories: 300
        },
        {
          id: 2,
          type: 3,
          corner: '샐러드바',
          foodNm: '들깨 칼국수',
          text: '쌀밥, 떡갈비구이, 베이비채소, 토마토 연두부카프레제, 콩나물파프리카냉채, 두부동그랑땡&케찹',
          img: ['bigfood.jpg'],
          calories: 300
        }
      ])

      const calendarAttr = ref([
        {
          key: 'today',
          dates: [new Date()],
          content: { class: 'vc-today' }
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 10, 1)]
        },
        {
          content: { class: 'vc-schedule' },
          dates: [new Date(2023, 9, 10)]
        }
      ])

      function goPath(val) {
        router.push(val)
      }

      return {
        menuList,
        calendarAttr,
        goPath,
        modules: [Pagination, Virtual]
      }
    }
  }
</script>
