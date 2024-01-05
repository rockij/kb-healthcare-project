<template>
  <div class="d-grid g-tcol-2 g-gap-7 mt-4 mb-8">
    <v-btn
      v-for="(list, i) in lists"
      :key="i"
      variant="text"
      class="list-roundbox"
      :data-result="list.category"
    >
      <strong class="tit">{{ list.title }}</strong>
      <p class="text">{{ list.text }}</p>
    </v-btn>
  </div>
</template>
<script>
  export default {
    props: ['lists'],
    setup() {
      return {}
    }
  }
</script>
