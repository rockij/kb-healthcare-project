<template>
  <div class="contents">
    <v-btn @click="documentModal = true">약관팝업</v-btn>
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="약관 제목"
      v-model="documentModal"
      @close="documentModal = false"
      @clickfunction="clickfunction"
    >
      <template #modalBody>
        <v-btn
          block
          variant="outlined"
          rounded="xl"
          :ripple="false"
          class="btn-select-arrow mt-4"
          color="#ccc"
          @click="modal = true"
        >
          <span ref="selectBox" class="text text-info-grey type-3">
            {{ category }}
            <img src="@/assets/images/icon-arrow-down2.svg" alt="검색" />
          </span>
        </v-btn>
        <DialogSelectList
          :lists="modalList"
          :title="modalTitle"
          v-model="modal"
          @close="modal = false"
          @update="changeCategory"
        />
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
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import DocumentModal from '@/components/DocumentModal.vue'
  export default {
    components: { DocumentModal, DialogSelectList },
    setup() {
      const documentModal = ref(false)
      const modalTitle = ref('운동 종류')
      const category = ref('선택')
      const modal = ref(false)
      const modalList = ref([
        {
          value: 0,
          text: '자전거'
        },
        {
          value: 1,
          text: '근력운동'
        },
        {
          value: 2,
          text: '달리기 (GPS)'
        },
        {
          value: 3,
          text: '하이킹'
        },
        {
          value: 4,
          text: '계단오르기'
        },
        {
          value: 5,
          text: '농구'
        },
        {
          value: 6,
          text: '당구'
        },
        {
          value: 7,
          text: '등산'
        },
        {
          value: 8,
          text: '런닝머신(걷기)'
        },
        {
          value: 9,
          text: '러닝머신(달리기)'
        },
        {
          value: 10,
          text: '배드민턴'
        }
      ])
      const clickfunction = () => {
        console.log('click')
      }

      function changeCategory(val) {
        modal.value = false
        return (category.value = val.text)
      }
      return {
        documentModal,
        clickfunction,
        modalList,
        changeCategory,
        category,
        modalTitle,
        modal
      }
    }
  }
</script>
