<template>
  <div class="contents">
    <div class="question-area">
      <v-chip label size="small" class="chip-default mb-1">일반</v-chip>
      <p class="text mt-2">스타에 대해 궁금해요</p>
    </div>
    <div class="detail-area mt-4 d-flex">
      <p>인증까지 완료했는데, 건강검진 정보가 연동이 되지 않아요</p>
    </div>
    <div class="text-center mt-16">
      <div class="text-info-black">더 궁금한 점이 있으신가요?</div>
      <v-btn
        variant="flat"
        rounded="lg"
        height="40"
        class="btn-grey mt-4"
        @click="goPath('MAJ0104670')"
      >
        1:1 문의하기
      </v-btn>
    </div>
  </div>
</template>

<script>
  import router from '@/router'

  export default {
    setup() {
      function goPath(val) {
        router.push(val)
      }
      return {
        goPath
      }
    }
  }
</script>

<style lang="scss" scoped></style>
