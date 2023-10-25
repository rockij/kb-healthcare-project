<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn @click="modal = true"> 조회기간 설정 </v-btn>
    </div>
    <MAJ0202858 v-model="modal" @update="addText" @close="modal = false" />
  </div>
</template>

<script>
  import { ref } from 'vue'
  import MAJ0202858 from './MAJ0202858.vue'
  export default {
    components: { MAJ0202858 },
    setup() {
      const text1 = ref()
      const modal = ref(false)
      function addText(val1) {
        text1.value = val1
        modal.value = false
        console.log('상위페이지', text1.value)
      }
      return {
        text1,
        modal,
        addText
      }
    }
  }
</script>
