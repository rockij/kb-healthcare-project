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
            <span class="type">
              <v-btn
                v-if="item.type === '나도 검사해주기'"
                variant="text"
                class="btn-per-test"
                >{{ item.type }}</v-btn
              >
              <span v-if="item.type === '검사해줬어요'" class="text-blue">{{
                item.type
              }}</span>
              <span v-if="item.type === '아직 해줄 수 없어요'">{{
                item.type
              }}</span>
            </span>
          </div>
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
      const documentModal = ref(true)

      const testerList = ref([
        {
          pImg: 'profile-1.png',
          name: '오건강',
          type: '나도 검사해주기'
        },
        {
          pImg: 'profile-1.png',
          name: '김일화',
          type: '나도 검사해주기'
        },
        {
          pImg: 'profile-1.png',
          name: '박혜신',
          type: '나도 검사해주기'
        },
        {
          pImg: 'profile-1.png',
          name: '최재원',
          type: '검사해줬어요'
        },
        {
          pImg: 'profile-1.png',
          name: '유정아',
          type: '아직 해줄 수 없어요'
        },
        {
          pImg: 'profile-1.png',
          name: '정래영',
          type: '나도 검사해주기'
        }
      ])

      return {
        documentModal,
        testerList
      }
    }
  }
</script>
