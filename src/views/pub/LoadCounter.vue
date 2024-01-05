<template>
  <div class="contents">
    <div v-for="counter in listNumberCount" :key="counter">
      <NumberCounter
        :numberSetFrom="counter.numberStart"
        :numberSetTo="counter.numberEnd"
      ></NumberCounter>
    </div>
  </div>
</template>

<script>
  import NumberCounter from '@/components/NumberCounter.vue'
  import { onMounted, ref } from 'vue'
  export default {
    components: { NumberCounter },
    setup() {
      const test1 = ref()
      const listNumberCount = ref([
        {
          numberStart: '200',
          numberEnd: '1000'
        },
        {
          numberStart: '100',
          numberEnd: '500'
        },
        {
          numberStart: '20',
          numberEnd: '100'
        }
      ])

      return {
        listNumberCount
      }
    }
  }
</script>
