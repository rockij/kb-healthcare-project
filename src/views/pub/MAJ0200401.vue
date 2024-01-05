<template>
  <div class="box">
    <div class="bar">
      <i
        class="top"
        :class="top >= 30 ? 'over' : ''"
        :style="`transform: translateY(-${top}px)`"
      ></i
      ><i class="line" :style="`height: ${top + low}px`"></i
      ><i
        class="low"
        :class="low >= 15 ? 'over' : ''"
        :style="`transform: translateY(${low}px)`"
      ></i>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    props: ['top', 'low'],
    setup(props) {
      const top = ref(props.top)
      const low = ref(props.low)
      return {
        top,
        low
      }
    }
  }
</script>
