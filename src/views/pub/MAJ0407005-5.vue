<template>
  <div class="contents">
    <DocumentModal
      modalTitle="전문가의 한마디"
      v-model="documentModal"
      class="tip-popup"
      @close="documentModal = false"
      @clickfunction="clickfunction"
    >
      <template #modalBody>
        <div class="challenge-section-spot tip-division">
          <div class="title-area">
            <!-- Main title-->
            <p class="subTit-01">아침 공복혈당 기록하기</p>
            <!-- // Main title-->
            <!-- add text 문장형 -->
            <p class="desc">
              하체 등척성 운동은 허벅지 앞 근육(대퇴사두근)을 강화할 수 있는
              운동으로 사무실에서 틈틈이 진행할 수 있습니다.
            </p>
            <!-- // add text 문장형 -->
            <!-- add text 항목형 -->
            <dl class="target-part">
              <dt>
                <img
                  src="/assets/images/icon-target-part.svg"
                  alt=""
                  class=""
                />공략부위
              </dt>
              <dd>허벅지, 엉덩이(둔근)</dd>
            </dl>
            <!-- // add text 항목형 -->
          </div>
        </div>

        <div class="challenge-section-content no-division">
          <!-- sub title -->
          <strong class="title-01">To-do TIP</strong>
          <!-- // sub title -->

          <!-- contents text -->
          <p class="tip-text">
            아침 고복혈당은 당뇨병과 관련된 중요한 척도 중 하나입니다.<br />
            잠자리에서 일어나 식사나 인슐린의 영향을 받지 않은 상태에서 측정된
            혈당 농도를 나타내지요. 공복혈당 수치가 정상 범위를 벗어날 경우,
            당뇨병이나 당뇨병 전단계의 위험을 가지고 있을 수 있어요
            <br /><br />
            지속적으로 관찰하여 적절한 식단 조절, 운동, 약물 치료 등을 포함한
            개별적인 관리 계획을 수립하는 것이 중요합니다.
          </p>
          <!-- // contents text -->

          <!-- contents list 항목형 -->
          <div class="list-circle tip-list">
            <ul>
              <li>
                <p class="list-text">
                  당일 06시00분 ~ 10시30분에 공복혈당을 기록해야 인증성공
                  처리됩니다.
                </p>
              </li>
              <li>
                <p class="list-text">과거, 미래의 To-do 인증은 불가해요.</p>
              </li>
            </ul>
          </div>
          <!-- // contents list 항목형 -->

          <!-- contents list 항목형(텍스트 강조) -->
          <div class="list-circle tip-list">
            <ul>
              <li>
                <p class="list-text">
                  <strong>야간 저혈당 예방</strong> : 잠들기 전 혈당 측정은 밤
                  동안 저혈당을 예방하는데 도움이 됩니다.
                </p>
              </li>
              <li>
                <p class="list-text">
                  <strong>야간 저혈당 예방</strong> : 잠들기 전 혈당 측정은 밤
                  동안 저혈당을 예방하는데 도움이 됩니다.
                </p>
              </li>
            </ul>
          </div>
          <!-- // contents list 항목형(텍스트 강조) -->

          <!-- contents list 리스트 타이틀 포함 항목형(텍스트 강조) -->
          <div class="list-circle tip-list">
            <strong>혈압 측정 시 정확한 결과를 얻는 방법!</strong>
            <ul>
              <li>
                <p class="list-text">
                  <strong>야간 저혈당 예방</strong> : 잠들기 전 혈당 측정은 밤
                  동안 저혈당을 예방하는데 도움이 됩니다.
                </p>
              </li>
              <li>
                <p class="list-text">
                  <strong>야간 저혈당 예방</strong> : 잠들기 전 혈당 측정은 밤
                  동안 저혈당을 예방하는데 도움이 됩니다.
                </p>
              </li>
            </ul>
          </div>
          <!-- // contents list 리스트 타이틀 포함 항목형(텍스트 강조) -->

          <!-- contents list 순서형 -->
          <div class="list-circle tip-list">
            <ol>
              <li>
                <span class="list-number">1</span>
                <p class="list-text">의자에 바르게 앉습니다.</p>
              </li>
              <li>
                <span class="list-number">2</span>
                <p class="list-text">
                  한쪽 다리는 바닥에 지지하고 양손은 의자를 잡습니다.
                </p>
              </li>
              <li>
                <span class="list-number">3</span>
                <p class="list-text">
                  천천히 한쪽 다리를 들어올리며 무릎을 최대한 폅니다.
                </p>
              </li>
              <li>
                <span class="list-number">4</span>
                <p class="list-text">
                  무릎을 편 상태에서 허벅지에 힘을 주며 10초간 버팁니다.
                </p>
              </li>
              <li>
                <span class="list-number">5</span>
                <p class="list-text">천천히 제자리로 돌아옵니다.</p>
              </li>
            </ol>
          </div>
          <!--// contents list 순서형 -->

          <!-- box contents -->
          <div class="expert-tip">
            <!-- box contents 타이틀 -->
            <strong class="expert-tip-title">인증 전 꼭 알아두세요!</strong>
            <!-- // box contents 타이틀 -->

            <!--  box contents list -->
            <div class="list-circle tip-list">
              <ul>
                <li>
                  <p class="list-text">
                    당일 06시00분 ~ 10시30분에 공복혈당을 기록해야 인증성공
                    처리됩니다.
                  </p>
                </li>
                <li>
                  <p class="list-text">과거, 미래의 To-do 인증은 불가해요.</p>
                </li>
              </ul>
            </div>
            <!-- // box contents list -->

            <!--  box contents text -->
            <p class="expert-tip-text">
              허리가 꺾이지 않도록 올바른 자세를 유지하며 운동을 진행해 보세요.
            </p>
            <!--  // box contents text -->
          </div>
          <!-- // box contents -->
        </div>
      </template>
    </DocumentModal>
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
