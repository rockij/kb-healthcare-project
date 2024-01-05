<template>
  <div class="d-flex align-center justify-space-between">
    <h4 class="fs-18 font-weight-bold">{{ text }}</h4>
    <div class="numcount-area4 type" style="flex: 0 0 11.875rem">
      <v-btn
        variant="text"
        class="handle decrease"
        title="감소"
        @click="numcount > 0 ? numcount-- : ''"
      ></v-btn>
      <strong class="number">{{ numcount }}</strong>
      <v-btn
        variant="text"
        class="handle increase"
        title="증가"
        @click="numcount++"
      ></v-btn>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    props: ['text'],
    setup() {
      const numcount = ref(0)
      return {
        numcount
      }
    }
  }
</script>
