<template>
  <div class="contents">
    <div class="sorting-data">
      <v-btn @click="modal = true"> 인풋리스트 열기 </v-btn>
    </div>
    <MAJ0202995 v-model="modal" @close="modal = false" />
  </div>
</template>

<script>
  import { ref } from 'vue'
  import MAJ0202995 from './MAJ0202995.vue'
  export default {
    components: { MAJ0202995 },
    setup() {
      const modal = ref(false)

      return {
        modal
      }
    }
  }
</script>
