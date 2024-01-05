<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn
        variant="text"
        density="compact"
        class="fs-16 px-0"
        @click="modal = true"
      >
        {{ category }}
        <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
      </v-btn>
    </div>
    <DialogSelectList
      :lists="modalList"
      title="운동 시작하기"
      v-model="modal"
      @close="modal = false"
      @update="changeCategory"
    />
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  export default {
    components: { DialogSelectList },
    setup() {
      const modal = ref(false)
      const dialog = ref(false)
      const category = ref('단일선택 바텀 열기')
      const modalTitle = ref('운동 종류')
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

      function changeCategory(val) {
        modal.value = false
        return (category.value = val.text)
      }
      return {
        modal,
        dialog,
        category,
        modalTitle,
        modalList,
        changeCategory
      }
    }
  }
</script>
