<template>
  <div class="gps-map">
    <img :src="`/assets/images/` + map" alt="" />
  </div>
</template>
<script>
  export default {
    props: ['map'],
    emits: ['changeMode'],
    setup() {
      return {}
    }
  }
</script>
