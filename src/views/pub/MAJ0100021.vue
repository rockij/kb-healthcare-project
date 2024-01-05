<template>
  <div class="contents text-center pt-11 px-0">
    <p class="font-weight-bold text-grey3">조금만 기다려주세요!</p>
    <h2 class="font-weight-bold ff-second fs-26 lh-7 mt-2 mb-12">
      세상에 공개되지 않았던
      <p class="text-blue">건강관리 꿀팁 모음</p>
    </h2>
    <div class="marquee" style="--size: 8.5rem; --gap: 1rem; --duration: 13s">
      <div class="marquee-group">
        <img
          v-for="(item, i) in imgList"
          :key="i"
          :src="`/assets/images/img-comm-bn0${i}.svg`"
          :alt="item.alt"
        />
      </div>
      <div aria-hidden="true" class="marquee-group">
        <img
          v-for="(item, i) in imgList"
          :key="i"
          :src="`/assets/images/img-comm-bn0${i}.svg`"
          :alt="item.alt"
        />
      </div>
    </div>
    <!-- //flow-right -->
    <div
      class="marquee marquee-reverse mt-5"
      style="--size: 8.5rem; --gap: 1rem; --duration: 13s"
    >
      <div class="marquee-group">
        <img
          v-for="(item, i) in imgList"
          :key="i"
          :src="`/assets/images/img-comm-bn0${i}.svg`"
          :alt="item.alt"
        />
      </div>
      <div aria-hidden="true" class="marquee-group">
        <img
          v-for="(item, i) in imgList"
          :key="i"
          :src="`/assets/images/img-comm-bn0${i}.svg`"
          :alt="item.alt"
        />
      </div>
    </div>
    <!-- //flow-left -->
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const imgList = ref([
        {
          alt: '비밀 보장'
        },
        {
          alt: '라이프로그 공유'
        },
        {
          alt: '인플루언서 도전'
        },
        {
          alt: '손쉬운 질문'
        },
        {
          alt: '건강 트렌드'
        },
        {
          alt: '내 건강 자랑'
        }
      ])
      return { imgList }
    }
  }
</script>
