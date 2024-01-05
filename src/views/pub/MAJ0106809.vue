<template>
  <div class="contents">
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="나를 검사해준 사람"
      v-model="documentModal"
      @close="documentModal = false"
    >
      <template #modalBody>
        <div class="title-area">
          <p class="subTit-01">
            총 20명이<br />
            김케어님을 검사했어요
          </p>
        </div>
        <div class="per-test-list">
          <div class="per-test-item" v-for="item in testerList" :key="item.id">
            <i class="p-img">
              <v-img :src="`/assets/images/` + item.pImg"></v-img>
            </i>
            <span class="name">{{ item.name }}</span>
            <span class="type"
              >{{ item.type }} <strong>{{ item.abc }}</strong></span
            >
          </div>
        </div>
      </template>
      <template #modalButton>
        <v-btn
          variant="text"
          height="48"
          class="bdr-8 btn-summit"
          @click="documentModal = false"
          >결과 모아보기</v-btn
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

      const testerList = ref([
        {
          pImg: 'profile-1.png',
          name: '오건강',
          type: '외향적인 분석가',
          abc: 'TC-E'
        },
        {
          pImg: 'profile-1.png',
          name: '김일화',
          type: '외향적인 분석가',
          abc: 'TC-E'
        },
        {
          pImg: 'profile-1.png',
          name: '박혜신',
          type: '외향적인 분석가',
          abc: 'TC-E'
        },
        {
          pImg: 'profile-1.png',
          name: '최재원',
          type: '외향적인 분석가',
          abc: 'TC-E'
        },
        {
          pImg: 'profile-1.png',
          name: '유정아',
          type: '외향적인 분석가',
          abc: 'TC-E'
        },
        {
          pImg: 'profile-1.png',
          name: '정래영',
          type: '외향적인 분석가',
          abc: 'TC-E'
        }
      ])

      return {
        documentModal,
        testerList
      }
    }
  }
</script>
