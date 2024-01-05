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
            <p class="subTit-01">앉아서 다리 뻗기 운동</p>
            <p class="desc">
              하체 등척성 운동은 허벅지 앞 근육(대퇴사두근)을 강화할 수 있는 운동으로 
              사무실에서 틈틈이 진행할 수 있습니다.
            </p>
          </div>
        </div>

        <div class="challenge-section-content no-division">
          <strong class="title-01">운동방법</strong>
            <div class="list-circle tip-list">
              <ol>
                <li>
                  <span class="list-number">1</span>
                  <p class="list-text">의자에 바르게 앉습니다.</p>
                </li>
                <li>
                  <span class="list-number">2</span>
                  <p class="list-text">한쪽 다리는 바닥에 지지하고 양손은 의자를 잡습니다.</p>
                </li>
                <li>
                  <span class="list-number">3</span>
                  <p class="list-text">천천히 한쪽 다리를 들어올리며 무릎을 최대한 폅니다.</p>
                </li>
                <li>
                  <span class="list-number">4</span>
                  <p class="list-text">무릎을 편 상태에서 허벅지에 힘을 주며 10초간 버팁니다.</p>
                </li>
                <li>
                  <span class="list-number">5</span>
                  <p class="list-text">천천히 제자리로 돌아옵니다.</p>
                </li>
              </ol>
            </div>
            <div class="expert-tip">
              <strong class="expert-tip-title">전문가의 한마디!</strong>
              <p class="expert-tip-text">허리가 꺾이지 않도록 올바른 자세를 유지하며 운동을 진행해 보세요.</p>
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