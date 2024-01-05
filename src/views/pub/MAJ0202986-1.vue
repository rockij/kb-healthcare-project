<template>
  <div class="numcount-area4">
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
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const numcount = ref(0)

      return {
        numcount
      }
    }
  }
</script>
