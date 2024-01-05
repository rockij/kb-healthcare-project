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
      :lists="option"
      title="조회기간 설정"
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
      const category = ref('일주일')
      const option = reactive([
        { value: 1, text: '일주일' },
        { value: 2, text: '1개월' },
        { value: 3, text: '3개월' }
      ])
      function changeCategory(val) {
        modal.value = false
        return (category.value = val.text)
      }
      return {
        modal,
        dialog,
        option,
        category,
        changeCategory
      }
    }
  }
</script>
