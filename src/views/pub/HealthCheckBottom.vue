<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn @click="modal = true"> 건강검진결과 연결 바텀 열기 </v-btn>
    </div>
    <LinkBottom v-model="modal" @update="addText" @close="modal = false" />
  </div>
</template>

<script>
  import { ref } from 'vue'
  import LinkBottom from './MAJ0200415.vue'
  export default {
    components: { LinkBottom },
    setup() {
      const modal = ref(false)
      function addText() {
        modal.value = false
      }
      return {
        modal,
        addText
      }
    }
  }
</script>
