<template>
  <div class="contents">
    <v-btn @click="documentModal = true">약관팝업</v-btn>
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="약관 제목"
      v-model="documentModal"
      @close="documentModal = false"
      @clickfunction="clickfunction"
    >
      <template #modalBody>
        <v-btn
          block
          variant="outlined"
          rounded="xl"
          :ripple="false"
          class="btn-select-arrow mt-4"
          color="#ccc"
          @click="modal = true"
        >
          <span ref="selectBox" class="text text-info-grey type-3">
            {{ category }}
            <img src="/assets/images/icon-arrow-down2.svg" alt="검색" />
          </span>
        </v-btn>
        <DialogSelectList
          :lists="modalList"
          :title="modalTitle"
          v-model="modal"
          @close="modal = false"
          @update="changeCategory"
        />
        <div class="ui-terms-wrap mt-6">
            <div class="terms-item">
                <h2>개인정보 수집 및 이용 동의(필수)</h2>
                <div class="terms-table-track">
                    <div class="terms-table">
                        <table>
                            <caption>수집&middot;이용 목적, 항목, 보유 및 이용기간 항목을 가진 양식(표)입니다.</caption>
                            <colgroup>
                                <col style="width: 25%">
                                <col style="width: 50%">
                                <col style="width: 25%">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">수집&middot;이용 목적</th>
                                    <th scope="col">항목</th>
                                    <th scope="col">보유 및 이용기간</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>(카카오싱크) 간편 로그인 및 회원가입</td>
                                    <td>프로필정보(닉네임/프로필사진), 카카오계정(이메일 또는 휴대폰번호), 생년월일, 이름, CI</td>
                                    <td><strong class="highlight">본인인증 미확인시 2년 후 파기<br>*CI(중복가입여부 확인후 즉시파기)</strong></td>
                                </tr>
                                <tr>
                                    <td>회원제 서비스 이용을 위한 본인인증</td>
                                    <td>이름, 생년월일, 성별, 내/외국인여부, 통신사, 휴대폰번호, CI</td>
                                    <td><strong class="highlight">본인확인즉시 파기</strong></td>
                                </tr>
                                <tr>
                                    <td>회원관리</td>
                                    <td>이름, 생년월일, 성별, 내/외국인여부, 통신사, 휴대폰번호, CI, 프로필정보, 카카오계정, 카카오톡채널 추가 상태 및 내역</td>
                                    <td rowspan="2"><strong class="highlight">회원 탈퇴 시</strong></td>
                                </tr>
                                <tr>
                                    <td>라이프로그/챌린지서비스</td>
                                    <td>이름, 나이, 성별</td>
                                </tr>
                                <tr>
                                    <td>불량회원의 부정이용 방지와 비인가 사용 방지, 중복가입방지</td>
                                    <td>CI</td>
                                    <td><strong class="highlight">탈퇴 1년 후 파기</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p class="table-caution">
                    개인정보 수집 및 이용동의를 거부할 권리가 있으나, 거부할 경우에는 회원가입이 제한됩니다.
                </p>
            </div>
        </div>
      </template>
      <template #modalButton>
        <v-btn
          variant="text"
          height="56"
          class="btn-summit"
          @click="documentModal = false"
          >동의</v-btn
        >
      </template>
    </DocumentModal>
    <!-- //TermsModal -->
  </div>
</template>

<script>
  import { ref } from 'vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import DocumentModal from '@/components/DocumentModal.vue'
  export default {
    components: { DocumentModal, DialogSelectList },
    setup() {
      const documentModal = ref(false)
      const modalTitle = ref('운동 종류')
      const category = ref('선택')
      const modal = ref(false)
      const modalList = ref([
        {
          value: 0,
          text: '자전거'
        },
        {
          value: 1,
          text: '근력운동'
        },
        {
          value: 2,
          text: '달리기 (GPS)'
        },
        {
          value: 3,
          text: '하이킹'
        },
        {
          value: 4,
          text: '계단오르기'
        },
        {
          value: 5,
          text: '농구'
        },
        {
          value: 6,
          text: '당구'
        },
        {
          value: 7,
          text: '등산'
        },
        {
          value: 8,
          text: '런닝머신(걷기)'
        },
        {
          value: 9,
          text: '러닝머신(달리기)'
        },
        {
          value: 10,
          text: '배드민턴'
        }
      ])
      const clickfunction = () => {
        console.log('click')
      }

      function changeCategory(val) {
        modal.value = false
        return (category.value = val.text)
      }
      return {
        documentModal,
        clickfunction,
        modalList,
        changeCategory,
        category,
        modalTitle,
        modal
      }
    }
  }
</script>
