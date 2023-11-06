<template>
  <div class="contents">
    <v-btn @click="funcSns">공유하기 팝업보기</v-btn>
    <DialogSns
      v-model="modal"
      @close="modal = false"
      @kakao="kakaoFnc"
      @facebook="fbFnc"
      @Instagram="insFnc"
      @url="urlFnc"
      @more="moreFnc"
    />
  </div>
</template>
<script>
  import { ref } from 'vue'
  import DialogSns from '@/components/BottomSheetSns.vue'
  export default {
    components: {
      DialogSns
    },
    setup() {
      const modal = ref(false)
      function funcSns() {
        modal.value = true
      }
      function kakaoFnc() {
        alert('공유하기 카카오톡')
      }
      function fbFnc() {
        alert('공유하기 페이스북')
      }
      function insFnc() {
        alert('공유하기 인스타그램')
      }
      function urlFnc() {
        alert('공유하기 URL')
      }
      function moreFnc() {
        alert('공유하기 더보기')
      }
      return {
        modal,
        funcSns,
        kakaoFnc,
        fbFnc,
        insFnc,
        urlFnc,
        moreFnc
      }
    }
  }
</script>
