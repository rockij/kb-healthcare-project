<template>
  <div class="contents">
    <div class="title-area mb-7">
      <h2 class="subTit-01">
        원하는 인증방식을 선택하고<br />
        일반검강검진 기록을 <br />
        조회하세요
      </h2>
    </div>
    <v-btn
      v-for="(btn, i) in btns"
      :key="i"
      block
      variant="flat"
      rounded="xl"
      height="auto"
      :color="i === 0 ? 'rgba(255, 214, 51, 0.10)' : '#F8F8F8'"
      class="px-4 py-3 mt-4 justify-start text-left"
      @click="selBtn = i"
    >
      <v-img
        :src="`/assets/images/${btn.icon}`"
        width="32"
        class="mr-2"
        alt=""
        transition="none"
      />
      <div class="text-grey lh-1">
        <strong class="text-black fs-16">{{ btn.title }}</strong>
        <p>{{ btn.text }}</p>
      </div>
    </v-btn>
    <v-btn variant="text" class="fs-16 px-0 mt-2" height="44"
      >종합건강검진 결과를 업데이트 해보세요<v-icon
        class="icon-arrow-right ml-1"
    /></v-btn>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const selBtn = ref()
      const btns = ref([
        {
          icon: 'icon-certified-kb.svg',
          title: 'KB국민인증서',
          text: 'KB국민인증서 발급 후 이용 가능 합니다.'
        },
        {
          icon: 'icon-certified-kao.svg',
          title: '카카오톡 간편인증',
          text: '카카오톡 인증서 발급 후 이용 가능합니다.'
        },
        {
          icon: 'icon-certified-nv.png',
          title: '네이버 간편인증',
          text: '네이버 인증서 발급 후 이용 가능합니다.'
        },
        {
          icon: 'icon-certified-tos.png',
          title: 'Toss 간편인증',
          text: '토스 인증서 발급 후 이용 가능합니다.'
        },
        {
          icon: 'icon-certified-pss.svg',
          title: '통신사 패스',
          text: '휴대폰 인증을 통해 본인을 확인합니다.'
        },
        {
          icon: 'icon-certified-smp.png',
          title: '삼성 패스',
          text: '삼성패스 등록 후 이용 가능합니다.'
        },
        {
          icon: 'icon-certified-pac.svg',
          title: '페이코 간편인증',
          text: '페이코 인증서 발급 후 이용 가능 합니다.'
        }
      ])
      return { selBtn, btns }
    }
  }
</script>
