<template>
  <div class="paging-progress">
    <v-progress-linear
      :model-value="value"
      height="6"
      class="default-progress"
    ></v-progress-linear>
  </div>
</template>
<script>
  import { ref, onMounted, onUnmounted } from 'vue'
  export default {
    props: ['value'],
    setup() {}
  }
</script>
