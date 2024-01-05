<template>
  <div class="contents certification-photo">
    <v-btn @click="documentModal = true">full page madal</v-btn>
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="챌린지 인증 사진형"
      v-model="documentModal"
      @close="documentModal = false"
      @clickfunction="clickfunction"
    >
      <template #modalBody>
        <div class="certification-photo">
          <div class="challenge-section-content no-division">
            <div class="certification-area">
              <div class="img-box">
                <img
                  src="/assets/images/img-sample-photo.png"
                  alt="챌린지 인증 사진형 샘플"
                />
              </div>
              <div class="btn-area">
                <v-btn variant="text" height="40" class="btn-upload">
                  <template v-slot:prepend>
                    <img src="/assets/images/icon-photo-upload.svg" alt="" />
                  </template>
                  사진 변경
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #modalButton>
        <div class="btn-area d-flex">
          <v-btn variant="text" height="56px" class="btn-summit">확인</v-btn>
        </div>
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
      const documentModal = ref(false)
      const clickfunction = () => {
        console.log('click')
      }

      return {
        documentModal,
        clickfunction
      }
    }
  }
</script>
