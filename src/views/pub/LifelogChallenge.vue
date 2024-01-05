<template>
  <slot name="title" v-if="title"></slot>
  <h2 v-else class="tit-03 tit-link">
    <v-btn block variant="text">김건강님을 위한 챌린지</v-btn>
  </h2>
  <div class="swiper-card media-slide mt-2">
    <div class="scroll-container">
      <v-btn
        v-for="swiperCard in swiperCard"
        :key="swiperCard"
        variant="text"
        width="auto"
        class="swiperCard"
        :class="cardClass"
        :ripple="false"
      >
        <v-card :line="2" elevation="0">
          <v-img
            :src="`/assets/images/${swiperCard.src}`"
            cover
            min-height="1"
            aspect-ratio="1"
            width="11.25rem"
            height="7.25rem"
          >
          </v-img>
          <v-card-text>
            <strong class="fs-16 font-weight-bold">{{
              swiperCard.title
            }}</strong>
            <p class="v-card-tags text-grey2 mt-3" v-html="swiperCard.tags"></p>
          </v-card-text>
        </v-card>
      </v-btn>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    props: ['title', 'cardClass'],
    setup() {
      const swiperCard = ref([
        {
          title: '근력향상 전문 챌린지1',
          src: 'dummy-thumb2.jpg',
          tags: '<span>#체중관리</span><span>#근육탄탄</span><span>#근육탄탄</span><span>#근육탄탄</span><span>#근육탄탄</span>'
        },
        {
          title: '요요방지 전문 챌린지',
          src: 'exercise.png',
          tags: '<span>#체중관리</span><span>#근육탄탄</span>'
        },
        {
          title: '챌린지영역이 노출될 예',
          src: 'img-challenge.png',
          tags: '<span>#체중관리</span><span>#근육탄탄</span>'
        },
        {
          title: '근력향상 전문 챌린지',
          src: 'dummy-thumb2.jpg',
          tags: '<span>#체중관리</span><span>#근육탄탄</span><span>#근육탄탄</span>'
        },
        {
          title: '요요방지 전문 챌린지',
          src: 'exercise.png',
          tags: '<span>#체중관리</span><span>#근육탄탄</span>'
        },
        {
          title: '챌린지영역이 노출될 예',
          src: 'img-challenge.png',
          tags: '<span>#체중관리</span><span>#근육탄탄</span>'
        },
        {
          title: '요요방지 전문 챌린지',
          src: 'exercise.png',
          tags: '<span>#체중관리</span><span>#근육탄탄</span>'
        },
        {
          title: '챌린지영역이 노출될 예',
          src: 'img-challenge.png',
          tags: '<span>#체중관리</span><span>#근육탄탄</span>'
        },
        {
          title: '근력향상 전문 챌린지',
          src: 'dummy-thumb2.jpg',
          tags: '<span>#체중관리</span><span>#근육탄탄</span><span>#근육탄탄</span>'
        },
        {
          title: '요요방지 전문 챌린지',
          src: 'exercise.png',
          tags: '<span>#체중관리</span><span>#근육탄탄</span>'
        },
        {
          title: '챌린지영역이 노출될 예',
          src: 'img-challenge.png',
          tags: '<span>#체중관리</span><span>#근육탄탄</span>'
        },
        {
          title: '요요방지 전문 챌린지',
          src: 'exercise.png',
          tags: '<span>#체중관리</span><span>#근육탄탄</span>'
        },
        {
          title: '챌린지영역이 노출될 예',
          src: 'img-challenge.png',
          tags: '<span>#체중관리</span><span>#근육탄탄</span>'
        },
        {
          title: '근력향상 전문 챌린지',
          src: 'dummy-thumb2.jpg',
          tags: '<span>#체중관리</span><span>#근육탄탄</span><span>#근육탄탄</span>'
        },
        {
          title: '요요방지 전문 챌린지',
          src: 'exercise.png',
          tags: '<span>#체중관리</span><span>#근육탄탄</span>'
        },
        {
          title: '챌린지영역이 노출될 예',
          src: 'img-challenge.png',
          tags: '<span>#체중관리</span><span>#근육탄탄</span>'
        }
      ])
      return { swiperCard }
    }
  }
</script>
