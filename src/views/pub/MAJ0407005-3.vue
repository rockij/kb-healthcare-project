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
            <p class="subTit-01">벽만 있으면 가능한, 벽 스쿼트!</p>
            <dl class="target-part">
              <dt>
                <img
                  src="/assets/images/icon-target-part.svg"
                  alt=""
                  class=""
                />공략부위
              </dt>
              <dd>하체전체(대퇴사두근, 햄스트링, 종아리)</dd>
            </dl>
          </div>
        </div>

        <div class="challenge-section-content no-division">
          <strong class="title-01">운동방법</strong>
          <div class="list-circle tip-list">
            <ol>
              <li>
                <span class="list-number">1</span>
                <p class="list-text">어깨너비로 서서 벽에 등을 기대주세요.</p>
              </li>
              <li>
                <span class="list-number">2</span>
                <p class="list-text">
                  꼬리뼈부터 머리까지 상체 전체를 벽에 붙인 상태에서 천천히
                  내려갑니다.
                </p>
              </li>
              <li>
                <span class="list-number">3</span>
                <p class="list-text">
                  이때 꼬리뼈는 벽에서 떨어지지 않도록 합니다.
                </p>
              </li>
              <li>
                <span class="list-number">4</span>
                <p class="list-text">
                  허벅지가 바닥과 평행이 될 때까지 자세를 낮추어 줍니다.
                </p>
              </li>
              <li>
                <span class="list-number">5</span>
                <p class="list-text">
                  허벅지의 긴장을 유지하며 천천히 올라옵니다.
                </p>
              </li>
            </ol>
          </div>
          <div class="expert-tip">
            <strong class="expert-tip-title">전문가의 한마디!</strong>
            <p class="expert-tip-text">
              옆으로 들어올릴 때 한쪽으로 치우치지 않도록 골반을 고정해 주세요.
            </p>
          </div>
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
