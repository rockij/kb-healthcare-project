<template>
  <div class="contents text-center pt-11 px-0">
    <p class="font-weight-bold text-grey3">조금만 기다려주세요!</p>
    <h2 class="font-weight-bold ff-second fs-26 lh-7 mt-2">
      내가 모은 리워드 포인트로<br />구매하는 다양한 건강 식품
    </h2>
    <div class="box-rounded-point mt-7">
      건강관리로 모은 내 포인트
      <strong class="d-block mt-2 text-blue fs-26">3,829P</strong>
    </div>
    <div
      class="marquee mt-12"
      style="--size: 8.5rem; --gap: 1rem; --duration: 18s"
    >
      <div class="marquee-group">
        <img
          v-for="(item, i) in imgList"
          :key="i"
          :src="`/assets/images/img-comer-bn0${i}.svg`"
          :alt="item.alt"
        />
        <img
          v-for="(item, i) in imgList"
          :key="i"
          :src="`/assets/images/img-comer-bn0${i}.svg`"
          :alt="item.alt"
        />
      </div>
      <div aria-hidden="true" class="marquee-group">
        <img
          v-for="(item, i) in imgList"
          :key="i"
          :src="`/assets/images/img-comer-bn0${i}.svg`"
          :alt="item.alt"
        />
        <img
          v-for="(item, i) in imgList"
          :key="i"
          :src="`/assets/images/img-comer-bn0${i}.svg`"
          :alt="item.alt"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const imgList = ref([
        {
          alt: '심리 검사'
        },
        {
          alt: '건강 식품'
        },
        {
          alt: '건강 기기'
        }
      ])
      return { imgList }
    }
  }
</script>
