<template>
  <div class="contents">
    <div style="height: 200px; background-color: red"></div>
    <!-- stickyArea -->
    <div ref="stickyArea" :style="{ height: navHeight }">
      <div ref="sticky">
        <!-- contents -->
        STICKY
        <!-- //contents -->
      </div>
    </div>
    <!-- //stickyArea -->
    <div style="height: calc(100% + 200px); background-color: yellow"></div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue'
  export default {
    setup() {
      //sticky
      const sticky = ref(null)
      const stickyArea = ref(null)
      const navHeight = ref(null)
      onMounted(() => {
        const stickyHeight = (navHeight.value =
          sticky.value.offsetHeight + 'px')
        const stickyObserver = new IntersectionObserver(
          ([e]) => {
            if (!e.isIntersecting && sticky.value !== null)
              sticky.value.classList.add('isFixed')
            else sticky.value.classList.remove('isFixed')
          },
          {
            root: null,
            threshold: [1]
          }
        )
        stickyObserver.observe(stickyArea.value)
      })
      return { navHeight, sticky, stickyArea }
    }
  }
</script>

<style lang="scss" scoped></style>
