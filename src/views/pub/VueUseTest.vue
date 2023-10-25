<template>
  <div class="contents">
    <div v-bind="containerProps" style="height: calc(100dvh - 64px)">
      <div v-bind="wrapperProps">
        <ul class="list-faq">
          <li v-for="item in list" :key="item.id">{{ item.data.path }}</li>
        </ul>
      </div>
    </div>

    <h3>mouse: {{ mouse.x }}</h3>
    <h3>mouse: {{ mouse.y }}</h3>
    <h3>{{ counter }}</h3>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  import { useMouse, useCounter, useVirtualList } from '@vueuse/core'
  export default {
    setup() {
      const { list, containerProps, wrapperProps } = useVirtualList(
        [
          {
            id: 1,
            path: 'Survey1'
          },
          {
            id: 2,
            path: 'Survey2'
          }
        ],
        {
          itemHeight: 40
        }
      )
      const { x, y } = useMouse()
      const mouse = reactive(useMouse())
      const { count, inc, des } = useCounter()
      const counter = reactive(useCounter())
      const target = ref(null)
      //   const { x2, y2, isOutside } = useMouseInElement(target)
      return {
        mouse,
        counter,
        // x2,
        // y2,
        // isOutside,
        list,
        containerProps,
        wrapperProps
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scroller {
    position: absolute;
    top: 100%;
    left: 100%;
    width: 10000px;
    height: 10000px;
  }
</style>
