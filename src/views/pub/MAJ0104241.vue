<template>
  <div class="contents">
    <div class="evt-temp">
      <div class="evt-temp-img">
        <img
          src="/assets/images/event-quiz1.png"
          alt="퀴즈풀면 특별한 선물이 팡팡!, 룰렛만 돌려도 포인트가 쏟아진다!, 2023.09.01 ~ 2023.09.30"
        />
      </div>
      <div class="evt-temp-img">
        <img
          src="/assets/images/event-attend2.png"
          alt="유의사항 : 이벤트 주관사의 사정으로 이벤트 내용이 변경되거나 조기 종료 될 수 있습니다."
        />
      </div>
    </div>
    <div class="btn-share">
      <v-btn variant="outlined" rounded="lg" class="btn-share">
        <template v-slot:prepend>
          <img src="/assets/images/icon-share.svg" alt="" />
        </template>
        공유하기
      </v-btn>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="btn-cancel">힌트 보기</v-btn>
        <v-btn variant="text" height="56" class="btn-summit"
          >정답 제출하기</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
