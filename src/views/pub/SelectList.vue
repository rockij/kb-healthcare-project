<template>
  <div class="contents">
    <v-btn
      variant="text"
      density="compact"
      class="fs-16 px-0"
      @click="modal = true"
    >
      {{ modalListBtn }}
      <img src="/assets/images/icon-arrow-down2.svg" alt="" class="ml-1" />
    </v-btn>
    <v-btn
      block
      variant="outlined"
      rounded="xl"
      :ripple="false"
      class="btn-select-arrow mt-4"
      color="#ccc"
      @click="modal = true"
    >
      <span class="label">관계</span>
      <span ref="selectBox" class="text text-info-grey type-3">
        <span class="placeholder" v-if="!modalListBtn">선택해주세요.</span>
        {{ modalListBtn }}
        <img src="/assets/images/icon-arrow-down2.svg" alt="검색" />
      </span>
    </v-btn>
    <DialogSelectList
      :lists="modalList"
      :title="modalTitle"
      v-model="modal"
      @close="modal = false"
      @update="changeCategory"
    />
  </div>
</template>
<script>
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import { ref } from 'vue'
  export default {
    components: { DialogSelectList },
    setup() {
      const modal = ref(false)
      const modalTitle = ref('이름입력')
      const modalList = ref([
        {
          value: 0,
          text: '리스트시작'
        },
        {
          value: 1,
          text: '리스트'
        },
        {
          value: 2,
          text: '리스트'
        },
        {
          value: 3,
          text: '리스트'
        },
        {
          value: 4,
          text: '리스트'
        },
        {
          value: 5,
          text: '리스트'
        },
        {
          value: 6,
          text: '리스트'
        },
        {
          value: 7,
          text: '리스트'
        },
        {
          value: 8,
          text: '리스트'
        },
        {
          value: 9,
          text: '리스트'
        },
        {
          value: 10,
          text: '리스트'
        },
        {
          value: 11,
          text: '리스트'
        },
        {
          value: 12,
          text: '리스트'
        },
        {
          value: 13,
          text: '리스트'
        },
        {
          value: 14,
          text: '리스트'
        },
        {
          value: 15,
          text: '리스트끝'
        }
      ])
      const modalListBtn = ref('선택')
      function changeCategory(val) {
        modal.value = false
        return (modalListBtn.value = val.text)
      }
      return {
        modal,
        modalTitle,
        modalList,
        modalListBtn,
        changeCategory
      }
    }
  }
</script>
