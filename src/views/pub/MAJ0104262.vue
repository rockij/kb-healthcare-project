<template>
  <div class="contents">
    <div class="tab-line"> <!-- 20231205 - 수정 -->
      <v-tabs align-tabs="start" v-model="tab">
        <v-tab
          v-for="btn in stateBtn"
          :key="btn.value"
          :value="btn.value"
          :ripple="false"
        >
          {{ btn.text }}
        </v-tab>
      </v-tabs>
    </div>

    <div class="ui-evt-invite">
      <div class="ui-evt-invite-v reg">
        <!-- 수정 : 20231107 -->
        <span class="tag">친구 초대코드 이벤트</span>
        <p class="txt1">나를 위해 친구가 챙겨준<br />포인트 받아가세요</p>
        <p class="txt2">나와 친구 모두 <strong>2,000P씩</strong></p>
        <!-- 수정 : 20231107 -->
        <div class="evt-bg-invite-bg"></div>
        <p class="txt3">
          친구가 챙겨준 초대코드를 입력하면<br />나와 친구에게 즉시 포인트를
          적립해드려요.
        </p>
        <!-- 수정 : 20231107 -->
        <div class="invite-code-form">
          <v-text-field
            class="input-hint textfield-default"
            v-model="caption"
            label="초대코드"
            required
            persistent-placeholder
            variant="outlined"
            placeholder="초대코드를 입력하세요"
            clearable
            hint="안내문구 영역입니다."
          ></v-text-field>
          <div class="btn-area2">
            <v-btn
              variant="text"
              height="48px"
              class="bdr-8 fs-16 font-weight-bold skip"
              block
              >입력완료</v-btn
            >
          </div>
          <div class="btn-set-share">
            <!-- 추가    : 20231107 -->
            <v-btn variant="outlined" rounded="lg" class="btn-share">
              <template v-slot:prepend>
                <img src="/assets/images/icon-share.svg" alt="" />
              </template>
              공유하기
            </v-btn>
          </div>
        </div>
      </div>
      <div class="ui-evt-invite-guide">
        <h2>유의사항</h2>
        <ul>
          <li>
            초대 받은 친구의 초대코드 입력기한 : 가입 시점으로부터 24시간 이내
          </li>
          <li>적립금 유효기간 : 지급일로부터 6개월 후에 소멸됩니다.</li>
          <li>
            추천인 코드 기입 누락 또는 오기재 시 포인트는 지급되지 않습니다.
          </li>
          <li>
            혜택을 위해 동일인이 중복 가입할 경우 적립금이 지급되지 않을 수
            있습니다.
          </li>
          <li>
            기존에 친구 초대로 가입한 친구가 탈퇴 후 다시 친구 초대를 통해
            재가입할 경우, 적립금은 지급되지 않습니다.
          </li>
          <li>
            해당 이벤트는 당사 사정에 따라 사전 공지없이 변경되거나 조기종료 될
            수 있습니다.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive, ref } from 'vue'
  export default {
    setup() {
      const tab = ref('1')
      const stateBtn = reactive([
        {
          value: 0,
          text: '내 초대코드'
        },
        {
          value: 1,
          text: '초대코드 입력       '
        }
      ])

      return {
        tab,
        stateBtn
      }
    }
  }
</script>

<style lang="scss" scoped></style>
