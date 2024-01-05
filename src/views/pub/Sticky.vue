<template>
  <div class="contents">
    <div style="height: 700px; background-color: red"></div>
    <!-- stickyArea -->
    <div ref="stickyArea" :style="{ height: navHeight }">
      <div class="sticky">
        <!-- contents -->
        STICKY
        <!-- //contents -->
      </div>
    </div>
    <!-- //stickyArea -->
    <div style="height: 2000px; background-color: yellow"></div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue'
  export default {
    setup() {
      //sticky

      const stickyArea = ref()
      const navHeight = ref(null)
      onMounted(() => {
        if (stickyArea.value) {
          const sticky = document.querySelector('.sticky')
          navHeight.value = sticky.offsetHeight + 'px'
          const stickyObserver = new IntersectionObserver(
            ([e]) => {
              if (
                !e.isIntersecting &&
                sticky !== null &&
                stickyArea.value.getBoundingClientRect().bottom <
                  window.outerHeight
              ) {
                sticky.classList.add('isFixed')
              } else {
                sticky.classList.remove('isFixed')
              }
            },
            {
              root: null,
              threshold: [0]
            }
          )
          stickyObserver.observe(stickyArea.value)
        }
      })
      return { navHeight, stickyArea }
    }
  }
</script>

<style lang="scss" scoped></style>
