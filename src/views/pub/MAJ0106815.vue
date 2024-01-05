<template>
  <div class="contents">
    <div class="per-test-intro">
      <div class="per-test-intro-head">
        <h2>성격유형검사</h2>
        <p>내가보는 나와<br />다른사람이 보는 나는 같을까요?</p>
      </div>
      <div class="per-test-intro-cont">
        <div class="per-img">
          <v-img src="/assets/images/per-test1.svg"></v-img
          ><!-- 202231127 : 수정 -->
        </div>
        <div class="btn-area">
          <v-btn variant="text" class="btn-code" @click="dialogCode = true"
            >초대코드 입력하기</v-btn
          >
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
              <dt>성격유형검사란?</dt>
              <dd>
                성격 특성이 내 생활에 미치는 영향을 알아볼 수 있어요. 직업과
                대인관계에 영향을 많이 주는 5가지 특성을 자세히 분석해서
                알려드려요.
              </dd>
              <dt>검사대상 및 문항</dt>
              <dd>
                어른이라면 누구나 할 수 있어요.<br />
                성격 유형을 판단하는 27개의 문항으로 구성돼요.<br />
                시간은 약 5분 정도 걸려요.
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
          >확인</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog
    activator
    v-model="dialogCode"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">초대코드입력</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialogCode = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <v-text-field
            class="input-hint textfield-default"
            v-model="caption"
            label="초대 코드 입력"
            required
            persistent-placeholder
            variant="outlined"
            placeholder="초대코드를 입력해주세요"
            clearable
          ></v-text-field>
        </div>
      </div>

      <v-card-actions>
        <v-btn
          height="48px"
          @click="dialogCode = false"
          class="bdr-8 btn-yellow"
          block
          >확인</v-btn
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
      const dialogCode = ref(false)

      return { dialog, dialogCode }
    }
  }
</script>

<style lang="scss" scoped></style>
