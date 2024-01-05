<template>
  <div class="contents">
    <div class="per-test-intro">
      <div class="per-test-intro-head">
        <h2>마음건강검사</h2>
        <p>내 마음 건강은 안녕한가요?<br />마음 챙김 도와드릴게요</p>
      </div>
      <div class="per-test-intro-cont">
        <div class="per-img">
          <v-img src="/assets/images/per-test2.svg"></v-img
          ><!-- 202231127 : 수정 -->
        </div>
      </div>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56" class="btn-cancel"
          >결과 다시보기</v-btn
        >
        <v-btn
          variant="text"
          height="56"
          class="btn-summit"
          @click="dialog = true"
          >검사 시작하기</v-btn
        >
      </div>
    </div>
  </div>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">검사안내</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="ui-guide-list">
            <dl>
              <dt>마음건강검사란?</dt>
              <dd>정신건강 관련 질문을 통해 마음 건강을 알 수 있어요.</dd>
              <dt>이런 분께 추천해요</dt>
              <dd>
                스트레스에 시달리는 학생 및 직장인 평소 불안감이나 우울감이
                있으신 분, 쉽게 잠에 들지 못하는 분
              </dd>
              <dt>검사대상 및 문항</dt>
              <dd>
                전 연령 누구나 할 수 있어요.<br />
                10개 영역 40문항으로 구성돼요.<br />
                시간은 약 10분 정도 걸려요.
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn
          height="48px"
          @click="dialog = false"
          class="bdr-8 btn-yellow"
          block
          >시작하기</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const dialog = ref(false)

      return { dialog }
    }
  }
</script>

<style lang="scss" scoped></style>
