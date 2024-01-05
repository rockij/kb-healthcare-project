<template>
    <div class="contents">
      <!-- TermsModal -->
      <DocumentModal
        modalTitle="약관 제목"
        v-model="documentModal"
        @close="documentModal = false"
      >
        <template #modalBody>
            <div class="ui-terms-wrap">
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
                                        <td>프로필정보(닉네임/프로필사진), 카카오계정(이메일 또는 휴대폰번호), 생년월일, 성명, CI</td>
                                        <td><strong class="highlight">본인인증 미확인시 2년 후 파기<br>*CI(중복가입여부 확인후 즉시파기)</strong></td>
                                    </tr>
                                    <tr>
                                        <td>휴대폰 본인인증</td>
                                        <td>성명, 생년월일, 성별, 통신사, 휴대폰번호, CI</td>
                                        <td><strong class="highlight">본인확인즉시 파기</strong></td>
                                    </tr>
                                    <tr>
                                        <td>회원가입 및 관리</td>
                                        <td>성명, 생년월일, 성별, 통신사, 휴대폰번호, CI, 프로필정보</td>
                                        <td><strong class="highlight">회원 탈퇴 시</strong></td>
                                    </tr>
                                    <tr>
                                        <td>라이프로그/챌린지서비스</td>
                                        <td>성명, 나이, 성별</td>
                                        <td><strong class="highlight">회원 탈퇴 시</strong></td>
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
                <div class="terms-item">
                    <h2>민감정보 수집 및 이용 동의(필수)</h2>
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
                                        <td>라이프로그</td>
                                        <td><strong class="highlight">걸음 및 운동 정보(걸음수, 이동속도, 이동거리, 운동, 소모칼로리), 건강정보(체성분, 수면, 수분, 수축기혈압, 이완기혈압, 혈당, 공복혈당, 심박수, 영양제/약 복약(종류, 약복용기간 및 시간), 식사, 감정, 흡연, 음주 관련 정보), 여성건강 정보(월경주기, 월경 시작일/종료일, 월경통 정보, 몸 상태 정보)</strong></td>
                                        <td rowspan="3"><strong class="highlight">회원 탈퇴 시</strong></td>
                                    </tr>
                                    <tr>
                                        <td>(전문가/일반)챌린지 서비스</td>
                                        <td><strong class="highlight">라이프로그 기록정보(걸음수, 수면, 운동, 혈당, 혈압, 체중, 수분, 식사), 챌린지 도전 결과(인증샷 등)</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p class="table-caution">
                        민감 수집 및 이용동의를 거부할 권리가 있으나, 거부할 경우에는 회원가입이 제한됩니다.
                    </p>
                </div>
                <div class="terms-item">
                    <h2>개인정보 마케팅 및 활용 동의(선택)</h2>
                    <div class="terms-table-track">
                        <div class="terms-table">
                            <table>
                                <caption>수집&middot;이용 목적, 항목, 보유 및 이용기간 항목을 가진 양식(표)입니다.</caption>
                                <colgroup>
                                    <col style="width: 50%">
                                    <col style="width: 25%">
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
                                        <td>전화, 문자, 카카오톡, 이메일 등을 통한 광고성 정보 전송(이벤트 정보 등)</td>
                                        <td>휴대폰번호, 이메일</td>
                                        <td><strong class="highlight">회원탈퇴 또는 동의철회시</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p class="table-caution">
                        개인정보 마케팅 및 활용 동의를 거부할 권리가 있으나, 거부할 경우에는 다양한 이벤트 혜택이 제한됩니다.
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
    import DocumentModal from '@/components/DocumentModal.vue'
    export default {
      components: { DocumentModal },
      setup() {
        const documentModal = ref(true)
        return {
          documentModal
        }
      }
    }
  </script>
