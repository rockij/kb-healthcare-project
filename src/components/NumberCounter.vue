<template>
  <number
    class="numberCounter"
    :class="{ end: end }"
    ref="loadNumberCounter"
    :from="numberFrom"
    :to="numberTo"
    :duration="duration"
    :format="theFormat"
    animationPaused
    easing="Power4.easeOut"
    @complete="completed"
  />
  <div>
    <button class="btn green" @click="playNumberCount">Start</button>
    <button class="btn" @click="loadNumberCounter.pause()">Pause</button>
    <button class="btn blue" @click="restartNumberCount()">Restart</button>
  </div>
</template>
<script>
  import { onMounted, ref } from 'vue'
  export default {
    props: ['numberSetFrom', 'numberSetTo'],
    setup(props) {
      const numberFrom = ref(Number(props.numberSetFrom))
      const numberTo = ref(Number(props.numberSetTo))
      const duration = ref(3)
      const end = ref(false)
      const loadNumberCounter = ref()
      const theFormat = (number) => {
        return number.toFixed(0)
      }

      const completed = () => {
        end.value = true
      }

      const playNumberCount = () => {
        end.value = false
        end.value = true
          ? loadNumberCounter.value.restart()
          : loadNumberCounter.value.start()
      }

      const restartNumberCount = () => {
        end.value = false
        setTimeout(() => {
          loadNumberCounter.value.restart()
        }, 200)
      }

      return {
        numberFrom,
        numberTo,
        duration,
        end,
        loadNumberCounter,
        theFormat,
        completed,
        playNumberCount,
        restartNumberCount
      }
    }
  }
</script>
