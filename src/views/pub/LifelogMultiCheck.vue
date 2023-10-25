<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn @click="modal2 = true"> 다중선택 바텀 열기</v-btn>
    </div>
    <DialogCompare v-model="modal2" @close="modal2 = false" />
  </div>
</template>

<script>
  import { ref } from 'vue'
  import DialogCompare from '@/views/pub/MAJ0202876.vue'
  export default {
    components: { DialogCompare },
    setup() {
      const modal2 = ref(false)

      return {
        modal2
      }
    }
  }
</script>
