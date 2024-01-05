<template>
  <swiper
    :pagination="true"
    :loop="true"
    :modules="modules"
    :space-between="16"
    class="baner-challenge-slide"
  >
    <swiper-slide v-for="(item, i) in InsightList" :key="i">
      <v-btn
        variant="outlined"
        block
        color="#eee"
        rounded="xl"
        @click.stop="goPath(item.link)"
        height="220"
      >
        <strong class="fs-16 d-flex align-center">
          <v-img
            :src="`/assets/images/${item.icon}`"
            class="flex-0-0 mr-1"
            width="24"
            height="24"
            alt=""
            transition="none"
          />
          {{ item.stit }}
          <v-icon
            v-if="!item.linkText"
            class="draw-arrow-right ml-1"
            color="#444"
          />
        </strong>
        <div class="d-flex">
          <div class="txbox" :class="item.txboxClass">
            <strong class="titex fs-20">{{ item.title }}</strong>
            <p class="fs-20 stext" v-html="item.text"></p>
          </div>
          <v-img :src="`/assets/images/${item.img}`" alt="" class="figure" />
        </div>
        <div v-if="item.linkText" class="btn-visual mt-4">
          {{ item.linkText }}
          <v-icon class="draw-arrow-right ml-1" color="#888" />
        </div>
        <div
          v-if="item.chips"
          class="fs-13 mt-4"
          :class="`text-${item.chipsColor}`"
        >
          {{ item.text2
          }}<v-chip
            label
            size="small"
            :color="item.chipsColor"
            class="chip-default chip-color ml-2"
          >
            {{ item.chips }}
          </v-chip>
        </div>
      </v-btn>
    </swiper-slide>
    <!-- 건강날씨 -->
    <swiper-slide>
      <v-btn
        variant="outlined"
        block
        color="#eee"
        rounded="xl"
        @click.stop="$emit('update:link1')"
        height="220"
      >
        <strong class="fs-16 d-flex align-center">
          <v-img
            :src="`/assets/images/img-mbn-home04-1.svg`"
            class="flex-0-0 mr-1"
            width="24"
            height="24"
            alt=""
            transition="none"
          />
          건강 날씨
          <!--<v-icon class="draw-arrow-right ml-1" color="#444" />-->
        </strong>
        <div class="d-flex">
          <div class="txbox">
            <!--<strong class="titex fs-20">하루를 시작해 봐요!</strong>-->
            <p class="fs-20 stext">
              비 오는 날씨와 함께<br />시원하고 낭만적인
            </p>
          </div>
          <v-img
            :src="`/assets/images/img-mbn-home04.png`"
            alt=""
            class="figure"
          />
        </div>
        <div class="fs-13 mt-4 text-primary">
          아침최저기온<v-chip
            label
            size="small"
            :color="'primary'"
            class="chip-default chip-color ml-2"
          >
            영하 12도 이하
          </v-chip>
        </div>
      </v-btn>
    </swiper-slide>
    <!-- //건강날씨 -->
    <!-- 질환주의보 -->
    <swiper-slide>
      <v-btn
        variant="outlined"
        block
        color="#eee"
        rounded="xl"
        @click.stop="$emit('update:link2')"
        height="220"
      >
        <strong class="fs-16 d-flex align-center">
          <v-img
            :src="`/assets/images/img-mbn-home05-1.svg`"
            class="flex-0-0 mr-1"
            width="24"
            height="24"
            alt=""
            transition="none"
          />
          질환주의보
          <!--<v-icon class="draw-arrow-right ml-1" color="#444" />-->
        </strong>
        <div class="d-flex">
          <div class="txbox">
            <!--<strong class="titex fs-20">감기 조심하세요!</strong>-->
            <p class="fs-20 stext">외출 시 따뜻하게<br />입으셔야 해요</p>
          </div>
          <v-img
            :src="`/assets/images/img-mbn-home05.png`"
            alt=""
            class="figure"
          />
        </div>
        <div class="fs-13 mt-4 text-error">
          감기가능지수<v-chip
            label
            size="small"
            :color="'error'"
            class="chip-default chip-color ml-2"
          >
            매우높음
          </v-chip>
        </div>
      </v-btn>
    </swiper-slide>
    <!-- //질환주의보 -->
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
      const InsightList = ref([
        {
          stit: '서비스안내',
          //title: '똑똑한 건강관리 시작!',
          text: '건강검진 연동하고<br>포인트 받으세요',
          icon: 'img-mbn-home01-1.svg',
          img: 'img-mbn-home01.png',
          linkText: '건강검진 연결하기',
          link: '/'
        },
        {
          stit: '건강 분석',
          //title: '혈당개선 전문 챌린지',
          text: 'AI 코치가<br>피드백을 보냈어요',
          icon: 'img-mbn-home02-1.svg',
          img: 'img-mbn-home02.png',
          linkText: '메시지 확인하기',
          link: '/'
        },
        {
          stit: '건강 캘린더',
          //title: '오케어 이용자 평균 건강',
          text: '챌린지를<br>계속 도전할 수 있어요!',
          icon: 'img-mbn-home03-1.svg',
          img: 'img-mbn-home03.png',
          linkText: '지금 다시 하기',
          link: '/'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      return { InsightList, goPath, modules: [Autoplay, Pagination] }
    }
  }
</script>
