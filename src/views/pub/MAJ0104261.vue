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
      <div class="ui-evt-invite-v">
        <span class="tag">친구 초대 이벤트</span>
        <p class="txt1">바쁜 일상을 사는 친구에게<br />건강을 선물하세요!</p>
        <p class="txt2">응원 포인트 최대 <strong>60,000P</strong> 적립!!</p>
        <!-- 수정 : 20231107 -->
        <div class="evt-bg-invite-bg2"></div>
        <!-- 수정 : 20231107 -->
        <p class="txt3">
          오케어로 함께 건강을 챙겨보세요.<br />친구들이 초대코드 입력할 시
          <strong>2,000P</strong>
        </p>
        <div class="invite-code">
          <div class="my-code">
            <span>나의 초대코드</span>
            <strong>BQT7TU</strong>
          </div>
          <div class="btn-set">
            <v-btn variant="text" class="btn-copy">복사하기</v-btn>
          </div>
        </div>
      </div>
      <div class="ui-evt-invite-item">
        <h2>내가 받는 혜택</h2>
        <div class="my-benefit">
          <div class="my-benefit-item">
            <h3><span>하나</span>무제한 포인트 적립</h3>
            <p>
              친구들이 초대코드를 입력할 때마다<br />
              <strong>2,000P</strong> 무제한 즉시 적립
            </p>
          </div>
          <div class="my-benefit-item">
            <h3><span>둘</span>최대 6,000P 추가 적립</h3>
            <p>
              더 많은 친구들의 건강을 챙겨주면<br />
              <strong>최대 60,000P 추가 적립</strong>
            </p>
            <ul>
              <li>
                <span>30회</span>
                <strong>10,000P</strong>
              </li>
              <li>
                <span>50회</span>
                <strong>20,000P</strong>
              </li>
              <li>
                <span>100회</span>
                <strong>30,000P</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="ui-evt-invite-item">
        <h2>친구초대 이벤트<br />참여방법</h2>
        <div class="invite-process">
          <ol>
            <li>
              <span class="num">1</span>
              <p>친구에게<br /><strong>나의 초대코드 공유</strong></p>
              <v-btn variant="outlined" rounded="lg" class="btn-share">
                <template v-slot:prepend>
                  <img src="/assets/images/icon-share.svg" alt="" />
                </template>
                공유하기
              </v-btn>
            </li>
            <li>
              <span class="num">2</span>
              <p>
                초대코드를 받은 친구가<br /><strong
                  >오케어 신규 회원 가입</strong
                >
              </p>
            </li>
            <li>
              <span class="num">3</span>
              <p>
                가입 후 24시간 이내<br />친구초대 페이지의<br /><strong
                  >초대코드 입력 탭 접속</strong
                >
              </p>
            </li>
            <li>
              <span class="num">4</span>
              <p>
                초대코드 입력 후<br /><strong
                  >'입력완료' 버튼 누르면<br />즉시 포인트 적립</strong
                >
              </p>
            </li>
          </ol>
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
    <div class="btn-bottom-set">
      <!-- 20231120 수정 -->
      <v-btn variant="text" class="v-share">공유하기</v-btn>
    </div>
  </div>
</template>

<script>
  import { reactive, ref } from 'vue'
  export default {
    setup() {
      const tab = ref()
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
