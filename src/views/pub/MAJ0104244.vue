<template>
  <div class="contents">
    <div class="evt-temp">
      <div class="evt-temp-img">
        <img
          src="/assets/images/event-ruleta1.png"
          alt="매일매일 룰렛 이벤트, 룰렛만 돌려도 포인트가 쏟아진다!, 2023.09.01 ~ 2023.09.30"
        />
      </div>
      <div class="evt-temp-cont ruleta">
        <div class="evt-bg">
          <img src="/assets/images/event-ruleta2.png" alt="" />
        </div>
        <div class="evt-ruleta">
          <div class="evt-ruleta-area" ref="ruleta">
            <div class="evt-ruleta-pin" ref="pin"></div>
            <div class="evt-ruleta-wheel-wrap" ref="spinner">
              <div class="evt-ruleta-wheel-border">
                <div class="evt-ruleta-wheel-shadow">
                  <div class="evt-ruleta-wheel" ref="ruletaWheel">
                    <div
                      class="pie-item"
                      :class="{ 'odd-last': index + 1 === 5 }"
                      v-for="(item, index) in pieList"
                      :key="index"
                      :style="`
                          border-bottom-width : ${pieBottom}px; 
                          border-right-width : ${
                            rSize / 2
                          }px; 
                          border-left-width : ${
                            rSize / 2
                          }px;
                          transform : rotate(${
                            pieDeg * (index + 1)
                          }deg);
                      `"
                    >
                      <span class="txt">{{ item.text }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="dot"
                v-for="(item, index) in pieList"
                :key="index"
                :style="`
                    transform : rotate(${
                      pieDeg * (index + 1)
                    }deg)
                `"
              >
                <span ref="dotItem"></span>
              </div>
            </div>
            <button
              v-if="isEvt"
              type="button"
              class="btn-ruleta start"
              @click="clickEvt"
            >
              START
            </button>
            <span v-if="!isEvt" class="btn-ruleta end"
              ><span>이벤트<br />종료</span></span
            >
          </div>
        </div>
      </div>
      <div class="evt-temp-img">
        <img
          src="/assets/images/event-attend2.png"
          alt="유의사항 : 이벤트 주관사의 사정으로 이벤트 내용이 변경되거나 조기 종료 될 수 있습니다."
        />
      </div>
    </div>
    <v-dialog v-model="dialog" class="modal-dialog common-popup">
      <v-card>
        <div class="modal-body">
          <div class="answer-items">
            <v-avatar size="100" color="#F8F8F8">
              <template v-if="isWin">축하</template>
              <template v-else>아쉬움</template>
            </v-avatar>
            <template v-if="isWin">
              <div class="text-point type-1 my-4">축하합니다</div>
              <div v-html="evtCase"></div>
              <div class="">
                지급된 선물은 선물함에서<br />
                확인 할 수 있습니다.
              </div>
            </template>
            <template v-else>
              <div class="text-point type-1 my-4">아쉬워요</div>
              <div>선착순 인원이 다 찼어요</div>
              <div class="">다음 이벤트를 기대해주세요</div>
            </template>
          </div>
        </div>
        <v-card-actions class="d-flex justify-center">
          <v-btn
            variant="flat"
            color="#3B4A65"
            class="btn-close"
            @click="dialog = false"
          >
            <img src="/assets/images/icon-close.svg" alt="" />
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { ref, reactive, onMounted } from 'vue'
  export default {
    setup() {
      const isWin = ref(true)
      const isEvt = ref(true)
      const dialog = ref(false)
      const ruleta = ref(null)
      const pin = ref(null)
      const dotItem = ref(null)
      const spinner = ref(null)
      const ruletaWheel = ref(null)
      const evtCase = ref(null)
      const pieList = reactive([
        {
          isWin: true,
          text: '5,000P',
          point: '5,000',
          percent: '5'
        },
        {
          isWin: false,
          text: '꽝',
          point: '0',
          percent: '25'
        },
        {
          isWin: true,
          text: '2,000P',
          point: '2,000',
          percent: '20'
        },
        {
          isWin: false,
          text: '꽝',
          point: '0',
          percent: '25'
        },
        {
          isWin: false,
          text: '3,000P',
          point: '3,000',
          percent: '15'
        },
        {
          isWin: false,
          text: '4,000P',
          point: '4,000',
          percent: '10'
        }
      ])

      const rSize = 278
      const pieNum = pieList.length
      const pieDeg = 360 / pieNum
      const pieSide = (180 - pieDeg) / 2
      const pieBottom = Math.tan((pieSide * Math.PI) / 180) * (rSize / 2)

      const wheelSet = () => {
        ruletaWheel.value.style.width = `${rSize}px`
        ruletaWheel.value.style.height = `${rSize}px`
        updateScale()
      }

      const updateScale = () => {
        const windowWidth = window.innerWidth
        const ruletaWidth = ruleta.value.offsetWidth
        if (windowWidth < ruletaWidth + 40) {
          const scale = windowWidth / (ruletaWidth + 40)
          ruleta.value.style.transform = `scale(${scale})`
        } else {
          ruleta.value.removeAttribute('style')
        }
      }

      const overlapping = (a, b) => {
        const rect1 = a.getBoundingClientRect()
        const rect2 = b.getBoundingClientRect()
        return (
          rect1.left < rect2.right &&
          rect1.right > rect2.left &&
          rect1.top < rect2.bottom &&
          rect1.bottom > rect2.top
        )
      }

      const selNum = () => {
        const random = Math.random() * 100
        let cPercent = 0
        for (const option of pieList) {
          cPercent += Number(option.percent)
          if (random <= cPercent) {
            return pieList.indexOf(option) + 1
          }
        }
      }

      const clickEvt = () => {
        const num = selNum()
        const degTotal = 360 * (pieNum - 1) - pieDeg * num
        spinner.value.classList.remove('spin-blur')
        spinner.value.removeAttribute('style')
        const text = pieList.filter((i, index) => index === num - 1)
        evtCase.value = text[0].text + '이 지급되었습니다.'
        setTimeout(() => {
          spinner.value.classList.add('spin-blur')
          spinner.value.style.transform = `rotate(${degTotal}deg)`
          spinner.value.style.transition = 'all 6s cubic-bezier(0,.99,.44,.99)'
        }, 10)
        dotItem.value.forEach((pie, i) => {
          let spinCount = 0
          const style = window.getComputedStyle(pie, null)
          const transform = style.getPropertyValue('transform')
          const spinInterval = setInterval(() => {
            spinCount++
            if (spinCount === 600) {
              clearInterval(spinInterval)
              // 룰렛종료후 실행
              dialog.value = true
              isEvt.value = false
            }
            if (overlapping(pie, pin.value)) {
              pin.value.classList.add('spin-pin')
              setTimeout(() => {
                pin.value.classList.remove('spin-pin')
              }, 150)
            }
          }, 10)
        })
      }

      onMounted(() => {
        wheelSet()
        window.addEventListener('resize', updateScale)
      })

      return {
        isWin,
        isEvt,
        dialog,
        ruleta,
        pin,
        dotItem,
        spinner,
        ruletaWheel,
        pieList,
        rSize,
        pieNum,
        pieDeg,
        pieSide,
        pieBottom,
        wheelSet,
        updateScale,
        overlapping,
        selNum,
        clickEvt,
        evtCase
      }
    }
  }
</script>

<style lang="scss" scoped></style>
