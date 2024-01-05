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
            <p class="subTit-01">근력과 유산소 효과를 얻을 수 있는 사이드 킥</p>
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
          </div>
        </div>

        <div class="challenge-section-content no-division">
          <strong class="title-01">운동방법</strong>
          <div class="list-circle tip-list">
            <ol>
              <li>
                <span class="list-number">1</span>
                <p class="list-text">
                  발은 엉덩이 너비보다 아주 조금 넓게 서서 체중을 지지합니다.
                </p>
              </li>
              <li>
                <span class="list-number">2</span>
                <p class="list-text">천천히 스쿼트 동작으로 앉습니다.</p>
              </li>
              <li>
                <span class="list-number">3</span>
                <p class="list-text">일어나며 한쪽 다리를 옆으로 들어줍니다.</p>
              </li>
              <li>
                <span class="list-number">4</span>
                <p class="list-text">
                  다리를 들어올릴 때 상체는 곧게 세우고 올릴 수 있는 만큼만
                  옆으로 들어줍니다.
                </p>
              </li>
              <li>
                <span class="list-number">5</span>
                <p class="list-text">
                  제자리로 돌아올 때에도 복부의 긴장을 유지하며 진행합니다.
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
