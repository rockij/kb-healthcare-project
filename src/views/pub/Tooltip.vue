<template>
  <div class="contents">
    <Tooltip v-model="toolTip1" @close="toolTip1 = false">
      툴팁메시지 왼쪽
    </Tooltip>

    <div class="text-center">
      <Tooltip v-model="toolTip2" @close="toolTip2 = false">
        툴팁메시지 입력 툴팁메시지 입력 툴팁메시지 입력 툴팁메시지 입력
        툴팁메시지 입력 툴팁메시지 입력
      </Tooltip>
    </div>

    <div class="text-right">
      <Tooltip
        v-model="toolTip3"
        @close="toolTip3 = false"
        :handleOption="'icon-big'"
      >
        툴팁메시지 오른쪽
      </Tooltip>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  import Tooltip from '@/components/Tooltip2.vue'
  export default {
    components: {
      Tooltip
    },
    setup() {
      const toolTip1 = ref(false)
      const toolTip2 = ref(false)
      const toolTip3 = ref(false)
      return {
        toolTip1,
        toolTip2,
        toolTip3
      }
    }
  }
</script>
