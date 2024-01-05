<template>
    <v-dialog v-model="dialog" class="modal-dialog common-popup">
        <v-card>
        <div class="modal-body">
            <div class="answer-items">
                <v-avatar size="100">
                    <template v-if="congrats">
                        <img src="/assets/images/icon-evt-congrats.svg" alt="" />
                    </template>
                    <template v-if="regret">
                        <img src="/assets/images/icon-evt-regret.svg" alt="" />
                    </template>
                    <template v-if="complete">
                        <img src="/assets/images/icon-evt-complete.svg" alt="" />
                    </template>
                    <template v-if="attendance">
                        <img src="/assets/images/icon-evt-attendance.svg" alt="" />
                    </template>
                    <template v-if="noAnswer">
                        <img src="/assets/images/icon-evt-no-answer.svg" alt="" />
                    </template>
                    <template v-if="wrongAnswer">
                        <img src="/assets/images/icon-evt-wrong-answer.svg" alt="" />
                    </template>
                    <template v-if="inviteCode">
                        <img src="/assets/images/icon-evt-invite-code.svg" alt="" />
                    </template>
                </v-avatar>
                <template v-if="congrats">
                    <div class="evt-modal-contents">
                        <strong class="txt1">축하합니다</strong>
                        <span class="txt2">상품명이 지급되었습니다</span>
                        <span class="txt3">지급된 선물은 선물함에서<br>확인 할 수 있습니다</span>
                    </div>
                </template>
                <template v-if="regret">
                    <div class="evt-modal-contents">
                        <strong class="txt1">아쉬워요</strong>
                        <span class="txt2">선착순 인원이 다 찼어요</span>
                        <span class="txt3">다음 이벤트를 기대해주세요</span>
                    </div>
                </template>
                <template v-if="complete">
                    <div class="evt-modal-contents">
                        <strong class="txt1">이벤트 응모 완료</strong>
                        <span class="txt2">이벤트에 응모되었습니다</span>
                    </div>
                </template>
                <template v-if="attendance">
                    <div class="evt-modal-contents">
                        <strong class="txt1">이번 달 하루도 빠짐없이<br> 출석하였습니다</strong>
                        <span class="txt2">000P가 지급되었습니다</span>
                    </div>
                </template>
                <template v-if="noAnswer">
                    <div class="evt-modal-contents">
                        <strong class="txt1">답변이 선택되지<br>않았습니다</strong>
                        <span class="txt2">답변 중 하나를 선택해 주세요</span>
                    </div>
                </template>
                <template v-if="wrongAnswer">
                    <div class="evt-modal-contents">
                        <strong class="txt1">정답이 아닙니다</strong>
                        <span class="txt2">다시 시도해 주세요</span>
                        <span class="txt3">Tip. 힌트를 확인해 보세요!</span>
                    </div>
                </template>
                <template v-if="inviteCode">
                    <div class="evt-modal-contents">
                        <span class="txt2">이미 초대코드를 입력했거나<br>가입후 24시간이 지나<br>진입이 불가능합니다.</span>
                        <span class="txt3">친구 초대 혜택도 많으니<br>많이 참여해 주세요</span>
                    </div>
                </template>
            </div>
        </div>
        <v-card-actions class="d-flex justify-center">
            <v-btn
            variant="flat"
            color="#3B4A65"
            class="btn-close"
            @click="dialog = false"
            >
                <img src="/assets/images/icon-close.svg" alt="" />
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>

    <div>
        <v-btn
          variant="flat"
          rounded="lg"
          height="32"
          color="#F2F4F6"
          class="text-primary px-3 ml-2"
          @click="reset(), dialog = true, congrats = true"
          >축하</v-btn
        >
        <br><br>
        <v-btn
          variant="flat"
          rounded="lg"
          height="32"
          color="#F2F4F6"
          class="text-primary px-3 ml-2"
          @click="reset(), dialog = true, regret = true"
          >아쉬움</v-btn
        > 
        <br><br>
        <v-btn
          variant="flat"
          rounded="lg"
          height="32"
          color="#F2F4F6"
          class="text-primary px-3 ml-2"
          @click="reset(), dialog = true, complete = true"
          >응모완료</v-btn
        > 
        <br><br>
        <v-btn
          variant="flat"
          rounded="lg"
          height="32"
          color="#F2F4F6"
          class="text-primary px-3 ml-2"
          @click="reset(), dialog = true, attendance = true"
          >출석완료</v-btn
        > 
        <br><br>
        <v-btn
          variant="flat"
          rounded="lg"
          height="32"
          color="#F2F4F6"
          class="text-primary px-3 ml-2"
          @click="reset(), dialog = true, noAnswer = true"
          >답변선택안함</v-btn
        > 
        <br><br>
        <v-btn
          variant="flat"
          rounded="lg"
          height="32"
          color="#F2F4F6"
          class="text-primary px-3 ml-2"
          @click="reset(), dialog = true, wrongAnswer = true"
          >정답이아닙니다</v-btn
        > 
        <br><br>
        <v-btn
          variant="flat"
          rounded="lg"
          height="32"
          color="#F2F4F6"
          class="text-primary px-3 ml-2"
          @click="reset(), dialog = true, inviteCode = true"
          >초대코드</v-btn
        > 
    </div>
</template>

<script>
  import { ref, reactive, onMounted } from 'vue'
  export default {
    setup() {
      const dialog = ref(false)
      const congrats = ref(false)
      const regret = ref(false)
      const complete = ref(false)
      const attendance = ref(false)
      const noAnswer = ref(false)
      const wrongAnswer = ref(false)
      const inviteCode = ref(false)

      const reset = () => {
        congrats.value = false, 
        regret.value = false, 
        complete.value = false, 
        attendance.value = false, 
        noAnswer.value = false, 
        wrongAnswer.value = false, 
        inviteCode.value = false
      }

      return {
        dialog,
        congrats,
        regret,
        complete,
        attendance,
        noAnswer,
        wrongAnswer,
        inviteCode,
        reset
      }
    }
  }
</script>

<style lang="scss" scoped></style>
