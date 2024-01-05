<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn @click="modal = true"> 나의 약 상세 열기 </v-btn>
    </div>
    <MAJ0203501 v-model="modal" @close="modal = false" />
  </div>
</template>

<script>
  import { ref } from 'vue'
  import MAJ0203501 from './MAJ0203501.vue'
  export default {
    components: { MAJ0203501 },
    setup() {
      const modal = ref(false)

      return {
        modal
      }
    }
  }
</script>
