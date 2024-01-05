<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn @click="modal = true"> 챌린지 알림 확인 바텀 열기 </v-btn>
    </div>
    <LinkBottom v-model="modal" @update="addText" @close="modal = false" />
  </div>
</template>

<script>
  import { ref } from 'vue'
  import LinkBottom from './MAJ0100390.vue'
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
