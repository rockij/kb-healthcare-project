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
      <!-- <div class="editor_container">
        <ul>
          <li>ul test1</li>
          <li>ul test2</li>
          <li>ul test3</li>
        </ul>
        <ol>
          <li>ol test1</li>
          <li>ol test2</li>
          <li>ol test3</li>
        </ol>
        <figure class="table" style="width:69.6%;">
          <table class="ck-table-resized">
              <colgroup><col style="width:19.06%;"><col style="width:28.89%;"><col style="width:52.05%;"></colgroup>
              <tbody>
                  <tr>
                      <td>
                          테이블
                      </td>
                      <td>
                          테스트1
                      </td>
                      <td>
                          테스트2
                      </td>
                  </tr>
                  <tr>
                      <td>
                          당첨자
                      </td>
                      <td>
                          임대선
                      </td>
                      <td>
                          임대선
                      </td>
                  </tr>
              </tbody>
          </table>
      </figure>
      </div> -->
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
          <v-toolbar-title class="modal-title">답변 선택</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false" class="btn-modal-close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="modal-body">
          <div class="flex-shrink-0 modal-body-container">
            <div class="event-quiz-answer">
              <v-radio-group class="radio-answer-group">
                <v-radio
                  v-for="list in answerList"
                  :key="list.id"
                  :label="`answerRdo-${list.id}`"
                  :value="list.id"
                  class="radio-basic"
                >
                  <template v-slot:label>{{ list.label }}</template>
                </v-radio>
              </v-radio-group>
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
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)
      const notifications = ref(false)
      const sound = ref(true)
      const widgets = ref(false)

      const answerList = reactive([
        {
          id: 1,
          label: '당뇨'
        },
        {
          id: 2,
          label: '디스크'
        },
        {
          id: 3,
          label: '치질'
        },
        {
          id: 4,
          label: '무좀'
        }
      ])

      return { dialog, notifications, sound, widgets, answerList }
    }
  }
</script>

<style lang="scss" scoped></style>
