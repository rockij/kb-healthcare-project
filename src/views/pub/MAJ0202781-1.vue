<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn @click="modal = true"> 건강뉴스 검색 열기 </v-btn>
    </div>
  </div>
  <MAJ0202781 v-model="modal" @close="modal = false" />
</template>

<script>
  import { ref } from 'vue'
  import MAJ0202781 from './MAJ0202781.vue'
  export default {
    components: { MAJ0202781 },
    setup() {
      const modal = ref(false)

      return {
        modal
      }
    }
  }
</script>
