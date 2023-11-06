<template>
  <div class="contents">
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="챌린지 리뷰 상세"
      v-model="documentModal"
      @close="documentModal = false"
      @clickfunction="clickfunction"
    >
      <template #modalBody> 
        <div class="challenge-section-spot">
          <div class="title-area">
            <p class="subTit-01">혈당 개선 전문 <br />챌린지(과식형)[6주]</p>
            <div class="info-group">
              <!-- 기본은 본인 / 타인일 경우 others 클래스 추가 -->
              <span class="name ">오건강</span>
              <span class="date">08.18 오전 6:35</span>
            </div>
          </div>
        </div>
        <div class="challenge-section-content review-content review-detail">
          <span class="review-point">
            <!-- 별점 span 태그의 %로 채움 --> 
            <span style="width:60%"></span>
          </span>
          <p class="review-text">
            리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 
            리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 
            리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 
            리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 
            리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 리뷰 텍스트 
          </p>
        </div>
      </template>
      <template #modalButton>
        <div class="btn-bottom">
          <div class="btn-area2 d-flex fix-btn">
            <v-btn
              variant="text"
              height="56px"
              class="bdr-16 fs-16 font-weight-bold cancel"
              block
              @click="dialog = true"
              >삭제하기</v-btn
            >
            <v-btn
              variant="text"
              height="56px"
              class="bdr-16 fs-16 font-weight-bold skip"
              block
              @click="dialog2 = true"
              >수정하기</v-btn
            >
          </div>
        </div>
      </template>
    </DocumentModal>
    <!-- //TermsModal -->
  </div>
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import DocumentModal from '@/components/DocumentModal.vue'

  import { ref, reactive } from 'vue'
  export default {
    components: { Nodata, DialogSelectList, DocumentModal },
    setup(props) {
      const documentModal = ref(true)
      const modal = ref(false)
      return {
        documentModal,
        modal
      }
    }
  }
</script>

<style lang="scss" scoped></style>
