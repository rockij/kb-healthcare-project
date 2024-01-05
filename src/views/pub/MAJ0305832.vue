<template>
  <div class="contents pt-7">
    <div class="title-area pt-0 mb-7">
      <h2 class="subTit-01">
        일반 건강검진 조회를 위해 <br />
        아래 약관 동의가 필요합니다.
      </h2>
    </div>
    <div class="agree-group">
      <v-checkbox
        v-model="checkAll"
        label="전체동의"
        class="checked-agree checked-all mt-1"
      ></v-checkbox>
      <div class="agree-items mt-2">
        <v-checkbox
          v-model="checkedItem"
          :value="item.value"
          v-for="item in agreeItems"
          :key="item.value"
          class="checked-agree checked-sub"
        >
          <template v-slot:label
            >{{ item.text }}
            <v-spacer></v-spacer>
            <v-btn
              variant="text"
              :title="`${item.text} 약관보기`"
              class="px-0"
              @click.stop="documentModal = true"
            >
              <span class="fs-14 color-ccc">보기</span></v-btn
            >
          </template>
        </v-checkbox>
      </div>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          :disabled="buttonActive"
          >확인</v-btn
        >
      </div>
    </div>
  </div>

  <DocumentModal
    modalTitle="[필수] 개인정보 수집 및 이용동의"
    v-model="documentModal"
    @close="documentModal = false"
  >
    <template #modalBody> 약관내용 </template>
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
</template>
<script>
  import DocumentModal from '@/components/DocumentModal.vue'
  import { ref, reactive, computed } from 'vue'
  export default {
    components: { DocumentModal },
    setup() {
      const buttonActive = ref(true)
      const checkedItem = ref([])
      const agreeItems = reactive([
        {
          value: 1,
          text: '[필수] 개인정보 수집 및 이용동의'
        },
        {
          value: 2,
          text: '[필수] 고유식별정보 처리 동의'
        }
      ])
      const checkAll = computed({
        get() {
          return checkedItem.value.length === agreeItems.length
        },
        set(value) {
          checkedItem.value = []
          if (value) {
            for (let i = 1; i <= agreeItems.length; i++) {
              checkedItem.value.push(i)
            }
          }
          if (checkedItem.value.length === agreeItems.length) {
            buttonActive.value = false
          } else {
            buttonActive.value = true
          }
        }
      })
      const documentModal = ref(false)
      const modal = ref(false)
      return {
        buttonActive,
        checkAll,
        checkedItem,
        agreeItems,
        documentModal,
        modal
      }
    }
  }
</script>
