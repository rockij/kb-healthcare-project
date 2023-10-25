<template>
  <div class="contents">
    <v-btn @click="documentModal = true">full page madal</v-btn>
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="팝업제목"
      v-model="documentModal"
      @close="documentModal = false"
      @clickfunction="clickfunction"
    >
      <template #modalBody> 팝업내용 </template>
      <template #modalButton>
        <v-btn
          variant="text"
          height="48"
          class="bdr-8 btn-summit"
          @click="documentModal = false"
          >BUTTON</v-btn
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
