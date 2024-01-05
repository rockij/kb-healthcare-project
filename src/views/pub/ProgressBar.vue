<template>
  <div ref="progress" class="progress-box">
    <div class="progress-bar" :data-num="dataNum" :class="barClass">
      <div class="titbox">
        <strong class="stit" :class="stitClass">{{ dataName }}</strong>
        <strong v-if="percentFix === true" class="ml-auto"
          ><span class="fs-16">{{ bar }}</span
          ><slot name="numText2"></slot
        ></strong>
      </div>
      <div class="bar" :class="barOn" :style="`width:${bar}%`">
        <span
          v-if="!percentFix"
          class="tooltip-balloon arrow-bottom num"
          :class="numClass"
          :style="`right:-${numAreaWidth}px`"
          ref="numArea"
          ><slot name="numText1"></slot
          ><span v-if="countValueOn === true" :class="countClass">{{
            countValue
          }}</span
          ><slot name="numText2"></slot
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref, onMounted, onUnmounted } from 'vue'
  export default {
    props: {
      dataNum: {
        type: Number,
        default: null
      },
      dataName: {
        type: String,
        default: null
      },
      stitClass: {
        type: String,
        default: null
      },
      barClass: {
        type: String,
        default: null
      },
      countClass: {
        type: String,
        default: null
      },
      percentFix: {
        type: Boolean,
        default: false
      },
      ready: {
        type: Boolean,
        default: false
      },
      noCount: {
        type: Boolean,
        default: true
      },
      minMax: {
        type: Boolean,
        default: false
      },
      countValueOn: {
        type: Boolean,
        default: true
      }
    },
    emits: ['update'],
    setup(props) {
      const progress = ref()
      const bar = ref()
      const barOn = ref()
      const countValue = ref(0)
      const numClass = ref()
      const numArea = ref()
      const excuted = ref(false)
      const initialRate = ref(0)
      const numAreaLeft = ref(0)
      const numAreaWidth = ref()
      function minMaxFunc() {
        if (props.dataNum >= 0 && props.dataNum <= 10) {
          numClass.value = 'fix-l'
          numAreaWidth.value = numArea.value.offsetWidth / 2 - 20
        } else if (props.dataNum > 85) {
          numClass.value = 'fix-r'
        }
      }
      function numberAnimation() {
        const targetRate = parseInt(props.dataNum)
        let numAnimation = setInterval(function () {
          initialRate.value++
          if (initialRate.value == targetRate) {
            clearInterval(numAnimation)
          }
          barOn.value = 'on'
          bar.value = initialRate.value
          numAreaLeft.value = initialRate.value
          countValue.value = `${initialRate.value}`
          if (targetRate == 0) {
            clearInterval(numAnimation)
            bar.value = 0
            countValue.value = 0
          }
          // 숫자 카운트 모션X
          if (props.noCount === false) {
            countValue.value = targetRate
          }
          minMaxFunc()
        }, 25) // 대략 1초
      }
      function scroll() {
        if (this.scrollTop > progress.value.offsetTop - 400) {
          if (!excuted.value) {
            numberAnimation()
            excuted.value = true
          }
        }
        if (
          Math.ceil(this.scrollTop) + this.clientHeight >=
          this.scrollHeight
        ) {
          if (!excuted.value) {
            numberAnimation()
            excuted.value = true
          }
        }
        //minMaxFunc()
      }
      onMounted(() => {
        if (props.ready === true) {
          numberAnimation()
        } else {
          document.querySelector('#mainWrap').addEventListener('scroll', scroll)
        }
      })
      onUnmounted(() => {
        document
          .querySelector('#mainWrap')
          .removeEventListener('scroll', scroll)
      })
      return {
        progress,
        bar,
        barOn,
        countValue,
        numClass,
        numArea,
        initialRate,
        scroll,
        excuted,
        numberAnimation,
        numAreaLeft,
        numAreaWidth
      }
    }
  }
</script>
