<template>
  <div class="contents">
    <!-- TermsModal -->
    <DocumentModal
      v-model="documentModal"
      @close="documentModal = false"
      @clickfunction="clickfunction"
    >
      <template #modalBody> 내용 </template>
      <template #modalButton>
        <v-btn
          variant="text"
          height="48"
          class="bdr-8 btn-summit"
          @click="documentModal = false"
          >건강한 일상 시작으로 포인트 받기</v-btn
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
