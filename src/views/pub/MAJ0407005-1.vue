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
        <div class="challenge-section-spot tip-no-division">
          <div class="title-area">
            <p class="subTit-01">
              국, 탕, 찌개, 라면은 건더기 위주로 먹고, 국물 꼭 남기기!
            </p>
            <p class="desc">
              국물을 많이 섭취하면 위에서 음식을 소화하는데 방해가 되고,
              나트륨과 지방을 과다 섭취하게 되어 당뇨, 고혈압, 비만을 유발할 수
              있습니다. 전문가 챌린지를 통해 국물 남기는 습관을 길러 보시는 것을
              적극 추천 드립니다.
            </p>
          </div>
        </div>

        <div class="challenge-section-content no-division">
          <strong class="title-01"
            >지금 식사 후 국물 남긴 사진을<br />
            등록해 보세요!</strong
          >
          <div class="list-thumb tip-img-list">
            <ul>
              <li>
                <v-btn variant="text" :href="'javsscript:;'">
                  <img src="/assets/images/dummy-thumb.jpg" alt="" />
                </v-btn>
              </li>
              <li>
                <v-btn variant="text" :href="'javsscript:;'">
                  <img src="/assets/images/dummy-thumb.jpg" alt="" />
                </v-btn>
              </li>
              <li>
                <v-btn variant="text" :href="'javsscript:;'">
                  <img src="/assets/images/dummy-thumb.jpg" alt="" />
                </v-btn>
              </li>
            </ul>
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
    setup(props) {
      const documentModal = ref(true)

      return {
        documentModal
      }
    }
  }
</script>
