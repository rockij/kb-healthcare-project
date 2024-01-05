<template>
  <div class="box" :class="heightCheck">
    <i class="bar" :style="`height: ${height}px`"></i>
  </div>
</template>
<script>
  import { computed } from 'vue'
  export default {
    props: ['height'],
    setup(props) {
      const heightCheck = computed(() => {
        if (props.height <= 14) {
          return 'danger'
        } else if (props.height <= 28) {
          return 'belief'
        }
      })
      return { heightCheck }
    }
  }
</script>
