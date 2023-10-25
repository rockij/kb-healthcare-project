<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">증상 부위를 선택해 주세요</p>
      <v-btn variant="text" class="slink">신체부위 선택</v-btn>
    </div>
    <h2 class="tit-03 mt-8 pb-4">머리 · 목 · 어깨</h2>
    <div class="tabs-simple2">
      <v-btn
        v-for="tab in headBtns"
        :key="tab.id"
        variant="text"
        :aria-selected="headBtn === tab.id ? 'true' : 'false'"
        @click="headSelected(tab.id)"
        :ripple="false"
        >{{ tab.text }}</v-btn
      >
    </div>
    <div class="section-page mt-8">
      <h2 class="tit-03 pb-4">가슴 · 배 · 팔</h2>
      <div class="tabs-simple2">
        <v-btn
          v-for="tab in upbodyBtns"
          :key="tab.id"
          variant="text"
          :aria-selected="upbodyBtn === tab.id ? 'true' : 'false'"
          @click="upbodySelected(tab.id)"
          class="fs-16"
          :ripple="false"
          >{{ tab.text }}</v-btn
        >
      </div>
    </div>
    <div class="section-page">
      <h2 class="tit-03 pb-4">허리 · 엉덩이, 생식기</h2>
      <div class="tabs-simple2">
        <v-btn
          v-for="tab in pelvisBtns"
          :key="tab.id"
          variant="text"
          :aria-selected="pelvisBtn === tab.id ? 'true' : 'false'"
          @click="pelvisSelected(tab.id)"
          class="fs-16"
          :ripple="false"
          >{{ tab.text }}</v-btn
        >
      </div>
    </div>
    <div class="section-page">
      <h2 class="tit-03 pb-4">다리 · 발</h2>
      <div class="tabs-simple2">
        <v-btn
          v-for="tab in lowerbodyBtns"
          :key="tab.id"
          variant="text"
          :aria-selected="lowerbodyBtn === tab.id ? 'true' : 'false'"
          @click="lowerbodySelected(tab.id)"
          class="fs-16"
          :ripple="false"
          >{{ tab.text }}</v-btn
        >
      </div>
    </div>
    <div class="section-page">
      <h2 class="tit-03 pb-4">피부</h2>
      <div class="tabs-simple2">
        <v-btn
          :ripple="false"
          variant="text"
          :aria-selected="skinBtn === true ? 'true' : 'false'"
          @click="btnReset(), (skinBtn = true), (buttonActive = false)"
          class="fs-16"
          >피부문제, 가려움</v-btn
        >
      </div>
    </div>
    <div class="section-page">
      <h2 class="tit-03 pb-4">생식기</h2>
      <div class="tabs-simple2">
        <v-btn
          :ripple="false"
          variant="text"
          :aria-selected="genital === true ? 'true' : 'false'"
          @click="btnReset(), (genital = true), (buttonActive = false)"
          class="fs-16"
          >비뇨, 전립선</v-btn
        >
      </div>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          :disabled="buttonActive"
          >확인</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const buttonActive = ref(true)
      const headBtn = ref()
      const headBtns = [
        {
          id: 1,
          text: '머리 위 (뇌)'
        },
        {
          id: 2,
          text: '귀'
        },
        {
          id: 3,
          text: '눈'
        },
        {
          id: 4,
          text: '목안'
        },
        {
          id: 5,
          text: '코'
        },
        {
          id: 6,
          text: '목,경추'
        },
        {
          id: 7,
          text: '입'
        },
        {
          id: 8,
          text: '어깨'
        }
      ]
      function headSelected(val) {
        btnReset()
        headBtn.value = val
        buttonActive.value = false
      }
      const upbodyBtn = ref()
      const upbodyBtns = [
        {
          id: 1,
          text: '폐,심장'
        },
        {
          id: 2,
          text: '위'
        },
        {
          id: 3,
          text: '하복부'
        },
        {
          id: 4,
          text: '비뇨 전립선'
        },
        {
          id: 5,
          text: '팔꿈치'
        },
        {
          id: 6,
          text: '손목,손'
        },
        {
          id: 7,
          text: '손가락'
        }
      ]
      function upbodySelected(val) {
        btnReset()
        upbodyBtn.value = val
        buttonActive.value = false
      }
      const pelvisBtn = ref()
      const pelvisBtns = [
        {
          id: 1,
          text: '요추'
        },
        {
          id: 2,
          text: '항문'
        },
        {
          id: 3,
          text: '엉덩이'
        },
        {
          id: 4,
          text: '설사'
        },
        {
          id: 5,
          text: '변비'
        }
      ]
      function pelvisSelected(val) {
        btnReset()
        pelvisBtn.value = val
        buttonActive.value = false
      }
      const lowerbodyBtn = ref()
      const lowerbodyBtns = [
        {
          id: 1,
          text: '다리'
        },
        {
          id: 2,
          text: '무릎'
        },
        {
          id: 3,
          text: '발목,발'
        },
        {
          id: 4,
          text: '발바닥'
        }
      ]
      function lowerbodySelected(val) {
        btnReset()
        lowerbodyBtn.value = val
        buttonActive.value = false
      }
      const skinBtn = ref(false)
      const genital = ref(false)

      function btnReset() {
        headBtn.value = ''
        upbodyBtn.value = ''
        pelvisBtn.value = ''
        lowerbodyBtn.value = ''
        skinBtn.value = false
        genital.value = false
      }

      return {
        buttonActive,
        headBtn,
        headBtns,
        headSelected,
        upbodyBtn,
        upbodyBtns,
        upbodySelected,
        pelvisBtn,
        pelvisBtns,
        pelvisSelected,
        btnReset,
        lowerbodyBtn,
        lowerbodyBtns,
        lowerbodySelected,
        skinBtn,
        genital
      }
    }
  }
</script>
