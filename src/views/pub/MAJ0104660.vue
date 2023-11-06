<template>
  <div class="contents qnaview">
    <div class="question-area">
      <p class="text">건강검진 연동이 되지 않아요</p>
      <div class="info-group">
        <span class="date">2023.08.14</span>
        <span class="type">정보연동</span>
      </div>
    </div>
    <div class="detail-area mt-4 d-flex">
      <v-avatar color="#3B4A65" size="28">Q</v-avatar>
      <p class="text">
        인증까지 완료했는데, 건강검진 정보가 연동이 되지 않아요
      </p>
    </div>
    <!-- 2023-10-23 이미지 있을경우 -->
    <div class="mt-4 img-box">
      <img src="@/assets/images/img-food.png" alt="" />
    </div>
    <!-- 답변완료시 -->
    <div class="withanswer" v-if="$route.name === 'MAJ0104660'">
      <div class="answer-area d-flex mt-4">
        <v-avatar color="#FFD338" size="28" class="font-weight-bold"
          >A</v-avatar
        >
        <p class="text">
          안녕하세요. KB헬스케어 입니다. <br />
          건강검진 정보연동이 바로 되지 않아 당황스러우셨을 것 같아요. <br />
          <br />
          먼저 아래 방법으로 국민건강보험 연결을 해보시겠어요?
        </p>
      </div>
      <div class="extra-question d-flex">
        <p class="text">추가 문의 있으신가요?</p>
        <v-btn variant="outlined" rounded="lg" class="mt-4"
          >추가 문의하기</v-btn
        >
      </div>
    </div>
    <!-- 접수대기중에만 버튼 -->
    <div class="btn-bottom" v-if="$route.name === 'MAJ0104660Waiting'">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-cancel">삭제하기</v-btn>
        <v-btn variant="text" height="56px" class="btn-summit">수정하기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router'
  import { ref } from 'vue'
  export default {
    setup() {
      const withAnswer = false
      return {
        withAnswer
      }
    }
  }
</script>

<style lang="scss" scoped></style>
