<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn @click="modal = true"> 기기연결 안내 열기 </v-btn>
    </div>
    <MAJ0206000 v-model="modal" @close="modal = false" />
  </div>
</template>

<script>
  import { ref } from 'vue'
  import MAJ0206000 from './MAJ0206000.vue'
  export default {
    components: { MAJ0206000 },
    setup() {
      const modal = ref(false)

      return {
        modal
      }
    }
  }
</script>
